'use client'

import { Button } from '@/registry/new-york/ui/button'
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
import { Switch } from '@/registry/new-york/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Textarea } from '@/registry/new-york/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york/ui/select'
import { AlignCenterIcon, BellIcon, UserIcon } from '@/registry/new-york/icons'
import { LockIcon } from '@/registry/new-york/icons/lock'

export function SettingsPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-4 p-4 lg:space-y-6 lg:p-6">
      <div className="space-y-1">
        <Text width="lg" emphasis="primary" size="lg" />
        <Text width="xl" color="muted" size="sm" />
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile" className="gap-2">
            <UserIcon size={16} className="shrink-0 text-muted-foreground" />
            <span className="hidden sm:inline">
              <Text width="xs" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="account" className="gap-2">
            <LockIcon size={16} className="shrink-0 text-muted-foreground" />
            <span className="hidden sm:inline">
              <Text width="xs" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <BellIcon size={16} className="shrink-0 text-muted-foreground" />
            <span className="hidden sm:inline">
              <Text width="sm" />
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card className="overflow-hidden">
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
                <Avatar className="h-16 w-16 shrink-0 lg:h-20 lg:w-20">
                  <AvatarFallback />
                </Avatar>
                <div className="min-w-0 space-y-2">
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
                    variant="wireframe"
                    skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname">
                    <Text width="xs" />
                  </Label>
                  <Input
                    id="lastname"
                    variant="wireframe"
                    skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">
                  <Text width="xs" />
                </Label>
                <Textarea id="bio" variant="wireframe" skeletonLines={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">
                  <Text width="xs" />
                </Label>
                <Select>
                  <SelectTrigger id="language">
                    <SelectValue>
                      <Text width="sm" />
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">
                      <Text width="sm" />
                    </SelectItem>
                    <SelectItem value="es">
                      <Text width="sm" />
                    </SelectItem>
                    <SelectItem value="fr">
                      <Text width="sm" />
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="xl" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">
                  <Text width="sm" />
                </Label>
                <Input
                  id="current-password"
                  variant="wireframe"
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">
                  <Text width="sm" />
                </Label>
                <Input
                  id="new-password"
                  variant="wireframe"
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-new-password">
                  <Text width="md" />
                </Label>
                <Input
                  id="confirm-new-password"
                  variant="wireframe"
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-destructive">
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="full" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" size="sm">
                <Text width="sm" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="lg" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-0.5">
                  <Text width="md" emphasis="primary" size="sm" />
                  <Text width="xl" color="muted" size="xs" />
                </div>
                <Switch defaultChecked className="shrink-0" />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-0.5">
                  <Text width="sm" emphasis="primary" size="sm" />
                  <Text width="lg" color="muted" size="xs" />
                </div>
                <Switch className="shrink-0" />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-0.5">
                  <Text width="lg" emphasis="primary" size="sm" />
                  <Text width="full" color="muted" size="xs" />
                </div>
                <Switch defaultChecked className="shrink-0" />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-0.5">
                  <Text width="md" emphasis="primary" size="sm" />
                  <Text width="xl" color="muted" size="xs" />
                </div>
                <Switch className="shrink-0" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-wrap justify-end gap-2">
        <Button variant="outline" size="sm">
          <Text width="xs" />
        </Button>
        <Button size="sm">
          <Text width="sm" />
        </Button>
      </div>
    </div>
  )
}
