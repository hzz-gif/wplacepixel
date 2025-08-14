import { Metadata } from "next";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Blue Marble - Advanced Pixel Art Tool for WPlace.live | WPlace Pixel",
  description: "Discover Blue Marble, the revolutionary userscript that transforms your WPlace.live pixel art experience. Advanced template overlay, precise coordinates, and professional tools for collaborative pixel art creation.",
  keywords: "Blue Marble, WPlace.live, pixel art tool, userscript, template overlay, collaborative art, pixel art creation, WPlace Pixel",
};

export default function BlueMarblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎨 Professional Pixel Art Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Blue Marble
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The ultimate userscript for enhanced pixel art creation on WPlace.live. Transform your collaborative pixel art experience with advanced template overlay, precise coordinate systems, and professional-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/SwingTheVine/Wplace-BlueMarble/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              📥 Download Blue Marble
            </a>
            <a 
              href="https://wplace.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors"
            >
              🌍 Visit WPlace.live
            </a>
          </div>
        </div>

        {/* What is Blue Marble Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">🎯 What is Blue Marble?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Blue Marble is a powerful, free, and open-source userscript designed specifically for WPlace.live that revolutionizes your pixel art creation experience. Named after NASA's famous Blue Marble Earth image, this tool provides advanced template overlay functionality, precise coordinate systems, and enhanced visual aids to help you create stunning collaborative pixel art with unprecedented accuracy.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Think of Blue Marble as your digital tracing paper – it lets you place your reference image directly on top of the canvas, so you can easily follow your design without constantly looking back and forth between multiple windows. Whether you're working on complex artwork, participating in collaborative projects, or simply want more precision in your pixel placement, Blue Marble is the essential tool for serious WPlace.live artists.
          </p>
          <p className="text-lg text-muted-foreground">
            The Blue Marble userscript has been developed with the collaborative nature of WPlace.live in mind. Blue Marble enables artists to work together more effectively by providing shared coordinate systems and template alignment features. With Blue Marble, teams can coordinate their pixel art projects with precision, ensuring that every pixel is placed exactly where it should be. Blue Marble has become an indispensable tool for the WPlace.live community, transforming how collaborative pixel art is created.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">✨ Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">🖼️</div>
              <h3 className="text-xl font-semibold mb-3">Template Overlay System</h3>
              <p className="text-muted-foreground">Display custom PNG/WEBP templates directly on the canvas with perfect alignment and transparent pixel support.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">📍</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Coordinate System</h3>
              <p className="text-muted-foreground">Precise tile and pixel coordinate tracking with auto-fill functionality for perfect template placement.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Pin-Point Accuracy</h3>
              <p className="text-muted-foreground">Auto-fill coordinates with the pin tool and maintain perfect alignment across large projects.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Customizable Settings</h3>
              <p className="text-muted-foreground">Extensive configuration options for personalized workflow and performance optimization.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Support</h3>
              <p className="text-muted-foreground">Works seamlessly on desktop and mobile devices across multiple browsers.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Multi-Browser Compatibility</h3>
              <p className="text-muted-foreground">Full support for Chrome, Edge, and partial support for Firefox browsers.</p>
            </div>
          </div>
        </div>

        {/* Why Use Blue Marble */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">🚀 Why Use Blue Marble on WPlace.live?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Enhanced Pixel Art Creation</h3>
              <p className="text-muted-foreground mb-4">
                Blue Marble transforms WPlace.live from a simple pixel canvas into a professional pixel art studio. The Blue Marble template overlay system allows you to create complex artwork, collaborate effectively with team members, maintain consistency across large projects, and save time by reducing manual pixel counting and placement errors. Blue Marble makes pixel art creation more accessible and enjoyable for artists of all skill levels.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional-Grade Tools</h3>
              <p className="text-muted-foreground mb-4">
                Unlike basic pixel art tools, Blue Marble provides transparent pixel support with the special #deface color system, real-time coordinate display for exact positioning, template alignment with precise top-left corner system, and visual overlay management with toggle functionality. Blue Marble's advanced features set it apart from other pixel art tools, making it the preferred choice for serious WPlace.live artists.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Blue Marble Community Impact</h3>
            <p className="text-muted-foreground">
              Since its introduction, Blue Marble has revolutionized the WPlace.live community. Artists using Blue Marble report significantly improved workflow efficiency and higher quality pixel art creations. Blue Marble has enabled the creation of some of the most impressive collaborative artworks on WPlace.live, demonstrating the power of combining advanced tools with creative vision. The Blue Marble community continues to grow, with new features and improvements being added regularly based on user feedback.
            </p>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📥 Installation Guide</h2>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50 mb-6">
            <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Browser:</strong> Chrome, Microsoft Edge, or Firefox</li>
              <li>• <strong>Extension:</strong> TamperMonkey userscript manager</li>
              <li>• <strong>Platform:</strong> Windows, Mac, Linux, or Mobile</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Chrome (Recommended)</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Install TamperMonkey from Chrome Web Store</li>
                <li>2. Enable "Developer Mode" in extension settings</li>
                <li>3. Download BlueMarble.user.js from releases</li>
                <li>4. Install through TamperMonkey Dashboard</li>
                <li>5. Refresh WPlace.live to activate</li>
              </ol>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Microsoft Edge</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Install TamperMonkey for Edge</li>
                <li>2. Enable "Developer Mode"</li>
                <li>3. Download BlueMarble.user.js</li>
                <li>4. Drag file into TamperMonkey Dashboard</li>
                <li>5. Click "Install" and enable Blue Marble</li>
              </ol>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-yellow-600">⚠️ Firefox</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Install TamperMonkey add-on</li>
                <li>2. Download BlueMarble.user.js</li>
                <li>3. Install through dashboard</li>
                <li>4. Refresh WPlace.live</li>
                <li>Note: Some versions may have compatibility issues</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Blue Marble Features Deep Dive */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 Blue Marble Advanced Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Blue Marble Template System</h3>
              <p className="text-muted-foreground">Blue Marble's template overlay system is the core feature that sets it apart. Blue Marble allows you to upload PNG or WEBP images and overlay them directly onto the WPlace.live canvas with pixel-perfect accuracy.</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Blue Marble Coordinate Precision</h3>
              <p className="text-muted-foreground">Blue Marble provides both tile and pixel coordinates, ensuring that your templates are placed exactly where you want them. Blue Marble's coordinate system is designed specifically for WPlace.live's unique tile-based structure.</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Blue Marble Color Management</h3>
              <p className="text-muted-foreground">Blue Marble handles transparent pixels intelligently and supports the special #deface color for WPlace.live's transparent color. Blue Marble ensures your color choices align perfectly with the platform's palette.</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-3">Blue Marble Performance</h3>
              <p className="text-muted-foreground">Blue Marble is optimized for performance across all supported browsers. Blue Marble works seamlessly on both desktop and mobile devices, ensuring a consistent experience regardless of your platform.</p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">🛠️ How to Use Blue Marble</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Step 1: Prepare Your Template</h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Use PNG or WEBP format for best results</li>
                <li>• Template displays at actual pixel size (500x300 image = 500x300 pixels on canvas)</li>
                <li>• Use transparent pixels for areas to ignore</li>
                <li>• Use #deface hex color for "Transparent" pixels on WPlace.live</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Step 2: Set Coordinates</h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Find your desired top-left corner position on the canvas</li>
                <li>• Click the pixel to see tile and pixel coordinates</li>
                <li>• Use the "Pin" icon to auto-fill coordinate fields</li>
                <li>• Enter values in Tl X, Tl Y, Px X, and Px Y fields</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Step 3: Upload and Enable</h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Upload your prepared template image</li>
                <li>• Click "Enable" to activate the overlay</li>
                <li>• Your template now appears on the canvas</li>
                <li>• Start creating your pixel art with precision!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Is Blue Marble safe to use?</h3>
              <p className="text-muted-foreground">Yes! Blue Marble is open-source with all code available in the repository. You can review the source code and even build it yourself.</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Can Blue Marble automatically place pixels?</h3>
              <p className="text-muted-foreground">No, Blue Marble does not support automatic pixel placement. It's designed as a visual aid and coordination tool that requires manual user interaction.</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">How do I hide the overlay?</h3>
              <p className="text-muted-foreground">Simply turn off the userscript in TamperMonkey and refresh the WPlace.live page.</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Does Blue Marble work on mobile?</h3>
              <p className="text-muted-foreground">Yes! Blue Marble has been verified to work on mobile devices, though the experience may vary depending on your mobile browser.</p>
            </div>
          </div>
        </div>

        {/* Community & Support */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Community & Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://discord.gg/tpeBPy46hf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    💬 Discord Community - Real-time support
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SwingTheVine/Wplace-BlueMarble/discussions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    🗣️ GitHub Discussions - Q&A and detailed questions
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SwingTheVine/Wplace-BlueMarble/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    🐛 Report Issues - Bug reports and feature requests
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contribute</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://github.com/SwingTheVine/Wplace-BlueMarble" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    ⭐ Star the Repository - Show your support
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SwingTheVine/Wplace-BlueMarble/blob/main/docs/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    🤝 Contributing Guide - Help improve Blue Marble
                  </a>
                </li>
                <li>
                  <a href="https://github.com/SwingTheVine/Wplace-BlueMarble/releases" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    📦 Latest Releases - Download the newest version
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your WPlace.live Experience?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of artists who are already using Blue Marble to create stunning collaborative pixel art on WPlace.live. Download now and discover how much faster and more enjoyable pixel art can be!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/SwingTheVine/Wplace-BlueMarble/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              🚀 Download Blue Marble Now
            </a>
            <a 
              href="https://wplace.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background px-8 py-4 rounded-lg font-medium hover:bg-muted/50 transition-colors text-lg"
            >
              🎨 Start Creating on WPlace.live
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Blue Marble is developed by SwingTheVine and is licensed under the Mozilla Public License Version 2.0. 
            The "Blue Marble" Earth image is courtesy of NASA and is licensed under Creative Commons 0 1.0 Universal.
          </p>
        </div>
      </div>
    </div>
  );
}
