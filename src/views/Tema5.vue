<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad en la nube
      
    .row.fondo-t5.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.justify-content-center.mb-3
            .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t5/img.png")
            .col-lg-7(data-aos="fade-left")
              .tarjeta.color-primario.p-3.mb-4
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/t5/ico.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-white.text-small.mb-0 Para este componente es necesario para la seguridad en la nube adoptar los puntos 11, 11.1, 11.1.1, 11.1.2, 11.2, 11.3, 11.4, 11.5 de la guía 12 del modelo MSPI del ministerio TIC, “5482_G12- Seguridad en la nube, el cual puede ser consultado en el siguiente enlace:
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/seguridad-nube.pdf')" target="_blank")
                          span Abrir enlace
                          i.fas.fa-link
              .bg-2.mb-4.p-3.mnl-22
                p.mb-0 De igual manera nos refiere a que un problema frecuente es la gestión de los datos en Cloud, migraciones de datos sensibles sin aprobación o informado a las áreas necesarias para ello.
              .row.align-items-center.mb-4
                .col-1
                  img(src="@/assets/curso/temas/t5/puntos.svg")
                .col-11
                  p.mb-0 Además de los controles tradicionales de seguridad de los datos (como controles de acceso o cifrado), hay otros dos pasos que ayudan a gestionar la migración no autorizada de datos a servicios #[em Cloud], los cuales son:

          .row.justify-content-center(data-aos="fade-down")
            .col-lg-10.bg-3.br-10.p-4
              .row.align-items-center
                .col-lg-5
                  p.mb-0 Monitorizar la existencia de grandes movimientos internos de datos con herramientas de monitorización de actividad de bases de datos (DAM - #[em Database Activity Monitoring]) y de monitorización de actividad en archivos (FAM - #[em File Activity Monitoring]).
                .col-lg-7
                  img(src="@/assets/curso/temas/t5/fig.svg", alt="Esquema visual de un monitoreo de movimientos con herramientas DAM y a su vez un monitoreo de actividad de archivos.")

    .row.fondo2-t5.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.mb-4
            .col-lg-7(data-aos="fade-right")
              p Monitorizar la migración de datos a #[em Cloud] con filtros URL y herramientas #[em Data Loss Prevention]. En las implementaciones de #[em Cloud] públicas y privadas, y a través de los diferentes modelos de servicio, es importante proteger los datos en tránsito. Esto incluye:
              ul.lista-ul--color.fa-ul.ps-4
                li 
                  i.fas.fa-play
                  | Los datos moviéndose desde la infraestructura tradicional a los proveedores.
                li 
                  i.fas.fa-play
                  span.mb-0 #[em Cloud], incluyendo público/privado, interior/exterior y otras combinaciones.
                li 
                  i.fas.fa-play
                  span.mb-0 Los datos migrando entre los proveedores de #[em Cloud].
                li 
                  i.fas.fa-play
                  span.mb-0 Los datos moviéndose entre instancias (u otros componentes) en un #[em Cloud] determinado. 
              p Hay tres opciones.
            .col-lg-4.col-md-8(data-aos="fade-left")
              img(src="@/assets/curso/temas/t5/img2.png")

          .row.align-items-center
            .col-lg-4.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
              img.px-lg-3(src="@/assets/curso/temas/t5/img3.svg")
            .col-lg-8(data-aos="fade-left")
              LineaTiempoD.color-acento-botones
                .row(numero="1" titulo="Cifrado cliente/aplicación")
                  .col-md-12.mb-4.mb-md-0
                    p.m-0 Los datos son cifrados en el extremo o en el servidor antes de enviarse por la red o ya están almacenados en un formato de cifrado adecuado. Esto incluye el cifrado en cliente local (basado en agente), por ejemplo, para archivos almacenados, o el cifrado integrado en aplicaciones.
                .row(numero="2" titulo="Cifrado enlace/red")
                  .col-md-12.mb-4.mb-md-0
                    p.m-0 técnicas de cifrado de red estándar incluyendo SSL21, VPNs22, y SSH23. Puede ser #[em hardware] o #[em software.] Es preferible extremo a extremo, pero puede no ser viable en todas las arquitectura.
                .row(numero="3" titulo="Cifrado basado en <em>proxy</em>")
                  .col-md-12.mb-4.mb-md-0
                    p.m-0 los datos son transmitidos a un servidor dedicado o servidor #[em proxy,] el cual los cifra antes de enviarlos por la red. Es la opción escogida frecuentemente para la integración con aplicaciones #[em legacy] pero no es generalmente recomendable.


              



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
