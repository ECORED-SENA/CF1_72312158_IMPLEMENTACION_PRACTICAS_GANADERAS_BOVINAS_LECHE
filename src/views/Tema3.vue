<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Ganaderas en la producción de bovinos de leche - BPG
    .row.bg01.align-items-center(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-0 Las buenas prácticas ganaderas son todas aquellas acciones que se realizan en el primer eslabón de la cadena lechera bovina, dirigidas a que se asegure la inocuidad, calidad y trazabilidad de la leche, así como que se proteja el medio ambiente y el personal involucrado en la producción de la misma. Este tipo de prácticas se sugiere con el objeto de que en la producción se puedan disminuir los riesgos biológicos, físicos y químicos en la producción primaria de los alimentos de origen animal, que puedan ocasionar riesgos a los consumidores promoviendo la sanidad, bienestar animal y protección del medio ambiente.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img01.png', style="width: 450px").m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Componentes BPG
    p.mb-5 Los componentes que integran las buenas prácticas están divididos en temáticas de gran importancia que abordan otros subtemas, los cuales se desarrollan a través de los requerimientos para la implementación del programa. #[b Por consiguiente, a continuación, se nombran los componentes para las BPG:]
    TabsB.color-acento-contenido(data-aos="fade-right")
      .py-4.py-md-5(titulo="Requisitos sanitarios: sanidad animal y bioseguridad")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Requisitos sanitarios: sanidad animal y bioseguridad]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Vacunación y enfermedades de control oficial.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Actividades de prevención y control de enfermedades.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Delimitación de predio.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Registro de ingresos y salidas.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Manejo de mortalidad.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Identificación de los animales.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img02.png', style="width: 250px")
      .py-4.py-md-5(titulo="Plan de saneamiento")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Plan de Saneamiento]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Acceso a fuentes de contaminación.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Clasificación de residuos y basuras.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Disposición de envases de los insumos agropecuarios.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Fuentes de agua y tanques de almacenamiento.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img03.png', style="width: 250px")
      .py-4.py-md-5(titulo="Buenas prácticas de uso de medicamentos veterinarios y alimentación animal")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Buenas prácticas de uso de medicamentos veterinarios y alimentación animal]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Inspección de insumos veterinarios.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | No utilizar sustancias prohibidas.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | No se emplean medicamentos vencidos.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Formulación de medicamentos veterinarios.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Medicamentos veterinarios de control especial.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Instalaciones y áreas de almacenamiento de insumos.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Uso de medicamentos y biológicos de acuerdo al rotulado.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Registro oficial de tratamientos veterinarios.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Respeto del tiempo de retiro y periodo de carencia.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Uso de promotores de crecimiento con registro ICA.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Prohibiciones en la alimentación animal.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Disposición temporal de agujas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img04.png', style="width: 250px")
      .py-4.py-md-5(titulo="Bienestar animal y personal")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p #[b Bienestar animal y personal]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Evitar el maltrato y el dolor en los animales.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Agua de bebida a voluntad y alimentos en condiciones higiénicas.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Bebederos limpios y en buen estado.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                | Personal vinculado entrenado de acuerdo a sus funciones.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img05.png', style="width: 250px")
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Criterios de cumplimiento y listas de chequeo
    .row.bg03.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/tema3/img06.png', style="width: 450px").m-auto
      .col-lg-7.p-5
        p.mb-0 Los criterios de cumplimientos se encuentran dados a partir de los componentes que hacen parte integral de las Buenas Prácticas Ganaderas y principalmente se utilizan en las listas de chequeo como herramienta para hacer el diagnóstico, evaluación y monitoreo de la aplicación de las buenas prácticas en las unidades productivas, estas listas se encuentran diseñadas y especificadas por especie y producción discriminando y detallando aspectos de la labor especializada. Este material es desarrollado por el ente regulador, quien tiene la función y obligación de verificar el cumplimiento a cabalidad de la implementación de las BPG, en Colombia este ente es el Instituto Colombiano Agropecuario - ICA.
    .row.justify-content-center
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3/img02.svg", style="width: 90px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Lista de chequeo de predios productores de leche
                  p.text-small A continuación se muestra la Forma 3-852 V. 6. La cual es la lista de chequeo para la producción ganadera en Bovinos tipo leche. 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Aplicación BPG
    p.mb-5 Para hacer la aplicación de las Buenas Prácticas Ganaderas en la producción es necesario intervenir diferentes aspectos como la infraestructura, los procesos, los procedimientos, planes, registros, documentos, el manejo, entre otros; estas intervenciones no requieren de muchos costos extras sino más bien de tiempo y disposición de los productores y el personal involucrado para que los cambios hagan efecto. #[b Por otra parte, para las unidades productivas la aplicación de las BPG conlleva a que se tengan múltiples beneficios, entre los que se destacan:]
    .img-position1
      img(src='@/assets/curso/tema3/img03.svg', style="width: 1600px")(data-aos="fade-right")
      

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
