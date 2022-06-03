<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Gestión ambiental y de calidad
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La gestión ambiental es una serie de procesos combinados encaminados a solucionar, prevenir y mitigar la problemática de los temas ambientales en las unidades productivas, con el objeto de tener un desarrollo sostenible, teniendo en cuenta que este le permite al ser humano desenvolverse en sus posibilidades y su patrimonio, social, biológico, físico y cultural, para garantizar su permanencia en el espacio tiempo.
        p.mb-0 Un programa de Gestión Ambiental pretende encontrar respuestas adecuadas a los problemas suscitados en la relación entre la sociedad y la naturaleza. Para ello, emprende acciones tendientes a generar y rescatar conocimientos; monitorear las incidencias de las políticas públicas sobre la población (especialmente, hombres y mujeres pobres del área rural) y los recursos del territorio; y sistematizar las experiencias para la construcción del modelo de desarrollo alternativo a qué aspira la sociedad.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema8/img01.svg', style="width: 450px").m-auto
    .row.mb-5(data-aos="fade-right")
      .col-12
        .dual-txt-deco
          p.py-4(style="position: relative; z-index: 1;") En la práctica las BPG contribuyen en la minimización del impacto ambiental, cambio de hábitos y conductas de los productores y el personal, manejo de residuos sólidos, manejo de afluentes, protección y conservación de fuentes hídricas y mejora en el bienestar animal. Le invitamos a ver el siguiente recurso para conocer características que nos permitirán tener una buena gestión ambiental y de calidad:
    .row.justify-content-center
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
