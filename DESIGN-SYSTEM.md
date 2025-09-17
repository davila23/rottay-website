# 🎨 ROTTAY - Design System & UX Documentation

## 📐 Layout Structure

```
┌────────────────────────────────────────────────────────────────┐
│                         NAVIGATION BAR                         │
│  Logo                                    Solutions Products CTA │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      HERO SECTION (Bento)                      │
│  ┌──────────────────────────┬─────────────┬─────────────┐    │
│  │                          │   Metric    │   Metric    │    │
│  │   Main Hero Message      ├─────────────┴─────────────┤    │
│  │   "AI + Blockchain       │                           │    │
│  │    from Miami to LATAM"  │      Live Demo Widget     │    │
│  │                          │                           │    │
│  └──────────────────────────┴───────────────────────────┘    │
│                                                                │
│                    SERVICES GRID (Asymmetric)                  │
│  ┌─────────────────┬─────────────────┬─────────────────┐    │
│  │   Full Stack    │                 │     Mobile      │    │
│  │      + AI       │   Blockchain    │      Apps       │    │
│  ├─────────────────┤     Crypto      ├─────────────────┤    │
│  │                 │                 │                 │    │
│  │     DevOps      └─────────────────┤     Products    │    │
│  │                                   │   (BitHire.ai)  │    │
│  └───────────────────────────────────┴─────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## 🎯 UX Principles

### 1. **Visual Hierarchy**
- **Primary**: Hero message & CTAs
- **Secondary**: Service cards
- **Tertiary**: Supporting metrics & details

### 2. **Interaction Patterns**

#### Hover States
```
Normal → Hover
├── Card: Lift up 4px + Shadow
├── Button: Darken 10% + Scale 1.05
└── Link: Underline + Color change
```

#### Click Interactions
```
Service Card Click →
├── Expand to modal
├── Show detailed info
├── Tech stack visualization
└── Contact form pre-filled
```

### 3. **Animation Timeline**
```
0ms    - Page load
100ms  - Header fade in
200ms  - Hero content slides up
400ms  - Service cards stagger in
600ms  - Metrics count up
800ms  - Background particles start
```

## 🎨 Color System

### Primary Palette
```
Background Tiers:
├── Base:       #0A0A0A (Pure Black)
├── Elevated:   #1A1A1A (Card Background)
├── Overlay:    #2A2A2A (Modals)
└── Border:     #3A3A3A (Subtle borders)

Accent Colors:
├── Primary:    #D3C3A7 (Warm Beige)
├── Secondary:  #E5D4B6 (Light Beige)
├── Success:    #10B981 (Green)
├── Warning:    #F59E0B (Amber)
└── Error:      #EF4444 (Red)

Text Colors:
├── Primary:    #FFFFFF (Headers)
├── Secondary:  #9A9A9A (Body)
├── Muted:      #6A6A6A (Captions)
└── Accent:     #D3C3A7 (Links)
```

## 🔤 Typography Scale

```
Display:  72px / 800 / -0.02em  → Hero headlines
H1:       48px / 700 / -0.01em  → Page titles
H2:       36px / 600 / 0        → Section headers
H3:       24px / 600 / 0        → Card titles
Body:     16px / 400 / 0.01em   → Paragraphs
Small:    14px / 400 / 0.02em   → Captions
Micro:    12px / 500 / 0.03em   → Labels
```

## 🎭 Component Behaviors

### Bento Grid Cards
```javascript
// Hover Effect
onHover: {
  scale: 1.02,
  shadow: "0 20px 40px rgba(211, 195, 167, 0.1)",
  borderColor: "#D3C3A7"
}

// Click Behavior
onClick: {
  if (hasDetails) → openModal()
  if (isProduct) → navigateToProduct()
  if (isService) → scrollToSection()
}
```

### Command Palette (CMD+K)
```
Triggers:
├── CMD+K (Mac)
├── CTRL+K (Windows)
└── Search Icon Click

Actions:
├── Navigate to section
├── Switch language
├── Contact team
├── View products
└── Download resources
```

## 🌐 Multi-language Strategy

```
Detection Flow:
Browser Lang → IP Location → User Preference → Default (EN)
     ↓             ↓              ↓
    ES/PT       LATAM→ES        Saved
```

## 📱 Responsive Breakpoints

```
Mobile:   320px  - 768px   → Stack all, hamburger menu
Tablet:   768px  - 1024px  → 2 column grid
Desktop:  1024px - 1440px  → Full bento grid
Wide:     1440px+          → Max width container
```

## 🚀 Performance Targets

```
Metrics:
├── FCP:  < 1.0s
├── LCP:  < 2.5s
├── CLS:  < 0.1
├── TTI:  < 3.5s
└── Score: > 95
```

## 💫 Special Effects

### 1. **Gradient Orbs** (Background)
- Slow floating animation
- Blur: 100px
- Opacity: 0.1-0.2
- Colors: Beige variants

### 2. **Code Rain** (Hero)
- Matrix-style falling code
- Subtle, background layer
- Opacity: 0.05
- Speed: Slow

### 3. **Tech Stack Cloud**
- 3D rotating logos
- Interactive on hover
- Particle connections
- WebGL powered

### 4. **Service Selector**
```
User clicks "I need..." →
├── Dropdown appears
├── Select service type
├── Cards reorganize
├── Relevant info highlights
└── CTA updates context
```

## 🎯 Conversion Points

1. **Primary CTA**: "Start Building" → Contact form
2. **Secondary**: "View BitHire.ai" → Product page
3. **Tertiary**: "Get Estimate" → AI calculator
4. **Chat**: Bottom-right AI assistant
5. **CMD+K**: Quick actions anywhere

## 📊 Analytics Events

```javascript
track('page_view', { section: 'hero' })
track('service_hover', { service: 'blockchain' })
track('cta_click', { button: 'start_building' })
track('language_switch', { from: 'en', to: 'es' })
track('command_palette_open')
track('chat_initiated')
```

## 🔮 Future Enhancements

- [ ] AR business card scanner
- [ ] Voice navigation
- [ ] Real-time collaboration viewer
- [ ] Client dashboard portal
- [ ] API status monitor
- [ ] Cost calculator with AI
- [ ] Portfolio 3D showcase
- [ ] Team availability indicator

---

## Implementation Priority:
1. ⭐ Bento Grid Layout
2. ⭐ Service Cards with hover
3. ⭐ Command Palette
4. ⭐ Multi-language
5. ⭐ BitHire.ai showcase
6. ⭐ Contact integration
7. ⭐ Analytics
8. ⭐ Performance optimization