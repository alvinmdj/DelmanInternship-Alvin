import { Container, Divider, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Metatags from '../components/Metatags'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Metatags title="Home" desc="Main Menu" />
      <Navbar />
      <Container h="85%" maxW="2xl" display="flex" flexDir="column" justifyContent="center" gap="2rem">
        <Heading textAlign="center">Internship Program</Heading>
        <Divider />
        <Menu />
      </Container>
    </>
  )
}

export default Home
