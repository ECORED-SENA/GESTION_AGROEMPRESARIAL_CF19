export default {
  global: {
    componenteFormativo:
      'Manejo de residuos y registros en la bioseguridad de las producciones pecuarias ',
    descripcionCurso:
      'Administrar correctamente residuos en la actividad pecuaria favorece, por ejemplo, reducir costos en fertilizantes y la preservación del medio ambiente, entre otros beneficios. Mediante este componente, el aprendiz estará en capacidad de hacer un adecuado control y seguimiento del manejo de residuos en la producción y atender la normativa vigente al respecto: almacenamiento, aprovechamiento, clasificación, registros y plan de contingencias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Excretas y purines',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manejo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Almacenamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aprovechamiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normativa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Envases, empaque y embalajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Manejo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios de devolución postconsumo ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Interpretación fichas técnicas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Normativa',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación y disposición',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Registros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Formatos y su diligenciamiento',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sistemas de Información y reporte ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de contingencias',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente. (2010). Atención de derrames. ARL Sura.',
      link: 'https://www.arlsura.com/files/atencion_derrames.pdf',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      link:
        'http://www.ideam.gov.co/documents/51310/526371/Decreto+4741+2005+PREVENCION+Y+MANEJO+DE+REIDUOS+PELIGROSOS+GENERADOS+EN+GESTION+INTEGRAL.pdf/491df435-061e-4d27-b40f-c8b3afe25705',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos [Fedegán]. (2015). Número de vacas por hectárea se duplica en fincas tecnificadas.',
      link:
        'https://www.fedegan.org.co/noticias/numero-de-vacas-por-hectarea-se-duplica-en-fincas-tecnificadas',
    },
    {
      referencia:
        'Gómez-Soto, J., Sánchez-Toro, O. y Matallana-Pérez, L. (2019). Residuos urbanos, agrícolas y pecuarios en el contexto de las biorrefinerías. Revista Facultad de Ingeniería, 28(53). ',
      link: 'https://doi.org/10.19053/01211129.v28.n53.2019.9705',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (s. f.). Registro de generadores de residuos o desechos peligrosos. Gov.co. ',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/respel',
    },
    {
      referencia:
        'Instituto de Hidrología, Metereología y Estudios Ambientales [IDEAM]. (2019). Plan de contingencias de residuos peligrosos. ',
      link:
        'http://sgi.ideam.gov.co/documents/412030/41385931/E-SGI-A-PL003+PLAN+DE+CONTINGENCIAS+DE+RESIDUOS+PELIGROSOS.pdf/ac57ef69-4deb-4415-a680-21d696034c0c?version=1.0#:~:text=El%20plan%20de%20contingencia%20de,de%20generar%20un%20riesgo%20ambiental',
    },
    {
      referencia:
        'Instituto Nacional de Salud (2011). Protocolo de vigilancia y control de intoxicaciones por plaguicidas. Subdirección de Vigilancia y Control en Salud Pública.',
      link: '',
    },
    {
      referencia:
        'Martínez, J. (2005). Guía para la Gestión integral de residuos peligrosos. Centro Coordinador del Convenio de Basilea para América Latina y El Caribe. ',
      link:
        'https://www.cempre.org.uy/docs/biblioteca/guia_para_la_gestion_integral_residuos/gestion_respel01_fundamentos.pdf',
    },
    {
      referencia:
        'Resolución 773 de 2020. [Ministerio de Salud Protección Social de Colombia]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo de la enfermedad COVID 19 en el sector pecuario, para las explotaciones avícolas, porcícolas, ganadera, equina, acuícolas, pesquero y predios productores de pequeñas especies y empresas productoras, importadoras, de almacenamiento, acondicionadoras y comercializadoras de insumos pecuarios. Mayo 14 de 2020.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=6059',
    },
  ],
  glosario: [
    {
      termino: 'Eclosión',
      significado:
        'Acción de nacer o brotar un ser vivo después de romper la envoltura.',
    },
    {
      termino: 'Empollar',
      significado: 'Incubar los huevos.',
    },
    {
      termino: 'EPP',
      significado:
        'Son equipos que protegen frente a un riesgo laboral externo y se caracterizan por tener que ser llevados o sujetados por cada trabajador. Son personales, es decir, solo protegen al trabajador que los lleva puestos en ese momento.',
    },
    {
      termino: 'Heces',
      significado: 'Material que se evacua durante la defecación.',
    },
    {
      termino: 'Purines',
      significado:
        'Material carbonatado de origen animal que se utiliza como abono.',
    },
    {
      termino: 'RESPEL',
      significado:
        'Residuos peligrosos - es el instrumento de gestión de información mediante el cual se captura información normalizada, homogénea, sistemática sobre la generación y el manejo de residuos o desechos peligrosos, originados por las diferentes actividades productivas y sectoriales del país.',
    },
  ],
  complementario: [
    {
      tema: 'Clasificación y disposición',
      referencia:
        'Decreto 4741 de 2005. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      tipo: 'PDF',
      link:
        'http://www.ideam.gov.co/documents/51310/526371/Decreto+4741+2005+PREVENCION+Y+MANEJO+DE+REIDUOS+PELIGROSOS+GENERADOS+EN+GESTION+INTEGRAL.pdf/491df435-061e-4d27-b40f-c8b3afe25705',
    },
    {
      tema: 'Clasificación y disposición',
      referencia:
        'Martínez, J. (2005). Guía para la Gestión integral de residuos peligrosos. Centro Coordinador del Convenio de Basilea para América Latina y El Caribe.',
      tipo: 'PDF',
      link:
        'https://www.cempre.org.uy/docs/biblioteca/guia_para_la_gestion_integral_residuos/gestion_respel01_fundamentos.pdf',
    },
    {
      tema: 'Aprovechamiento',
      referencia:
        'Ángel, J. [TvAgro]. (2017). Cómo Funciona La Lombricultura - TvAgro por Juan Gonzalo Angel [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FE7C-K6x3bg&ab_channel=TvAgro',
    },
    {
      tema: 'Interpretación fichas técnicas',
      referencia:
        'Cridor. (2020). Insecticida/concentrado emulsionable ficha técnica. Syngenta.',
      tipo: 'PDF',
      link:
        'https://www.syngenta.com.mx/sites/g/files/zhg501/f/media/2021/03/05/5e020adc-d1c8-4e6c-88e2-4abfcec94a12_fichatecnica.pdf?token=1614989132',
    },
    {
      tema: 'Manejo de derrame de sustancias',
      referencia:
        'Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente. (2010). Atención de derrames. ARL Sura.',
      tipo: 'PDF',
      link: 'https://www.arlsura.com/files/atencion_derrames.pdf',
    },
    {
      tema: 'Normativa',
      referencia:
        'Resolución 773 de 2020. [Ministerio de Salud Protección Social de Colombia]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo de la enfermedad COVID 19 en el sector pecuario, para las explotaciones avícolas, porcícolas, ganadera, equina, acuícolas, pesquero y predios productores de pequeñas especies y empresas productoras, importadoras, de almacenamiento, acondicionadoras y comercializadoras de insumos pecuarios. Mayo 14 de 2020.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=6059',
    },
    {
      tema: 'Aprovechamiento',
      referencia:
        'Ángel, J. [TvAgro]. (2015). Técnica para Elaboración de Compostaje en una Granja - TvAgro por Juan Gonzalo Angel [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=e4poW8buvVU&ab_channel=TvAgro',
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
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
