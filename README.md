# BIGWI HOUSE  website (React + TypeScript)

Source: BIGWI HOUSE Corporate & Capability Profile, DataSphere Consulting Ltd. (Aug 1, 2026).

## Stack

- React 18 + TypeScript
- Vite (dev server / bundler)
- React Router v6 (client-side routing)
- Tailwind CSS (design tokens in `tailwind.config.ts`)

## Run it in VS Code

1. Open this folder in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite will print a local URL (usually `http://localhost:5173`)  open it in your browser. Hot reload is on, so edits in `src/` show up immediately.
4. Build for production when you're ready to deploy:
   ```bash
   npm run build
   npm run preview   # sanity-check the production build locally
   ```

Recommended VS Code extensions: **Tailwind CSS IntelliSense** and **ES7+ React/Redux/React-Native snippets** (both optional, just nice to have).

## Project structure

```
src/
  components/       Header, Footer, Card, FormField, Modal, ProposalModal
  content/          bigwiContent.ts  all copy pulled from the source document
  hooks/            usePageFocus.ts  accessible focus-on-navigate
  pages/            Home, About, Services, Approach, Contact, NotFound
  App.tsx           Route table + layout shell
  main.tsx          Entry point, router provider
  index.css         Tailwind directives + base styles
```

## Updating content

All copy from the source document lives in `src/content/bigwiContent.ts` as typed
arrays/objects (`services`, `problems`, `competitiveAdvantage`, `targetClients`,
`vision`, `mission`, `orgStructure`, `growthPhases`). Edit that file  the pages
re-render automatically. If the profile document is revised, this is the one
file to update.

## Wiring the forms

Both forms (`src/pages/Contact.tsx` and `src/components/ProposalModal.tsx`) are
currently mocked  they validate client-side and show a success message, but
don't send anything. To connect them to a real backend:

1. Replace the `// TODO` in each `handleSubmit` with a `fetch()` call to your
   endpoint (a serverless function, a form service like Formspree/Getform, or
   your own API).
2. Keep the existing `status` state (`idle` / `success` / `error`) so the UI
   feedback keeps working  just set it based on the response instead of
   always succeeding.

## Accessibility notes already in place

- Skip link to main content
- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Visible focus rings (`:focus-visible`), respected across custom components
- Modal: focus trap, `Escape` to close, focus returned to the trigger on close
- Route changes move focus to the new page's `<h1>` (`usePageFocus` hook)
- `prefers-reduced-motion` respected in `index.css`

## Next steps / ideas

- Swap the hardcoded content file for a headless CMS (Sanity, Contentful) if
  the team will update copy often without a code deploy
- Add automated accessibility checks (`@axe-core/react` in dev, or a CI step
  with `pa11y`)
- Add a sitemap/robots.txt and per-page `<title>`/meta tags (e.g. via
  `react-helmet-async`) once the site has a real domain
