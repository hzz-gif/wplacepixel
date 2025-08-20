import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WplaceApp({ section }: { section: any }) {
  if (section.disabled) {
    return null;
  }

  const {
    hero,
    what_is,
    highlights,
    features,
    installation,
    safety,
    pros_cons,
    why_choose,
    download
  } = section;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      {hero && (
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              📱 Mobile App
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
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
            <p className="text-xl text-gray-600 mb-4">
              {hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {hero.description}
            </p>

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
        </section>
      )}

      {/* What is Section */}
      {what_is && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {what_is.title}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                {what_is.description}
              </div>
              {what_is.additional && (
                <div className="text-lg text-gray-700 leading-relaxed">
                  {what_is.additional}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      {highlights && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {highlights.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {highlights.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {highlights.items?.map((item: any, index: number) => (
                <Card key={index} className="h-full border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {features.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {features.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.items?.map((feature: any, index: number) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Installation Guide Section */}
      {installation && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {installation.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {installation.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {installation.steps?.map((step: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety Section */}
      {safety && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {safety.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {safety.description}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              {safety.safety_features?.map((feature: any, index: number) => (
                <Card key={index} className="text-center border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {safety.warning && (
              <Alert className="max-w-2xl mx-auto border-orange-200 bg-orange-50">
                <AlertDescription className="text-orange-800">
                  {safety.warning}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </section>
      )}

      {/* Pros & Cons Section */}
      {pros_cons && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {pros_cons.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">
                    {pros_cons.pros?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pros_cons.pros?.items?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">
                    {pros_cons.cons?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pros_cons.cons?.items?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">×</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {why_choose && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {why_choose.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {why_choose.description}
              </p>
            </div>
            {why_choose.conclusion && (
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 italic">
                  {why_choose.conclusion}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Download Section */}
      {download && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {download.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {download.description}
              </p>
            </div>
            <div className="max-w-md mx-auto mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {download.checklist?.map((item: string, index: number) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✔</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Link href={download.download_url} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Wplace App APK
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                {download.note}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
