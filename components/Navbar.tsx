import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
  HStack,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <HStack>
      <Center height="50px" gap="1rem">
        <Text fontSize="2xl">
          <NextLink href="/">delman.io</NextLink>
        </Text>
        <Divider orientation="vertical" height="2rem" />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/">Internship Program</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </HStack>
  )
}

export default Navbar