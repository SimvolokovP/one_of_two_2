import { useCollectionQuery } from "@tanstack-query-firebase/react/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { app } from "../firebase/app.config";

export function useTestsList() {
  const firestore = getFirestore(app);
  const collectionRef = collection(firestore, "tests");

  const query = useCollectionQuery(collectionRef, {
    queryKey: ["tests"],
    
  });

  const data = query.data?.docs.map((doc) => ({
    ...doc.data(),
  }));

  return {
    data,
    snapshot: query.data,
    isPending: query.isPending,
    error: query.error,
  };
}
