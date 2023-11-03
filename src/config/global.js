export default {
  global: {
    componenteFormativo:
      'Especificaciones técnicas para la arquitectura tecnológica en la nube',
    descripcionCurso:
      'Este componente formativo brinda los conocimientos para definir especificaciones técnicas de acuerdo con los requerimientos de la arquitectura tecnológica de la organización, en donde se abarcan los aspectos tecnológicos necesarios para la apropiación y gestión de servicios en la nube.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Servicios de directorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos de dominio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura física y lógica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cuentas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Directorios y objetos en general',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Políticas de dominio',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Software</em> de virtualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generalidades de la virtualización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Máquinas virtuales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características de la virtualización',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Contenedores de <em>software</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Hipervisor vs contenedores',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Docker',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Generalidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de almacenamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tecnologías de almacenamiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Arreglos raid',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad en la nube',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Servicios de directorio',
      referencia: 'Microsoft. (2023). <em>Introducción a AD DS</em>.',
      tipo: 'Página web',
      link:
        'https://learn.microsoft.com/en-us/training/modules/introduction-to-ad-ds/',
    },
    {
      tema: '3.3 Docker',
      referencia:
        'Docker docs. (2023). <em>Install Docker Desktop on Windows</em>.',
      tipo: 'Página web',
      link: 'https://docs.docker.com/desktop/install/windows-install/',
    },
    {
      tema: '3.3 Docker',
      referencia: 'Docker docs. (2023). <em>Dockerfile reference</em>.',
      tipo: 'Página web',
      link: 'https://docs.docker.com/engine/reference/builder/',
    },
    {
      tema: '3.3 Docker',
      referencia: 'Microsoft. (2023). <em>Dockerfile on Windows</em>.',
      tipo: 'Página web',
      link:
        'https://learn.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile',
    },
    {
      tema: '5. Seguridad en la nube',
      referencia: 'MinTIC. (2016). <em>Seguridad en la Nube. Guía 12</em>.',
      tipo: 'Guía',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Active Directory</em>',
      significado:
        'es una base de datos y un conjunto de servicios que conectan a los usuarios con los recursos de red que necesitan para realizar su trabajo.',
    },
    {
      termino: 'Contenedores',
      significado:
        'en el sector del transporte se usan contenedores físicos para aislar diferentes cargas (por ejemplo, para el transporte en buques y en trenes). Las tecnologías de desarrollo de <em>software</em> usan cada vez más un método denominado contenerización.',
    },
    {
      termino: 'Dominio',
      significado:
        'cuando hablamos de virtualización, almacena una partición de directorio de dominio que consta de información sobre el dominio en el que se encuentra, más el esquema y las particiones del directorio de configuración para todo el bosque.',
    },
    {
      termino: 'Migración',
      significado:
        'la migración de la TI consiste en trasladar datos o <em>software</em> de un sistema a otro.',
    },
    {
      termino: 'Virtualización',
      significado:
        'es una tecnología que permite crear servicios de TI útiles, con recursos que están tradicionalmente vinculados al <em>hardware.</em> ',
    },
  ],
  referencias: [
    {
      referencia:
        'A Linux a Day (2016). ALMACENAMIENTO, INTRODUCCIÓN Y TERMINOLOGÍA. [Blog]. Wordpress.',
      link:
        'https://alinuxaday.wordpress.com/2016/01/19/almacenamiento-introduccion-y-terminologia',
    },
    {
      referencia: 'Amazon. (2021). AWS Directory Service.',
      link: 'https://aws.amazon.com/es/directoryservice/?nc=sn&loc=1',
    },
    {
      referencia:
        'Astaiza y Taborda (2021). Componente Formativo 5. Virtualización del módulo 5 del tecnólogo Despliegue de aplicaciones y servicio en la nube. SENA.',
    },
    {
      referencia:
        'Astaiza y Taborda (2021). Componente Formativo 6. Contenedores del tecnólogo Despliegue de aplicaciones y servicio en la nube. SENA.',
    },
    {
      referencia:
        'Castillo, J.A. (2018). <em>Active Directory Que es y para qué sirve</em>. Profesional review.',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/',
    },
    {
      referencia: 'Microsoft. (2021). Cuentas de <em>Active Directory</em>.',
      link:
        'https://docs.microsoft.com/es-es/windows/security/identity-protection/access-control/active-directory-accounts',
    },
    {
      referencia:
        'Microsoft. (2021). Línea base de seguridad de Azure para <em>Azure Active Directory</em>',
      link:
        'https://docs.microsoft.com/es-es/security/benchmark/azure/baselines/aad-security-baseline?toc=/azure/active-directory/fundamentals/toc.json',
    },
    {
      referencia:
        'Microsoft (2021). Configuración de redundancia geográfica con Replicación de SQL <em>Server</em>.',
      link:
        'https://docs.microsoft.com/es-es/windows-server/identity/ad-fs/deployment/set-up-geographic-redundancy-with-sql-server-replication',
    },
    {
      referencia: 'MinTIC (2016). Seguridad en la Nube. Guía 12.',
      link:
        'https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf',
    },
    {
      referencia:
        'RDR-IT.COM. (2021). Active Directory: relación de confianza entre dos bosques / dominios.',
      link:
        'https://rdr-it.com/es/active-directory-relacion-de-confianza-entre-dos-bosques-dominios/',
    },
    {
      referencia:
        'SANS Institute. (2003). <em>Global Information Assurance Certification Paper</em>.',
      link:
        'https://wwgrupo/105441#:~:text=Las%20pol%C3%ADticas%20de%20grupo%20del,las%20necesidades%20de%20cada%20usuario',
    },
    {
      referencia:
        'Tecnología+informática. (2021). ¿Qué es RAID? Los niveles de RAID.',
      link:
        'https://www.tecnologia-informatica.com/que-es-raid-los-niveles-de-raid',
    },
    {
      referencia:
        'virtualizamos.es (2021). ¿Qué tecnología de almacenamiento elijo? Fibre Channel, iSCSI o NAS.',
      link:
        'https://www.virtualizamos.es/que-tecnologia-de-almacenamiento-elijo-fibre-channel-iscsi-o-nas',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Pablo Cesar Pardo Ortiz',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'José Luis Bastidas Pérez',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Joaquín Patiño Cerón',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Instructor',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Metodóloga ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
