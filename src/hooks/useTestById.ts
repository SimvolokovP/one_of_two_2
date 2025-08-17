import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebase/app.config";
import { useQuery } from "@tanstack/react-query";
import type { ITest } from "../models/ITest";

export function useTestById(testId?: string) {
  const firestore = getFirestore(app);

  const query = useQuery({
    enabled: !!testId,
    queryKey: ["test", testId],
    queryFn: async () => {
      if (!testId) throw new Error("Test ID is required");
      
      const docRef = doc(firestore, "tests", testId);
      const snapshot = await getDoc(docRef);
      
      if (!snapshot.exists()) {
        throw new Error("Test not found");
      }
      
      return {
        id: snapshot.id,
        ...snapshot.data(),
      } as ITest;
    },
  });

  return {
    test: query.data,
    isPending: query.isPending,
    error: query.error,
    isError: query.isError,
  };
}