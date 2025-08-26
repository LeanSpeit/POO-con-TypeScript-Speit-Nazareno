import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.ts";

export abstract class Material implements IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;

    // Encapsulamiento de disponibilidad
    private _disponible: boolean;

    constructor (id: number, titulo: string, autor: string, disponible: boolean = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this._disponible = disponible;
    }

    get disponible(): boolean {
        return this._disponible;
    }

    set disponible(valor: boolean) {
        this._disponible = valor;
    }

    abstract mostrarInfo(): string;
}