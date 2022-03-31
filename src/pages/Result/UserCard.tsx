import { Flex, Avatar, Box, Text, useBoolean, Button } from '@chakra-ui/react'

export type UserType = {
  avatar_url: string
  login: string
  html_url: string
  score: string
}
type UserProp = {
  user: UserType
}

const UserCard = (props: UserProp) => {
  const { user } = props
  const [isHovered, setIsHovered] = useBoolean();
  const userInfo = {
    imageUrl: user.avatar_url,
    name: user.login,
    profileUrl: user.html_url,
    score: user.score
  }
  const { imageUrl, name, score, profileUrl } = userInfo
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      px="5rem"
      pt="4"
      pb="2"
      borderRadius="10px"
      bg="#fff"
      boxShadow="0px 6px 58px rgba(196, 203, 214, 0.1)"
    >
      <Avatar
        src={imageUrl}
        name={name}
        w="58px"
        h="58px"
      />
      <Text mt="2" fontWeight="bold">
        {name}
      </Text>
      <Box opacity={isHovered ? "1" : "0"}
        transition="opacity 0.5s ease-in-out"
        onMouseEnter={setIsHovered.on}
        onMouseLeave={setIsHovered.off}
      >
        <Text mt="2"
          textAlign="center"
        >
          Score: {score}
        </Text>
        <Button variant="secondary"
          onClick={() => {
            window.open(profileUrl, "_blank");
          }}
        > View Profile</Button>
      </Box>
    </Flex>
  )
}

export default UserCard