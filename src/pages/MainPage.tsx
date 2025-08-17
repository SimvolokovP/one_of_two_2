import { ActionsList } from "../components/ActionsList";
import { HeadingItem } from "../components/HeadingItem";
import TelegramNavigation from "../components/TelegramNavigation";
import { TestsList } from "../components/TestsList";
import { useTestsList } from "../hooks/useTestsList";

const MainPage = () => {

    const recentTestsQuery = useTestsList();

  return (
    <TelegramNavigation>
      <div className="container">
        <div className="flex flex-col gap-4 pt-4">
         <ActionsList />

          <HeadingItem
            title="Актуальные тесты"
            description="Самые высокооцененные тесты от наших авторов за неделю."
          >
            <TestsList tests={recentTestsQuery.data} />
          </HeadingItem>
        </div>
      </div>
    </TelegramNavigation>
  );
};

export default MainPage;
