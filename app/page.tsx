'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { ComponentPreview } from '@/components/component-preview'
import { ComponentGridWrapper } from '@/components/component-grid-wrapper'
import { SiteNav } from '@/components/site-nav'
import {
  AlignCenterIcon,
  AudioLinesIcon,
  BadgeAlertIcon,
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  CircleHelpIcon,
  GalleryThumbnailsIcon,
  GalleryVerticalEndIcon,
  IdCardIcon,
  MessageCircleDashedIcon,
} from '@/registry/new-york/icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/registry/new-york/ui/accordion'
import { Text } from '@/registry/new-york/ui/text'
import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/registry/new-york/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/new-york/ui/drawer'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/registry/new-york/ui/menubar'
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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york/ui/tooltip'
import { Badge } from '@/registry/new-york/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/registry/new-york/ui/breadcrumb'
import { ButtonGroup, ButtonGroupTextWireframe } from '@/registry/new-york/ui/button-group'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/registry/new-york/ui/collapsible'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItemWireframe,
  ContextMenuTrigger,
} from '@/registry/new-york/ui/context-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/registry/new-york/ui/hover-card'
import {
  Item,
  ItemContent,
  ItemDescriptionWireframe,
  ItemGroup,
  ItemMedia,
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
  EmptyMedia,
  EmptyTitleWireframe,
} from '@/registry/new-york/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/registry/new-york/ui/input-group'

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
            >
              <Alert>
                <BadgeAlertIcon size={24} className="text-muted-foreground" />
                <AlertTitle>
                  <Text width="lg" truncate />
                </AlertTitle>
                <AlertDescription>
                  <div className="space-y-1.5">
                    <Text width="full" color="muted" truncate />
                    <Text width="xl" color="muted" truncate />
                  </div>
                </AlertDescription>
              </Alert>
            </ComponentPreview>

            <ComponentPreview
              name="avatar"
              title="Avatar"
              description="An image element with a fallback for representing the user."
              dependencies={['@radix-ui/react-avatar']}
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
            >
              <div className="flex flex-wrap gap-2">
                <Badge>
                  <CheckIcon size={12} className="text-muted-foreground" />
                  <Text width="xs" />
                </Badge>
                <Badge variant="secondary">
                  <Text width="xs" />
                </Badge>
                <Badge variant="outline">
                  <Text width="xs" />
                </Badge>
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="breadcrumb"
              title="Breadcrumb"
              description="Displays the path to the current resource using a hierarchy of links."
              dependencies={['@radix-ui/react-slot']}
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
            >
              <ChartWireframe variant="bar" />
            </ComponentPreview>

            <ComponentPreview
              name="checkbox"
              title="Checkbox"
              description="A control that allows the user to toggle between checked and not checked."
              dependencies={['@radix-ui/react-checkbox']}
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
            >
              <Collapsible className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <Text width="sm" />
                    <ChevronDownIcon size={24} className="text-muted-foreground" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2">
                  <div className="border-input bg-card rounded-lg border p-3">
                    <Text width="full" color="muted" />
                  </div>
                  <div className="border-input bg-card rounded-lg border p-3">
                    <Text width="lg" color="muted" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </ComponentPreview>

            <ComponentPreview
              name="context-menu"
              title="Context Menu"
              description="A context menu component with wireframe helpers for menu items."
              dependencies={['@radix-ui/react-context-menu']}
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
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <MessageCircleDashedIcon size={16} className="text-muted-foreground" />
                    <Text width="sm" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <Text width="md" />
                    </DialogTitle>
                    <DialogDescription className="space-y-2">
                      <Text width="full" color="muted" className="block" />
                      <Text width="lg" color="muted" className="block" />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </ComponentPreview>

            <ComponentPreview
              name="drawer"
              title="Drawer"
              description="A panel that slides out from the edge of the screen with support for multiple directions."
              dependencies={['vaul']}
            >
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">
                    <GalleryVerticalEndIcon size={16} className="text-muted-foreground" />
                    <Text width="sm" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      <Text width="md" />
                    </DrawerTitle>
                    <DrawerDescription>
                      <Text width="lg" color="muted" className="block" />
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">
                        <Text width="xs" />
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ComponentPreview>

            <ComponentPreview
              name="empty"
              title="Empty State"
              description="An empty state component with wireframe helpers."
              dependencies={['class-variance-authority']}
            >
              <Empty className="border">
                <EmptyHeader>
                  <EmptyMedia>
                    <GalleryThumbnailsIcon size={32} className="text-muted-foreground" />
                  </EmptyMedia>
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
              name="heading"
              title="Heading"
              description="A composition component that renders appropriately sized Text based on heading level (1-6)."
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
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">
                    <IdCardIcon size={16} className="text-muted-foreground" />
                    <Text width="xs" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <Text width="md" />
                    <Text width="full" color="muted" />
                    <Text width="lg" color="muted" />
                  </div>
                </HoverCardContent>
              </HoverCard>
            </ComponentPreview>

            <ComponentPreview
              name="input"
              title="Input"
              description="A text input field with support for various types and validation states."
            >
              <Input
                variant="wireframe"
                skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                className="w-full"
              />
            </ComponentPreview>

            <ComponentPreview
              name="input-group"
              title="Input Group"
              description="An input group component for combining inputs with addons."
              dependencies={['class-variance-authority']}
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
            >
              <ItemGroup className="w-full">
                <Item>
                  <ItemMedia variant="image">
                    <AudioLinesIcon size={16} className="text-muted-foreground" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitleWireframe width="md" />
                    <ItemDescriptionWireframe width="lg" />
                  </ItemContent>
                </Item>
                <Item>
                  <ItemMedia variant="image">
                    <AudioLinesIcon size={16} className="text-muted-foreground" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitleWireframe width="sm" />
                    <ItemDescriptionWireframe width="xl" />
                  </ItemContent>
                </Item>
                <Item>
                  <ItemMedia variant="image">
                    <AudioLinesIcon size={16} className="text-muted-foreground" />
                  </ItemMedia>
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
            >
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Text width="xs" />
                </Label>
                <Input
                  id="email"
                  variant="wireframe"
                  skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                />
              </div>
            </ComponentPreview>

            <ComponentPreview
              name="list-group"
              title="ListGroup"
              description="A composition component that renders list items with Text placeholders for wireframe prototyping."
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
            >
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Text width="xs" />
                    <ChevronDownIcon size={24} className="text-muted-foreground ml-auto" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Text width="sm" />
                    </MenubarItem>
                    <MenubarItem>
                      <Text width="md" />
                    </MenubarItem>
                    <MenubarItem>
                      <Text width="sm" />
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Text width="xs" />
                    <ChevronDownIcon size={24} className="text-muted-foreground ml-auto" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Text width="xs" />
                    </MenubarItem>
                    <MenubarItem>
                      <Text width="sm" />
                    </MenubarItem>
                    <MenubarItem>
                      <Text width="md" />
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </ComponentPreview>

            <ComponentPreview
              name="pagination"
              title="Pagination"
              description="Pagination with page navigation, next and previous links."
              dependencies={[]}
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
            >
              <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
            </ComponentPreview>

            <ComponentPreview
              name="sonner"
              title="Sonner"
              description="An opinionated toast component for React with beautiful animations and icons."
              dependencies={['sonner', 'next-themes']}
            >
              <Button
                variant="outline"
                onClick={() =>
                  toast(
                    <div className="flex items-center gap-2">
                      <Text width="md" />
                    </div>,
                    {
                      description: (
                        <div className="space-y-1">
                          <Text width="lg" color="muted" className="block" />
                          <Text width="sm" color="muted" className="block" />
                        </div>
                      ),
                    }
                  )
                }
              >
                <BellIcon size={16} className="text-muted-foreground" />
                <Text width="xs" />
              </Button>
            </ComponentPreview>

            <ComponentPreview
              name="stack"
              title="Stack"
              description="A layout primitive for arranging wireframe elements with configurable spacing and direction."
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
            >
              <Textarea variant="wireframe" skeletonLines={3} className="w-full" />
            </ComponentPreview>

            <ComponentPreview
              name="toggle"
              title="Toggle"
              description="A two-state button that can be either on or off with multiple variants."
              dependencies={['@radix-ui/react-toggle', 'class-variance-authority']}
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
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <CircleHelpIcon size={16} className="text-muted-foreground" />
                    <Text width="xs" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <Text width="sm" className="bg-background/30" />
                </TooltipContent>
              </Tooltip>
            </ComponentPreview>
          </ComponentGridWrapper>
        </main>
      </div>
    </>
  )
}
