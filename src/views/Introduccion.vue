<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="zoom-in-down") Bienvenido al componente formativo “Diagnóstico para la gestión del riesgo de desastres” en el cual se describirán los contenidos a trabajar en el desarrollo del resultado de aprendizaje denominado elaborar diagnóstico con metodologías participativas, en el marco de la competencia diagnosticar riesgo de desastres de acuerdo con metodologías y normativa. En este componente se abordará el diagnóstico de la gestión del riesgo de desastres, así como la recolección y análisis de información primaria y secundaria. Lo invitamos a iniciar este recorrido observando el video de introducción del componente formativo.

    
    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
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
