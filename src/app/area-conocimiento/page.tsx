"use client";

import { useEffect, useState } from "react";

import { AreaConocimientoType } from "@/types/types";
import { GetConocimiento } from "@/services/AreaConocimiento.service";

export default function AreaConocimiento() {
    const [conocimientos, setConocimientos] = useState<AreaConocimientoType[] | null>(null);

    useEffect(() => {
        async function getData() {
            const data = await GetConocimiento();
            setConocimientos(data);
        }

        getData();
    }, []);

    return (
        <div className="w-full p-8">
            <div className="flex items-start gap-8">
                <div className="w-1/3 rounded-xl bg-white p-8 shadow-lg">
                    <h1 className="mb-6 text-2xl font-bold text-black">
                        Área de conocimiento
                    </h1>
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="nombre"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Nombre
                            </label>

                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Ingrese el nombre"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="descripcion"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Descripción
                            </label>

                            <textarea
                                id="descripcion"
                                name="descripcion"
                                rows={4}
                                placeholder="Ingrese una descripción"
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-black outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="activo"
                                name="activo"
                                defaultChecked
                                className="h-4 w-4 rounded border-gray-300"
                            />

                            <label
                                htmlFor="activo"
                                className="text-sm font-medium text-gray-700"
                            >
                                Área activa
                            </label>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-2/3 overflow-x-auto rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-2xl font-bold text-black">
                        Áreas registradas
                    </h2>

                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                                    ID
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                                    Nombre
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                                    Descripción
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {conocimientos
                                ? conocimientos.map((conocimiento) => (
                                    <tr
                                        key={conocimiento.id}
                                        className="border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-3 text-sm text-gray-600">
                                            {conocimiento.id}
                                        </td>

                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                            {conocimiento.nombre}
                                        </td>

                                        <td className="px-4 py-3 text-sm text-gray-600">
                                            {conocimiento.descripcion || "Sin descripción"}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${conocimiento.activo
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {conocimiento.activo ? "Activo" : "Inactivo"}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                                : <h1 className="w-full text-black py-10 text-center">No hay registros</h1>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

