# Design System — Agentic Agency

**Version :** 1.0  
**Date :** 29 mai 2026  
**Statut :** Validé  
**Source :** PRD v1.0 (§5 Design System, §7 Architecture) + CdC v2.2 (§9 Identité visuelle et UX)

---

## Table des matières

1. [Tokens de Design](#1-tokens-de-design)
2. [Composants](#2-composants)
3. [Responsive Design](#3-responsive-design)
4. [Accessibilité](#4-accessibilité)
5. [Animations](#5-animations)
6. [Exemples de Configuration](#6-exemples-de-configuration)

---

## 1. Tokens de Design

### 1.1 Palette de couleurs

#### Variables CSS / Tailwind

Les couleurs doivent refléter une identité **moderne, sobre, professionnelle** (CdC §9.1).

```css
/* tailwind.config.ts - theme.extend.colors */

:root {
  /* Couleur principale - À définir en phase design */
  --color-primary-50: #...;
  --color-primary-100: #...;
  --color-primary-500: #...;  /* Couleur principale */
  --color-primary-600: #...;
  --color-primary-700: #...;
  --color-primary-900: #...;

  /* Neutrals - Palette sobre */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  /* Couleurs sémantiques */
  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-700: #15803d;

  --color-error-50: #fef2f2;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;

  --color-warning-50: #fffbeb;
  --color-warning-500: #f59e0b;
  --color-warning-700: #b45309;

  --color-info-50: #eff6ff;
  --color-info-500: #3b82f6;
  --color-info-700: #1d4ed8;

  /* Arrière-plans */
  --color-bg-base: #ffffff;
  --color-bg-subtle: var(--color-neutral-50);
  --color-bg-contrast: var(--color-neutral-900);

  /* Texte */
  --color-text-base: var(--color-neutral-900);
  --color-text-muted: var(--color-neutral-600);
  --color-text-inverse: #ffffff;
}
```

#### Usage Tailwind

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          // ... etc
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          // ... etc
        },
        success: { /* ... */ },
        error: { /* ... */ },
        warning: { /* ... */ },
        info: { /* ... */ },
      },
    },
  },
}
```

#### Contrastes (accessibilité WCAG 2.1 AA)

- **Texte normal** (< 18px) : ratio ≥ 4.5:1
- **Texte large** (≥ 18px ou bold ≥ 14px) : ratio ≥ 3:1
- **Composants interactifs** : ratio ≥ 3:1

Validation via WebAIM Contrast Checker avant finalisation.

---

### 1.2 Typographie

#### Font families (next/font)

```typescript
// app/fonts.ts
import { Inter, Space_Grotesk } from 'next/font/google'

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Usage dans layout.tsx
<body className={`${fontSans.variable} ${fontDisplay.variable}`}>
```

#### Échelle typographique

```css
/* CSS Variables */
:root {
  /* Display - Space Grotesk (titres hero) */
  --font-display: var(--font-display);
  --text-display-xl: 4rem;     /* 64px - Hero H1 desktop */
  --text-display-lg: 3rem;     /* 48px - Hero H1 mobile */
  --text-display-md: 2.25rem;  /* 36px - H2 sections */

  /* Body - Inter (corps de texte) */
  --font-sans: var(--font-sans);
  --text-xl: 1.25rem;          /* 20px - Lead paragraphs */
  --text-lg: 1.125rem;         /* 18px - Body large */
  --text-base: 1rem;           /* 16px - Body default */
  --text-sm: 0.875rem;         /* 14px - Small text */
  --text-xs: 0.75rem;          /* 12px - Captions */

  /* Line heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

#### Classes Tailwind

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1' }],
        'display-lg': ['3rem', { lineHeight: '1.15' }],
        'display-md': ['2.25rem', { lineHeight: '1.2' }],
      },
    },
  },
}
```

---

### 1.3 Espacements

Échelle Tailwind standard (base 4px) avec extensions :

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '128': '32rem',   // 512px - sections pleine hauteur
        '144': '36rem',   // 576px
      },
    },
  },
}
```

#### Espacements sections

- **Entre sections** : `py-16` (desktop), `py-12` (mobile) — 64px/48px
- **Marges internes section** : `px-6` (mobile), `px-8` (tablet), container `max-w-7xl` (desktop)
- **Entre éléments** : `space-y-4` (16px), `space-y-6` (24px), `space-y-8` (32px)

---

### 1.4 Breakpoints

Mobile-first (PRD §5.3, NF06) :

```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'sm': '640px',    // Mobile large / Phablet
      'md': '768px',    // Tablet portrait
      'lg': '1024px',   // Tablet landscape / Desktop small
      'xl': '1280px',   // Desktop
      '2xl': '1536px',  // Desktop large
    },
  },
}
```

#### Stratégie responsive

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 640px | 1 colonne, nav drawer, texte 16px min |
| Tablet | 640-1024px | 2 colonnes grilles, nav collapse partiel |
| Desktop | > 1024px | 3-4 colonnes grilles, nav complète |

Tests obligatoires (PRD §F06) : iPhone SE (375px), iPad (768px), desktop 1440px.

---

### 1.5 Ombres & bordures

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'card': '0 2px 8px rgb(0 0 0 / 0.08)',
        'card-hover': '0 8px 24px rgb(0 0 0 / 0.12)',
      },
      borderRadius: {
        'sm': '0.25rem',   // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.75rem',   // 12px
        'lg': '1rem',      // 16px
        'xl': '1.5rem',    // 24px
        '2xl': '2rem',     // 32px
      },
    },
  },
}
```

---

### 1.6 Animations (Framer Motion)

#### Variants réutilisables

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
}

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
}

// Scroll animations (via Intersection Observer)
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
}
```

#### Usage dans composants

```tsx
import { motion } from 'framer-motion'
import { fadeIn, slideUp, stagger } from '@/lib/animations'

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.h1 variants={slideUp}>
        Livrez plus vite. Sans sacrifier la qualité.
      </motion.h1>
      <motion.p variants={fadeIn}>
        Agence de développement web, applications métier et mobiles.
      </motion.p>
    </motion.section>
  )
}
```

---

## 2. Composants

### 2.1 Primitifs (Radix UI)

Tous les composants interactifs utilisent **Radix UI** pour l'accessibilité native (WCAG 2.1 AA, PRD §NF02).

#### Button

```tsx
// components/ui/button.tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
        ghost: 'hover:bg-neutral-100 active:bg-neutral-200',
        link: 'text-primary-600 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

#### Input

```tsx
// components/ui/input.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base transition-colors',
          'placeholder:text-neutral-400',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
```

#### Select

```tsx
// components/ui/select.tsx
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-11 w-full items-center justify-between rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

// ... SelectContent, SelectItem avec Radix
```

#### Dialog (Modal)

```tsx
// components/ui/dialog.tsx
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))

// ... DialogContent avec Framer Motion
```

#### Sheet (Mobile drawer)

```tsx
// components/ui/sheet.tsx
import * as SheetPrimitive from '@radix-ui/react-dialog'

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 gap-4 bg-white p-6 shadow-xl transition ease-in-out',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        side === 'right' && 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
        side === 'left' && 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))

export { Sheet, SheetTrigger, SheetContent }
```

---

### 2.2 Composants de section

#### SectionWrapper

```tsx
// components/sections/section-wrapper.tsx
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  variant?: 'default' | 'contrast' | 'subtle'
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({
  id,
  variant = 'default',
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        variant === 'contrast' && 'bg-neutral-900 text-white',
        variant === 'subtle' && 'bg-neutral-50',
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}
```

#### SectionTitle

```tsx
// components/sections/section-title.tsx
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <h2 className="font-display text-display-md md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

#### ServiceCard

```tsx
// components/cards/service-card.tsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { scaleOnHover } from '@/lib/animations'

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  href: string
  ctaLabel?: string
}

export function ServiceCard({
  title,
  description,
  price,
  href,
  ctaLabel = 'En savoir plus',
}: ServiceCardProps) {
  return (
    <motion.div
      variants={scaleOnHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      {price && (
        <p className="text-sm text-neutral-500 mb-6">{price}</p>
      )}
      <Link
        href={href}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
      >
        {ctaLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  )
}
```

#### BlogCard

```tsx
// components/cards/blog-card.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: 'avis' | 'tests' | 'process'
  coverImage: string
  publishedAt: string
  readingTime: number
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readingTime,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div className="relative aspect-video">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium">
            {category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime} min
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  )
}
```

#### TechStackGrid

```tsx
// components/sections/tech-stack-grid.tsx
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface Stack {
  name: string
  version: string
  logo: string
  category: string
}

interface TechStackGridProps {
  stacks: Stack[]
}

export function TechStackGrid({ stacks }: TechStackGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stacks.map((stack) => (
        <Dialog key={stack.name}>
          <DialogTrigger asChild>
            <button className="group relative bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-3">
                <Image
                  src={stack.logo}
                  alt={stack.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div className="text-center">
                  <p className="font-bold text-neutral-900">{stack.name}</p>
                  <p className="text-sm text-neutral-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Version {stack.version}
                  </p>
                </div>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{stack.name}</h3>
              <p className="text-neutral-600">Version : {stack.version}</p>
              <p className="text-neutral-600">Catégorie : {stack.category}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
```

---

### 2.3 Composants de layout

#### Header

```tsx
// components/layout/header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Offres', href: '/#offres' },
    { label: 'Réalisations', href: '/#realisations' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold">
            Agentic Agency
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/#contact">Échanger sur votre projet</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    Échanger sur votre projet
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
```

#### Footer

```tsx
// components/layout/footer.tsx
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/developpement-web" className="text-neutral-400 hover:text-white transition-colors">Développement web</Link></li>
              <li><Link href="/services/applications-metier" className="text-neutral-400 hover:text-white transition-colors">Applications métier</Link></li>
              <li><Link href="/services/applications-mobiles" className="text-neutral-400 hover:text-white transition-colors">Applications mobiles</Link></li>
              <li><Link href="/services/conseil-organisation" className="text-neutral-400 hover:text-white transition-colors">Conseil & organisation</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bold text-lg mb-4">Blog</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">Tous les articles</Link></li>
              <li><Link href="/blog/avis" className="text-neutral-400 hover:text-white transition-colors">Avis</Link></li>
              <li><Link href="/blog/tests" className="text-neutral-400 hover:text-white transition-colors">Tests</Link></li>
              <li><Link href="/blog/process" className="text-neutral-400 hover:text-white transition-colors">Process</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="/mentions-legales" className="text-neutral-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="text-neutral-400 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link href="/cookies" className="text-neutral-400 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Nous contacter</Link></li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>© 2026 Agentic Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
```

---

### 2.4 Composants blog (MDX)

#### ArticleLayout

```tsx
// components/blog/article-layout.tsx
import Image from 'next/image'
import { Calendar, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ArticleLayoutProps {
  title: string
  excerpt: string
  category: string
  coverImage: string
  publishedAt: string
  readingTime: number
  author: {
    name: string
    role: string
    photo?: string
  }
  children: React.ReactNode
}

export function ArticleLayout({
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readingTime,
  author,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* En-tête */}
      <div className="mb-8">
        <Link href={`/blog/${category}`} className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium text-sm">
            {category}
          </span>
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-neutral-600">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime} min
          </span>
        </div>
      </div>

      {/* Cover */}
      <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
        <Image src={coverImage} alt={title} fill className="object-cover" />
      </div>

      {/* Corps */}
      <div className="prose prose-lg max-w-none">
        {children}
      </div>

      {/* Auteur */}
      <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center gap-4">
        {author.photo && (
          <Image
            src={author.photo}
            alt={author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-bold">{author.name}</p>
          <p className="text-neutral-600">{author.role}</p>
        </div>
      </div>

      {/* Partage LinkedIn */}
      <div className="mt-8 flex justify-center">
        <Button variant="secondary" size="lg" asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Share2 className="h-5 w-5" />
            Partager sur LinkedIn
          </a>
        </Button>
      </div>
    </article>
  )
}
```

---

## 3. Responsive Design

### 3.1 Mobile-first approach

Toutes les classes Tailwind sont écrites **mobile-first** :

```tsx
// Base = mobile
<div className="text-base px-4 py-8">
  // tablet
  <div className="md:text-lg md:px-8 md:py-12">
    // desktop
    <div className="lg:text-xl lg:px-12 lg:py-16">
```

### 3.2 Breakpoints stratégie

| Breakpoint | Grilles | Navigation | Typo |
|-----------|---------|------------|------|
| < 640px | 1 col | Drawer | 16px base |
| 640-1024px | 2 cols | Collapse partiel | 16-18px |
| > 1024px | 3-4 cols | Complète | 18-20px |

### 3.3 Navigation mobile (drawer)

Voir composant `Header` avec Radix Sheet (§2.3).

---

## 4. Accessibilité

### 4.1 Contrastes minimaux

- **Texte normal** : 4.5:1
- **Texte large** : 3:1
- **Composants interactifs** : 3:1

Validation via [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### 4.2 Focus indicators

```css
/* Tous les éléments interactifs */
.focus-visible:outline-none
.focus-visible:ring-2
.focus-visible:ring-primary-500
.focus-visible:ring-offset-2
```

### 4.3 Skip navigation

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 4.4 ARIA landmarks

```tsx
<header role="banner">
<nav role="navigation" aria-label="Navigation principale">
<main role="main">
<aside role="complementary" aria-label="Informations complémentaires">
<footer role="contentinfo">
```

### 4.5 Keyboard navigation

- Tab : navigation entre éléments focusables
- Enter / Space : activation buttons/links
- Esc : fermer modals/dropdowns
- Arrow keys : navigation dans menus

---

## 5. Animations

Voir §1.6 pour les variants Framer Motion réutilisables.

### 5.1 Performance

- Privilégier `transform` et `opacity` (GPU-accelerated)
- Éviter `width`, `height`, `top`, `left` (reflow)
- `will-change` avec parcimonie

### 5.2 Respect des préférences utilisateur

```tsx
// lib/animations.ts
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

export const getAnimationVariants = (variants: Variants) => {
  if (prefersReducedMotion) {
    return {
      hidden: {},
      visible: { transition: { duration: 0 } },
    }
  }
  return variants
}
```

---

## 6. Exemples de Configuration

### 6.1 tailwind.config.ts complet

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          900: 'var(--color-primary-900)',
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
        },
        success: { /* ... */ },
        error: { /* ... */ },
        warning: { /* ... */ },
        info: { /* ... */ },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1' }],
        'display-lg': ['3rem', { lineHeight: '1.15' }],
        'display-md': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgb(0 0 0 / 0.08)',
        'card-hover': '0 8px 24px rgb(0 0 0 / 0.12)',
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
```

### 6.2 app/layout.tsx avec fonts

```tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agentic Agency — Développement web, apps métier et mobiles',
  description: 'Agence de développement moderne. Symfony, Laravel, React, Flutter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## Validation & Critères d'Acceptation

### Checklist design system

- [ ] Palette couleurs définie (primaire + neutrals + sémantiques)
- [ ] Contrastes WCAG 2.1 AA validés (≥ 4.5:1 texte normal)
- [ ] Typographie : 2 familles (display + sans) chargées via next/font
- [ ] Échelle espacements Tailwind étendue (18, 22, 26, 30, 128, 144)
- [ ] Breakpoints mobile-first configurés (sm, md, lg, xl, 2xl)
- [ ] Ombres cartes (shadow-card, shadow-card-hover)
- [ ] Bordures arrondies (xl, 2xl)
- [ ] Variants Framer Motion (fadeIn, slideUp, stagger, scaleOnHover)
- [ ] Respect prefers-reduced-motion
- [ ] Composants Radix UI (Button, Input, Select, Dialog, Sheet)
- [ ] Composants sections (SectionWrapper, SectionTitle, ServiceCard, BlogCard, TechStackGrid)
- [ ] Header sticky + mobile drawer fonctionnel
- [ ] Footer avec 4 colonnes services/blog/légal/contact
- [ ] Focus indicators visibles (ring-2 ring-primary-500)
- [ ] Skip navigation implémenté
- [ ] ARIA landmarks sur header/nav/main/footer
- [ ] Navigation clavier complète testée
- [ ] tailwind.config.ts configuré avec toutes extensions
- [ ] app/layout.tsx avec fonts et classes variables

---

**Références :**
- PRD §5 Design System, §7 Architecture
- CdC §9 Identité visuelle et UX
- WCAG 2.1 niveau AA
- Next.js 15 Documentation
- Radix UI Documentation
- Framer Motion Documentation
- Tailwind CSS 4 Documentation

**Date de dernière mise à jour :** 29 mai 2026  
**Version :** 1.0
