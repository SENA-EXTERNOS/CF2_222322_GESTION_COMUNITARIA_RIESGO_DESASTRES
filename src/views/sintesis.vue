<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.color-adicional-1.mb-5
          h5 Gestión comunitaria del riesgo de desastres.
          br
          | Síntesis:  Diagnóstico para la gestión del riesgo de desastres.
      .col-lg-2
        img.img-a(src="@/assets/curso/temas/img_sin.png", alt="alt")

    p.mb-5 A continuación, se presenta un mapa mental en donde podrá encontrar los contenidos trabajados en el componente formativo de manera gráfica. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
