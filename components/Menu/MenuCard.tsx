import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

interface MenuCardProps {
  title: string
  desc: string
  href: string
}

const MenuCard = ({ title, desc, href }: MenuCardProps) => {
  return (
    <Box w="270px" border="1px solid #D9D9D9" boxShadow="md" p="6" rounded="md" bg="white">
      <NextLink href={href}>
        <Flex alignItems="center" gap="0.5rem" mb="1rem">
          <Link>
            <Heading as="h2" size="md">{title}</Heading>
          </Link>
          <ArrowForwardIcon />
        </Flex>
      </NextLink>
      <Text>{desc}</Text>
    </Box>
  )
}

export default MenuCard