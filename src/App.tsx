import Pages from 'pages';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import queryClient from 'services/reactQueryConfig';
import { ReactQueryDevtools } from 'react-query/devtools';

const RenderDevTool = () => {
  if (process.env.NODE_ENV === 'development') {
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Pages />
        <Toaster />
        <RenderDevTool />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
