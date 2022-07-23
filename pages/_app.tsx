import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container h="100vh" maxW="9xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
