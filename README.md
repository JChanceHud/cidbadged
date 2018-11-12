# dnslink-cid-badge [![Build Status](https://travis-ci.org/common-theory/dnslink-cid-badge.svg?branch=master)](https://travis-ci.org/common-theory/dnslink-cid-badge)

A package for dynamically serving badges based on dnslinked txt records.

Example cid for [commontheory.io](https://commontheory.io):

[![cid](https://dnslink-cid-badge.commontheory.io/commontheory.io/badge.svg)](https://commontheory.io)

## Usage

Pull the docker image [`@ctheory/dnslink-cid-badge`](https://hub.docker.com/r/ctheory/dnslink-cid-badge/) and run with port 3000 exposed. Pass the domain to be evaluated as the first path parameter like this: `https://localhost:3000/commontheory.io`.
