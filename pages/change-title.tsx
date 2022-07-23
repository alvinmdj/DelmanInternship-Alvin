import { Container } from '@chakra-ui/react'
import Metatags from '../components/Metatags'
import Navbar from '../components/Navbar'
import TitleTransformer from '../components/TitleTransformer'

const ChangeTitle = () => {
  return (
    <>
      <Metatags title="Title Transformer" desc="A simple title transformation panel" />
      <Navbar current="change-title" />
      <Container h="85%" maxW="2xl" display="flex" flexDir="column" justifyContent="center" alignItems="center" gap="1rem">
        <TitleTransformer />
      </Container>
    </>
  )
}

export default ChangeTitle