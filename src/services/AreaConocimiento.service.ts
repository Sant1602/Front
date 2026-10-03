import { ENVS } from "@/config/constants";
import { AreaConcimientoPost } from "@/types/types";

export async function GetConocimiento() {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener las áreas de conocimiento");
    }
    return res.json();
}

export async function GetFilterConocimiento(id: number) {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener el area de conocimiento");
    }
    return res.json();
}

export  async function PostConocimiento(data: AreaConcimientoPost ) {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento`, {
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

export async function PutConocimiento(id: number, data: AreaConcimientoPost) {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento/${id}`, {
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

export default async function PatchConocimiento(id: number, data: AreaConcimientoPost) {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento/${id}`, {
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

export async function DeleteConocimiento(id: number) {
    const res = await fetch(`${ENVS.API_URL}/area-conocimiento/${id}`, {
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