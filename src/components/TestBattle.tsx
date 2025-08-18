import { useState, useEffect } from "react";
import type { ITestItem } from "../models/ITest";
import { TestBattleItem } from "./TestBattleItem";

interface TestBattleProps {
  items?: ITestItem[];
  onFinish: (winner: ITestItem) => void;
}

export const TestBattle = ({ items, onFinish }: TestBattleProps) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentPair, setCurrentPair] = useState(1);
  const [currentItems, setCurrentItems] = useState<ITestItem[]>([]);
  const [pair, setPair] = useState<ITestItem[]>([]);
  const [winner, setWinner] = useState<ITestItem | null>(null);

  useEffect(() => {
    if (items && items.length > 0) {
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      setCurrentItems(shuffled);
      setCurrentRound(1);
      setCurrentPair(1);
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

  const handleChoice = (selectedItem: ITestItem) => {
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
    return (
      <div className="text-center p-4">
        <h2 className="text-xl font-bold mb-4">Победитель!</h2>
        <p className="text-lg">{winner.value}</p>
        {winner.file && (
          <img
            src={winner.file}
            alt={winner.value}
            className="mt-4 mx-auto max-h-60 rounded-lg"
          />
        )}
      </div>
    );
  }

  if (pair.length < 2) {
    return <div className="text-center p-4">Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h3 className="text-lg font-medium">Раунд {currentRound}</h3>
        <p className="text-hint">Выберите лучший вариант:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
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
