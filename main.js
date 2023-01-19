
// Declaracion objetos comunes
const libros = [
        { titulo: "Coaching CoActivo", precio: 3000 },
        { titulo: "Coaching Equipos en la Practica", precio: 5800 },
        { titulo: "Coaching para Transformacion Personal", precio: 8100 },
        { titulo: "Neurociencia aplicada al Coaching", precio: 10000 },
        { titulo: "Coaching John Withmore", precio: 6200 },
        { titulo: "Estrategias Coaching Ejecutivo", precio: 8000 },
        { titulo: "Coaching para Líderes", precio: 3800 },
        { titulo: "Un Mundo de Posibilidades", precio: 4500 },
      ];
      
      const descuento = 0.1;
      
      function mainMenu() {
        let total = 0;
        let carrito = [];
      
        while (true) {
          const input = prompt("Seleccione una opcion: \n 1 - Agregar al carrito \n 2 - Finalizar compra \n 3 - Cancelar");

          if (input === '1') {
            const libroSeleccionado = eligeLibro();
            carrito.push(libroSeleccionado);
            total += libroSeleccionado.precio;
            console.log(`Total: $${total}`);
          } else if (input === '2') {
            if (carrito.length === 0) {
              alert("El carrito esta vacio!");
            } else {
              const medioPago = prompt("Selecciona Medio de Pago:\n1 - Brubank (10% off)\n2 - Otro Medio de Pago");
              if (medioPago === '1') {
                total *= (1 - descuento);
                alert(`Total: $${total} (10% off)`);
                armaRecibo(carrito, total);
                break;
              } else if (medioPago === '2') {
                alert(`Total: $${total}`);
                armaRecibo(carrito, total);
                break;
              } else {
                alert("Opcion Invalida!");
              }
            }
          } else if (input === '3') {
            alert("Adios!");
            break;
          } else {
            alert("Opcion Invalida!");
          }
        }
      }
      
      function eligeLibro() {
        const libroselection = prompt(`Seleccionar un libro de la lista:\n${getListaLibro()}\nIngrese el numero elegido.`);
        const libro = libros[libroselection - 1];
        if (!libro) {
          alert("Opcion Invalida");
          return eligeLibro();
        }
        return libro;
      }
      
      function getListaLibro() {
        let listaLibros = "";
        for (let i = 0; i < libros.length; i++) {
          listaLibros += `${i + 1} - ${libros[i].titulo}\n`;
        }
        return listaLibros;
      }
      
      function armaRecibo(carrito, total) {
        let recibo = "Recibo:\n";
        for (let i = 0; i < carrito.length; i++) {
          recibo += `${i + 1} - ${carrito[i].titulo}: $${carrito[i].precio}\n`;
        }
        recibo += `Total: $${total}`;
        alert(recibo);
        console.log(recibo);
      }
      
      mainMenu();