<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Política sanitaria y de inocuidad en alimentos
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los conceptos de sanidad e inocuidad hacen referencia, por una parte, al conjunto de servicios, tanto al personal como a las instalaciones destinados a la preservación de la salud pública, y por otro, a todos aquellos procesos que evitan que los alimentos sean de alguna forma dañinos al consumidor.
    .row.bg02.p-4(data-aos="fade-right")
      .col-12
        .row.align-items-center.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p #[span.etiqueta #[b Entonces, la sanidad ]] engloba a todas las instituciones estatales encargadas de proveer servicios que satisfagan las necesidades de:
            .row.justify-content-center
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Prevención]
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Tratamiento]
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Vigilancia]
            .row.justify-content-center
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Control]
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Diagnostico]
              .col.bg3.m-2
                p.mb-0.text-center.p-3 #[b Recuperación de personal]
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/img02.svg', style="width: 350px").m-auto
        .row.mb-5
          .col-lg-12
            p.mb-0 #[span.etiqueta #[b Mientras que la inocuidad ]] en palabras sencillas es la característica o calidad de los alimentos, que garantiza que está libre de cualquier condición que pudiera poner en riesgo la salud de quienes lo consumen.
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p En el caso específico del sector agropecuario alimentario, mediante la administración de riesgos, conservación y mejora de los estatus sanitarios, en las zonas o regiones donde se previenen y combaten plagas y enfermedades que afectan la agricultura, ganadería, acuicultura y pesca, se establecen mecanismos de inspección vigilancia y control que eviten la propagación o bien la erradicación según sea el caso.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/img04.svg', style="width: 200px").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Normatividad
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-0 Respecto de este campo, Colombia suscribió su ingreso a la Organización Mundial del Comercio (OMC) e incorporó a su ordenamiento jurídico los acuerdos multilaterales de la OMC en 1994, entre estos el Acuerdo Sobre Medidas Sanitarias y Fitosanitarias (AMSF). Este acuerdo marcó un hito y constituyó el fundamento para las diversas políticas sanitarias del país. Es así como se crean los CONPES y las derivaciones de leyes y decretos que rigen los sistemas regulatorios y de Inspección, Vigilancia y Control (IVC), en la materia. Siendo así, el siguiente recurso, muestra las leyes y decretos que rige el CONPES:
      .col-lg-5
        figure.d-flex.justify-content-end(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img2.png', style="width: 350px")
    h3.text-center.mb-5 Leyes y decretos que rige el CONPES 
    .tarjeta.tarjeta--amarilla2.p-4
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-4
            h4 CONPES 3375 de 2005.
            p Política Nacional de Sanidad Agropecuaria e Inocuidad de Alimentos para el Sistema de Medidas Sanitarias y Fitosanitarias- MSF. Que es la introducción del enfoque sistémico con el objeto de articular las entidades con competencias y funciones en materia sanitaria y fitosanitaria.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img06.svg', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4
            h4 CONPES 3376 de 2005. 
            p Política Sanitaria y de Inocuidad de las Cadenas de la Carne Bovina y la Leche. Encaminada a mejorar las condiciones de sanidad e inocuidad de las cadenas de la carne bovina y la leche, con el fin de proteger la salud y la vida de las personas, los animales, y preservar la calidad del medio ambiente; mejorar la competitividad de estas cadenas y obtener la admisibilidad de sus productos en los mercados internacionales.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img07.svg', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4
            h4 CONPES 3676 de 2010. 
            p Consolidación de la política sanitaria y de inocuidad para las cadenas láctea y cárnica.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img08.svg', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4
            h4 Decreto 616 de 2006.
            p Reglamento Técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercialice, expenda, importe o exporte en el país.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img09.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4
            h4 Resolución 068167 de 2020. 
            p Política Sanitaria y de Inocuidad de las Cadenas de la Carne Bovina y la Leche. Encaminada a mejorar las condiciones de sanidad e inocuidad de las cadenas de la carne bovina y la leche, con el fin de proteger la salud y la vida de las personas, los animales, y preservar la calidad del medio ambiente; mejorar la competitividad de estas cadenas y obtener la admisibilidad de sus productos en los mercados internacionales.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width: 650px").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Implicaciones e Importancia
    .row(data-aos="fade-left")
      .col-lg-12.mb-5
        p #[span.etiqueta #[b De acuerdo con los organismos de referencia a nivel mundial se considera que la leche, la carne y sus derivados ]] pertenecen al grupo de alimentos de mayor riesgo en salud pública, ya que sus características de composición favorecen la proliferación microbiana y por consiguiente, cualquier deficiencia en sus condiciones de producción, procesamiento, manipulación, conservación, transporte y comercialización puede ocasionar trastornos a la salud del consumidor. La susceptibilidad de estos alimentos para ocasionar enfermedades transmitidas por alimentos que no solo afecta significativamente la salud y bienestar de la población, sino que tiene consecuencias económicas para las personas, familias, comunidades, negocios y en general para los países, ya que imponen cargas en los sistemas de salud.
    .row.align-items-center.bg1.mb-5(data-aos="fade-up")
      .col-lg-8
        .row.align-items-center.p-4.p-lg-0
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img12.svg', style="width: 110px") 
          .col
            p.mb-0 Uno de los eslabones más importantes es el primario; es decir, las unidades productivas de ganado de diversos tipos. Es por eso, que las políticas del gobierno establecen a través de los diferentes CONPES, decretos y otras normas sobre programas y planes dirigidos a este eslabón, los cuales al pasar el tiempo se reúnen en el programa de Buenas Prácticas Ganaderas BPG que veremos a continuación:
      .col-lg-4.px-0
        figure.d-flex.justify-content-end
          img(src='@/assets/curso/tema2/img11.png', style="width: 350px")
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
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
