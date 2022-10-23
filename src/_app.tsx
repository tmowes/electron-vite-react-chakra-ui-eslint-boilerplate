import { ChakraProvider } from '@chakra-ui/react'

import { WindowContainer } from './containers/WindowContainer'
import { Home } from './home'
import { theme } from './styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <WindowContainer>
        <Home />
      </WindowContainer>
    </ChakraProvider>
  )
}
