import {
  hideBackButton,
  onBackButtonClick,
  popup,
  showBackButton,
} from "@telegram-apps/sdk-react";
import { useEffect, type PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "../router/pages.config";

interface TelegramNavigationProps {
  backPath?: string;
  popupMessage?: string;
  isPopup?: boolean;
}

const TelegramNavigation = ({
  children,
  backPath = "/",
  popupMessage,
}: PropsWithChildren<TelegramNavigationProps>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExit = () => {
    popup
      .open({
        title: "Выйти?",
        message: popupMessage || "Вы уверены, что хотите выйти?",
        buttons: [
          { id: "close", type: "close" },
          { id: "ok", type: "ok" },
        ],
      })
      .then((buttonId) => {
        if (buttonId === "ok") {
          navigate(backPath);
        }
      });
  };

  useEffect(() => {
    if (location.pathname !== PAGES.MAIN) {
      showBackButton();

      const cleanup = onBackButtonClick(() => {
        if (popupMessage) {
          handleExit();
        } else {
          navigate(backPath);
        }
      });

      return () => {
        cleanup();
        hideBackButton();
      };
    } else {
      hideBackButton();
    }
  }, [location.pathname, backPath, popupMessage, navigate]);

  return <>{children}</>;
};

export default TelegramNavigation;
