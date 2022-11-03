export default {
  global: {
    componenteFormativo: 'Diagnóstico para la gestión del riesgo de desastres',
    descripcionCurso:
      'En este componente formativo podrá reconocer las bases para realizar un diagnóstico acertado frente a la gestión del riesgo de desastres, identificando los escenarios de riesgo por medio de sistemas de información geográfica, así mismo, podrá identificar las fuentes de información que se requieren y la manera de comunicar el diagnóstico a las personas involucradas en el proceso',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagnóstico de la gestión del riesgo de desastres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Preparación y revisión de información del territorio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Identificación de los escenarios de riesgo de desastres',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Interpretación cartográfica de los escenarios de riesgo de desastres ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recolección y análisis de información primaria y secundaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Técnicas e instrumentos de recolección de información para la gestión del riesgo de desastres',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Análisis y evaluación de datos para la gestión del riesgo de desastres',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Monitoreo y seguimiento de la gestión del riesgo de desastres',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Informe y comunicación del diagnóstico para la gestión del riesgo de desastres',
            hash: 't_2_4',
          },
        ],
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
      tema: 'Riesgo de desastres.',
      referencia:
        'Universidad de la Laguna. (2014). La evaluación de riesgos en desastres: el riesgo de desastres. Recuperado de',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GGFtgbIdFvg ',
    },
    {
      tema: 'Escenarios de riesgo',
      referencia: 'Núñez, M. (2020). Escenarios del Riesgo. Recuperado de',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aiA-fRnYSqc',
    },
    {
      tema: 'Amenaza, vulnerabilidad y riesgo de desastres',
      referencia:
        'Laffaille, K. (2008). Amenaza, vulnerabilidad y riesgo de desastres. Recuperado de:',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OwVTtdr2jmE',
    },
    {
      tema: 'Indicadores de riesgo de desastres',
      referencia:
        'Banco Interamericano de Desarrollo. (2010). Indicadores de Riesgo de Desastre y de Gestión de Riesgos Programa para América Latina y el Caribe República Dominicana. Recuperado de ',
      tipo: 'Documento',
      descarga: '/downloads/Indicadores_de_Riesgo.PDF',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Se refiere a la probabilidad de la ocurrencia de un fenómeno natural o tecnológico potencialmente peligroso. Generalmente se aplica a los fenómenos de ocurrencia sorpresiva, de evolución rápida y de relativa severidad.',
    },
    {
      termino: 'Análisis de riesgos',
      significado:
        'El proceso de comprender la naturaleza del riesgo para determinar el nivel del mismo, es la base para la evaluación y toma de decisiones sobre las medidas de reducción y preparación para la respuesta. Incluye la estimación del riesgo.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'Proceso de comparación de los resultados de análisis con criterios de riesgo para determinar si este y/o su magnitud es aceptable, el cual ayuda a la decisión sobre las medidas de reducción a implementar.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'Importante variación estadística en el estado medio del clima o en su variabilidad, que persiste durante un período prolongado (normalmente decenios o incluso más). El cambio climático se puede deber a procesos naturales internos o a cambios del forzamiento externo, o bien a cambios persistentes antropogénicos en la composición de la atmósfera o en el uso de las tierras.',
    },
    {
      termino: 'Comunicación del riesgo',
      significado:
        'Es el proceso constante y transversal que se realiza para proveer, compartir y obtener información y comprometer tanto a la comunidad, las instituciones y el sector privado en la gestión del riesgo de desastres.',
    },
    {
      termino: 'Conocimiento del riesgo',
      significado:
        'Es el proceso de la gestión del riesgo compuesto por la identificación de escenarios, el análisis y evaluación, el monitoreo y seguimiento a sus componentes, y la comunicación para promover una mayor conciencia del mismo que alimenta los procesos de reducción del riesgo y de manejo de desastres.',
    },
    {
      termino: 'Desastre',
      significado:
        'Daño o alteración grave de las condiciones normales de vida de un área geográfica determinada, causada por efectos naturales y catastróficos de la acción del hombre de manera accidental, que requiera por ello de la especial atención de los organismos del estado y otras entidades de carácter humanitario y social.',
    },
    {
      termino: 'Emergencia',
      significado:
        'Se refiere a aquellas situaciones que requieren de atención inmediata ya que existe un riesgo inminente para la integridad física del hombre, y ambiental.',
    },
    {
      termino: 'Manejo de desastres',
      significado:
        'Es el proceso de la gestión del riesgo compuesto por la preparación para la respuesta a emergencias, la preparación para la recuperación posdesastre, la ejecución de dicha respuesta y la ejecución de la respectiva recuperación, entiéndase: rehabilitación y recuperación.',
    },
    {
      termino: 'Plan de gestión del riesgo de desastres',
      significado:
        'Es el instrumento que define los objetivos, programas, acciones, responsables y presupuestos, mediante las cuales se ejecutan los procesos de conocimiento del riesgo, reducción y de manejo de desastres, en el marco de la planificación del desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo, S.; Rodríguez, M.; Pérez, R. (Ed). (2009). Gestión de la información y comunicación en emergencias y desastres. Organización Panamericana de la salud OMS. Consultado de:',
      link:
        'https://www.paho.org/chi/dmdocuments/GestionDeInformComunica_LowRes%20Dic%2009.pdf',
    },

    {
      referencia:
        'IDIGER. (2018). Caracterización general del Escenario de Riesgo Sísmico. Consultado de',
      link: 'https://www.idiger.gov.co/rsismico  el 7/10/2022',
    },

    {
      referencia:
        'Protección de infraestructura (s.f). Gestión del riesgo [Artículo]. www.eird.ong. Recuperado de',
      link:
        'https://www.eird.org/cd/toolkit08/material/proteccion-infraestructura/gestion_de_riesgo_de_amenaza/8_gestion_de_riesgo.pdf',
    },
    {
      referencia:
        'UNGRD. (2018). Atlas de Riesgo de Colombia: Revelando los desastres latentes. Bogotá D.C.: Unidad Nacional para la Gestión del Riesgo de Desastres. Obtenido de',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/handle/20.500.11762/27179  el 7/10/2022',
    },

    {
      referencia:
        'Unidad nacional de gestión de riesgo de desastres. (s.f). Guía metodológica para la elaboración de planes departamentales para la gestión del riesgo. Recuperado de:',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/20871/Guia_elaboracion_plan_departamental_gestion_del_riesgo.pdf?sequence=1&isAllowed=y. Consultado: septiembre 9 de 2022.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
