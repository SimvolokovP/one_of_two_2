import {
  hideBackButton,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";
import { useEffect, type PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "../router/pages.config";

interface TelegramNavigationProps {
  backPath?: string;
}

const TelegramNavigation = ({
  children,
  backPath = "/",
}: PropsWithChildren<TelegramNavigationProps>) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== PAGES.MAIN) {
      showBackButton();

      return onBackButtonClick(() => {
        navigate(backPath);
      });
    } else {
      hideBackButton();
    }
  }, []);

  return <>{children}</>;
};

export default TelegramNavigation;