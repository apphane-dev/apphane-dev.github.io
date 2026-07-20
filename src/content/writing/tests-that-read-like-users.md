---
example: true
title: 'Example article: Tests should read like a user telling a story'
description: A placeholder opinion piece on writing tests around roles and accessible names instead of implementation details.
kind: article
thesis: The easiest test to write should also be the one that reflects what a user perceives.
publishedAt: 2026-07-09
authors: [guria]
topics: [testing, accessibility]
projects: [kahraman]
---

> **This is a seed example post.** It stands in for a full-length *article* and
> can be deleted once real writing lands.

Most test suites are written in the vocabulary of the framework: query a test id,
assert a class, poke at internal state. They pass, they're brittle, and they
describe a machine rather than a person.

## The thesis

An article carries a durable idea, so it opens by stating it plainly: **the
easiest test to write should also be the one that reflects what a user
perceives.** Everything after earns that claim.

When a locator reaches for a role and an accessible name, three things happen at
once. The test becomes readable, because it says what a person would say. It
becomes robust, because roles and names change far less often than markup. And it
becomes an accessibility check for free, because a control the test can't name is
a control a screen reader can't either.

## What this asks of the tools

This is the bet behind Kahraman: make the accessible path the path of least
resistance, and good tests follow without a policy document. Articles like this
one can point at a project without being an announcement for it.
