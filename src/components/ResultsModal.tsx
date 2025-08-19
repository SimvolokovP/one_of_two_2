import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import type { ITestItem } from "../models/ITest";

export function ResultsModal({
  items,
  winner,
}: {
  items?: ITestItem[];
  winner: ITestItem;
}) {
  return (
    <Modal
      title="1"
      aria-describedby={undefined}
      header={<Modal.Header />}
      trigger={<Button className="w-full">Результаты</Button>}
    >
      <Placeholder>
        <div className="flex flex-col gap-2">
          {winner && (
            <div className="flex items-center gap-3 p-2 border-b border-hint">
              <span className="font-medium">{1}.</span>

              <span>{winner.value}</span>
            </div>
          )}
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 border-b border-hint"
              >
                <span className="font-medium">{index + 2}.</span>

                <span>{item.value}</span>
              </div>
            ))}
        </div>
      </Placeholder>
    </Modal>
  );
}
