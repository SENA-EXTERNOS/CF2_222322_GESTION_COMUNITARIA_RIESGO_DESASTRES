<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recolección y análisis de información primaria y secundaria

    .fondo-1.p-2.mb-5(data-aos="flip-right")
      .row.align-items-center.justify-content-evenly
        
        .col-lg-2.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_2/img_1.png', alt='Texto que describa la imagen')
        .col-lg-7
          p Reconociendo la interpretación cartográfica de los mismos se describe a continuación el procedimiento a realizar para recolectar y analizar información primaria y secundaria.
        
    p.mb-5 Una vez reconocido el territorio, se procede a presentar lo relacionado con la recolección de información.    

    .fondo-4.p-5
      SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade-up")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Técnicas e instrumentos de recolección de información para la gestión del riesgo de desastres

    .fondo-5.p-4.mb-5(data-aos="flip-right")
      .row.align-items-center.justify-content-evenly
        .col-lg-3.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_2/img_8.png', alt='Texto que describa la imagen')
        .col-lg-7
          p Para este efecto, las fuentes de información son instrumentos utilizados para la búsqueda, conocimiento y acceso a diferentes tipos de información, ya que la difusión de la misma, a través de internet, adquiere una importancia estratégica y es decisiva en la construcción de sociedades desarrolladas. Tienen como objetivo facilitar la identificación y localización de documentos que sean necesarios para el objeto de estudio.  


    p.mb-5(data-aos="flip-right") Dependiendo del grado o el nivel de la información que se proporciona, bien sea por la institución o el autor que la respalda, esta se puede dividir en diferentes fuentes, entre las principales se encuentra la fuente primaria, secundaria y terciaria. 

    .fondo-6.p-5(data-aos="flip-right")
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema_2/img_9.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-4(x="44%" y="12%" numero="+")
          p Fuentes de información primaria: este tipo de fuente contiene la información original, por lo que es llamada de primera mano, la cual ha sido el resultado de conceptos, ideas, teorías y resultados de diferentes investigaciones. En esta se obtiene la información directa, previa a ser interpretada o analizada por otra persona u entidad. Dentro de las principales fuentes de información primaria se puede encontrar los libros, monografías, publicaciones de periódicos, documentos oficiales o informes que provengan de instituciones privadas o públicas, al igual que tesis y trabajos que hayan sido presentados en seminarios o en conferencias, los videos documentales y los foros de investigación. 

        .tarjeta.color-acento-botones.p-4(x="18%" y="43%" numero="+")
          p Fuentes de información terciaria: este tipo de fuente son aquellas en la cual se hace una recopilación entre las fuentes de información primarias y secundarias, es por esto que se entiende como objetivo de la información terciaria hacer una depuración de dicha información y poder transmitirla al lector o investigador. Este tipo de información se encuentra en su mayoría en textos, enciclopedias o portales de internet. 
        .tarjeta.color-acento-botones.p-4(x="44%" y="74%" numero="+")
          p Fuentes de información secundaria: en estos tipos de fuentes se puede encontrar la información que ya ha sido procesada de una fuente primaria. Esta interpretación pudo ser realizada mediante un análisis el cual extrajo la información y la reorganizó teniendo en cuenta la información de primera mano. Dicho en otras palabras, el contenido que se expone en las fuentes secundarias tiene como objetivo indicar la fuente en las cuales se puede extraer esta información de una fuente primaria. 

    p.mb-5(data-aos="flip-right") Un instrumento de recolección de información es un recurso que utiliza el investigador para poder recolectar datos necesarios para el desarrollo de su proyecto investigativo.

    .tarjeta.bg_7.p-4.mb-5(data-aos="flip-right")
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Estos instrumentos tienen como función extraer los datos directos de los fenómenos sobre la población o lugar de interés que se desee investigar, otra característica de estos instrumentos es que son sistemáticos y organizados siendo de gran utilidad y fiabilidad de la información recolectada para su posterior análisis.         
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            p En toda investigación que se lleve a cabo, la información es lo más importante y valioso, y aquello de lo que dependen todas las conclusiones que se saquen en la investigación. Por eso, para poder llevar a cabo casi cualquier acción dentro de una empresa, contar con información suficiente y veraz es crucial para no equivocarse y poder tomar decisiones fundamentadas.        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Estos métodos de recolección de información facilitan que las organizaciones puedan cumplir las propuestas de desarrollo de sus actividades, evaluando los resultados y procesando los datos obtenidos para adelantarse a futuras tendencias y anticiparse a las probabilidades.      
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_12.png', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Estos métodos van desde las actas de incidencia o las evaluaciones realizadas al personal hasta las auditorías que se adelanten y que presenten procesos que permitan que la empresa avance y mejore su funcionamiento con cada información recolectada.     
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_13.png', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se presenta un video relacionado con las técnicas que existen para realizar la recolección de la información: 

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nS_6Z1WY1fU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Análisis y evaluación de datos para la gestión del riesgo de desastres

    p Además de la recolección de la información se hace necesario realizar análisis y evaluación de datos como se describe en este apartado.

    p.mb-5 La actividad de obtención y corroboración de la información se debe realizar a partir de la socialización con diversos actores.

    .tarjeta.bg_8.p-4.mb-5(data-aos="flip-right")
      SlyderA(tipo="b")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            p La socialización se realiza con los diversos funcionarios y representantes de cada administración departamental, del Consejo departamental de gestión del riesgo, de las corporaciones autónomas regionales, de las entidades estudiantiles como universidades y centros de investigación, de las juntas de acción comunal, del consejo territorial de planeación, de la comunidad que hace parte del área de estudio y demás interesados.  
        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_2/img_14.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Para validar la información es necesario establecer un equipo de trabajo y un cronograma específico para el grupo en el cual se pueda discutir y argumentar la calidad y pertinencia de la información, al final de las reuniones se debe obtener como producto un documento final en el cual se represente la información recolectada, con sus fuentes y argumentos científicos.         
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_2/img_15.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            p En todas las situaciones de emergencia o de atención a desastres la información es la materia prima con mayor importancia ya que es el insumo necesario para la toma de decisiones y brindar una respuesta oportuna, rápida y adecuada a las personas que fueron afectadas. Esta información recolectada será utilizada dentro del proceso de evaluación de daños y necesidades, facilitando la coordinación y la toma de decisiones dentro de las situaciones de emergencia.        
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_2/img_16.png', alt='Texto que describa la imagen')
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Por otro lado, los aspectos de comunicación pública y social y la relación con los medios de comunicación se han convertido en una variable esencial para la gestión eficiente de la emergencia. Se trata de escenarios de alta sensibilidad política y social en la cual la acción y la operación técnica deben venir acompañadas de buenas estrategias de comunicación e información pública, teniendo en cuenta a todos los actores participantes.       
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema_2/img_17.png', alt='Texto que describa la imagen')

    p Además de la socialización con diversos actores se describe a continuación otros elementos a considerar dentro del análisis y evaluación para la gestión del riesgo.

    p.mb-5 De acuerdo con lo expresado en el documento Gestión de la información y comunicación en emergencias y desastres (s.f.), algunos de los aspectos que se deben entender dentro del análisis y evaluación de datos para la gestión del riesgo se describen a continuación:

    SlyderC.mb-5(:datos="datosSlyder1")

    .tarjeta.bg_9.p-5.mb-5
      p.bg_9_txt A continuación, se presentan algunas pautas claves para la gestión de información:
      .row.align-items-center
        .col-lg-4
          img.img-a(src='@/assets/curso/temas/tema_2/img_22.png', alt='Texto que describa la imagen')
        .col-lg-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6").align-items-stretch.d-flex.h-100
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema_2/img_23.svg' alt='AvatarTop')
              .tarjeta.bg_4
                .p-4
                  p.mb-0 La comunicación y la gestión de la información no deben ser acciones aisladas sino parte de un proceso planificado de diseño y ejecución, vinculado a los planes y estrategias impulsados por las autoridades nacionales o por la OPS/OMS en estas situaciones.
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema_2/img_24.svg' alt='AvatarTop')
              .tarjeta.bg_4
                .p-4
                  p.mb-0 Además de cualificación y formación especializada, se requiere por parte del equipo actitud y comportamiento proactivo, transparente y participativo.

            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema_2/img_25.svg' alt='AvatarTop')
              .tarjeta.bg_4
                .p-4
                  p.mb-0 La gestión de la información y la comunicación son eficientes si son transversales a todos los procesos de respuesta a un desastre. Es decir, deben ser parte de todas las actividades que desarrollan los expertos y las organizaciones que trabajan en desastres.

            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema_2/img_26.svg' alt='AvatarTop')
              .tarjeta.bg_4
                .p-4
                  p.mb-0 Es muy importante que todos los miembros del Equipo de Respuestas trabajen coordinadamente. De esta manera, los comunicadores entenderán mejor el alcance y dinámica del desastre y los expertos en salud utilizarán la comunicación para mejorar el proceso de toma de decisiones y brindar una mejor respuesta.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3 Monitoreo y seguimiento de la gestión del riesgo de desastres     

    p En la gestión del riesgo de desastres es de vital importancia realizar un monitoreo y seguimiento riguroso frente a las decisiones y acciones que fueron tomadas con respecto a una emergencia o escenario de amenaza. Esto permitirá corroborar la efectividad de las medidas establecidas, midiendo de manera cualitativa y cuantitativa los resultados del plan de gestión de riesgo.  

    p.mb-5 Para realizar un plan de gestión de riesgos, es necesario aplicar las siguientes incógnitas:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema_2/img_27.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-4(x="20%" y="12%" numero="+")
        h4.text-center.mb-0 Diagnóstico.
      .tarjeta.color-acento-botones.p-4(x="16%" y="31%" numero="+")
        h4.text-center.mb-0 Objetivos.     
      .tarjeta.color-acento-botones.p-4(x="15%" y="69%" numero="+")
        h4.text-center.mb-0 Público meta.
      .tarjeta.color-acento-botones.p-4(x="21%" y="89%" numero="+")
        h4.text-center.mb-0 Estrategias, programa y herramientas.
      .tarjeta.color-acento-botones.p-4(x="78%" y="12%" numero="+")
        h4.text-center.mb-0 Cronograma de actividades.
      .tarjeta.color-acento-botones.p-4(x="84%" y="31%" numero="+")
        h4.text-center.mb-0 Responsables.    
      .tarjeta.color-acento-botones.p-4(x="84%" y="69%" numero="+")
        h4.text-center.mb-0 Recursos.
      .tarjeta.color-acento-botones.p-4(x="78%" y="89%" numero="+")
        h4.text-center.mb-0 Seguimiento y evaluación.

    .fondo-6.p-5
      p El seguimiento y la evaluación del plan de gestión del riesgo será lo que determinará la continuidad de los procesos adelantados o nuevas medidas que deberán ser adoptadas dentro del proceso, esto con el fin de dar una respuesta oportuna a las calamidades que puedan presentarse en el transcurso del tiempo.
      

      separador
      #t_2_4.titulo-segundo.color-acento-contenido.mt-5
        h2 2.4 Informe y comunicación del diagnóstico para la gestión del riesgo de desastres

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.bg_10.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_29.png')})`}"
          )
          .bloque-texto-g__texto.p-4.txt-g.bloque-g-txt
            p.mb-0 El diagnóstico realizado deberá ser comunicado a las entidades que harán parte del plan de gestión del riesgo, ya que, mediante este plan se podrá identificar, priorizar, formular, programar y hacer seguimiento a las acciones necesarias para el conocimiento y reducción de las condiciones de riesgo actuales y futuras, que sean derivadas de fenómenos ambientales o por acciones antrópicas que sean capaces de generar daños y pérdidas al entorno social. 

    p.mb-5 Los informes que se deben presentar, se clasifican de la siguiente manera:

    .tarjeta--container.row.mb-5(data-aos="slide-right")
      .col-md.tarjeta.color-secundario.p-5(data-aos="slide-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema_2/img_30.svg', alt='Texto que describa la imagen')
          
        h3.text-center Informes preliminares
        p.text-center Son los que se generan desde el inicio hasta 48 horas después de la emergencia. Se caracterizan porque son más breves y más sintéticos. Lo común es que durante esa etapa la información sea escasa, confusa, parcial e incompleta. 
      .col-md.tarjeta.bg_11.p-5(data-aos="slide-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/temas/tema_2/img_31.svg', alt='Texto que describa la imagen')
          
        h3.text-center.text-white Informes complementarios
        p.text-center.text-white Son posteriores a las primeras horas del desastre o la emergencia y explican la evolución de la situación. Este informe da mayor cobertura y detalle sobre las áreas técnicas (servicios de salud, vigilancia epidemiológica, agua y saneamiento) y geográficas (distinguiendo las más y las menos afectadas).

    p En sintonía con la información a comunicar se hace necesario destacar la interacción entre el conocimiento, reducción y manejo de riesgo de desastres.

    p.mb-5 A continuación, se presentan las interacciones entre el conocimiento, reducción, y manejo de riesgos de desastres:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_2/img_32.svg' alt='AvatarTop')
          .tarjeta.mog.w-100
            .p-4
              h4.text-center Proceso 1. Conocimiento del riesgo
              ul
                li
                  span.lista-ul__vineta Identificación y caracterización de escenarios de riesgo.
                li
                  span.lista-ul__vineta Comunicación del riesgo.
                li
                  span.lista-ul__vineta Monitoreo del riesgo.
                li
                  span.lista-ul__vineta Análisis y evaluación del riesgo.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_2/img_33.svg' alt='AvatarTop')
          .tarjeta.mog.w-100
            .p-4
              h4.text-center Proceso 2. Reducción del riesgo
              ul
                li
                  span.lista-ul__vineta Intervención prospectiva del riesgo.
                li
                  span.lista-ul__vineta Intervención correctiva del riesgo.


      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_2/img_34.svg' alt='AvatarTop')
          .tarjeta.mog.w-100
            .p-4
              h4.text-center Proceso 3. Manejo de desastres
              ul
                li
                  span.lista-ul__vineta Preparación para la respuesta.
                li
                  span.lista-ul__vineta Ejecución para la respuesta.
                li
                  span.lista-ul__vineta Preparación para la recuperación.
                li
                  span.lista-ul__vineta Ejecución para la recuperación.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'La recolección de información hace referencia a la identificación de datos básicos relacionados con las comunidades afectadas, que sirva para analizar el área de estudio en función de la gestión del riesgo.',
        imagen: require('@/assets/curso/temas/tema_2/img_3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Si es presentado otro plan sobre el área de estudio que no complete este criterio, la información suministrada será irrelevante para la formulación del plan. Esta información servirá para identificar y reconocer amenazas, junto con las vulnerabilidades del riesgo existente.',
        imagen: require('@/assets/curso/temas/tema_2/img_4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La información que logre ser recolectada se utilizará como instrumento que aporte a la toma de decisiones que sean en pro del desarrollo de la zona de estudio. Esta debe ser relevante y concisa, bien sea de manera cualitativa o cuantitativa, y obtenida a través de fuentes oficiales para garantizar la precisión de la información.',
        imagen: require('@/assets/curso/temas/tema_2/img_5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La validación, verificación y análisis de la información, se debe realizar teniendo en cuenta las diferentes características geográficas, socioeconómicas, biofísicas y ambientales, así como las relaciones que presentan con las principales amenazas y vulnerabilidades identificadas en el área de estudio.',
        imagen: require('@/assets/curso/temas/tema_2/img_6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder1: [
      {
        titulo: 'Circulación de información',
        texto:
          'En una emergencia la producción y circulación oportuna y transparente de información contribuye a generar confianza y credibilidad. Autoridades nacionales, organismos internacionales, organizaciones de acción humanitaria, población afectada y los medios de comunicación, son algunos de los actores que demandarán datos, cifras, informes y análisis de la situación o recomendaciones que orienten su trabajo y les permita transformar su interés y preocupación en acciones concretas.',
        imagen: require('@/assets/curso/temas/tema_2/img_18.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fuentes de información',
        texto:
          'La información en situaciones de emergencia o desastre surge de múltiples fuentes, representa diversos puntos de vista y atiende a un amplio abanico de intereses y necesidades. Sin duda, esto responde al carácter multidisciplinario de la respuesta a emergencias y desastres y al aumento del número de especialistas y organizaciones de diferentes áreas y disciplinas técnicas que intervienen en el campo humanitario.',
        imagen: require('@/assets/curso/temas/tema_2/img_19.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Participación de actores',
        texto:
          'La participación de actores nacionales e internacionales puede ser más sólida y responder mejor a sus desafíos, en la medida en que sus acciones en apoyo a la población estén sustentadas por información precisa, oportuna y pertinente, así como en una comunicación basada en canales e instrumentos de divulgación que faciliten la construcción de diálogos y alianzas.',
        imagen: require('@/assets/curso/temas/tema_2/img_20.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Expertos en comunicación',
        texto:
          'Los expertos en comunicación también tienen el desafío de mostrar cómo la comunicación y la gestión de la información contribuyen a una respuesta más eficiente y oportuna y por tanto, a salvar vidas, a disminuir el impacto de las emergencias y desastres y mejorar la calidad de vida de las personas afectadas. De igual forma, son elementos clave para movilizar recursos, motivar acciones de solidaridad y apoyo, incrementar la visibilidad y consolidar el posicionamiento de los actores humanitarios en general y del sector salud en particular.',
        imagen: require('@/assets/curso/temas/tema_2/img_21.png'),
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
