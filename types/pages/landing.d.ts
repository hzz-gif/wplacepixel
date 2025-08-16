import { Header } from "@/types/blocks/header";
import { Hero } from "@/types/blocks/hero";
import { Section } from "@/types/blocks/section";
import { Footer } from "@/types/blocks/footer";
import { BlogSection } from "@/types/blocks/blog";

export interface LandingPage {
  header?: Header;
  hero?: Hero;
  branding?: Section;
  introduce?: Section;
  benefit?: Section;
  usage?: Section;
  feature?: Section;
  showcase?: Section;
  stats?: Section;
  testimonial?: Section;
  faq?: Section;
  cta?: Section;
  footer?: Footer;
}

export interface ShowcasePage {
  showcase?: Section;
}

export interface SourcesPage {
  sources?: Section;
}

export interface BlogPage {
  blog?: BlogSection;
}

export interface WplaceOverlaySection extends Section {
  hero?: any;
  tools_showcase?: any;
  benefits?: any;
  getting_started?: any;
  faq?: any;
}

export interface WplaceOverlayPage {
  wplace_overlay?: WplaceOverlaySection;
}

export interface WplaceBotPage {
  wplace_bot?: Section;
}

export interface IsWplaceDownPage {
  is_wplace_down?: Section;
}

export interface WplaceAppPage {
  wplace_app?: Section;
}
