import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";

import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <main>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default App;
