import { MakeRequest } from "@/config/axios/request";
import { Todo } from "./model";

export const listById = async (id: string) => {
  return await MakeRequest<Todo>({ url: `todos/${id}` });
};

const TodoService = { listById };

export default TodoService;
