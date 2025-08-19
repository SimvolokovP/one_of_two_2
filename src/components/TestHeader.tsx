import { Button } from "@telegram-apps/telegram-ui";
import type { ITestItem } from "../models/ITest";

interface TestHeaderProps {
  round: number;
  testLength: number;
  currentItems: ITestItem[];
  currentPair?: number;
}

export function TestHeader({
  round,
  currentItems,
}: TestHeaderProps) {
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

  //   const getPairInfo = () => {
  //     const remainingPairs = Math.ceil(currentItems.length / 2);
  //     return `Пара ${currentPair} из ${remainingPairs}`;
  //   };

  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <div className="text-lg font-medium">{getRoundName()}</div>
        <p className="text-hint">Выберите лучший вариант:</p>
      </div>
      <Button>Завершить</Button>
    </div>
  );
}
