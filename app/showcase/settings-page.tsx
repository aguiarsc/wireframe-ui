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
import { LockIcon } from '@/components/icons/lock'

export function SettingsPageShowcase() {
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
                <div className="space-y-2">
                  <Label htmlFor="lastname">
                    <Text width="xs" />
                  </Label>
                  <Input
                    id="lastname"
                    skeleton
                    skeletonIcon={<AlignCenterIcon size={16} className="text-muted-foreground" />}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">
                  <Text width="xs" />
                </Label>
                <Textarea id="bio" skeleton skeletonLines={3} />
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
          <Card>
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
                  skeleton
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">
                  <Text width="sm" />
                </Label>
                <Input
                  id="new-password"
                  skeleton
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-new-password">
                  <Text width="md" />
                </Label>
                <Input
                  id="confirm-new-password"
                  skeleton
                  skeletonIcon={<LockIcon size={16} className="text-muted-foreground" />}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive">
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="full" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">
                <Text width="sm" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
              <CardDescription>
                <Text width="lg" color="muted" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Text width="md" emphasis="primary" size="sm" />
                  <Text width="xl" color="muted" size="xs" />
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Text width="sm" emphasis="primary" size="sm" />
                  <Text width="lg" color="muted" size="xs" />
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Text width="lg" emphasis="primary" size="sm" />
                  <Text width="full" color="muted" size="xs" />
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Text width="md" emphasis="primary" size="sm" />
                  <Text width="xl" color="muted" size="xs" />
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
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
}
