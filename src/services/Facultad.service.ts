import { ENVS } from "@/config/constants";
import { FacultadPost } from "@/types/types";

export async function GetFacultades() {
    const res = await fetch(`${ENVS.API_URL}/facultad`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener las facultades");
    }
    return res.json();
}

export async function GetFilterFacultad(id: number) {
    const res = await fetch(`${ENVS.API_URL}/facultad/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener la facultad");
    }
    return res.json();
}

export async function PostFacultad(data: FacultadPost) {
    const res = await fetch(`${ENVS.API_URL}/facultad`, {
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

export async function PutFacultad(id: number, data: FacultadPost) {
    const res = await fetch(`${ENVS.API_URL}/facultad/${id}`, {
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

export default async function PatchFacultad(id: number, data: FacultadPost) {
    const res = await fetch(`${ENVS.API_URL}/facultad/${id}`, {
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

export async function DeleteFacultad(id: number) {
    const res = await fetch(`${ENVS.API_URL}/facultad/${id}`, {
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
