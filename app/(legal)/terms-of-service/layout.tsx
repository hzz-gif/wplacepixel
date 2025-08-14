import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - WPlace Pixel Art Converter",
  description: "Read the terms of service for WPlace Pixel, the free photo to pixel art converter for wplace.live. Learn about usage rights, responsibilities, and guidelines for our pixel art conversion tool.",
  keywords: "WPlace Pixel terms of service, pixel art converter terms, photo to pixel art terms, wplace.live terms, usage agreement, pixel art tool legal",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
