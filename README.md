# dnslink-cid-badge [![Build Status](https://travis-ci.org/common-theory/dnslink-cid-badge.svg?branch=master)](https://travis-ci.org/common-theory/dnslink-cid-badge) [![](https://images.microbadger.com/badges/image/ctheory/alpine-ipfs.svg)](https://hub.docker.com/r/ctheory/dnslink-cid-badge/ "See docker hub for more information")

A package for dynamically serving badges based on dnslinked txt records.

## Usage

Docker container available at [`@ctheory/dnslink-cid-badge`](https://hub.docker.com/r/ctheory/dnslink-cid-badge/) with a web server running on port 3000.

Example cid for [commontheory.io](https://commontheory.io):

[![cid](https://dnslink-cid-badge.commontheory.io/commontheory.io)](https://dnslink-cid-badge.commontheory.io/commontheory.io?redirect=true)

## Redirecting

The badge cid will redirect to the ipfs gateway url when passed the query parameter `redirect=true`.

## Note

This package is not maintained by, or affiliated with IPFS or Protocol Labs.
