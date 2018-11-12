import { resolve } from 'dnslink';
import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  console.log(parsed);
  res.end();
});

server.listen(3000, () => console.log('Serving badges on port 3000'));
