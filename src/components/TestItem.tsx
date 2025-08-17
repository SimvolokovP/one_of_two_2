import { Card } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { Fragment } from "react/jsx-runtime";
import type { ITest } from "../models/ITest";
import { useTelegramNickname } from "../hooks/useTelegramNickname";
import { TestDescrModal } from "./TestDescrModal";

export function TestItem({ test }: { test?: ITest }) {
  const { nickname, error, isLoading } = useTelegramNickname(test);

  if (!test) {
    return null;
  }

  return (
    <Card className="w-full h-full flex flex-col mb-4 relative">
      <Fragment key=".0">
        <CardChip readOnly>
          <div className="bg-secondary/50 p-1 rounded-sm">
            {isLoading ? "Loading..." : error || nickname}
          </div>
        </CardChip>
        {test.cover ? (
          <img
            alt={test.title}
            src={test.cover}
            className="block object-cover w-full h-40"
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center">
            <span className="text-hint">No image</span>
          </div>
        )}
        <CardCell readOnly className="flex-grow">
          {test.title}
        </CardCell>
        <TestDescrModal test={test} />
      </Fragment>
    </Card>
  );
}
