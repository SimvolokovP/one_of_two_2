import TelegramNavigation from "../components/TelegramNavigation";
import { PAGES } from "../router/pages.config";

export function CreatePage() {
  return (
    <TelegramNavigation backPath={PAGES.MY_TESTS}>
      <div className="container">
        <div className="flex flex-col gap-4 pt-4">
          {/* <CreateTestForm /> */}
        </div>
      </div>
    </TelegramNavigation>
  );
}
