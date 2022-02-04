function salida(salida_heroe_muerto, salida_nordico, salida_enemigo, salida_vida_original, salida_ataque_original) {
    var aux_vida = salida_vida_original
    var aux_ataque = salida_ataque_original
    if (!salida_heroe_muerto) {
        alert("Ganaste el combate\n" +
            salida_nordico.get_nombre + "\n" +
            "Experiencia ganada " + salida_enemigo.get_nivel + "\n")
        var sube_nivel = salida_nordico.control_nivel(salida_enemigo.get_nivel)
        $("#experiencia_heroe").html(salida_nordico.experiencia)
        if (sube_nivel) {

            aux_vida = aux_vida + 50
            aux_ataque = aux_ataque + 5
            salida_nordico.set_vida = aux_vida
            salida_nordico.set_ataque = aux_ataque

            alert(salida_nordico.get_nombre + " sube de nivel\n" +
                "Experiencia actual " + salida_nordico.get_xp + "\n" +
                "Nivel actual " + salida_nordico.get_nivel + "\n" +
                "Vida actual " + salida_nordico.get_vida + "\n" +
                "Ataque actual " + salida_nordico.get_ataque + "\n")
        }
        $("#nivel_heroe").html(salida_nordico.nivel)
        $("#experiencia_heroe").html(salida_nordico.experiencia)
        $("#salud_heroe").html(salida_nordico.vida + "/" + aux_vida)

    } else {
        alert("Perdiste el combate y " + salida_nordico.get_nombre + " murió")
        $("#salud_heroe").html(salida_nordico.vida + "/" + aux_vida)
    }

}