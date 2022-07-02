<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recursos para implementación BPG
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6UQFcvwHz3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    Separador
    #t_5_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Clasificación
    p.mb-5 Las buenas prácticas ganaderas BPG se pueden clasificar en las siguientes:
    .row.mb-5.h-100
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img01.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Buenas Prácticas Ganaderas aplicadas a la Producción de Leche:
              p Su principal objetivo es la producción de leche inocua y de calidad y se implementan en los procesos de producción, ordeño y conservación de la leche en las producciones ganaderas. Normativamente, están reglamentadas por el Decreto 616 del 2006, expedido por el Ministerio de Protección Social y el Ministerio de Agricultura y Desarrollo Rural y por la Resolución 3585 del 2008 del Instituto Colombiano Agropecuario ICA.
      .col-lg-6
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img02.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Buenas Prácticas Ganaderas en la producción de carne:
              p Casi igual que en el ítem anterior, las BPG en la producción de carne están enfocadas en la producción de carne inocua y que no represente riesgo alguno en el consumidor final. Normativamente, se encuentran enmarcadas en la Resolución 068167, expedida por el ICA y cuya función es establecer los requisitos para obtener la certificación en BPG en la producción de carne de bovinos y/o bufalinos.
    p.mb-5 Vale la pena resaltar que, aunque cada una de estas BPG se dedica específicamente a la producción ya sea de carne o de leche, #[b los principales aspectos a cumplir en ambas están enmarcados en los siguientes ítems:]
    figure
      img(src='@/assets/curso/tema5/img03.svg', style="width: 850px").m-auto
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Tipos, uso, manejo BPG
    p El uso y manejo que se da a las BPG se encuentra enfocado en obtener un producto inocuo, mejorar la seguridad y salud en el trabajo, mitigar el impacto negativo que tienen las producciones ganaderas en el medio ambiente, mejorar la rentabilidad de la producción entre otros.
    p Para lograr un exitoso uso y manejo de las BPG, es necesario establecer los protocolos para las actividades que lo requieran y realizar el adecuado manejo de los registros, labores que van a permitir tomar decisiones a tiempo y establecer las medidas correctivas necesarias para el mejoramiento de la productividad de la empresa ganadera.
    p.mb-5 #[b Ya conociendo lo anterior, es importante conocer cada uno de los componentes que se deben tener en cuenta en el uso y manejo de las BPG, veamos sus descripciones:]
    .tarjeta.tarjeta--verde.p-5.mb-5(data-aos="fade-right")
      LineaTiempoC.color-acento-contenido
        .row(titulo="Instalaciones").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Instalaciones]
            p La ganadería debe estar ubicada de acuerdo con lo establecido en el Plan de Ordenamiento Territorial (POT) del municipio donde se ejecute la producción. Cuando se habla de instalaciones, se hace referencia a las construcciones básicas como el embarcadero, brete, corral, sala de ordeño, entre otras que brinden confort a los animales, seguridad a los trabajadores y sean fáciles de limpiar.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img01.png', style="width: 250px")
        .row(titulo="Bioseguridad").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Bioseguridad]
            p Se debe proteger el predio contra el ingreso de enfermedades implementando prácticas como controlar el ingreso de personas, vehículos y animales ajenos a la producción, instalar pocetas y arcos de desinfección, establecer cercos y cerramientos de la finca, para evitar paso e ingreso de personal.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img02.png', style="width: 250px")
        .row(titulo="Plan de saneamiento").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Plan de saneamiento]
            p Es necesario elaborar e implementar un programa que contribuya a minimizar los riesgos de contaminación y transmisión de enfermedades entre personas y animales. Las prácticas a desarrollar aquí son las encaminadas a la protección de las fuentes de agua, control y disposición de residuos, y tratamientos de aguas para asegurar la calidad de la misma.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img03.png', style="width: 250px")
        .row(titulo="Manejo de insumos pecuarios y medicamentos veterinarios").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Manejo de insumos pecuarios y medicamentos veterinarios]
            p Es importante que los medicamentos veterinarios (con registro ICA) e insumos pecuarios, sean almacenados en bodegas destinadas exclusivamente para su almacenamiento. Esto quiere decir que no se podrán mezclar agroinsumos, fertilizantes o plaguicidas con medicamentos o insumos ya que estos deben almacenarse en otra bodega para evitar contaminaciones e intoxicaciones de los animales. De acuerdo a lo anterior, se recomienda mantener esta área limpia, debidamente identificada, cerrada y fuera del alcance de personal ajeno a la producción.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img04.png', style="width: 250px")
        .row(titulo="Manejo sanitario").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Manejo sanitario]
            p El Médico Veterinario deberá construir un plan de manejo sanitario que garantizará los niveles saludables en el hato. Este plan deberá tener claramente definidas las actividades, las fechas de ejecución y los responsables de desarrollar dichas tareas. Además, deberán hacerse controles periódicos durante el año con el fin de lograr identificar a tiempo algún evento desfavorable relacionado con la salud del hato.
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Pautas de manejo
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Clínica veterinaria
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Vacunaciones
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Costo
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Insumos
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Gasto Inversión
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Vacunas estratégicas
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img05.png', style="width: 250px")
        .row(titulo="Bienestar animal").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Bienestar animal]
            p Se debe garantizar a los animales condiciones adecuadas de manejo, brindando agua, alimento, sales mineralizadas, brindar tratamientos a los animales enfermos, manejarlos con tranquilidad sin gritos ni golpes, y garantizar un bienestar y confort.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img06.png', style="width: 250px")
        .row(titulo="Alimentación animal").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Alimentación animal]
            p Con el fin de controlar el riesgo de diseminación de la Encefalopatía Espongiforme Bovina (enfermedad de las vacas locas), la normatividad colombiana prohíbe el uso de alimentos o suplementos que contengan harina de carne, sangre, huesos o despojos de mamíferos como el contenido ruminal. En el mismo sentido, también está prohibido el uso de subproductos de cosecha de flores y plantas ornamentales ya que pueden generar residuos tóxicos de plaguicidas en la carne y en la leche.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img07.png', style="width: 250px")
        .row(titulo="Registro y trazabilidad").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Registro y trazabilidad]
            p Para facilitar el proceso de registro individual de información relacionada con el manejo y los parámetros productivos, es prioritario realizar la identificación individual de los animales preferiblemente utilizando métodos que produzcan el más mínimo dolor e incomodidad al animal.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img08.png', style="width: 250px")
        .row(titulo="El cuidado de los trabajadores").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b El cuidado de los trabajadores]
            p El recurso humano de la empresa ganadera, debe estar inscrito en el sistema de seguridad social y recibir un chequeo médico laboral por lo menos una vez al año y también se les debe dar capacitaciones periódicas sobre riesgos y fortalecimiento de capacitaciones laborales y llevar registros de las mismas y de las entregas de los elementos de protección personal.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img09.png', style="width: 250px")
        .row(titulo="Transporte de animales en pie").align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Transporte de animales en pie]
            p Este componente es muy importante sobre todo en las ganaderías de carne ya que, si no se tiene cuidado, toda la inversión realizada a lo largo de la crianza del animal puede verse duramente afectada solamente por un transporte inadecuado. Por lo mencionado anteriormente, siempre debe contratarse vehículos que ofrezcan las condiciones adecuadas con pisos antideslizantes, protección ante situaciones climáticas adversas y claramente que cumplan todos los requerimientos legales.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img10.png', style="width: 250px")
    .row.justify-content-center(data-aos="fade-right")
      figure
        img(src='@/assets/curso/tema5/img04.svg', style="width: 850px").m-auto(data-aos="fade-right")

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
