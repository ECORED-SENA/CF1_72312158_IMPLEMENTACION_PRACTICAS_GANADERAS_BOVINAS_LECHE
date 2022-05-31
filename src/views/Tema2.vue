<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Política sanitaria y de inocuidad en alimentos
    .row.mb-5.justify-content-center.align-items-center
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los conceptos de sanidad e inocuidad hacen referencia, por una parte, al conjunto de servicios, tanto al personal como a las instalaciones destinados a la preservación de la salud pública, y por otro, a todos aquellos procesos que evitan que los alimentos sean de alguna forma dañinos al consumidor. 
    
    .row.align-items-center(data-aos="fade-right")  
      .col-md-12.bg2
        .row.py-5.px-4
          .col-lg-8.p-3
            span.etiqueta #[b Entonces, la sanidad] 
            span engloba a todas las instituciones estatales encargadas de proveer servicios 
            p que satisfagan las necesidades de:
            .row
              .col-lg-3.p-4.mb-3.me-5.bg3
                h5.mb-0.text-center Prevención
              .col-lg-3.p-4.mb-3.me-5.bg3
                h5.mb-0.text-center Tratamiento
              .col-lg-3.p-4.mb-3.me-5.bg3
                h5.mb-0.text-center Vigilancia
            .row
              .col-lg-3.p-4.mb-3.me-5.bg3
                h5.mb-0.text-center Control
              .col-lg-3.p-4.mb-3.me-5.bg3
                h5.mb-0.text-center Diagnostico
              .col-lg-3.p-3.mb-3.me-5.bg3
                h5.mb-0.text-center Recuperación de <br> personal
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/img02.png', style="width: 350px").m-auto(data-aos="fade-right") 
          .col-lg-12.mb-0
            span.etiqueta #[b Mientras que la inocuidad ] 
            span en palabras sencillas es la característica o calidad de los alimentos, que garantiza que está libre de cualquier condición que pudiera poner en riesgo la salud de quienes lo consumen.
        .row.mb-5
          .col-lg-8.p-5
            p En el caso específico del sector agropecuario alimentario, mediante la administración de riesgos, conservación y mejora de los estatus sanitarios, en las zonas o regiones donde se previenen y combaten plagas y enfermedades que afectan la agricultura, ganadería, acuicultura y pesca, se establecen mecanismos de inspección vigilancia y control que eviten la propagación o bien la erradicación según sea el caso.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/img04.png', style="width: 350px").m-auto(data-aos="fade-right") 
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Normatividad

    .row.align-items-center.mb-5
      .col-lg-7
        p.p-0 Respecto de este campo, Colombia suscribió su ingreso a la Organización Mundial del Comercio (OMC) e incorporó a su ordenamiento jurídico los acuerdos multilaterales de la OMC en 1994, entre estos el Acuerdo Sobre Medidas Sanitarias y Fitosanitarias (AMSF). Este acuerdo marcó un hito y constituyó el fundamento para las diversas políticas sanitarias del país. Es así como se crean los CONPES y las derivaciones de leyes y decretos que rigen los sistemas regulatorios y de Inspección, Vigilancia y Control (IVC), en la materia. Siendo así, el siguiente recurso, muestra las leyes y decretos que rige el CONPES:
      .col-md-3
        figure
          img.ms-5(src='@/assets/curso/tema2/img05.svg', style="width: 530px").m-auto

    h3.text-center Leyes y decretos que rige el CONPES 







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
