'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Upload, 
  Settings, 
  Palette, 
  Download, 
  ExternalLink,
  Lightbulb,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface UsageGuideProps {
  title?: string
  description?: string
}

export default function UsageGuide({ 
  title = "How to Use WPlace Pixel Converter",
  description = "Step-by-step guide to create perfect pixel art for wplace.live"
}: UsageGuideProps) {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Click the upload area or drag and drop your image file",
      details: [
        "Supports JPG, PNG, GIF, BMP, and WebP formats",
        "Best results with clear, high-contrast images",
        "Recommended size: 500x500 to 2000x2000 pixels"
      ]
    },
    {
      icon: Settings,
      title: "Adjust Settings",
      description: "Customize the conversion parameters for optimal results",
      details: [
        "Pixel Size: Larger values create more blocky, retro-style art",
        "Color Depth: Fewer colors create more stylized results",
        "Output Size: Choose based on your wplace.live project needs"
      ]
    },
    {
      icon: Palette,
      title: "Fine-tune (Advanced)",
      description: "Use advanced settings for perfect results",
      details: [
        "Brightness: Adjust overall image brightness (50-200%)",
        "Contrast: Enhance or reduce contrast (50-200%)",
        "Auto Preview: See changes in real-time as you adjust"
      ]
    },
    {
      icon: Download,
      title: "Download & Use",
      description: "Save your pixel art and use it on wplace.live",
      details: [
        "Download as PNG with transparent background support",
        "Perfect for collaborative drawing on wplace.live",
        "Use as reference or template for pixel-by-pixel recreation"
      ]
    }
  ]

  const tips = [
    {
      icon: Lightbulb,
      title: "Best Practices",
      items: [
        "Start with simple, clear images for best results",
        "Use higher pixel sizes (20-32px) for detailed artwork",
        "Lower color depth (8-16 colors) for retro gaming style",
        "Adjust brightness/contrast before conversion for better colors"
      ]
    },
    {
      icon: CheckCircle,
      title: "WPlace.live Tips",
      items: [
        "Plan your artwork location on the world map first",
        "Coordinate with other artists for collaborative projects",
        "Use smaller pixel art (128x128) for detailed work",
        "Save your progress frequently while drawing"
      ]
    },
    {
      icon: AlertCircle,
      title: "Common Issues",
      items: [
        "Blurry results: Try reducing pixel size or increasing contrast",
        "Too many colors: Lower the color depth setting",
        "Dark image: Increase brightness before conversion",
        "File too large: Use smaller output size (128x128 or 256x256)"
      ]
    }
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Step-by-step guide */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="absolute top-4 right-4">
                  {index + 1}
                </Badge>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Tips and troubleshooting */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <tip.icon className="w-5 h-5" />
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8 sm:mt-12">
          <Card className="inline-block p-4 sm:p-6 bg-primary/5 border-primary/20 max-w-full">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base sm:text-lg">Ready to Create on WPlace.live?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Visit wplace.live to start your collaborative pixel art journey
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
