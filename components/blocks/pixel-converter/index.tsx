'use client'

import React, { useState, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Upload, Download, Image as ImageIcon, Palette, Settings, Lock } from 'lucide-react'
import { toast } from 'sonner'

// WPlace 64-Color Palette
const WPLACE_COLORS = [
  // Row 1 - Blacks, Grays, Whites, Reds
  { hex: '#000000', isPremium: false }, { hex: '#4a4a4a', isPremium: false }, { hex: '#808080', isPremium: false }, { hex: '#b3b3b3', isPremium: false },
  { hex: '#cccccc', isPremium: false }, { hex: '#ffffff', isPremium: false }, { hex: '#800000', isPremium: false }, { hex: '#cc0000', isPremium: false },
  { hex: '#ff0000', isPremium: false }, { hex: '#ff6666', isPremium: false }, { hex: '#ff9999', isPremium: false }, { hex: '#ffcccc', isPremium: false },
  { hex: '#ff8000', isPremium: false }, { hex: '#ffaa00', isPremium: false }, { hex: '#ffcc00', isPremium: false }, { hex: '#ffff00', isPremium: false },

  // Row 2 - Yellows, Greens, Blues, Purples
  { hex: '#ccff00', isPremium: true }, { hex: '#99ff00', isPremium: true }, { hex: '#66ff00', isPremium: true }, { hex: '#33ff00', isPremium: true },
  { hex: '#00ff00', isPremium: false }, { hex: '#00ff33', isPremium: false }, { hex: '#00ff66', isPremium: false }, { hex: '#00ff99', isPremium: false },
  { hex: '#00ffcc', isPremium: false }, { hex: '#00ffff', isPremium: false }, { hex: '#0099ff', isPremium: false }, { hex: '#0066ff', isPremium: false },
  { hex: '#0033ff', isPremium: false }, { hex: '#0000ff', isPremium: false }, { hex: '#3300ff', isPremium: false }, { hex: '#6600ff', isPremium: false },

  // Row 3 - More purples, pinks, browns
  { hex: '#9900ff', isPremium: true }, { hex: '#cc00ff', isPremium: true }, { hex: '#ff00ff', isPremium: true }, { hex: '#ff00cc', isPremium: true },
  { hex: '#ff0099', isPremium: true }, { hex: '#ff0066', isPremium: true }, { hex: '#ff0033', isPremium: true }, { hex: '#663300', isPremium: true },
  { hex: '#996633', isPremium: true }, { hex: '#cc9966', isPremium: true }, { hex: '#ffcc99', isPremium: true }, { hex: '#ffddaa', isPremium: true },
  { hex: '#ffeebb', isPremium: true }, { hex: '#ffffcc', isPremium: true }, { hex: '#ffffdd', isPremium: true }, { hex: '#ffffee', isPremium: true },

  // Row 4 - Additional colors
  { hex: '#336600', isPremium: true }, { hex: '#669900', isPremium: true }, { hex: '#99cc00', isPremium: true }, { hex: '#ccff33', isPremium: true },
  { hex: '#ffff66', isPremium: true }, { hex: '#ffff99', isPremium: true }, { hex: '#003366', isPremium: true }, { hex: '#006699', isPremium: true },
  { hex: '#0099cc', isPremium: true }, { hex: '#33ccff', isPremium: true }, { hex: '#66ddff', isPremium: true }, { hex: '#99eeff', isPremium: true },
  { hex: '#330066', isPremium: true }, { hex: '#660099', isPremium: true }, { hex: '#9933cc', isPremium: true }, { hex: '#cc66ff', isPremium: true }
]

// Helper function to calculate color distance
function getColorDistance(color1: string, color2: string): number {
  const hex1 = color1.replace('#', '')
  const hex2 = color2.replace('#', '')

  const r1 = parseInt(hex1.substr(0, 2), 16)
  const g1 = parseInt(hex1.substr(2, 2), 16)
  const b1 = parseInt(hex1.substr(4, 2), 16)

  const r2 = parseInt(hex2.substr(0, 2), 16)
  const g2 = parseInt(hex2.substr(2, 2), 16)
  const b2 = parseInt(hex2.substr(4, 2), 16)

  return Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2))
}

