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
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { UserIcon } from '@/registry/new-york/icons'
import { LockIcon } from '@/components/icons/lock'
import { MailCheckIcon } from '@/components/icons/mail-check'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'

export function RegisterFormShowcase() {
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
}
