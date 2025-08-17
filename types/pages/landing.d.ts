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

export interface GrassWonderPage {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  grassWonder: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      title: string;
      content: string[];
    };
    memorial: {
      title: string;
      description: string;
      location: string;
      coordinates: string;
    };
    community: {
      title: string;
      description: string;
      links: Array<{
        platform: string;
        title: string;
        url: string;
        description: string;
        members?: string;
      }>;
    };
    videos: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        platform: string;
        url: string;
        thumbnail?: string;
        views?: string;
      }>;
    };
    testimonials: {
      title: string;
      items: Array<{
        author: string;
        platform: string;
        content: string;
        date?: string;
      }>;
    };
  };
}
