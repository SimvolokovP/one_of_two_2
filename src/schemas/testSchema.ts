import { z } from "zod";

export const testItemSchema = z.object({
  file: z.string().nullable().default(null),
  value: z.string().min(1, "Обязательное поле"),
});

export const tagSchema = z.object({
  value: z.string().min(1, "Обязательное поле"),
});

export const testSchema = z.object({
  title: z.string().min(1, "Название обязательно"),
  author: z.string().min(1, "Автор обязателен"),
  cover: z.string().optional(),
  descr: z.string().optional(),
  items: z
    .array(testItemSchema)
    .min(4, "Минимум 4 элемента")
    .max(256, "Максимум 256 элементов")
    .refine((items) => {
      const length = items.length;
      return (
        length === 4 ||
        length === 8 ||
        length === 16 ||
        length === 32 ||
        length === 64 ||
        length === 128 ||
        length === 256
      );
    }, "Количество элементов должно быть степенью двойки (4, 8, 16, 32, 64, 128, 256)"),
  isIncognito: z.boolean().default(false),
  tags: z.array(tagSchema).min(1, "Добавьте хотя бы один тег"),
});
