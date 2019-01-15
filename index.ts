import dnslink from 'dnslink';
import http from 'http';
import url from 'url';
import cidbadge from 'cidbadge';

/**
 * Serve a badge that shows a partial cid for a dnslinked domain
 **/
http.createServer(async (req, res) => {
  try {
    const params = url.parse(req.url, true);
    // Extract the first path parameter
    const domain = params.pathname.split('/').filter(i => !!i)[0];
    if (!domain) {
      res.statusCode = 400;
      res.end('supply a domain as the first path parameter');
      return;
    }
    const cid = (await dnslink.resolve(domain)).replace('/ipfs/', '');
    const href = `https://ipfs.io/ipfs/${cid}`;
    if (params.query.redirect === 'true') {
      // We're redirecting to the resolved cid
      res.statusCode = 301;
      res.setHeader('Location', href);
      res.end();
      return;
    }
    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(cidbadge(cid, { href }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`internal error: ${err}`);
  }
}).listen(3000, () => console.log('Serving badges on port 3000'));
