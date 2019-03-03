# cidbadged

A zeit lambda for accessing content identifier badges. See [cidbadge](https://github.com/jchancehud/cidbadge) for examples of badges.

## Example

Example cid for [commontheory.io](https://commontheory.io): [![cid](https://cidbadged.ctheory.io/commontheory.io)](https://cidbadged.ctheory.io/commontheory.io?redirect=true)

## API

`/:cid` - Returns a badge for the supplied cid

`/:domain` - Resolves for a dnslinked cid record

## Redirecting

The http server will `301` redirect to the ipfs gateway when passed the query parameter `redirect=true`.

## Note

This package is not maintained by, or affiliated with IPFS or Protocol Labs.
