$(function () {

    $("#menu-item-about").click(function(){
        fetch("about.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
            });
    })

    $(".people-team-img").append("<figcaption>");

    $(".people-team-img").mouseenter(function () {
        // $(this).find("figcaption").stop().slideDown("slow");
        $(this).find("figcaption").stop().fadeIn("slow");
    });

    $(".people-team-img").mouseleave(function () {
        $(this).find("figcaption").stop().fadeOut("slow");
    });

    fetch("https://servicios.campus.pe/empleados.php")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            llenarTablaProveedores(data);
        });

    function llenarTablaProveedores(data) {
        let contenidoTabla = "";
        data.map(item => {
            let fila = "<tr>";
            fila += "<td>" + item.idempleado + "</td>";
            fila += "<td>" + item.apellidos + "</td>";
            fila += "<td>" + item.nombres + "</td>";
            fila += "<td>" + item.cargo + "</td>";
            fila += "<td>" + item.telefono + "</td>";
            fila += "<td>" + item.ciudad + "</td>";
            fila += "</tr>";
            contenidoTabla += fila;
        });
        $("#tbody-proveedores").html(contenidoTabla);
    }

})