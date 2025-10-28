export const showcaseCodes = {
  loginForm: `import { Button } from '@/registry/new-york/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { Text } from '@/registry/new-york/ui/text'
import { Separator } from '@/registry/new-york/ui/separator'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { LockIcon } from '@/components/icons/lock'
import { MailCheckIcon } from '@/components/icons/mail-check'

export function LoginForm() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle>
            <Text width="md" emphasis="primary" />
          </CardTitle>
          <CardDescription>
            <Text width="lg" color="muted" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              <Text width="xs" />
            </Label>
            <Input
              id="email"
              skeleton
              skeletonIcon={<MailCheckIcon size={16} className="text-muted-foreground" />}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">
              <Text width="xs" />
            </Label>
            <Input
              id="password"
              skeleton
              skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="cursor-pointer">
                <Text width="sm" size="sm" />
              </Label>
            </div>
            <Button variant="link" className="h-auto p-0">
              <Text width="xs" size="sm" />
            </Button>
          </div>
          <Button className="w-full">
            <Text width="sm" />
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              <Text width="xs" />
            </Button>
            <Button variant="outline">
              <Text width="xs" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}`,

  registerForm: `import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { Text } from '@/registry/new-york/ui/text'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { UserIcon } from '@/registry/new-york/icons'
import { LockIcon } from '@/components/icons/lock'
import { MailCheckIcon } from '@/components/icons/mail-check'

export function RegisterForm() {
  return (
    <div className="flex min-h-[700px] w-full items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle>
            <Text width="lg" emphasis="primary" />
          </CardTitle>
          <CardDescription>
            <Text width="xl" color="muted" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal">
                <Text width="xs" />
              </TabsTrigger>
              <TabsTrigger value="account">
                <Text width="xs" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">
                  <Text width="xs" />
                </Label>
                <Input
                  id="firstname"
                  skeleton
                  skeletonIcon={<UserIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">
                  <Text width="xs" />
                </Label>
                <Input
                  id="lastname"
                  skeleton
                  skeletonIcon={<UserIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-reg">
                  <Text width="xs" />
                </Label>
                <Input
                  id="email-reg"
                  skeleton
                  skeletonIcon={<MailCheckIcon size={16} className="text-muted-foreground" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="account" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password-reg">
                  <Text width="xs" />
                </Label>
                <Input
                  id="password-reg"
                  skeleton
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">
                  <Text width="sm" />
                </Label>
                <Input
                  id="confirm-password"
                  skeleton
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer leading-none">
                  <div className="space-y-1">
                    <Text width="full" size="sm" />
                    <Text width="lg" size="xs" color="muted" />
                  </div>
                </Label>
              </div>
            </TabsContent>
          </Tabs>
          <Button className="mt-6 w-full">
            <Text width="sm" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}`,

  heroSection: `import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'
import { Heading } from '@/registry/new-york/ui/heading'
import { Badge } from '@/registry/new-york/ui/badge'
import { Media } from '@/registry/new-york/ui/media'
import { Stack } from '@/registry/new-york/ui/stack'
import { CheckIcon } from '@/registry/new-york/icons'
import { PlayIcon } from '@/components/icons/play'
import { SparklesIcon } from '@/components/icons/sparkles'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <Badge className="w-fit">
            <SparklesIcon size={12} className="text-muted-foreground" />
            <Text width="sm" />
          </Badge>
          <div className="space-y-4">
            <Heading level={1} />
            <Stack direction="vertical" spacing="sm">
              <Text width="full" color="muted" size="lg" />
              <Text width="xl" color="muted" size="lg" />
            </Stack>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">
              <Text width="sm" />
            </Button>
            <Button size="lg" variant="outline">
              <PlayIcon size={16} className="text-muted-foreground" />
              <Text width="sm" />
            </Button>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center gap-2">
              <CheckIcon size={16} className="text-muted-foreground" />
              <Text width="lg" size="sm" />
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon size={16} className="text-muted-foreground" />
              <Text width="md" size="sm" />
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon size={16} className="text-muted-foreground" />
              <Text width="xl" size="sm" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Media type="image" className="aspect-video w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}`,

  contactForm: `import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { Text } from '@/registry/new-york/ui/text'
import { Textarea } from '@/registry/new-york/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york/ui/select'
import { AlignCenterIcon } from '@/registry/new-york/icons'
import { MailCheckIcon } from '@/components/icons/mail-check'

export function ContactForm() {
  return (
    <div className="container mx-auto flex min-h-[700px] items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>
            <Text width="lg" emphasis="primary" />
          </CardTitle>
          <CardDescription>
            <Text width="full" color="muted" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">
                <Text width="xs" />
              </Label>
              <Input
                id="contact-name"
                skeleton
                skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">
                <Text width="xs" />
              </Label>
              <Input
                id="contact-email"
                skeleton
                skeletonIcon={<MailCheckIcon size={16} className="text-muted-foreground" />}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">
              <Text width="xs" />
            </Label>
            <Select>
              <SelectTrigger id="subject">
                <SelectValue>
                  <Text width="md" />
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">
                  <Text width="sm" />
                </SelectItem>
                <SelectItem value="support">
                  <Text width="sm" />
                </SelectItem>
                <SelectItem value="sales">
                  <Text width="sm" />
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">
              <Text width="xs" />
            </Label>
            <Textarea id="message" skeleton skeletonLines={5} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">
              <Text width="xs" />
            </Button>
            <Button>
              <Text width="sm" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}`,

  dashboard: `import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { ChartWireframe } from '@/registry/new-york/ui/chart'
import { Badge } from '@/registry/new-york/ui/badge'
import { Table, TableBody, TableCellWireframe, TableHeadWireframe, TableHeader, TableRow } from '@/registry/new-york/ui/table'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { ArrowUpIcon } from '@/components/icons/arrow-up'
import { ArrowDownIcon } from '@/components/icons/arrow-down'
import { TrendingUpIcon } from '@/components/icons/trending-up'
import { UsersIcon } from '@/components/icons/users'
import { DollarSignIcon } from '@/components/icons/dollar-sign'
import { ActivityIcon } from '@/components/icons/activity'

export function Dashboard() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Text width="lg" emphasis="primary" size="xl" />
          <Text width="xl" color="muted" size="sm" />
        </div>
        <Badge variant="outline">
          <Text width="xs" />
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <Text width="sm" size="sm" />
            </CardTitle>
            <DollarSignIcon size={16} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="md" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon size={12} className="text-green-500" />
                <Text width="xs" size="xs" color="muted" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Add more stat cards... */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>
              <Text width="md" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartWireframe variant="bar" className="h-[300px]" />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>
              <Text width="sm" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback />
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <Text width="md" size="sm" emphasis="primary" />
                    <Text width="sm" size="xs" color="muted" />
                  </div>
                  <Text width="xs" size="sm" emphasis="secondary" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}`,

  pricing: `import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Separator } from '@/registry/new-york/ui/separator'
import { CheckIcon } from '@/registry/new-york/icons'
import { Heading } from '@/registry/new-york/ui/heading'

export function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <Badge className="mb-4">
          <Text width="xs" />
        </Badge>
        <Heading level={2} />
        <div className="mx-auto mt-4 max-w-2xl">
          <Text width="full" color="muted" size="lg" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text width="sm" />
            </CardTitle>
            <CardDescription>
              <Text width="lg" color="muted" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <Text width="md" emphasis="primary" size="xl" />
                <Text width="xs" color="muted" size="sm" />
              </div>
              <Text width="sm" color="muted" size="sm" />
            </div>
            <Button variant="outline" className="w-full">
              <Text width="sm" />
            </Button>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="text-muted-foreground mt-0.5" />
                <Text width="full" size="sm" />
              </div>
              {/* Add more features... */}
            </div>
          </CardContent>
        </Card>
        {/* Add more pricing tiers... */}
      </div>
    </div>
  )
}`,

  productGrid: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'
import { Media } from '@/registry/new-york/ui/media'
import { Heading } from '@/registry/new-york/ui/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york/ui/select'
import { Input } from '@/registry/new-york/ui/input'
import { HeartIcon } from '@/components/icons/heart'
import { SearchIcon } from '@/components/icons/search'
import { CartIcon } from '@/components/icons/cart'
import { SparklesIcon } from '@/components/icons/sparkles'

export function ProductGrid() {
  return (
    <div className="container mx-auto space-y-8 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Heading level={2} />
          <Text width="lg" color="muted" size="sm" />
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Input
              skeleton
              skeletonIcon={<SearchIcon size={16} className="text-muted-foreground" />}
            />
          </div>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue>
                <Text width="xs" />
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">
                <Text width="sm" />
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="group overflow-hidden">
            <div className="relative">
              <Media type="image" className="aspect-square w-full" />
              <div className="absolute right-2 top-2 flex gap-2">
                <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <HeartIcon size={16} className="text-muted-foreground" />
                </Button>
              </div>
            </div>
            <CardHeader className="space-y-2 p-4">
              <CardTitle className="line-clamp-2">
                <Text width="md" truncate />
              </CardTitle>
              <CardDescription>
                <Text width="sm" color="muted" size="sm" truncate />
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-4 pt-0">
              <Text width="sm" emphasis="primary" size="lg" />
              <Button size="sm">
                <CartIcon size={14} className="text-muted-foreground" />
                <Text width="xs" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}`,

  profilePage: `import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Separator } from '@/registry/new-york/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Media } from '@/registry/new-york/ui/media'
import { CalendarDaysIcon } from '@/components/icons/calendar-days'
import { LinkIcon } from '@/components/icons/link'
import { MapPinIcon } from '@/components/icons/map-pin'
import { MessageCircleIcon } from '@/components/icons/message-circle'
import { UserRoundPlusIcon } from '@/components/icons/user-round-plus'

export function ProfilePage() {
  return (
    <div className="container mx-auto max-w-5xl space-y-6 p-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarFallback />
            </Avatar>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <Text width="lg" emphasis="primary" size="xl" />
                  <Text width="md" color="muted" size="sm" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <MessageCircleIcon size={16} className="text-muted-foreground" />
                    <Text width="xs" />
                  </Button>
                  <Button>
                    <UserRoundPlusIcon size={16} className="text-muted-foreground" />
                    <Text width="xs" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Text width="full" />
                <Text width="xl" color="muted" />
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1.5">
                  <MapPinIcon size={16} className="text-muted-foreground" />
                  <Text width="sm" size="sm" />
                </div>
                <div className="flex items-center gap-1.5">
                  <LinkIcon size={16} className="text-muted-foreground" />
                  <Text width="md" size="sm" />
                </div>
                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon size={16} className="text-muted-foreground" />
                  <Text width="sm" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList>
          <TabsTrigger value="posts">
            <Text width="xs" />
          </TabsTrigger>
          <TabsTrigger value="media">
            <Text width="xs" />
          </TabsTrigger>
        </TabsList>
        {/* Add tab content... */}
      </Tabs>
    </div>
  )
}`,

  settingsPage: `import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { Text } from '@/registry/new-york/ui/text'
import { Separator } from '@/registry/new-york/ui/separator'
import { Switch } from '@/registry/new-york/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Textarea } from '@/registry/new-york/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york/ui/select'
import { AlignCenterIcon, BellIcon, UserIcon } from '@/registry/new-york/icons'
import { LockIcon } from '@/components/icons/lock'

export function SettingsPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-6 p-6">
      <div className="space-y-1">
        <Text width="lg" emphasis="primary" size="xl" />
        <Text width="xl" color="muted" size="sm" />
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">
            <UserIcon size={16} className="text-muted-foreground" />
            <Text width="xs" />
          </TabsTrigger>
          <TabsTrigger value="account">
            <LockIcon size={16} className="text-muted-foreground" />
            <Text width="xs" />
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellIcon size={16} className="text-muted-foreground" />
            <Text width="sm" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="lg" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback />
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Text width="xs" />
                  </Button>
                  <Text width="md" color="muted" size="xs" className="block" />
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstname">
                    <Text width="xs" />
                  </Label>
                  <Input
                    id="firstname"
                    skeleton
                    skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                  />
                </div>
                {/* Add more fields... */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add more tabs... */}
      </Tabs>

      <div className="flex justify-end gap-2">
        <Button variant="outline">
          <Text width="xs" />
        </Button>
        <Button>
          <Text width="sm" />
        </Button>
      </div>
    </div>
  )
}`}

