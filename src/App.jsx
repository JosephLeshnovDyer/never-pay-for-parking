import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Center, Grid, GridItem } from "@chakra-ui/react";
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
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
