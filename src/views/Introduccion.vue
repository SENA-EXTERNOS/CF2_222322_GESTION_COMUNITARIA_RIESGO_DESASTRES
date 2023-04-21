<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-derecha
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/c1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se describirán contenidos para elaborar diagnósticos con metodologías participativas y, en el marco de la competencia, determinar el riesgo de desastres, de acuerdo con metodologías y normativas. Se abordarán temas sobre el diagnóstico para la gestión del riesgo de desastres, así como también técnicas para el manejo de instrumentos para recolectar información.

    p.mb-5(data-aos='fade-right') En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
    
    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bAYEyhYrrGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
