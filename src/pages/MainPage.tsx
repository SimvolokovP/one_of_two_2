import { ActionsList } from "../components/ActionsList";
import { HeadingItem } from "../components/HeadingItem";
import TelegramNavigation from "../components/TelegramNavigation";
import { TestsList } from "../components/TestsList";
import { useTestsList } from "../hooks/useTestsList";
import type { ITest } from "../models/ITest";

const MainPage = () => {
  const recentTestsQuery = useTestsList();

  return (
    <TelegramNavigation>
      <div className="container">
        <div className="flex flex-col gap-4 pt-4">
          <ActionsList />

          <HeadingItem
            title="Актуальные тесты &#128205;"
            description="Самые высокооцененные тесты от наших авторов за неделю."
          >
            <TestsList
              tests={recentTestsQuery.data as ITest[]}
              error={recentTestsQuery.error}
              isPending={recentTestsQuery.isPending}
            />
          </HeadingItem>
        </div>
      </div>
    </TelegramNavigation>
  );
};

export default MainPage;
