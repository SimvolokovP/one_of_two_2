import type { ITest } from "../models/ITest";
import type { FirestoreError } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { TestItem } from "./TestItem";
import { TestItemSkeleton } from "./skeletons/TestItemSkeleton";

export type TListType = "list" | "carousel";

export function TestsList({
  tests,
  isPending,
  error,
  type = "carousel",
}: {
  tests?: ITest[];
  isPending: boolean;
  error: FirestoreError | null;
  type?: TListType;
}) {
  if (error) {
    return <div className="text-error p-4">{error.message}</div>;
  }

  if ((!tests || tests.length === 0) && !isPending) {
    return <div className="text-hint p-4 text-center">No tests available</div>;
  }

  return (
    <div className="relative">
      {type === "carousel" ? (
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={16}
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
        >
          {(isPending ? [...Array(4)] : tests ?? []).map((test, index) => (
            <SwiperSlide
              key={isPending ? `skeleton-${index}` : test.id}
              className="!w-64"
            >
              {isPending ? <TestItemSkeleton /> : <TestItem test={test} type={type} />}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {(isPending ? [...Array(4)] : tests ?? []).map((test, index) => (
            <div
              key={isPending ? `skeleton-${index}` : test.id}
              className="w-full"
            >
              {isPending ? <TestItemSkeleton /> : <TestItem test={test} type={type} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
