<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Ganaderas en la producción de bovinos de leche - BPG
    .row.bg01.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-7
        p.mt-5.mb-5 Las buenas prácticas ganaderas son todas aquellas acciones que se realizan en el primer eslabón de la cadena lechera bovina, dirigidas a que se asegure la inocuidad, calidad y trazabilidad de la leche, así como que se proteja el medio ambiente y el personal involucrado en la producción de la misma. Este tipo de prácticas se sugiere con el objeto de que en la producción se puedan disminuir los riesgos biológicos, físicos y químicos en la producción primaria de los alimentos de origen animal, que puedan ocasionar riesgos a los consumidores promoviendo la sanidad, bienestar animal y protección del medio ambiente.
      .col-lg-4.mb-3.ps-5
         img(src='@/assets/curso/tema3/img01.png', style="width: 350px").m-auto(data-aos="fade-right") 
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
