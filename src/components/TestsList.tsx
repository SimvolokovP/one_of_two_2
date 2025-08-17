import type { ITest } from "../models/ITest";
import type { FirestoreError } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { TestItem, TestItemSkeleton } from "./TestItem";

export function TestsList({
  tests,
  isPending,
  error,
}: {
  tests?: ITest[];
  isPending: boolean;
  error: FirestoreError | null;
}) {
  if (error) {
    return <div className="text-error p-4">{error.message}</div>;
  }

  if ((!tests || tests.length === 0) && !isPending) {
    return <div className="text-hint p-4">No tests available</div>;
  }

  return (
    <div className="relative">
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
            {isPending ? <TestItemSkeleton /> : <TestItem test={test} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
