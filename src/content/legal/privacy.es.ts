import type { LegalDocument } from "./types";

/**
 * Política de privacidad y tratamiento de datos personales (español).
 *
 * Texto legal: se transcribe literal del documento facilitado por el cliente.
 * No reescribir ni resumir al editar.
 *
 * La sección 15 usa el correo general (`hello@linkaurora.com`) como solución
 * temporal; el documento original preveía un buzón específico de privacidad.
 */
export const privacyEs: LegalDocument = {
  title: "Políticas de privacidad y tratamiento de datos personales",
  updatedAt: "2026-08-17",
  intro: [
    "En Aurora tecnologías S.A.S entendemos que la información es una parte fundamental de los procesos empresariales que ayudamos a automatizar. Por ello, nos comprometemos a tratar los datos personales de manera responsable, transparente y de conformidad con la legislación aplicable.",
    "Aurora recopila, utiliza, almacena, protege y, cuando corresponde, comparte información personal a través de sus sitios web, plataforma, agentes de inteligencia artificial y servicios relacionados.",
  ],
  sections: [
    {
      title: "Responsable del tratamiento",
      content: [
        "El responsable del tratamiento de los datos personales recopilados a través de esta página web y de los servicios de Aurora es Aurora Tecnologías.",
      ],
    },
    {
      title: "Información que recopilamos",
      content: [
        "La información que Aurora recopila depende de la forma en que interactúes con nosotros y de los servicios que utilices.",
        { subtitle: "Visitantes de nuestro sitio web" },
        "Cuando visitas nuestra página web, podemos recopilar información técnica y de navegación, como:",
        [
          "Dirección IP.",
          "Tipo de dispositivo.",
          "Sistema operativo.",
          "Navegador.",
          "Idioma.",
          "Fecha y hora de acceso.",
          "Páginas visitadas.",
          "Información sobre la interacción con nuestro sitio.",
          "Cookies y tecnologías similares.",
        ],
        "Esta información puede utilizarse para mantener la seguridad, analizar el funcionamiento del sitio y mejorar la experiencia de navegación.",
        { subtitle: "Personas que contactan a Aurora" },
        "Si solicitas información, una demostración, una reunión o estableces contacto con nuestro equipo, podemos recopilar:",
        [
          "Nombre y apellido.",
          "Correo electrónico.",
          "Número de teléfono.",
          "Empresa.",
          "Cargo.",
          "Información profesional.",
          "Información que proporciones voluntariamente durante una conversación o formulario.",
          "Información relacionada con la solicitud realizada.",
        ],
        "Utilizamos esta información para responder solicitudes, gestionar oportunidades comerciales, coordinar demostraciones y mantener la comunicación relacionada con nuestros servicios.",
      ],
    },
    {
      title: "Información procesada mediante los agentes de Aurora",
      content: [
        "Aurora permite a empresas desplegar agentes de inteligencia artificial capaces de conversar con sus usuarios, consultar información empresarial y ejecutar determinados procesos. Durante estas interacciones, un agente puede procesar información como:",
        [
          "Nombre.",
          "Información de contacto.",
          "Identificadores de usuario.",
          "Información relacionada con solicitudes o trámites.",
          "Historial de conversaciones.",
          "Información necesaria para ejecutar un proceso.",
          "Información obtenida de sistemas empresariales conectados.",
          "Documentos o contenidos proporcionados durante la conversación.",
          "Cualquier otra información que el usuario proporcione al interactuar con el agente.",
        ],
        "La naturaleza de esta información dependerá del proceso que cada cliente haya decidido automatizar.",
      ],
    },
    {
      title: "Aurora como encargado del tratamiento",
      content: [
        "En determinados servicios, Aurora procesa datos personales por cuenta de sus clientes empresariales.",
        "Por ejemplo, una empresa puede utilizar Aurora para desplegar un agente que permita a sus clientes consultar información, presentar una PQRS, realizar un trámite o gestionar una solicitud. En estos casos, la empresa que utiliza Aurora puede determinar:",
        [
          "Qué información se procesa.",
          "Para qué finalidad se utiliza.",
          "Qué usuarios pueden interactuar con el agente.",
          "Qué sistemas pueden ser consultados.",
          "Qué acciones puede ejecutar el agente.",
          "Cuánto tiempo debe conservarse determinada información.",
        ],
        "En estos escenarios, el cliente de Aurora puede actuar como responsable del tratamiento, mientras Aurora actúa como encargado del tratamiento, de acuerdo con la relación contractual y la legislación aplicable.",
        "Cuando interactúes con un agente de una empresa que utiliza Aurora, dicha empresa puede tener su propia política de privacidad y tratamiento de datos. Te recomendamos consultarla para conocer las condiciones específicas aplicables al tratamiento de tus datos.",
      ],
    },
    {
      title: "Fuentes de información utilizadas por los agentes",
      content: [
        "Los agentes de Aurora pueden consultar información proveniente de fuentes autorizadas por el cliente, incluyendo:",
        [
          "APIs.",
          "Bases de datos.",
          "CRM.",
          "ERP.",
          "Sistemas internos.",
          "Sistemas de gestión documental.",
          "Documentos.",
          "Bases de conocimiento.",
          "Manuales y políticas internas.",
          "Otras fuentes empresariales autorizadas.",
        ],
        "Aurora puede procesar, estructurar, indexar, consultar y transmitir esta información cuando sea necesario para proporcionar el servicio.",
        "Cuando Aurora actúe como encargado del tratamiento, el uso de dicha información estará sujeto a las instrucciones del cliente y al acuerdo correspondiente.",
      ],
    },
    {
      title: "Finalidades del tratamiento",
      content: [
        "Dependiendo de nuestra relación contigo, podemos utilizar la información para:",
        [
          "Prestar y administrar nuestros servicios.",
          "Operar nuestra plataforma.",
          "Desplegar y mantener agentes de inteligencia artificial.",
          "Procesar conversaciones.",
          "Ejecutar procesos solicitados por los usuarios.",
          "Consultar información en sistemas autorizados.",
          "Ejecutar acciones mediante integraciones autorizadas.",
          "Responder solicitudes.",
          "Proporcionar soporte.",
          "Gestionar cuentas y clientes.",
          "Programar demostraciones.",
          "Gestionar oportunidades comerciales.",
          "Mejorar la seguridad y estabilidad de nuestros servicios.",
          "Detectar y prevenir usos fraudulentos o no autorizados.",
          "Realizar análisis técnicos y estadísticos.",
          "Cumplir obligaciones legales y contractuales.",
          "Gestionar reclamaciones y controversias.",
        ],
        "Cuando utilicemos información para una finalidad adicional que requiera autorización, solicitaremos el consentimiento correspondiente.",
      ],
    },
    {
      title: "Inteligencia artificial",
      content: [
        "Aurora utiliza tecnologías de inteligencia artificial para permitir que sus agentes comprendan solicitudes, generen respuestas, consulten información y ejecuten determinadas acciones.",
        "Los agentes pueden utilizar modelos y servicios tecnológicos proporcionados por terceros.",
        "La información necesaria para procesar una solicitud puede ser enviada a dichos proveedores tecnológicos cuando sea necesario para prestar el servicio y de acuerdo con las condiciones contractuales aplicables.",
        "Aurora procura limitar la información compartida con proveedores externos a aquella necesaria para proporcionar la funcionalidad correspondiente.",
        "Los modelos de inteligencia artificial pueden generar respuestas que no sean completamente exactas. La utilización de inteligencia artificial no implica que Aurora tome decisiones empresariales por cuenta de sus clientes, salvo cuando una funcionalidad haya sido expresamente diseñada para ejecutar una acción previamente autorizada.",
      ],
    },
    {
      title: "¿Utilizamos los datos para entrenar modelos de IA?",
      content: [
        "Aurora no utilizará la información confidencial o los datos personales proporcionados por un cliente para entrenar modelos de inteligencia artificial de terceros cuando dicha utilización no haya sido expresamente autorizada o sea incompatible con las condiciones contractuales aplicables.",
        "Cuando un servicio específico implique una finalidad adicional relacionada con entrenamiento, evaluación o mejora de modelos, dicha finalidad será informada y, cuando corresponda, estará sujeta a las autorizaciones necesarias.",
      ],
    },
    {
      title: "Proveedores tecnológicos",
      content: [
        "Para operar Aurora podemos utilizar proveedores especializados en:",
        [
          "Infraestructura y servicios cloud.",
          "Inteligencia artificial.",
          "Bases de datos.",
          "Almacenamiento.",
          "Analítica.",
          "Seguridad.",
          "Comunicaciones.",
          "Automatización.",
          "Gestión de clientes.",
          "Procesamiento de pagos.",
          "Otros servicios tecnológicos necesarios para la operación.",
        ],
        "Estos proveedores podrán procesar información únicamente cuando sea necesario para prestar los servicios correspondientes y estarán sujetos a obligaciones de seguridad y confidencialidad.",
      ],
    },
    {
      title: "Transferencias y transmisión internacional de datos",
      content: [
        "Algunos proveedores tecnológicos utilizados por Aurora pueden encontrarse ubicados fuera de Colombia.",
        "Cuando sea necesario transmitir o transferir datos personales a otros países, Aurora adoptará las medidas y mecanismos exigidos por la legislación aplicable.",
        "Estas medidas podrán incluir contratos, cláusulas de protección de datos, mecanismos de transferencia internacional u otros instrumentos legalmente reconocidos.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Aurora puede utilizar cookies y tecnologías similares en sus sitios web. Estas tecnologías pueden utilizarse para:",
        [
          "Garantizar el funcionamiento del sitio.",
          "Mantener la seguridad.",
          "Recordar preferencias.",
          "Analizar el uso del sitio.",
          "Medir campañas y comunicaciones.",
          "Mejorar nuestros servicios.",
        ],
        "Las cookies estrictamente necesarias pueden utilizarse cuando sean necesarias para proporcionar el funcionamiento solicitado.",
        "Para otras categorías de cookies, solicitaremos consentimiento cuando sea requerido por la legislación aplicable.",
        "Los usuarios pueden gestionar las cookies mediante la configuración de su navegador o mediante las herramientas de preferencias disponibles en nuestro sitio web.",
      ],
    },
    {
      title: "Conservación de los datos",
      content: [
        "Aurora conservará los datos personales durante el período necesario para cumplir las finalidades para las cuales fueron recopilados, prestar los servicios, cumplir obligaciones legales o contractuales, resolver controversias y ejercer o defender derechos.",
        "Cuando Aurora actúe como encargado del tratamiento de un cliente, los períodos de conservación podrán estar determinados por las instrucciones y condiciones contractuales establecidas con dicho cliente.",
        "Una vez finalizado el período de conservación aplicable, los datos serán eliminados, anonimizados o tratados de acuerdo con las obligaciones legales y contractuales correspondientes.",
      ],
    },
    {
      title: "Seguridad de la información",
      content: [
        "Aurora implementa medidas técnicas, administrativas y organizativas razonables destinadas a proteger los datos personales contra:",
        [
          "Acceso no autorizado.",
          "Pérdida.",
          "Alteración.",
          "Divulgación no autorizada.",
          "Destrucción.",
          "Uso indebido.",
        ],
        "Las medidas de seguridad pueden incluir controles de acceso, gestión de permisos, mecanismos de autenticación, monitoreo, protección de infraestructura y otras medidas de seguridad adecuadas a la naturaleza de la información procesada.",
        "Sin embargo, ningún sistema conectado a Internet puede garantizar una seguridad absoluta.",
      ],
    },
    {
      title: "Derechos de los titulares",
      content: [
        "De acuerdo con la legislación colombiana aplicable, los titulares de datos personales podrán ejercer, entre otros, los siguientes derechos:",
        [
          "Conocer los datos personales tratados por Aurora.",
          "Solicitar la actualización de sus datos.",
          "Solicitar la rectificación de información incorrecta o incompleta.",
          "Solicitar la eliminación de sus datos cuando corresponda.",
          "Solicitar información sobre el uso de sus datos.",
          "Revocar la autorización para el tratamiento cuando sea legalmente procedente.",
          "Presentar consultas y reclamos relacionados con el tratamiento de sus datos.",
          "Acceder gratuitamente a sus datos personales, en los términos establecidos por la legislación aplicable.",
        ],
        "Cuando Aurora actúe como encargado del tratamiento, una solicitud relacionada con los datos procesados por cuenta de un cliente podrá ser remitida al responsable correspondiente, cuando así lo exija la legislación aplicable o el acuerdo celebrado entre las partes.",
      ],
    },
    {
      title: "¿Cómo ejercer tus derechos?",
      content: [
        "Puedes presentar una consulta, solicitud o reclamo enviando un correo a: hello@linkaurora.com",
        "La solicitud deberá contener, como mínimo, información suficiente para identificar al titular y comprender la solicitud realizada.",
        "Aurora podrá solicitar información adicional para verificar la identidad del solicitante y proteger los datos personales frente a accesos no autorizados.",
        "Las solicitudes serán atendidas dentro de los términos establecidos por la legislación aplicable.",
        "Cuando corresponda, el titular podrá acudir ante la Superintendencia de Industria y Comercio (SIC) para ejercer los mecanismos de protección establecidos por la legislación colombiana.",
      ],
    },
    {
      title: "Datos sensibles",
      content: [
        "Algunos procesos empresariales pueden involucrar información que tenga la naturaleza de dato sensible de acuerdo con la legislación aplicable.",
        "Aurora no solicitará deliberadamente datos sensibles a través de su sitio web salvo cuando sean necesarios para una finalidad legítima y exista la base jurídica correspondiente.",
        "Cuando Aurora actúe como encargado del tratamiento, el cliente será responsable de determinar las categorías de datos que serán procesadas mediante sus agentes y de garantizar que cuenta con las autorizaciones y bases legales necesarias.",
      ],
    },
    {
      title: "Datos de menores de edad",
      content: [
        "Los servicios empresariales de Aurora no están dirigidos directamente a menores de edad.",
        "Cuando un cliente utilice Aurora para prestar servicios a menores, será responsabilidad del cliente garantizar el cumplimiento de las normas aplicables al tratamiento de sus datos y proporcionar las instrucciones correspondientes a Aurora.",
      ],
    },
    {
      title: "Información de terceros",
      content: [
        "Cuando proporciones a Aurora información personal de otra persona, declaras que cuentas con la autorización o base legal necesaria para proporcionar dicha información y permitir su tratamiento para la finalidad correspondiente.",
      ],
    },
    {
      title: "Enlaces a sitios de terceros",
      content: [
        "Nuestro sitio web puede contener enlaces a páginas, plataformas o servicios de terceros.",
        "Aurora no controla las políticas de privacidad ni las prácticas de tratamiento de datos de estos terceros.",
        "Te recomendamos revisar sus respectivas políticas antes de proporcionar información personal.",
      ],
    },
    {
      title: "Cambios en esta Política",
      content: [
        "Aurora podrá actualizar esta Política de Privacidad y Tratamiento de Datos Personales cuando sea necesario para reflejar cambios en nuestros servicios, tecnologías, prácticas de tratamiento de información o requisitos legales.",
        "La versión vigente estará disponible en nuestro sitio web e indicará la fecha de su última actualización.",
        "Cuando los cambios sean sustanciales y la legislación aplicable así lo requiera, podremos comunicar dichos cambios mediante los canales disponibles.",
      ],
    },
    {
      title: "Contacto",
      content: [
        /* El documento original decía «Términos y Condiciones» por un error de
           copiado; corregido a petición del cliente. */
        "Para preguntas relacionadas con esta Política de Privacidad y Tratamiento de Datos Personales, puedes contactarnos a través de: hello@linkaurora.com",
      ],
    },
  ],
};
