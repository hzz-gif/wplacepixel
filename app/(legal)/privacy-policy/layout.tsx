import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WPlace Pixel Art Converter",
  description: "Learn how WPlace Pixel protects your privacy when converting photos to pixel art. Our privacy policy covers data collection, security measures, and your rights when using our free pixel art converter.",
  keywords: "WPlace Pixel privacy policy, pixel art converter privacy, photo to pixel art privacy, wplace.live privacy, data protection, image processing privacy",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
