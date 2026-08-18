import type { LegalDocument } from "./types";

/**
 * Terms and conditions (English).
 *
 * Translated from `terms.es.ts`, which is the source document. When the
 * Spanish text changes, this file must be updated to match.
 *
 * NOTE: this is a translation for convenience, not a separately drafted legal
 * document. Consider adding a clause stating that the Spanish version
 * prevails in case of discrepancy — that wording has to come from whoever
 * drafted the original.
 */
export const termsEn: LegalDocument = {
  title: "Terms and conditions",
  updatedAt: "2026-08-14",
  intro: [
    "These Terms and Conditions govern access to and use of Aurora, a business automation technology platform based on conversational artificial intelligence agents.",
    "By accessing, contracting or using Aurora's services, the client accepts these Terms and Conditions. Where a person uses Aurora on behalf of a company or organisation, they represent that they have the authority necessary to accept these terms on behalf of that entity.",
  ],
  sections: [
    {
      title: "What is Aurora?",
      content: [
        "Aurora is a business automation platform that allows organisations to design, configure, deploy and integrate conversational artificial intelligence agents capable of interacting with people, querying business information, using tools and executing processes within the systems authorised by the client. Aurora's agents may be used, among other purposes, for:",
        [
          "Customer service and support.",
          "Handling requests, petitions, complaints and claims (PQRS).",
          "Automation of procedures and processes.",
          "Information lookup and delivery.",
          "Collections management.",
          "Generation and delivery of documents.",
          "Communications management.",
          "Marketing and commercial management.",
          "Internal organisational processes.",
          "End-to-end automation of operations.",
        ],
        "The availability of each feature will depend on the configurations, integrations, services and conditions contracted by each client.",
      ],
    },
    {
      title: "Nature of the service",
      content: [
        "Aurora is not limited to providing a conversational interface. The platform may allow an agent to:",
        [
          "Understand a request made by a person.",
          "Query information available in the sources authorised by the client.",
          "Use connected tools or services.",
          "Execute actions in authorised business systems.",
          "Obtain the result of those actions.",
          "Communicate that result to the user through a conversation.",
        ],
        "Therefore, depending on the configuration contracted, an agent may carry out certain operations autonomously within the limits, permissions and rules defined for the corresponding process.",
      ],
    },
    {
      title: "Agent configuration and deployment",
      content: [
        "Aurora may configure artificial intelligence agents according to the client's needs. The configuration may include, among other elements:",
        [
          "The agent's objectives and functions.",
          "Instructions and behaviour rules.",
          "Knowledge sources.",
          "Business policies and procedures.",
          "Available tools.",
          "Systems it may interact with.",
          "Query and execution permissions.",
          "Conversation flows.",
          "Criteria for escalation to a person.",
          "Restrictions and security mechanisms.",
        ],
        "The scope and behaviour of each agent will depend on the configuration agreed between Aurora and the client.",
      ],
    },
    {
      title: "Knowledge sources and business information",
      content: [
        "To allow agents to respond and execute processes according to the needs of each organisation, Aurora may use information provided or authorised by the client. These sources may include:",
        [
          "Documents.",
          "Internal manuals and policies.",
          "Databases.",
          "Business systems.",
          "CRM.",
          "ERP.",
          "APIs.",
          "Internal services.",
          "Document management systems.",
          "Other information sources authorised by the client.",
        ],
        "Aurora may transform, structure, index, query or process that information in order to enable the operation of the agents created.",
        "The client is responsible for ensuring that the information provided is legitimate, relevant, sufficiently up to date and may be used for the purposes of the service.",
      ],
    },
    {
      title: "Responsibility for information provided by the client",
      content: [
        "The client retains responsibility for the information, documents, policies, instructions, business rules and other content it provides or authorises for use by Aurora.",
        "The client represents and warrants that it holds the rights, authorisations and legal bases necessary to provide such information and to permit its processing by Aurora and by the technology providers required to deliver the service.",
        "Aurora will not be liable for errors, omissions or consequences arising from information provided by the client that is incorrect, incomplete, inconsistent, out of date or that does not reflect the organisation's current policies or conditions.",
        "Where an information source is modified, the client must update it or allow Aurora to access the updated version where applicable.",
      ],
    },
    {
      title: "Integration with client systems",
      content: [
        "In order to provide certain services, Aurora may connect to the client's systems, applications, databases, APIs and other technology tools. The client must provide the authorisations, credentials, permissions, technical documentation and other elements necessary to carry out those integrations.",
        "Aurora's access will be limited to the scope necessary to provide the contracted services and to the permissions defined by the client.",
        "Aurora may use these integrations to query information and, where expressly authorised and configured, to execute actions in the corresponding systems.",
      ],
    },
    {
      title: "Actions executed by agents",
      content: [
        "Depending on the service contracted, an agent may execute actions on behalf of the client, such as querying information, creating requests, updating records, generating documents, sending communications, recording operations, generating links or performing other actions available through the configured integrations. The actions an agent may perform will be determined by:",
        [
          "The configured instructions.",
          "The available tools.",
          "The permissions granted.",
          "The business rules established.",
          "The integrations enabled.",
          "The scope of the service contracted.",
        ],
        "The client is responsible for validating that the authorised actions, permissions, business rules and execution conditions are appropriate for its processes. Aurora will not intentionally execute actions outside the scope configured for the agent, unless doing so is necessary to maintain, protect or administer the platform.",
      ],
    },
    {
      title: "Artificial Intelligence and technology providers",
      content: [
        "Aurora uses artificial intelligence technologies and may use models, APIs, infrastructure, processing services and other technologies provided by third parties. These providers may change over time according to technical, security, availability, performance or functionality criteria.",
        "Aurora may use different models or technologies for different functions according to the needs of the service.",
        "The use of these technologies does not mean that the client acquires rights over third-party models, infrastructure or services.",
        "Aurora will be responsible for the integration and operation of those components within its platform to the extent provided for in these Terms and in the corresponding commercial agreement.",
      ],
    },
    {
      title: "Responses generated by the AI Agent",
      content: [
        "Aurora configures agents so that, where applicable, they ground their responses in the information sources authorised by the client and in the tools available for each process.",
        "However, artificial intelligence systems may generate incorrect, incomplete, ambiguous or unexpected responses.",
        "For this reason, Aurora does not guarantee that all generated responses will always be accurate, complete or free of errors.",
        "The client acknowledges that the use of artificial intelligence requires controls and supervision appropriate to the nature and risk level of each process.",
        "Where a process requires human validation, the client may configure or request escalation mechanisms to a person, in accordance with the features available.",
      ],
    },
    {
      title: "Process automation",
      content: [
        "Aurora allows certain business processes to be automated through artificial intelligence agents.",
        "Automation does not mean that Aurora assumes responsibility for the client's business decisions.",
        "The client determines which processes it wishes to automate, which rules must apply, what information the agent may use, what actions it may execute and when a person must intervene.",
        "Aurora may recommend configurations or technical controls, but the final decision on the scope of automation rests with the client, unless the applicable contract expressly provides otherwise.",
      ],
    },
    {
      title: "Personal data",
      content: [
        "In the course of providing the services, Aurora may process personal data contained in the conversations, systems, documents, knowledge bases and integrations authorised by the client.",
        "Depending on the nature of the service, the client may act as data controller and Aurora as data processor.",
        "The parties must comply with applicable personal data protection legislation.",
        "The specific conditions relating to the processing of personal data are set out in the Personal Data Processing Policy and, where applicable, in the data processing agreement entered into with the client.",
      ],
    },
    {
      title: "Conversations and service channels",
      content: [
        "Aurora's agents may interact with users through different channels enabled by the client.",
        "Conversations may be processed, stored or recorded where necessary to provide the service, execute processes, maintain security, generate traceability, resolve incidents or comply with legal or contractual obligations.",
        "The client is responsible for informing its users, where applicable, about the use of artificial intelligence agents and about the processing of their personal data in accordance with applicable legislation.",
      ],
    },
    {
      title: "Security and permissions",
      content: [
        "Aurora will implement reasonable technical and organisational measures intended to protect the platform and the information processed through its services.",
        "Access permissions to client systems must be configured in accordance with the principle of least access necessary to perform the contracted functions.",
        "The client will be responsible for keeping its credentials, access, permissions and systems connected to Aurora under control.",
        "The client must promptly inform Aurora of any unauthorised access, vulnerability or incident that may affect the provision of the service.",
      ],
    },
    {
      title: "Third-party services and infrastructure",
      content: [
        "Aurora's operation may depend on services provided by third parties, including providers of:",
        [
          "Artificial intelligence models.",
          "Infrastructure and storage.",
          "Cloud services.",
          "Communications.",
          "APIs.",
          "Messaging channels.",
          "Analytics.",
          "Security.",
          "Payment processing.",
          "Other technology services.",
        ],
        "Aurora will endeavour to select providers appropriate for the delivery of its services, but does not fully control the availability, operation, modifications or conditions of those services.",
        "Aurora will not be liable for interruptions, modifications or failures originating exclusively in third-party services where these are outside its reasonable control.",
      ],
    },
    {
      title: "Service availability",
      content: [
        "Aurora will make reasonable efforts to maintain the availability and operation of the platform.",
        "However, the service may experience interruptions due to:",
        [
          "Maintenance.",
          "Updates.",
          "Infrastructure failures.",
          "Connectivity problems.",
          "Failures in the client's APIs or systems.",
          "Failures of external providers.",
          "Security incidents.",
          "Force majeure events.",
          "Other circumstances outside Aurora's reasonable control.",
        ],
        "Where applicable, availability levels, response times, support and recovery will be defined in the applicable contract or Service Level Agreement (SLA).",
      ],
    },
    {
      title: "Aurora's intellectual property",
      content: [
        "Aurora retains all intellectual property rights over its platform and its components, including, among others:",
        [
          "Software.",
          "Code.",
          "Technology architecture.",
          "Interfaces.",
          "Methodologies.",
          "Designs.",
          "Technical processes.",
          "Orchestration systems.",
          "Components developed by Aurora.",
          "Trade marks.",
          "Documentation.",
          "Materials and know-how.",
        ],
        "Access to or use of Aurora does not imply any transfer of intellectual property to the client.",
        "The client receives only the rights of use necessary to use the contracted services during the term of the commercial relationship.",
      ],
    },
    {
      title: "Client information and content",
      content: [
        "The client retains its rights over the documents, data, content, business information and other materials it provides to Aurora.",
        "The client authorises Aurora to use, reproduce, transform, process and transmit that content solely to the extent necessary to provide the contracted services, execute integrations, operate the agents and comply with the obligations arising from the contractual relationship.",
        "Aurora does not acquire ownership rights over the client's business information by virtue of processing it.",
      ],
    },
    {
      title: "Permitted use",
      content: [
        "The client undertakes to use Aurora in a lawful and responsible manner.",
        "It may not use the platform to:",
        [
          "Carry out fraudulent or unlawful activities.",
          "Obtain unauthorised access to systems or information.",
          "Infringe third-party rights.",
          "Fraudulently impersonate people or entities.",
          "Introduce malware, malicious code or other mechanisms that may affect the platform.",
          "Attempt to alter or breach security mechanisms.",
          "Use the agents for activities prohibited by applicable legislation.",
          "Use Aurora in a way that may deliberately affect the availability or operation of the platform.",
        ],
      ],
    },
    {
      title: "Client responsibilities",
      content: [
        "The client will be responsible for:",
        [
          "The information it provides to Aurora.",
          "The knowledge sources used by its agents.",
          "The rules and instructions it defines.",
          "The permissions granted to the agents.",
          "The systems it connects.",
          "The actions it authorises.",
          "The information it communicates to its users.",
          "Compliance with the legal obligations applicable to its processes.",
          "Supervision of processes that, by their nature, require human intervention.",
          "Keeping its information sources up to date.",
          "Holding the authorisations necessary for the processing of personal data.",
        ],
      ],
    },
    {
      title: "Aurora's responsibilities",
      content: [
        "Aurora will be responsible for providing and maintaining the platform in accordance with the conditions contracted and for implementing reasonable measures to ensure its security, operation and continuity.",
        "Aurora will endeavour to ensure that the agents operate in accordance with the configurations, instructions, integrations and information sources established for each service.",
        "Aurora will not be liable for outcomes arising from incorrect or out-of-date information provided by the client, incorrect instructions, configurations requested by the client, failures of external systems or circumstances outside its reasonable control.",
      ],
    },
    {
      title: "Limitation of liability",
      content: [
        "Aurora provides a technology tool to support and automate business processes.",
        "The client acknowledges that certain outcomes depend on factors that may be outside Aurora's direct control, including the information provided, the systems connected, the APIs, third-party services, the instructions configured and the operation of artificial intelligence models.",
        "Consequently, Aurora does not guarantee that the platform will produce perfect or uninterrupted results in all circumstances.",
        "Nothing in these Terms and Conditions will limit those liabilities that cannot be excluded or limited under applicable legislation.",
      ],
    },
    {
      title: "Plans, contracting and fees",
      content: [
        "The features, usage limits, implementation services, integrations, support, fees and other commercial conditions will be those set out in the corresponding commercial proposal, service order, contract or plan.",
        "Some features may be subject to consumption limits, number of users, number of conversations, processing volume, integrations or other criteria defined by Aurora.",
        "Additional services requested by the client may incur additional costs where so agreed between the parties.",
      ],
    },
    {
      title: "Service suspension",
      content: [
        "Aurora may temporarily suspend access to the platform where necessary to:",
        [
          "Protect the security of the platform.",
          "Prevent misuse.",
          "Address security incidents.",
          "Comply with a legal obligation.",
          "Perform maintenance.",
          "Address contractual breaches.",
          "Manage outstanding payment obligations.",
        ],
        "Where reasonably possible, Aurora will inform the client before carrying out a suspension, except where there is a security, legal or technical reason requiring immediate action.",
      ],
    },
    {
      title: "Termination",
      content: [
        "The contractual relationship may end in accordance with the conditions set out in the applicable contract, commercial proposal or service order.",
        "Termination of the service will not affect obligations that by their nature must remain in force, including those relating to confidentiality, intellectual property, data protection, outstanding payments and limitations of liability.",
      ],
    },
    {
      title: "Confidentiality",
      content: [
        "The parties undertake to protect the confidential information they receive during the provision of the services and to use it solely for purposes related to the contractual relationship.",
        "Where applicable, specific confidentiality obligations will be governed by a confidentiality agreement or by the corresponding clauses of the contract between the parties.",
      ],
    },
    {
      title: "Changes to these terms",
      content: [
        "Aurora may update these Terms and Conditions to reflect changes in its services, features, technologies, commercial practices or legal requirements.",
        "The current version will be available on this page and will indicate the date of its last update.",
        "Where legally required, Aurora will communicate material changes to clients through the registered contact channels.",
      ],
    },
    {
      title: "Governing law",
      content: [
        "These Terms and Conditions will be governed by the laws of the Republic of Colombia, unless the parties expressly agree on different legislation by means of a specific contract.",
        "Disputes arising from these terms will be submitted to the resolution mechanisms established in the corresponding contract and, in the absence of a specific provision, to the competent authorities of Colombia.",
      ],
    },
    {
      title: "Contact",
      content: [
        "For questions relating to these Terms and Conditions, you can contact us at: hello@linkaurora.com",
      ],
    },
  ],
};
