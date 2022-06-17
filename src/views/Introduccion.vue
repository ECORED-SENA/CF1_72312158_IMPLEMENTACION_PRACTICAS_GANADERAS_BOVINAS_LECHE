<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right").mb-5 La implementación de las buenas prácticas ganaderas es uno de los factores que garantiza en la producción primaria la trazabilidad, calidad e inocuidad en los productos de origen animal y sus derivados. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo. 
      span.etiqueta #[strong Para comenzar, se invita a explorar el video que se presenta a continuación:]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0Y-9knRteKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
