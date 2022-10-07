<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Excretas y purines 

    p(data-aos="fade-up") Las excretas #[strong son el resultado del proceso digestivo de los seres vivos en los que se desecha el material que no es apto para su digestión,] en donde existe una gran carga orgánica que contiene microorganismos dañinos que pueden causar enfermedades. 

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Por su parte, #[strong los purines son la mezcla producida por las heces y orines de los animales con los restos de comida y agua, que son fuente de abono orgánico] para la fertilización de terrenos para el cultivo.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Manejo

    p(data-aos="fade-up") #[strong Para el manejo de las excretas y los purines es vital la infraestructura que se tenga para su recolección,] ya que en los sistemas de producción a espacio abierto es más difícil, comparado con los sistemas bajo techo que poseen una menor área de ejecución.

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="fade-right")
      .col-md-6
        p(data-aos="fade-up") #[strong En el caso concreto del ganado cuando su permanencia es solo en potreros las heces de estos van directamente al suelo,] aportando nutrientes para el crecimiento del forraje. Caso diferente en los hatos lecheros donde la infraestructura del suelo rígido facilita la recolección por medio de canales de los orines que contienen urea y de las excretas de manera manual o mecánica.
        .p-5.mt-4(style="background-color:#E6E8C4;")
          p(data-aos="fade-up") Lo mismo ocurre en la avicultura, gracias a los pisos de los galpones que generalmente se construyen de manera que las heces caigan a una plataforma movible para su recolección.

    p.mt-5(data-aos="fade-up") En la porcicultura es necesario que las cocheras se construyan con un piso en concreto, con un desnivel hacia el canal de salida, en el cual se dispondrá un recipiente para la recolección. 

    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Almacenamiento

    p(data-aos="fade-up") Para el almacenamiento de #[strong los residuos provenientes de los animales es necesario la construcción de un sitio para el compostaje, el cual debe estar alejado de la vivienda, con buena ventilación y cubierto.] En este lugar se dispondrá lo recolectado de la unidad de producción y se adelantará el proceso de transformación elegido por el finquero para la producción de abono orgánico.

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Es importante señalar que el mal acondicionamiento del sitio de almacenamiento puede ocasionar la propagación de vectores y roedores, por esta razón es importante documentarse antes de realizar la instalación. 

    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3 Aprovechamiento

    p(data-aos="fade-up") En Colombia el sacrificio de ganado para el tercer trimestre del año 2018 alcanzó un total de 496.445 toneladas con un rendimiento carnal para el ganado vacuno de 52,4% y para el porcino 79,7%. En el sector avícola el rendimiento oscila entre el 71% y 73%. #[strong La mayoría de los residuos de la industria pecuaria son considerados subproductos y se utilizan como aditivos o materias primas en alimentos o piensos para animales (Gómez, 2019).]

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.col-md-10.m-auto.mt-5(style="background-color:#E4CDD3")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[strong En los sistemas pecuarios también existen otro tipo de residuos que son producidos durante el proceso de desarrollo de los animales] (heces, orín, plumas, desperdicio de alimentos, entre otros) que son aptos para un proceso de aprovechamiento.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_4 1.4 Normativa

    p(data-aos="fade-up") El marco normativo vigente que regula la gestión de los residuos orgánicos a nivel nacional es el siguiente:

    .row.mt-5
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema1/5.png' style="max-width:100px;")
          .tarjeta.color-primario(style="background-color:#E4CDD3")
            .p-4
              p(data-aos="fade-up") #[strong Norma:] Conpes 3874 de 2016 República de Colombia 21 de noviembre de 2016.
              p.mt-4(data-aos="fade-up") #[strong Concepto:] política nacional para la gestión integral de residuos sólidos.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema1/5.png' style="max-width:100px;")
          .tarjeta.color-primario(style="background-color:#E4CDD3")
            .p-4
              p(data-aos="fade-up") #[strong Norma:] Resolución 0316 de 2018 emitida por el Ministerio de Ambiente y Desarrollo Sostenible 1 de marzo de 2018.
              p.mt-4(data-aos="fade-up") #[strong Concepto:] por la cual se establecen disposiciones relacionadas con la gestión de aceites de cocina usados y se dictan otras disposiciones.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema1/5.png' style="max-width:100px;")
          .tarjeta.color-primario(style="background-color:#E4CDD3")
            .p-4
              p(data-aos="fade-up") #[strong Norma:] Resolución No. 1096 de 2000 emitida por el Ministerio de Desarrollo Económico 17 de noviembre de 2000.
              p.mt-4(data-aos="fade-up") #[strong Concepto:] por la cual se adopta el Reglamento técnico para el sector de agua potable y saneamiento básico RAS.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema1/5.png' style="max-width:100px;")
          .tarjeta.color-primario(style="background-color:#E4CDD3")
            .p-4
              p(data-aos="fade-up") #[strong Norma:] Norma Técnica Colombiana NTC5167 de 2011 por Icontec. 
              p.mt-4(data-aos="fade-up") #[strong Concepto:] productos para la industria agrícola. Productos orgánicos usados como abonos o fertilizantes y enmiendas o acondicionadores del suelo.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
