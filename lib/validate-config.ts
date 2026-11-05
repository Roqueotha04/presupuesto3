import { z } from "zod";
import { GLYPH_NAMES, SECTION_IDS, type SiteConfig } from "@/config/site.types";

const localized = z.object({ es: z.string().min(1), en: z.string().min(1) });
const glyph = z.enum(GLYPH_NAMES);
const sectionId = z.enum(SECTION_IDS);

const chapterHeading = z.object({
  number: z.string().min(1).optional(),
  title: localized,
  intro: localized.optional(),
});

const glyphItem = z.object({ glyph, title: localized, description: localized });
const labeledNote = z.object({ glyph, label: localized, body: localized });
const localizedImage = z.object({ src: z.string().min(1), alt: localized });
const configSchema = z.object({
  site: z.object({
    url: z.string().min(1, "site.url is required"),
    defaultLocale: z.enum(["es", "en"]),
  }),
  company: z.object({
    name: z.string().min(1),
    tagline: localized,
    logo: z.string().min(1),
    website: z.string().url(),
    websiteLabel: z.string().min(1),
  }),
  client: z.object({
    name: z.string().min(1),
    city: z.string().min(1),
    handle: z.string().min(1),
    initials: z.string().min(1).max(3),
    wordmark: z.object({ lead: z.string().min(1), tail: z.string().min(1) }),
  }),
  sections: z.array(sectionId).min(1, "At least one section is required"),
  navigation: z.array(sectionId),
  hero: z.object({
    eyebrow: localized,
    titleLead: localized,
    titleTail: localized,
    subtitle: localized,
    meta: z
      .array(z.object({ label: localized, value: localized, showsClientWordmark: z.boolean().optional() }))
      .min(1),
    image: localizedImage,
  }),
  scope: z.object({
    heading: chapterHeading,
    chatStatus: localized,
    capabilities: z.array(glyphItem).min(1),
    conversation: z
      .array(
        z.object({
          author: z.enum(["buyer", "agent", "system"]),
          text: localized,
          attachment: localizedImage.optional(),
          capability: z.number().int().nonnegative().optional(),
          annotation: localized.optional(),
        }),
      )
      .min(1),
  }),
  benefits: z.object({
    heading: chapterHeading,
    exampleLabel: localized,
    items: z.array(glyphItem.extend({ example: localized })).min(3),
  }),
  process: z.object({
    heading: chapterHeading,
    doesLabel: localized,
    deliversLabel: localized,
    stages: z.array(z.object({ title: localized, does: localized, delivers: localized })).min(1),
    rationale: labeledNote,
  }),
  includes: z.object({
    heading: chapterHeading,
    items: z.array(localized).min(1),
    extrasLabel: localized,
    extras: z.array(localized),
    image: localizedImage,
  }),
  maintenance: z.object({
    heading: chapterHeading,
    items: z.array(glyphItem).length(6, "maintenance.items needs 6 panels for the ring"),
    report: z.object({
      title: localized,
      subtitle: localized,
      unit: localized,
      note: localized,
      rows: z.array(z.object({ label: localized, value: z.number().nonnegative() })).min(1),
    }),
    notes: z.array(labeledNote),
  }),
  investment: z.object({
    heading: chapterHeading,
    currency: z.string().min(1),
    implementation: z.object({
      label: localized,
      amount: z.number().positive(),
      splits: z.array(z.object({ label: localized, amount: z.number().positive() })),
    }),
    monthly: z.object({
      label: localized,
      amount: z.number().positive(),
      period: localized,
      note: localized,
    }),
    table: z.object({
      conceptLabel: localized,
      amountLabel: z.string().min(1),
      rows: z.array(z.object({ concept: localized, amount: localized })),
    }),
    footnote: localized,
  }),
  nextSteps: z.object({
    heading: chapterHeading,
    steps: z.array(localized).min(1),
    validity: z.object({ number: z.string(), title: localized, body: localized }),
  }),
  closing: z.object({ eyebrow: localized, subtitle: localized, image: localizedImage }),
  seo: z.object({ title: localized, description: localized }),
});

export function validateConfig(config: SiteConfig): SiteConfig {
  const result = configSchema.safeParse(config);
  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`\n\n❌ Config validation failed:\n${errors}\n`);
  }
  return result.data as SiteConfig;
}
