import { Libro } from "./src/models/Libro.js";
import { Revista } from "./src/models/Revista.js";
import { Usuario } from "./src/models/Usuario.js";

// Crear materiales
const libro1 = new Libro(1, "Cien años de soledad", "Gabriel García Márquez", 417, "Novela");
const libro2 = new Libro(2, "1984", "George Orwell", 328, "Distopía");
const revista1 = new Revista(3, "National Geographic", "Varios", 321);

// Crear usuarios
const usuario = new Usuario(1, "Nazareno");

// Prestar materiales
usuario.prestar(libro1);     // disponible
usuario.prestar(revista1);
usuario.prestar(libro1);     // ya no disponible

// Mostrar materiales prestados
console.log("Materiales prestados");
usuario.mostrarPrestados();

// Mostrar última prestación
console.log("Última prestación");
usuario.mostrarUltimaPrestacion();

// Demostrar polimorfismo con mostrarInfo()
console.log("Polimorfismo: mostrarInfo()");
const materiales: (Libro | Revista)[] = [libro1, libro2, revista1];

materiales.forEach((m) => {
  m.mostrarInfo(); // Cada clase imprime info distinta
});