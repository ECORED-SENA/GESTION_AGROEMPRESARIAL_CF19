<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Residuos

    p(data-aos="fade-up") La utilización de residuos pecuarios como fertilizantes agrícolas permite recuperar la fertilidad química y física de los suelos, aumentando la producción de los cultivos. Pese a los beneficios y a que disminuye el uso de fertilizantes minerales, su utilización es escasa, debido al desconocimiento generalizado sobre el manejo, tratamiento y posterior utilización como abono orgánico para los suelos.

    figure.col-md-10.m-auto.mt-5
      img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up")

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Tipos

    p(data-aos="fade-up") En la industria pecuaria se producen tres tipos de residuos, la mayoría pueden ser aprovechados si se cuenta con un Plan de Gestión Integral de Residuos Sólidos PGIRS, en cual se dictaminan los pasos a seguir para la separación en la fuente, aprovechamiento y posterior disposición final. Estos tipos de residuos son:

    .row.mt-5
      .col-md-4.mb-4.mb-md-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema3/2.png' style="max-width:100px;")
          .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#F3F4DB;height:100%;")
            h4.mt-4(style="color:#12263F;" data-aos="fade-up") Residuos sólidos comunes: 
            p(style="color:#12263F;" data-aos="fade-up") este tipo de residuos son producidos por las actividades antrópicas y se clasifican como aprovechables, orgánicos y no aprovechables.
      .col-md-4.mb-4.mb-md-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema3/3.png' style="max-width:100px;")
          .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#F3F4DB;height:100%;")
            h4.mt-4(style="color:#12263F;" data-aos="fade-up") Residuos pecuarios: 
            p(style="color:#12263F;" data-aos="fade-up") son los residuos de origen orgánico que se producen por las actividades de producción (heces, orín, residuos de alimentos, etc.), los cuales son aptos para un proceso de transformación para producir abono orgánico.
      .col-md-4.mb-4.mb-md-0
        .tarjeta-avatar(style="padding-top:45px;")
          img(src='@/assets/curso/tema3/4.png' style="max-width:100px;")
          .tarjeta.color-acento-botones.p-4.text-center(style="background-color:#F3F4DB;height:100%;")
            h4.mt-4(style="color:#12263F;" data-aos="fade-up") Residuos peligrosos: 
            p(style="color:#12263F;" data-aos="fade-up") son los que están relacionados con el uso de plaguicidas y químicos en la industria pecuaria.
      

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2. Clasificación y disposición 

    p(data-aos="fade-up") A partir de la Resolución 2184 de 2019 del Ministerio de Ambiente y Desarrollo Sostenible el código de colores para el manejo de residuos cambió, empezando a regir a partir del 1° de enero de 2020 definido por tres colores para el manejo de los residuos sólidos comunes, ver figura. 

    .col-md-10.m-auto.mt-5
      p(data-aos="fade-up") #[strong Figura 1] #[br] Código de colores residuos sólidos comunes
      figure.mt-3
        img(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Un residuo o desecho peligroso es aquel que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar algún riesgo o daño para la salud humana y el ambiente cuando es inadecuadamente manejado. Los envases que los contienen también son considerados residuos peligrosos (Decreto 4741 de 2015).

    .row.mt-5.p-4.col-md-10.m-auto(style="background-color:#F4F6DD;border-radius:20px;")
      .col-md-2.mb-3.mb-md-0(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema5/3.png" data-aos="fade-left" style="max-width:50px;display:inline;")
      .col-md-7.mb-3.mb-md-0(style="place-self:center")
        p.mb-0(data-aos="fade-up") Para una mejor comprensión del manejo de residuos peligrosos se recomienda ver el #[strong Decreto 4741 de 2015].
      .col-md-3.text-center(style="place-self:center")
        a.boton.color-acento-contenido(href="http://www.ideam.gov.co/documents/51310/526371/Decreto+4741+2005+PREVENCION+Y+MANEJO+DE+REIDUOS+PELIGROSOS+GENERADOS+EN+GESTION+INTEGRAL.pdf/491df435-061e-4d27-b40f-c8b3afe25705" target="_blank" style="background-color:#FFCD0D;")
          span(style="color:#471E89;") Ver
          i.fas.fa-file(style="color:#471E89;")

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/6.png" data-aos="fade-right")
      .col-md-6(style="place-self:center;")
        .p-4(style="background-color:#DFCFD3")
          p(data-aos="fade-up") #[strong El Gobierno Nacional a través del Ministerio de Ambiente y Desarrollo Sostenible ha expedido la normatividad necesaria para el impulso de programas de manejo integral de residuos peligrosos y para garantizar el postconsumo,] tras un proceso de transformación que los convierte en nuevas materia primas, para esto se busca que los residuos destinados al postconsumo sean separados de los residuos sólidos comunes u ordinarios y que sean manejados de manera que no se conviertan en un riesgo para la salud y el ambiente, para así ser reciclados o aprovechados por empresas que estén autorizadas para la manipulación de estos;  nada de esto se puede lograr si los consumidores no asumen comportamientos y hábitos de consumo saludable.
        .row.mt-5.p-4.col-md-10.m-auto(style="background-color:#F4F6DD;border-radius:20px;")
          .col-md-2.mb-3.mb-md-0(style="place-self:center")
            figure.text-center
              img(src="@/assets/curso/tema5/3.png" data-aos="fade-left" style="max-width:50px;display:inline;")
          .col-md-7.mb-3.mb-md-0(style="place-self:center")
            p.mb-0(data-aos="fade-up") Se solicita al aprendiz revisar el artículo de Javier Martínez (2005) sobre #[strong la guía para la gestión integral de residuos peligrosos].
          .col-md-3.text-center(style="place-self:center")
            a.boton.color-acento-contenido(href="https://www.cempre.org.uy/docs/biblioteca/guia_para_la_gestion_integral_residuos/gestion_respel01_fundamentos.pdf" target="_blank" style="background-color:#FFCD0D;")
              span(style="color:#471E89;") Ver
              i.fas.fa-file(style="color:#471E89;")






</template>

<script>
export default {
  name: 'Tema3',
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
