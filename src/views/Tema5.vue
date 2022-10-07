<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de contingencias 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.col-md-10.m-auto(style="background-color:#CED371")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los planes de contingencias están definidos como los procedimientos operativos que permiten determinar la respuesta inmediata a eventos atípicos que pueden ocasionar una emergencia ambiental, con el fin de atenderlos de manera efectiva y eficiente y disminuir los riesgos ambientales. (IDEAM, 2019).

    .row.mt-5
      .col-auto
        div(style="background-color:#A3314F;width:27px;height:27px;")
      .col(style="place-self:center;")
        h3(style="font-size:24px;" data-aos="fade-up") Manejo de Intoxicaciones

    p.mt-5(data-aos="fade-up") Para un manejo adecuado de una posible intoxicación por plaguicidas o químicos utilizados en el sistema productivo pecuario, primero, se debe tener en cuenta la clasificación y el tipo de plaguicida utilizado.
    p.mt-4(data-aos="fade-up") En la siguiente tabla, se muestran elementos a tener en cuenta sobre el manejo de intoxicaciones:

    .col-md-10.m-auto.mt-4
      p(data-aos="fade-up") #[strong Tabla 2] #[br] Tipos de plaguicidas
      .tabla-a.color-acento-botones.mt-4 
        table(width="100%" style="max-width:100%;min-width:100%;")
          caption(style="font-weight:500;background-color:#F6F6F6") Nota. Tomada de Instituto Nacional de Salud (2011).
          thead(style="border:0;")
            tr(style="background-color:#A3314F;")
              th.p-4(style="font-size:18px;color:white;border:0;border-right:1px #F6F6F6 solid;") Tipo
              th.p-4(style="font-size:18px;color:white;border:0;border-right:1px #F6F6F6 solid;") Características
              th.p-4(style="font-size:18px;color:white;border:0") Plaguicidas
          tbody
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Inorgánicos
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Fabricados a partir de metales como cobre, plomo, arsénico.
              td.p-4.text-center(style="border:0;") Oxicloruro de cobre #[br] Oxicloruro de zinc
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Plaguicidas #[br] vegetales
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Son extraídos de diversas partes de vegetales.
              td.p-4.text-center(style="border:0;") Piretrinas #[br] Nicotina
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Órgano sintéticos y #[br] sintéticos
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Son sintetizados por el hombre en el laboratorio. #[br] Comprenden un amplio grupo de sustancias.
              td.p-4.text-center(style="border:0;") Organofosforados #[br] Organoclorados #[br] Carbamatos #[br] Ditiocarbamatos #[br] Bipiridilos #[br] Derivados warfarínicos
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Microorganismos #[br] vivos
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Son virus, bacterias y hongos utilizados en el control biológico de plagas.
              td.p-4.text-center(style="border:0;") #[em Trichoderma harzianum] #[br] #[em Paecilomyces lilacinus] #[br] #[em Metarhizium anisopliae] #[br] #[em Beauveria bassiana]

    p.mt-5(data-aos="fade-up") Después de tener claro el tipo de sustancia que se utiliza y sus derivados, se debe clasificar el tipo de intoxicación de acuerdo con la exposición, tipo u origen:

    .col-md-10.m-auto.mt-4
      p(data-aos="fade-up") #[strong Tabla 3] #[br] Clasificación de intoxicación
      .tabla-a.color-acento-botones.mt-4 
        table(width="100%" style="max-width:100%;min-width:100%;")
          caption(style="font-weight:500;background-color:#F6F6F6") Nota. Tomada de Instituto Nacional de Salud (2011).
          thead(style="border:0;")
            tr(style="background-color:#A3314F;")
              th.p-4(style="font-size:18px;color:white;border:0;border-right:1px #F6F6F6 solid;;") Tipo
              th.p-4(style="font-size:18px;color:white;border:0") Características de la clasificación
          tbody
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Intoxicación #[br] aguda
              td.p-4.text-center(style="border:0;") El cuadro clínico se presenta en las primeras 24 horas luego de la exposición a plaguicidas, cuyos signos y síntomas dependen del grupo químico al que pertenecen (1,2,3,4).
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Intoxicación #[br] crónica
              td.p-4.text-center(style="border:0;") Cuando el cuadro clínico se presenta luego de exposición repetida a dosis bajas de plaguicidas por periodos de tiempo prolongados.
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Exposición #[br] aguda
              td.p-4.text-center(style="border:0;") Ocupacional: compromete a grupos de edad laboralmente activos durante las actividades de producción y uso. #[br] Accidental: exposición de manera no intencional e inesperada (incluye intoxicaciones alimentarias). #[br] Intencional: se produce con el propósito de causar daño; incluye intentos de suicidio y homicidio.
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Exposición #[br] crónica
              td.p-4.text-center(style="border:0;") Ocupacional: por la exposición repetida a dosis bajas por periodos de tiempos largos con procesos productivos y uso (procesos de preparación de plaguicidas). #[br] Medioambiental: cuando la población en general está expuesta a plaguicidas por diferentes vías o rutas de exposición (agua, aire, alimentos contaminados).

    p.mt-5(data-aos="fade-up") De acuerdo con la clasificación de la intoxicación, se definen los criterios para la medición de la afectación en cada caso, esto se hace con la ayuda de pruebas de laboratorio, revisión médica o con los síntomas asociados. 
    p.mt-4(data-aos="fade-up") En cualquier caso, es mejor recurrir al especialista para iniciar un tratamiento de desintoxicación. Analice las posibilidades presentadas en la siguiente tabla:

    .col-md-10.m-auto.mt-4
      p(data-aos="fade-up") #[strong Tabla 4] #[br] Definición operativa de caso
      .tabla-a.color-acento-botones.mt-4 
        table(width="100%" style="max-width:100%;min-width:100%;")
          caption(style="font-weight:500;background-color:#F6F6F6") Nota. Tomada de Instituto Nacional de Salud (2011).
          thead(style="border:0;")
            tr(style="background-color:#A3314F;")
              th.p-4(style="font-size:18px;color:white;border:0;border-right:1px #F6F6F6 solid;;") Tipo de caso
              th.p-4(style="font-size:18px;color:white;border:0") Características de la clasificación
          tbody
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Caso confirmado por laboratorio 
              td.p-4(style="border:0;")
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Caso que sugiere IAP por presentar síntomas o signos compatibles con una intoxicación o cuadro clínico relacionado o atribuible a una exposición a plaguicidas, en el que los laboratorios (según sea el caso) evidencien una alteración atribuible a la exposición a plaguicidas.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Antecedentes de exposición al tóxico con indicador biológico alterado (de exposición o de efecto) de acuerdo con el plaguicida. 
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | En caso de fallecimiento, confinación de la intoxicación por medio de procedimientos médicos legales.
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Caso confirmado clínicamente
              td.p-4(style="border:0;")
                p Caso en el que se establece al menos uno de los siguientes criterios:
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Antecedente comprobado de exposición al plaguicida y manifestaciones clínicas como consecuencia de esta exposición.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Que las características del cuadro clínico, la o las vías de exposición implicadas, la relación entre el agente y el mecanismo de acción y su asociación en el tiempo se relacionen con las manifestaciones clínicas de la intoxicación.
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Caso confirmado por nexo epidemiológico 
              td.p-4(style="border:0;") Caso con cuadro clínico compatible con IAP relacionable con otro(s) caso(s) confirmado(s) o evento(s) medioambientales en los cuales estén implicados plaguicidas. El nexo debe tener relación en el tiempo y la zona geográfica.
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Brote
              td.p-4(style="border:0;") Episodio en el cual dos o más personas presentan un cuadro clínico compatible con IAP en un mismo lugar o zona geográfica y donde se compruebe la exposición efectiva al agente causal y se identifiquen factores de riesgo asociados.
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Alerta
              td.p-4(style="border:0;")
                p Conjunto de eventos relacionados con las intoxicaciones por plaguicidas que, según criterios epidemiológicos, demandan una acción de manera inmediata. #[br] Ellos son:
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Intoxicación de gestantes y/o lactantes.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Intoxicación en menores de edad.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Intoxicación con plaguicidas no registrados o prohibidos.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Situaciones de emergencia donde estén involucrados plaguicidas tales como derrames, fugas, desastres naturales, desastres tecnológicos.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Brotes.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Toda intoxicación individual o colectiva asociada al programa de erradicación de cultivos ilícitos con el herbicida glifosato.
                  li 
                    i.fas.fa-angle-right(style="color:#A3314F;")
                    | Aquellas alertas que las comisiones, comités o consejos de vigilancia de plaguicidas consideren que deben ser investigadas.

    .row.mt-5
      .col-auto
        div(style="background-color:#A3314F;width:27px;height:27px;")
      .col(style="place-self:center;")
        h3(style="font-size:24px;" data-aos="fade-up") Manejo de derrame de sustancias 


    p.mt-4(data-aos="fade-up") Para el manejo de sustancias químicas peligrosas, se tienen, en el mercado, una gama de productos para su contención y para su recolección, de acuerdo con su composición:

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/tema5/2.png" data-aos="fade-right")
      .col-md-6
        .cajon.color-acento-contenido.p-4.d-flex.align-items-center(style="background-color:#CED371;height:100%;")
          ul.lista-ul
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Estibas contenedoras.
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Materiales absorbentes.
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Kit de emergencia o de derrames.
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Material autoadhesivo para etiquetar los contenedores.
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Equipo de protección personal (gafas, guantes, protectores, etc.).
            li 
              i.fas.fa-angle-right(style="color:#A3314F;")
              | Entre otros.

    .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#E1E4A8;")
      p.mb-0(data-aos="fade-up") El uso de estos elementos debe hacerse de acuerdo con las recomendaciones del fabricante y con el uso de los Elementos de Protección Personal, EPP, para evitar cualquier riesgo a la salud humana.

    .row.mt-5.p-4.col-md-10.m-auto(style="background-color:#F4F6DD;border-radius:20px;")
      .col-md-2.mb-3.mb-md-0(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema5/3.png" data-aos="fade-left" style="max-width:50px;display:inline;")
      .col-md-7.mb-3.mb-md-0(style="place-self:center")
        p.mb-0(data-aos="fade-up") Amplié su conocimiento sobre manejo de derrames. Explore, en el material complementario del componente, el documento: Atención de derrame de sustancias.
      .col-md-3.text-center(style="place-self:center")
        a.boton.color-acento-contenido(href="https://www.arlsura.com/files/atencion_derrames.pdf" target="_blank" style="background-color:#FFCD0D;")
          span(style="color:#471E89;") Ver
          i.fas.fa-file(style="color:#471E89;")



</template>

<script>
export default {
  name: 'Tema5',
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
