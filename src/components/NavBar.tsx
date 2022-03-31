import { Box, Center, Flex, Image } from '@chakra-ui/react'
import SearchBox from './SearchBox'
import githubLogo from "assets/images/githubLogo.png";
import { PUBLIC_PATHS } from 'routes/constants';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {
  onSearchChange: (event) => void
}

const NavBar = (props: NavBarProps) => {
  const { onSearchChange, } = props;
  const history = useNavigate()
  return (
    <Box as="nav" position="sticky" top="0" zIndex="10" bg="#fff" boxShadow="0px 0px 5px rgba(196, 203, 214, 0.7)">
      <Center maxW="71.875rem" m="auto"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          py="2"
          flexDir={{
            base: 'column',
            md: "row"
          }}
        >
          <Box w="10.8125rem"
            onClick={() => history(PUBLIC_PATHS.SEARCH)}
            _hover={{
              cursor: "pointer"
            }}
          >
            <Image src={githubLogo} alt="git hub icon" w="100%" />
          </Box>
          <Box
            maxW="23.75rem"
            w="100%"
            px={{
              base: 2,
              md: 0
            }}
          >
            <SearchBox small onChange={onSearchChange} />
          </Box>
          <Box w="5rem"></Box>
        </Flex>
      </Center>
    </Box>
  )
}

export default NavBar