import { Button, Skeleton } from "@telegram-apps/telegram-ui";
import type { ITestItem } from "../models/ITest";
import { useState } from "react";

export function TestBattleItem({
  item,
  handleChoice,
}: {
  item: ITestItem;
  handleChoice: (item: ITestItem) => void;
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(!item.file);

  return (
    <div className="flex flex-col gap-2">
      {item.file ? (
        <Skeleton
          className="w-full h-40 md:h-90 rounded-lg"
          visible={!isImageLoaded}
          withoutAnimation={false}
        >
          <img
            src={item.file}
            alt={item.value}
            className="w-full h-40 md:h-90 object-cover rounded-lg"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
          />
        </Skeleton>
      ) : (
        <div className="w-full h-40 md:h-90 flex flex-col items-center justify-center border-hint border-2 rounded-lg">
          <span className="text-hint">No image</span>
          <div className="text-hint text-xl md:text-2xl">{item.value}</div>
        </div>
      )}
      <Button
        disabled={!isImageLoaded}
        onClick={() => handleChoice(item)}
        className="w-full"
      >
        {item.value}
      </Button>
    </div>
  );
}
