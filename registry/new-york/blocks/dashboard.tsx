'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
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
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

export function Dashboard() {
  return (
    <div className="container mx-auto space-y-4 p-4 lg:space-y-6 lg:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Text width="lg" emphasis="primary" size="lg" />
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
            <CurrencyDollarIcon className="text-muted-foreground size-6" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="md" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon className="size-4 text-green-500" />
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
            <UsersIcon className="text-muted-foreground size-6" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="sm" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon className="size-4 text-green-500" />
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
            <ChartBarIcon className="text-muted-foreground size-6" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="md" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowDownIcon className="size-4 text-red-500" />
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
            <ArrowTrendingUpIcon className="text-muted-foreground size-6" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Text width="lg" emphasis="primary" size="xl" />
              <div className="flex items-center gap-1">
                <ArrowUpIcon className="size-4 text-green-500" />
                <Text width="xs" size="xs" color="muted" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="overflow-hidden lg:col-span-4">
          <CardHeader>
            <CardTitle>
              <Text width="md" />
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto pl-2">
            <ChartWireframe variant="bar" className="h-[200px] min-w-[300px] lg:h-[300px]" />
          </CardContent>
        </Card>

        <Card className="overflow-hidden lg:col-span-3">
          <CardHeader>
            <CardTitle>
              <Text width="sm" />
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex min-w-[280px] items-center gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback />
                  </Avatar>
                  <div className="min-w-0 flex-1 space-y-1">
                    <Text width="md" size="sm" emphasis="primary" />
                    <Text width="sm" size="xs" color="muted" />
                  </div>
                  <Text width="xs" size="sm" emphasis="secondary" className="shrink-0" />
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
