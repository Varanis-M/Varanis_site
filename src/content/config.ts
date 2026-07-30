import { defineCollection, z } from 'astro:content';

// ---------------------------------------------------------------------------
// PROJECT PAGES — src/content/projects/
// Governance is enforced by the schema itself:
//  - `status` admits only active | completed. Manuscript states are rejected.
//  - There is no `target_venue` field, by design.
//  - `team` holds display names; there are no individual member pages.
// ---------------------------------------------------------------------------
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_pt: z.string().optional(),
    title_en: z.string().optional(),
    // `slug` is reserved by Astro; routing uses `permalink`.
    permalink: z.string(),
    code: z.string(),
    status: z.enum(['active', 'completed']),
    pillars: z.array(z.enum(['P1', 'P2', 'P3', 'P4', 'P5'])).min(1),
    featured: z.boolean().default(false),
    language: z.enum(['en', 'pt']).default('en'),
    updated: z.coerce.date(),
    areas: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    collaborators: z
      .array(z.object({ name: z.string(), affiliation: z.string() }))
      .default([]),
    team: z.array(z.string()).default([]),
  }),
});

// ---------------------------------------------------------------------------
// HOME PAGE COPY — src/content/site/home.yaml
// All visible text on the home page. Validated at build time.
// ---------------------------------------------------------------------------
const link = z.object({ label: z.string(), href: z.string() });

const site = defineCollection({
  type: 'data',
  schema: z.object({
    nav: z.array(link),
    profiles: z.array(
      z.object({
        label: z.string(),
        icon: z.enum(['orcid', 'researchgate', 'scholar', 'lattes', 'linkedin', 'github']),
        href: z.string(),
      })
    ),
    hero: z.object({
      eyebrow: z.string(),
      name: z.string(),
      tagline: z.string(),
      body: z.string(),
      highlight: z.string().optional(),
      cta_primary: link,
      cta_secondary: link,
      equation: z.string(),
    }),
    about: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      portrait_caption: z.string(),
      paragraphs: z.array(z.string()).min(1),
    }),
    research: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      question: z.string(),
      link: link,
      lines: z
        .array(
          z.object({
            // Only the five canonical pillars are publishable.
            tag: z.enum(['P1', 'P2', 'P3', 'P4', 'P5']),
            title: z.string(),
            body: z.string(),
          })
        )
        .min(1),
    }),
    group: z.object({
      eyebrow: z.string(),
      banner: z.string(),
      banner_alt: z.string(),
      intro: z.string(),
      members: z.array(
        z.object({
          photo: z.string().optional(),
          name: z.string(),
          role: z.string(),
          topic: z.string(),
          lead: z.boolean().default(false),
          badge: z.string().optional(),
        })
      ),
      open_call: z.object({
        eyebrow: z.string(),
        headline: z.string(),
        body: z.string(),
        cta: link,
      }),
    }),
    projects: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          code: z.string(),
          title: z.string(),
          href: z.string().optional(),
          description: z.string(),
          meta: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
        })
      ),
    }),
    publications: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      intro: z.string(),
      flagship_note: z.string(),
      links: z.array(link),
      stats: z.array(z.object({ n: z.string(), label: z.string() })),
      groups: z.array(
        z.object({
          tag: z.enum(['P1', 'P2', 'P3', 'P4', 'P5']),
          line: z.string(),
          items: z.array(
            z.object({
              year: z.string(),
              venue: z.string(),
              type: z.string(),
              title: z.string(),
              authors: z.string(),
              flagship: z.boolean().default(false),
              doi: z.string().optional(),
            })
          ),
        })
      ),
    }),
    contact: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      body: z.string(),
      email: z.string(),
      location: z.string(),
      profiles_label: z.string(),
      equation: z.string(),
    }),
    footer: z.object({ left: z.string(), right: z.string() }),
  }),
});

export const collections = { projects, site };
