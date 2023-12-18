<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contestadores
    
    .row.fondo-t3.align-items-center.py-4.py-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-7(data-aos="fade-right")
            p Una vez revisados los conceptos y características del servicio de directorio y la virtualización, es tiempo de profundizar en los modelos de virtualización a nivel de sistema operativo en el que se desarrollarán varios ejercicios como introducción a la plataforma Docker, la cual es ampliamente utilizada porla industria de desarrollo de #[em software].
            .row.align-items-center.mb-4.ps-md-3.ps-lg-4
              .col-lg-1.d-none.d-lg-flex
                img(src="@/assets/curso/temas/t3/puntos.svg")
              .col-lg-11
                p.mb-0.t-dblue Al finalizar este componente formativo el aprendiz estará en la capacidad de crear imágenes de #[em docker], construir y ejecutar contenedores #[em Docker] a partir de imágenes locales, modificar contenedores locales, transformar un contenedor editada a una imagen y compartir una imagen local en el repositorio en la nube #[em Docker Hub].
          .col-lg-5.col-md-8(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img.png")

    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Contenedores de #[em software]

    .row.fondo2-t3.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-5(data-aos="fade") El término de contenedores se ha vuelto muy común en la jerga actual asociada a la administración de servicios de infraestructura, pero en esencia hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img.px-lg-4(src="@/assets/curso/temas/t3/img2.svg", alt="")
            .col-lg-6(data-aos="fade-left")
              .bloque-texto-e.bg-gradient3.br-10.p-4.mb-4
                .bloque-texto-e__texto.ptop.p-relative
                  img.adorn(src='@/assets/curso/temas/t1/vineta.svg', alt='')
                  p.text-white.pt-5 En este modelo los contenedores no son más que máquinas virtuales aisladas entre sí, con un #[em software] específico que no tiene un sistema operativo propio, sino que comparte los recursos y el #[em kernel] del sistema operativo de la máquina anfitriona o #[em host], logrando un mejor rendimiento, ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o #[em host].
                  div.pt-5.j-end
                    p.text-white.fw-bold López (2018)
                    i.fas.fa-square-full

          .col-12
            .cajon.color-acento-contenido.p-4
              p.mb-0 Los contenedores encapsulan únicamente el #[em software] específico de la aplicación que se ejecuta dentro de él, junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar; logrando, entonces, una portabilidad real, ya que es posible predecir el comportamiento de un #[em software] cuando este se mueve desde un servidor a otro.

    .bg-4.w-fit.py-2.px-4.mb-3(data-aos="fade")
      h4.mb-0 Ventajas

    .row.align-items-center.mb-4
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Disminución de gastos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Requieren menos recursos del sistema, comparado con sistemas de virtualización tradicionales. 
          .row(numero="2" titulo="Mayor portabilidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Se pueden implementar fácilmente en diferentes plataformas y sistemas operativos.
          .row(numero="3" titulo="Funcionamiento coherente")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Siempre se ejecutan de la misma manera independientemente del lugar donde se implementen.
          .row(numero="4" titulo="Mayor eficiencia")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Permiten la implementación de modificaciones y/o escalamiento de funcionalidades con mayor rapidez.
          .row(numero="5" titulo="Mejor desarrollo de aplicaciones")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Este modelo de virtualización se alinea perfectamente con las metodologías ágiles y enfoques de DevOps de la industria actual para acelerar el proceso de construcción de #[em software].
      .col-lg-5.col-md-8(data-aos="fade-left")
        img.px-lg-3(src="@/assets/curso/temas/t3/img3.png", alt="")
               
    .row.fondo3-t3.align-items-center.py-4.pb-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-12
            .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
              h4.mb-0 Mayor uso
          
          .row.justify-content-center
            .col-lg-4.col-md-6.mb-3.mb-lg-0
              .fondo-tj1-t3.bx-sh1.p-4.h-100
                img.mb-3(src="@/assets/curso/temas/t3/tarj-ico1.svg", alt="", style="max-width:75px;")
                p Migración y/o refactorización de aplicaciones existentes a entornos más modernos.
            .col-lg-4.col-md-6.mb-3.mb-lg-0
              .fondo-tj2-t3.bx-sh1.p-4.h-100
                img.mb-3(src="@/assets/curso/temas/t3/tarj-ico2.svg", alt="", style="max-width:95px;")
                p Aplicaciones distribuidas y arquitecturas de microservicios.
            .col-lg-4.col-md-6.mb-3.mb-lg-0
              .fondo-tj3-t3.bx-sh1.p-4.h-100
                img.mb-3(src="@/assets/curso/temas/t3/tarj-ico3.svg", alt="", style="max-width:95px;")
                p Implementación de prácticas de integración y despliegue continuo.


    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.2 Hipervisor vs contenedores

    .row.fondo4-t3.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.justify-content-center.mb-3
            .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t3/img4.png")
            .col-lg-7(data-aos="fade-left")
              .bg-white.mnl-22.p-4.mb-4
                p.mb-0 Hay similitudes y diferencias entre la forma en cómo estas dos tecnologías facilitan el proceso de virtualización de aplicaciones, razón por la cual es más conveniente una u otra dependiendo del contexto particular y las necesidades establecidas por la organización. 
              .row.align-items-center.mb-4
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t3/ptos.svg")
                .col-lg-11
                  p.mb-0.t-blue.fw-bold En ambos casos se requiere de una máquina #[em host] que contendrá la infraestructura física con todos los dispositivos y recursos necesarios, sobre los cuales se monta un sistema operativo que puede ser de cualquier tipo. Luego, sobre este sistema operativo se monta un #[em software], que en el caso esquema de máquinas virtuales tradicionales será un hipervisor y en el esquema de contenedores será un gestor de contenedores.
          
          .col-12(data-aos="fade-down")
            .cajon.color-acento-botones.p-4
              p.mb-0 En las máquinas virtuales, para poder ejecutar una aplicación específica, se requiere de librerías, códigos binarios y del montaje de un sistema operativo invitado. Así, por ejemplo, si la aplicación a ejecutar en la máquina virtual fue construida con Visual Studio Net, es necesario también montar en la máquina virtual el sistema operativo Windows; ahora bien, si la aplicación a ejecutar en la máquina virtual fue construida en Swift, requiere entonces la instalación del sistema operativo MacOS, y así sucesivamente. En todas las máquinas virtuales se debe correr el sistema operativo completo de acuerdo con las #[em App] a utilizar.

    .fondo6-t3.p-4.p-lg-5
      .row.m-0.align-items-center.justify-content-between 
        .col-12.bg-white.p-4
          p.mb-0.fw-bold En el caso de las tecnologías de contenedores, estos se construyen exclusivamente con las aplicaciones, librerías y archivos binarios a ser utilizados, y compartirán recursos con el sistema operativo anfitrión o máquina #[em host].


    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.3 Docker

    .row.fondo5-t3.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
            p Docker es una de las plataformas de #[em software] más ampliamente utilizada en el mundo para la gestión de contenedores.
            .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t3/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-white.mb-0 Para realizar el proceso de instalación de Docker en el sistema operativo Windows debemos dirigirnos directamente a la página oficial de Docker disponible en:
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://docs.docker.com/docker-for-windows/install/')" target="_blank")
                        span Abrir enlace
                        i.fas.fa-link
            .cajon.color-primario.p-4
              p.mb-0 En el enlace anterior se encuentra el acceso directo al proceso de descarga y también una descripción de los requerimientos específicos respecto a versiones del sistema operativo, memoria RAM mínima, procesadores compatibles, entre otros.           
          .col-lg-4.col-8(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img5.png", alt="")

    p.mb-4(data-aos="fade") En el siguiente recurso, se presentan las caraterísticas de Docker.

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4d0C2u4pPh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Docker

    .row.align-items-center.justify-content-center
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta.bg-gradient2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.text-small.mb-0 Se sugiere la revisión del enlace para información detallada sobre la documentación de referencias de Doker, archivos Dockerfile.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://docs.docker.com/engine/reference/builder/')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      .col-lg-6(data-aos="fade-left")
        .tarjeta.bg-gradient2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.text-small.mb-0 Se sugiere la revisión del enlace si se desea estudiar específicamente en la documentación de Dockerfile para Windows.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link



</template>

<script>
export default {
  name: 'Tema3',
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
