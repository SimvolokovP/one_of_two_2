import { Avatar, Divider } from "@telegram-apps/telegram-ui";
import useTg from "../hooks/useTg";
import { getUsername } from "../helpers/getUsername";

export function Header() {
  const { user } = useTg();

  return (
    <header className="p-2 md:p-4">
      <div className="container">
        {user && (
          <div className="w-full flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Avatar size={28} src={user.photo_url} alt={user.id.toString()} />
              <div>{getUsername(user)} &#129306;</div>
            </div>
          </div>
        )}
      </div>
      <Divider />
    </header>
  );
}
