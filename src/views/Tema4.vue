<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Almacenamiento

    .row.fondo-t4.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t4/img.png")
            .col-lg-8(data-aos="fade-left")
              .row.align-items-center.mb-4
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t1/puntos4.svg")
                .col-lg-11
                  p.mb-0 Un asunto indispensable para la construcción de una solución de virtualización es el almacenamiento. De hecho, es una de las decisiones más importantes a tener en cuenta, ya que los entornos no son iguales debido a su tipo de requerimiento y finalidad.
              .cajon.color-primario.p-4
                p.mb-0 Por mucho tiempo la solución más utilizada ha sido #[em Fibre Channel] (FC) y, en los últimos años, han sobresalido tecnologías como NAS o iSCSI, convirtiéndose en alternativas tentadoras para entornos de virtualización, gracias a su diferencia en rendimiento y precio.


    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Generalidades

    .row.align-items-center
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        p Hay que tener ciertos criterios a la hora de elegir una solución como son: presupuesto disponible, rendimiento y capacidad. Además, hay fabricantes que ya cuentan con una propuesta en virtualización, que se pueden adoptar en el proyecto que se esté proponiendo, como una alternativa para trabajar con la misma línea.
        .row.align-items-center.mb-4
          .col-lg-1.d-none.d-lg-flex
            img.mx-auto(src="@/assets/curso/temas/t1/puntos3.svg", style="max-width: 35px;")
          .co-lgl-11
            p.mb-0 Normalmente en el campo de la virtualización se encuentran tecnologías como FC, que es de las más reconocidas. Sin embargo, no se debe pasar por alto iSCSI o NAS como alternativas. Estas últimas tienen un abanico de dispositivos iSCSI o NAS en el mercado, con características como capacidades, escalabilidad y ver que nuestro requerimiento sea compensado. Por eso, se precisa que en este momento del proyecto el almacenamiento es una parte crítica para ello.
      .col-lg-4.col-md-8(data-aos="fade-left")
        img(src="@/assets/curso/temas/t4/img2.svg")


    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2 Tipos de almacenamiento

    p.mb-4 Existen diferencias en los tipos de almacenamiento de datos. A continuación, se desarrollará aquello de carácter principal, de acuerdo a las especificaciones técnicas para la arquitectura en nube.

    AcordionA(tipo="b" clase-tarjeta="tarjeta bg-2")
      .row.justify-content-center(titulo="DAS <em>Direct Attached Storage</em>")
        .col-12.mb-4
          p Son dispositivos de almacenamiento directamente conectados a la máquina, como es el caso de discos duros internos, cabinas de disco o unidades de cinta para “#[em backup]”.
          .row.align-items-center.mb-4
            .col-lg-1.d-none.d-lg-flex
              img.mx-auto(src="@/assets/curso/temas/t4/ptos1.svg", style="max-width: 40px;")
            .col-lg-11
              p.mb-0 Suelen basarse en tecnologías SCSI- #[em Small Computers System Interface] y FC- #[em Fiber Channel]. Esta arquitectura de almacenamiento se relacionaba principalmente con la época de los “#[em Mainframe]” de IBM. Sin embargo, hoy en día, los PC de sobremesa utilizan arquitectura de almacenamiento DAS, mientras que, en los servidores de las empresas, empieza a caer en desuso, utilizándose únicamente para el almacenamiento del sistema operativo.
          .cajon.color-acento-contenido.c2.p-4.mb-3
            p.mb-0 La arquitectura de almacenamiento DAS presenta muchos inconvenientes, como la dispersión del almacenamiento, que implica una dificultad en la gestión de los #[em backups], así como una baja tolerancia a fallos (sólo posible a través de soluciones RAID), y un alto TCO- #[em Total Cost of Ownership], debido a las dificultades de mantenimiento.
        .col-md-6
          img(src="@/assets/curso/temas/t4/tab-img1.svg")
      .row.justify-content-center(titulo="NAS <em>Network Attached Storage</em>")
        .col-12
          p Con la introducción de las redes locales (LAN), se empezaron a utilizar servidores de almacenamiento conectados a la red, a los cuales se podía acceder directamente a través de la propia infraestructura mediante protocolos específicos como NFS -#[em Network File System], en entornos UNIX y CIFS -#[em Common Internet File System], en entornos Microsoft (antes conocido como SMB, protocolo original de IBM que fue mejorado por Microsoft en CIFS) o incluso mediante FTP, HTTP, etc.
          .row.align-items-center
            .col-md-4
              img.px-3(src="@/assets/curso/temas/t4/tab-img2.svg")
            .col-md-8
              .row.align-items-center.mb-4
                .col-lg-1.d-none.d-lg-flex
                  img.mx-auto(src="@/assets/curso/temas/t4/ptos3.svg", style="max-width: 40px;")
                .col-lg-11
                  p.mb-0.fw-bold.t-blue Los principales beneficios de las Arquitecturas de Almacenamiento NAS son los que proporcionan un mejor TCO -#[em Total Cost of Ownship], resultando fácilmente escalable y capaces de ofrecer una alta disponibilidad.
              .bg-6.p-4
                p.mb-0 Actualmente, las soluciones NAS se basan en TCP/IP, con protocolos NFS o CIFS por encima. En consecuencia, un dispositivo NAS será una máquina dedicada con una o varias direcciones IP y además estará dotado de una conexión de alta velocidad a la red LAN. De esta forma, los equipos clientes; en una arquitectura de almacenamiento NAS, delegan la gestión del sistema de ficheros al propio dispositivo NAS, que se limita a montar las unidades de red exportadas o compartidas. Es así que los usuarios y aplicaciones utilizan estos sistemas de ficheros como si fueran locales, aunque para el sistema operativo se trate claramente de sistemas de ficheros remotos.
      .row.justify-content-center(titulo="SAN <em>Storage Area Network</em>")
        .col-12
          p Esta arquitectura implica disponer de una infraestructura de red de alta velocidad dedicada sólo para almacenamiento y #[em backup], optimizada para mover grandes cantidades de datos y consistente en múltiples recursos de almacenamiento geográficamente distribuidos o no, además de otros elementos (cables, #[em switches] de fibra FC, #[em routers], adaptadores HBA, etc.).
          .row.align-items-center.mb-4
            .col-lg-1.d-none.d-lg-flex
              img.mx-auto(src="@/assets/curso/temas/t4/ptos4.svg", style="max-width: 40px;")
            .col-lg-11
              p.mb-0.fw-bold.t-blue Las redes de almacenamiento SAN han facilitado enormemente la creación de Centros de Procesos de Datos (CDP) distribuidos, #[em Clusters] Geográficos, creación de centros de respaldo (BDC), etc.
        .col-md-8
          img(src="@/assets/curso/temas/t4/tab-img3.svg", alt="")


    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3 Tecnologías de almacenamiento

    p.mb-4(data-aos="fade") Las principales tecnologías de almacenamiento se relacionan con los protocolos de uso, componentes, y costos, a continuación, se describen las principales.

    .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
      h4.mb-0 iSCSI - #[em Internet Small Computer System Interface]

    p.mb-4(data-aos="fade") Sistema de almacenamiento basado en bloques como FC - #[em Fiber Channel]. Se diferencia porque utiliza componentes de una red #[em Ethernet] tradicional para realizar la conexión entre los #[em hosts] y el sistema de almacenamiento. Al utilizar componentes #[em Ethernet], iSCSI es más barato de implementar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.fa-ul.ps-4
          li.mb-4 
            i.fas.fa-play
            span.mb-0 iSCSI utiliza los llamados iniciadores (initiator) para enviar comando iSCSI a los dispositivos de almacenamiento. Estos iniciadores pueden ser basados en #[em software] o #[em hardware]. En la mayoría de las situaciones, los iniciadores #[em software] pueden ser suficientes, una solución #[em hardware] ofrece un mejor rendimiento en E/S utilizando menos recursos del #[em host]. Hay que tener en cuenta que una solución #[em software] introduce un overhead de CPU en el #[em host] que se conecta a la red de almacenamiento.
          li.mb-4 
            i.fas.fa-play
            span.mb-0 iSCSI da un buen rendimiento en redes de 1Gbps (más si utilizamos #[em multipathing]), pero actualmente se pueden construir redes iSCSI de 10 Gbps que ofrecen un rendimiento parecido e incluso mejor que FC. El problema de las redes de 10 Gbps es que son tan caras de implementar como una red FC.
          li.mb-4 
            i.fas.fa-play
            span.mb-0 En cuanto a seguridad, a diferencia de FC, iSCSI implementa sistemas de autenticación (CHAP) y encriptación.
      .col-lg-4.col-md-8(data-aos="fade-left")
        img.px-lg-4(src="@/assets/curso/temas/t4/img3.svg", alt="")


    .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
      h4.mb-0 FC - #[em Fiber channel]

    p.mb-4(data-aos="fade") FC presenta un grado alto de rendimiento y fiabilidad, pero implica realizar una inversión económica mayor e introduce complejidad en la configuración del centro de datos. FC es la solución más utilizada para entornos de virtualización de gran dimensión o máquinas virtuales con IOPS (número de E/S de acceso a disco) gracias a los anchos de banda que se alcanzan (8 Gpbs e incluso 16 Gbps).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        img.px-lg-4(src="@/assets/curso/temas/t4/img4.svg", alt="")
      .col-lg-9(data-aos="fade-left")
        .tarjeta-avatar-b.tema4-3.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t4/tarj-ico1.svg' alt='')
          .tarjeta.bg-1.bx-sh1
            .p-4
              h3 Seguridad
              p.mb-0 Las redes de almacenamiento basadas en FC en principio son más seguras que las basadas en #[em Ethernet], ya que el tráfico está aislado del tráfico normal. Pero por otro lado es más complicado implementar sistemas de autenticación y encriptación.
        .tarjeta-avatar-b.tema4-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t4/tarj-ico2.svg' alt='')
          .tarjeta.bg-1.bx-sh1
            .p-4
              h3 Costos
              p.mb-0 La necesidad de disponer de #[em hardware] propio para la tecnología (HBAs y #[em switches] FC), hacen la solución más cara y compleja de administrar e implementar. Puede darse el caso de que la empresa no disponga de personal con conocimientos en entornos FC, por lo tanto, se puede incurrir en costes adicionales de formación o consultoría externa.

    .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
      h4.mb-0 NAS - #[em Network Attached Storage]

    TabsB.color-acento-botones(data-aos="fade-down")
      .p-4.py-md-5.bg-5(titulo="Protocolo de uso" :icono="require('@/assets/curso/temas/t4/tab2-ico1.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Protocolo de uso
            p La principal diferencia entre iSCSI y NAS es el tipo de protocolo utilizado. Mientras que iSCSI está basado en bloques de discos, NAS es un sistema de compartición de archivos.
            .row.align-items-center.mb-4.ps-md-3.ps-lg-4
              .col-lg-1.d-none.d-lg-flex.px-lg-1
                img(src="@/assets/curso/temas/t4/ptos5.svg")
              .col-lg-11
                p.mb-0 De este modo, se descarga al dispositivo de almacenamiento de la responsabilidad de escribir datos a disco. NAS utiliza un #[em software] cliente que se comunica al servidor NFS mediante red #[em Ethernet].
          .col-md-4
            img(src='@/assets/curso/temas/t4/tab2-img1.svg' alt='')
      .p-4.py-md-5.bg-5(titulo="Costo y rendimento" :icono="require('@/assets/curso/temas/t4/tab2-ico2.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Costo y rendimiento
            p La mayor parte de las plataformas de virtualización soporta NAS. Debido a que NAS es un protocolo muy utilizado, existen diferentes opciones para utilizar un almacenamiento NAS con las máquinas virtuales: desde un servidor físico convertido en servidor NAS o un dispositivo de almacenamiento dedicado basado en NAS. 
            .row.align-items-center.mb-4.ps-md-3.ps-lg-4
              .col-lg-1.d-none.d-lg-flex.px-lg-1
                img(src="@/assets/curso/temas/t4/ptos5.svg")
              .col-lg-11
                p.mb-0.t-blue.fw-bold El coste y rendimiento de cada solución puede variar grandemente siendo los dispositivos dedicados los que ofrecen mayor rendimiento, pero a un coste más alto
            p En la mayoría de los casos, NAS no ofrece el mismo rendimiento que una red SAN FC, pero una arquitectura de red bien configurada puede ofrecer un rendimiento adaptado a tus necesidades. De manera similar a iSCSI, NAS utiliza tarjetas de red para comunicarse con los dispositivos de almacenamiento, por lo tanto tiene un límite de 1 Gpbs. A diferencia de iSCSI no permite #[em multipathing] ofreciendo un rendimiento inferior.
          .col-md-4
            img(src='@/assets/curso/temas/t4/tab2-img2.svg' alt='')
      .p-4.py-md-5.bg-5(titulo="Desventajas" :icono="require('@/assets/curso/temas/t4/tab2-ico1.svg')")
        .row.justify-content-evenly.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Desventajas
            p Entre las desventajas de NAS, no es posible arrancar un servidor directamente desde un dispositivo NAS. Adicionalmente, ciertos fabricantes no recomiendan NAS para ciertas aplicaciones sensibles a latencias.
          .col-md-4
            img(src='@/assets/curso/temas/t4/tab2-img3.svg' alt='')


    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.4 Arreglos Raid

    .row.fondo2-t4.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            p #[b RAID es la sigla para “#[em Redundant Array of Independent Disks]”]. Su definición en español sería “Matriz Redundante de Discos Independientes”. Se trata de una tecnología que combina varios discos rígidos (HD) para formar una única unidad lógica, donde los mismos datos son almacenados en todos los discos (redundancia). En otras palabras, es un conjunto de discos rígidos que funcionan como si fueran uno solo.
            .row.align-items-center.mb-4
              .col-lg-1.d-none.d-lg-flex
                img.mx-auto(src="@/assets/curso/temas/t1/puntos3.svg", style="max-width: 35px;")
              .col-lg-11
                p.mb-0.t-blue Este tipo de implementación permite tener una tolerancia alta contra fallas, pues si un disco tiene problemas, los demás continúan funcionando, teniendo el usuario los datos a su disposición como si nada pasara. La tecnología RAID está consolidada hace décadas, ya que surgió de la Universidad de Berkeley, en California (EUA) a finales de la década de 1980.
            .cajon.color-primario.p-4.mnr-25
              p.mb-0 Para conformar el RAID es preciso utilizar por lo menos 2 discos rígidos. El sistema operativo, en este caso, mezclará los discos como una única unidad lógica. Cuando se graban datos, los mismos se reparten entre los discos del RAID, siempre dependiendo del nivel de RAID adoptado.   
          .col-lg-5.col-8
            img(src="@/assets/curso/temas/t4/img5.png", alt="")
    
    p.mb-4(data-aos="fade") Mediante la implementación de RAID, además de garantizar la disponibilidad de los datos en caso de fallo de un disco, es posible también equilibrar el acceso a la información, de forma que no haya “cuellos de botella”.


      


</template>

<script>
export default {
  name: 'Tema4',
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
