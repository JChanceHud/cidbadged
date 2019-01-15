# dnslink-cidbadge [![Build Status](https://travis-ci.org/jchancehud/dnslink-cidbadge.svg?branch=master)](https://travis-ci.org/jchancehud/dnslink-cidbadge) [![](https://images.microbadger.com/badges/image/jchancehud/dnslink-cidbadge.svg)](https://hub.docker.com/r/jchancehud/dnslink-cidbadge/ "See docker hub for more information")

A package for dynamically serving badges based on dnslinked txt records.

## Usage

Docker container available at [`jchancehud/dnslink-cidbadge`](https://hub.docker.com/r/jchancehud/dnslink-cidbadge/) with a web server running on port 3000.

Example cid for [commontheory.io](https://commontheory.io):

[![cid](https://dnslink-cid-badge.commontheory.io/commontheory.io)](https://dnslink-cid-badge.commontheory.io/commontheory.io?redirect=true)

## Redirecting

The http server will `301` redirect to the ipfs gateway url when passed the query parameter `redirect=true`.

## Note

This package is not maintained by, or affiliated with IPFS or Protocol Labs.
