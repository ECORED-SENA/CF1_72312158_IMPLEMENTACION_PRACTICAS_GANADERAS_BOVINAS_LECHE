<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diagnóstico de aplicación de buenas prácticas ganaderas en el predio
    .row.bg01.align-items-center.mb-5
      .col-lg-7.p-5
        p.mb-0 La implementación de las Buenas Prácticas Ganaderas, parte del interés que tenga el productor en tener una empresa sostenible, con un aumento de su productividad, amigable con el medio ambiente, que preserve la integridad física y emocional de sus trabajadores, una producción que brinde un trato digno a sus animales, que en la comunidad genere impacte positivamente, y por supuesto, que su producto final (carne y/o leche) sea inocuo y de buena calidad y de esta manera tengan gran aceptación en el mercado, asegurando el proceso de comercialización y la rentabilidad de la empresa ganadera.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img01.svg', style="width: 450px").m-auto
    p.mb-5 Para la realización del diagnóstico de aplicación de las BPG en el predio se deben tener en cuenta algunos aspectos importantes que van a permitir obtener una “fotografía” de las condiciones reales de la producción como por ejemplo mostrar el manejo que se les da a los animales, las condiciones en que los trabajadores desarrollan sus labores y los riesgos a los que están expuestos. #[b A continuación, es necesario revisar la normatividad vigente de las BPG, establecida por el Instituto Colombiano Agropecuario ICA y finalmente aplicar la lista de chequeo de “predios productores de leche con destino al consumo humano:]
    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")  
      .row.align-items-center
        .col-auto
          img(src='@/assets/curso/tema6/img02.svg', style="width: 100px") 
        .col
          p.mb-0 La selección de la lista dependerá de los productos que se generen en la finca ganadera, ya sea carne o leche. Esta lista de chequeo se aplica con el fin de encontrar carencias ante la normatividad e iniciar un plan que permita completar los aspectos faltantes para poder obtener la certificación.
    p.mb-5 #[b Se sugiere revisar las siguientes listas de chequeo para una mayor comprensión:]
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.color-primario.p-3.h-100
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Lista de chequeo
                  p.text-small Para predios productores de leche con destino al consumo humano - Forma 3-852 V. 5
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-852-lista-de-chequeo-de-predios-productore.aspx" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
      .col-lg-6
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Lista de chequeo
                  p.text-small Para predios productores de carne de bovinos y/o bufalinos con destino al consumo humano - Forma 3-138 V. 4
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-138-lista-de-chequeo-predios-productores-d.aspx" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img03.svg', style="width: 650px").m-auto
      .col-lg-6
        p.mb-0 Una vez aplicada la lista de chequeo, se van a contabilizar los aspectos fundamentales (F), los mayores (My) y los menores (Mn) para determinar los porcentajes de incumplimiento y fijar un plan de trabajo que permita sobre todo, llevar los aspectos menores y fundamentales al 100% y los Mayores cerca del 100%, lo que será suficiente para obtener la certificación del predio en BPG y permitirá obtener beneficios en la empresa tanto en el nivel interno como externo, lo que le permitirá obtener una ventaja competitiva en temas de producto, mercado, medio ambiente, bienestar animal, disminución de riesgos laborales, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
