import { Material } from "../models/Material.js";
import type { IUsuario } from "../interfaces/IUsuario.js";

export class Usuario implements IUsuario {
    id: number;
    nombre: string;
    private materialesPrestados: Material[] = [];
    ultimaPrestacion!: Material; // non-null assertion

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    // Implementación del método de la interfaz
    prestar(material: Material): void {
        if (material.disponible) {
        material.disponible = false;
        this.materialesPrestados.push(material);
        this.ultimaPrestacion = material;
        console.log(`${this.nombre} ha prestado "${material.titulo}".`);
        } else {
        console.log(`El material "${material.titulo}" no está disponible.`);
        }
    }

    // Mostrar todos los materiales prestados
    mostrarPrestados(): void {
        if (this.materialesPrestados.length === 0) {
        console.log(`${this.nombre} no tiene materiales prestados.`);
        return;
        }

        console.log(`Materiales prestados por ${this.nombre}:`);
        this.materialesPrestados.forEach((m) => {
        console.log(`- ${m.titulo} (${m.constructor.name})`);
        });
    }

    // Mostrar la última prestación
    mostrarUltimaPrestacion(): void {
        if (!this.ultimaPrestacion) {
        console.log(`${this.nombre} aún no ha prestado ningún material.`);
        return;
        }

        console.log(`Última prestación: "${this.ultimaPrestacion.titulo}" (${this.ultimaPrestacion.constructor.name})`);
    }
    }