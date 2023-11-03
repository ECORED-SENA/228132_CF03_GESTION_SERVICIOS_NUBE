<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 #[em Software] de virtualización

    .row.fondo-t2.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .row.align-items-center.justify-content-center.mb-3
            .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t2/img.png")
            .col-lg-7(data-aos="fade-left")
              .bg-2.mb-4.p-3.mnl-22
                p.mb-0 La virtualización es un tema base, sobre el que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube.
              .row.align-items-center.mb-4
                .col-1
                  img.img-t(src="@/assets/curso/temas/t2/1.svg")
                .col-11
                  p.mb-0 Es necesario conocer sobre las generalidades de la virtualización, los diferentes tipos que hay y que son más comunes en el uso de acuerdo con sus características, un listado de algunas herramientas para realizar un proceso de virtualización de servidores y un ejemplo detallado para la realización de una virtualización de un sistema operativo Linux corriendo en una máquina Windows.

              .row.justify-content-center.text-center.mb-4           
                .col-lg-3.my-3
                  .bg-card.p-3.h-100
                    img.img-a.img-t.mb-3(src="@/assets/curso/temas/t2/tarj-ico1.svg")
                    h5.mb-0 Microsoft
                .col-lg-3.my-3
                  .bg-card.p-3.h-100
                    img.img-a.img-t.mb-3(src="@/assets/curso/temas/t2/tarj-ico2.svg")
                    h5.mb-0 Linux
                .col-lg-3.my-3
                  .bg-card.p-3.h-100
                    img.img-a.img-t.mb-3(src="@/assets/curso/temas/t2/tarj-ico3.svg")
                    h5.mb-0 Ubunto

              .cajon.color-primario.p-4
                p.mb-0 La virtualización es el proceso mediante el cual es posible crear una representación de elementos físicos como servidores, sistemas de almacenamiento, redes e incluso aplicaciones mediante software de modo que se puedan reducir los costos asociados a infraestructura de TI, al tiempo que se mejora la eficiencia en el uso de estos recursos (VMware, 2011).                     
      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8    
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Esquema de virtualización
        figure
          img(src='@/assets/curso/temas/t2/fig3.svg', alt='Proceso básico de la virtualización en el que se tiene una infraetsructura y un hipervisor (  del sistema operativo o de software) que administra y hace que funcionen las maquinas virtuales.')

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Generalidades de la virtualización     

    .row.fondo2-t2.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-7.my-3 
            p Normalmente un conjunto de recursos de infraestructura, como discos, memorias, procesadores, etc., que están presentes en un equipo o grupo de servidores, son ocupados únicamente por el sistema operativo y las aplicaciones que se ejecutan sobre este; dichos recursos no siempre usan todo su potencial al 100 %, lo que provoca desperdicios. Con la virtualización, se puede hacer que estos recursos ejecuten una o varias máquinas virtuales al mismo tiempo y cada una de estas máquinas podrá ejecutar su propio conjunto de aplicaciones con sistemas operativos totalmente independientes. 
            .row.align-items-center.mb-4
              .col-1
                img.img-t(src="@/assets/curso/temas/t2/2.svg")
              .col-11
                p.mb-0 Una máquina virtual (MV) es un software especial que funciona como un contenedor de software donde se incluye un sistema operativo y aplicaciones que funcionan totalmente independientes. De esta forma un equipo puede tener instaladas varias máquinas virtuales, cada una de las cuales se ejecutan independientemente en un mismo equipo que sirve como host. 
            .row
              .col-auto
                .bgt.p-2
                  h4.mb-0.text-white Ventajas al implementar esquemas de virtualización                  
          .col-lg-5.my-3  
            img.img-t.img-a(src="@/assets/curso/temas/t2/img2.png")


    .row.fondo3-t2.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.mb-4 
          .col-lg-6.my-3
            .bg-card-1.h-100
              .row.justify-content-center.align-items-end.mb-5
                .col-lg-auto        
                  img.img-t(src="@/assets/curso/temas/t2/tarj2-ico1.svg")
                .col 
                  h4.text-white Aumento de rendimiento
              p Se puede asignar más o menos recursos dinámicamente a una máquina dependiendo de la utilidad real requerida.
              img(src="@/assets/curso/temas/t2/decorador-1.svg" style="max-width: 86px").ms-auto
          .col-lg-6.my-3
            .bg-card-1.h-100
              .row.justify-content-center.align-items-end.mb-5
                .col-lg-auto         
                  img.img-t(src="@/assets/curso/temas/t2/tarj2-ico2.svg")
                .col 
                  h4.text-white Automatización de operaciones
              p Reducción en la inversión de capital y gastos operativos asociados a la infraestructura de TI. Reducción de tiempos de inactividad de los recursos.
              img(src="@/assets/curso/temas/t2/decorador-1.svg" style="max-width: 86px").ms-auto          

        .row.mb-4
          .col-auto
            .bgt.p-2
              h4.mb-0.text-white Tipos de virtualización
        p Existen varias formas de virtualizar, pero el común denominador de la virtualización es el aprovechamiento de los recursos de hardware y software para que estos puedan ser utilizados de forma flexible por parte de los usuarios o clientes. A continuación se describen los tipos de virtualización.
        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-8.my-3        
            .row.mb-4
              .col-auto
                .bgt.p-2
                  h4.mb-0.text-white Virtualización de servidores
            p Este tipo de virtualización tiene ventajas clave:                  
            ul.lista-ul.fa-ul.ms-5
              li 
                i.fas.fa-play.c1
                | Mayor disponibilidad de los servidores.
              li 
                i.fas.fa-play.c1
                | Reducción en costes operativos.
              li 
                i.fas.fa-play.c1
                | Eliminación de la complejidad de los servidores.
              li 
                i.fas.fa-play.c1
                | Mejora en el rendimiento de las aplicaciones.
              li 
                i.fas.fa-play.c1
                | Distribución más rápida de las cargas de trabajo.   
            .cajon.color-primario.p-4
              p.mb-0 La virtualización de servidores es una implementación en la que un servidor físico (host) se divide mediante software en varios servidores virtuales únicos y aislados, los cuales se visualizan al cliente como servidores independientes. 
          .col-lg-4.my-3        
            img.img-t.img-a(src="@/assets/curso/temas/t2/img3.png")

    p Se clasifica en dos tipos, estos son:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        LineaTiempoD.color-acento-botones.ta(data-aos="fade-left")
          div(numero="1" titulo="Virtualización completa")
            p En este tipo de virtualización se usa el hipervisor, el cual es un software que se encarga de la supervisión y gestión de los recursos físicos y adicionalmente se encarga de independizar cada servidor virtual. Sin embargo, el hipervisor requiere recursos para hacer el procesamiento correspondiente, lo que puede afectar el rendimiento general del servidor.          
            img.img-t.img-a(src="@/assets/curso/temas/t2/linea-img1.svg")
          div(numero="2" titulo="Paravirtualización")
            p En este esquema, cada sistema operativo de los servidores virtuales tiene conocimiento de la existencia de los otros, por lo cual el hipervisor se libera un poco de la carga para gestionar los sistemas operativos. Adicionalmente, se tiene ventajas como la posibilidad de crear copias de seguridad más fácilmente, migraciones más rápidas, mejor utilización del sistema y ahorro de energía. No todos los sistemas operativos soportan paravirtualización y, en algunos casos, se pueden presentar problemas de compatibilidad de hardware.          
            img.img-t.img-a(src="@/assets/curso/temas/t2/linea-img2.svg")            
          
      .col-lg-4
        img.img-t.img-a(src="@/assets/curso/temas/t2/img4.png")            

    .row.mb-4
      .col-auto
        .bgt.p-2
          h4.mb-0.text-white Virtualización a nivel de sistema operativo o basada en contenedores 

    .position-relative
      img(src="@/assets/curso/temas/t2/img5.png").d-none.d-md-flex
      .container-text.col-11.mx-auto
        p.mb-0 Es este esquema de virtualización no se usa Hipervisor, sino que es el sistema operativo del servidor físico quien se encarga de las actividades de virtualización, sin embargo, en este esquema los servidores virtuales deben ejecutar el mismo sistema operativo del host. 
        
    .row.mb-4
      .col-auto
        .bgt.p-2
          h4.mb-0.text-white Virtualización de red
    .row.align-items-center.mb-4
      .col-auto
        img.img-t(src="@/assets/curso/temas/t2/3.svg")
      .col
        p.mb-0 Consisten en crear redes virtuales independientes y separadas mediante el uso de software sobre redes físicas. Este tipo de virtualización se puede presentar de dos maneras:       

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-left")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/tarj3-ico1.svg' alt='')
          .tarjeta.bg-1.bx-sh1
            .p-4
              h3 Virtualización externa
              p.mb-0 La cual consiste en la combinación de varias redes completas o partes en una unidad virtual.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/tarj3-ico2.svg' alt='')
          .tarjeta.bg-1.bx-sh1
            .p-4
              h3 Virtualización interna
              p.mb-0 la cual hace uso de contenedores de software para proveer la funcionalidad de una unidad de red física.  Algunos ejemplos de aplicaciones y enfoque de virtualización de red son: VPN, VLAN, SDN.  

      .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        img.px-lg-4(src="@/assets/curso/temas/t2/img6.png", alt="")  

    .row.fondo4-t2.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.mb-4
          .col-auto
            .bgt.p-2
              h4.mb-0.text-white Virtualización de escritorios           
        p Estas máquinas de escritorio virtuales se entregan a los usuarios de forma remota a través de una red pública o privada, los usuarios no necesitan descargar la  máquina virtual.

        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-5.container-slide-f        
            SlyderF.text-center(columnas="col-12")(data-aos="fade-right")
              .tarjeta.color-acento-botones.m-3.p-4.h-100.bgF
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/t2/tarj4-ico1.svg' alt='')
                p Empleada por muchas empresas en la actualidad y también se conoce como VDI por sus siglas en inglés (infraestructura de escritorios virtuales). En este esquema se dispone de un conjunto de servidores o data centers, los cuales publican varias páginas virtuales, cada una con su propio sistema operativo, aplicaciones y servicios con su propio entorno de escritorio.      
              .tarjeta.color-acento-botones.m-3.p-4.h-100.bgF
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/t2/tarj4-ico2.svg' alt='')
                p La máquina virtual se ejecuta en los servidores y no en el equipo del usuario. Es decir, la carga de procesamiento, almacenamiento y demás capacidades de gestión desde el servidor remoto. 
              .tarjeta.color-acento-botones.m-3.p-4.h-100.bgF
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/t2/tarj4-ico3.svg' alt='')
                p Reciben la imagen de sus escritorios desde los servidores de forma remota.   

          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/t2/img7.svg' alt='')


    .row.fondo2-t2.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-7.my-3
            .row.mb-4
              .col-auto
                .bgt.p-2
                  h4.mb-0.text-white Herramientas de virtualización de servidores           
            .row.align-items-center.mb-4
              .col-1
                img.img-t(src="@/assets/curso/temas/t2/4.svg")
              .col-11
                p.mb-0 En el mercado existen muchas herramientas de software creadas para facilitar el proceso de virtualización de servidores, en la Tabla 1 se listan algunas de estas herramientas para entornos domésticos y pequeñas empresas junto con cada una de sus características principales.
              
          .col-lg-5.my-3  
            img.img-t.img-a(src="@/assets/curso/temas/t2/img7.png")

    .row.mb-4
      .col-auto
        .bgt.p-2
          h4.mb-0.text-white Listado de herramientas para virtualización de servidores


    LineaTiempoD.color-acento-botones.ta.mb-5(data-aos="fade-left")
      div(numero="1" titulo="<i>VMware</i>")
        ul.lista-ul.fa-ul.ms-5
          li 
            i.fas.fa-play.c2
            | Gran cantidad de paquetes de software disponibles para virtualización.
          li 
            i.fas.fa-play.c2
            | Tiene soluciones libres y de pago.
          li 
            i.fas.fa-play.c2
            | Compatibilidad con la tecnología Intel VT-x, la cual le permite ejecutar máquinas virtuales en forma nativa de la CPU host cuando esta tiene procesadores Intel.
       
        .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .text-white
                    h4.fst-italic VMware Workstation Pro 
                    p.mb-0 Es el hipervisor de escritorio estándar de la industria para ejecutar máquinas virtuales en PC con Linux o Windows. En el enlace se podrá descargar una prueba gratuita y completamente funcional de 30 días. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link 
      div(numero="2" titulo="<i>Oracle VM VirtualBox</i>")
        ul.lista-ul.fa-ul.ms-5
          li 
            i.fas.fa-play.c2
            | Software gratuito descargable desde su sitio web oficial.
          li 
            i.fas.fa-play.c2
            | Posibilidad de instalar máquinas Linux, MacOS y Windows en la gran mayoría de versiones de forma gratuita.
          li 
            i.fas.fa-play.c2
            | Soporta virtualización en tecnologías Intel y AMD.
       
        .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .text-white
                    h4.fst-italic Oracle VM VirtualBox
                    p.mb-0 En el enlace se encuentran los vínculos a los binarios de VirtualBox y su código fuente. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://docs.docker.com/desktop/install/windows-install/')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      div(numero="3" titulo="<i>Microsoft Hyper-V</i>")
        ul.lista-ul.fa-ul.ms-5
          li 
            i.fas.fa-play.c2
            | Disponible en forma nativa en S.O Windows en versión pro y server. Es decir, si se tiene este tipo de versiones estará disponible de forma gratuita y no requiere de instalación de software externo al sistema.
          li 
            i.fas.fa-play.c2
            | Sirve para virtualizar sistemas Windows y otros como Linux y FreeBSD.
          li 
            i.fas.fa-play.c2
            | Soporta virtualización en tecnologías Intel y AMD
       
        .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .text-white
                    h4.fst-italic Microsoft Hyper-V
                    p.mb-0 En este enlace se puede obtener el código fuente de los últimos lanzamientos para compilarlos. Las instrucciones detalladas para ello se pueden encontrar en la wiki para Linux, Win32 y macOS. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      div(numero="4" titulo="<i>Qemu</i>")
        ul.lista-ul.fa-ul.ms-5
          li 
            i.fas.fa-play.c2
            | Es software libre y está disponible para diferentes tipos de sistemas operativos.
          li 
            i.fas.fa-play.c2
            | No dispone de GUI pero se puede instalar mediante una extensión para en Mac y en Windows.
          li 
            i.fas.fa-play.c2
            | Soporta virtualización en tecnologías Intel y AMD
       
        .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .text-white
                    h4.fst-italic Qemu
                    p.mb-0 Obtenga el código fuente de los últimos lanzamientos y compílelo usted mismo! Las instrucciones detalladas de compilación se pueden encontrar en la wiki para Linux , Win32 y macOS . 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.qemu.org/download/')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      div(numero="5" titulo="<i>Parallels</i>")
        ul.lista-ul.fa-ul.ms-5
          li 
            i.fas.fa-play.c2
            | Hypervisor para sistemas operativos MacOS
          li 
            i.fas.fa-play.c2
            | Permite ejecutar máquinas virtuales de otros sistemas sobre la plataforma de Apple.
          li 
            i.fas.fa-play.c2
            | Compatibilidad con la tecnología Intel VT-x.
          li 
            i.fas.fa-play.c2
            | Permite traspaso de archivos, carpetas compartidas y comunicación de todo tipo de dispositivos de E/S entre la máquina host y las virtuales
          li 
            i.fas.fa-play.c2
            | Se debe pagar licencia para su uso.
       
        .tarjeta.bg-gradient2.p-3.mb-4.mx-3.mx-lg-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .text-white
                    h4.fst-italic Parallels
                    p.mb-0 Una aplicación rápida, sencilla y potente para ejecutar Windows en Mac Intel o Apple M1, todo sin reiniciar. Incluye más de 30 herramientas de un solo toque para simplificar las tareas diarias en Mac y Windows. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.parallels.com/')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link 

    .row.fondo5-t2.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-7.my-3
            .row.mb-4
              .col-auto
                .bgt.p-2
                  h4.mb-0.text-white Ejemplo de virtualización
            p.mb-5 En el siguiente recurso, se podrá consultar un ejemplo paso a paso de cómo realizar un proceso de virtualización de una máquina con sistema operativo Linux, en una máquina con sistema operativo Windows. Para este ejemplo, se utilizará una máquina host con sistema operativo Windows 10 Home de 64 bits y se virtualiza y ejecutará una máquina virtual con sistema operativo Ubuntu desktop 20.04, por medio de la herramienta Oracle Virtual Box.
              
            .tarjeta.bgplay.p-3.mb-4.mx-3.mx-lg-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.img-a.img-t(src="@/assets/curso/temas/t2/play.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      .text-white
                        h4 Video tutorial 
                        p.mb-0 Se sugiere consultar el siguiente video para profundizar en la temática
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://www.parallels.com/')" target="_blank")
                        span Ver video              
          .col-lg-5.my-3  
            img.img-t.img-a(src="@/assets/curso/temas/t2/img8.png")                                                                   
    
    
    Separador 
    
    #t_2_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 2.2 Máquinas virtuales 

    .row.fondo6-t2.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-4.my-3
            img.img-t.img-a(src="@/assets/curso/temas/t2/img9.png")
          .col-lg-8.my-3
            p #[b.t1 Las máquinas virtuales son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión] (Alarcón, 2018). De igual manera debe existir un componente de infraestructura de tipo hardware que soporte todo lo anterior que en últimas es el servidor o equipo donde se haga el desarrollo y creación de la máquina virtual o, si se trata del despliegue y puesta en producción final de la aplicación, puede referirse a un proveedor que suministra el hardware necesario que soportará la máquina virtual como Azure, Google Cloud, AWS, Digital Ocean, entre otras, como lo muestra la siguiente imagen.  
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Funcionamiento de una Máquina virtual
            img.img-t.img-a(src="@/assets/curso/temas/t2/fig4.svg", alt="Esquema que presenta los elementos de una máquina virtual, en la cual un sistema operativo (hipervisor) funciona en un sistema operativo anfitrión.")


    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 2.3 Características de la virtualización

    p.mb-5 Existen ventajas que son características del proceso de virtualización, permitiendo de esta forma obtener mejores y mayores recursos, sistemas de soporte, la migración de datos e información, así como una alta disponibilidad de los recursos. A continuación, se encuentra una breve descripción de estas: 
    TabsB.color-acento-botones.mb-4(data-aos="fade-down")
      .py-4.py-md-5.bg-5(titulo="Almacenamiento" :icono="require('@/assets/curso/temas/t2/tab-ico1.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Almacenamiento
            p Es la agrupación de todos los recursos de almacenamiento lógico y físico, de tal forma que la gestión de dispositivos de almacenamiento en red se simplifica al reunirlos en un único almacén que es administrado desde un lugar central. Las necesidades de almacenamiento pueden variar mucho de una empresa a otra, ya que algunas requieren perdurabilidad de los sistemas, otras precisan lidiar con distintos dispositivos, potencia en la nube, etc.

            .row.align-items-center.mb-4.ps-md-3.ps-lg-4
              .col-1.px-lg-1
                img(src="@/assets/curso/temas/t2/5.svg")
              .col-11
                h5.mb-0.t-blue Gestionar distintos dispositivos de almacenamiento puede resultar una tarea muy compleja, pero la virtualización del almacenamiento ha llegado para poner solución a este problema.

          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img1.svg' alt='')            
      .py-4.py-md-5.bg-5(titulo="Redundancia" :icono="require('@/assets/curso/temas/t2/tab-ico2.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Redundancia
            .row.align-items-center.mb-4.ps-md-3.ps-lg-4
              .col-1.px-lg-1
                img(src="@/assets/curso/temas/t2/5.svg")
              .col-11
                h5.mb-0.t-blue Vamos a imaginar que queremos crear un sistema disponible el 99,99 % del tiempo, bien porque es un servicio vital para la empresa, bien porque cualquier pérdida o corte, puede provocar pérdidas económicas o de cualquier otro tipo. ¿Qué hacemos entonces? 
            p Se suele configurar lo que se denomina un «sistema redundante», es decir dos o más sistemas configurados de forma que uno de ellos sea el que está en funcionamiento, y en el caso en que deje de funcionar por cualquier motivo, se active otro de los sistemas que hasta ese momento estaba «en espera» o «inactivo» tan rápidamente como sea posible. Mediante este sistema, incluso en el peor de los casos (la rotura de un disco duro, un desbordamiento de memoria que mate un proceso vital, o incluso que alguien le pegue una patada al cable) puede seguir funcionando gracias al siguiente equipo hasta entonces «dormido».                
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img2.svg' alt='')   
      .py-4.py-md-5.bg-5(titulo="Migración" :icono="require('@/assets/curso/temas/t2/tab-ico3.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Migración
            p Describe el proceso de mover una máquina virtual de un host a otro. Esto es posible porque los invitados están corriendo en un entorno virtualizado en lugar de directamente sobre el hardware. Hay dos maneras de migrar una máquina virtual: en vivo y fuera de línea.
            ul.lista-ul.fa-ul.ms-5
              li 
                i.fas.fa-play.c1
                span #[b.t-blue Migración fuera de línea:] una migración fuera de línea suspende al invitado, y después mueve una imagen de la memoria del invitado al host destino. El invitado es posteriormente puesto en marcha sobre el host destino y la memoria usada por el invitado en la host fuente liberada. 
              li 
                i.fas.fa-play.c1
                span #[b.t-blue Migración en vivo:] la migración en vivo es el proceso de migrar un invitado activo de un host físico a otro.                 
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img3.svg' alt='')   
      .py-4.py-md-5.bg-5(titulo="Alta disponibilidad" :icono="require('@/assets/curso/temas/t2/tab-ico4.svg')")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Alta disponibilidad
            p Hasta hace poco, las redes y los sistemas de la tecnología de la información (IT) y la tecnología de operaciones (OT) funcionaban de manera completamente independiente entre sí. Sin embargo, desde hace unos años, a medida que la fabricación industrial ha aumentado su nivel de conexión, también han ido convergiendo en la planta los mundos de la IT y la OT de nuevas y trascendentales maneras.
          .col-md-4
            img(src='@/assets/curso/temas/t2/tab-img4.svg' alt='')   

    .row.fondo7-t2.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-5.my-3
            img.img-t.img-a(src="@/assets/curso/temas/t2/img10.png")
          .col-lg-7.my-3
            p #[b.t-blue La digitalización de la fabricación implica enviar y recibir una gran cantidad de datos desde numerosos orígenes y puntos de datos diferentes]. Las aplicaciones y paquetes de software encargados de conectar estos puntos de datos requieren más capacidad de computación de la que jamás habían necesitado. Las empresas industriales están comenzando a cambiar de soluciones físicas de hardware a ambientes virtuales donde pueden residir varias aplicaciones y sistemas operativos.  
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img.img-a.img-t(src='@/assets/curso/temas/t2/7.svg' alt='')
              .tarjeta.bggray.bx-sh1
                .p-4
                  h3 Virtualización, ¿para qué sirve?
                  p.mb-0 La virtualización esencialmente elimina la dependencia entre el sistema operativo y el hardware físico. Ha sido una implementación más habitual en plantas y líneas de nuevo diseño, en las que es posible comenzar desde cero con un ambiente virtual.     
          .col-10
            .cajon.color-acento-contenido.p-4
              p.mb-0 Las plantas de mayor tamaño también han comenzado a cambiar a servidores virtuales, gracias a los grandes centros de datos. Sea cual sea el tamaño de su planta, la planta conectada es el futuro de la fabricación y la virtualización desempeñará un papel cada vez más importante en el espacio de la OT. La tendencia de migración a servidores permite ahora trasladar servidores virtuales de una máquina física a otra, y se encuentra aún en sus primeras fases



</template>

<script>
export default {
  name: 'Tema2',
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
