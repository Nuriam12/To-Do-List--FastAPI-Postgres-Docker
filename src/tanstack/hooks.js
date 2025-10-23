import {agregarTareas} from "../API/getTareas"
import { Mutation, useMutation,useQueryClient } from "@tanstack/react-query" 

export function useAddTarea(){
    const queryClient = useQueryClient();
    const mutation = useMutation (agregarTareas,{
        onSuccess :() => {
            queryClient.invalidateQueries(["tareas"]);
        }
    });
    return mutation;
}