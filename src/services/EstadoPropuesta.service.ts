import { ENVS } from "@/config/constants";
import { EstadoPropuestaPost } from "@/types/types";

export async function GetEstados() {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener los estados de propuesta");
    }
    return res.json();
}

export async function GetFilterEstado(id: number) {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener el estado de propuesta");
    }
    return res.json();
}

export async function PostEstado(data: EstadoPropuestaPost) {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta`, {
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

export async function PutEstado(id: number, data: EstadoPropuestaPost) {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta/${id}`, {
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

export default async function PatchEstado(id: number, data: EstadoPropuestaPost) {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta/${id}`, {
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

export async function DeleteEstado(id: number) {
    const res = await fetch(`${ENVS.API_URL}/estado-propuesta/${id}`, {
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
