import * as React from 'react'
import { cn } from '@/lib/utils'
import { MusicalNoteIcon, HandThumbUpIcon, PhotoIcon } from '@heroicons/react/24/outline'

export interface MediaProps extends React.ComponentProps<'div'> {
  src?: string
  alt?: string
  type?: 'image' | 'video' | 'audio'
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
  loading?: boolean
  onLoad?: () => void
  onError?: () => void
}

function Media({
  src,
  alt = 'Media',
  type = 'image',
  aspectRatio = 'video',
  loading = false,
  onLoad,
  onError,
  className,
  ...props
}: MediaProps) {
  const [mediaLoaded, setMediaLoaded] = React.useState(false)
  const [mediaError, setMediaError] = React.useState(false)
  const showPlaceholder = loading || !src || mediaError || !mediaLoaded

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  }

  const handleLoad = () => {
    setMediaLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setMediaError(true)
    onError?.()
  }

  const ImageIcon = () => <PhotoIcon className="size-12 text-muted-foreground/30" />

  const VideoIcon = () => <HandThumbUpIcon className="size-12 text-muted-foreground/30" />

  const AudioIcon = () => <MusicalNoteIcon className="size-12 text-muted-foreground/30" />

  return (
    <div
      data-slot="media"
      data-type={type}
      className={cn(
        'border-input bg-card relative overflow-hidden rounded-lg border',
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {src && !mediaError && type === 'image' && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'size-full object-cover transition-opacity duration-300',
            mediaLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
      {src && !mediaError && type === 'video' && (
        <video
          src={src}
          onLoadedData={handleLoad}
          onError={handleError}
          controls
          className={cn(
            'size-full object-cover transition-opacity duration-300',
            mediaLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          <track kind="captions" />
        </video>
      )}
      {src && !mediaError && type === 'audio' && (
        <div className="bg-card absolute inset-0 flex items-center justify-center p-8">
          <audio
            src={src}
            onLoadedData={handleLoad}
            onError={handleError}
            controls
            className={cn(
              'w-full transition-opacity duration-300',
              mediaLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
      )}
      {showPlaceholder && (
        <div className="bg-card absolute inset-0 flex items-center justify-center">
          {type === 'image' ? <ImageIcon /> : type === 'video' ? <VideoIcon /> : <AudioIcon />}
        </div>
      )}
    </div>
  )
}

export { Media }
