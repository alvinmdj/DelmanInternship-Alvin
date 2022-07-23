import { Flex } from '@chakra-ui/react'
import MenuCard from './MenuCard'

const Menu = () => {
  const menuData = [
    {
      title: "Title Transformers",
      desc: "A simple title transformation panel",
      href: "/change-title",
    },
    {
      title: "User Fetcher",
      desc: "A simple API fetching and rendering process",
      href: "/fetching",
    },
  ]

  return (
    <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
      {menuData.map((item, index) => (
        <MenuCard key={index} {...item} />
      ))}
    </Flex>
  )
}

export default Menu