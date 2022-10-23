import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '990': '#09090B',
      '950': '#121216',
      '900': '#19191F',
      '800': '#202027',
      '700': '#353541',
      '600': '#505062',
      '500': '#787891',
      '400': '#A8A8B8',
      '300': '#D2D2DA',
      '200': '#E6E6EA',
      '100': '#F1F1F4',
      '050': '#F9F9FA',
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'transparent',
        color: 'gray.100',
        '.apexcharts-menu': {
          background: 'gray.800',
          border: 0,
        },
        '.apexcharts-theme-light .apexcharts-menu-item:hover': {
          background: 'gray.700',
        },
      },
      '*::placeholder': {
        color: 'gray.200',
      },
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        bgGradient:
          'linear(to-b, gray.400, gray.500, gray.500, gray.500, gray.500, gray.500, gray.700)',
        borderRadius: '3px',
      },
    },
  },
})
