import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import type { ITest } from "../models/ITest";
import { Link } from "react-router-dom";
import { PAGES } from "../router/pages.config";
import { TagItem } from "./TagItem";

export function TestDescrModal({ test }: { test: ITest }) {
  return (
    <Modal
      title="1"
      aria-describedby={undefined}
      header={<Modal.Header />}
      trigger={
        <button className="absolute left-0 right-0 top-0 bottom-0"></button>
      }
    >
      <Placeholder
        description={test?.descr ? test?.descr : "Not description"}
        header={test.title}
      >
        {test.tags && (
          <ul className="flex flex-wrap gap-2 w-full justify-start">
            {test.tags.map((tag) => (
              <li key={tag.value}>
                <TagItem tag={tag} />
              </li>
            ))}
          </ul>
        )}
      </Placeholder>
      <Placeholder>
        <div className="flex items-center gap-2">
          <Link to={PAGES.SINGLE_TEST(test.id)}>
            <Button>Открыть</Button>
          </Link>

          <Button disabled>В избранное</Button>
        </div>
      </Placeholder>
    </Modal>
  );
}
