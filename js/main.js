// Registro de un jugador para ☄️Teyuna Landing☄️ (Juego RPG). En este simulador se creará el perfil del jugador y se hará su registro. Además de adquirir los elementos con los que iniciará el juego
//CREACIÓN DEL PERFIL DE JUEGO
//1. Elegir nombre de Usuario
//2. Elegir Género y raza dentro del universo
//3. Dar un saludo de bienvenida
//ARMAR EL KIT DE INICIO
//1. Se muestra la cantidad de créditos que tiene el jugador
//2. Se muestran las opciones de compra de arma de inicio para que efectue la compra
//3. Se muestran las opciones de compra de escudo de inicio
//4. Se puede visualizar al regresar al menu anterior el saldo de créditos
//5. Se da la opción de salir

// Función para mostrar un mensaje de bienvenida según la raza elegida
// Función para mostrar un mensaje de bienvenida según la raza elegida


function mostrarMensajeBienvenida(raza) {
  let mensaje = "";
  switch (raza) {
    case "Guerrero":
      mensaje = "Defensor ancestral luchando contra invasores estelares como 'Guardián Selvático'.";
      break;
    case "Curandero":
      mensaje = "Sanador espiritual que canaliza energías místicas, conocido como 'Esencia Curativa'.";
      break;
    case "Agricultor":
      mensaje = "Custodio de la tierra y proveedor vital en la jungla, denominado 'Sembrador de Armonía'.";
      break;
    case "Mensajero":
      mensaje = "Ágil explorador que conecta a comunidades en resistencia, llamado 'Vínculo Errante'.";
      break;
    default:
      mensaje = "Aventurero de tierras desconocidas.";
  }
  return mensaje;
}

function registrarJugador() {
  alert("☄️Teyuna Landing☄️ - Registro de Jugador");

  let nombre = prompt("Ingresa tu nombre de usuario:");

  let raza;
  let razaElegida = false;
  while (!razaElegida) {
    let razaInput = prompt("Elige tu raza:\n1. Guerrero\n2. Curandero\n3. Agricultor\n4. Mensajero");
    switch (razaInput) {
      case "1":
        raza = "Guerrero";
        razaElegida = true;
        break;
      case "2":
        raza = "Curandero";
        razaElegida = true;
        break;
      case "3":
        raza = "Agricultor";
        razaElegida = true;
        break;
      case "4":
        raza = "Mensajero";
        razaElegida = true;
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
    }
  }

  let mensajeBienvenida = mostrarMensajeBienvenida(raza);
  alert("¡Bienvenido/a " + nombre + " al universo de Teyuna Landing!\nEres un " + raza + mensajeBienvenida);

  let creditos = 100;

  // Menú principal
  let salir = false;
  while (!salir) {
    // cantidad de créditos
    alert("Tienes " + creditos + " créditos.");

    // opciones de compra
    let opcion = prompt("MENU PRINCIPAL:\n1. Comprar arma de inicio\n2. Comprar escudo de inicio\n3. Salir a la batalla");

    switch (opcion) {
      case "1":
        // Comprar arma
        let armas = ["Espada", "Arco", "Varita"];
        let opcionArma = prompt("ARMERÍA - Armas de inicio\n1. Espada (50 créditos)\n2. Arco (50 créditos)\n3. Varita (50 créditos)\nElige tu arma:");
        if (opcionArma == 1) {
          if (creditos >= 50) {
            alert("Has comprado la Espada por 50 créditos.");
            creditos = creditos - 50;
          } else {
            alert("No tienes suficientes créditos para comprar el arma.");
          }
        }else if (opcionArma == 2) {
          if (creditos >= 50) {
            alert("Has comprado el Arco por 50 créditos.");
            creditos = creditos - 50;
          } else {
            alert("No tienes suficientes créditos para comprar el arma.");
          }
        }else if (opcionArma == 3) {
          if (creditos >= 50) {
            alert("Has comprado la Varita por 50 créditos.");
            creditos = creditos - 50;
          } else {
            alert("No tienes suficientes créditos para comprar el arma.");
          }
        }else {
          alert("Opción de arma no válida.");
        }
        break;
      case "2":
        // Comprar escudo
        let escudos = ["Escudo de madera", "Escudo de metal"];
        let opcionEscudo = prompt("ESCUDERÍA - Escudos de inicio\n1. Escudo de madera (30 créditos)\n2. Escudo de metal (30 créditos)\nElige tu escudo:");
        if (opcionEscudo == 1) {
          if (creditos >= 30) {
            alert("Has comprado el Escudo de madera por 30 créditos.");
            creditos = creditos - 30;
          } else {
            alert("No tienes suficientes créditos para comprar el escudo.");
          }
        }else if (opcionEscudo == 2) {
          if (creditos >= 30) {
            alert("Has comprado el Escudo de metal por 30 créditos.");
            creditos = creditos - 30;
          } else {
            alert("No tienes suficientes créditos para comprar el escudo.");
          }
        }else {
          alert("Opción de escudo no válida.");
        }
        break;
      case "3":
        // Salir
        alert("¡Prepárate para la batalla! Que la suerte esté de tu lado.");
        salir = true;
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

registrarJugador();