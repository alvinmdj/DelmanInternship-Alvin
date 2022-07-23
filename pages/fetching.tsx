import { Container } from '@chakra-ui/react'
import Metatags from '../components/Metatags'
import Navbar from '../components/Navbar'
import UserFetcher from '../components/UserFetcher'

const Fetching = () => {
  return (
    <>
      <Metatags title="User Fetcher" desc="A simple API fetching and rendering process" />
      <Navbar current="fetching" />
      <Container h="85%" maxW="sm" display="flex" flexDir="column" alignItems="center" justifyContent="center" gap="2rem">
        <UserFetcher />
      </Container>
    </>
  )
}

export default Fetching