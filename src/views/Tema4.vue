<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Registros

    p(data-aos="fade-up") El registro de generadores de residuos o desechos peligrosos es una herramienta de captura de información, establecida por el Ministerio de Ambiente, Vivienda y Desarrollo, para la prevención y manejo de los mismos (residuos y desechos peligrosos) generados en el marco de la gestión integral. Esta herramienta contribuye, además, al mejoramiento del conocimiento de las problemáticas asociadas a este tipo de residuos, a la planificación de su gestión y al establecimiento de prioridades para la definición de acciones que aporten a la solución.

    figure.col-md-10.m-auto
      img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Para los finqueros y pequeños productores, es primordial llevar un registro de la cantidad de residuos peligrosos que se generan en las actividades pecuarias y formular formatos que contengan la información básica del control que se realiza en su manejo y posterior entrega al gestor.

    .row.mt-5.col-md-10.m-auto
      .col-lg-6.mb-4.mb-lg-0
        figure.indicador__container.cont_desc_image__principal1(style="position:relative;overflow:hidden;" @mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up")
          .p-4.text-center.cont_desc_image1.d-flex.justify-content-center.align-items-start(style="background-color:#A3314F;")
            h4.text-white ¿Qué dice la norma?
            p.mt-4.text-white(style="display:none;") Mediante la Resolución 1362 del 2 de agosto de 2007, el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) estableció los requisitos y procedimientos para el Registro de Generadores de Residuos o Desechos Peligrosos a que hacen referencia los artículos 27 y 28 del Decreto 4741 de 2005. (IDEAM).
      .col-lg-6
        figure.cont_desc_image__principal1(style="position:relative;overflow:hidden;")
          img(src="@/assets/curso/tema4/3.png" data-aos="zoom-in-up")
          .p-4.text-center.cont_desc_image1.d-flex.justify-content-center.align-items-start(style="background-color:#CED371;")
            h4 RESPEL
            p.mt-4(style="display:none;") Registro de generadores de residuos o desechos peligrosos: #[br] #[br] Será presentado por las organizaciones o entes generadores de medianas o grandes cantidades de residuos peligrosos ante la autoridad ambiental, en el marco del cumplimiento de la legislación colombiana y para llevar un control detallado sobre los alcances de las políticas públicas en materia de manejo de los RESPEL.

    Separador.mt-5

    .cont_fondo1.mt-5.pb-5(style="position:relative;")
      .titulo-segundo.pt-3(style="position:relative")
        h2#t_4_1 4.1 Formatos y su diligenciamiento

      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.col-md-10.m-auto.mt-5(style="background-color:#CED371")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/4.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Se debe establecer un #[strong formato para el registro de los RESPEL, el cual debe tener la cronología de los plaguicidas desde su adquisición hasta su entrega,] el tipo de sustancia, su uso, el personal responsable de su manipulación, lavado, almacenamiento y entrega final en los sitios autorizados.

      p.mt-5(data-aos="fade-up" style="position:relative") En relación con los formatos y su respectivo diligenciamiento, tenga presentes los siguientes aspectos clave:

      .row.col-md-10.mt-5.m-auto(style="position:relative")
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          LineaTiempoD.color-secundario
            .row.mt-3(numero="1" titulo="Responsables")
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema4/7.png")
              .col-lg-8(style="place-self:center")
                p El diligenciamiento será responsabilidad del personal encargado de su manipulación, con la supervisión del almacenista o administrador de la finca, con el fin de definir responsabilidades.
            .row.mt-3(numero="2" titulo="Autonomía de la empresa")
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema4/8.png")
              .col-lg-8(style="place-self:center")
                p No existe un formato único para el control de registro RESPEL, por tal razón, los formatos serán formulados por el finquero y deben contener la información básica necesaria.
            .row.mt-3(numero="3" titulo="Categorías y plazos")
              .col-lg-12(style="place-self:center")
                p El diligenciamiento del Registro de Generadores de Residuos o Desechos Peligrosos debe realizarse teniendo en cuenta las categorías y plazos establecidos por la normativa: Artículo 28, Decreto 4741 del 30 de diciembre de 2005.
              .row.mt-4.p-2.mb-4.col-md-11.m-auto(style="background-color:#CED371;border-radius:20px;")
                .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
                  p.mb-0 Categorías y plazos
                .col-lg-4(style="place-self:center")
                  a.boton.color-acento-contenido(:href="obtenerLink('downloads/categorias_y_plazos.pdf')" target="_blank" type="application/pdf" style="background-color:#FFCD0D;")
                    span(style="color:#471E89;") Ver imagen
                    i.fas.fa-file(style="color:#471E89;")
            .row.mt-3(numero="4" titulo="Solicitud de inscripción")
              .col-lg-12(style="place-self:center")
                p La autoridad ambiental frente a la cual se adelante el proceso de inscripción en el registro de generadores de residuos o desechos peligrosos tiene un plazo máximo de quince días hábiles para responder la solicitud.
              .row.mt-4.p-2.mb-4.col-md-11.m-auto(style="background-color:#CED371;border-radius:20px;")
                .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
                  p.mb-0 Solicitud de inscripción
                .col-lg-4(style="place-self:center")
                  a.boton.color-acento-contenido(:href="obtenerLink('downloads/solicitud_de_inscripcion.pdf')" target="_blank" type="application/pdf" style="background-color:#FFCD0D;")
                    span(style="color:#471E89;") Ver imagen
                    i.fas.fa-file(style="color:#471E89;")
            .row.mt-3(numero="5" titulo="Versiones de los formatos del registro")
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema4/9.png")
              .col-lg-8(style="place-self:center")
                p El Registro de Generadores de Residuos o Desechos Peligrosos se encuentra disponible en dos versiones: web y Excel. La autoridad ambiental evaluará la pertinencia de permitir que el diligenciamiento se realice a través del formato Excel al generador solicitante.
        .col-md-5(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema4/6.png" data-aos="fade-left")

    Separador.mt-5

    .titulo-segundo
      h2#t_4_2 4.2 Sistemas de Información y reporte 

    p(data-aos="fade-up") La implementación de un #[em software] agropecuario facilitará el tratamiento de la información, ya que es una herramienta que permite al finquero manejar su producción de forma organizada. Un #[em software], entre otros aspectos, facilita la medición y el control, factores que van ligados a la producción y a la administración, como los tiempos, insumos, la humedad, los gastos, el personal, entre otros.

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema4/10.png" data-aos="fade-right")
      .col-md-6(style="place-self:center")
        .p-4(style="background-color:#CED371;")
          p.mb-0(data-aos="fade-up")  En Colombia, el #[em software] más usado, con respecto a cada línea de producción y afines al sector agropecuario, lo encabeza Ganadero: el cual permite llevar un inventario exacto de la ganadería. Registra: natalidad y mortalidad, preñeces, días de celo, pesos y fechas de matadero, inseminaciones, vacunación, litros de leche.
        p.mt-4(data-aos="fade-up") Entérese de cuáles son los #[em softwares] y aplicaciones agrícolas con mayor acogida y uso dentro de los agropecuarios colombianos: 
        .col-md-10.m-auto.mt-4
          p(data-aos="fade-up") #[strong Tabla 1] #[br] #[em Software y aplicaciones agrícolas]
          .tabla-a.color-acento-botones.mt-4 
            table(width="100%" style="max-width:100%;min-width:100%;")
              thead(style="border:0;")
                tr(style="background-color:#A3314F;")
                  th.p-4(style="font-size:18px;color:white;border:0;border-right:1px #F6F6F6 solid;") #[em Software]
                  th.p-4(style="font-size:18px;color:white;border:0") #[em Apps]
              tbody
                tr(style="background-color:#F6F6F6;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Sismasgro
                  td.text-center(style="border:0;") Vad2k
                tr(style="background-color:#FFFFFF;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Agrosoft
                  td.text-center(style="border:0;") Farm Management PRO
                tr(style="background-color:#F6F6F6;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") ERPagro
                  td.text-center(style="border:0;") Agri Precision
                tr(style="background-color:#FFFFFF;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Agrivi
                  td.text-center(style="border:0;") Yra Checkit
                tr(style="background-color:#F6F6F6;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Solmicro
                  td.text-center(style="border:0;") Agrobio
                tr(style="background-color:#FFFFFF;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Agroptima
                  td.text-center(style="border:0;") PlantCare Pro
                tr(style="background-color:#F6F6F6;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Campo
                  td.text-center(style="border:0;") Cultivapp
                tr(style="background-color:#FFFFFF;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Tambero
                  td.text-center(style="border:0;") Gipcitricos IVIA
                tr(style="background-color:#F6F6F6;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Orcolis
                  td.text-center(style="border:0;") Agro Mido Mapas
                tr(style="background-color:#FFFFFF;")
                  td.text-center(style="border:0;border-right:1px #AFAFAF solid;") Agrocontrol
                  td.text-center(style="border:0;") Appgro

    p.mt-5(data-aos="fade-up") En relación con los sistemas de información y reporte (#[em software] o aplicaciones), tenga en cuenta, entre otros, los siguientes aspectos:

    .p-4.mt-5(style="background-color:#FAFBF0;")
      LineaTiempoC.color-acento-contenido.col-md-10.m-auto(text-small)
        .row(titulo="Registro de <br> información")
          .col-md-8.mb-4.mb-md-0(style="place-self:center")
            figure
              img(src='@/assets/curso/tema4/11.png')
          .col-md-4(style="place-self:center")
            p La información obtenida de cada punto de producción deberá ser registrada en la base de datos del #[em software] elegido para acompañar el proceso productivo.
        .row(titulo="Actualización <br> permanente")
          .col-md-8.mb-4.mb-md-0(style="place-self:center")
            figure
              img(src='@/assets/curso/tema4/12.png')
          .col-md-4(style="place-self:center")
            p Es importante tener actualizados los datos obtenidos en campo, para que, de esta manera, la calidad en los procesos aumente y el seguimiento sea más sencillo.
        .row(titulo="Control de la <br> producción")
          .col-md-8.mb-4.mb-md-0(style="place-self:center")
            figure
              img(src='@/assets/curso/tema4/13.png')
          .col-md-4(style="place-self:center")
            p El sistema de información se convertirá en una herramienta muy eficaz para el control de la producción, tiempos de reproducción, capacidad de carga, control de materia prima y alimentos, natalidad, estado del clima, entre otros.
        .row(titulo="Manejo de los <br> sistemas")
          .col-md-8.mb-4.mb-md-0(style="place-self:center")
            figure
              img(src='@/assets/curso/tema4/14.png')
          .col-md-4(style="place-self:center")
            p Los diagramas y funcionalidades de cada #[em software] o aplicación notificarán estados de alerta que se presenten, para su corrección temprana. Por tal motivo, se requiere buen manejo y conocimiento del mecanismo y uso de los mismos.
      




</template>

<script>
export default {
  name: 'Tema4',
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
.cont_desc_image1
  position: absolute
  width: 100%
  height: 100%
  top: 0
  transform: translateY(84%)
  transition: all .7s ease-out
.cont_desc_image__principal1:hover p
  display: block !important
.cont_desc_image__principal1:hover .cont_desc_image1
  transform: translateY(0%)
  flex-flow: column !important
  align-items: center !important
  display: flex !important
  justify-content: center !important
@media only screen and (max-width: 720px)
  .cont_desc_image__principal1:hover
    min-height: 515px
  .cont_desc_image1
    padding-top: .2rem !important
  .cont_desc_image__principal1:hover .cont_desc_image1
    padding-top: 1.5rem !important
.cont_fondo1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema4/5.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: top
.linea-tiempo-d__item--selected .tarjeta--gris, .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #DFE0C7 !important
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:before, .linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:after
  background-color: #471E89
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__line-container:before
  background-color: #471E89
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__dot
  border-color: #471E89
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot:after
  background-color: #471E89
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot
  border-color: #471E89
</style>
