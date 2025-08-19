import { Button } from "@telegram-apps/telegram-ui";
import type { ITestItem } from "../models/ITest";
import { popup } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../router/pages.config";

interface TestHeaderProps {
  round: number;
  testLength: number;
  currentItems: ITestItem[];
  currentPair?: number;
}

export function TestHeader({ round, currentItems }: TestHeaderProps) {
  const getRoundName = () => {
    const remainingPairs = Math.ceil(currentItems.length / 2);
    // const totalRounds = Math.log2(testLength);
    // const currentRoundIndex = Math.log2(testLength / currentItems.length * 2);

    if (remainingPairs >= 16) return `Раунд ${round}`;
    if (remainingPairs > 4 && remainingPairs <= 8) return `1/8 финала`;
    if (remainingPairs > 2 && remainingPairs <= 4) return `1/4 финала`;
    if (remainingPairs === 2) return `Полуфинал`;
    if (remainingPairs === 1) return `Финал`;
    return `Раунд ${round}`;
  };

  const navigate = useNavigate();

  const handleExit = () => {
    popup
      .open({
        title: "Завершить тест?",
        message: "Завершить тест?",
        buttons: [
          { id: "ok", type: "default", text: "Да" },
          { id: "no", type: "close" },
        ],
      })
      .then((buttonId) => {
        buttonId === "ok" && navigate(PAGES.MAIN);
      });
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <div className="text-lg font-medium">{getRoundName()}</div>
        <p className="text-hint">Выберите лучший вариант:</p>
      </div>
      <Button onClick={handleExit}>Завершить</Button>
    </div>
  );
}
