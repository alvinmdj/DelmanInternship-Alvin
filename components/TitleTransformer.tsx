import { Button, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const TitleTransformer = () => {
  const [runningFor, setRunningFor] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const [titleCount, setTitleCount] = useState(1)

  const handleTitleCount = (type: 'add' | 'remove') => {
    if (type === 'add') setTitleCount(titleCount + 1)
    else setTitleCount(titleCount - 1)
  }

  const handleColorChange = () => {
    if(intervalId) {
      clearInterval(intervalId)
      setRunningFor(0)
      setIntervalId(0)
      return
    }

    const newIntervalId = setInterval(() => {
      setRunningFor(prevRunningFor => prevRunningFor + 1)
    }, 1000)
    setIntervalId(Number(newIntervalId))
  }

  return (
    <>
      {renderTitle(titleCount, runningFor)}
      <Divider />
      <HStack>
        <Text>Running for: {runningFor}s</Text>
        <Divider orientation="vertical" />
        <Text>Title count: {titleCount}</Text>
      </HStack>
      <Divider />
      <Stack direction="row" spacing={8} align="center">
        <Button onClick={handleColorChange} colorScheme="gray" variant="solid">
          {intervalId ? 'Clear Color' : 'Randomize Color'}
        </Button>
        <Button onClick={() => handleTitleCount("add")} colorScheme="gray" variant="solid" disabled={titleCount === 5}>
          Add Title
        </Button>
        <Button onClick={() => handleTitleCount("remove")} colorScheme="gray" variant="solid" disabled={titleCount === 1}>
          Remove Title
        </Button>
      </Stack>
    </>
  )
}

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const renderTitle = (count: number, runningFor: number) => {
  let title = []
  for (let i = 0; i < count; i++) {
    title.push(
      <Heading
        key={i}
        textAlign="center"
        mb="1rem"
        color={runningFor ? generateRandomColor() : '#000'}
      >
        Internship Program - {i + 1}
      </Heading>
    )
  }
  return title
}

export default TitleTransformer