import { Center, Grid, Button } from '@chakra-ui/react';
import UserCard, { UserType } from './UserCard';

type ResultBodyProps = {
  users: {
    data: Array<UserType>
    totalCount: number
  }
  onLoadMore: () => void
}

const ResultBody = (props: ResultBodyProps) => {
  const { users, onLoadMore } = props;
  return <Center
    maxW="71.875rem"
    m="auto" flexDir="column">
    <Grid mt="4" templateColumns={{
      base: "repeat(1, 1fr)",
      lg: "repeat(3, 1fr)"
    }} gap="4">
      {users.data.map((user, index) => <UserCard key={index} user={user} />)}
    </Grid>
    <Button
      mt="4"
      w="300px"
      disabled={users.totalCount === users.data.length}
      onClick={onLoadMore}
    >Load More</Button>
  </Center>;
}
export default ResultBody