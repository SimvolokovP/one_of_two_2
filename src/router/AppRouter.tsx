import { Route, Routes } from "react-router-dom";
import { PAGES } from "./pages.config";
import MainPage from "../pages/MainPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={PAGES.MAIN} Component={MainPage} />
    </Routes>
  );
}
