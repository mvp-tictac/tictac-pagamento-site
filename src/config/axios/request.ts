import Toast from "@/presentation/components/Toast/Toast";
import ApiRequest from "./config";

export type RequestT = {
  method?: "get" | "post" | "delete" | "put";
  data?: FormData;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
};

export type SuccessResponse<T> = { success: true; data: T };
export type ErrorResponse = { success: false; error: string };

export async function MakeRequest<TSuccess>({
  method = "get",
  url,
  data,
  headers,
  params,
}: RequestT): Promise<SuccessResponse<TSuccess> | ErrorResponse> {
  try {
    const config = {
      url,
      method,
      headers: {
        ...ApiRequest.defaults.headers,
        ...headers,
      },
      params,
    };

    if (method !== "get") {
      Object.assign(config, { data });
    }

    const response = await ApiRequest.request<TSuccess>(config);
    return { success: true, data: response.data };
  } catch (error: any) {
    Toast({
      variant: "destructive",
      id: String(Date.now()),
      title: "Houve um erro na requisição",
      contentToShow: error.message ?? "houve um erro interno",
    });

    return { success: false, error: error.message };
  }
}
