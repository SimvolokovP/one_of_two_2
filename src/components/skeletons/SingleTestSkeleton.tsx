import { Skeleton } from "@telegram-apps/telegram-ui";

export function SingleTestSkeleton() {
  return (
    <div className="max-w-[340px] min-w-[300px] flex flex-col gap-4">
      <Skeleton visible>
        <div className="w-full h-60 rounded-xl" />
      </Skeleton>
      <Skeleton visible>
        <div className="h-6 w-3/4 mx-auto" />
      </Skeleton>
      <Skeleton visible>
        <div className="h-10 w-full" />
      </Skeleton>
    </div>
  );
}
