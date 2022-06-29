export default {
  global: {
    componenteFormativo: 'Conceptualización en BPG para bovinos de leche',
    descripcionCurso:
      'Dentro de este componente se comprenderán los conceptos de las diferentes actividades, procesos, procedimientos, así como la normativa para la implementación de las buenas prácticas ganaderas en bovinos de leche, las cuales permitirán entender de manera integral su aplicación dentro de la unidad pecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Empresa ganadera bovina de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Funciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política sanitaria y de inocuidad en alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Implicaciones e importancia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Buenas Prácticas Ganaderas en la producción de bovinos de leche - BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes BPG',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Criterios de cumplimiento y listas de chequeo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Aplicación BPG',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Diseño',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Modelos e interpretación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Recursos para implementación BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Clasificación',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos, uso manejo BPG',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Diagnóstico de aplicación de buenas prácticas ganaderas en el predio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normativa en seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Riesgos en ganadería de leche',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Indumentaria necesaria en ganadería de leche',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Gestión ambiental y de calidad',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema:
        'Buenas prácticas ganaderas en la producción de bovinos de leche - BPG',
      referencia:
        'IICA - SENASA. (2018). Buenas Prácticas Pecuarias en la Producción de Ganado Bovino.',
      tipo: 'Manual',
      link:
        'http://proleche.com/wp-content/uploads/2019/02/ManualProduccio%CC%81nGanadoBovino.pdf',
    },
    {
      tema: 'Aplicación BPG',
      referencia:
        'Sitio Argentino de Producción Animal. (2012). Aplicación de las buenas prácticas ganaderas (BPG). Un caso real.',
      tipo: 'Artículo ',
      link:
        'https://www.produccion-animal.com.ar/etologia_y_bienestar/bienestar_en_bovinos/62-bpg.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Es el estado físico y mental de los animales con relación a las condiciones en las que viven y mueren.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'Prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente. ',
    },
    {
      termino: 'Buenas Prácticas en el Uso de Medicamentos Veterinarios (BPMV)',
      significado:
        'Se define como el cumplimiento de los métodos de empleo oficialmente recomendados para los medicamentos de uso veterinario, de conformidad con la información consignada en el rotulado de los productos aprobados, incluido el tiempo de retiro, cuando los mismos se utilizan bajo condiciones prácticas. ',
    },
    {
      termino: 'Condiciones laborales',
      significado:
        'Capacitación del personal, seguridad e higiene del personal y los animales que se manejan.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Característica o atributo de un alimento, que determina que el consumo del mismo no causa riesgo para la salud del consumidor.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'Es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina.',
    },
    {
      termino: 'Manejo',
      significado:
        'Considera todas aquellas prácticas que promueven la productividad, bienestar general y salud de los animales e incluye el manejo de subproductos y residuos. ',
    },
    {
      termino: 'Registro',
      significado:
        'Documento que presenta los resultados obtenidos o proporciona evidencia de actividades desempeñadas. ',
    },
    {
      termino: 'Riesgo',
      significado: 'Es la probabilidad de que un peligro se presente.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Es el conjunto de acciones y procedimientos que permiten la identificación, registro y seguimiento a todos los eventos de la vida del animal, desde su nacimiento hasta el consumidor final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco Ochoa, M. Á. (s.f.). Zootecnia de Bovinos Productores de Leche, Unidad 3. Universidad Nacional de México.',
      link:
        'Https://fmvz.unam.mx/fmvz/p_estudios/apuntes_zoo/unidad_3_bovinosleche.pdf',
    },
    {
      referencia:
        'Contexto Ganadero. (2008). La importancia de Implementar BPG en las Ganaderías de Carne. ',
      link:
        'https://www.contextoganadero.com/regiones/la-importancia-de-implementar-bpg-en-las-ganaderias-de-carne',
    },
    {
      referencia:
        'Figueredo Candia F. F., Idoyaga H. F., Mendoza, L. & Echeverria, P. (2016). Guía de Buenas Prácticas Pecuarias en Producción Lechera. CONACYT. Servicio Nacional de Calidad y Salud Animal. Investigación para el Desarrollo. Prociencia. ',
      link:
        'https://www.conacyt.gov.py/sites/default/files/upload_editores/u294/guia-produccion-lechera.pdf',
    },
    {
      referencia:
        'Holmann, F., Rivas, L., Carulla, J., Rivera, B., Giraldo, L. A., Guzmán, S., Martínez, M., Medina, A. & Farrow, A. (2004). Producción de Leche y su Relación con los Mercados: Caso Colombiano. Centro Internacional de Agricultura Tropical - CIAT e Instituto Internacional de Investigación en Ganadería - ILRI.',
    },
    {
      referencia: 'ICA. (2021). Censo Pecuario Nacional.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/epidemiologia-veterinaria/censos-2016/censo-2018',
    },
    {
      referencia:
        'Palomino Cadavid, P., Jiménez Arboleda, H. A., Naranjo Ramírez, J. A. et al. (2018). Implementación de Buenas Prácticas Ganaderas: principios básicos. Editorial CES, Universidad CES; Medellín.',
      link:
        'https://repository.ces.edu.co/bitstream/handle/10946/3585/Implemetaci%F3n-de-Buenas-Pr%E1cticas-Ganaderas-principios-b%E1sicos.pdf;jsessionid=206AB5C5E89F88E49FA4002C3E0EC105?sequence=1',
    },
    {
      referencia:
        'Secretaría de Agricultura y Desarrollo Rural. (2017). Sanidad e inocuidad, indispensables en la seguridad alimentaria. Gobierno de México. ',
      link:
        'https://www.gob.mx/agricultura/es/articulos/sanidad-e-inocuidad-indispensables-en-la-seguridad-alimentaria',
    },
    {
      referencia:
        'Universidad de Córdoba, España. (s.f.). Características y Particularidades de la Empresa Ganadera. Departamento de Producción Animal.',
      link:
        'https://www.uco.es/organiza/departamentos/prod-animal/economia/aula/img/pictorex/14_07_59_tema0.pdf',
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
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Johanna Cruz',
        cargo: 'Experto Temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Gloria Lida Álzate Suarez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabal',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana PINTO',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
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
