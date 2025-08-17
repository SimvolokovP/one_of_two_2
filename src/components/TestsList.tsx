import { Card } from "@telegram-apps/telegram-ui";
import type { ITest } from "../models/ITest";
import { Fragment } from "react/jsx-runtime";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { Skeleton } from "@telegram-apps/telegram-ui";
import type { FirestoreError } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

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
    return <div className="text-secondary p-4">No tests available</div>;
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
        className="!px-4"
      >
        {(isPending ? [...Array(4)] : tests ?? []).map((test, index) => (
          <SwiperSlide
            key={isPending ? `skeleton-${index}` : test.id}
            className="!w-64"
          >
            <Skeleton visible={isPending}>
              <Card className="w-full h-full flex flex-col mb-4">
                <Fragment key=".0">
                  <CardChip readOnly>
                    <div className="bg-secondary/50">
                      {!isPending && test.author}
                    </div>
                  </CardChip>
                  {isPending ? (
                    <div className="bg-gray-100 dark:bg-gray-800 w-full h-40" />
                  ) : test.cover ? (
                    <img
                      alt={test.title}
                      src={test.cover}
                      className="block object-cover w-full h-40"
                    />
                  ) : (
                    <div className="bg-gray-100 dark:bg-gray-800 w-full h-40 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  <CardCell readOnly className="flex-grow">
                    {!isPending && test.title}
                  </CardCell>
                </Fragment>
              </Card>
            </Skeleton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
