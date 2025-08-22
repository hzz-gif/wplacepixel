"use client";

export default function BlueMarble({ section }: { section: any }) {
  if (section.disabled) {
    return null;
  }

  const {
    hero,
    about,
    features,
    benefits,
  } = section;



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        {hero && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {hero.cta?.primary && (
                <a
                  href={hero.cta.primary.url}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  {hero.cta.primary.title}
                </a>
              )}
              {hero.cta?.secondary && (
                <a
                  href={hero.cta.secondary.url}
                  target={hero.cta.secondary.target}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors"
                >
                  {hero.cta.secondary.title}
                </a>
              )}
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
        )}

        {/* About Section */}
        {about && (
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">{about.title}</h2>
            {about.content?.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Features Section */}
        {features && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{features.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.items?.map((item: any, index: number) => (
                <div key={index} className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {benefits && (
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
            <h2 className="text-3xl font-bold mb-8">{benefits.title}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.sections?.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {benefits.community_impact && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">{benefits.community_impact.title}</h3>
                <p className="text-muted-foreground">
                  {benefits.community_impact.content}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Download Section */}
        <div id="download" className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">📥 Download Blue Marble Wplace</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get started with Blue Marble Wplace today! This powerful userscript is completely free and open-source.
              Download it from our official GitHub repository and transform your WPlace.live pixel art experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://github.com/SwingTheVine/Wplace-BlueMarble"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Download from GitHub
              </a>

              <a
                href="https://wplace.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-border bg-background px-8 py-4 rounded-lg font-medium hover:bg-muted/50 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                Visit WPlace.live
              </a>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">🚀 Installation Instructions</h3>
              <ol className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Install a userscript manager like Tampermonkey or Greasemonkey in your browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Visit our GitHub repository and download the Blue Marble userscript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Install the script through your userscript manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Navigate to WPlace.live and start creating amazing pixel art!</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
