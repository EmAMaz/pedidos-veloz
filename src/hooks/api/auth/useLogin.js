import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiService from "../../../service/apiService";

export default function useLogin(cb) {
  const queryClient = useQueryClient();
  const { mutate, data } = useMutation({
    mutationFn: async (credentials) => {
      return apiService.loginUser(credentials.email, credentials.password);
    },
    onSuccess: (data) => {
      cb(data);
    },
    onError: (error) => {},
  });
  return {
    login: mutate,
    dataResponse: data,
  };
}
