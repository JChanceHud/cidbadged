import dnslink from 'dnslink';
import http from 'http';
import url from 'url';

const server = http.createServer(async (req, res) => {
  try {
    const params = url.parse(req.url, true);
    // Slice the slash off
    const domain = params.path.split('/').filter(i => !!i)[0];
    if (!domain) {
      res.statusCode = 400;
      res.end('supply a domain as the first path parameter');
      return;
    }
    const cid = (await dnslink.resolve(domain)).replace('/ipfs/', '');
    const display = `${cid.slice(0, 6)}~${cid.slice(-7, -1)}`
    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(getBadge('cid', display));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`internal error: ${err}`);
  }
});

server.listen(3000, () => console.log('Serving badges on port 3000'));

function getBadge(left: string, right: string) {
  const rightWidth = right.length * 9;
  const leftWidth = left.length * 9;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${leftWidth + rightWidth}" height="20">
  <linearGradient id="b" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="a">
    <rect width="${rightWidth + leftWidth}" height="20" rx="3" fill="#fff"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#555" d="M0 0h${leftWidth}v20H0z"/>
    <path fill="#2EC8F7" d="M${leftWidth} 0h${rightWidth}v20H${leftWidth}z"/>
    <path fill="url(#b)" d="M0 0h${rightWidth + leftWidth}v20H0z"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11">
    <text x="${leftWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${left}</text>
    <text x="${leftWidth / 2}" y="14">${left}</text>
    <text x="${leftWidth + rightWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${right}</text>
    <text x="${leftWidth + rightWidth / 2}" y="14">${right}</text>
  </g>
</svg>`;
}
