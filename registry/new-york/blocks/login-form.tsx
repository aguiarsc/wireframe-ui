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
import { Checkbox } from '@/registry/new-york/ui/checkbox'

import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

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
              variant="wireframe"
              skeletonIcon={<EnvelopeIcon className="text-muted-foreground" />}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">
              <Text width="xs" />
            </Label>
            <Input
              id="password"
              variant="wireframe"
              skeletonIcon={<LockClosedIcon className="text-muted-foreground" />}
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
}
