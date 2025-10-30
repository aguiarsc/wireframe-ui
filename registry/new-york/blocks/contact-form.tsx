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
import { Textarea } from '@/registry/new-york/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york/ui/select'
import { AlignCenterIcon } from '@/registry/new-york/icons'
import { MailCheckIcon } from '@/registry/new-york/icons/mail-check'

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
}
