# varanis.cc

Site of **Prof. Marcus Varanis** and the **Nonlinear Dynamics and Signal Processing Group**
(Instituto de Física — INFI/UFMS).

Astro + React + Tailwind + MDX. Content lives in Markdown; the design layer is not
touched to publish.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site
```

Node 20 or newer.

---

## Where things live

```
public/
  photos/              member and portrait images (referenced by src/photos.js)
  group-banner.svg     group masthead used in section 03
  CNAME                custom domain for GitHub Pages
src/
  components/Home.jsx  the single-page home (hero, about, research, group,
                       projects, publications, contact)
  photos.js            maps photo keys to /photos/* paths
  content/
    config.ts          Zod schemas — validates every content file at build time
    projects/          project pages (EN), pt/ holds the PT-BR versions
  layouts/
    BaseLayout.astro   html shell, meta tags, fonts, KaTeX
  pages/
    index.astro              /
    projects/index.astro     /projects/
    projects/[slug].astro    /projects/<permalink>/
  styles/global.css    palette, type trio, prose styles
PROJECT-PAGE-TEMPLATE.md     standard model for a new project page
```

---

## Publishing a new project page

1. Copy `PROJECT-PAGE-TEMPLATE.md` into `src/content/projects/` and rename it to
   the permalink (e.g. `nonlinear-flutter.md`).
2. Fill in the frontmatter and the eight sections.
3. Add the PT-BR version under `src/content/projects/pt/` with the same filename
   and `language: "pt"`.
4. Commit and push. The route `/projects/<permalink>/` is generated
   automatically — no code changes.

The build **fails loudly** if the frontmatter is wrong. That is deliberate: the
schema in `src/content/config.ts` enforces content governance.

### Governance enforced by the schema

- `status` accepts only `active` or `completed`. Manuscript states
  (`in-preparation`, `submitted`, `under-review`) are rejected by the build.
- There is no `target_venue` field. Submission targets are not published.
- Public technical project names only — no internal codenames.
- `team` holds display names. There are no individual member pages; members are
  represented through the projects they work on.
- `pillars` accepts only `P1`–`P5`.

---

## Replacing a photo

Drop the new file in `public/photos/` and point the matching key in
`src/photos.js` at it. Keys are referenced by `src/components/Home.jsx`.

---

## Editing home page text

**Everything written on the home page lives in one file:**

```
src/content/site/home.yaml
```

Hero, About, the five research pillars, the group roster, the open call, the four
project cards, publication statistics and entries, Contact, and the footer. Open
it, edit the text, commit. No JSX involved.

The file is organized in the same order as the page, with a comment header on
each section. Prose uses the `|` block marker:

```yaml
contact:
  headline: "Get in touch"
  body: |
    I welcome inquiries from prospective graduate students and researchers
    interested in collaboration.
```

### Common edits

| Task | Where in `home.yaml` |
| ---- | -------------------- |
| Add or remove a group member | `group.members` |
| Mark a lead researcher | add `lead: true` to that member |
| Add a publication | the relevant `publications.groups[].items` |
| Mark a first-author work | add `flagship: true` to that entry |
| Update publication counts | `publications.stats` |
| Change the open call | `group.open_call` |
| Edit a project card | `projects.items` |

### The build protects the content rules

`src/content/config.ts` validates this file on every build. It **fails the
build** rather than publishing something off-standard. Verified behaviour:

- `research.lines[].tag` outside `P1`–`P5` → build error.
- A missing required field (e.g. `hero.tagline`) → build error naming the field.
- Project pages with `status: under-review` → build error.

Adding a member is therefore safe: if a required field is forgotten, the deploy
stops with a message pointing at the exact line, instead of publishing a broken
card.

### Photos

`group.members[].photo` holds a key from `src/photos.js`, not a path. Omit
`photo` entirely and the card falls back to the member's initials on navy.

---

## Deploy — GitHub Pages

1. Create a repository and push this project to the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push. `.github/workflows/deploy.yml` builds and publishes on every push to
   `main`.

### Custom domain — varanis.cc registered at GoDaddy

Hosting is GitHub Pages. GoDaddy is used **only as registrar and DNS**. There is
no need for GoDaddy web hosting: the site is static, and the Actions workflow
publishes it on every push.

**Order matters.** Add the domain in GitHub *before* changing DNS, otherwise the
domain can be claimed by someone else's Pages site in the interval.

**Step 1 — GitHub.** Settings → Pages → **Custom domain** → `varanis.cc` → Save.

> Important: this project deploys through a **GitHub Actions workflow**, not from
> a branch. In that mode GitHub ignores any `CNAME` file in the repository, so
> `public/CNAME` alone will *not* set the domain. The Settings → Pages field is
> what counts. The file is kept only as documentation.

**Step 2 — GoDaddy DNS.** Domain Portfolio → `varanis.cc` → DNS → Manage Zones.

Delete the default parking record (usually an A record for `@` pointing at a
GoDaddy IP, and sometimes a CNAME for `www`). Then add:

| Type  | Name | Value                  | TTL    |
| ----- | ---- | ---------------------- | ------ |
| A     | @    | 185.199.108.153        | 1 hour |
| A     | @    | 185.199.109.153        | 1 hour |
| A     | @    | 185.199.110.153        | 1 hour |
| A     | @    | 185.199.111.153        | 1 hour |
| CNAME | www  | `<user>.github.io`     | 1 hour |

Optional IPv6 (add *alongside* the A records, never instead of them):

| Type | Name | Value                |
| ---- | ---- | -------------------- |
| AAAA | @    | 2606:50c0:8000::153  |
| AAAA | @    | 2606:50c0:8001::153  |
| AAAA | @    | 2606:50c0:8002::153  |
| AAAA | @    | 2606:50c0:8003::153  |

**Do not touch** `MX`, `TXT`/SPF, `DKIM` or any record used by email. Changing
those breaks mail on the domain. Only the apex `A` records and the `www` CNAME
are involved here.

Also avoid GoDaddy's **Forwarding** feature for this — it is not a substitute for
DNS records and will conflict with HTTPS.

**Step 3 — HTTPS.** Wait for DNS to resolve (minutes to a few hours), then return
to Settings → Pages and tick **Enforce HTTPS**. If the checkbox is greyed out,
DNS has not propagated yet.

Check propagation from a terminal:

```bash
dig varanis.cc +short          # expect the four 185.199.x.153 addresses
dig www.varanis.cc +short      # expect <user>.github.io
```

**Certificate gotcha.** GitHub issues the certificate once DNS resolves. If you
set up `www` first and the apex later (or vice versa), the certificate may cover
only one of them. Fix: clear the Custom domain field, Save, re-enter it, Save —
this forces the certificate to be regenerated for both.

### Netlify alternative

Connect the repository, build command `npm run build`, publish directory `dist`.
No workflow file needed.
