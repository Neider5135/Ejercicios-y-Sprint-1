const miNombre = prompt("¿Cómo te llamas?")
        const miApellido = prompt("¿Cuál es tu apellido?")
        let miEdad = prompt("¿Cuántos años tienes?")
        const miMascota = prompt("¿Cómo se llama tu mascota?")
        let edadMascota = prompt("¿Cuántos años tiene tu mascota?")
        const nombreCompleto = miNombre +" "+ miApellido
        const textoPresentacion = "Mi nombre es "+nombreCompleto+" tengo "+miEdad+" años y tengo una mascota llamada "+miMascota+" que tiene "+edadMascota+" años"
        let sumaEdades = miEdad+edadMascota
        let restaEdades = miEdad-edadMascota
        let productoEdades = miEdad%edadMascota
        let divisionEdades = miEdad/edadMascota
        alert (textoPresentacion)
        let Alumno = {
        nombre : "Neider",
        apellido : "Núñez",
        edad : 23,
        mascota : "Paprika",
        edadMascota : 5,
    }
        let Mascota = {
        nombre : "Paprika",
        raza : "Criollo",
        edad : 5,
        dueño : "Paprika",
        edadDueño : 23,
    }
        let frutas = [ "banano", "manzana", "piña", "mango", "sandía"]
        let números = [1, 2, 3, 4, 5]