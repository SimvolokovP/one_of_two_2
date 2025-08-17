import type { ITag } from "../models/ITest";

interface DisplayTag {
  emoji: string;
  value: string;
}

export const TAGS: ITag[] = [
  { value: "Кино" },
  { value: "Музыка" },
  { value: "Книги" },
  { value: "Игры" },
  { value: "География" },
  { value: "Спорт" },
  { value: "Интеллектуальные" },
  { value: "Юмор" },
  { value: "История" },
  { value: "Наука" },
  { value: "Сериалы" },
  { value: "Еда" },
  { value: "Автомобили" },
  { value: "Технологии" },
  { value: "Животные" },
  { value: "Путешествия" },
  { value: "Мода" },
  { value: "Дом и сад" },
  { value: "Финансы" },
  { value: "Искусство" },
];

export const TAGS_LIST: DisplayTag[] = [
  { emoji: "🎬", value: "Кино" },
  { emoji: "🎵", value: "Музыка" },
  { emoji: "📚", value: "Книги" },
  { emoji: "🎮", value: "Игры" },
  { emoji: "🌍", value: "География" },
  { emoji: "🏆", value: "Спорт" },
  { emoji: "🧠", value: "Интеллектуальные" },
  { emoji: "😂", value: "Юмор" },
  { emoji: "🏛️", value: "История" },
  { emoji: "🔬", value: "Наука" },
  { emoji: "🍿", value: "Сериалы" },
  { emoji: "🍔", value: "Еда" },
  { emoji: "🚗", value: "Автомобили" },
  { emoji: "💻", value: "Технологии" },
  { emoji: "🐾", value: "Животные" },
  { emoji: "✈️", value: "Путешествия" },
  { emoji: "👗", value: "Мода" },
  { emoji: "🏡", value: "Дом и сад" },
  { emoji: "💰", value: "Финансы" },
  { emoji: "🎨", value: "Искусство" },
];
