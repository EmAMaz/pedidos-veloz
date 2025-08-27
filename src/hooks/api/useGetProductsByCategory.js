import { useQuery } from "@tanstack/react-query";
import apiService from "../../service/apiService";

export default function useGetProductsByCategory(id) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["ProductsByCategory", id],
        queryFn: async () => {
            return apiService.getProductsByCategory(id);
          },
    })
    return { listProductsByCategory: data, isLoadingProductsByCategory: isLoading, isErrorProductsByCategory: isError }
}