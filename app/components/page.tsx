'use client'

import * as React from 'react'
import { ComponentPreview } from '@/components/component-preview'
import { ComponentGridWrapper } from '@/components/component-grid-wrapper'
import { SiteNav } from '@/components/site-nav'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/registry/new-york/ui/accordion'
import { Text } from '@/registry/new-york/ui/text'
import { AlertWireframe } from '@/registry/new-york/ui/alert'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Button } from '@/registry/new-york/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { DialogWireframeExample } from '@/registry/new-york/ui/dialog'
import { DrawerWireframeExample } from '@/registry/new-york/ui/drawer'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { MenubarWireframeExample } from '@/registry/new-york/ui/menubar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york/ui/select'
import { Separator } from '@/registry/new-york/ui/separator'

import { Switch } from '@/registry/new-york/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Textarea } from '@/registry/new-york/ui/textarea'
import { Toggle } from '@/registry/new-york/ui/toggle'
import { TooltipWireframeExample } from '@/registry/new-york/ui/tooltip'
import { BadgeWireframe } from '@/registry/new-york/ui/badge'
import { SonnerWireframeExample } from '@/registry/new-york/ui/sonner'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/registry/new-york/ui/breadcrumb'
import { ButtonGroup, ButtonGroupTextWireframe } from '@/registry/new-york/ui/button-group'
import { CollapsibleWireframeExample } from '@/registry/new-york/ui/collapsible'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItemWireframe,
  ContextMenuTrigger,
} from '@/registry/new-york/ui/context-menu'
import { HoverCardWireframeExample } from '@/registry/new-york/ui/hover-card'
import {
  Item,
  ItemContent,
  ItemDescriptionWireframe,
  ItemGroup,
  ItemMediaWireframe,
  ItemTitleWireframe,
} from '@/registry/new-york/ui/item'
import {
  Table,
  TableBody,
  TableCellWireframe,
  TableHeadWireframe,
  TableHeader,
  TableRow,
} from '@/registry/new-york/ui/table'
import { Kbd, KbdGroup } from '@/registry/new-york/ui/kbd'
import { Media } from '@/registry/new-york/ui/media'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/registry/new-york/ui/pagination'
import { Heading } from '@/registry/new-york/ui/heading'
import { ListGroup } from '@/registry/new-york/ui/list-group'
import { Paragraph } from '@/registry/new-york/ui/paragraph'
import { Section } from '@/registry/new-york/ui/section'
import { Slider } from '@/registry/new-york/ui/slider'
import { Stack } from '@/registry/new-york/ui/stack'
import {
  Sheet,
  SheetContent,
  SheetDescriptionWireframe,
  SheetHeader,
  SheetTitleWireframe,
  SheetTrigger,
} from '@/registry/new-york/ui/sheet'
import { ChartWireframe } from '@/registry/new-york/ui/chart'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/registry/new-york/ui/carousel'
import {
  Empty,
  EmptyDescriptionWireframe,
  EmptyHeader,
  EmptyMediaWireframe,
  EmptyTitleWireframe,
} from '@/registry/new-york/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/registry/new-york/ui/input-group'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from '@/registry/new-york/ui/file'

