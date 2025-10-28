'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Separator } from '@/registry/new-york/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Media } from '@/registry/new-york/ui/media'
import {
  Item,
  ItemContent,
  ItemDescriptionWireframe,
  ItemGroup,
  ItemMedia,
  ItemTitleWireframe,
} from '@/registry/new-york/ui/item'
import { CalendarDaysIcon } from '@/components/icons/calendar-days'
import { LinkIcon } from '@/components/icons/link'
import { MapPinIcon } from '@/components/icons/map-pin'
import { MessageCircleIcon } from '@/components/icons/message-circle'
import { UserRoundPlusIcon } from '@/components/icons/user-round-plus'

export function ProfilePageShowcase() {
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
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <Text width="xs" emphasis="primary" size="sm" />
                  <Text width="sm" color="muted" size="sm" />
                </div>
                <div className="flex items-center gap-1">
                  <Text width="xs" emphasis="primary" size="sm" />
                  <Text width="sm" color="muted" size="sm" />
                </div>
                <div className="flex items-center gap-1">
                  <Text width="xs" emphasis="primary" size="sm" />
                  <Text width="sm" color="muted" size="sm" />
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
          <TabsTrigger value="activity">
            <Text width="xs" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback />
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Text width="md" emphasis="primary" size="sm" />
                      <Badge variant="secondary">
                        <Text width="xs" />
                      </Badge>
                    </div>
                    <Text width="sm" color="muted" size="xs" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Text width="full" />
                  <Text width="xl" />
                  <Text width="lg" color="muted" />
                </div>
                {i % 2 === 0 && <Media type="image" className="aspect-video w-full rounded-lg" />}
                <Separator />
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    <Text width="xs" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Text width="xs" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Text width="xs" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Media type="image" className="aspect-square w-full" />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text width="md" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ItemGroup>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Item key={i}>
                    <ItemMedia variant="icon">
                      <Avatar>
                        <AvatarFallback />
                      </Avatar>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitleWireframe width="lg" />
                      <ItemDescriptionWireframe width="sm" />
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
