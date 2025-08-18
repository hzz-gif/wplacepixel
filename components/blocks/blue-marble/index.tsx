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
      </div>
    </div>
  );
}
