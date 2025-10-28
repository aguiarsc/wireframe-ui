import { SiteNav } from '@/components/site-nav'
import { ShowcaseBlock } from '@/components/showcase-block'
import {
  ContactFormShowcase,
  DashboardShowcase,
  HeroSectionShowcase,
  LoginFormShowcase,
  PricingShowcase,
  ProductGridShowcase,
  ProfilePageShowcase,
  RegisterFormShowcase,
  SettingsPageShowcase,
} from './index'
import { showcaseCodes } from './showcase-codes'

export default function ShowcasePage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto flex min-h-svh flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <header className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Showcase Blocks
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Real-world UI patterns built with wireframe components. Copy and adapt these blocks
            for your mockups.
          </p>
        </header>

        <main className="flex flex-1 flex-col gap-16">
          <ShowcaseBlock
            title="Hero Section"
            description="Landing page hero with badge, heading, CTA buttons, and feature list"
            code={showcaseCodes.heroSection}
          >
            <HeroSectionShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Login Form"
            description="Authentication form with email/password inputs and social login options"
            code={showcaseCodes.loginForm}
          >
            <LoginFormShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Register Form"
            description="Multi-step registration with tabs for personal and account information"
            code={showcaseCodes.registerForm}
          >
            <RegisterFormShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Contact Form"
            description="Professional contact form with name, email, subject, and message fields"
            code={showcaseCodes.contactForm}
          >
            <ContactFormShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Dashboard"
            description="Admin dashboard with stat cards, charts, recent activity, and data table"
            code={showcaseCodes.dashboard}
          >
            <DashboardShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Pricing"
            description="Three-tier pricing cards with features and highlighted popular plan"
            code={showcaseCodes.pricing}
          >
            <PricingShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Product Grid"
            description="E-commerce product listing with search, filters, and product cards"
            code={showcaseCodes.productGrid}
          >
            <ProductGridShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Profile Page"
            description="User profile with avatar, bio, stats, and tabbed content"
            code={showcaseCodes.profilePage}
          >
            <ProfilePageShowcase />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Settings Page"
            description="Multi-tab settings interface for profile, account, and notifications"
            code={showcaseCodes.settingsPage}
          >
            <SettingsPageShowcase />
          </ShowcaseBlock>
        </main>
      </div>
    </>
  )
}
