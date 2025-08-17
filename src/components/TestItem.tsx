import { Card, Skeleton } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { Fragment } from "react/jsx-runtime";
import type { ITest } from "../models/ITest";

export function TestItem({ test }: { test?: ITest }) {
  return (
    <div>
      {test && (
        <Card className="w-full h-full flex flex-col mb-4">
          <Fragment key=".0">
            <CardChip readOnly>
              <div className="bg-secondary/50 p-1 rounded-sm">{test.author}</div>
            </CardChip>
            {test.cover ? (
              <img
                alt={test.title}
                src={test.cover}
                className="block object-cover w-full h-40"
              />
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 w-full h-40 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            <CardCell readOnly className="flex-grow">
              {test.title}
            </CardCell>
          </Fragment>
        </Card>
      )}
    </div>
  );
}

export function TestItemSkeleton() {
  return (
    <Card className="w-full h-full flex flex-col mb-4">
      <Fragment key=".0">
        <Skeleton visible={true}>
          <CardChip readOnly>
            <div className="bg-secondary/50 h-6 w-3/4"></div>
          </CardChip>
        </Skeleton>
        <Skeleton visible={true}>
          <div className="bg-gray-100 dark:bg-gray-800 w-full h-40"></div>
        </Skeleton>
        <Skeleton visible={true}>
          <CardCell readOnly className="flex-grow">
            <div className="h-6 w-full"></div>
          </CardCell>
        </Skeleton>
      </Fragment>
    </Card>
  );
}