# Security policy

This repository is the ormos landing site: a static site that ships no
JavaScript. Its security surface is small, but a public repo still needs a
private channel for reports — a defaced page, a supply-chain issue in the
build, or a leaked credential all belong here rather than in a public issue.

## Reporting a vulnerability

Please report vulnerabilities **privately** — not in a public issue, pull
request, or discussion, where the details would be visible before a fix exists.

Use GitHub's private vulnerability reporting: open the **Security** tab of this
repository and choose **Report a vulnerability**. That opens a private advisory
visible only to you and the maintainers.

Please include what an attacker can do, the steps to reproduce it, and the
commit or deployed URL you observed it on. You will get an acknowledgement, and
the fix and disclosure will be coordinated with you through the advisory.

## Supported versions

The deployed site is built from `main`. Fixes are made there; there is no
supported older version.
