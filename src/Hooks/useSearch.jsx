import { useQuery } from "@tanstack/react-query";
import api from "../Utility/axios";
import { useState } from "react";

const useSearch = (searchTerm) => {
  const [showData, setShowData] = useState(true);
  const {data} = useQuery({
    queryKey: ["reviews-search", searchTerm],
    // enabled: !!searchTerm?.trim(),
    queryFn: async () => {
      const res = await api.get(
        `/api/reviews/search?search=${encodeURIComponent(searchTerm)}`
      );
      return res.data;
    },
    staleTime: 1000 * 60,
    keepPreviousData: true,
  });
  return {setShowData, data};
};

export default useSearch;