<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.fondo-sint.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-5.col-md-8.mb-4.mb-lg-0
            img(src="@/assets/curso/temas/sint/img-sint.png")
          .col-lg-7
            .bg-white.mb-4.p-3.mnl-22
              p.mb-0 La arquitectura de la nube, tiene algunas especificaciones técnicas que debe tener sé en cuenta cuando se van a llevar a cabo procesos de gestión en #[em cloud].
            .row.align-items-center.mb-4
              .col-1
                img(src="@/assets/curso/temas/sint/puntos.svg")
              .col-11
                p.mb-0 En algunos casos la estructura lógica y física posibilitará un mejor y mayor desarrollo de la gestión, sin embargo, es necesario tener en cuenta las características propias del dominio, la seguridad con que deben establecerse las cuentas, que permiten generar relaciones de confianza para el usuario y el administrador.
            .cajon.color-primario.p-4
              p.mb-0 Por otra parte, el recurso del Docker, como contenedor, es de fácil manejo y servicio, posibilitando un mejor almacenamiento de información, todo esto enmarcado en las guías que ha facilitado Min Tic para el desarrollo tecnológico.
    p.mb-4 Un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La arquitectura tecnológica en la nube comprende servicios de directorio, software de virtualización, contenedores y almacenamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis



</template>

<script>
export default {
  name: 'Sintesis',
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
