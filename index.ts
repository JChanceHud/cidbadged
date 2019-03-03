import dnslink from 'dnslink';
import url from 'url';
import cidbadge from 'cidbadge';
import http from 'http';

/**
 * Serve a badge that shows a partial cid for a dnslinked domain
 **/
module.exports = (async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const params = url.parse(req.url, true);
    // Extract the first path parameter
    const domainOrCid = params.pathname.split('/').filter(i => !!i)[0];
    if (!domainOrCid) {
      res.statusCode = 400;
      res.end('supply a domain or cid as the first path parameter');
      return;
    }
    // Do a dirty check to see if it's a cid or a domain
    // Check if there's a period in the string
    const cid = domainOrCid.indexOf('.') !== -1
      ? (await dnslink.resolve(domainOrCid)).replace('/ipfs/', '')
      : domainOrCid;
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
});
