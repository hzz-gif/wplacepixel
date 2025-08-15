import { BlogSection } from "@/types/blocks/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  section: BlogSection;
}

export default function Blog({ section }: BlogProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{section.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            {section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.articles?.map((article, index) => (
            <Link
              key={index}
              href={article.url || "#"}
              target={article.target}
              rel={article.target === "_blank" ? "noopener noreferrer" : undefined}
              className="block"
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/10 group cursor-pointer h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={article.image?.src || "/placeholder-blog.jpg"}
                    alt={article.image?.alt || article.title || ""}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {article.category && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>


              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
