import { TAGS_LIST } from "../shared/tags.data";

export const getTagEmoji = (value: string): string => {
  const found = TAGS_LIST.find((tag) => tag.value === value);
  return found?.emoji || "🔹";
};
