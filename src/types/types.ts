export interface AreaConocimientoType extends AreaConcimientoPost {
    id: number;
}

export interface AreaConcimientoPost{
    nombre: string;
    descripcion?: string;
    activo: boolean;
}