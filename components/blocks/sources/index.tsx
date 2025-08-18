'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Globe, Book, Code, Palette } from 'lucide-react'
import { Section } from '@/types/blocks/section'

interface SourceCategory {
  title: string
  description: string
  icon: string
  items: Array<{
    title: string
    description: string
    url: string
    target: string
    tags?: string[]
  }>
}

interface SourcesSection extends Section {
  categories?: SourceCategory[]
}

interface SourcesProps {
  section: SourcesSection
}

export default function Sources({ section }: SourcesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github
      case 'Globe':
        return Globe
      case 'Book':
        return Book
      case 'Code':
        return Code
      case 'Palette':
        return Palette
      default:
        return ExternalLink
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{section.title}</h1>

          {/* Banner Ad after H1 */}
          <div className="flex justify-center my-6">
            <div style={{ width: '728px', height: '90px', maxWidth: '100%' }}>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                    atOptions = {
                      'key' : 'f47696853cd45a5d374e573723475380',
                      'format' : 'iframe',
                      'height' : 90,
                      'width' : 728,
                      'params' : {}
                    };
                  `,
                }}
              />
              <script
                type="text/javascript"
                src="//www.highperformanceformat.com/f47696853cd45a5d374e573723475380/invoke.js"
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {section.description}
          </p>
        </div>

        <div className="space-y-12">
          {section.categories?.map((category, categoryIndex) => {
            const IconComponent = getIcon(category.icon)
            
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>{item.title}</span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between flex-1">
                        <div>
                          {item.tags && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full mt-auto"
                          onClick={() => window.open(item.url, item.target)}
                        >
                          Visit Resource
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-primary/5 border-primary/20">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Palette className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg">Ready to Create Pixel Art?</h3>
                <p className="text-muted-foreground">
                  Use our converter to transform your photos into wplace.live pixel art
                </p>
              </div>
              <Button 
                onClick={() => window.location.href = '/#convert'}
                className="flex-shrink-0"
              >
                Start Converting
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
