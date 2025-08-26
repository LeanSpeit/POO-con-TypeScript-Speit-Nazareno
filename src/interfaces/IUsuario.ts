import { Material } from "../models/Material.js";

export interface IUsuario {
    id: number;
    nombre: string;

    prestar(material: Material): void;
}