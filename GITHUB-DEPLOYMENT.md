# GitHub to the existing Cloudflare Worker

Repository root: the contents of the `schritt` project folder, including `dist/` and `wrangler.jsonc`.
Do not upload the user's course books, local browser profiles, credentials, or unrelated workspace files.

Cloudflare: Workers & Pages → bold-wave-4ae8 → Settings → Builds → Connect.
Choose the GitHub repository, then:

- Production branch: `main`
- Root directory: repository root
- Build command: `node verify-interface.cjs && node verify-lessons.cjs && node verify-academy.cjs`
- Deploy command: `npx wrangler deploy`

The Wrangler name must remain `bold-wave-4ae8` to target the existing Worker.
The public address remains https://bold-wave-4ae8.khaledgemy53.workers.dev/.
Authorize Cloudflare's GitHub integration for this repository in the browser.
Successful pushes to the configured production branch trigger a build and deployment; failed checks prevent deployment.

Preparation is local only. No GitHub repository or Cloudflare Git integration has been created by this configuration change.
