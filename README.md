# خطوة — Schritt German Trainer

An Arabic-first German learning website with original practice content for A1–B2.

## Run locally

Requires Node.js. Run `node server.cjs`, then open http://127.0.0.1:8765.
The web source is in `dist/`; no build step or client dependencies are required.

## Learning tools

- 21 topic lessons, including all twelve months and four seasons.
- 294 vocabulary entries with Arabic/English meanings, including 83 verbs.
- Four tense tables, pronoun audio, construction/preposition examples and 47 grammar topics.
- Daily plans, spaced practice, an exam practice center and links to official Goethe materials.
- Mobile navigation, bilingual text layout, per-word speech and approximate pronunciation hints.

## Checks

```sh
node verify-interface.cjs
node verify-lessons.cjs
node verify-academy.cjs
```

These checks exercise data and application logic with a simulated DOM. They do not certify visual layout, microphone behavior or pronunciation quality on real devices.

## Deployment

See [GITHUB-DEPLOYMENT.md](GITHUB-DEPLOYMENT.md) to connect this repository to the existing Cloudflare Worker. `wrangler.jsonc` serves `dist/` as static assets.

Current site: https://bold-wave-4ae8.khaledgemy53.workers.dev/

Connecting the repository in Cloudflare is a separate account setup step; pushing source alone does not establish that connection.

## Data, audio and educational limits

Learning progress is stored per browser in localStorage, with export/import controls. There is no account-based cross-device sync or server-side AI assessment. Speaking recordings are temporary and locally handled.

Speech synthesis depends on available German voices. Approximate Arabic/English pronunciation hints have incomplete coverage and are not a substitute for listening. Four external phonetic recordings load on request from Wikimedia Commons; attribution and CC BY-SA 3.0 license links appear in the pronunciation lab.

Practice questions are original, compact exercises, not calibrated or official Goethe examinations. Writing and speaking require self or teacher assessment. Links to Goethe, DW, Klett, dict.cc and other sources do not imply affiliation or endorsement. No course-book PDFs or dictionary databases are bundled.
