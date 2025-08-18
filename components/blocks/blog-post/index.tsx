import { BlogArticle } from "@/types/blocks/blog";
import { CalendarDays, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  post: BlogArticle & {
    content: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          {post.category && (
            <div className="mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

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
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                WplacePixel.art
              </span>
            </div>

            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
                       [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
                       [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                       [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-base [&>p]:text-foreground
                       [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:list-disc
                       [&>ol]:mb-6 [&>ol]:pl-6 [&>ol]:list-decimal
                       [&>li]:mb-2 [&>li]:text-base [&>li]:text-foreground
                       [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
                       [&>code]:bg-muted [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm
                       [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6
                       [&>hr]:border-border [&>hr]:my-8
                       [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-2 [&_a]:hover:text-blue-800 [&_a]:hover:bg-blue-50 [&_a]:hover:px-1 [&_a]:hover:rounded [&_a]:transition-all [&_a]:duration-200 [&_a]:cursor-pointer [&_a]:font-medium
                       dark:[&_a]:text-blue-400 dark:[&_a]:hover:text-blue-300 dark:[&_a]:hover:bg-blue-950/50"
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Published on {post.date} by WplacePixel.art
            </div>
            
            <div className="flex gap-2">
              <Link href="/blog">
                <Button variant="outline">More Articles</Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
