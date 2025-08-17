import { Route, Routes } from "react-router-dom";
import { PAGES } from "./pages.config";
import MainPage from "../pages/MainPage";
import SingleTestPage from "../pages/SingleTestPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={PAGES.MAIN} Component={MainPage} />
      <Route path={`/test/:id`} Component={SingleTestPage} />
    </Routes>
  );
}
