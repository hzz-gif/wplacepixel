import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

export default function IsWplaceDown({ section }: { section: any }) {
  // Static data for server-side rendering
  const overallStatus = 'online';
  const lastUpdate = new Date();

  const {
    hero,
    status_history,
    why_use,
    how_it_works,
    faq
  } = section;



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-50 border-green-200';
      case 'offline': return 'text-red-600 bg-red-50 border-red-200';
      case 'degraded': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string, className?: string) => {
    const iconProps = { className };
    switch (status) {
      case 'online': return <CheckCircle {...iconProps} />;
      case 'offline': return <XCircle {...iconProps} />;
      case 'degraded': return <AlertTriangle {...iconProps} />;
      default: return <Clock {...iconProps} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return hero?.status_check?.online || 'Online';
      case 'offline': return hero?.status_check?.offline || 'Offline';
      case 'degraded': return hero?.status_check?.degraded || 'Degraded';
      default: return hero?.status_check?.checking || 'Checking...';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      {hero && (
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              📊 Status Monitor
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

            {/* Embedded Status Dashboard */}
            <div className="max-w-4xl mx-auto">
              <div className="h-[450px] overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://wplacepixel.betteruptime.com/"
                  className="w-full h-[570px] border-0"
                  title="WPlace.live Status Dashboard"
                  loading="lazy"
                  style={{
                    overflow: 'hidden',
                    marginTop: '-120px'
                  }}
                  scrolling="no"
                />
              </div>
            </div>

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



      {/* Why Use Is Wplace Down */}
      {why_use && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {why_use.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {why_use.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {why_use.benefits?.map((benefit: any, index: number) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                        {index + 1}
                      </span>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Is Wplace Down Works */}
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
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {how_it_works.steps?.map((step: any, index: number) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
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
