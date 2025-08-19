import { HeadingItem } from "../components/HeadingItem";
import TelegramNavigation from "../components/TelegramNavigation";
import { TestsList } from "../components/TestsList";
import { useMyTestsList } from "../hooks/useMyTestsList";
import useTg from "../hooks/useTg";
import type { ITest } from "../models/ITest";
import { PAGES } from "../router/pages.config";

const MyTestsPage = () => {
  const { user } = useTg();

  const myTestsQuery = useMyTestsList(user?.id);

  return (
    <TelegramNavigation backPath={PAGES.MAIN}>
      <div className="container">
        <div className="flex flex-col gap-4 pt-4">
          <HeadingItem
            title="Мои тесты &#128203;"
            description="Самые высокооцененные тесты от наших авторов за неделю."
          >
            <TestsList
              type="list"
              tests={myTestsQuery.data as ITest[]}
              error={myTestsQuery.error}
              isPending={myTestsQuery.isPending}
            />
          </HeadingItem>
        </div>
      </div>
    </TelegramNavigation>
  );
};

export default MyTestsPage;
