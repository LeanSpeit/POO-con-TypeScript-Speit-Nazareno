import { Material } from "../models/Material.js";
import { IUsuario } from "../interfaces/IUsuario.js";

export class Usuario implements IUsuario {
    id: number;
    nombre: string;
    private materialesPrestados: Material[] = [];
    ultimaPrestacion!: Material; // non-null assertion

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    prestar( material: Material ): void {
        if ( material.disponible ) {
            material.disponible = false;
            this.materialesPrestados.push( material );
            this.ultimaPrestacion = material;
            console.log( `Material "${ material.titulo }" prestado a ${ this.nombre }.` );
        }
    }
}