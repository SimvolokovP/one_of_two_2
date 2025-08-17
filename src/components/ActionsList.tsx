import { Cell } from "@telegram-apps/telegram-ui";
import { NAVIGATION } from "../shared/navigation.data";

export function ActionsList() {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2">
        {NAVIGATION.map((item) => (
          <Cell
            key={item.id}
            className="bg-secondary border-1 border-accent rounded-sm flex flex-col items-center"
          >
            <div className="flex flex-col gap-1 items-center text-[13px] md:text-base">
              {item.icon}
              {item.text}
            </div>
          </Cell>
        ))}
      </div>
    </div>
  );
}
