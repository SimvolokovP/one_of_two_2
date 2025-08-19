import { useCollectionQuery } from "@tanstack-query-firebase/react/firestore";
import { getFirestore, collection, query, where } from "firebase/firestore";
import { app } from "../firebase/app.config";

export function useMyTestsList(userId?: number) {
  const firestore = getFirestore(app);
  const collectionRef = collection(firestore, "tests");

  const testsQuery = query(collectionRef, where("author", "==", userId?.toString()));

  const queryResult = useCollectionQuery(testsQuery, {
    enabled: !!userId,
    queryKey: ["tests", userId],
    staleTime: 36000,
  });

  const data = queryResult.data?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    data,
    snapshot: queryResult.data,
    isPending: queryResult.isPending,
    error: queryResult.error,
  };
}
