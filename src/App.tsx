import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";

import "swiper/css";
import "swiper/css/scrollbar";
import { Footer } from "./components/Footer";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
