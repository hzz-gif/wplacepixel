import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WplaceOverlay({ section }: { section: any }) {
  if (section.disabled) {
    return null;
  }

  const {
    hero,
    tools_showcase,
    benefits,
    getting_started,
    faq,
  } = section;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {hero && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                {hero.badges && (
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {hero.badges.map((badge: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  {hero.title}
                </h1>

                {/* COMMENTED OUT - Banner Ad after H1 */}
                {/*
                <div className="flex justify-center my-6">
                  <div
                    style={{
                      width: '728px',
                      height: '90px',
                      maxWidth: '100%',
                      border: '1px solid #e5e7eb'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `
                        <script type="text/javascript">
                          atOptions = {
                            'key' : 'f47696853cd45a5d374e573723475380',
                            'format' : 'iframe',
                            'height' : 90,
                            'width' : 728,
                            'params' : {}
                          };
                        </script>
                        <script type="text/javascript" src="//www.highperformanceformat.com/f47696853cd45a5d374e573723475380/invoke.js"></script>
                      `
                    }}
                  />
                </div>
                */}
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {hero.subtitle}
                </p>
                {hero.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {hero.description}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {hero.cta?.primary && (
                  <Button size="lg" asChild>
                    <Link href={hero.cta.primary.url} target={hero.cta.primary.target}>
                      {hero.cta.primary.title}
                    </Link>
                  </Button>
                )}
                {hero.cta?.secondary && (
                  <Button size="lg" variant="outline" asChild>
                    <Link href={hero.cta.secondary.url}>
                      {hero.cta.secondary.title}
                    </Link>
                  </Button>
                )}
              </div>
              {hero.image && (
                <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto mt-12">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              )}

              {/* COMMENTED OUT - Bottom Hero Ad */}
              {/*
              <div className="flex justify-center mt-8">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script async="async" data-cfasync="false" src="//pl27443576.profitableratecpm.com/9d425e34362e2f5bc87c3e554332d13f/invoke.js"></script>
                      <div id="container-9d425e34362e2f5bc87c3e554332d13f"></div>
                    `
                  }}
                />
              </div>
              */}
            </div>
          </div>
        </section>
      )}

      {/* Tools Showcase Section */}
      {tools_showcase && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {tools_showcase.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {tools_showcase.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
              {tools_showcase.tools?.map((tool: any, index: number) => (
                <Card key={index} className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {tool.badges?.map((badge: string, badgeIndex: number) => (
                            <Badge
                              key={badgeIndex}
                              variant={badge === "Featured" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      {tool.features && (
                        <ul className="space-y-2">
                          {tool.features.map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="size-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex justify-center lg:justify-end">
                      {tool.cta && (
                        <Button asChild size="lg">
                          <Link href={tool.cta.url} target="_blank">
                            {tool.cta.title}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {benefits.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.items?.map((item: any, index: number) => (
                <Card key={index} className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="size-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Getting Started Section */}
      {getting_started && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {getting_started.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {getting_started.description}
              </p>
            </div>
            <div className="max-w-6xl mx-auto space-y-16">
              {getting_started.steps?.map((step: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {step.details && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="space-y-3">
                            {step.details.map((detail: string, detailIndex: number) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <Check className="size-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.options && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Available Options:</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {step.options.map((option: any, optionIndex: number) => (
                              <div key={optionIndex} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-medium text-gray-900">{option.name}</h5>
                                    {option.recommended && (
                                      <Badge variant="default" className="text-xs">Recommended</Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600">{option.description}</p>
                                  <Button variant="outline" size="sm" asChild className="w-full">
                                    <Link href={option.url} target="_blank">
                                      View Tool
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.tips && (
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
                          <ul className="space-y-1">
                            {step.tips.map((tip: string, tipIndex: number) => (
                              <li key={tipIndex} className="text-sm text-blue-800">
                                • {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.links && (
                        <div className="flex flex-wrap gap-3">
                          {step.links.map((link: any, linkIndex: number) => (
                            <Button
                              key={linkIndex}
                              variant={linkIndex === 0 ? "default" : "outline"}
                              asChild
                            >
                              <Link href={link.url} target={link.target}>
                                {link.title}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {faq.title}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faq.items?.map((item: any, index: number) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
