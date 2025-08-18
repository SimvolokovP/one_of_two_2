import type { ITestItem } from "../models/ITest";
import { Link } from "react-router-dom";
import { Button } from "@telegram-apps/telegram-ui";
import { PAGES } from "../router/pages.config";
import { ResultsModal } from "./ResultsModal";

export function WinnerScreen({
  results,
  winner,
}: {
  winner: ITestItem;
  results?: ITestItem[];
}) {
  //   const [resultsOpen, setResultsOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col min-w-[300px] items-center">
        <div className="text-xl font-bold mb-4">&#128081; Победитель!</div>
        <h3 className="text-lg mb-4">{winner.value}</h3>
        {winner.file && (
          <img
            src={winner.file}
            alt={winner.value}
            className="h-60 md:h-110 rounded-lg mb-4"
          />
        )}
        <div className="flex flex-col items-center gap-2 md:flex-row w-full">
          <Link className="w-full" to={PAGES.MAIN}>
            <Button className="w-full">Выйти</Button>
          </Link>
          {/* <Button className="w-full" onClick={() => setResultsOpen(true)}>
            Результаты
          </Button> */}
          <ResultsModal items={results} winner={winner} />
          <Button disabled className="w-full">
            Поделиться
          </Button>
        </div>
      </div>
    </div>
  );
}
