import { ENVS } from "@/config/constants";
import { TipoInnovacionPost } from "@/types/types";

export async function GetTiposInnovacion() {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener los tipos de innovacion");
    }
    return res.json();
}

export async function GetFilterTipoInnovacion(id: number) {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener el tipo de innovacion");
    }
    return res.json();
}

export async function PostTipoInnovacion(data: TipoInnovacionPost) {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if(!res.ok){
        throw new Error("No ha sido posible el envio");
    }
    return res.ok;
}

export async function PutTipoInnovacion(id: number, data: TipoInnovacionPost) {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if(!res.ok){
        throw new Error("No ha sido posible actualizar los datos");
    }
    return res.ok;
}

export default async function PatchTipoInnovacion(id: number, data: TipoInnovacionPost) {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if(!res.ok){
        throw new Error("No ha sido posible editarlo");
    }
    return res.json();
}

export async function DeleteTipoInnovacion(id: number) {
    const res = await fetch(`${ENVS.API_URL}/tipo-innovacion/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if(!res.ok){
        throw new Error("No ha sido posible eliminarlo");
    }
    return res.json();
}
