import type { LegalDocument } from "./types";

/**
 * Términos y condiciones (español).
 *
 * Texto legal: se transcribe literal del documento facilitado por el cliente.
 * No reescribir ni resumir al editar; los cambios de redacción deben venir de
 * quien lo redactó.
 *
 * TODO: confirmar `updatedAt` con la fecha real de la última revisión.
 */
export const termsEs: LegalDocument = {
  title: "Términos y condiciones",
  updatedAt: "2026-08-14",
  intro: [
    "Estos Términos y Condiciones regulan el acceso y uso de Aurora, una plataforma tecnológica de automatización empresarial basada en agentes de inteligencia artificial conversacional.",
    "Al acceder, contratar o utilizar los servicios de Aurora, el cliente acepta estos Términos y Condiciones. Cuando una persona utiliza Aurora en nombre de una empresa u organización, declara que cuenta con las facultades necesarias para aceptar estos términos en representación de dicha entidad.",
  ],
  sections: [
    {
      title: "¿Qué es Aurora?",
      content: [
        "Aurora es una plataforma de automatización empresarial que permite a las organizaciones diseñar, configurar, desplegar e integrar agentes conversacionales de inteligencia artificial capaces de interactuar con personas, consultar información empresarial, utilizar herramientas y ejecutar procesos dentro de los sistemas autorizados por el cliente. Los agentes de Aurora pueden utilizarse, entre otros, para:",
        [
          "Atención y soporte al cliente.",
          "Gestión de solicitudes, peticiones, quejas y reclamos (PQRS).",
          "Automatización de trámites y procesos.",
          "Consulta y entrega de información.",
          "Gestión de cobranzas.",
          "Generación y envío de documentos.",
          "Gestión de comunicaciones.",
          "Marketing y gestión comercial.",
          "Procesos internos de las organizaciones.",
          "Automatización de operaciones de extremo a extremo.",
        ],
        "La disponibilidad de cada funcionalidad dependerá de las configuraciones, integraciones, servicios y condiciones contratadas por cada cliente.",
      ],
    },
    {
      title: "Naturaleza del servicio",
      content: [
        "Aurora no se limita a proporcionar una interfaz conversacional. La plataforma puede permitir que un agente:",
        [
          "Comprenda una solicitud realizada por una persona.",
          "Consulte información disponible en las fuentes autorizadas por el cliente.",
          "Utilice herramientas o servicios conectados.",
          "Ejecute acciones en sistemas empresariales autorizados.",
          "Obtenga el resultado de dichas acciones.",
          "Comunique dicho resultado al usuario mediante una conversación.",
        ],
        "Por lo tanto, dependiendo de la configuración contratada, un agente puede realizar determinadas operaciones de manera autónoma dentro de los límites, permisos y reglas definidos para el proceso correspondiente.",
      ],
    },
    {
      title: "Configuración y despliegue de agentes",
      content: [
        "Aurora podrá configurar agentes de inteligencia artificial de acuerdo con las necesidades del cliente. La configuración podrá incluir, entre otros elementos:",
        [
          "Objetivos y funciones del agente.",
          "Instrucciones y reglas de comportamiento.",
          "Fuentes de conocimiento.",
          "Políticas y procedimientos empresariales.",
          "Herramientas disponibles.",
          "Sistemas con los que puede interactuar.",
          "Permisos de consulta y ejecución.",
          "Flujos de conversación.",
          "Criterios de escalamiento a una persona.",
          "Restricciones y mecanismos de seguridad.",
        ],
        "El alcance y comportamiento de cada agente dependerán de la configuración acordada entre Aurora y el cliente.",
      ],
    },
    {
      title: "Fuentes de conocimiento e información empresarial",
      content: [
        "Para permitir que los agentes respondan y ejecuten procesos de acuerdo con las necesidades de cada organización, Aurora podrá utilizar información proporcionada o autorizada por el cliente. Estas fuentes pueden incluir:",
        [
          "Documentos.",
          "Manuales y políticas internas.",
          "Bases de datos.",
          "Sistemas empresariales.",
          "CRM.",
          "ERP.",
          "APIs.",
          "Servicios internos.",
          "Sistemas de gestión documental.",
          "Otras fuentes de información autorizadas por el cliente.",
        ],
        "Aurora podrá transformar, estructurar, indexar, consultar o procesar dicha información para permitir el funcionamiento de los agentes creados.",
        "El cliente es responsable de garantizar que la información proporcionada sea legítima, pertinente, suficientemente actualizada y que pueda ser utilizada para las finalidades del servicio.",
      ],
    },
    {
      title:
        "Responsabilidad sobre la información proporcionada por el cliente",
      content: [
        "El cliente conserva la responsabilidad sobre la información, documentos, políticas, instrucciones, reglas de negocio y demás contenidos que proporcione o autorice para ser utilizados por Aurora.",
        "El cliente declara y garantiza que cuenta con los derechos, autorizaciones y bases legales necesarias para proporcionar dicha información y permitir su tratamiento por Aurora y por los proveedores tecnológicos necesarios para prestar el servicio.",
        "Aurora no será responsable por errores, omisiones o consecuencias derivadas de información que haya sido proporcionada por el cliente y que sea incorrecta, incompleta, inconsistente, desactualizada o que no refleje las políticas o condiciones vigentes de la organización.",
        "Cuando una fuente de información sea modificada, el cliente deberá actualizarla o permitir que Aurora acceda a la versión actualizada cuando corresponda.",
      ],
    },
    {
      title: "Integración con sistemas del cliente",
      content: [
        "Para prestar determinados servicios, Aurora podrá conectarse con sistemas, aplicaciones, bases de datos, APIs y otras herramientas tecnológicas del cliente. El cliente deberá proporcionar las autorizaciones, credenciales, permisos, documentación técnica y demás elementos necesarios para realizar dichas integraciones.",
        "El acceso de Aurora estará limitado al alcance necesario para prestar los servicios contratados y a los permisos definidos por el cliente.",
        "Aurora podrá utilizar estas integraciones para consultar información y, cuando haya sido expresamente autorizado y configurado, ejecutar acciones en los sistemas correspondientes.",
      ],
    },
    {
      title: "Acciones ejecutadas por los agentes",
      content: [
        "Dependiendo del servicio contratado, un agente podrá ejecutar acciones en nombre del cliente, tales como consultar información, crear solicitudes, actualizar registros, generar documentos, enviar comunicaciones, registrar operaciones, generar enlaces o realizar otras acciones disponibles mediante las integraciones configuradas. Las acciones que un agente pueda realizar estarán determinadas por:",
        [
          "Las instrucciones configuradas.",
          "Las herramientas disponibles.",
          "Los permisos otorgados.",
          "Las reglas de negocio establecidas.",
          "Las integraciones habilitadas.",
          "El alcance del servicio contratado.",
        ],
        "El cliente es responsable de validar que las acciones autorizadas, permisos, reglas de negocio y condiciones de ejecución sean apropiados para sus procesos. Aurora no ejecutará intencionalmente acciones fuera del alcance configurado para el agente, salvo que ello sea necesario para mantener, proteger o administrar la plataforma.",
      ],
    },
    {
      title: "Inteligencia Artificial y proveedores tecnológicos",
      content: [
        "Aurora utiliza tecnologías de inteligencia artificial y podrá utilizar modelos, APIs, infraestructura, servicios de procesamiento y otras tecnologías proporcionadas por terceros. Estos proveedores pueden cambiar con el tiempo de acuerdo con criterios técnicos, de seguridad, disponibilidad, rendimiento o funcionalidad.",
        "Aurora podrá utilizar diferentes modelos o tecnologías para distintas funciones de acuerdo con las necesidades del servicio.",
        "El uso de estas tecnologías no implica que el cliente adquiera derechos sobre los modelos, infraestructura o servicios de terceros.",
        "Aurora será responsable de la integración y operación de dichos componentes dentro de su plataforma en la medida prevista por estos Términos y por el acuerdo comercial correspondiente.",
      ],
    },
    {
      title: "Respuestas generadas por el Agente de IA",
      content: [
        "Aurora configura los agentes para que, cuando corresponda, fundamenten sus respuestas en las fuentes de información autorizadas por el cliente y en las herramientas disponibles para cada proceso.",
        "Sin embargo, los sistemas de inteligencia artificial pueden generar respuestas incorrectas, incompletas, ambiguas o inesperadas.",
        "Por esta razón, Aurora no garantiza que todas las respuestas generadas sean siempre exactas, completas o libres de errores.",
        "El cliente reconoce que la utilización de inteligencia artificial requiere controles y supervisión adecuados según la naturaleza y nivel de riesgo de cada proceso.",
        "Cuando un proceso requiera validación humana, el cliente podrá configurar o solicitar mecanismos de escalamiento a una persona, de acuerdo con las funcionalidades disponibles.",
      ],
    },
    {
      title: "Automatización de procesos",
      content: [
        "Aurora permite automatizar determinados procesos empresariales mediante agentes de inteligencia artificial.",
        "La automatización no significa que Aurora asuma la responsabilidad sobre las decisiones empresariales del cliente.",
        "El cliente determina qué procesos desea automatizar, qué reglas deben aplicar, qué información puede utilizar el agente, qué acciones puede ejecutar y cuándo debe intervenir una persona.",
        "Aurora podrá recomendar configuraciones o controles técnicos, pero la decisión final sobre el alcance de la automatización corresponde al cliente, salvo que el contrato aplicable establezca expresamente lo contrario.",
      ],
    },
    {
      title: "Datos personales",
      content: [
        "Durante la prestación de los servicios, Aurora podrá procesar datos personales contenidos en las conversaciones, sistemas, documentos, bases de conocimiento e integraciones autorizadas por el cliente.",
        "Dependiendo de la naturaleza del servicio, el cliente podrá actuar como responsable del tratamiento y Aurora como encargado del tratamiento.",
        "Las partes deberán cumplir con la legislación aplicable en materia de protección de datos personales.",
        "Las condiciones específicas relacionadas con el tratamiento de datos personales se encuentran en la Política de Tratamiento de Datos Personales y, cuando corresponda, en el acuerdo de tratamiento de datos celebrado con el cliente.",
      ],
    },
    {
      title: "Conversaciones y canales de atención",
      content: [
        "Los agentes de Aurora pueden interactuar con usuarios a través de diferentes canales habilitados por el cliente.",
        "Las conversaciones podrán ser procesadas, almacenadas o registradas cuando sea necesario para prestar el servicio, ejecutar procesos, mantener la seguridad, generar trazabilidad, resolver incidentes o cumplir obligaciones legales o contractuales.",
        "El cliente es responsable de informar a sus usuarios, cuando corresponda, sobre la utilización de agentes de inteligencia artificial y sobre el tratamiento de sus datos personales de acuerdo con la legislación aplicable.",
      ],
    },
    {
      title: "Seguridad y permisos",
      content: [
        "Aurora implementará medidas técnicas y organizativas razonables destinadas a proteger la plataforma y la información procesada mediante sus servicios.",
        "Los permisos de acceso a sistemas del cliente deberán configurarse de acuerdo con el principio de mínimo acceso necesario para ejecutar las funciones contratadas.",
        "El cliente será responsable de mantener bajo control sus credenciales, accesos, permisos y sistemas conectados a Aurora.",
        "El cliente deberá informar oportunamente a Aurora sobre cualquier acceso no autorizado, vulnerabilidad o incidente que pueda afectar la prestación del servicio.",
      ],
    },
    {
      title: "Servicios e infraestructura de terceros",
      content: [
        "El funcionamiento de Aurora puede depender de servicios proporcionados por terceros, incluyendo proveedores de:",
        [
          "Modelos de inteligencia artificial.",
          "Infraestructura y almacenamiento.",
          "Servicios de nube.",
          "Comunicaciones.",
          "APIs.",
          "Canales de mensajería.",
          "Analítica.",
          "Seguridad.",
          "Procesamiento de pagos.",
          "Otros servicios tecnológicos.",
        ],
        "Aurora procurará seleccionar proveedores adecuados para la prestación de sus servicios, pero no controla completamente la disponibilidad, funcionamiento, modificaciones o condiciones de dichos servicios.",
        "Aurora no será responsable por interrupciones, modificaciones o fallas originadas exclusivamente en servicios de terceros cuando estas se encuentren fuera de su control razonable.",
      ],
    },
    {
      title: "Disponibilidad del servicio",
      content: [
        "Aurora realizará esfuerzos razonables para mantener la disponibilidad y funcionamiento de la plataforma.",
        "Sin embargo, el servicio puede experimentar interrupciones debido a:",
        [
          "Mantenimiento.",
          "Actualizaciones.",
          "Fallas de infraestructura.",
          "Problemas de conectividad.",
          "Fallas en APIs o sistemas del cliente.",
          "Fallas de proveedores externos.",
          "Incidentes de seguridad.",
          "Eventos de fuerza mayor.",
          "Otras circunstancias fuera del control razonable de Aurora.",
        ],
        "Cuando corresponda, los niveles de disponibilidad, tiempos de respuesta, soporte y recuperación estarán definidos en el contrato o Acuerdo de Nivel de Servicio (SLA) aplicable.",
      ],
    },
    {
      title: "Propiedad intelectual de Aurora",
      content: [
        "Aurora conserva todos los derechos de propiedad intelectual sobre su plataforma y sus componentes, incluyendo, entre otros:",
        [
          "Software.",
          "Código.",
          "Arquitectura tecnológica.",
          "Interfaces.",
          "Metodologías.",
          "Diseños.",
          "Procesos técnicos.",
          "Sistemas de orquestación.",
          "Componentes desarrollados por Aurora.",
          "Marcas.",
          "Documentación.",
          "Materiales y know-how.",
        ],
        "El acceso o uso de Aurora no implica transferencia de propiedad intelectual al cliente.",
        "El cliente recibe únicamente los derechos de uso necesarios para utilizar los servicios contratados durante la vigencia de la relación comercial.",
      ],
    },
    {
      title: "Información y contenidos del cliente",
      content: [
        "El cliente conserva sus derechos sobre los documentos, datos, contenidos, información empresarial y demás materiales que proporcione a Aurora.",
        "El cliente autoriza a Aurora a utilizar, reproducir, transformar, procesar y transmitir dichos contenidos únicamente en la medida necesaria para prestar los servicios contratados, ejecutar integraciones, operar los agentes y cumplir las obligaciones derivadas de la relación contractual.",
        "Aurora no adquiere derechos de propiedad sobre la información empresarial del cliente por el hecho de procesarla.",
      ],
    },
    {
      title: "Uso permitido",
      content: [
        "El cliente se compromete a utilizar Aurora de manera legal y responsable.",
        "No podrá utilizar la plataforma para:",
        [
          "Realizar actividades fraudulentas o ilícitas.",
          "Obtener acceso no autorizado a sistemas o información.",
          "Vulnerar derechos de terceros.",
          "Suplantar personas o entidades de manera fraudulenta.",
          "Introducir malware, código malicioso u otros mecanismos que puedan afectar la plataforma.",
          "Intentar alterar o vulnerar los mecanismos de seguridad.",
          "Utilizar los agentes para actividades prohibidas por la legislación aplicable.",
          "Utilizar Aurora de manera que pueda afectar deliberadamente la disponibilidad o funcionamiento de la plataforma.",
        ],
      ],
    },
    {
      title: "Responsabilidades del cliente",
      content: [
        "El cliente será responsable de:",
        [
          "La información que proporcione a Aurora.",
          "Las fuentes de conocimiento utilizadas por sus agentes.",
          "Las reglas e instrucciones que defina.",
          "Los permisos otorgados a los agentes.",
          "Los sistemas que conecte.",
          "Las acciones que autorice.",
          "La información que comunique a sus usuarios.",
          "El cumplimiento de las obligaciones legales aplicables a sus procesos.",
          "La supervisión de los procesos que, por su naturaleza, requieran intervención humana.",
          "Mantener actualizadas sus fuentes de información.",
          "Contar con las autorizaciones necesarias para el tratamiento de datos personales.",
        ],
      ],
    },
    {
      title: "Responsabilidades de Aurora",
      content: [
        "Aurora será responsable de proporcionar y mantener la plataforma de acuerdo con las condiciones contratadas y de implementar medidas razonables para garantizar su seguridad, funcionamiento y continuidad.",
        "Aurora procurará que los agentes funcionen de acuerdo con las configuraciones, instrucciones, integraciones y fuentes de información establecidas para cada servicio.",
        "Aurora no será responsable por resultados derivados de información incorrecta o desactualizada proporcionada por el cliente, instrucciones incorrectas, configuraciones solicitadas por el cliente, fallas de sistemas externos o circunstancias fuera de su control razonable.",
      ],
    },
    {
      title: "Limitación de responsabilidad",
      content: [
        "Aurora proporciona una herramienta tecnológica para apoyar y automatizar procesos empresariales.",
        "El cliente reconoce que determinados resultados dependen de factores que pueden encontrarse fuera del control directo de Aurora, incluyendo la información proporcionada, los sistemas conectados, las APIs, los servicios de terceros, las instrucciones configuradas y el funcionamiento de modelos de inteligencia artificial.",
        "En consecuencia, Aurora no garantiza que la plataforma produzca resultados perfectos o ininterrumpidos en todas las circunstancias.",
        "Nada de estos Términos y Condiciones limitará aquellas responsabilidades que no puedan ser excluidas o limitadas conforme a la legislación aplicable.",
      ],
    },
    {
      title: "Planes, contratación y tarifas",
      content: [
        "Las funcionalidades, límites de uso, servicios de implementación, integraciones, soporte, tarifas y demás condiciones comerciales serán las establecidas en la propuesta comercial, orden de servicio, contrato o plan correspondiente.",
        "Algunas funcionalidades pueden estar sujetas a límites de consumo, número de usuarios, número de conversaciones, volumen de procesamiento, integraciones u otros criterios definidos por Aurora.",
        "Los servicios adicionales solicitados por el cliente podrán generar costos adicionales cuando así se acuerde entre las partes.",
      ],
    },
    {
      title: "Suspensión del servicio",
      content: [
        "Aurora podrá suspender temporalmente el acceso a la plataforma cuando sea necesario para:",
        [
          "Proteger la seguridad de la plataforma.",
          "Prevenir usos indebidos.",
          "Atender incidentes de seguridad.",
          "Cumplir una obligación legal.",
          "Realizar mantenimiento.",
          "Atender incumplimientos contractuales.",
          "Gestionar obligaciones de pago pendientes.",
        ],
        "Cuando sea razonablemente posible, Aurora informará al cliente antes de realizar una suspensión, excepto cuando exista una razón de seguridad, legal o técnica que requiera una acción inmediata.",
      ],
    },
    {
      title: "Terminación",
      content: [
        "La relación contractual podrá terminar de acuerdo con las condiciones establecidas en el contrato, propuesta comercial u orden de servicio aplicable.",
        "La terminación del servicio no afectará las obligaciones que por su naturaleza deban permanecer vigentes, incluyendo aquellas relacionadas con confidencialidad, propiedad intelectual, protección de datos, pagos pendientes y limitaciones de responsabilidad.",
      ],
    },
    {
      title: "Confidencialidad",
      content: [
        "Las partes se comprometen a proteger la información confidencial que reciban durante la prestación de los servicios y a utilizarla únicamente para las finalidades relacionadas con la relación contractual.",
        "Cuando corresponda, las obligaciones específicas de confidencialidad estarán reguladas mediante un acuerdo de confidencialidad o mediante las cláusulas correspondientes del contrato entre las partes.",
      ],
    },
    {
      title: "Modificaciones de estos términos",
      content: [
        "Aurora podrá actualizar estos Términos y Condiciones para reflejar cambios en sus servicios, funcionalidades, tecnologías, prácticas comerciales o requisitos legales.",
        "La versión vigente estará disponible en esta página e indicará la fecha de su última actualización.",
        "Cuando corresponda legalmente, Aurora comunicará los cambios sustanciales a los clientes mediante los canales de contacto registrados.",
      ],
    },
    {
      title: "Legislación aplicable",
      content: [
        "Estos Términos y Condiciones se regirán por las leyes de la República de Colombia, salvo que las partes acuerden expresamente una legislación diferente mediante un contrato específico.",
        "Las controversias derivadas de estos términos serán sometidas a los mecanismos de solución establecidos en el contrato correspondiente y, en ausencia de una disposición específica, a las autoridades competentes de Colombia.",
      ],
    },
    {
      title: "Contacto",
      content: [
        "Para preguntas relacionadas con estos Términos y Condiciones, puedes contactarnos a través de: hello@linkaurora.com",
      ],
    },
  ],
};
