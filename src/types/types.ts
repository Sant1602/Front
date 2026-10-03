export interface AreaConocimientoType extends AreaConcimientoPost {
    id: number;
}

export interface AreaConcimientoPost{
    nombre: string;
    descripcion?: string;
    activo: boolean;
}
export interface FacultadType extends FacultadPost {
    id: number;
}

export interface FacultadPost {
    nombre: string;
    activo: boolean;
}

export interface TipoInnovacionType extends TipoInnovacionPost {
    id: number;
}

export interface TipoInnovacionPost {
    nombre: string;
    activo: boolean;
}

export interface CriterioEvaluacionType extends CriterioEvaluacionPost {
    id: number;
}

export interface CriterioEvaluacionPost {
    nombre: string;
    peso?: number;
    activo: boolean;
}

export interface DocenteType extends DocentePost {
    id: number;
}

export interface DocentePost {
    nombre: string;
    correo: string;
    activo: boolean;
}

export interface EstadoPropuestaType extends EstadoPropuestaPost {
    id: number;
}

export interface EstadoPropuestaPost {
    nombre: string;
    activo: boolean;
}
