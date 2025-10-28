'use client'

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { Button } from '@/registry/new-york/ui/button'
import { CheckIcon } from '@/registry/new-york/icons'
import { ClipboardCheckIcon } from '@/components/icons/copy-check'

interface ShowcaseBlockProps {
    title: string
    description: string
    code: string
    children: React.ReactNode
}

export function ShowcaseBlock({ title, description, code, children }: ShowcaseBlockProps) {
    const [copied, setCopied] = React.useState(false)
    const [highlightedCode, setHighlightedCode] = React.useState<string>('')

    React.useEffect(() => {
        const highlightCode = async () => {
            const { codeToHtml } = await import('shiki')
            const html = await codeToHtml(code, {
                lang: 'tsx',
                theme: 'catppuccin-macchiato',
            })
            setHighlightedCode(html)
        }
        highlightCode()
    }, [code])

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="space-y-4">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
            <Tabs defaultValue="preview" className="w-full">
                <div className="border-input flex items-center justify-between rounded-t-lg border border-b-0 bg-muted/50 px-4 py-2">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="h-8 gap-2"
                    >
                        {copied ? (
                            <>
                                <CheckIcon size={14} />
                                <span className="text-xs">Copied</span>
                            </>
                        ) : (
                            <>
                                <ClipboardCheckIcon size={14} />
                                <span className="text-xs">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
                <TabsContent value="preview" className="border-input mt-0 rounded-b-lg border">
                    {children}
                </TabsContent>
                <TabsContent value="code" className="border-input mt-0 rounded-b-lg border">
                    <div className="max-h-[600px] overflow-auto">
                        {highlightedCode ? (
                            <div
                                className="text-sm [&_pre]:m-0 [&_pre]:p-4 [&_pre]:bg-transparent!"
                                dangerouslySetInnerHTML={{ __html: highlightedCode }}
                            />
                        ) : (
                            <pre className="bg-muted/50 p-4">
                                <code className="text-sm">{code}</code>
                            </pre>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}
