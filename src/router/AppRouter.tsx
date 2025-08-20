import { Route, Routes } from "react-router-dom";
import { PAGES } from "./pages.config";
import MainPage from "../pages/MainPage";
import SingleTestPage from "../pages/SingleTestPage";
import MyTestsPage from "../pages/MyTestsPage";
import { CreatePage } from "../pages/CreatePage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={PAGES.MAIN} Component={MainPage} />
      <Route path={`/test/:id`} Component={SingleTestPage} />
      <Route path={PAGES.MY_TESTS} Component={MyTestsPage} />
      <Route path={PAGES.CREATE} Component={CreatePage} />
    </Routes>
  );
}
