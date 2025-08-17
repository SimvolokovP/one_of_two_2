import type { ITag } from "../models/ITest";

export function TagItem({ tag }: { tag: ITag }) {
  return (
    <div className="bg-secondary border-t-2 border-accent rounded-sm p-1">
      {tag.value}
    </div>
  );
}
