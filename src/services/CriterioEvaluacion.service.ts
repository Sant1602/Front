import { ENVS } from "@/config/constants";
import { CriterioEvaluacionPost } from "@/types/types";

export async function GetCriterios() {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener los criterios de evaluacion");
    }
    return res.json();
}

export async function GetFilterCriterio(id: number) {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!res.ok){
        throw new Error("No ha sido posible obtener el criterio de evaluacion");
    }
    return res.json();
}

export async function PostCriterio(data: CriterioEvaluacionPost) {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion`, {
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

export async function PutCriterio(id: number, data: CriterioEvaluacionPost) {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion/${id}`, {
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

export default async function PatchCriterio(id: number, data: CriterioEvaluacionPost) {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion/${id}`, {
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

export async function DeleteCriterio(id: number) {
    const res = await fetch(`${ENVS.API_URL}/criterio-evaluacion/${id}`, {
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
