import { useQuery } from "@tanstack/react-query";
import apiService from "../../service/apiService";

export default function useGetCategory() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["Categorys"],
        queryFn: async () => {
            return apiService.getCategorys();
          },
    })
    return { listCategorys: data, isLoadingCategorys: isLoading, isErrorCategorys: isError }
}