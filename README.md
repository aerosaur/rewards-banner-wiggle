# Rewards Banner Wiggle

A responsive email subscription banner featuring sophisticated animation effects designed to increase user engagement and conversion rates for rewards programs.

## Overview

This interactive banner component combines modern web design principles with carefully crafted animations to create an compelling user experience. The banner encourages email sign-ups through strategic visual cues and smooth micro-interactions that guide users toward conversion.

## Animation Features

### Card Jiggle Animation
The banner's signature feature is a randomized jiggle animation applied to the rewards card that creates a sense of liveliness and draws attention without being intrusive.

**Technical Specifications:**
- **Duration**: 500ms per jiggle cycle
- **Timing**: Random intervals between 2-5 seconds
- **Initial Delay**: 1-4 seconds after page load
- **Motion Pattern**: 7-step rotation sequence with varying angles
- **Easing**: `ease-in-out` for natural movement
- **Accessibility**: Respects `prefers-reduced-motion` settings

**Animation Sequence:**
1. Base rotation: -5° (starting position)
2. Rotates -9° (15% keyframe)
3. Rotates -1° (30% keyframe)
4. Rotates -8° (45% keyframe)
5. Rotates -2° (60% keyframe)
6. Rotates -6° (75% keyframe)
7. Rotates -4° (90% keyframe)
8. Returns to -5° (100% keyframe)

### Circle Lift Effect
The pink circular background element features a synchronized pulse animation that creates a lifting effect during the card jiggle.

**Technical Specifications:**
- **Duration**: 500ms (synchronized with card jiggle)
- **Scale Range**: 1.0x to 1.12x
- **Shadow Progression**:
  - Base: 3px blur, 15% opacity
  - Peak: 14px vertical offset, 28px blur, 25% opacity
- **Effect**: Creates depth and emphasis through elevation
- **Timing**: Coordinated with card animation using CSS `:has()` selector

### Smart Button Interactions
The call-to-action button features proximity-based hover detection and animated visual feedback.

**Proximity Detection:**
- **Activation Distance**: 70px from button center
- **Deactivation Distance**: 100px (hysteresis prevents flickering)
- **Technology**: Custom JavaScript with `mousemove` event tracking
- **Performance**: Uses `requestAnimationFrame` for smooth 60fps animations
- **Touch Support**: Automatically disabled on touch devices
- **Keyboard Accessibility**: Triggers on focus for screen reader users

**Visual Feedback:**
- **Padding Animation**: Expands right padding from 20px to 44px
- **Icon Appearance**: Gift icon fades in with scale and position animation
- **Timing**: 320ms for padding, 200ms for icon with cubic-bezier easing
- **Feedback Delay**: Immediate response with no lag
- **Reset Behavior**: Smooth transition back to original state when cursor moves away

## Core Features

- **Responsive Layout**: Mobile-first design with breakpoints at 768px and 961px
- **Performance Optimized**: Lightweight JavaScript with efficient event handling
- **Accessibility Compliant**: ARIA labels, keyboard navigation, and reduced motion support
- **Cross-Browser Compatible**: Works on all modern browsers without polyfills
- **Email Integration Ready**: Data attributes prepared for marketing automation

## Component Architecture

### Main Banner Structure
```html
<div class="rewards-email-sub-banner">
  <div class="rewards-email-sub-banner__container">
    <div class="rewards-email-sub-banner__icon">
      <div class="rewards-email-sub-banner__image"></div> <!-- Wiggle target -->
    </div>
    <div class="rewards-email-sub-banner__content">
      <h2>Don't miss out on your reward!</h2>
      <p>Only Finder members get rewards. Sign up for free and be the first to hear about new offers.</p>
      <button class="rewards-email-sub-banner__cta-button">SIGN UP</button> <!-- Proximity target -->
    </div>
  </div>
</div>
```

## File Structure

```
├── index.html                                    # Main HTML document
├── css/                                         # Stylesheets directory
│   ├── custom.css                              # Animation definitions and component styles
│   ├── rewards-email-sub-banner.*.css         # Core banner component styles
│   ├── rewards.*.css                          # Base rewards system styles
│   └── *.css                                  # Framework and utility styles
├── js/                                         # JavaScript modules
│   ├── jiggle-animation.js                    # Wiggle and proximity animation logic
│   └── rewards-email-sub-banner.*.js         # Banner functionality and form handling
├── fonts/                                     # ModernEra typography assets
│   ├── ModernEra-Black.ttf
│   ├── ModernEra-Light.ttf
│   ├── ModernEra-LightItalic.ttf
│   └── ModernEra-Medium.otf
├── images/                                    # Visual assets
│   └── rewards-icon.svg                      # Rewards symbol
└── README.md                                 # Project documentation
```

## Implementation Details

### Animation Engine
The animation system uses vanilla JavaScript with modern browser APIs for optimal performance:

- **Event Management**: Passive event listeners for touch detection
- **Memory Efficiency**: Automatic cleanup of timeouts and intervals
- **Frame Optimization**: `requestAnimationFrame` for smooth animations
- **CPU Conservation**: Animations pause when tab is not visible

### CSS Architecture
Animations are implemented using CSS transforms and transitions for hardware acceleration:

- **GPU Acceleration**: `transform` properties utilize graphics hardware
- **Smooth Interpolation**: Cubic-bezier timing functions for natural motion
- **Responsive Behavior**: Animations scale appropriately on different screen sizes
- **Fallback Support**: Graceful degradation on older browsers

## Browser Support

Fully tested and compatible with:
- **Chrome**: 88+ (full feature support)
- **Firefox**: 85+ (full feature support)  
- **Safari**: 14+ (full feature support)
- **Edge**: 88+ (full feature support)
- **Mobile Safari**: iOS 14+ (touch-optimized)
- **Chrome Mobile**: Android 8+ (touch-optimized)

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aerosaur/rewards-banner-wiggle.git
   cd rewards-banner-wiggle
   ```

2. **Open in browser**:
   ```bash
   open index.html
   # or
   python -m http.server 8000  # For local development server
   ```

3. **Integration**: Copy the banner HTML structure and include the CSS/JS files in your project

## Customization

### Animation Timing
Modify timing variables in `jiggle-animation.js`:
```javascript
const minDelay = 2000;  // Minimum time between wiggles
const maxDelay = 5000;  // Maximum time between wiggles
```

### Proximity Sensitivity
Adjust hover detection in `jiggle-animation.js`:
```javascript
const enterRadius = 70;   // Distance to trigger hover
const leaveRadius = 100;  // Distance to remove hover
```