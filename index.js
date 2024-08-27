const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Función para mostrar elementos en array
const verPizzas = (Array) => {
  for (let a of Array) {
    let obj = {
      id: a.id,
      nombre: a.nombre,
      precio: a.precio,
      ingredientes: a.ingredientes,
    };
    // Crear un arreglo para almacenar las partes del texto
    let detallesPizza = [];

    if (obj.id) {
      detallesPizza.push(`ID: ${obj.id}`);
    }
    if (obj.nombre) {
      detallesPizza.push(`Nombre: ${obj.nombre}`);
    }
    if (obj.precio) {
      detallesPizza.push(`Precio: ${obj.precio}`);
    }
    if (obj.ingredientes) {
      detallesPizza.push(`Ingredientes: ${obj.ingredientes.join(", ")}`);
    }

    console.log(detallesPizza.join(", "));
  }
};
console.log("Ejercicio a: pizzas con id impar");
const pizzaImpar = pizzas.filter((p) => p.id % 2);
verPizzas(pizzaImpar);
console.log("----------------------------");

console.log("Ejercicio b: pizzas que valga menos de $600");
const pizzaCheap = pizzas.some((p) => p.precio < 600);
const respuesta = pizzaCheap ? "si hay disponibles" : "no hay disponibles";
console.log(respuesta);
console.log("----------------------------");

console.log("Ejercicio c: pizzas con nombres y sus precios");
const pizzaName = pizzas.map((p) => ({ nombre: p.nombre, precio: p.precio }));
verPizzas(pizzaName);
console.log("--------------------------");

console.log("Ejercicio d: Imprime ingredientes de cada pizza");
let allIngredient = [];
pizzas.forEach((p) => {
  console.log(`${p.nombre} : `);
  for (let i of p.ingredientes) {
    console.log(`- ${i}`);
  }
});
console.log("--------------------------");
