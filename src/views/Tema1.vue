<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de directorio

    .row.fondo-t1.align-items-center.py-4.pt-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.mb-4
            .col-lg-4.col-md-8.mb-3.mb-lg-0.d-none.d-lg-flex(data-aos="fade-right")
              img(src="@/assets/curso/temas/t1/img.png")
            .col-lg-8(data-aos="fade-left")
              img.mx-auto.pb-4(src="@/assets/curso/temas/t1/microsoft.png", style="max-width: 500px;")
              .bb-2
              p.pt-4 Active directory, o también conocido como Directorio Activo (AD), es una herramienta propiedad de Microsoft que brinda servicios de directorio en una red LAN. Microsoft es el gigante tecnológico del #[em software], proveedor de los sistemas operativos Windows, #[em software] ofimático MS Office, entre otros servicios en la nube.
          
          p.mb-4(data-aos="fade") El siguiente recurso presenta información en detalle de Active directory.

          .row.justify-content-center.mb-3(data-aos="fade-down")
            .col-lg-4.col-md-6.mb-3
              .tarj-t1.t1-hover.p-4.h-100
                img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj-ico1.svg", style="max-width: 110px;")
                p.text-center El directorio activo tiene la capacidad de proporcionar un servicio ubicado en uno o varios servidores con capacidad de crear y orquestar objetos como usuarios, equipos o grupos, de tal manera que se pueda gestionar credenciales de inicio de sesión de los equipos conectados en una red.
            .col-lg-4.col-md-6.mb-3
              .tarj-t1.t1-hover.p-4.h-100
                img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj-ico2.svg", style="max-width: 110px;")
                p.text-center El directorio activo permite administrar diversas políticas o reglas para los grupos de trabajo y equipos, en toda la red corporativa, para la cual se haya determinado el control de dominio al servidor de directorio.
            .col-lg-4.col-md-6.mb-3
              .tarj-t1.t1-hover.p-4.h-100
                img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj-ico3.svg", style="max-width: 110px;")
                p.text-center Está orientada al uso profesional, en entornos de trabajo con importantes recursos informáticos, en donde es necesario administrar gran cantidad de equipos en cuanto a actualizaciones o instalación de programas o la creación de archivos centralizados para poder acceder a los recursos de forma remota desde las estaciones de trabajo.

          p.mb-4(data-aos="fade") Lo anterior ratifica que la implementación de Active directory es la forma ideal de centralizar muchos de los componentes típicos de una red LAN sin necesidad de ir equipo por equipo y evitando que los usuarios puedan hacer lo que quieran en una red.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1  Conceptos de dominio

    .row.fondo2-t1.align-items-center.py-4.py-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t1/img2.png")
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
              .bg-3.mb-4.p-3.mnl-22
                p.mb-0 Un controlador de dominio, también conocido como directorio activo (Active directory en inglés), cumple la función principal de agrupar varios ordenadores en una misma red, a lo que se conoce como dominio; el controlador de dominio es capaz de orquestar reglas o políticas para cada dominio que se tenga.
              .row.align-items-center
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t1/puntos.svg")
                .col-lg-11
                  p.mb-0 El dominio dentro de Active directory consiste en varios ordenadores conectados a una red, los cuales cuentan con un equipo servidor para administrar las cuentas de usuario y credenciales de la red. Los dominios no necesariamente tienen que estar en contacto unos con otros; por ejemplo, un dominio (A) tiene acceso a otros dos dominios (B y C), esto no implica que C tenga acceso a B.
            .col-12
              .cajon.color-acento-contenido.p-4
                p.mb-0 Entonces, cuando se hace referencia a Active directory también se debe entender como controlador de dominio, en donde se pueden crear distintos dominios y gestionar permisos e interacción en cada uno de ellos. A esta relación entre dominios se le denomina relación de confianza o #[em trust].


    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Estructura física y lógica

    .row.fondo3-t1.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-11.mb-5(data-aos="fade-down")
            .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/t1/bloque.svg')})`}")
              .bloque-texto-g__texto.p-4
                p.mb-0 Los servicios de directorio se pueden presentar en una red, la cual puede estar compuesta por una estructura física y lógica. Físicamente, los servicios se sirven sobre una topología de red que interconecta los #[em hosts] u ordenadores. La estructura lógica, por otro lado, es la parte fundamental en los servicios de directorio, desde allí se organizan diversas reglas para los dominios. La gestión de dichas reglas tiene un esquema en el Active directory compuesto en árboles y bosques, que se distribuye como se muestra a continuación.

          .col-lg-9.mb-4(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Bosque en Active Directory
            figure
              img(src='@/assets/curso/temas/t1/fig1.svg', alt='En Active Directory, el bosque es una colección de uno o más dominios que comparten una misma estructura lógica, catálogo global y configuración.')
          
          .row.align-items-center
            .col-lg-5.col-md-8.mb-3.mb-lg-0.d-none.d-lg-flex(data-aos="fade-right")
              img(src="@/assets/curso/temas/t1/img4.png")
            .col-lg-7(data-aos="fade-left")
              LineaTiempoD.color-acento-botones.mb-4
                p.mb-0(numero="1" titulo="Unidad Organizativa") Una Unidad Organizacional (OU) es un objeto contenedor que se usa para organizar objetos (como cuentas de usuario, grupos, equipos, impresoras y otras OU´s.) dentro de un dominio. Las OU proveen un mecanismo sencillo para agrupar usuarios y es la unidad más pequeña a la que se le pueden asignar configuraciones de Políticas de grupo. (SANS Institute, 2003)
                p.mb-0(numero="2" titulo="Árbol") Consiste en uno o varios dominios, organizados jerárquicamente y que dependen de una raíz común, a esto se le conoce como DNS común. De esta manera se pueden diferenciar o identificar un dominio de otro. Por ejemplo, un dominio midominio.local puede tener un subdominio que compone dicho árbol, entonces podría tener otro subdominio así works.midominio.local, y si se tiene otro dominio de nombre otro otrodominio.local, es fácil identificar que son árboles diferentes con respecto al anterior.
                p.mb-0(numero="3" titulo="Bosque") Un bosque se compone de todos los dominios existentes, dentro del servidor de dominio. Se crean relaciones de confianza transitivas o intransitivas que están construidas automáticamente por el directorio activo para cada dominio, las cuales pueden ser modificadas posteriormente.
              .row.align-items-center
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t1/puntos2.svg")
                .col-lg-11
                  p.mb-0 En cuanto al árbol, es necesario tener en cuenta que, a través de éste, el directorio activo puede ser dividido o segmentado en partes para optimizar la gestión de recursos, así entonces, un usuario perteneciente a un dominio también puede ser reconocido por los subdominios que pertenezcan al dominio principal.

    .tarjeta-avatar-b(data-aos="fade-down")
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/temas/t1/ico.svg' alt='')
      .tarjeta.bg-3
        .p-4
          h5 Unidad organizativa, árbol y bosque
          p.mb-0 Un bosque contiene varios árboles de dominio con nombres diferentes. También, un bosque cuenta por lo menos con un dominio raíz, de tal manera que cuando se instala o configura el primer dominio, se crea automáticamente la raíz de un árbol y por encima, la raíz de un bosque.


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Cuentas

    .row.fondo4-t1.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.mb-4
            .col-lg-7(data-aos="fade-right")
              p Dentro de los servicios de directorio, las cuentas hacen referencia a los usuarios digitales a los cuales se les brindará o no el acceso a servicios, sistemas, aplicaciones y funcionalidades dentro de un dominio, y son almacenadas localmente en el servidor de dominio. A las cuentas se les pueden asignar derechos y permisos en un servidor determinado, pero solo en ese servidor.
              .row.align-items-center
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t1/puntos2.svg")
                .col-lg-11
                  p.mb-0 Las cuentas de usuario también sirven para tener mayor control en los servicios y aplicaciones, pues se pueden considerar como entidades de seguridad que se utilizan para proteger y administrar el acceso a los recursos en un servidor independiente o miembro para servicios o usuarios.
            .col-lg-5.col-md-8.d-none.d-lg-flex(data-aos="fade-left")
              img(src="@/assets/curso/temas/t1/img5.png")

    p.mb-4(data-aos="fade") Las cuentas de usuario se pueden agrupar de la siguiente manera.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Cuentas de usuario
        figure
          img(src='@/assets/curso/temas/t1/fig2.svg', alt='Tipos de cuentas de usuario. Estas son: administrador, usuarios locales, invitado, de asistencia, seguridad y por defecto.')
          
    .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
      h4.mb-0 Administración de cuentas

    .row.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .row.align-items-center.mb-4
          .col-lg-1.d-none.d-lg-flex
            img.mx-auto(src="@/assets/curso/temas/t1/puntos3.svg", style="max-width: 35px;")
          .col-lg-11
            p.mb-0 Cuando se instala el servidor de dominio y se configura el dominio, se instalan las cuentas locales predeterminadas, estas cuentas se guardan en el contenedor Usuarios en Usuarios y Equipos de Active Directory. Las cuentas locales predeterminadas se pueden crear, deshabilitar, restablecer y eliminar con la Consola de administración de Microsoft (MMC) de Usuarios y equipos de Active Directory y con herramientas de línea de comandos.
        .bg-5.p-4
          p.mb-0 El siguiente recurso amplía la información sobre la administración de cuentas.
      .col-lg-3.col-md-7.d-none.d-lg-flex(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img6.png")

    TabsC.color-acento-botones.mb-5(data-aos="fade-down")
      .p-4.bg-5(titulo="Asignación de permisos")
        .row.align-items-center.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Asignación de permisos
            p.mb-0 Para asignar derechos y permisos a un controlador de dominio local determinado se puede utilizar las funciones disponibles en usuarios y equipos de Active directory.
          .col-md-4
            img(src='@/assets/curso/temas/t1/tab-img1.svg', alt='')
      .p-4.bg-5(titulo="Derecho")
        .row.align-items-center.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab-img2.svg', alt='')
          .col-md-6
            h4 Derecho
            p.mb-0 Un derecho autoriza a un usuario a realizar determinadas acciones en un equipo, como hacer una copia de seguridad de archivos y carpetas o apagar un equipo.
      .p-4.bg-5(titulo="Permiso")
        .row.align-items-center.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h4 Permiso
            p Un permiso de acceso es una regla asociada a un objeto, normalmente un archivo, una carpeta o una impresora, que regula qué usuarios pueden tener acceso al objeto y de qué manera.
            .cajon.color-acento-botones.p-4
              p.mb-0 La administración de cuentas de usuario a través del servidor de dominio es importante, ya que desde allí se pueden brindar los derechos y permisos de acceso a los recursos como parte de la gestión de accesos. 
          .col-md-4.modal-t1
            img(src='@/assets/curso/temas/t1/tab-img3.svg', alt='')
            .row
              .col-auto.posit-3
                a.boton.color-primario.indicador__container.bx-sh1(@click="modal1 = true")
                  span.text-white Ver imagen
                  i.fas.fa-images.text-white
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal1")
              div
                figure
                  img.mx-auto(src='@/assets/curso/temas/t1/t1-26.svg', alt="Esquema gráfico que ilustra la configuración y funcionamiento de un servidor controlador de usuarios de un dominio B, B y C, los cuales se pueden conectar al servidor desde cualquier ordenador que sea miembro del dominio.", style="max-width:870px;")
    
    .row.fondo5-t1.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center
            .col-lg-7(data-aos="fade-right")
              .bg-4.w-fit.py-2.px-4.mb-4(data-aos="fade")
                h4.mb-0 Seguridad en las cuentas y los accesos
              p Es importante que se protejan las cuentas de dominio, para lo cual se debe restringir y limitar estrictamente la pertenencia a los grupos administradores, administradores de dominio y Enterprise Admins, así como controlar de manera rigurosa dónde y cómo se usan las cuentas de dominio.
              .row.align-items-center.mb-4
                .col-lg-1.d-none.d-lg-flex
                  img(src="@/assets/curso/temas/t1/puntos4.svg")
                .col-lg-11
                  p.mb-0 En el siguiente recurso didáctico, se encuentran algunas de las medidas de seguridad para las cuentas y accesos.
            .col-lg-5.col-md-7.d-none.d-lg-flex(data-aos="fade-left")
              img(src="@/assets/curso/temas/t1/img7.png")
    
    .row.fondo6-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-around
          
          p.text-center.mb-4 Seguridad en las cuentas y los accesos
          .col-lg-5.col-md-8.mb-4
            img(src="@/assets/curso/temas/t1/img-1-3.svg", alt="")
          .col-lg-6.mb-4
            .tarjeta-avatar-b.tema1-3.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t1/new-ico1.svg' alt='')
              .tarjeta.bg-3
                .p-4
                  p.mb-0 Separar las cuentas de administrador de las de usuarios.
            .tarjeta-avatar-b.tema1-3.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t1/new-ico2.svg' alt='')
              .tarjeta.bg-3
                .p-4
                  p.mb-0 Para los administradores crear #[em hosts] de estación de trabajo dedicados.
            .tarjeta-avatar-b.tema1-3.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t1/new-ico3.svg' alt='')
              .tarjeta.bg-3
                .p-4
                  p.mb-0 Restringir el inicio de sesión de administrador a servidores y estaciones de trabajo bajo control para quienes tienen derecho de uso, por medio de contraseñas seguras y cuando sea aplicable con doble factor de autenticación.
            .tarjeta-avatar-b.tema1-3.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t1/new-ico4.svg' alt='')
              .tarjeta.bg-3
                .p-4
                  p.mb-0 Para cuentas de administrador deshabilitar el derecho de delegación de cuenta.


    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Directorios y objetos en general

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12
        img(src="@/assets/curso/temas/t1/img8.png", alt="")
      .col-11
        .bg-1.bx-sh1.br-10.p-4.mt-n3
          p.mb-0 Dentro del controlador de dominio o 
            span.t-blue #[b Active Directory ]
            |  un objeto es la representación general que se utiliza para referirse a cualquier elemento del directorio sobre el cual se aplican reglas y atributos. Los objetos se pueden agrupar en los siguientes grupos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .tarj-t1.p-4.h-100
          img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj2-ico1.svg", style="max-width: 110px;")
          h4.text-center Usuario
          p.text-center Consiste en las credenciales de acceso a estaciones de trabajo, aplicaciones o servicios.
      .col-lg-4.col-md-6.mb-3
        .tarj-t1.p-4.h-100
          img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj2-ico2.svg", style="max-width: 110px;")
          h4.text-center Recursos
          p.text-center Son los elementos a los que los usuarios pueden acceder según los derechos de acceso asignados, estos elementos pueden ser carpetas en red, impresoras, entre otros relacionados.
      .col-lg-4.col-md-6.mb-3
        .tarj-t1.p-4.h-100
          img.mx-auto.mb-4(src="@/assets/curso/temas/t1/tarj2-ico3.svg", style="max-width: 110px;")
          h4.text-center Servicios
          p.text-center Consiste en las funcionalidades en red a las que el usuario puede acceder de acuerdo con los derechos de acceso otorgados, entre los cuales pueden ser correo, aplicaciones, sistemas de información, entre otros.


    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.5 Politícas del dominio

    .row.fondo7-t1.align-items-center.py-4.pt-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
            img.pe-lg-3(src="@/assets/curso/temas/t1/img9.png", alt="")
          .col-lg-8(data-aos="fade-left")
            p 
              span.t-blue #[b Las políticas de dominio]
              |, también llamadas de políticas de grupo o reglas del Active directory, consisten en las reglas para el control de acceso a recursos y servicios para los usuarios. De toda la gama de políticas de grupo, existen algunas que denotan mayor relevancia por su importancia en la seguridad digital, y que se deben seguir como buenas prácticas en la implementación de dominio, ya sea local o en la nube, a continuación, se describen algunas de estas.

    .fondo-slider.p-4.mb-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Configuraciones de servicios y seguridad por defecto 
            p Active directory es muy popular, esto hace que muchos delincuentes informáticos conozcan las configuraciones de los servicios y seguridad por defecto, aumentando la facilidad de acceso a los sistemas de las organizaciones. Por esto es importante que se revisen todas las funcionalidades y configuraciones del controlador de dominio que vienen por defecto, con el fin de desactivar los servicios y aplicar reglas de seguridad que sean mejores.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img1.svg", alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Cuentas de acceso privilegiado
            p La gestión de cuentas utiliza cuentas con acceso privilegiado para que se puedan administrar las funcionalidades del directorio activo, pero considerando el factor humano como uno de los vectores de ataque más vulnerables. Se debe evitar dar acceso privilegiado a demasiadas cuentas, ya que aumenta el riesgo de que los #[em hackers] utilicen ataques de ingeniería social y roben alguna de estas cuentas con accesos privilegiados. Así entonces, se debe elegir con rigurosidad las cuentas que en verdad necesiten acceso privilegiado.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img2.svg", alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Contraseñas seguras
            p El uso de contraseñas es uno de los principales factores de seguridad de los usuarios para el acceso seguro a los recursos en la red (Aplicaciones, servicios, etc.), por eso se deben aplicar políticas en el directorio activo para obligar a los usuarios a utilizar contraseñas robustas.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img3.svg", alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Acceso remoto
            p Se deben crear las políticas para asegurar el acceso remoto seguro de usuarios a los servidores y #[em hosts] que requieran permitirse este tipo de conexiones.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img4.svg", alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Caducidad de contraseñas
            p Se deben configurar las políticas para que las contraseñas sean cambiadas periódicamente, por lo general se da un tiempo de caducidad de 90 días.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img5.svg", alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Registro de eventos
            p Es importante activar el registro de eventos para aquellos componentes que sean vitales de revisar en caso de que se presenten sucesos adversos.
          .col-md-4
            img(src="@/assets/curso/temas/t1/slider-img6.svg", alt="")

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-md-11
        .tarjeta.bg-gradient2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white Introducción a AD DS
                  p.text-white.mb-0 Se recomienda seguir la guía rápida de Microsoft que se encuentra en el material complementario y que también puede ser consultada a través de este enlace. Allí se puede profundizar más sobre el directorio activo, los servicios de dominio y sus políticas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://learn.microsoft.com/en-us/training/modules/introduction-to-ad-ds/')" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link

    .row.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-flex(data-aos="fade-right")
        img.pe-lg-3(src="@/assets/curso/temas/t1/img10.png", alt="")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Relaciones de confianza")
            p Existen entre dos dominios / bosques de  la relación de confianza, que consiste en un vínculo de confianza el cual permite a los usuarios autenticados acceder a los recursos de otro dominio.
            p Las relaciones de confianza pueden ser:
            ul.lista-ul--color.color-acento-botones.fa-ul.ps-4.mb-0
              li.mb-1
                i.fas.fa-play
                | Transitivo.
              li.mb-1
                i.fas.fa-play
                | Bidireccional.
              li.mb-1
                i.fas.fa-play
                | Unidireccional.
          .row(numero="2" titulo="Replicación de objetos")
            p
              span.t-blue #[b Active Directory] 
              | puede ser replicado por medio del método de transferir y actualizar objetos del controlador de dominio a otro controlador de dominio, por ejemplo, se podría replicar un controlador de dominio local a uno en la nube.  
            .col-12
              .cajon.color-acento-botones.p-4
                p.mb-0 Algo fundamental para la correcta replicación de objetos son las conexiones entre los controladores de dominios, ya que se apropian con base en la ubicación de los dominios dentro de un bosque. Los dominios deben estar conectados por medio de una o más subredes, de esta manera estarán en segmentos de red por medio de intervalo de direcciones IP asociadas al dominio. Cuando se asigna el direccionamiento IP de un controlador de dominio a una subred, 
                  span.t-blue #[b Active directory  reconoce los controladores de dominio que se encuentran asociados a los dominios]
                  |. Las conexiones de los dominios o sitios son configuradas de manera que se interconecten para garantizar la replicación de los objetos de 
                  span.t-blue #[b Active Directory ] 
                  | de los dominios. 
          .row(numero="3" titulo="Redundancia")
            p.mb-5 La redundancia en servicios de directorio o en 
              span.t-blue #[b Active directory]
              |, consiste en una estrategia para garantizar la disponibilidad del controlador de dominio, por medio de la agregación de controladores de dominio adicionales alternos a un dominio, mejorando las solicitudes de autenticación y búsquedas en el servidor del catálogo global. 
              span.t-blue #[b También ayuda a que los servicios de dominio de Active directory resuelvan problemas o errores de #[em hardware], #[em software] o del administrador (#[em SysAdmin]).]
            .mb-5.mb-md-0
            .col-12
              .bloque-texto-e.bg-gradient3.br-10.p-4.mb-4
                .bloque-texto-e__texto.ptop.p-relative
                  img.adorn(src='@/assets/curso/temas/t1/vineta.svg', alt='')
                  p.text-white.pt-5 Una de las opciones para la redundancia es realizar “Configuración de redundancia geográfica con Replicación de #[em SQL Server]” como lo sugiere Microsoft en su portal, la compañía asegura lo siguiente, “Si usa #[em SQL Server] como base de datos de configuración de AD FS (Active Directory Federation Services), puede configurar la redundancia geográfica para la granja de servidores AD FS mediante #[em SQL Server replicación]. La redundancia geográfica replica los datos entre dos sitios geográficamente lejanos para que las aplicaciones puedan cambiar de un sitio a otro. De este modo, en caso de error de un sitio, todavía puede tener todos los datos de configuración disponibles en el segundo sitio.”
                  div.pt-5.j-end
                    p.text-white.fw-bold Microsoft (2021)
                    i.fas.fa-square-full
              .cajon.color-acento-botones.p-4
                p.mb-0 Otras formas de replicación involucran la instalación y configuración de servidores de controladores de dominio en sitios o nubes alternas.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    modal1: false,
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
