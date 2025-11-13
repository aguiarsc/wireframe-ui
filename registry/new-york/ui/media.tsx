import * as React from 'react'
import { cn } from '@/lib/utils'
import { MusicalNoteIcon, HandThumbUpIcon, PhotoIcon } from '@heroicons/react/24/outline'

/**
 * Props for the Media component.
 * A container for displaying images, videos, and audio with loading states and fallback placeholders.
 */
export interface MediaProps extends React.ComponentProps<'div'> {
  /**
   * Source URL for the media file
   */
  src?: string
  /**
   * Alternative text for images
   * @default 'Media'
   */
  alt?: string
  /**
   * Type of media to display
   * @default 'image'
   */
  type?: 'image' | 'video' | 'audio'
  /**
   * Aspect ratio of the media container
   * @default 'video'
   */
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
  /**
   * Whether the media is in a loading state
   * @default false
   */
  loading?: boolean
  /**
   * Callback fired when media loads successfully
   */
  onLoad?: () => void
  /**
   * Callback fired when media fails to load
   */
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

  const ImageIcon = () => <PhotoIcon className="text-muted-foreground/30 size-12" />

  const VideoIcon = () => <HandThumbUpIcon className="text-muted-foreground/30 size-12" />

  const AudioIcon = () => <MusicalNoteIcon className="text-muted-foreground/30 size-12" />

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
