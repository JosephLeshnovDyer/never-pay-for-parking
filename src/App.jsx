import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Center, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import UserFlow from "./UserFlow";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Grid>
          <GridItem>
            <Center>
              <header>Never Pay For Parking</header>
            </Center>
          </GridItem>
          <GridItem>
            <UserFlow />
          </GridItem>
        </Grid>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
