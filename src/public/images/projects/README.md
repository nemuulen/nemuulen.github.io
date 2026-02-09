# Project Images Folder

## Add Custom Project Images Here (Optional)

If you want to use your own project images instead of Unsplash, add them here.

## Recommended Image Specifications
- **Format**: PNG, JPG, or WebP
- **Dimensions**: 1600 x 1000 pixels (16:10 ratio)
- **File size**: Keep under 500KB each (compress if needed)
- **Quality**: High quality but optimized for web

## Example File Names
```
radikal.png
challo.png
aid-ai.png
dku-intersections.png
viral-campaign.png
data-visualization.png
loreal-brandstorm.png
computer-graphics.png
iot-project.png
```

## How to Use Your Images

After adding images here, update `/data/projects.ts`:

```typescript
// Change from:
image: 'https://images.unsplash.com/...'

// To:
image: '/images/projects/radikal.png'
```