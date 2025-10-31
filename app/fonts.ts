import localFont from 'next/font/local'

export const chillax = localFont({
  src: [
    {
      path: '../public/fonts/Chillax-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chillax',
})
