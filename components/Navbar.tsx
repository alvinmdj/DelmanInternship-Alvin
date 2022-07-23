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

interface NavbarProps {
  current?: 'change-title' | 'fetching'
}

const Navbar = ({ current }: NavbarProps) => {
  return (
    <HStack>
      <Center height="50px" gap="1rem">
        <Text fontSize="2xl">
          <NextLink href="/">delman.io</NextLink>
        </Text>
        <Divider orientation="vertical" height="2rem" />
        <Breadcrumb>
          <BreadcrumbItem>
            <NextLink href='/'>
              <BreadcrumbLink>Internship Program</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          {current === 'change-title' && (
            <BreadcrumbItem>
              <span>Title Transformer</span>
            </BreadcrumbItem>
          )}
          {current === 'fetching' && (
            <BreadcrumbItem>
              <span>User Fetcher</span>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Center>
    </HStack>
  )
}

export default Navbar