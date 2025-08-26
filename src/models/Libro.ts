import { Material } from "../models/Material.js";

export class Libro extends Material {
    private paginas: number;
    private genero: string | undefined;

    constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string, disponible: boolean = true) {
        super(id, titulo, autor, disponible);
        this.paginas = paginas;
        this.genero = genero;
    }
    
    mostrarInfo(): string {
        return `Libro - ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Género: ${this.genero ?? "N/A"}, Disponible: ${this.disponible}`;
    }
}