const COMPONENTS = [
  {
    name: 'accordion',
    title: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
  },
  {
    name: 'alert',
    title: 'Alert',
    description: 'Displays a callout for user attention with optional icon and variant styles.',
  },
  {
    name: 'avatar',
    title: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
  },
  {
    name: 'badge',
    title: 'Badge',
    description: 'Displays a badge or a component that looks like a badge with multiple variants.',
  },
  {
    name: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Displays the path to the current resource using a hierarchy of links.',
  },
  {
    name: 'button',
    title: 'Button',
    description:
      'Displays a button or a component that looks like a button with multiple variants and sizes.',
  },
  {
    name: 'button-group',
    title: 'Button Group',
    description: 'A button group component with wireframe helper for text labels.',
  },
  {
    name: 'card',
    title: 'Card',
    description: 'A container for displaying content with header, footer, and action sections.',
  },
  {
    name: 'carousel',
    title: 'Carousel',
    description: 'A carousel component with wireframe helper for slide content.',
  },
  {
    name: 'chart',
    title: 'Chart',
    description: 'Chart components with wireframe placeholder helper.',
  },
  {
    name: 'checkbox',
    title: 'Checkbox',
    description: 'A control that allows the user to toggle between checked and not checked.',
  },
  {
    name: 'collapsible',
    title: 'Collapsible',
    description: 'An interactive component which expands/collapses a panel.',
  },
  {
    name: 'context-menu',
    title: 'Context Menu',
    description: 'A context menu component with wireframe helpers for menu items.',
  },
  {
    name: 'dialog',
    title: 'Dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    name: 'drawer',
    title: 'Drawer',
    description:
      'A panel that slides out from the edge of the screen with support for multiple directions.',
  },
  {
    name: 'empty',
    title: 'Empty State',
    description: 'An empty state component with wireframe helpers.',
  },
  {
    name: 'field',
    title: 'Field',
    description: 'Form field components with wireframe helpers for labels and descriptions.',
  },
  {
    name: 'form',
    title: 'Form',
    description: 'Form components built on react-hook-form for managing form state.',
  },
  {
    name: 'heading',
    title: 'Heading',
    description:
      'A composition component that renders appropriately sized Text based on heading level (1-6).',
  },
  {
    name: 'hover-card',
    title: 'Hover Card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    name: 'input',
    title: 'Input',
    description: 'A text input field with support for various types and validation states.',
  },
  {
    name: 'input-group',
    title: 'Input Group',
    description: 'An input group component for combining inputs with addons.',
  },
  {
    name: 'item',
    title: 'Item',
    description: 'A flexible item component for lists with wireframe helpers.',
  },
  {
    name: 'kbd',
    title: 'Kbd',
    description: 'Displays keyboard shortcuts or keys with proper styling.',
  },
  {
    name: 'label',
    title: 'Label',
    description: 'Renders an accessible label associated with form controls.',
  },
  {
    name: 'list-group',
    title: 'ListGroup',
    description:
      'A composition component that renders list items with Text placeholders for wireframe prototyping.',
  },
  {
    name: 'media',
    title: 'Media',
    description:
      'A container for displaying images, videos, and audio with loading states and fallback placeholders.',
  },
  {
    name: 'menubar',
    title: 'Menubar',
    description:
      'A visually persistent menu common in desktop applications with nested menus and items.',
  },
  {
    name: 'pagination',
    title: 'Pagination',
    description: 'Pagination with page navigation, next and previous links.',
  },
  {
    name: 'paragraph',
    title: 'Paragraph',
    description:
      'A composition component that renders multiple Text lines to simulate paragraph content.',
  },
  {
    name: 'section',
    title: 'Section',
    description: 'A composition component with preset variants for common layout patterns.',
  },
  {
    name: 'select',
    title: 'Select',
    description:
      'Displays a list of options for the user to pick from with keyboard navigation support.',
  },
  {
    name: 'separator',
    title: 'Separator',
    description:
      'Visually or semantically separates content with horizontal or vertical orientation.',
  },
  {
    name: 'sheet',
    title: 'Sheet',
    description: 'A slide-out panel component with wireframe helpers for titles and descriptions.',
  },
  {
    name: 'sidebar',
    title: 'Sidebar',
    description:
      'A collapsible sidebar component with wireframe helpers for menu items and labels.',
  },
  {
    name: 'slider',
    title: 'Slider',
    description: 'An input where the user selects a value from within a given range.',
  },
  {
    name: 'stack',
    title: 'Stack',
    description:
      'A layout primitive for arranging wireframe elements with configurable spacing and direction.',
  },
  {
    name: 'switch',
    title: 'Switch',
    description: 'A control that allows the user to toggle between checked and unchecked states.',
  },
  {
    name: 'table',
    title: 'Table',
    description: 'A data table component with wireframe helpers for headers and cells.',
  },
  {
    name: 'tabs',
    title: 'Tabs',
    description:
      'A set of layered sections of content with tab triggers for switching between them.',
  },
  {
    name: 'text',
    title: 'Text',
    description:
      'A skeleton text placeholder component that renders thin animated lines for text content.',
  },
  {
    name: 'textarea',
    title: 'Textarea',
    description: 'A multi-line text input field with auto-resizing support.',
  },
  {
    name: 'toggle',
    title: 'Toggle',
    description: 'A two-state button that can be either on or off with multiple variants.',
  },
  {
    name: 'tooltip',
    title: 'Tooltip',
    description: 'A popup that displays information related to an element when focused or hovered.',
  },
]

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto flex min-h-svh flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <header className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Wireframe in your code. Ship with confidence.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components.
          </p>
        </header>
        <main className="flex flex-1 flex-col gap-12">
          <ComponentGridWrapper components={COMPONENTS}>
            <ComponentPreview
              name="accordion"
              title="Accordion"
              description="A vertically stacked set of interactive headings that each reveal a section of content."
              dependencies={['@radix-ui/react-accordion']}
              apiProps={[
                { name: 'type', type: '"single" | "multiple"', description: 'Determines whether one or multiple items can be opened at the same time.' },
                { name: 'collapsible', type: 'boolean', description: 'When type is "single", allows closing content when clicking trigger for an open item.' },
                { name: 'defaultValue', type: 'string | string[]', description: 'The value of the item to expand when initially rendered.' },
                { name: 'value', type: 'string | string[]', description: 'The controlled value of the item to expand.' },
                { name: 'onValueChange', type: '(value: string | string[]) => void', description: 'Event handler called when the expanded state changes.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the accordion.' },
              ]}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="min-w-0 flex-1">
                      <Text width="lg" color="default" truncate />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Text width="full" color="muted" />
                      <Text width="xl" color="muted" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="min-w-0 flex-1">
                      <Text width="xl" color="default" truncate />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Text width="full" color="subtle" />
                      <Text width="lg" color="muted" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="min-w-0 flex-1">
                      <Text width="md" color="default" truncate />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text width="full" color="muted" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentPreview>

            <ComponentPreview
              name="alert"
              title="Alert"
              description="Displays a callout for user attention with optional icon and variant styles."
              dependencies={['class-variance-authority']}
              apiProps={[
                { name: 'variant', type: '"default" | "destructive"', description: 'The visual style variant of the alert.' },
              ]}
            >
              <AlertWireframe />
            </ComponentPreview>

            <ComponentPreview
              name="avatar"
              title="Avatar"
              description="An image element with a fallback for representing the user."
              dependencies={['@radix-ui/react-avatar']}
              apiProps={[
                { name: 'src', type: 'string', description: 'The source URL of the avatar image.' },
                { name: 'alt', type: 'string', description: 'Alternative text for the avatar image.' },
              ]}
            >
              <Avatar>
                <AvatarFallback />
              </Avatar>
            </ComponentPreview>

            <ComponentPreview
              name="badge"
              title="Badge"
              description="Displays a badge or a component that looks like a badge with multiple variants."
              dependencies={['@radix-ui/react-slot', 'class-variance-authority']}
              apiProps={[
                { name: 'variant', type: '"default" | "secondary" | "outline" | "destructive"', description: 'The visual style variant of the badge.' },
                { name: 'asChild', type: 'boolean', description: 'Change the default rendered element for the one passed as a child.' },
              ]}
            >
              <div className="flex flex-wrap gap-2">
                <BadgeWireframe />
                <BadgeWireframe variant="secondary" icon={null} />
                <BadgeWireframe variant="outline" icon={null} />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="breadcrumb"
              title="Breadcrumb"
              description="Displays the path to the current resource using a hierarchy of links."
              dependencies={['@radix-ui/react-slot']}
              apiProps={[
                { name: 'asChild', type: 'boolean', description: 'For BreadcrumbLink: Change the default rendered element for the one passed as a child.' },
              ]}
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <Text width="xs" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <Text width="sm" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      <Text width="xs" />
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ComponentPreview>

            <ComponentPreview
              name="button"
              title="Button"
              description="Displays a button or a component that looks like a button with multiple variants and sizes."
              dependencies={['@radix-ui/react-slot', 'class-variance-authority']}
              apiProps={[
                { name: 'variant', type: '"default" | "outline" | "ghost" | "destructive" | "secondary" | "link"', description: 'The visual style variant of the button.' },
                { name: 'size', type: '"default" | "sm" | "lg" | "icon"', description: 'The size of the button.' },
                { name: 'asChild', type: 'boolean', description: 'Change the default rendered element for the one passed as a child.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the button.' },
              ]}
            >
              <div className="flex flex-wrap gap-2">
                <Button>
                  <Text width="sm" />
                </Button>
                <Button variant="secondary">
                  <Text width="sm" />
                </Button>
                <Button variant="outline">
                  <Text width="sm" />
                </Button>
                <Button variant="ghost">
                  <Text width="sm" />
                </Button>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="button-group"
              title="Button Group"
              description="A button group component with wireframe helper for text labels."
              dependencies={['@radix-ui/react-slot', 'class-variance-authority']}
              apiProps={[
                { name: 'orientation', type: '"horizontal" | "vertical"', description: 'The orientation of the button group.' },
              ]}
            >
              <div className="space-y-4">
                <ButtonGroup>
                  <Button variant="outline">
                    <Text width="xs" />
                  </Button>
                  <Button variant="outline">
                    <Text width="xs" />
                  </Button>
                  <Button variant="outline">
                    <Text width="xs" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <ButtonGroupTextWireframe width="sm" />
                  <Button variant="outline">
                    <Text width="xs" />
                  </Button>
                </ButtonGroup>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="card"
              title="Card"
              description="A container for displaying content with header, footer, and action sections."
              apiProps={[
                { name: 'wireframe', type: '"compact" | "detailed" | "none"', description: 'Controls the spacing and padding of the card and its children.' },
              ]}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <Text width="md" truncate />
                  </CardTitle>
                  <CardDescription>
                    <Text width="lg" color="muted" truncate />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Text width="full" color="muted" truncate />
                    <Text width="xl" color="muted" truncate />
                  </div>
                </CardContent>
              </Card>
            </ComponentPreview>

            <ComponentPreview
              name="carousel"
              title="Carousel"
              description="A carousel component with wireframe helper for slide content."
              dependencies={['embla-carousel-react']}
              apiProps={[
                { name: 'orientation', type: '"horizontal" | "vertical"', description: 'The orientation of the carousel.' },
                { name: 'opts', type: 'CarouselOptions', description: 'Options to pass to the Embla Carousel instance.' },
                { name: 'plugins', type: 'CarouselPlugin[]', description: 'Plugins to pass to the Embla Carousel instance.' },
                { name: 'setApi', type: '(api: CarouselApi) => void', description: 'Callback to get the Embla Carousel API instance.' },
              ]}
            >
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  <CarouselItem>
                    <div className="space-y-2">
                      <Media type="image" className="aspect-video w-full" />
                      <Text width="lg" emphasis="primary" />
                      <Text width="full" color="muted" size="sm" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="space-y-2">
                      <Media type="image" className="aspect-video w-full" />
                      <Text width="md" emphasis="primary" />
                      <Text width="xl" color="muted" size="sm" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="space-y-2">
                      <Media type="image" className="aspect-video w-full" />
                      <Text width="xl" emphasis="primary" />
                      <Text width="lg" color="muted" size="sm" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </ComponentPreview>

            <ComponentPreview
              name="chart"
              title="Chart"
              description="Chart components with wireframe placeholder helper."
              dependencies={['recharts']}
              apiProps={[
                { name: 'config', type: 'ChartConfig', description: 'Configuration object for chart colors and labels.' },
                { name: 'id', type: 'string', description: 'Optional unique identifier for the chart.' },
              ]}
            >
              <ChartWireframe variant="bar" />
            </ComponentPreview>

            <ComponentPreview
              name="checkbox"
              title="Checkbox"
              description="A control that allows the user to toggle between checked and not checked."
              dependencies={['@radix-ui/react-checkbox']}
              apiProps={[
                { name: 'checked', type: 'boolean | "indeterminate"', description: 'The controlled checked state of the checkbox.' },
                { name: 'defaultChecked', type: 'boolean', description: 'The checked state when initially rendered.' },
                { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Event handler called when the checked state changes.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the checkbox.' },
              ]}
            >
              <div className="flex flex-col divide-y">
                <div className="flex items-center space-x-3 pb-3">
                  <Checkbox id="terms1" defaultChecked />
                  <label htmlFor="terms1" className="flex-1">
                    <Text width="full" />
                  </label>
                </div>
                <div className="flex items-center space-x-3 pt-3">
                  <Checkbox id="terms2" defaultChecked />
                  <label htmlFor="terms2" className="flex-1">
                    <div className="space-y-1.5">
                      <Text width="full" />
                      <Text width="md" color="muted" size="sm" />
                    </div>
                  </label>
                </div>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="collapsible"
              title="Collapsible"
              description="An interactive component which expands/collapses a panel."
              dependencies={['@radix-ui/react-collapsible']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the collapsible.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the collapsible.' },
              ]}
            >
              <CollapsibleWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="context-menu"
              title="Context Menu"
              description="A context menu component with wireframe helpers for menu items."
              dependencies={['@radix-ui/react-context-menu']}
              apiProps={[
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'modal', type: 'boolean', description: 'Whether the context menu is modal.' },
              ]}
            >
              <ContextMenu>
                <ContextMenuTrigger asChild>
                  <div className="border-input flex h-32 w-full items-center justify-center rounded-md border border-dashed">
                    <Text width="sm" color="muted" />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-48">
                  <ContextMenuItemWireframe width="md" />
                  <ContextMenuItemWireframe width="sm" />
                  <ContextMenuItemWireframe width="lg" />
                </ContextMenuContent>
              </ContextMenu>
            </ComponentPreview>

            <ComponentPreview
              name="dialog"
              title="Dialog"
              description="A modal dialog that interrupts the user with important content and expects a response."
              dependencies={['@radix-ui/react-dialog']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the dialog.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'modal', type: 'boolean', description: 'Whether the dialog is modal (blocks interaction with the rest of the page).' },
              ]}
            >
              <DialogWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="drawer"
              title="Drawer"
              description="A panel that slides out from the edge of the screen with support for multiple directions."
              dependencies={['vaul']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the drawer.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'direction', type: '"top" | "right" | "bottom" | "left"', description: 'The direction from which the drawer slides out.' },
              ]}
            >
              <DrawerWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="empty"
              title="Empty State"
              description="An empty state component with wireframe helpers."
              dependencies={['class-variance-authority']}
              apiProps={[
                { name: 'variant', type: '"default" | "icon"', description: 'The visual style variant for EmptyMedia component.' },
              ]}
            >
              <Empty className="border">
                <EmptyHeader>
                  <EmptyMediaWireframe />
                  <EmptyTitleWireframe width="md" />
                  <EmptyDescriptionWireframe width="lg" />
                </EmptyHeader>
                <div className="flex gap-2">
                  <Button>
                    <Text width="sm" />
                  </Button>
                  <Button variant="outline">
                    <Text width="sm" />
                  </Button>
                </div>
              </Empty>
            </ComponentPreview>

            <ComponentPreview
              name="field"
              title="Field"
              description="Form field components with wireframe helpers for labels and descriptions."
              dependencies={['class-variance-authority']}
              apiProps={[
                { name: 'orientation', type: '"vertical" | "horizontal" | "responsive"', description: 'The layout orientation of the field.' },
              ]}
            >
              <div className="space-y-4">
                <Field orientation="vertical">
                  <FieldLabel>
                    <Text width="sm" size="sm" />
                  </FieldLabel>
                  <FieldContent>
                    <Input variant="wireframe" />
                    <FieldDescription>
                      <Text width="lg" size="sm" color="muted" />
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <Field orientation="horizontal">
                  <FieldLabel>
                    <Text width="sm" size="sm" />
                  </FieldLabel>
                  <FieldContent>
                    <Input variant="wireframe" />
                  </FieldContent>
                </Field>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="form"
              title="Form"
              description="Form components built on react-hook-form for managing form state."
              dependencies={['react-hook-form', '@radix-ui/react-label', '@radix-ui/react-slot']}
              apiProps={[
                { name: 'name', type: 'string', description: 'For FormField: The name of the field in the form.' },
                { name: 'control', type: 'Control', description: 'For FormField: The control object from useForm hook.' },
                { name: 'render', type: '(props) => ReactElement', description: 'For FormField: Render function that receives field props.' },
              ]}
            >
              <div className="space-y-4 rounded-md border p-4">
                <div className="space-y-2">
                  <Label>
                    <Text width="sm" size="sm" />
                  </Label>
                  <Input variant="wireframe" />
                  <p className="text-muted-foreground text-sm">
                    <Text width="lg" size="sm" color="muted" />
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>
                    <Text width="sm" size="sm" />
                  </Label>
                  <Input variant="wireframe" />
                </div>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="heading"
              title="Heading"
              description="A composition component that renders appropriately sized Text based on heading level (1-6)."
              apiProps={[
                { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', description: 'The heading level which determines the size and semantic tag.' },
                { name: 'as', type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"', description: 'Override the default semantic heading tag.' },
              ]}
            >
              <div className="space-y-4">
                <Heading level={1} />
                <Heading level={2} />
                <Heading level={3} />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="hover-card"
              title="Hover Card"
              description="For sighted users to preview content available behind a link."
              dependencies={['@radix-ui/react-hover-card']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the hover card.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'openDelay', type: 'number', description: 'The duration from when the mouse enters the trigger until the hover card opens.' },
                { name: 'closeDelay', type: 'number', description: 'The duration from when the mouse leaves the trigger until the hover card closes.' },
              ]}
            >
              <HoverCardWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="input"
              title="Input"
              description="A text input field with support for various types and validation states."
              apiProps={[
                { name: 'type', type: 'string', description: 'The type of input (text, email, password, etc.).' },
                { name: 'placeholder', type: 'string', description: 'Placeholder text for the input.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the input.' },
                { name: 'variant', type: '"default" | "wireframe"', description: 'The visual style variant of the input.' },
                { name: 'skeletonMaxLength', type: 'number', description: 'Maximum character length for skeleton mode in wireframe variant.' },
                { name: 'skeletonIcon', type: 'React.ReactNode', description: 'Custom icon to display in wireframe variant.' },
              ]}
            >
              <Input variant="wireframe" className="w-full" />
            </ComponentPreview>

            <ComponentPreview
              name="input-group"
              title="Input Group"
              description="An input group component for combining inputs with addons."
              dependencies={['class-variance-authority']}
              apiProps={[
                { name: 'align', type: '"inline-start" | "inline-end" | "block-start" | "block-end"', description: 'For InputGroupAddon: The alignment of the addon relative to the input.' },
              ]}
            >
              <div className="space-y-4">
                <InputGroup>
                  <InputGroupInput variant="wireframe" />
                </InputGroup>
                <InputGroup>
                  <InputGroupInput variant="wireframe" />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>
                      <Text width="xs" size="sm" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="item"
              title="Item"
              description="A flexible item component for lists with wireframe helpers."
              dependencies={['@radix-ui/react-slot', 'class-variance-authority']}
              apiProps={[
                { name: 'variant', type: '"default" | "outline" | "muted"', description: 'The visual style variant of the item.' },
                { name: 'size', type: '"default" | "sm"', description: 'The size of the item.' },
                { name: 'asChild', type: 'boolean', description: 'Change the default rendered element for the one passed as a child.' },
              ]}
            >
              <ItemGroup className="w-full">
                <Item>
                  <ItemMediaWireframe variant="image" />
                  <ItemContent>
                    <ItemTitleWireframe width="md" />
                    <ItemDescriptionWireframe width="lg" />
                  </ItemContent>
                </Item>
                <Item>
                  <ItemMediaWireframe variant="image" />
                  <ItemContent>
                    <ItemTitleWireframe width="sm" />
                    <ItemDescriptionWireframe width="xl" />
                  </ItemContent>
                </Item>
                <Item>
                  <ItemMediaWireframe variant="image" />
                  <ItemContent>
                    <ItemTitleWireframe width="lg" />
                    <ItemDescriptionWireframe width="md" />
                  </ItemContent>
                </Item>
              </ItemGroup>
            </ComponentPreview>

            <ComponentPreview
              name="kbd"
              title="Kbd"
              description="Displays keyboard shortcuts or keys with proper styling."
            >
              <div className="flex flex-wrap gap-2">
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>⌥</Kbd>
                <Kbd>⌃</Kbd>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="label"
              title="Label"
              description="Renders an accessible label associated with form controls."
              dependencies={['@radix-ui/react-label']}
              apiProps={[
                { name: 'htmlFor', type: 'string', description: 'The id of the form control this label is associated with.' },
              ]}
            >
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Text width="xs" />
                </Label>
                <Input id="email" variant="wireframe" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="list-group"
              title="ListGroup"
              description="A composition component that renders list items with Text placeholders for wireframe prototyping."
              apiProps={[
                { name: 'items', type: 'number', description: 'Number of list items to render.' },
                { name: 'variant', type: '"bullet" | "number" | "none"', description: 'The style of list markers.' },
                { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl"', description: 'The size of the text in each item.' },
                { name: 'itemWidth', type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"', description: 'The width of text in each item.' },
                { name: 'spacing', type: '"tight" | "normal" | "relaxed"', description: 'The spacing between list items.' },
              ]}
            >
              <div className="space-y-4">
                <ListGroup items={3} variant="bullet" />
                <ListGroup items={3} variant="number" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="media"
              title="Media"
              description="A container for displaying images, videos, and audio with loading states and fallback placeholders."
              apiProps={[
                { name: 'src', type: 'string', description: 'The source URL of the media.' },
                { name: 'alt', type: 'string', description: 'Alternative text for the media.' },
                { name: 'type', type: '"image" | "video" | "audio"', description: 'The type of media to display.' },
                { name: 'aspectRatio', type: '"square" | "video" | "portrait" | "auto"', description: 'The aspect ratio of the media container.' },
                { name: 'loading', type: 'boolean', description: 'Whether the media is in a loading state.' },
                { name: 'onLoad', type: '() => void', description: 'Callback when media finishes loading.' },
                { name: 'onError', type: '() => void', description: 'Callback when media fails to load.' },
              ]}
            >
              <div className="grid grid-cols-3 gap-4">
                <Media type="image" className="h-32 w-full" />
                <Media type="video" className="h-32 w-full" />
                <Media type="audio" className="h-32 w-full" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="menubar"
              title="Menubar"
              description="A visually persistent menu common in desktop applications with nested menus and items."
              dependencies={['@radix-ui/react-menubar']}
              apiProps={[
                { name: 'value', type: 'string', description: 'The controlled value of the menu that is currently open.' },
                { name: 'defaultValue', type: 'string', description: 'The value of the menu that should be open when initially rendered.' },
                { name: 'onValueChange', type: '(value: string) => void', description: 'Event handler called when the value changes.' },
              ]}
            >
              <MenubarWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="pagination"
              title="Pagination"
              description="Pagination with page navigation, next and previous links."
              dependencies={[]}
              apiProps={[
                { name: 'isActive', type: 'boolean', description: 'For PaginationLink: Whether the page link is currently active.' },
                { name: 'size', type: '"default" | "sm" | "lg" | "icon"', description: 'For PaginationLink: The size of the pagination link.' },
              ]}
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#">
                      <Text width="xs" className="hidden sm:block" />
                    </PaginationPrevious>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      <Text width="xs" />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Text width="xs" />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Text width="xs" />
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#">
                      <Text width="xs" className="hidden sm:block" />
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ComponentPreview>

            <ComponentPreview
              name="paragraph"
              title="Paragraph"
              description="A composition component that renders multiple Text lines to simulate paragraph content."
              apiProps={[
                { name: 'lines', type: 'number', description: 'Number of text lines to render.' },
                { name: 'lastLineWidth', type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"', description: 'Width of the last line.' },
                { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl"', description: 'The size of the text lines.' },
                { name: 'color', type: '"default" | "muted" | "subtle" | "primary" | "secondary" | "accent"', description: 'The color of the text lines.' },
                { name: 'spacing', type: '"tight" | "normal" | "relaxed"', description: 'The spacing between lines.' },
              ]}
            >
              <div className="space-y-4">
                <Paragraph lines={3} />
                <Paragraph lines={4} spacing="relaxed" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="section"
              title="Section"
              description="A composition component with preset variants for common layout patterns (hero, content-two-column, feature-grid)."
              apiProps={[
                { name: 'variant', type: '"hero" | "content-two-column" | "feature-grid" | "custom"', description: 'The preset layout variant to use.' },
                { name: 'spacing', type: '"tight" | "normal" | "relaxed"', description: 'The spacing between elements in the section.' },
              ]}
            >
              <div className="space-y-8">
                <Section variant="hero" spacing="tight" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="select"
              title="Select"
              description="Displays a list of options for the user to pick from with keyboard navigation support."
              dependencies={['@radix-ui/react-select']}
              apiProps={[
                { name: 'value', type: 'string', description: 'The controlled value of the select.' },
                { name: 'defaultValue', type: 'string', description: 'The value when initially rendered.' },
                { name: 'onValueChange', type: '(value: string) => void', description: 'Event handler called when the value changes.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the select.' },
                { name: 'open', type: 'boolean', description: 'The controlled open state of the select.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
              ]}
            >
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue>
                    <Text width="sm" />
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="item1">
                    <Text width="md" />
                  </SelectItem>
                  <SelectItem value="item2">
                    <Text width="sm" />
                  </SelectItem>
                  <SelectItem value="item3">
                    <Text width="lg" />
                  </SelectItem>
                </SelectContent>
              </Select>
            </ComponentPreview>

            <ComponentPreview
              name="separator"
              title="Separator"
              description="Visually or semantically separates content with horizontal or vertical orientation."
              dependencies={['@radix-ui/react-separator']}
              apiProps={[
                { name: 'orientation', type: '"horizontal" | "vertical"', description: 'The orientation of the separator.' },
                { name: 'decorative', type: 'boolean', description: 'Whether the separator is purely decorative (not announced by screen readers).' },
              ]}
            >
              <div className="w-full space-y-2">
                <Text width="xs" />
                <Separator />
                <Text width="xs" />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="sheet"
              title="Sheet"
              description="A slide-out panel component with wireframe helpers."
              dependencies={['@radix-ui/react-dialog']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the sheet.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'side', type: '"top" | "right" | "bottom" | "left"', description: 'The side from which the sheet slides out.' },
              ]}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Text width="sm" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitleWireframe width="md" />
                    <SheetDescriptionWireframe width="lg" />
                  </SheetHeader>
                  <div className="space-y-4 py-4">
                    <Text width="full" />
                    <Text width="xl" />
                    <Text width="lg" />
                  </div>
                </SheetContent>
              </Sheet>
            </ComponentPreview>

            <ComponentPreview
              name="sidebar"
              title="Sidebar"
              description="A composable sidebar component with wireframe helpers for navigation."
              dependencies={['@radix-ui/react-slot', 'class-variance-authority']}
              apiProps={[
                { name: 'defaultOpen', type: 'boolean', description: 'For SidebarProvider: The open state when initially rendered.' },
                { name: 'open', type: 'boolean', description: 'For SidebarProvider: The controlled open state of the sidebar.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'For SidebarProvider: Event handler called when the open state changes.' },
                { name: 'side', type: '"left" | "right"', description: 'For Sidebar: The side where the sidebar appears.' },
                { name: 'variant', type: '"sidebar" | "floating" | "inset"', description: 'For Sidebar: The visual variant of the sidebar.' },
                { name: 'collapsible', type: '"offcanvas" | "icon" | "none"', description: 'For Sidebar: The collapsible behavior of the sidebar.' },
              ]}
            >
              <div className="border-input flex h-80 w-full overflow-hidden rounded-lg border">
                <div className="bg-sidebar text-sidebar-foreground flex w-64 flex-col border-r">
                  <div className="flex flex-col gap-2 p-2">
                    <div className="flex items-center gap-2 rounded-md p-2">
                      <Avatar>
                        <AvatarFallback />
                      </Avatar>
                      <div className="flex flex-1 flex-col gap-1">
                        <Text width="sm" size="sm" emphasis="primary" />
                        <Text width="xs" size="xs" color="muted" />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-1 flex-col gap-2 p-2">
                    <div className="px-2 py-1.5">
                      <Text width="xs" size="xs" color="muted" />
                    </div>
                    <div className="space-y-1">
                      <div className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5">
                        <Text width="sm" size="sm" />
                      </div>
                      <div className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5">
                        <Text width="md" size="sm" />
                      </div>
                      <div className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5">
                        <Text width="sm" size="sm" />
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="px-2 py-1.5">
                      <Text width="xs" size="xs" color="muted" />
                    </div>
                    <div className="space-y-1">
                      <div className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5">
                        <Text width="lg" size="sm" />
                      </div>
                      <div className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5">
                        <Text width="sm" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/20 flex flex-1 flex-col items-center justify-center gap-2 p-4">
                  <Text width="lg" emphasis="secondary" />
                  <Text width="full" color="muted" size="sm" />
                </div>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="slider"
              title="Slider"
              description="An input where the user selects a value from within a given range."
              dependencies={['@radix-ui/react-slider']}
              apiProps={[
                { name: 'defaultValue', type: 'number[]', description: 'The value of the slider when initially rendered.' },
                { name: 'value', type: 'number[]', description: 'The controlled value of the slider.' },
                { name: 'onValueChange', type: '(value: number[]) => void', description: 'Event handler called when the value changes.' },
                { name: 'min', type: 'number', description: 'The minimum value of the slider.' },
                { name: 'max', type: 'number', description: 'The maximum value of the slider.' },
                { name: 'step', type: 'number', description: 'The stepping interval.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the slider.' },
              ]}
            >
              <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
            </ComponentPreview>

            <ComponentPreview
              name="sonner"
              title="Sonner"
              description="An opinionated toast component for React with beautiful animations and icons."
              dependencies={['sonner', 'next-themes']}
              apiProps={[
                { name: 'position', type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"', description: 'The position where toasts will appear.' },
                { name: 'expand', type: 'boolean', description: 'Whether toasts expand on hover.' },
                { name: 'richColors', type: 'boolean', description: 'Whether to use rich colors for different toast types.' },
                { name: 'closeButton', type: 'boolean', description: 'Whether to show a close button on toasts.' },
              ]}
            >
              <SonnerWireframeExample />
            </ComponentPreview>

            <ComponentPreview
              name="stack"
              title="Stack"
              description="A layout primitive for arranging wireframe elements with configurable spacing and direction."
              apiProps={[
                { name: 'direction', type: '"vertical" | "horizontal"', description: 'The direction to stack children.' },
                { name: 'spacing', type: '"xs" | "sm" | "md" | "lg" | "xl"', description: 'The spacing between children.' },
                { name: 'align', type: '"start" | "center" | "end" | "stretch"', description: 'How children are aligned on the cross axis.' },
                { name: 'justify', type: '"start" | "center" | "end" | "between" | "around"', description: 'How children are justified on the main axis.' },
              ]}
            >
              <div className="space-y-4">
                <Stack direction="vertical" spacing="md">
                  <Text width="lg" />
                  <Text width="md" />
                  <Text width="xl" />
                </Stack>
                <Stack direction="horizontal" spacing="sm">
                  <Text width="sm" />
                  <Text width="sm" />
                  <Text width="sm" />
                </Stack>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="switch"
              title="Switch"
              description="A control that allows the user to toggle between checked and unchecked states."
              dependencies={['@radix-ui/react-switch']}
              apiProps={[
                { name: 'checked', type: 'boolean', description: 'The controlled checked state of the switch.' },
                { name: 'defaultChecked', type: 'boolean', description: 'The checked state when initially rendered.' },
                { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Event handler called when the checked state changes.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the switch.' },
              ]}
            >
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" defaultChecked />
                <Label htmlFor="airplane-mode">
                  <Text width="sm" />
                </Label>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="table"
              title="Table"
              description="A data table component with wireframe helpers for headers and cells."
              apiProps={[
                { name: 'className', type: 'string', description: 'Additional CSS classes for styling table elements.' },
              ]}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeadWireframe width="sm" />
                    <TableHeadWireframe width="md" />
                    <TableHeadWireframe width="sm" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCellWireframe width="sm" />
                    <TableCellWireframe width="lg" />
                    <TableCellWireframe width="xs" />
                  </TableRow>
                  <TableRow>
                    <TableCellWireframe width="sm" />
                    <TableCellWireframe width="md" />
                    <TableCellWireframe width="xs" />
                  </TableRow>
                  <TableRow>
                    <TableCellWireframe width="sm" />
                    <TableCellWireframe width="xl" />
                    <TableCellWireframe width="xs" />
                  </TableRow>
                </TableBody>
              </Table>
            </ComponentPreview>

            <ComponentPreview
              name="tabs"
              title="Tabs"
              description="A set of layered sections of content with tab triggers for switching between them."
              dependencies={['@radix-ui/react-tabs']}
              apiProps={[
                { name: 'defaultValue', type: 'string', description: 'The value of the tab that should be active when initially rendered.' },
                { name: 'value', type: 'string', description: 'The controlled value of the active tab.' },
                { name: 'onValueChange', type: '(value: string) => void', description: 'Event handler called when the active tab changes.' },
              ]}
            >
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">
                    <Text width="xs" />
                  </TabsTrigger>
                  <TabsTrigger value="password">
                    <Text width="sm" />
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-2">
                  <Text width="full" color="muted" />
                  <Text width="lg" color="muted" />
                </TabsContent>
                <TabsContent value="password" className="space-y-2">
                  <Text width="full" color="muted" />
                  <Text width="md" color="muted" />
                </TabsContent>
              </Tabs>
            </ComponentPreview>

            <ComponentPreview
              name="text"
              title="Text"
              description="A wireframe text placeholder with animation and emphasis variants for rapid prototyping."
              apiProps={[
                { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl"', description: 'The height/size of the text placeholder.' },
                { name: 'width', type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"', description: 'The width of the text placeholder.' },
                { name: 'color', type: '"default" | "muted" | "subtle" | "primary" | "secondary" | "accent"', description: 'The color of the text placeholder.' },
                { name: 'animate', type: '"none" | "pulse" | "shimmer" | "typing"', description: 'The animation style for the text placeholder.' },
                { name: 'emphasis', type: '"primary" | "secondary" | "tertiary" | "subtle"', description: 'The emphasis level (overrides color).' },
                { name: 'truncate', type: 'boolean', description: 'Whether to truncate the text with max-width.' },
              ]}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Text width="md" emphasis="primary" />
                  <Text width="lg" emphasis="secondary" />
                  <Text width="full" emphasis="tertiary" />
                </div>
                <div className="space-y-2">
                  <Text width="lg" animate="pulse" />
                  <Text width="md" animate="shimmer" />
                  <Text width="xl" animate="shimmer" />
                </div>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="textarea"
              title="Textarea"
              description="A multi-line text input field with auto-resizing support."
              apiProps={[
                { name: 'placeholder', type: 'string', description: 'Placeholder text for the textarea.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the textarea.' },
                { name: 'variant', type: '"default" | "wireframe"', description: 'The visual style variant of the textarea.' },
                { name: 'skeletonLines', type: 'number', description: 'Number of skeleton lines to display in wireframe variant.' },
                { name: 'skeletonMaxLength', type: 'number', description: 'Maximum character length for skeleton mode in wireframe variant.' },
              ]}
            >
              <Textarea variant="wireframe" skeletonLines={3} className="w-full" />
            </ComponentPreview>

            <ComponentPreview
              name="toggle"
              title="Toggle"
              description="A two-state button that can be either on or off with multiple variants."
              dependencies={['@radix-ui/react-toggle', 'class-variance-authority']}
              apiProps={[
                { name: 'pressed', type: 'boolean', description: 'The controlled pressed state of the toggle.' },
                { name: 'defaultPressed', type: 'boolean', description: 'The pressed state when initially rendered.' },
                { name: 'onPressedChange', type: '(pressed: boolean) => void', description: 'Event handler called when the pressed state changes.' },
                { name: 'variant', type: '"default" | "outline"', description: 'The visual style variant of the toggle.' },
                { name: 'size', type: '"default" | "sm" | "lg"', description: 'The size of the toggle.' },
                { name: 'disabled', type: 'boolean', description: 'When true, prevents the user from interacting with the toggle.' },
              ]}
            >
              <div className="flex gap-2">
                <Toggle defaultPressed>
                  <Text width="xs" />
                </Toggle>
                <Toggle variant="outline">
                  <Text width="xs" />
                </Toggle>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="tooltip"
              title="Tooltip"
              description="A popup that displays information related to an element when focused or hovered."
              dependencies={['@radix-ui/react-tooltip']}
              apiProps={[
                { name: 'open', type: 'boolean', description: 'The controlled open state of the tooltip.' },
                { name: 'defaultOpen', type: 'boolean', description: 'The open state when initially rendered.' },
                { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Event handler called when the open state changes.' },
                { name: 'delayDuration', type: 'number', description: 'The duration from when the mouse enters the trigger until the tooltip opens.' },
              ]}
            >
              <TooltipWireframeExample />
            </ComponentPreview>
          </ComponentGridWrapper>
        </main>
      </div>
    </>
  )
}
