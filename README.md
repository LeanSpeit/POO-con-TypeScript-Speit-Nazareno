# Conceptos de TypeScript

## 1. Diferencia entre `extends` y `implements`

- **`extends`**:  
  Se usa para herencia de clases o interfaces. Una clase hija hereda propiedades y métodos de la clase padre. También permite heredar una interfaz a otra interfaz.

- **`implements`**:  
  Se usa cuando una clase se compromete a cumplir un contrato definido por una interfaz, es decir, debe implementar todos los métodos y propiedades de esa interfaz.

---

## 2. Ventajas del tipado fuerte en funciones y clases

1. **Prevención de errores**: Detecta errores en tiempo de compilación antes de ejecutar el código.  
2. **Autocompletado y documentación**: Mejora la experiencia del IDE (VSCode, WebStorm) con sugerencias y documentación inline.  
3. **Mantenimiento más sencillo**: Facilita entender qué tipo de datos espera una función o propiedad.  
4. **Mayor robustez**: Evita pasar tipos incorrectos que podrían causar bugs en producción.

---

## 3. Qué significa que una clase sea abstracta

- Una clase abstracta no se puede instanciar directamente.  
- Sirve como plantilla para otras clases que hereden de ella.  
- Puede contener métodos abstractos (sin implementación) que las clases hijas deben implementar.

---

## 4. Por qué conviene usar getters y setters para el encapsulamiento

- Permiten controlar el acceso a las propiedades de una clase.  
- Se puede validar o modificar el valor antes de asignarlo o devolverlo.  
- Mantienen la coherencia interna del objeto y protegen datos sensibles.

## 5. Ejemplos de tipado en funciones

### a. Función con parámetros obligatorios y opcionales

```ts
function greet(name: string, age?: number) { 
  if (age) { 
    console.log(`Hola ${name}, tienes ${age} años`); 
  } else { 
    console.log(`Hola ${name}`); 
  } 
} 

greet("Naza");      // Hola Naza 
greet("Naza", 25);   // Hola Naza, tienes 25 años
```

### b. Función que devuelve una `Promise`

```ts
function fetchData(url: string): Promise<string> { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      if (url) resolve(`Datos de ${url}`); 
      else reject("URL inválida"); 
    }, 1000); 
  }); 
} 

fetchData("https://api.example.com") 
  .then(data => console.log(data)) 
  .catch(err => console.error(err));
```