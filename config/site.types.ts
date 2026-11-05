export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T = string> = Record<Locale, T>;

export const SECTION_IDS = [
  "hero",
  "scope",
  "benefits",
  "process",
  "includes",
  "maintenance",
  "investment",
  "nextSteps",
  "closing",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const GLYPH_NAMES = [
  "bolt",
  "idCard",
  "calendar",
  "handoff",
  "chart",
  "inbox",
  "clock",
  "target",
  "equalizer",
  "hourglass",
  "compass",
  "pulse",
  "sliders",
  "refresh",
  "wrench",
  "report",
  "chat",
  "coins",
] as const;

export type GlyphName = (typeof GLYPH_NAMES)[number];

export interface SiteMeta {
  url: string;
  defaultLocale: Locale;
}

export interface Company {
  name: string;
  tagline: Localized;
  logo: string;
  website: string;
  websiteLabel: string;
}

export interface ClientBrand {
  name: string;
  city: string;
  handle: string;
  initials: string;
  wordmark: { lead: string; tail: string };
}

export interface ChapterHeading {
  number?: string;
  title: Localized;
  intro?: Localized;
}

export interface LocalizedImage {
  src: string;
  alt: Localized;
}

export interface QuoteMetaItem {
  label: Localized;
  value: Localized;
  showsClientWordmark?: boolean;
}

export interface HeroContent {
  eyebrow: Localized;
  titleLead: Localized;
  titleTail: Localized;
  subtitle: Localized;
  meta: QuoteMetaItem[];
  image: LocalizedImage;
}

export interface GlyphItem {
  glyph: GlyphName;
  title: Localized;
  description: Localized;
}

export interface DmMessage {
  author: "buyer" | "agent" | "system";
  text: Localized;
  attachment?: LocalizedImage;
  capability?: number;
  annotation?: Localized;
}

export interface ScopeContent {
  heading: ChapterHeading;
  chatStatus: Localized;
  capabilities: GlyphItem[];
  conversation: DmMessage[];
}

export interface Benefit extends GlyphItem {
  example: Localized;
}

export interface BenefitsContent {
  heading: ChapterHeading;
  exampleLabel: Localized;
  items: Benefit[];
}

export interface Stage {
  title: Localized;
  does: Localized;
  delivers: Localized;
}

export interface LabeledNote {
  glyph: GlyphName;
  label: Localized;
  body: Localized;
}

export interface ProcessContent {
  heading: ChapterHeading;
  doesLabel: Localized;
  deliversLabel: Localized;
  stages: Stage[];
  rationale: LabeledNote;
}

export interface IncludesContent {
  heading: ChapterHeading;
  items: Localized[];
  extrasLabel: Localized;
  extras: Localized[];
  image: LocalizedImage;
}

export interface ReportRow {
  label: Localized;
  value: number;
}

export interface MonthlyReport {
  title: Localized;
  subtitle: Localized;
  unit: Localized;
  note: Localized;
  rows: ReportRow[];
}

export interface MaintenanceContent {
  heading: ChapterHeading;
  items: GlyphItem[];
  report: MonthlyReport;
  notes: LabeledNote[];
}

export interface PriceSplit {
  label: Localized;
  amount: number;
}

export interface InvestmentRow {
  concept: Localized;
  amount: Localized;
}

export interface InvestmentContent {
  heading: ChapterHeading;
  currency: string;
  implementation: {
    label: Localized;
    amount: number;
    splits: PriceSplit[];
  };
  monthly: {
    label: Localized;
    amount: number;
    period: Localized;
    note: Localized;
  };
  table: {
    conceptLabel: Localized;
    amountLabel: string;
    rows: InvestmentRow[];
  };
  footnote: Localized;
}

export interface NextStepsContent {
  heading: ChapterHeading;
  steps: Localized[];
  validity: {
    number: string;
    title: Localized;
    body: Localized;
  };
}

export interface ClosingContent {
  eyebrow: Localized;
  subtitle: Localized;
  image: LocalizedImage;
}

export interface SeoContent {
  title: Localized;
  description: Localized;
}

export interface SiteConfig {
  site: SiteMeta;
  company: Company;
  client: ClientBrand;
  sections: SectionId[];
  navigation: SectionId[];
  hero: HeroContent;
  scope: ScopeContent;
  benefits: BenefitsContent;
  process: ProcessContent;
  includes: IncludesContent;
  maintenance: MaintenanceContent;
  investment: InvestmentContent;
  nextSteps: NextStepsContent;
  closing: ClosingContent;
  seo: SeoContent;
}
