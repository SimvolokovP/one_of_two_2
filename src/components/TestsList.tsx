import type { ITest } from "../models/ITest";

export function TestsList({ tests }: { tests?: ITest[] }) {
  return (
    <div>
      {tests && tests.map((test) => (
        <div key={test.id}>{test.id}</div>
      ))}
    </div>
  );
}
