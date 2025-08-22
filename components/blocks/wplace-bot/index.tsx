import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Bot, Check, ArrowRight, Paintbrush, AlertTriangle, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function WplaceBot({ section }: { section: any }) {


  const {
    hero,
    how_it_works,
    use_cases,
    resources,
    safety,
    faq
  } = section;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      {hero && (
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🤖 Automation Tool
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {hero.title}
            </h1>

            {/* Banner Ad after H1 */}
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
            <p className="text-xl text-gray-600 mb-4">
              {hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {hero.description}
            </p>

            {/* Bottom Hero Ad */}
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
          </div>
        </section>
      )}

      {/* Resources Section */}
      {resources && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {resources.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {resources.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {resources.tools?.map((tool: any, index: number) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Bot className="size-6 text-blue-600" />
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 mb-4">
                      {tool.description}
                    </CardDescription>
                    <Button asChild className="w-full mb-4">
                      <Link href={tool.url} target="_blank">
                        Visit Repository
                      </Link>
                    </Button>
                  </CardHeader>
                  {tool.features && (
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="size-4 text-green-500 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {how_it_works && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {how_it_works.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {how_it_works.description}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {how_it_works.steps?.map((step: any, index: number) => (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  {step.details && (
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <ArrowRight className="size-4 text-blue-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {use_cases && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {use_cases.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {use_cases.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {use_cases.cases?.map((useCase: any, index: number) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-gray-900">Examples:</h4>
                    <ul className="space-y-2">
                      {useCase.examples?.map((example: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Paintbrush className="size-4 text-purple-500 shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Safety Section */}
      {safety && (
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {safety.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {safety.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {safety.guidelines?.map((guideline: any, index: number) => (
                <Alert key={index} className={`border-l-4 ${
                  guideline.importance === 'critical' ? 'border-red-500 bg-red-50' :
                  guideline.importance === 'high' ? 'border-orange-500 bg-orange-50' :
                  'border-yellow-500 bg-yellow-50'
                }`}>
                  <AlertTriangle className="size-5" />
                  <div>
                    <h4 className="font-semibold mb-2">{guideline.title}</h4>
                    <AlertDescription>{guideline.description}</AlertDescription>
                  </div>
                </Alert>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* FAQ Section */}
      {faq && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {faq.title}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faq.items?.map((item: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
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
