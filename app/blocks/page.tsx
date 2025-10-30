import { SiteNav } from '@/components/site-nav'
import { BlockPreview } from '@/components/block-preview'
import { ContactForm } from '@/registry/new-york/blocks/contact-form'
import { Dashboard } from '@/registry/new-york/blocks/dashboard'
import { HeroSection } from '@/registry/new-york/blocks/hero-section'
import { LoginForm } from '@/registry/new-york/blocks/login-form'
import { Pricing } from '@/registry/new-york/blocks/pricing'
import { ProductGrid } from '@/registry/new-york/blocks/product-grid'
import { ProfilePage } from '@/registry/new-york/blocks/profile-page'
import { RegisterForm } from '@/registry/new-york/blocks/register-form'
import { SettingsPage } from '@/registry/new-york/blocks/settings-page'

export default function ShowcasePage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto flex min-h-svh flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <header className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Blocks
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Pre-built, complex component compositions that demonstrate real-world usage patterns.
            Install these blocks via CLI to quickly scaffold complete UI patterns in your wireframe
            mockups.
          </p>
        </header>

        <main className="flex flex-1 flex-col gap-16">
          <BlockPreview
            name="hero-section"
            title="Hero Section"
            description="Landing page hero with badge, heading, CTA buttons, and feature list"
            installCommand="hero-section"
            components={['button', 'text', 'heading', 'badge', 'media', 'stack', 'icons']}
          >
            <HeroSection />
          </BlockPreview>

          <BlockPreview
            name="login-form"
            title="Login Form"
            description="Authentication form with email/password inputs and social login options"
            installCommand="login-form"
            components={['button', 'card', 'input', 'label', 'text', 'separator', 'checkbox', 'icons']}
          >
            <LoginForm />
          </BlockPreview>

          <BlockPreview
            name="register-form"
            title="Register Form"
            description="Multi-step registration with tabs for personal and account information"
            installCommand="register-form"
            components={['button', 'card', 'input', 'label', 'text', 'checkbox', 'tabs', 'icons']}
          >
            <RegisterForm />
          </BlockPreview>

          <BlockPreview
            name="contact-form"
            title="Contact Form"
            description="Professional contact form with name, email, subject, and message fields"
            installCommand="contact-form"
            components={['button', 'card', 'input', 'label', 'text', 'textarea', 'select', 'icons']}
          >
            <ContactForm />
          </BlockPreview>

          <BlockPreview
            name="dashboard"
            title="Dashboard"
            description="Admin dashboard with stat cards, charts, recent activity, and data table"
            installCommand="dashboard"
            components={['card', 'text', 'chart', 'badge', 'table', 'avatar', 'icons']}
          >
            <Dashboard />
          </BlockPreview>

          <BlockPreview
            name="pricing"
            title="Pricing"
            description="Three-tier pricing cards with features and highlighted popular plan"
            installCommand="pricing"
            components={['button', 'card', 'text', 'badge', 'separator', 'heading', 'icons']}
          >
            <Pricing />
          </BlockPreview>

          <BlockPreview
            name="product-grid"
            title="Product Grid"
            description="E-commerce product listing with search, filters, and product cards"
            installCommand="product-grid"
            components={['card', 'text', 'badge', 'button', 'media', 'heading', 'select', 'input', 'icons']}
          >
            <ProductGrid />
          </BlockPreview>

          <BlockPreview
            name="profile-page"
            title="Profile Page"
            description="User profile with avatar, bio, stats, and tabbed content"
            installCommand="profile-page"
            components={['card', 'text', 'badge', 'button', 'avatar', 'separator', 'tabs', 'media', 'item', 'icons']}
          >
            <ProfilePage />
          </BlockPreview>

          <BlockPreview
            name="settings-page"
            title="Settings Page"
            description="Multi-tab settings interface for profile, account, and notifications"
            installCommand="settings-page"
            components={['button', 'card', 'input', 'label', 'text', 'separator', 'switch', 'tabs', 'avatar', 'textarea', 'select', 'icons']}
          >
            <SettingsPage />
          </BlockPreview>
        </main>
      </div>
    </>
  )
}
