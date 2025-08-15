import { icons } from "lucide-react";

// Mapping from React Icons names to Lucide React names
const iconMapping: Record<string, keyof typeof icons> = {
  "RiSparkling2Line": "Sparkles",
  "RiImageEditLine": "Image",
  "RiGlobalLine": "Globe",
  "RiArticleLine": "FileText",
  "RiHomeLine": "House",
  "RiGithubLine": "Github",
  "RiTwitterLine": "Twitter",
  "RiDiscordLine": "MessageCircle",
  "RiCheckLine": "Check",
  "RiInformationLine": "Info",
  "RiArrowRightLine": "ArrowRight",
  "RiToolsLine": "Wrench",
  // Direct Lucide names used in wplace-bot
  "Bot": "Bot",
  "Check": "Check",
  "ArrowRight": "ArrowRight",
  "Paintbrush": "Paintbrush",
  "AlertTriangle": "TriangleAlert",
  "Plus": "Plus",
  "Minus": "Minus",
  "HelpCircle": "CircleHelp",
};

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: string;
  color: string;
  size: number;
  className?: string;
}) => {
  try {
    // Map React Icons name to Lucide name, or use as-is if it's already a Lucide name
    const lucideName = iconMapping[name] || (name as keyof typeof icons);
    const LucideIcon = icons[lucideName];

    // Fallback to a default icon if the icon doesn't exist
    if (!LucideIcon) {
      console.warn(`Icon "${name}" (mapped to "${lucideName}") not found in Lucide React. Using fallback.`);
      const DefaultIcon = icons.CircleHelp;
      return <DefaultIcon color={color} size={size} className={className} />;
    }

    return <LucideIcon color={color} size={size} className={className} />;
  } catch (error) {
    console.error(`Error rendering icon "${name}":`, error);
    // Return a safe fallback
    const DefaultIcon = icons.CircleHelp;
    return <DefaultIcon color={color} size={size} className={className} />;
  }
};
