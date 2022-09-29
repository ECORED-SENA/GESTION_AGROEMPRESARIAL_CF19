<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Envases, empaque y embalajes

    p(data-aos="fade-up") En Colombia la Resolución 1675 de 2013 emitida por el Ministerio de Ambiente y Desarrollo Sostenible #[strong regula el manejo de los recipientes utilizados en la cadena de producción, venta y postventa de plaguicidas,] en la cual se regula las actividades para la formulación de un plan de gestión de estos productos, garantizando su posconsumo.

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in-up")

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Manejo

    .row
      .col-md-6.mb-4.mb-md-0
        .p-5.d-flex.align-items-center(style="background-color:#E1CED3;height:100%;")
          p(data-aos="fade-up") #[strong Los planes de manejo de envases, empaques y embalajes son el punto de partida para la implementación de acciones que permitan proteger al medio ambiente] y minimizar los riesgos de contaminación e intoxicación de los operarios encargados de su manipulación, con el objetivo de sean aprovechados y devueltos a un gestor que se encargue de devolverlos a la cadena productiva.
      .col-md-6
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Los productores de dichos elementos tienen la responsabilidad de participar en las actividades de postconsumo para garantizar así la cadena comercial. 

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2. Medios de devolución postconsumo 

    p(data-aos="fade-up") Para realizar la devolución de estos elementos se debe tener en cuenta el contenido de los envases, ya que según su contenido se clasifican en dos grandes grupos:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0.p-0
        figure.indicador__container.cont_desc_image__principal(style="position:relative;overflow:hidden;" @mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-up")
          .p-4.text-center.cont_desc_image.d-flex.justify-content-center.align-items-start(style="background-color:#DFDFDF;")
            h4 Envases de uso industrial:
            p.mt-4(style="display:none;") Los cuales deben ser reunidos ya sean cajas, frascos plásticos o de vidrio, pastillas cartuchos, contenedores metálicos, bombas manuales o mecánicas en bolsas industriales resistentes a cualquier tipo de fuga. Estos elementos no deben ser destruidos sobre todo los que son metálicos presurizados, para estos elementos se deben destruir sus etiquetas para evitar cualquier tipo de falsificación. La entrega de estos elementos debe realizarse en sitio debidamente autorizados que garanticen su manejo integral.
      .col-lg-6.p-0
        figure.cont_desc_image__principal(style="position:relative;overflow:hidden;")
          img(src="@/assets/curso/tema2/4.png" data-aos="zoom-in-up")
          .p-4.text-center.cont_desc_image.d-flex.justify-content-center.align-items-start(style="background-color:#CED371;")
            h4 Envases de uso agrícola y veterinario:
            p.mt-4(style="display:none;") Estos envases se les debe realizar el triple lavado antes de realizar cualquier tipo de recolección y al igual que los anteriores se deben destruir sus etiquetas antes del almacenamiento. Se debe revisar que en su interior no quede ningún tipo de sustancia antes de realizar la entrega en los sitios de manejo de estos recipientes.

    p.mt-5(data-aos="fade-up") #[strong El triplelavado debe realizarse por personal capacitado para la actividad,] ya que la mala manipulación de estos elementos puede ser nociva para la salud y un riesgo de contaminación para las fuentes hídricas cercanas y el suelo.  #[strong Lo primero que se debe tener en cuenta es el uso de los EPP, posterior a esto se debe realizar un enjuague al interior de los recipientes agregando hasta ¼ de agua de acuerdo con su capacidad, agitando y vertiendo el contenido en la bomba de fumigación, permitiendo que escurra por un tiempo no menor a 30 segundos] (en ningún caso el contenido del lavado debe ser vertido en otro sitio), este proceso se debe realizar tres veces.

    .row.mt-5.col-md-10.m-auto
      .col-md-6.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/5.png" data-aos="fade-right")
      .col-md-6
        .p-5.d-flex.align-items-center(style="background-color:#E1CED3;height:100%;")
          p(data-aos="fade-up") #[strong Posterior al triplelavado estos recipientes deben ser trasladados a un sitio de almacenamiento temporal, en el cual se almacenan de acuerdo con la clasificación] para la posterior entrega en los sitios autorizados para el manejo integral. Existen empresas calificadas para esa actividad que pueden realizar recolección in situ, que deben tener autorización por parte de la autoridad ambiental.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3. Interpretación fichas técnicas

    p(data-aos="fade-up") #[strong Las fichas técnicas de los plaguicidas contienen toda la información necesaria acerca del contenido,] desde la información general hasta las recomendaciones de uso, manejo y disposición final. #[strong Es sumamente necesario leer esta información antes de realizar cualquier actividad con este contenido, y ante cualquier inquietud consultar con personal capacitado y/o comunicarse con el distribuidor de confianza,] para ver un ejemplo de una ficha técnica se solicita al aprendiz ver el documento Ejemplo cridor, ficha técnica de un plaguicida, ubicado en la sección del material complementario.

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema2/6.png" data-aos="zoom-in-up")

    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4 Normativa

    p(data-aos="fade-up") La normatividad vigente para el manejo de los envases, empaques y embalajes es la siguiente:

    SlyderF.mt-5(columnas="col-lg-4 col-xl-4")
      .tarjeta-avatar(style="padding-top:45px;")
        img(src='@/assets/curso/tema2/7.png' style="max-width:100px;")
        .tarjeta.color-acento-botones.p-4(style="background-color:#F3F4DB;min-height:450px;")
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Norma:] resolución  0683 de 2012 del Ministerio de Salud y Protección Social del 28 de marzo de 2012.
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Concepto:] por medio de la cual se expide el Reglamento técnico sobre los requisitos sanitarios que deben cumplir los materiales, objetos, envases y equipamientos destinados a entrar en contacto con alimentos y bebidas para consumo humano.
      .tarjeta-avatar(style="padding-top:45px;")
        img(src='@/assets/curso/tema2/7.png' style="max-width:100px;")
        .tarjeta.color-acento-botones.p-4(style="background-color:#F3F4DB;min-height:450px;")
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Norma:] resolución 4143 de 2012 del Ministerio de Salud y Protección Social del 07 de diciembre de 2012.
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Concepto:] por el cual se establece el reglamento técnico sobre los requisitos sanitarios que deben cumplir los materiales, objetos, envases y equipamientos plásticos y elastometricos y sus aditivos, destinados a entrar en contacto con alimentos y bebidas para consumo humano en el territorio nacional.
      .tarjeta-avatar(style="padding-top:45px;")
        img(src='@/assets/curso/tema2/7.png' style="max-width:100px;")
        .tarjeta.color-acento-botones.p-4(style="background-color:#F3F4DB;min-height:450px;")
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Norma:] resolución 1407 de 2019 del Ministerio de Ambiente y Desarrollo Sostenible del 26 de julio de 2018.
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Concepto:] por la cual se reglamenta la gestión ambiental de los residuos de envases y empaques de papel, cartón, plástico, vidrio, metal y se toman otras determinaciones.
      .tarjeta-avatar(style="padding-top:45px;")
        img(src='@/assets/curso/tema2/7.png' style="max-width:100px;")
        .tarjeta.color-acento-botones.p-4(style="background-color:#F3F4DB;min-height:450px;")
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Norma:] resolución 1342 de 2020 del Ministerio de Ambiente y Desarrollo Sostenible del 24 de diciembre de 2020.
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Concepto:] por la cual se modifica la Resolución 1407 de 2018 y se toman otras disposiciones.
      .tarjeta-avatar(style="padding-top:45px;")
        img(src='@/assets/curso/tema2/7.png' style="max-width:100px;")
        .tarjeta.color-acento-botones.p-4(style="background-color:#F3F4DB;min-height:450px;")
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Norma:] resolución 1675 de 2013 del Ministerio de Ambiente y Desarrollo Sostenible del 2 de diciembre de 2013.
          p.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Concepto:] por la cual se establecen los elementos de los Planes de gestión de devolución de productos postconsumo de plaguicidas.





</template>

<script>
export default {
  name: 'Tema2',
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
<style lang="sass">
.cont_desc_image
  position: absolute
  width: 100%
  height: 100%
  top: 0
  transform: translateY(84%)
  transition: all .7s ease-out
.cont_desc_image__principal:hover p
  display: block !important
.cont_desc_image__principal:hover .cont_desc_image
  transform: translateY(0%)
  flex-flow: column !important
  align-items: center !important
  display: flex !important
  justify-content: center !important
@media only screen and (max-width: 720px)
  .cont_desc_image__principal:hover
    min-height: 515px
  .cont_desc_image
    padding-top: .2rem !important
  .cont_desc_image__principal:hover .cont_desc_image
    padding-top: 1.5rem !important
</style>
