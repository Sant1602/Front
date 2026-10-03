import { ENVS } from "@/config/constants";
import { DocentePost } from "@/types/types";

export async function GetDocentes() {
    const res = await fetch(`${ENVS.API_URL}/docente`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener los docentes");
    }
    return res.json();
}

export async function GetFilterDocente(id: number) {
    const res = await fetch(`${ENVS.API_URL}/docente/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener el docente");
    }
    return res.json();
}

export async function PostDocente(data: DocentePost) {
    const res = await fetch(`${ENVS.API_URL}/docente`, {
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

export async function PutDocente(id: number, data: DocentePost) {
    const res = await fetch(`${ENVS.API_URL}/docente/${id}`, {
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

export default async function PatchDocente(id: number, data: DocentePost) {
    const res = await fetch(`${ENVS.API_URL}/docente/${id}`, {
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

export async function DeleteDocente(id: number) {
    const res = await fetch(`${ENVS.API_URL}/docente/${id}`, {
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
