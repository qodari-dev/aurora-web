import type { LegalDocument } from "./types";

/**
 * Privacy and personal data processing policy (English).
 *
 * Translated from `privacy.es.ts`, which is the source document. When the
 * Spanish text changes, this file must be updated to match.
 *
 * NOTE: this is a translation for convenience, not a separately drafted legal
 * document. Consider adding a clause stating that the Spanish version
 * prevails in case of discrepancy — that wording has to come from whoever
 * drafted the original.
 */
export const privacyEn: LegalDocument = {
  title: "Privacy and personal data processing policy",
  updatedAt: "2026-08-17",
  intro: [
    "At Aurora Tecnologías S.A.S we understand that information is a fundamental part of the business processes we help automate. For that reason, we are committed to processing personal data responsibly, transparently and in accordance with applicable legislation.",
    "Aurora collects, uses, stores, protects and, where appropriate, shares personal information through its websites, platform, artificial intelligence agents and related services.",
  ],
  sections: [
    {
      title: "Data controller",
      content: [
        "The controller of the personal data collected through this website and through Aurora's services is Aurora Tecnologías.",
      ],
    },
    {
      title: "Information we collect",
      content: [
        "The information Aurora collects depends on how you interact with us and on the services you use.",
        { subtitle: "Visitors to our website" },
        "When you visit our website, we may collect technical and browsing information, such as:",
        [
          "IP address.",
          "Device type.",
          "Operating system.",
          "Browser.",
          "Language.",
          "Date and time of access.",
          "Pages visited.",
          "Information about interaction with our site.",
          "Cookies and similar technologies.",
        ],
        "This information may be used to maintain security, analyse how the site performs and improve the browsing experience.",
        { subtitle: "People who contact Aurora" },
        "If you request information, a demo, a meeting or otherwise contact our team, we may collect:",
        [
          "First and last name.",
          "Email address.",
          "Phone number.",
          "Company.",
          "Job title.",
          "Professional information.",
          "Information you voluntarily provide during a conversation or form.",
          "Information relating to the request made.",
        ],
        "We use this information to respond to requests, manage commercial opportunities, coordinate demos and maintain communication relating to our services.",
      ],
    },
    {
      title: "Information processed through Aurora's agents",
      content: [
        "Aurora allows companies to deploy artificial intelligence agents capable of conversing with their users, querying business information and executing certain processes. During these interactions, an agent may process information such as:",
        [
          "Name.",
          "Contact information.",
          "User identifiers.",
          "Information relating to requests or procedures.",
          "Conversation history.",
          "Information necessary to execute a process.",
          "Information obtained from connected business systems.",
          "Documents or content provided during the conversation.",
          "Any other information the user provides when interacting with the agent.",
        ],
        "The nature of this information will depend on the process each client has decided to automate.",
      ],
    },
    {
      title: "Aurora as data processor",
      content: [
        "In certain services, Aurora processes personal data on behalf of its business clients.",
        "For example, a company may use Aurora to deploy an agent that lets its customers look up information, submit a PQRS (petition, complaint or claim), complete a procedure or manage a request. In these cases, the company using Aurora may determine:",
        [
          "What information is processed.",
          "For what purpose it is used.",
          "Which users may interact with the agent.",
          "Which systems may be queried.",
          "What actions the agent may execute.",
          "How long certain information must be retained.",
        ],
        "In these scenarios, Aurora's client may act as data controller while Aurora acts as data processor, in accordance with the contractual relationship and applicable legislation.",
        "When you interact with an agent of a company that uses Aurora, that company may have its own privacy and data processing policy. We recommend consulting it to understand the specific conditions applicable to the processing of your data.",
      ],
    },
    {
      title: "Information sources used by the agents",
      content: [
        "Aurora's agents may query information from sources authorised by the client, including:",
        [
          "APIs.",
          "Databases.",
          "CRM.",
          "ERP.",
          "Internal systems.",
          "Document management systems.",
          "Documents.",
          "Knowledge bases.",
          "Internal manuals and policies.",
          "Other authorised business sources.",
        ],
        "Aurora may process, structure, index, query and transmit this information where necessary to provide the service.",
        "Where Aurora acts as data processor, the use of that information will be subject to the client's instructions and to the corresponding agreement.",
      ],
    },
    {
      title: "Purposes of processing",
      content: [
        "Depending on our relationship with you, we may use the information to:",
        [
          "Provide and administer our services.",
          "Operate our platform.",
          "Deploy and maintain artificial intelligence agents.",
          "Process conversations.",
          "Execute processes requested by users.",
          "Query information in authorised systems.",
          "Execute actions through authorised integrations.",
          "Respond to requests.",
          "Provide support.",
          "Manage accounts and clients.",
          "Schedule demos.",
          "Manage commercial opportunities.",
          "Improve the security and stability of our services.",
          "Detect and prevent fraudulent or unauthorised use.",
          "Carry out technical and statistical analysis.",
          "Comply with legal and contractual obligations.",
          "Handle claims and disputes.",
        ],
        "Where we use information for an additional purpose that requires authorisation, we will request the corresponding consent.",
      ],
    },
    {
      title: "Artificial intelligence",
      content: [
        "Aurora uses artificial intelligence technologies to allow its agents to understand requests, generate responses, query information and execute certain actions.",
        "Agents may use models and technology services provided by third parties.",
        "The information necessary to process a request may be sent to those technology providers where necessary to provide the service and in accordance with the applicable contractual conditions.",
        "Aurora endeavours to limit the information shared with external providers to that necessary to deliver the corresponding functionality.",
        "Artificial intelligence models may generate responses that are not entirely accurate. The use of artificial intelligence does not mean that Aurora makes business decisions on behalf of its clients, except where a feature has been expressly designed to execute a previously authorised action.",
      ],
    },
    {
      title: "Do we use data to train AI models?",
      content: [
        "Aurora will not use confidential information or personal data provided by a client to train third-party artificial intelligence models where such use has not been expressly authorised or is incompatible with the applicable contractual conditions.",
        "Where a specific service involves an additional purpose relating to the training, evaluation or improvement of models, that purpose will be disclosed and, where applicable, will be subject to the necessary authorisations.",
      ],
    },
    {
      title: "Technology providers",
      content: [
        "To operate Aurora we may use providers specialising in:",
        [
          "Infrastructure and cloud services.",
          "Artificial intelligence.",
          "Databases.",
          "Storage.",
          "Analytics.",
          "Security.",
          "Communications.",
          "Automation.",
          "Customer management.",
          "Payment processing.",
          "Other technology services necessary for operation.",
        ],
        "These providers may process information only where necessary to deliver the corresponding services and will be subject to security and confidentiality obligations.",
      ],
    },
    {
      title: "International transfer and transmission of data",
      content: [
        "Some technology providers used by Aurora may be located outside Colombia.",
        "Where it is necessary to transmit or transfer personal data to other countries, Aurora will adopt the measures and mechanisms required by applicable legislation.",
        "These measures may include contracts, data protection clauses, international transfer mechanisms or other legally recognised instruments.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Aurora may use cookies and similar technologies on its websites. These technologies may be used to:",
        [
          "Ensure the site works.",
          "Maintain security.",
          "Remember preferences.",
          "Analyse use of the site.",
          "Measure campaigns and communications.",
          "Improve our services.",
        ],
        "Strictly necessary cookies may be used where they are required to provide the requested functionality.",
        "For other categories of cookies, we will request consent where required by applicable legislation.",
        "Users can manage cookies through their browser settings or through the preference tools available on our website.",
      ],
    },
    {
      title: "Data retention",
      content: [
        "Aurora will retain personal data for the period necessary to fulfil the purposes for which it was collected, provide the services, comply with legal or contractual obligations, resolve disputes and exercise or defend rights.",
        "Where Aurora acts as data processor for a client, retention periods may be determined by the instructions and contractual conditions established with that client.",
        "Once the applicable retention period has ended, the data will be deleted, anonymised or handled in accordance with the corresponding legal and contractual obligations.",
      ],
    },
    {
      title: "Information security",
      content: [
        "Aurora implements reasonable technical, administrative and organisational measures intended to protect personal data against:",
        [
          "Unauthorised access.",
          "Loss.",
          "Alteration.",
          "Unauthorised disclosure.",
          "Destruction.",
          "Misuse.",
        ],
        "Security measures may include access controls, permission management, authentication mechanisms, monitoring, infrastructure protection and other security measures appropriate to the nature of the information processed.",
        "However, no system connected to the Internet can guarantee absolute security.",
      ],
    },
    {
      title: "Rights of data subjects",
      content: [
        "In accordance with applicable Colombian legislation, data subjects may exercise, among others, the following rights:",
        [
          "Know the personal data processed by Aurora.",
          "Request that their data be updated.",
          "Request rectification of incorrect or incomplete information.",
          "Request deletion of their data where applicable.",
          "Request information about the use of their data.",
          "Withdraw authorisation for processing where legally permitted.",
          "Submit queries and complaints relating to the processing of their data.",
          "Access their personal data free of charge, on the terms established by applicable legislation.",
        ],
        "Where Aurora acts as data processor, a request relating to data processed on behalf of a client may be forwarded to the corresponding controller, where required by applicable legislation or by the agreement entered into between the parties.",
      ],
    },
    {
      title: "How to exercise your rights",
      content: [
        "You can submit a query, request or complaint by sending an email to: hello@linkaurora.com",
        "The request must contain, as a minimum, information sufficient to identify the data subject and understand the request being made.",
        "Aurora may request additional information to verify the identity of the requester and protect personal data against unauthorised access.",
        "Requests will be handled within the periods established by applicable legislation.",
        "Where applicable, the data subject may approach the Superintendency of Industry and Commerce (SIC) to exercise the protection mechanisms established by Colombian legislation.",
      ],
    },
    {
      title: "Sensitive data",
      content: [
        "Some business processes may involve information that constitutes sensitive data under applicable legislation.",
        "Aurora will not deliberately request sensitive data through its website except where such data is necessary for a legitimate purpose and the corresponding legal basis exists.",
        "Where Aurora acts as data processor, the client will be responsible for determining the categories of data to be processed through its agents and for ensuring that it holds the necessary authorisations and legal bases.",
      ],
    },
    {
      title: "Data of minors",
      content: [
        "Aurora's business services are not directed at minors.",
        "Where a client uses Aurora to provide services to minors, it will be the client's responsibility to ensure compliance with the rules applicable to the processing of their data and to provide the corresponding instructions to Aurora.",
      ],
    },
    {
      title: "Third-party information",
      content: [
        "When you provide Aurora with another person's personal information, you represent that you hold the authorisation or legal basis necessary to provide that information and to permit its processing for the corresponding purpose.",
      ],
    },
    {
      title: "Links to third-party sites",
      content: [
        "Our website may contain links to third-party pages, platforms or services.",
        "Aurora does not control the privacy policies or data processing practices of these third parties.",
        "We recommend reviewing their respective policies before providing personal information.",
      ],
    },
    {
      title: "Changes to this Policy",
      content: [
        "Aurora may update this Privacy and Personal Data Processing Policy where necessary to reflect changes in our services, technologies, information processing practices or legal requirements.",
        "The current version will be available on our website and will indicate the date of its last update.",
        "Where changes are material and applicable legislation so requires, we may communicate those changes through the available channels.",
      ],
    },
    {
      title: "Contact",
      content: [
        "For questions relating to this Privacy and Personal Data Processing Policy, you can contact us at: hello@linkaurora.com",
      ],
    },
  ],
};