interface PixelConverterProps {
  title?: string
  description?: string
}

export default function PixelConverter({ 
  title = "Photo to WPlace Pixel Converter",
  description = "Transform your photos into pixel art perfect for wplace.live"
}: PixelConverterProps) {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [pixelArt, setPixelArt] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [pixelSize, setPixelSize] = useState([16])
  const [colorDepth, setColorDepth] = useState('16')
  const [outputSize, setOutputSize] = useState('256')
  const [brightness, setBrightness] = useState([100])
  const [contrast, setContrast] = useState([100])
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [autoPreview, setAutoPreview] = useState(true)
  const [usedColors, setUsedColors] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [colorFilter, setColorFilter] = useState<'all' | 'free' | 'premium'>('all')
  const [hoveredColor, setHoveredColor] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string)
      setPixelArt(null)
    }
    reader.readAsDataURL(file)
  }, [])

  const convertToPixelArt = useCallback(async () => {
    if (!originalImage || !canvasRef.current) return

    setIsProcessing(true)
    
    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Canvas context not available')

      const img = new Image()
      img.onload = () => {
        const targetSize = parseInt(outputSize)
        const pixelSizeValue = pixelSize[0]
        
        // Calculate dimensions
        const aspectRatio = img.width / img.height
        let canvasWidth, canvasHeight
        
        if (aspectRatio > 1) {
          canvasWidth = targetSize
          canvasHeight = targetSize / aspectRatio
        } else {
          canvasHeight = targetSize
          canvasWidth = targetSize * aspectRatio
        }
        
        canvas.width = canvasWidth
        canvas.height = canvasHeight
        
        // Apply brightness and contrast adjustments
        ctx.filter = `brightness(${brightness[0]}%) contrast(${contrast[0]}%)`

        // Draw and pixelate
        const pixelatedWidth = Math.floor(canvasWidth / pixelSizeValue)
        const pixelatedHeight = Math.floor(canvasHeight / pixelSizeValue)

        // Create temporary canvas for pixelation
        const tempCanvas = document.createElement('canvas')
        const tempCtx = tempCanvas.getContext('2d')
        if (!tempCtx) throw new Error('Temp canvas context not available')

        tempCanvas.width = pixelatedWidth
        tempCanvas.height = pixelatedHeight

        // Apply same filter to temp canvas
        tempCtx.filter = `brightness(${brightness[0]}%) contrast(${contrast[0]}%)`

        // Draw image small
        tempCtx.drawImage(img, 0, 0, pixelatedWidth, pixelatedHeight)

        // Reset filter and scale back up with pixelated effect
        ctx.filter = 'none'
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(tempCanvas, 0, 0, pixelatedWidth, pixelatedHeight, 0, 0, canvasWidth, canvasHeight)
        
        // Apply color reduction if needed
        if (parseInt(colorDepth) < 256) {
          const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
          const data = imageData.data
          const colorReduction = 256 / parseInt(colorDepth)
          
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.floor(data[i] / colorReduction) * colorReduction     // Red
            data[i + 1] = Math.floor(data[i + 1] / colorReduction) * colorReduction // Green
            data[i + 2] = Math.floor(data[i + 2] / colorReduction) * colorReduction // Blue
          }
          
          ctx.putImageData(imageData, 0, 0)
        }

        // Analyze colors used in the pixel art
        const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
        const data = imageData.data
        const colorSet = new Set<string>()

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]

          if (a > 0) { // Only count non-transparent pixels
            const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
            colorSet.add(hex.toLowerCase())
          }
        }

        // Find closest WPlace colors
        const detectedColors: string[] = []
        colorSet.forEach(color => {
          let closestColor = WPLACE_COLORS[0].hex
          let minDistance = Infinity

          WPLACE_COLORS.forEach(wplaceColor => {
            const distance = getColorDistance(color, wplaceColor.hex)
            if (distance < minDistance) {
              minDistance = distance
              closestColor = wplaceColor.hex
            }
          })

          if (!detectedColors.includes(closestColor)) {
            detectedColors.push(closestColor)
          }
        })

        setUsedColors(detectedColors)
        setPixelArt(canvas.toDataURL())
        toast.success('Pixel art created successfully!')
      }
      
      img.src = originalImage
    } catch (error) {
      console.error('Conversion error:', error)
      toast.error('Failed to convert image. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }, [originalImage, pixelSize, colorDepth, outputSize, brightness, contrast])

  const downloadPixelArt = useCallback(() => {
    if (!pixelArt) return
    
    const link = document.createElement('a')
    link.download = 'wplace-pixel-art.png'
    link.href = pixelArt
    link.click()
    
    toast.success('Pixel art downloaded!')
  }, [pixelArt])

  const openWPlace = useCallback(() => {
    window.open('https://wplace.live', '_blank')
  }, [])

  const resetSettings = useCallback(() => {
    setPixelSize([16])
    setColorDepth('16')
    setOutputSize('256')
    setBrightness([100])
    setContrast([100])
    setShowAdvanced(false)
    toast.success('Settings reset to default')
  }, [])

  // Auto preview when settings change
  React.useEffect(() => {
    if (autoPreview && originalImage && !isProcessing) {
      const timeoutId = setTimeout(() => {
        convertToPixelArt()
      }, 500) // Debounce for 500ms

      return () => clearTimeout(timeoutId)
    }
  }, [pixelSize, colorDepth, outputSize, brightness, contrast, autoPreview, originalImage, isProcessing, convertToPixelArt])

  return (
    <section className="pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">


        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Upload and Settings */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Photo
                </CardTitle>
                <CardDescription>
                  Select an image to convert to pixel art
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 sm:p-6 lg:p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {originalImage ? (
                    <div className="space-y-4">
                      <img
                        src={originalImage}
                        alt="Original"
                        className="max-w-full max-h-32 sm:max-h-40 lg:max-h-48 mx-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium">Drop your image here</p>
                        <p className="text-sm text-muted-foreground">or click to browse</p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Conversion Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Pixel Size: {pixelSize[0]}px</Label>
                  <Slider
                    value={pixelSize}
                    onValueChange={setPixelSize}
                    max={32}
                    min={4}
                    step={2}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Color Depth</Label>
                  <Select value={colorDepth} onValueChange={setColorDepth}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8 colors</SelectItem>
                      <SelectItem value="16">16 colors</SelectItem>
                      <SelectItem value="32">32 colors</SelectItem>
                      <SelectItem value="64">64 colors</SelectItem>
                      <SelectItem value="256">Full color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Output Size</Label>
                  <Select value={outputSize} onValueChange={setOutputSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="128">128x128</SelectItem>
                      <SelectItem value="256">256x256</SelectItem>
                      <SelectItem value="512">512x512</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-preview">Auto Preview</Label>
                  <Switch
                    id="auto-preview"
                    checked={autoPreview}
                    onCheckedChange={setAutoPreview}
                  />
                </div>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="w-full"
                  >
                    {showAdvanced ? 'Hide Advanced' : 'Show Advanced'} Settings
                  </Button>
                </div>

                {showAdvanced && (
                  <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                    <div className="space-y-2">
                      <Label>Brightness: {brightness[0]}%</Label>
                      <Slider
                        value={brightness}
                        onValueChange={setBrightness}
                        max={200}
                        min={50}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Contrast: {contrast[0]}%</Label>
                      <Slider
                        value={contrast}
                        onValueChange={setContrast}
                        max={200}
                        min={50}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    onClick={convertToPixelArt}
                    disabled={!originalImage || isProcessing}
                    className="flex-1"
                  >
                    {isProcessing ? 'Converting...' : 'Convert to Pixel Art'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetSettings}
                    disabled={isProcessing}
                    className="px-3"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Result */}
          <div className="space-y-6 relative">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Pixel Art Result
                </CardTitle>
                <CardDescription>
                  Your converted pixel art ready for wplace.live
                </CardDescription>
              </CardHeader>
              <CardContent>
                {pixelArt ? (
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <img
                        src={pixelArt}
                        alt="Pixel Art"
                        className="max-w-full mx-auto rounded"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button onClick={downloadPixelArt} className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button onClick={openWPlace} variant="outline" className="flex-1">
                        Use on WPlace.live
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                    <Palette className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Your pixel art will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Right Bottom Corner Ad */}
            <div className="absolute bottom-0 right-0 z-10">
              <div
                style={{
                  width: '300px',
                  height: '250px',
                  border: '1px solid #e5e7eb'
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <script type="text/javascript">
                      atOptions = {
                        'key' : '484b266368589cbc7157b77a607ca7c6',
                        'format' : 'iframe',
                        'height' : 250,
                        'width' : 300,
                        'params' : {}
                      };
                    </script>
                    <script type="text/javascript" src="//www.highperformanceformat.com/484b266368589cbc7157b77a607ca7c6/invoke.js"></script>
                  `
                }}
              />
            </div>
          </div>
        </div>

        {/* WPlace Color Palette */}
        {usedColors.length > 0 && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Official WPlace 64-Color Palette
                </CardTitle>
                <CardDescription>
                  Click to select/deselect colors. Locked colors are premium.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Filter buttons */}
                  <div className="flex gap-2 text-sm">
                    <Button
                      variant={colorFilter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setColorFilter('all')}
                    >
                      Select all
                    </Button>
                    <Button
                      variant={colorFilter === 'free' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setColorFilter('free')}
                    >
                      Free colors only
                    </Button>
                    <Button
                      variant={colorFilter === 'premium' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setColorFilter('premium')}
                    >
                      Premium colors only
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedColors([])}
                    >
                      Clear
                    </Button>
                    <div className="ml-auto text-muted-foreground">
                      {usedColors.length}/64
                    </div>
                  </div>

                  {/* Color preview */}
                  {hoveredColor && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div
                        className="w-8 h-8 rounded border-2 border-gray-300"
                        style={{ backgroundColor: hoveredColor }}
                      />
                      <div className="text-sm">
                        <div className="font-mono font-semibold">{hoveredColor.toUpperCase()}</div>
                        <div className="text-muted-foreground">
                          {WPLACE_COLORS.find(c => c.hex === hoveredColor)?.isPremium ? 'Premium Color' : 'Free Color'}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Color grid */}
                  <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                    {WPLACE_COLORS.map((color, index) => {
                      const isUsed = usedColors.includes(color.hex)
                      const isSelected = selectedColors.includes(color.hex)
                      const shouldShow = colorFilter === 'all' ||
                        (colorFilter === 'free' && !color.isPremium) ||
                        (colorFilter === 'premium' && color.isPremium)

                      if (!shouldShow) return null

                      return (
                        <div
                          key={index}
                          className={`
                            relative w-6 h-6 rounded cursor-pointer border-2 transition-all
                            ${isUsed ? 'border-primary shadow-md' : 'border-gray-300'}
                            ${isSelected ? 'ring-2 ring-primary ring-offset-1' : ''}
                            hover:scale-110
                          `}
                          style={{ backgroundColor: color.hex }}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedColors(prev => prev.filter(c => c !== color.hex))
                            } else {
                              setSelectedColors(prev => [...prev, color.hex])
                            }
                          }}
                          onMouseEnter={() => setHoveredColor(color.hex)}
                          onMouseLeave={() => setHoveredColor(null)}
                          title={`${color.hex} ${color.isPremium ? '(Premium)' : '(Free)'}`}
                        >
                          {color.isPremium && (
                            <Lock className="w-3 h-3 text-white absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-gray-800 rounded-full p-0.5" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  )
}
