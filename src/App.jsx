import { MyRoutes } from "./Routers/Router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
function App() {
 
  return (
     <QueryClientProvider client={queryClient}>
       <MyRoutes/>
         <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  
  );
}
export default App;
