export interface IBibliotecaItem {
    readonly id: number;
    titulo: string;
    autor: string;
    
    mostrarInfo(): string;
}