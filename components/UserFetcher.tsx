import { Avatar, Box, Button, Divider, Flex, Heading, SkeletonText, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface UserProps {
  gender: string
  name: {
    first: string
    last: string
  }
  email: string
  dob: {
    age: number
  }
  picture: {
    large: string
  }
  nat: string
}

const UserFetcher = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserProps[]>([])

  const handleFetchUser = async () => {
    setIsLoading(true)
    const userData = await fetch('https://randomuser.me/api')
    const data = await userData.json()
    setIsLoading(false)
    setUserData(data.results)
  }

  const setBorderColor = () => {
    if (userData[0]?.gender === 'male')
      return '2px solid lightblue'
    
    if (userData[0]?.gender === 'female')
      return '2px solid pink'

    return ''
  }

  return (
    <>
      <Heading textAlign="center">User Fetcher</Heading>
      <Divider />
      <Box
        w="270px"
        border={setBorderColor()}
        boxShadow="2xl"
        p="8"
        rounded="md"
      >
        <Flex justifyContent="center" mb="1.5rem">
          <Avatar border={setBorderColor()} size="xl" src={userData[0]?.picture.large} />
        </Flex>
        {userData.length > 0 ? (
          <Flex flexDir="column" alignItems="center" gap={2}>
            <Text fontSize="lg" fontWeight="semibold">{`${userData[0].name.first} ${userData[0].name.last}`}</Text>
            <Text color="gray">{userData[0].email}</Text>
            <Flex w="100%" mt="3" justifyContent="space-around" alignItems="space-between">
              <Flex flexDir="column" alignItems="center" flexBasis="100%">
                <Text fontWeight="semibold">{userData[0].nat}</Text>
                <Text fontSize="sm" color="gray">Nationality</Text>
              </Flex>
              <Flex flexDir="column" alignItems="center" flexBasis="100%">
                <Text fontWeight="semibold">{userData[0].dob.age}</Text>
                <Text fontSize="sm" color="gray">Age</Text>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <SkeletonText isLoaded={userData.length > 0} noOfLines={8} spacing="2" />
        )}
      </Box>
      <Divider />
      <Button
        onClick={handleFetchUser}
        isLoading={isLoading}
        w="270px"
        colorScheme="gray"
        variant="solid"
      >
        {userData.length > 0 ? 'Refetch User' : 'Fetch user'}
      </Button>
    </>
  )
}

export default UserFetcher