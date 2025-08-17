"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, MessageCircle, Play, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GrassWonder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 text-sm">
                🌱 WPlace Memorial
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                🌱 WPlace Grass Wonder
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                A Beautiful Tribute in WPlace.live
              </p>
              <p className="text-lg text-gray-600 mb-8">
                The WPlace Grass Wonder stands as one of the most touching and beautiful collaborative pixel art tributes in WPlace.live, created by a passionate community to honor the memory of Grass Wonder. This WPlace Grass Wonder memorial showcases the incredible power of collective creativity and digital artistry.
              </p>
              <Button asChild size="lg" className="mb-4">
                <Link href="https://wplace.live" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit WPlace.live
                </Link>
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/imgs/features/1.jpg"
                  alt="WPlace Grass Wonder Memorial"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is WPlace Grass Wonder Memorial?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-gray-700 leading-relaxed mb-6">
              The WPlace Grass Wonder is a collaborative pixel art tribute located in WPlace.live, created by the community to honor the memory of Grass Wonder, a beloved racehorse from Japan who captured hearts around the world. This WPlace Grass Wonder memorial represents one of the most significant community-driven art projects in the digital space.
            </div>
            <div className="text-lg text-gray-700 leading-relaxed mb-6">
              This WPlace Grass Wonder memorial represents the power of collective creativity and remembrance, where thousands of users came together to create something beautiful and meaningful. The pixel art tribute showcases intricate details and heartfelt messages from fans worldwide, making the WPlace Grass Wonder a truly special place for remembrance.
            </div>
            <div className="text-lg text-gray-700 leading-relaxed mb-6">
              Located in the Philippines section of WPlace.live, this WPlace Grass Wonder memorial has become a pilgrimage site for fans and art enthusiasts alike, demonstrating how digital spaces can serve as meaningful places of remembrance and community gathering. The WPlace Grass Wonder continues to inspire new visitors daily.
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📍 WPlace Grass Wonder Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit the WPlace Grass Wonder memorial in WPlace.live and pay your respects to this beautiful tribute. The WPlace Grass Wonder location serves as a digital landmark for fans worldwide.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📍 Memorial Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">Philippines Region, WPlace.live</p>
                <p className="text-gray-600 mb-4">Interactive Pixel Canvas</p>
                <Button asChild className="w-full">
                  <Link href="https://wplace.live" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit WPlace.live
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WPlace Grass Wonder Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with fellow fans and contributors who helped create and maintain this beautiful WPlace Grass Wonder memorial. Join the WPlace Grass Wonder community to share your experiences and memories.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Facebook and Reddit - Vertical Layout with consistent width */}
            <div className="space-y-6">
              {/* Facebook Card */}
              <Card className="hover:shadow-lg transition-shadow w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Facebook
                  </CardTitle>
                  <CardDescription>Grass Wonder Memorial Post</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/imgs/features/9.png"
                      alt="Facebook - Grass Wonder Memorial Post"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">Community discussion about the WPlace Grass Wonder memorial in WPlace. Join the conversation about WPlace Grass Wonder and share your thoughts.</p>
                  <p className="text-sm text-gray-500 mb-4">Active community of pixel art enthusiasts</p>
                  <Button asChild className="w-full">
                    <Link href="https://www.facebook.com/groups/reincarnatedlowres/posts/2008534179914470/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Discussion
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Reddit Card */}
              <Card className="hover:shadow-lg transition-shadow w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Reddit
                  </CardTitle>
                  <CardDescription>Grass Wonder Artwork Discussion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.redditmedia.com/r/WplaceLive/comments/1mqp2e4/grass_wonder_artwork_got_griefed/?ref_source=embed&ref=share&embed=true"
                      width="100%"
                      height="400"
                      style={{ border: 'none' }}
                      allowFullScreen
                      loading="lazy"
                      title="Reddit - Grass Wonder Artwork Discussion"
                      className="w-full"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">Reddit discussion about the WPlace Grass Wonder artwork and community protection efforts. Discover how the WPlace Grass Wonder community works together to preserve this memorial.</p>
                  <p className="text-sm text-gray-500 mb-4">WPlace Live community</p>
                  <Button asChild className="w-full">
                    <Link href="https://www.reddit.com/r/WplaceLive/comments/1mqp2e4/grass_wonder_artwork_got_griefed/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Discussion
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Other Community Links - Horizontal Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    WPlace.live
                  </CardTitle>
                  <CardDescription>Official WPlace</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Visit the official WPlace.live platform to see the WPlace Grass Wonder memorial and contribute to the canvas. Experience WPlace Grass Wonder firsthand on the interactive platform.</p>
                  <p className="text-sm text-gray-500 mb-4">Global collaborative pixel art platform</p>
                  <Button asChild className="w-full">
                    <Link href="https://wplace.live" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Community
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📹 WPlace Grass Wonder Videos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch videos from the community showcasing the WPlace Grass Wonder memorial and its creation process. These WPlace Grass Wonder videos capture the essence of this remarkable digital tribute.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  TikTok
                </CardTitle>
                <CardDescription>Grass Wonder Memorial Video</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7538273403493518610"
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    title="TikTok - Grass Wonder Memorial Video"
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">Creator: @mr_baller221</p>
                <Button asChild className="w-full">
                  <Link href="https://www.tiktok.com/@mr_baller221/video/7538273403493518610" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    Watch on TikTok
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  TikTok
                </CardTitle>
                <CardDescription>Grass Wonder Tribute Discovery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7538700521411071263"
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    title="TikTok - Grass Wonder Tribute Discovery"
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">Creator: @lilylover23</p>
                <Button asChild className="w-full">
                  <Link href="https://www.tiktok.com/@lilylover23/video/7538700521411071263" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    Watch on TikTok
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💬 WPlace Grass Wonder Community Voices
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WPlace Community Member
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Facebook • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"The WPlace Grass Wonder memorial is absolutely beautiful. It's amazing how the community came together to create something so meaningful and touching. WPlace Grass Wonder truly represents the best of collaborative art."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Pixel Art Enthusiast
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Reddit • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"This memorial shows the true power of collaborative art. Every pixel was placed with love and respect."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Uma Musume Fan
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  TikTok • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"Found the WPlace Grass Wonder memorial in WPlace and it brought tears to my eyes. Such a beautiful tribute. The WPlace Grass Wonder is truly a masterpiece of digital art."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Digital Artist
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Community • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"The attention to detail in this memorial is incredible. It's a testament to what communities can achieve together."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WPlace Contributor
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Facebook • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"Working on the Grass Wonder memorial was an honor. It's more than just pixel art - it's a labor of love."</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  International Fan
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Reddit • Recent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"The WPlace Grass Wonder memorial in WPlace has become a special place for fans worldwide to come together and remember. WPlace Grass Wonder brings people together from all corners of the globe."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
