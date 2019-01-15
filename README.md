# cidbadged [![Build Status](https://travis-ci.org/jchancehud/cidbadged.svg?branch=master)](https://travis-ci.org/jchancehud/cidbadged) [![](https://images.microbadger.com/badges/image/jchancehud/cidbadged.svg)](https://hub.docker.com/r/jchancehud/cidbadged/ "See docker hub for more information")

A http server for accessing content identifier badges. See [cidbadge](https://github.com/jchancehud/cidbadge) for examples of badges.

## Usage

Docker container available at [`jchancehud/cidbadged`](https://hub.docker.com/r/jchancehud/cidbadged/) with a web server running on port 3000.

Example cid for [commontheory.io](https://commontheory.io):

[![cid](https://dnslink-cid-badge.commontheory.io/commontheory.io)](https://dnslink-cid-badge.commontheory.io/commontheory.io?redirect=true)

## API

`/:cid` - Returns a badge for the supplied cid
`/:domain` - Resolves for a dnslinked cid record

## Redirecting

The http server will `301` redirect to the ipfs gateway when passed the query parameter `redirect=true`.

## Note

This package is not maintained by, or affiliated with IPFS or Protocol Labs.
