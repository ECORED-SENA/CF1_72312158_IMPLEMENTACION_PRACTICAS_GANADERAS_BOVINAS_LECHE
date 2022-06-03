<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normativa en seguridad y salud en el trabajo
    p La seguridad y salud en el trabajo es una actividad multidisciplinaria que a través de la promoción y prevención busca mejorar el bienestar de los trabajadores y evitar los accidentes en el ambiente laboral, para lograr esto se propone que se tenga en cuenta las condiciones de trabajo, así como la organización de este con el fin de reducir sustancialmente los factores de riesgo que puedan derivar en enfermedades o accidentes de tipo laboral.
    p.mb-5 #[b La normativa colombiana en seguridad y salud en el trabajo, está enmarcada en 13 leyes, decretos y resoluciones que deben implementarse en el cumplimiento de la salud laboral en Colombia. A continuación, encontrará la normatividad en seguridad y salud en el trabajo que se deben tener en cuenta en la matriz de requisitos legales:]
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.bg10
        .p-4
          LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    Separador
    #t_7_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Riesgos en ganadería de leche
    p Es recomendable que, si se quieren reducir los riesgos en las ganaderías de leche, en la finca se debe hacer una valoración de los peligros potenciales y a partir de esta se deben plantear las medidas y acciones necesarias para su control.
    p.mb-5 #[b Las personas que trabajan en las explotaciones ganaderas de leche están expuestas a varios tipos de riesgos que se muestran a continuación. Esto se relaciona con el fin de que todas las personas implicadas en esta actividad los tengan en cuenta y puedan disminuir el número de accidentes y así mejorar las condiciones de trabajo:]
    .tarjeta.tarjeta--amarilla2.p-5
      SlyderA
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b MECÁNICO]
            p.mb-0 Este tipo de riesgo es el más grande en las ganaderías de leche y pueden ser accidentes relacionados con los equipos ya que, para realizar estas actividades, se hace uso de máquinas, herramientas o piezas, las cuales le pueden generar lesiones a quien las opere. También está relacionado con las instalaciones de las explotaciones ganaderas como por ejemplo condiciones del terreno muy adversas.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img02.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b ERGONÓMICO]
            p.mb-0 Los trabajadores de las explotaciones pecuarias pueden sufrir lesiones por sobreesfuerzos por el manejo de animales o de equipos (frecuencia de manejo o excesivo peso de estos) o por mantener una postura durante mucho tiempo.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img03.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b BIOLÓGICO]
            p.mb-0 Este riesgo se da sobre todo por el contacto y la manipulación, sin ninguna protección, de los fluidos y residuos, tanto de animales como de plantas. Se pueden presentar alergias, toxicidad secundaria a la exposición a material biológico, zoonosis, enfermedades relacionadas con virus, bacterias, hongos, entre otros contaminantes.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img04.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b LOCATIVO]
            p.mb-0 Hace referencia a las condiciones físicas de los lugares de trabajo, como por ejemplo los corrales de los animales, los espacios donde se guardan insumos para alimentación o atención de los animales, pasillos, salas de ordeño, entre otros, los cuales pueden generar caídas a nivel o a desnivel.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img05.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b FÍSICO]
            p.mb-0 Se presenta por factores de naturaleza física, los cuales entran en contacto con el trabajador, produciendo efectos nocivos para la salud debido a la intensidad y el tiempo expuesto durante las jornadas de trabajo, tales como el ruido, las vibraciones y las temperaturas extremas.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img06.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b ELÉCTRICO]
            p.mb-0 Este tipo de riesgo se encuentra en las producciones que tienen cercas eléctricas y/o conexiones para maquinaria o herramientas. Este se puede generar por contacto directo (paso de la corriente por el cuerpo humano).
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img07.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b QUÍMICO]
            p.mb-0 Este riesgo se da por la exposición no controlada al manejar o aplicar alguna sustancia química o un residuo potencialmente peligroso y pueden producir intoxicación o alergias respiratorias o de la piel.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img08.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b PSICOSOCIAL]
            p.mb-0 Este tipo de riesgo se refiere a aquellos factores de las condiciones de trabajo que afectan a la salud de las personas a través de mecanismos psicológicos y fisiológicos a los que se llama estrés tales como la carga laboral, conductas violentas en el trabajo, monotonía y autonomía.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img09.svg', style="width: 150px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b PÚBLICO]
            p.mb-0 Aquellos que se viven en los espacios públicos y que ponen en riesgo la integridad física e incluso la vida de las personas.
          .col-auto
            figure
              img(src='@/assets/curso/tema7/img10.svg', style="width: 150px").m-auto
    Separador
    #t_7_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Indumentaria necesaria en ganadería de leche
    p.mb-5 Cuando se trabaja con ganadería de leche, es inevitable utilizar la indumentaria necesaria como medida complementaria para la intervención de los actos y condiciones inseguras. A continuación, encontrará un cuadro que contiene la información de los Elementos de Protección Personal (EPP) que se deben utilizar en el desarrollo de las labores en la ganadería de leche:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img01.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Guantes de hule, caucho o plástico
            p Son diseñados para la protección de las manos, en las diferentes labores que se desempeñan dentro de los corrales, tales como limpieza y desinfección. Además, reducen el riesgo de contaminación al evitar el contacto directo con la  piel.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img02.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Guantes de carnaza
            p Son elementos diseñados para proteger de abrasiones, cortes, rozaduras o golpes, además de mejorar el agarre; en las granjas se utilizan para realizar diversas labores como el manejo de los animales y la adecuación de los corrales.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img03.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Botas de caucho de caña alta
            p Las botas deben ser de caña alta, para facilitar los trabajos en condiciones húmedas como el lavado y desinfección de la sala de ordeño, además que permitan la rápida y efectiva limpieza y desinfección de las mismas, deben tener suelas antideslizantes para evitar caídas y accidentes.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img04.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Guante de nitrilo reutilizable
            p Diseñados específicamente para el procesado y la manipulación de alimentos (lácteos).
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img05.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Guantes desechables
            p Se utilizan para el cuidado de animales enfermos y la asistencia de partos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img06.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Zapatos o botas de seguridad
            p Dependiendo de sus características, son utilizadas para proteger los pies de los materiales que puedan caer, de los pisotones del ganado, de las mordeduras de serpientes, de las malas hierbas, de las superficies resbaladizas, de la electricidad estática, de los objetos cortantes, del agua.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img07.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Gafas de seguridad
            p Es un elemento que protege los ojos de la proyección de partículas sólidas o líquidas en el manejo de sustancias, químicas, biológicas o corrosivas, están elaboradas en policarbonato, con antiempañante.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img08.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Tapones para los oídos y orejeras
            p Utilizados para proteger de los elevados niveles de ruido que emiten algunas máquinas como las de ordeña o las motosierras o algunos animales, como los cerdos estabulados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img09.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Casco de seguridad
            p Son elementos que permiten proteger en la parte de la cabeza al personal para evitar golpes por caídas de objetos, resbalones, contacto con cables o líneas eléctricas.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img10.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Respirador con protección para material particulado
            p Este respirador con filtro mecánico para partículas de menos de 10 micras, ayuda para las tareas de mezcla, pulverización o aplicación de productos químicos, al usar disolventes y al cortar metales o madera. El respirador se conoce comúnmente como el “N-95” cubre la cara y filtra el aire, suelen ser desechables.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img11.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Respirador autónomo
            p Este tipo de respiradores se utilizan para trabajar en espacios reducidos, como silos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img12.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Arneses y líneas de vida
            p Usados para trabajar en altura, por ejemplo, al reparar silos de alimentos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img13.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Overol antifluidos, lavable, impermeable
            p Este elemento está diseñado para proteger el cuerpo del operario de diferentes sustancias ya sean químicas, biológicas o físicas, así como de material sólido.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img14.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Ropa que puede proteger
            p Utilizar prendas de vestir y sombreros de colores claros, cuando el tiempo sea caluroso y soleado, para reflejar el calor y resguardar del resplandor excesivo; ropa de abrigo, para trabajar en ambientes fríos; overoles de trabajo impermeables, para trabajar bajo la lluvia.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/img15.png' alt='AvatarTop')
        .tarjeta.color-secundario
          .text-white.p-4
            h4.text-center Delantal plástico
            p Se utiliza en las labores de contacto con fluidos de los animales como partos o palpaciones

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Ley 1010 2006',
        texto:
          'Por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones laborales.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 1401 2007',
        texto:
          'Por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 2346 2007',
        texto:
          'Por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 2646 2008',
        texto:
          'Por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 0652 2012',
        texto:
          'Por la cual se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 0312 2019',
        texto:
          'Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Establece las fases de implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Decreto 1072 2015',
        texto:
          'Decreto Único Reglamentario del Sector Trabajo, se establecen los requisitos que son de obligatorio cumplimiento sin importar la clasificación de la empresa.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 1409 2012',
        texto:
          'Por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Decreto-Ley 1295 1994',
        texto:
          'Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 1792 1990',
        texto:
          'Por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 1986 2013',
        texto:
          'Por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
      {
        titulo: 'Resolución 2400 1979',
        texto:
          'Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.',
        icono: require('@/assets/curso/tema7/img01.svg'),
      },
    ],
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
