import { Box, Flex, Text, Image, Icon, IconButton, Tooltip } from '@chakra-ui/react'
import { ipcRenderer } from 'electron'
import { AiOutlineMinus, AiOutlineWifi } from 'react-icons/ai'

import type { WindowContainerProps } from './types'

export function WindowContainer(props: WindowContainerProps) {
  const { children } = props
  const title = 'Desktop App'
  const connection = true

  const onClickMinimize = () => {
    ipcRenderer.send('minimize-window')
  }

  const connectedColor = connection ? 'green.400' : 'red.500'

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#09090b"
      borderRadius="8"
      overflow="hidden"
      __css={{ WebkitUserSelect: 'none', WebkitAppRegion: 'drag' }}
    >
      <Flex h={8} align="center" justify="space-between">
        <Image src="icon.ico" ml="2" w="6" h="6" mr="16" alt="logo" />
        <Text fontSize={16}>{title}</Text>
        <Flex __css={{ WebkitAppRegion: 'no-drag' }}>
          <Tooltip
            label={connection ? 'conectado' : 'desconectado'}
            placement="left"
            bg="transparent"
            color={connectedColor}
            closeDelay={500}
            mr="-4"
          >
            <IconButton
              icon={<Icon as={AiOutlineWifi} />}
              aria-label="status conexão"
              bg="transparent"
              fontSize="18"
              h="32px"
              color={connectedColor}
              mt="1px"
              px="2"
              borderRadius="0"
              colorScheme="transparent"
              _hover={{
                bgGradient: `radial(transparent,transparent,transparent,${connectedColor},transparent,transparent,transparent)`,
              }}
              _focus={{
                outlineColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: '1px',
                borderRadius: '6px',
              }}
            />
          </Tooltip>
          <Tooltip
            label="minimizar"
            placement="bottom-start"
            mt="-2"
            bg="transparent"
            fontWeight="normal"
            openDelay={500}
          >
            <IconButton
              icon={<Icon as={AiOutlineMinus} />}
              onClick={onClickMinimize}
              aria-label="minimizar"
              bg="transparent"
              fontSize="18"
              h="32px"
              color="gray.100"
              mt="1px"
              px="2"
              borderRadius="0"
              colorScheme="transparent"
              _hover={{
                bgGradient:
                  'radial(transparent,transparent,transparent, gray.600, transparent, transparent, transparent)',
              }}
              _focus={{
                outlineColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: '1px',
                borderRadius: '6px',
              }}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Flex h="96vh">
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          bg="gray.900"
          __css={{ WebkitAppRegion: 'no-drag' }}
        >
          {children}
        </Flex>
      </Flex>
    </Box>
  )
}
