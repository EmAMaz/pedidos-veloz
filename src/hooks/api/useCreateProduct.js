import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiService from "../../service/apiService";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: (dataProduct) => {
      return apiService.createProduct(dataProduct);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast(data, {
        type: "success",
        autoClose: 2000
      });
      navigate(-1);
    },
    onError: (error) => {
      console.error("Failed to create todo:", error);
    },
  });

  return { dataProduct: mutate, isSuccess, isPending, isError };
}
