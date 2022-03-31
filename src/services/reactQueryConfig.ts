import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 600, // this is in milliseconds
      cacheTime: 10 * 60,
      retry: 0
    }
  }
});




export default queryClient