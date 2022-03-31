import { Box, useBoolean } from '@chakra-ui/react'
import NavBar from 'components/NavBar'
import ResultBody from './ResultBody';
import _ from "lodash";
import { useEffect, useState } from 'react';
import { convertParamsToString } from 'utils/helpers';
import axios, { GET_REPO } from 'services';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import { QUERY_KEY } from './constant';
import toast from 'react-hot-toast';

const Result = () => {
  const debounced = _.debounce(function (event) {
    handleChange(event);
  }, 1000);
  const [users, setUsers] = useState<any>({
    data: [],
    totalCount: 0
  });
  const [shouldAppend, setShouldAppend] = useBoolean()
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNo, setPageNo] = useState(1);

  const addUsersToState = (response) => {
    const newUsers = response.data.items
    const totalCount = response.data.total_count
    if (shouldAppend) {
      const updatedUsers = [...users.data, ...newUsers]
      setUsers({ data: updatedUsers, totalCount })
      return
    }
    setUsers({
      data: newUsers,
      totalCount
    })
  }
  const getUsersFromAPI = async (params: any) => {
    const { queryKey } = params;
    const [, userName, pageNo] = queryKey;
    const url = convertParamsToString(GET_REPO.USERS, {
      userName, pageNo
    });
    const response = await axios.get(url)
    return response
  }
  const { isLoading } = useQuery(
    [QUERY_KEY.GET_REPO_KEY, searchTerm, pageNo],
    getUsersFromAPI,
    {
      keepPreviousData: true,
      enabled: !!searchTerm && searchTerm.length > 0,
      onSuccess: (res) => addUsersToState(res),
      onError: () => toast.error("An error occured")
    }
  );
  const handleChange = (event) => {
    const userName = event.target.value;
    setSearchTerm(userName)
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('searchTerm');
    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  }, []);

  const handleLoadMore = () => {
    const newPageNo = pageNo + 1;
    setPageNo(newPageNo);
    setShouldAppend.on();
  }
  return (
    <Box minH="100vh" bg="#FAFBFC" pb="8">
      <NavBar onSearchChange={debounced} />
      {
        isLoading ?
          <Box mt="5rem">
            <Loader />
          </Box>
          :
          <ResultBody users={users} onLoadMore={handleLoadMore} />
      }
    </Box>
  )
}

export default Result

