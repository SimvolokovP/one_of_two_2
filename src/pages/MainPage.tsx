import { Button } from "@telegram-apps/telegram-ui";
import { Link } from "react-router-dom";
import { Icon28Archive } from "@telegram-apps/telegram-ui/dist/icons/28/archive";
import { Icon28AddCircle } from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";
import TelegramNavigation from "../components/TelegramNavigation";

const MainPage = () => {
  return (
    <TelegramNavigation>
      <div className="container">
        <div className="flex gap-2 flex-col">
          <Link to={"/movies"} className="w-full">
            <Button after={<Icon28AddCircle />}>`1`</Button>
          </Link>
          <Link to={"/my"} className="w-full">
            <Button after={<Icon28Archive />} style={{ width: "100%" }}>
              2
            </Button>
          </Link>
        </div>
      </div>
    </TelegramNavigation>
  );
};

export default MainPage;
