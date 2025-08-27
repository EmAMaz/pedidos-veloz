import { useQuery } from "@tanstack/react-query";
import apiService from "../../service/apiService";

export default function useGetProduct() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            return apiService.getProducts();
          },
    })
    return { listProductsInitial: data, isLoadingProducts: isLoading, isErrorProducts: isError }
}