import { useParams } from "react-router-dom";
import TelegramNavigation from "../components/TelegramNavigation";
import { PAGES } from "../router/pages.config";
import { useTestById } from "../hooks/useTestById";
import { useState } from "react";
import { Button } from "@telegram-apps/telegram-ui";
import { SingleTestSkeleton } from "../components/skeletons/SingleTestSkeleton";
import { TestBattle } from "../components/TestBattle";

const SingleTestPage = () => {
  const { id } = useParams();
  const { test, error, isPending } = useTestById(id);
  const [isStart, setIsStart] = useState<boolean>(false);

  if (error) {
    return (
      <TelegramNavigation backPath={PAGES.MAIN}>
        <div className="container">
          <div className="flex justify-center p-4">
            <div className="text-error text-center">
              Ошибка загрузки теста: {error.message}
            </div>
          </div>
        </div>
      </TelegramNavigation>
    );
  }

  return (
    <TelegramNavigation backPath={PAGES.MAIN}>
      <div>
        <div className="container">
          {!isStart ? (
            <div className="flex justify-center">
              {isPending ? (
                <SingleTestSkeleton />
              ) : (
                <div className="max-w-[340px] min-w-[300px] flex flex-col gap-4">
                  {test && test.cover ? (
                    <img
                      alt={test.title}
                      src={test.cover}
                      className="block object-cover w-full h-60 rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-60 flex items-center justify-center border-hint border-2 rounded-xl">
                      <span className="text-hint">No image</span>
                    </div>
                  )}
                  <h3 className="text-center text-lg md:text-xl font-medium">
                    {test && test.title}
                  </h3>
                  <Button onClick={() => setIsStart(true)}>Старт</Button>
                </div>
              )}
            </div>
          ) : (
            <TestBattle
              items={test?.items}
              onFinish={() => console.log("WINNER")}
            />
          )}
        </div>
      </div>
    </TelegramNavigation>
  );
};

export default SingleTestPage;
