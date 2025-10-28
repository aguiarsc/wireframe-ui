'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { ChartWireframe } from '@/registry/new-york/ui/chart'
import { Badge } from '@/registry/new-york/ui/badge'
import {
  Table,
  TableBody,
  TableCellWireframe,
  TableHeadWireframe,
  TableHeader,
  TableRow,
} from '@/registry/new-york/ui/table'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { ArrowUpIcon } from '@/components/icons/arrow-up'
import { ArrowDownIcon } from '@/components/icons/arrow-down'
import { TrendingUpIcon } from '@/components/icons/trending-up'
import { UsersIcon } from '@/components/icons/users'
import { DollarSignIcon } from '@/components/icons/dollar-sign'
import { ActivityIcon } from '@/components/icons/activity'

export function DashboardShowcase() {
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

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <Text width="sm" size="sm" />
            </CardTitle>
            <UsersIcon size={16} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="sm" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon size={12} className="text-green-500" />
                <Text width="xs" size="xs" color="muted" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <Text width="sm" size="sm" />
            </CardTitle>
            <ActivityIcon size={16} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="md" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowDownIcon size={12} className="text-red-500" />
                <Text width="xs" size="xs" color="muted" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <Text width="sm" size="sm" />
            </CardTitle>
            <TrendingUpIcon size={16} className="text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="lg" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon size={12} className="text-green-500" />
                <Text width="xs" size="xs" color="muted" />
              </div>
            </div>
          </CardContent>
        </Card>
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

      <Card>
        <CardHeader>
          <CardTitle>
            <Text width="md" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeadWireframe width="md" />
                <TableHeadWireframe width="sm" />
                <TableHeadWireframe width="sm" />
                <TableHeadWireframe width="xs" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5].map((i) => (
                <TableRow key={i}>
                  <TableCellWireframe width="lg" />
                  <TableCellWireframe width="sm" />
                  <TableCellWireframe width="xs" />
                  <TableCellWireframe width="xs" />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
