import { Flex, Heading } from '@chakra-ui/react'

export function Home() {
  return (
    <Flex h="full" bg="gray.950" position="relative">
      <Heading position="absolute" bottom={0}>
        Home
      </Heading>
    </Flex>
  )
}
