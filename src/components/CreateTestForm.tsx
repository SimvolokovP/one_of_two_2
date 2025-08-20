// import {
//   Button,
//   Checkbox,
//   FileInput,
//   Input,
//   Select,
//   Textarea,
// } from "@telegram-apps/telegram-ui";
// import { useFieldArray, Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { testSchema } from "../schemas/testSchema";
// import { TAGS_LIST } from "../shared/tags.data";
// import { useState } from "react";
// import type { testSchema as TestSchemaType } from "../schemas/testSchema";

// export function CreateTestForm() {
//   const [itemCount, setItemCount] = useState(2);
  
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     watch,
//   } = useForm({
//     resolver: zodResolver(testSchema),
//     defaultValues: {
//       title: "",
//       author: "",
//       cover: "",
//       descr: "",
//       items: [
//         { value: "", file: null },
//         { value: "", file: null },
//       ],
//       tags: [],
//       isIncognito: false,
//     },
//   });

//   const {
//     fields: itemFields,
//     append: appendItem,
//     remove: removeItem,
//   } = useFieldArray({
//     control,
//     name: "items",
//   });

//   const {
//     fields: tagFields,
//     append: appendTag,
//     remove: removeTag,
//   } = useFieldArray({
//     control,
//     name: "tags",
//   });

//   const itemsCount = watch("items")?.length || 0;

//   const onSubmit = async (data) => {
//     try {
//       console.log("Тест создан:", data);
//     } catch (error) {
//       console.error("Ошибка создания теста:", error);
//     }
//   };

//   const handleItemCountChange = (count: number) => {
//     setItemCount(count);
    
//     const currentCount = itemFields.length;
    
//     if (count > currentCount) {
//       for (let i = currentCount; i < count; i++) {
//         appendItem({ value: "", file: null });
//       }
//     } else if (count < currentCount) {
//       for (let i = currentCount - 1; i >= count; i--) {
//         removeItem(i);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//       <div className="flex flex-col gap-2">
//         <div>
//           <div className="text-sm font-medium mb-1 pl-4">Название теста</div>
//           <Input
//             {...register("title")}
//             placeholder="Введите название теста"
//           />
//           {errors.title && (
//             <div className="text-errpr text-xs mt-1 pl-4">{errors.title.message}</div>
//           )}
//         </div>
        
//         <div>
//           <div className="text-sm font-medium mb-1">Автор</div>
//           <Input
//             {...register("author")}
//             placeholder="Введите имя автора"
//           />
//           {errors.author && (
//             <div className="text-red-500 text-xs mt-1">{errors.author.message}</div>
//           )}
//         </div>
        
//         <div>
//           <div className="text-sm font-medium mb-1">Обложка</div>
//           <Controller
//             name="cover"
//             control={control}
//             render={({ field }) => (
//               <FileInput
//                 onChange={(e) => {
//                   const file = e.target.files?.[0] || null;
//                   field.onChange(file);
//                 }}
//               />
//             )}
//           />
//           {errors.cover && (
//             <div className="text-red-500 text-xs mt-1">{errors.cover.message}</div>
//           )}
//         </div>
        
//         <div>
//           <div className="text-sm font-medium mb-1">Описание (опционально)</div>
//           <Textarea
//             {...register("descr")}
//             placeholder="Добавьте описание теста"
//           />
//           {errors.descr && (
//             <div className="text-red-500 text-xs mt-1">{errors.descr.message}</div>
//           )}
//         </div>
//       </div>

//       {/* Выбор количества элементов */}
//       <div>
//         <div className="text-sm font-medium mb-1">Количество элементов</div>
//         <Select
//           value={itemCount.toString()}
//           onChange={(e) => handleItemCountChange(Number(e.target.value))}
//         >
//           <option value="2">2</option>
//           <option value="4">4</option>
//           <option value="8">8</option>
//           <option value="16">16</option>
//           <option value="32">32</option>
//           <option value="64">64</option>
//         </Select>
//       </div>

//       {/* Элементы теста */}
//       <div className="flex flex-col gap-2">
//         <h3 className="font-medium">Элементы теста ({itemsCount})</h3>
//         {itemFields.map((field, index) => (
//           <div key={field.id} className="flex flex-col gap-2">
//             <div>
//               <Input
//                 {...register(`items.${index}.value`)}
//                 placeholder={`Элемент ${index + 1}`}
//               />
//               {errors.items?.[index]?.value && (
//                 <div className="text-red-500 text-xs mt-1">
//                   {errors.items[index]?.value?.message}
//                 </div>
//               )}
//             </div>
            
//             <div>
//               <Controller
//                 name={`items.${index}.file`}
//                 control={control}
//                 render={({ field }) => (
//                   <FileInput
//                     onChange={(e) => {
//                       const file = e.target.files?.[0] || null;
//                       field.onChange(file);
//                     }}
//                   />
//                 )}
//               />
//               {errors.items?.[index]?.file && (
//                 <div className="text-red-500 text-xs mt-1">
//                   {errors.items[index]?.file?.message}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {errors.items && (
//           <div className="text-red-500 text-xs mt-1">{errors.items.message}</div>
//         )}
//       </div>

//       {/* Теги */}
//       <div className="flex flex-col gap-2">
//         <h3 className="font-medium">Теги</h3>
//         {tagFields.map((field, index) => (
//           <div key={field.id} className="flex gap-2 items-center">
//             <div className="flex-1">
//               <Controller
//                 name={`tags.${index}.value`}
//                 control={control}
//                 render={({ field }) => (
//                   <Select
//                     value={field.value}
//                     onChange={field.onChange}
//                   >
//                     <option value="">Выберите тег</option>
//                     {TAGS_LIST.map((tagItem) => (
//                       <option key={tagItem.value} value={tagItem.value}>
//                         {tagItem.emoji} {tagItem.value}
//                       </option>
//                     ))}
//                   </Select>
//                 )}
//               />
//               {errors.tags?.[index]?.value && (
//                 <div className="text-red-500 text-xs mt-1">
//                   {errors.tags[index]?.value?.message}
//                 </div>
//               )}
//             </div>
//             <Button
//               type="button"
//               onClick={() => removeTag(index)}
//               mode="outline"
//             >
//               ×
//             </Button>
//           </div>
//         ))}
//         <Button
//           type="button"
//           onClick={() => appendTag({ value: "" })}
//           mode="outline"
//         >
//           + Добавить тег
//         </Button>
//         {errors.tags && (
//           <div className="text-red-500 text-xs mt-1">{errors.tags.message}</div>
//         )}
//       </div>

//       {/* Checkbox для анонимности */}
//       <div className="flex items-center gap-2">
//         <Controller
//           name="isIncognito"
//           control={control}
//           render={({ field }) => (
//             <Checkbox
//               checked={field.value}
//               onChange={field.onChange}
//             />
//           )}
//         />
//         <span className="text-sm">Анонимный тест</span>
//       </div>

//       {/* Кнопка отправки */}
//       <Button type="submit" disabled={isSubmitting} size="l">
//         {isSubmitting ? "Создание..." : "Создать тест"}
//       </Button>
//     </form>
//   );
// }