import instance from ".";
import { updateForm } from "../../models";
export const getAll = () =>{
    const uri = "/products"
    return instance.get(uri)
}
export const getById = (_id: string) => {
    const uri = "/products/" + _id
    return instance.get(uri)
}
export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}