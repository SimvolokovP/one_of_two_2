import { useState, useEffect } from "react";
import type { ITestItem } from "../models/ITest";
import { TestBattleItem } from "./TestBattleItem";
import { WinnerScreen } from "./WinnerScreen";
import { TestHeader } from "./TestHeader";

interface TestBattleProps {
  items?: ITestItem[];
  onFinish: (winner: ITestItem) => void;
}

export const TestBattle = ({ items, onFinish }: TestBattleProps) => {
  const [testLength, setTestLength] = useState(0);

  const [currentRound, setCurrentRound] = useState(1);
  const [currentPair, setCurrentPair] = useState(1);
  const [currentItems, setCurrentItems] = useState<ITestItem[]>([]);
  const [pair, setPair] = useState<ITestItem[]>([]);
  const [winner, setWinner] = useState<ITestItem | null>(null);
  const [resultItems, setResultItems] = useState<ITestItem[]>([]);
  //   const [totalPairs, setTotalPairs] = useState(0);

  useEffect(() => {
    if (items && items.length) {
      setTestLength(items.length);
      console.log(testLength);
    }
  }, [items]);

  useEffect(() => {
    if (items && items.length > 0) {
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      setCurrentItems(shuffled);
      setCurrentRound(1);
      setCurrentPair(1);
      setResultItems([]);
      //   setTotalPairs(shuffled.length / 2);
    }
  }, [items]);

  useEffect(() => {
    if (currentItems.length > 1) {
      const newPair = currentItems.slice(0, 2);
      setPair(newPair);
    } else if (currentItems.length === 1) {
      setWinner(currentItems[0]);
      onFinish(currentItems[0]);
    }
  }, [currentItems, onFinish]);

  //   const getRoundName = (roundNumber: number, totalPairs: number) => {
  //     const remainingPairs = totalPairs / Math.pow(2, roundNumber - 1);

  //     if (remainingPairs >= 32) return `Раунд ${roundNumber}`;
  //     if (remainingPairs === 16) return `1/16 финала`;
  //     if (remainingPairs === 8) return `1/8 финала`;
  //     if (remainingPairs === 4) return `1/4 финала`;
  //     if (remainingPairs === 2) return `Полуфинал`;
  //     if (remainingPairs === 1) return `Финал`;
  //     return `Раунд ${roundNumber}`;
  //   };

  const handleChoice = (selectedItem: ITestItem) => {
    const loser = pair.find((item) => item !== selectedItem);
    if (loser) {
      setResultItems((prev) => [loser, ...prev]);
    }

    const newItems = currentItems.filter(
      (item) => item !== pair[0] && item !== pair[1]
    );

    setCurrentItems([...newItems, selectedItem]);

    if (currentPair * 2 >= currentItems.length) {
      setCurrentRound((prev) => prev + 1);
      setCurrentPair(1);
    } else {
      setCurrentPair((prev) => prev + 1);
    }
  };

  if (winner) {
    return <WinnerScreen winner={winner} results={resultItems} />;
  }

  if (pair.length < 2) {
    return <div className="text-center p-4">Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <TestHeader
        round={currentRound}
        testLength={testLength}
        currentItems={currentItems}
        currentPair={currentPair}
      />

      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        {pair.map((item, index) => (
          <TestBattleItem
            key={`${item.value}-${index}`}
            item={item}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
};
