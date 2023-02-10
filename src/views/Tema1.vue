<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diagnóstico de la gestión del riesgo de desastres
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-5.mb-md-0(data-aos="fade-up-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')
      .col-lg-9(data-aos="fade-up-left")
        .fondo-1
          .row.justify-content-center
            .col-lg-9
              p Para dar inicio con el estudio de esta temática, se presenta una descripción inicial de los elementos que se deben considerar para la realización del diagnóstico de la gestión del riesgo de desastres:

        p Como primera parte en todo plan de riesgo, es necesario realizar un diagnóstico de la zona de estudio, el cual debe tener en cuenta las fuentes de información gubernamentales, las fuentes cartográficas y demográficas, así como los diversos actores sociales que están involucrados en el proceso. Esto con el propósito de facilitar el desarrollo de más medidas de mitigación y prevención que se apropien para que el programa sea implementado de forma sostenible y segura. 


    SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg_1
          p.mb-0  Antes del despliegue del inicio de un programa y, posterior al análisis de contexto y mapeo de actores, se realiza el diagnóstico de riesgos a partir de las siguientes preguntas orientadoras:

    .row.mb-5
      .col-lg-4(data-aos="fade-down-right")
        .tarjeta.p-4.bg_2
          .row.justify-content-center.mb-3
            .col-8
              img.img-a(src='@/assets/curso/temas/tema_1/img_6.png' alt='AvatarTop')
          h5.text-center Pregunta orientadora
          p.text-center ¿Cuáles son las amenazas a las que se enfrenta?
      .col-lg-4(data-aos="fade-down")
        .tarjeta.bg_2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img.img-a(src='@/assets/curso/temas/tema_1/img_7.png' alt='AvatarTop')
          h5.text-center Pregunta orientadora
          p.text-center ¿Cuáles son sus vulnerabilidades a esas amenazas?
      .col-lg-4(data-aos="fade-down-left")
        .tarjeta.bg_2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img.img-a(src='@/assets/curso/temas/tema_1/img_8.png' alt='AvatarTop')
          h5.text-center Pregunta orientadora
          p.text-center ¿Cuál es la probabilidad e impacto de los riesgos?

    separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Preparación y revisión de información del territorio 

    p.mb-5(data-aos="flip-left") Una vez realizado el diagnóstico inicial de la gestión del riesgo de desastres, se procede a preparar y revisar la información del territorio como se describe a continuación.

    .tarjeta.color-secundario.p-4.mb-5(data-aos="flip-right")
      SlyderA(tipo="b")
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Para dar respuesta a los interrogantes planteados previamente, se reconoce que todos los riesgos surgen a partir de una combinación entre los peligros, la exposición de personas, la vulnerabilidad que presentan y la capacidad para afrontarlos en un lugar determinado.
        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_9.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Para evaluar estos riesgos, se hace una recopilación y análisis sistemático de datos, teniendo en cuenta la dinámica de los impactos de los peligros evidenciados. Las vulnerabilidades usualmente se presentan al no tener una urbanización planificada, que considere las dinámicas sociales y ambientales, así como el uso del suelo y la protección de la fauna y flora. 
        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_10.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Los riesgos también dependen de los recursos y capacidades que se dispongan para poder gestionar los mismos, teniendo en cuenta sus consecuencias con la interacción humana, lo cual proporciona información para que la emergencia pueda ser manejada de manera oportuna en tiempo real. Por lo tanto, la preparación de la información del territorio debe pretender evaluar los riesgos según las capacidades adaptativas y de afrontamiento dentro de las comunidades que estén vulnerables. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_11.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Con la recopilación de información de primera mano, se podrá motivar a las personas a que prioricen sus necesidades y que puedan ser guiadas dentro de un plan de gestión de riesgo de desastres, en la cual esté incluida la prevención, la preparación y la respuesta. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_12.png', alt='Texto que describa la imagen')

    separador
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Identificación de los escenarios de riesgo de desastres

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-5.mb-md-0(data-aos="fade-up-right")
        p En relación con la preparación y revisión de información del territorio, se hace necesario considerar la identificación de los escenarios de riesgo de desastres, los cuales se describen a continuación:
        p Los escenarios de riesgo, son todos aquellos que tienen la capacidad de generar susceptibilidades hacia la salud humana, la infraestructura social y la economía de las comunidades. Dentro de los principales escenarios de riesgo, se encuentran las amenazas naturales, porque, en la mayoría de los casos, no se puede saber con certeza el momento en que se van a presentar, ni la magnitud de las mismas; a continuación, se describen las principales amenazas naturales. (Protección de infraestructura, s.f.)        
      .col-lg-3(data-aos="fade-up-left")
        img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Texto que describa la imagen')

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Sismicidad
              ul
                li 
                  span.lista-ul__vineta Vibración del suelo.
                li 
                  span.lista-ul__vineta Amplificación espectral.
                li 
                  span.lista-ul__vineta Aceleración.
                li 
                  span.lista-ul__vineta Intensidad.
                li 
                  span.lista-ul__vineta Ruptura del suelo.
                li 
                  span.lista-ul__vineta Licuefacción.
                li 
                  span.lista-ul__vineta Tsunami.
                li 
                  span.lista-ul__vineta Deslizamiento.
                li 
                  span.lista-ul__vineta Levantamiento.
 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_14.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_15.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Volcanismo
              ul
                li 
                  span.lista-ul__vineta Erupciones.
                li 
                  span.lista-ul__vineta Flujos de piroclastos.
                li 
                  span.lista-ul__vineta Tsunami.
                li 
                  span.lista-ul__vineta Coladas de lava.
                li 
                  span.lista-ul__vineta Emisión de gases.
                li 
                  span.lista-ul__vineta Vapores.
                li 
                  span.lista-ul__vineta Lluvia ácida.
                li 
                  span.lista-ul__vineta Lamares.


      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_16.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Hidrometeorología
              ul
                li 
                  span.lista-ul__vineta Ciclones.
                li 
                  span.lista-ul__vineta Frentes polares.
                li 
                  span.lista-ul__vineta El Niño.
                li 
                  span.lista-ul__vineta Tornados.
                li 
                  span.lista-ul__vineta Convergencia intertropical.
                li 
                  span.lista-ul__vineta Vaguadas.
                li 
                  span.lista-ul__vineta Lluvias intensas (Avenidas, inundaciones, deslizamientos, torrentes, erosión).
                li 
                  span.lista-ul__vineta Sequías (déficit hídrico, descenso de caudales, incremento del albedo, degradación de tierras).
                li 
                  span.lista-ul__vineta Vientos (erosión eólica, variaciones súbitas, influencia sobre navegación, obras civiles). 

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor.h-100(style='min-height: 500px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Deslizamientos
              ul
                li 
                  span.lista-ul__vineta Destrucción de laderas.
                li 
                  span.lista-ul__vineta Aludes.
                li 
                  span.lista-ul__vineta Avalanchas.
                li 
                  span.lista-ul__vineta Represamiento de cauces fluviales

 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_17.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor.h-100(style='min-height: 460px')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_18.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Erosión
              ul
                li 
                  span.lista-ul__vineta Remoción de suelos y nutrientes.
                li 
                  span.lista-ul__vineta Destrucción de laderas.
                li 
                  span.lista-ul__vineta Socavación.
                li 
                  span.lista-ul__vineta Agradación de cauces.
                li 
                  span.lista-ul__vineta Sedimentación de riberas.
                li 
                  span.lista-ul__vineta Embalses.
                li 
                  span.lista-ul__vineta Costas.



      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor.h-100(style='min-height: 460px')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_19.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Avalanchas
              ul
                li 
                  span.lista-ul__vineta Escorrentía torrencial.
                li 
                  span.lista-ul__vineta Destrucción de laderas y lechos fluviales.
                li 
                  span.lista-ul__vineta Agradación de cauces.
                li 
                  span.lista-ul__vineta Conoides de deyección.

    p.mb-5 Una vez reconocidos los escenarios de riesgo, se determina la vulnerabilidad, que es un factor primordial a tener en cuenta dentro de un plan de gestión de riesgo, para tomar las medidas acertadas frente a los mecanismos de prevención y acción, que se necesitan tener en cuenta para disminuir los riesgos. A continuación, se presenta el ciclo de factores de vulnerabilidad para la planificación del desarrollo social. (Protección de infraestructura, s.f.)

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema_1/img_20.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="31%" y="14%" numero="1")
        p Principios del Proceso de Planificación del Desarrollo: 
        ul
          li 
            span.lista-ul__vineta Subsidiaridad. 
          li 
            span.lista-ul__vineta Participación. 
          li 
            span.lista-ul__vineta Transparencia. 
          li 
            span.lista-ul__vineta Descentralización.
      .tarjeta.color-acento-botones.p-3(x="69%" y="14%" numero="2")
        p Identificar potencial impacto de las amenazas. 
      .tarjeta.color-acento-botones.p-3(x="79%" y="42%" numero="3")
        p Entender las causas y efectos relacionados con los factores de vulnerabilidad.
      .tarjeta.color-acento-botones.p-3(x="69%" y="85%" numero="4")
        p Formular opciones asociadas con los escenarios de riesgo analizados: correctivas (mitigación) y prospectivas (prevención).
      .tarjeta.color-acento-botones.p-3(x="31%" y="85%" numero="5")
        ul
          li.mb-3 
            span.lista-ul__vineta Promover intercambio institucional para inversión.
          li 
            span.lista-ul__vineta Articular las decisiones de inversión con los procesos de planificación.
      .tarjeta.color-acento-botones.p-3(x="21%" y="42%" numero="6")
        ul
          li.mb-3 
            span.lista-ul__vineta Actualizar permanentemente los instrumentos de planificación incorporando el enfoque de gestión del riesgo: planes estratégicos de desarrollo, ordenamiento territorial y de contingencias. 
          li 
            span.lista-ul__vineta Dar seguimiento a los avances de inversiones en prevención, mitigación, preparación, respuesta y rehabilitación.

    p.mb-5 Como puede verse, mediante la identificación de los escenarios de riesgo se determina la amenaza y vulnerabilidad de las comunidades. 

    TabsC.color-acento-botones.mb-5(data-aos="flip-down")
      .py-3.py-md-4(titulo="Existencia de una amenaza")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Para que suceda un evento que sea capaz de producir un desastre, primero debe existir una amenaza, la cual puede ser de origen natural, socio natural, antrópico no intencional y tecnológico, que pueda generar daños en un lugar y momento determinado, así mismo, como las condiciones desfavorables que se presenten al interior de la población. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema_1/img_21.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Relación de conceptos")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En este sentido, es importante reconocer los tres conceptos fundamentales dentro de la gestión del riesgo se relacionan como se muestra en la imagen. La relación de estos conceptos permitirá realizar un acertado diagnóstico para la gestión del riesgo de desastres. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')
        
      .py-3.py-md-4(titulo="Definición de amenaza")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Para iniciar, se puede entender como amenaza el peligro latente de ocurrencia de un evento, que sea causado por orígenes naturales o inducido por acciones humanas de manera involuntaria, el cual se presente con un alto nivel de accidentabilidad generando pérdida de vidas, lesiones o impactos a la salud, así como también, se puedan producir daños y pérdidas en la infraestructura de la comunidad, junto con las afectaciones hacia los recursos naturales, así como se describe a continuación. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema_1/img_23.png', alt='Texto que describa la imagen')

    .fondo-2.mb-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
          p Reconociendo el concepto de amenaza, a continuación se presentan la clasificación de las amenazas según su origen.
          .bg_1.p-4
            p.mb-0 Según la guía metodológica para la elaboración de planes departamentales para la gestión del riesgo, las amenazas se pueden clasificar de la siguiente manera:
        .col-lg-3(data-aos="fade-left")
          img.img-a(src='@/assets/curso/temas/tema_1/img_24.png', alt='Texto que describa la imagen')


    .bg_3.p-4.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-6").align-items-stretch.d-flex.h-100
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_26.svg' alt='AvatarTop')
          .tarjeta.bg_4
            .p-4
              h4.text-center Naturales
              p Inherentes a la dinámica natural del planeta tierra.
              p.mb-5 Se dividen en:
              .row.mb-0
                .col-lg-6
                  h6 Hidrometeorológicas
                  ul
                    li 
                      span.lista-ul__vineta Huracanes.
                    li 
                      span.lista-ul__vineta Vendavales.
                    li 
                      span.lista-ul__vineta Amenaza ceráunico.
                    li 
                      span.lista-ul__vineta Heladas.
                    li 
                      span.lista-ul__vineta Sequías y desertificación.
                    li 
                      span.lista-ul__vineta Inundaciones.
                    li 
                      span.lista-ul__vineta Avenidas torrenciales.
                    li 
                      span.lista-ul__vineta Granizadas.
                    li 
                      span.lista-ul__vineta Erosión litoral.

                .col-lg-6
                  h6 Geológicas
                  ul
                    li 
                      span.lista-ul__vineta Sismos.
                    li 
                      span.lista-ul__vineta Actividad volcánica.
                    li 
                      span.lista-ul__vineta Remoción en masa.
                    li 
                      span.lista-ul__vineta Tsunamis o maremotos.
                    li 
                      span.lista-ul__vineta Diapirismo de lodos.


        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_27.svg' alt='AvatarTop')
          .tarjeta.bg_4
            .p-4
              h4.text-center Socio-naturales
              p Similares a los naturales, pero son inducidos.

              p Se encuentran:

              ul
                li 
                  span.lista-ul__vineta Inundaciones.
                li 
                  span.lista-ul__vineta Remoción en masa.
                li 
                  span.lista-ul__vineta Incendios forestales.
                li 
                  span.lista-ul__vineta Degradación de recursos naturales.


        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_28.svg' alt='AvatarTop')
          .tarjeta.bg_4
            .p-4
              h4.text-center Antrópicas
              p Se refiere a las acciones directamente humanas, tanto intencionales como no intencionales.

              p Se encuentran:

              ul
                li 
                  span.lista-ul__vineta Aglomeración de personas.
                li 
                  span.lista-ul__vineta Contaminación.


        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_29.svg' alt='AvatarTop')
          .tarjeta.bg_4
            .p-4
              h4.text-center Tecnológicas
              p Asociadas con actividades industriales y de transporte de sustancias peligrosas.

              p Se encuentran:

              ul
                li 
                  span.lista-ul__vineta Derrames.
                li 
                  span.lista-ul__vineta Fugas.
                li 
                  span.lista-ul__vineta Explosiones.
                li 
                  span.lista-ul__vineta Incendios (estructurales y forestales).

    .fondo-3.mb-5.p-5
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-9.mb-4.mb-md-0(data-aos="fade-right")
          .px-3
            p Reconocidas las amenazas, se presenta otro concepto fundamental de la gestión del riesgo, la vulnerabilidad. Esta es una variable de vital importancia para realizar la gestión del riesgo, ya que este requiere el estudio de los efectos de un fenómeno, sobre aquellos elementos que son necesarios para el correcto funcionamiento de la sociedad, abarcando los aspectos económicos, sociales, ambientales, físicos, políticos e institucionales. 
          .bg_5.p-4
            p.mb-0 En este sentido, la guía metodológica plantea que, para la elaboración de planes departamentales para la gestión del riesgo, se identifican algunos de los factores de vulnerabilidad los cuales deben ser tomados en cuenta, al momento de realizar un plan de gestión de riesgos:
        .col-lg-3(data-aos="fade-left")
          img.img-a(src='@/assets/curso/temas/tema_1/img_31.png', alt='Texto que describa la imagen')


    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Factores físicos" :icono="require('@/assets/curso/temas/tema_1/img_32.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Hacen referencia a la ubicación material de los bienes, con relación al evento que presenta amenaza, como, por ejemplo:
            ul
              li 
                span.lista-ul__vineta Antigüedad y calidad de los materiales de construcción y cumplimiento de la NSR-10 de la infraestructura (vías, puentes, túneles, acueductos, hospitales, estaciones de bomberos, instituciones educativas, estaciones de policía, alcaldías, gobernación, canales de riesgo, presas, entre otros).

        
          .col-md-3
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_36.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Factores ambientales" :icono="require('@/assets/curso/temas/tema_1/img_33.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Hacen referencia a la forma en que la comunidad explota los diferentes recursos naturales de sus alrededores, lo cual hace que se debiliten los ecosistemas y la capacidad de resiliencia que presentan, como, por ejemplo:

            ul 
              li 
                span.lista-ul__vineta Fuentes de agua.
              li 
                span.lista-ul__vineta Ecosistemas estratégicos.
              li 
                span.lista-ul__vineta Superficies cultivables.
              li 
                span.lista-ul__vineta Biodiversidad.
              li 
                span.lista-ul__vineta Deterioro de los recursos naturales.        
          .col-md-3
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_37.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Factores económicos" :icono="require('@/assets/curso/temas/tema_1/img_34.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Se refieren a la disponibilidad de recursos económicos presentes dentro de la población de riesgo, así como la distribución y uso de los mismos, como, por ejemplo:
            ul
              li 
                span.lista-ul__vineta Pobreza y seguridad alimentaria.
              li 
                span.lista-ul__vineta Estratos socioeconómicos.
              li 
                span.lista-ul__vineta Nivel de ingresos.
              li 
                span.lista-ul__vineta Acceso a servicios públicos (agua, saneamiento, energía, gas).
              li 
                span.lista-ul__vineta Acceso al mercado laboral.
              li 
                span.lista-ul__vineta Cubrimiento a las necesidades básicas. 
                  
          .col-md-3
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_38.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Factores sociales" :icono="require('@/assets/curso/temas/tema_1/img_35.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Corresponden a todos aquellos aspectos políticos, institucionales, educativos, organizacionales y culturales presentes en la comunidad, como, por ejemplo:
            ul
              li 
                  span.lista-ul__vineta Educación y formación.
              li 
                  span.lista-ul__vineta Percepción del riesgo.
              li 
                  span.lista-ul__vineta Participación.
              li 
                  span.lista-ul__vineta Organizaciones comunitarias.
              li 
                  span.lista-ul__vineta Organización que tiene una conectividad para prevenir y responder a una situación de emergencia.
              li 
                  span.lista-ul__vineta Equidad de género.

          .col-md-3
            figure
              img.img-a(src='@/assets/curso/temas/tema_1/img_39.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-md-0(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_1/img_40.png', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Para ampliar la información de esta temática, se sugiere consultar la guía metodológica para la elaboración de planes departamentales para la gestión del riesgo. 
            i.fas.fa-quote-right
            br
            p.text-center (Unidad nacional de gestión de riesgo de desastres, s.f.). 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Interpretación cartográfica de los escenarios de riesgo de desastres 

    p Una vez identificados los escenarios de riesgo de desastres, se describe a continuación la interpretación cartográfica de los mismos.

    p.mb-5 Los sistemas de información geográfica, son herramientas esenciales para la gestión de riesgos, debido a que se utilizan para identificar las actividades o procesos que se encuentran sujetos a riesgo, y cuantifican las probabilidades de estos eventos para poder medir, de manera acertada, el daño potencial que se asocie con la ocurrencia de desastres:

    .tarjeta.color-secundario.p-4.mb-5(data-aos="flip-right")
      SlyderA(tipo="b")
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p La expresión cartográfica es el medio de valoración y gestión de riesgos más acertado al establecer una zonificación a partir de la combinación entre los mapas de peligrosidad, vulnerabilidad y exposición, lo cual permite cuantificar los resultados y establecer medidas preventivas al respecto. Dentro del ordenamiento territorial, la cartografía direccionada hacia el riesgo permite evitar daños a comunidades vulnerables, planificando el uso del suelo y distribuyendo las zonas dentro de cada población. 
        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_41.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Para evaluar estos riesgos se debe realizar una valoración cualitativa, indirecta y de carácter predictivo, en los cuales se definan las zonas y sus niveles de riesgo, facilitando mediante el uso de sistemas de información geográfica, la incorporación de datos digitales que sean de carácter espacial para el análisis y modelación de fenómenos complejos.  
        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_42.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly
          .col-md-4.mb-4.mb-md-0
            p Los mapas de riesgo evaluados desde un punto teórico científico, tienen una amplia proyección, la cual en el ámbito de las aplicaciones prácticas es muy valiosa, dado que usualmente los problemas que se deben resolver en cuestión del riesgo necesitan de la interacción de variables climáticas, sociales, culturales y económicas. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_1/img_43.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_44.png')})`}"
          )
          .bloque-texto-g__texto.p-4.txt-g.bloque-g-txt
            p.mb-0 Una vez reconocidos los sistemas de información geográfica, se puede concluir que la aplicación cartográfica en la gestión del riesgo implica conocer cada uno de los factores que le dan origen, estos factores tienen cada uno una representación espacial y pueden ser catalogados como fenómenos geográficos, dado que son rasgos identificables sobre el territorio y los diferentes sucesos con una temporalidad pronunciada, a su vez, cuentan con las siguientes características: 

    .bg_6.py-5.mb-5.h-100
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_45.svg' alt='AvatarTop')
          h4.text-center Causalidad: 
          p.text-center permiten identificar las cuales que les dieron origen a estos factores. 

        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_46.svg' alt='AvatarTop')
          h4.text-center Localización: 
          p.text-center el sistema de coordenadas permite ubicarlos espacialmente sobre la superficie terrestre. 

        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_47.svg' alt='AvatarTop')
          h4.text-center Extensión: 
          p.text-center permite definir el espacio que ocupa sobre la superficie de la tierra. 
        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_48.svg' alt='AvatarTop')
          h4.text-center Relación: 
          p.text-center se logran identificar aquellos fenómenos que estén relacionados entre sí. 

        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_49.svg' alt='AvatarTop')
          h4.text-center Temporalidad:  
          p.text-center hace referencia al espacio de tiempo en que se presentan estos factores.

        .tarjeta.bg_2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_50.svg' alt='AvatarTop')
          h4.text-center Escala: 
          p.text-center de acuerdo con la extensión que tienen se les representa el tamaño adecuado. 




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'El proceso de diagnóstico se debe adelantar de manera integral junto con el diseño de programas y proyectos, teniendo en cuenta las exposiciones al riesgo, así como aquellas medidas que se vean vinculadas de manera directa con los objetivos e implementación del programa. ',
        imagen: require('@/assets/curso/temas/tema_1/img_3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La información necesaria para realizar esta fase de diagnóstico, implica una recopilación ordenada y sistemática de datos que estén relacionados con aspectos primordiales dentro de la gestión de riesgos, por esto, se debe recurrir a fuentes que sean tanto teóricas como prácticas y conceptuales que permitan analizar, comparar evidenciar, verificar y cruzar variables entre ellas.',
        imagen: require('@/assets/curso/temas/tema_1/img_4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'El diagnóstico participativo tiene un papel fundamental dentro de la planeación estratégica, la cual tiene como objetivo el desarrollo de manera integral de la calidad de vida de las poblaciones, a partir de la construcción planificada del territorio, la cual permite evidenciar la situación actual en términos políticos, ideológicos, económicos, culturales, sociales y ambientales, esenciales para planear situaciones futuras sin modificar las condiciones actuales de estas poblaciones. ',
        imagen: require('@/assets/curso/temas/tema_1/img_5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
