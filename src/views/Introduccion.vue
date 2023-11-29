<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.pb-0.p-md-5.pb-md-0.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.fondo-intro.align-items-center.py-5.pt-md-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-11.mb-5(data-aos="fade")
            .bg-1.bx-sh1.br-10.p-4
              p.mb-0 Le damos la bienvenida al componente formativo “Especificaciones técnicas para la arquitectura tecnológica en nube”. Para comenzar el recorrido por el mismo, se sugiere visualizar el siguiente recurso audiovisual en el que se explica, de forma genérica, cada una de las temáticas que se desarrollarán.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/8qJZ-yd5CBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Especificaciones técnicas para la arquitectura tecnológica en nube: introducción




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
