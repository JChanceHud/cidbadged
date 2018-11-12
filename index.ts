import dnslink from 'dnslink';
import http from 'http';
import url from 'url';

const server = http.createServer(async (req, res) => {
  try {
    const params = url.parse(req.url, true).query as {
      domain: string,
      link?: string
    };
    if (!params.domain) {
      res.statusCode = 400;
      res.end('supply a domain using ?domain=commontheory.io');
      return;
    }
    const cid = await dnslink.resolve(params.domain);
    const link = params.link || `https://ipfs.io/ipfs/${cid.replace('/ipfs/', '')}`;
    const display = cid.replace('/ipfs/', '').slice(0, 6);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(getBadge(link, 'latest cid', display));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`internal error: ${err}`);
  }
});

server.listen(3000, () => console.log('Serving badges on port 3000'));

function getBadge(link: string, left: string, right: string) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="114" height="20">
  <a href="${link}">
    <linearGradient id="b" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="a">
      <rect width="114" height="20" rx="3" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
      <path fill="#555" d="M0 0h62v20H0z"/>
      <path fill="#2EC8F7" d="M62 0h52v20H62z"/>
      <path fill="url(#b)" d="M0 0h114v20H0z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11">
      <text x="31" y="15" fill="#010101" fill-opacity=".3">${left}</text>
      <text x="31" y="14">${left}</text>
      <text x="87" y="15" fill="#010101" fill-opacity=".3">${right}</text>
      <text x="87" y="14">${right}</text>
    </g>
  </a>
</svg>`;
}
