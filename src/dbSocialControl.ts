import { TextbookRAGEntry } from './sociologyRAG';

export const socialControlDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Formal vs Informal Social Control": {
    theorists: ["Louis Althusser", "Emile Durkheim", "Antonio Gramsci", "Michel Foucault", "Sylvia Walby", "Stanley Cohen"],
    keyTerms: {
      "Formal Social Control": "Social regulation enforced by official, state-authorised agencies (police, courts, prisons) through codified written laws.",
      "Informal Social Control": "Diffuse, unwritten, and micro-level peer pressure and community regulations (ridicule, gossip, and praising) enforcing conformity.",
      "Hegemony": "Gramsci's concept of ruling-class ideological domination achieved by gaining consent rather than using military force.",
      "Disciplinary Power": "Foucault's term for the modern mechanism of control, characterized by constant surveillance, self-policing, and institutional routines.",
      "Panopticon": "Foucault's metaphor for modern surveillance, where individuals are kept under the constant threat of observation, forcing them to self-regulate.",
      "Repressive State Apparatus": "Althusser's term for state structures that use physical coercion (police, military, courts) to enforce class compliance."
    },
    collinsFocus: "Details how socialisation acts as the primary form of civil social control by establishing an inner 'conscience'. Contrasts formal legal agencies with informal primary structures like the family and peer group.",
    cupFocus: "Integrates Althusser's distinction between RSAs and ISAs. Explores control by consent (Gramsci) and Foucault's disciplinary surveillance, showing how power operates through medical, educational, and penal discourses.",
    evaluationPoints: [
      "Coercive formal control often prompts massive resistance and civil unrest, making control by consent (hegemony) much more stable for elites.",
      "Feminists like Sylvia Walby argue that informal social control within the domestic sphere (fear of violence, household routines) is designed to subordinate women to male authority.",
      "Interactionists argue that labels of deviance are highly contested, and over-policing by formal agencies can lead to deviancy amplification.",
      "Foucault is criticized by Marxists for presenting surveillance as an all-powerful force, ignoring how working-class organizations actively resist state surveillance."
    ],
    keyStudies: [
      {
        researcher: "Michel Foucault (1975)",
        study: "Discipline and Punish: The Birth of the Prison",
        method: "Historical analysis of public torture records, architectural blueprints, and institutional rules.",
        findings: "Traced the shift from spectacular physical punishments (monarch's power over bodies) to psychological disciplinary power (the state's control of minds via surveillance, timetables, and isolation), demonstrating how modern institutions create docile bodies."
      }
    ],
    contemporaryExamples: [
      "The use of facial recognition technology and CCTV cameras in public transport networks globally, which Foucaultian theorists describe as a digital Panopticon.",
      "Informal community shaming on social media platforms (cancel culture), where diffuse peer networks enforce social conformity through public humiliation and exclusion."
    ],
    commonMisconceptions: [
      "Assuming formal social control is the main way order is kept, ignoring that informal social control via daily interactions is far more pervasive.",
      "Believing Foucault's Panopticon is solely an architectural prison design, rather than a metaphor for how surveillance is internalized in modern schools, hospitals, and workplaces."
    ],
    synopticLinks: [
      "Links to Theory (Marxism vs Poststructuralism on the state).",
      "Links to Methods (the ethics of studying secret state surveillance systems)."
    ],
    keyStatistics: [
      "A UK Home Office study indicated that while CCTV reduces crime in car parks by 51%, it has zero effect on violent public offenses, suggesting modern surveillance is better at protecting property than citizens (Home Office, 2005)."
    ],
    essayArguments: {
      for: [
        "Social order is maintained through the internalisation of informal controls — Emile Durkheim — the collective conscience acts as a self-policing moral force.",
        "Formal control is a coercive weapon used by the ruling class to suppress dissent — Karl Marx — legal codes protect private property and class exploitation."
      ],
      against: [
        "Control is not top-down but capillary and embedded in scientific discourses — Michel Foucault — modern power operates through institutions that define what is 'normal'.",
        "Informal social control operates primarily to police gender compliance — Sylvia Walby — patriarchal structures restrict women's freedom in public and private spaces."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Michel Foucault",
        quote: "He who is subjected to a field of visibility, and who knows it, assumes responsibility for the constraints of power."
      }
    ]
  },
  "Conformity and Deviance": {
    theorists: ["Robert K. Merton", "Albert Cohen", "Howard S. Becker", "Erving Goffman", "Edwin Lemert", "David Matza"],
    keyTerms: {
      "Conformity": "Behavior that complies with socially accepted standards, rules, laws, and group expectations.",
      "Deviance": "Behavior that violates the core norms and values of a society or group, resulting in social disapproval.",
      "Strain Theory": "Merton's argument that deviance occurs when there is an imbalance between cultural goals and institutionalized means.",
      "Labeling Theory": "Becker's interactionist approach holding that deviance is not a quality of the act, but a consequence of the application of rules by others.",
      "Primary Deviance": "Lemert's term for minor, occasional deviant acts that do not affect an individual's core self-concept.",
      "Secondary Deviance": "Lemert's term for deviance that is a response to the societal labeling and stigmatization of a primary act, leading to a deviant career.",
      "Master Status": "A status or label (e.g., 'criminal', 'madman') that overrides all other identities, defining how society perceives and treats the individual."
    },
    collinsFocus: "Analyses Merton's Strain Theory, detailing how a gap between cultural goals (e.g., American Dream) and institutionalised means creates structural pressure for deviance.",
    cupFocus: "Outlines Becker's labelling perspective on deviance, showing how moral entrepreneurs define rules, and how being labeled leads to secondary deviance, a deviant career, and a master status.",
    evaluationPoints: [
      "Merton over-emphasises working-class crime, failing to explain white-collar crimes committed by those who already have material success.",
      "Labelling theory is criticised for being highly deterministic, assuming anyone who is labeled will naturally drift into a life of crime, ignoring their ability to reject labels.",
      "Subcultural theories (like Albert Cohen's status frustration) explain collective youth deviance far better than individual-focused strain theories.",
      "David Matza argues that most delinquents do not have deeply deviant values, but 'drift' in and out of deviance, using techniques of neutralization to justify their acts."
    ],
    keyStudies: [
      {
        researcher: "Edwin Lemert (1951)",
        study: "Social Pathology",
        method: "Observational case studies of deviant subcultures, including check-forgers and stutterers.",
        findings: "Discovered the distinction between primary and secondary deviance, proving that it is not the initial deviant act that creates the deviant identity, but rather the heavy-handed social reaction and stigmatization by authority."
      }
    ],
    contemporaryExamples: [
      "The criminalization of climate activists blockading roads, where the media applies the 'eco-terrorist' label, potentially creating a self-fulfilling prophecy of radicalization.",
      "The labeling of neurodivergent children in modern schools, where a diagnosis of ADHD can become a master status, shaping teacher expectations and child behavior."
    ],
    commonMisconceptions: [
      "Assuming deviance is always illegal; many deviant acts (like extreme facial tattooing) are completely legal but heavily stigmatized.",
      "Believing that labeling theorists want to ignore crime; they want to show how policing can inadvertently amplify and increase crime rates."
    ],
    synopticLinks: [
      "Links to Education (labelling in the classroom, self-fulfilling prophecy, and setting).",
      "Links to Methods (the ethics and validity of unstructured interviews with criminals)."
    ],
    keyStatistics: [
      "A study found that 62% of children excluded from UK schools ended up in prison, reflecting how early labeling can accelerate a secondary deviant career (Ministry of Justice, 2018)."
    ],
    essayArguments: {
      for: [
        "Deviance is a structural reaction to the blocked opportunities of capitalism — Robert K. Merton — strain leads to innovation, rebellion, or retreatism.",
        "Deviance is socially constructed through the power of labeling — Howard S. Becker — powerful agents create deviance by making the rules and applying them."
      ],
      against: [
        "Strain theory fails to explain why women commit far fewer crimes despite facing greater blocked opportunities — Feminist critics — gender socialization prevents deviance.",
        "Labeling theory ignores the real, objective causes of crime, portraying the criminal as a passive victim of the state — Left Realist critics — crime has objective social roots."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Howard S. Becker",
        quote: "Social groups create deviance by making the rules whose infraction constitutes deviance, and by applying those rules to particular people and labeling them as outsiders."
      }
    ]
  },
  "Sanctions and Rewards": {
    theorists: ["B.F. Skinner", "Talcott Parsons", "Linda Molm", "Richard Thaler", "Erving Goffman"],
    keyTerms: {
      "Positive Sanctions": "Rewards (such as praise, high grades, bonuses, and prestige) given to encourage conformist behavior.",
      "Negative Sanctions": "Punishments (such as fines, detention, social exclusion, or imprisonment) used to deter non-conformity.",
      "Sanctioning Power": "The capacity of a social actor or institution to administer rewards and punishments to control others.",
      "Stigmatisation": "The process of spoiling an individual's social identity by applying a deeply discrediting label as a negative sanction.",
      "Nudge Theory": "Thaler's concept of designing choices in public spaces to subtly encourage conformist behavior without explicit coercion."
    },
    collinsFocus: "Explains how the school and the family allocate rewards and punishments to guide child development. This internalises rules as moral imperatives during early socialization.",
    cupFocus: "Analyses Linda Molm's research on coercion and rewards. Discusses how unequal power dynamics in relationships influence who is subjected to structural negative sanctions.",
    evaluationPoints: [
      "Sanctions are only effective if they are perceived as legitimate; unjust sanctions often trigger rebellion, strikes, or active resistance.",
      "The effectiveness of informal sanctions has declined in fluid, highly individualised postmodern communities where social shame is easily bypassed.",
      "Rewards are often distributed unfairly based on class, race, or gender prejudice rather than pure merit, undermining the consensus model of role allocation.",
      "Behaviorist rewards (Skinner) are criticized for treating humans like animals, ignoring how we cognitively reflect on and interpret sanctions."
    ],
    keyStudies: [
      {
        researcher: "Linda Molm (1997)",
        study: "Coercive Power in Social Exchange",
        method: "Controlled laboratory experiments measuring resource exchanges and power use.",
        findings: "Discovered that while reward power is highly effective at building trust and commitment, coercive negative sanctions often destroy trust and trigger subtle resistance, even when the coercive agent is highly powerful."
      }
    ],
    contemporaryExamples: [
      "The 'credit score' systems used by financial institutions, which act as a powerful formal negative sanction, restricting housing and employment opportunities for the poor.",
      "Corporate incentive schemes (bonuses, employee of the month awards) designed as positive sanctions to increase labor productivity and corporate loyalty."
    ],
    commonMisconceptions: [
      "Believing that negative sanctions (punishments) are always more effective than positive sanctions (rewards) at maintaining long-term social order.",
      "Assuming that schools allocate grades purely as meritocratic rewards, ignoring how grades act as a mechanism of class sorting."
    ],
    synopticLinks: [
      "Links to Education (meritocracy, praise as motivation, and class bias in sanctions).",
      "Links to Family (parenting styles, and gendered rewards in child development)."
    ],
    keyStatistics: [
      "A survey of modern organizations indicated that positive recognition programs improve employee retention by 31%, compared to organizations relying on performance monitoring and warnings (Gallup, 2021)."
    ],
    essayArguments: {
      for: [
        "Sanctions and rewards are essential to maintain value consensus and allocate roles — Talcott Parsons — society must reward the most talented to secure structural fit.",
        "Sanctions are used to force the working class to accept capitalist norms — Marxist critics — legal and workplace punishments enforce compliance."
      ],
      against: [
        "Coercive sanctions destroy social solidarity and trigger passive resistance — Linda Molm — coercion is a fragile and unstable source of social power.",
        "Sanctions are highly subjective and reflect the biases of moral entrepreneurs — Howard S. Becker — powerful groups decide what to punish and what to reward."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Talcott Parsons",
        quote: "The stabilization of the social system depends on the coordination of expectations and the distribution of positive and negative sanctions."
      }
    ]
  },
  "Resistance to Social Control": {
    theorists: ["Paul Willis", "Stuart Hall", "Dick Hebdige", "Ester Morgan", "Angela McRobbie", "Antonio Gramsci"],
    keyTerms: {
      "Subcultural Resistance": "The adoption of alternative styles, values, and language by a youth group to resist dominant cultural norms.",
      "Crisis of Hegemony": "Stuart Hall's term for a period where the ruling class struggles to maintain its political and ideological leadership, triggering state coercion.",
      "Counter-School Culture": "Paul Willis's term for the working-class boys' subculture that actively rejected the educational ideology of the school.",
      "Bricolage": "Hebdige's concept of taking everyday mass-produced objects (e.g., safety pins) and rearranging them to create a subversive, resistant style.",
      "Cultural Co-optation": "The process where capitalist businesses take radical, resistant subcultures and package them into mass-market consumer products, neutralizing their threat."
    },
    collinsFocus: "Focuses on how marginalized youth subcultures challenge formal institutions. Details how style and dress act as coded forms of structural resistance against class subordination.",
    cupFocus: "Highlights Paul Willis's 'lads' who actively resisted school authority, and Stuart Hall's analysis of how youth crime was blamed in moral panics to restore ruling class hegemonies.",
    evaluationPoints: [
      "Radical resistance is often co-opted and commercialised by capitalist media (e.g., punk style turned into high fashion), neutralizing its political power.",
      "Willis is criticised for romanticizing anti-social behavior, ignoring how the lads' sexism and racism severely disadvantaged other pupils.",
      "Postmodernists argue that youth styles are now based on transient consumer play rather than genuine political resistance, making subcultures politically meaningless.",
      "Feminists like Angela McRobbie argue that Marxist subcultural theories are male-centric, ignoring girls' resistance which occurs in domestic spaces ('bedroom culture')."
    ],
    keyStudies: [
      {
        researcher: "Paul Willis (1977)",
        study: "Learning to Labour",
        method: "Qualitative ethnography, participant observation, and unstructured interviews in a school in the English Midlands.",
        findings: "Revealed that working-class boys developed a counter-school culture ('having a laff', resisting teachers), but this resistance was ironical: it prepared them perfectly for boring, manual shop-floor work, ensuring the reproduction of the capitalist labor force."
      }
    ],
    contemporaryExamples: [
      "The 'Hijra' community in South Asia, who resist patriarchal gender binaries by establishing a distinct third-gender social structure, language, and cultural rituals.",
      "The use of encryption software and decentralized messaging apps by global activist groups to resist state surveillance and corporate data mining."
    ],
    commonMisconceptions: [
      "Assuming that resistance always leads to liberation; Willis proved that resistance can actually lock individuals into their own exploitation.",
      "Believing that subcultural styles (e.g., punk, hip-hop) remain pure symbols of rebellion, ignoring how capitalism quickly co-opts and sanitizes them."
    ],
    synopticLinks: [
      "Links to Education (subcultures, and the replication of the class structure).",
      "Links to Theory (humanist Marxism vs structural determinism)."
    ],
    keyStatistics: [
      "Willis followed 12 working-class 'lads' and found that 100% of them entered manual, low-paid industrial jobs immediately upon leaving school, proving the reproduction of labor (Willis, 1977)."
    ],
    essayArguments: {
      for: [
        "Working-class youths develop counter-cultures to resist educational and economic exploitation — Paul Willis — resistance is a response to class structures.",
        "Style acts as a coded, symbolic form of resistance to capitalist hegemony — Dick Hebdige — subcultural bricolage is a political statement."
      ],
      against: [
        "Resistance is a romanticized myth; subcultures are just consumer lifestyles — Postmodernist critics — style is about play and leisure, not class war.",
        "Traditional subcultural theories ignore female-specific forms of resistance — Angela McRobbie — resistance can occur outside the male-dominated public streets."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Paul Willis",
        quote: "The difficult thing to explain... is not why working-class kids get working-class jobs, but how they let themselves be guided there."
      }
    ]
  },
  "Power and Authority": {
    theorists: ["Max Weber", "Steven Lukes", "Michel Foucault", "Karl Marx", "Nicos Poulantzas"],
    keyTerms: {
      "Power": "The ability of an individual or group to achieve their goals and impose their will on others, even against resistance.",
      "Authority": "Power that is accepted as legitimate, moral, and rightful by those who are subjected to it.",
      "Charismatic Authority": "Weber's term for legitimacy based on the exceptional personal magnetism, heroism, or holiness of an individual leader.",
      "Rational-Legal Authority": "Weber's term for authority based on codified laws, rules, and impersonal bureaucratic procedures.",
      "Three Faces of Power": "Steven Lukes's model of power: decision-making (visible), agenda-setting (unspoken), and preference-shaping (ideological manipulation).",
      "Decentered Power": "Foucault's concept that power is not held by a single group (like the state), but is scattered throughout society, embedded in language, institutions, and daily practices."
    },
    collinsFocus: "Differentiates Weber's three types of authority: Traditional, Charismatic, and Rational-Legal. Relates them to institutional control in modern states and corporate organizations.",
    cupFocus: "Analytes Steven Lukes' 'three faces of power' (decision-making, agenda-setting, and preference-shaping). Details Foucault's view of power as decentered, capillary, and embedded in scientific discourse.",
    evaluationPoints: [
      "Foucault's decentered power is criticised for being too vague, making it difficult to identify real oppressors and locate structural class inequalities.",
      "Rational-legal authority can lead to dehumanising bureaucracy, where rules become ends in themselves, suppressing human freedom and creating an 'iron cage'.",
      "Marxists criticize Lukes's three faces of power for ignoring how all three faces are ultimately rooted in the ownership of the economic base of society.",
      "Rational choice theorists argue that authority inside modern relationships is constantly negotiated rather than being structurally determined."
    ],
    keyStudies: [
      {
        researcher: "Steven Lukes (1974)",
        study: "Power: A Radical View",
        method: "Theoretical political and sociological analysis of institutional power dynamics.",
        findings: "Proved that power operates most effectively when it is invisible (the 'third face'), actively shaping people's desires and preferences so that they willingly accept their own subordination without realizing they are oppressed."
      }
    ],
    contemporaryExamples: [
      "The authority of charismatic global activists like Greta Thunberg, whose power relies on moral appeal and personal conviction rather than legal office.",
      "The use of algorithms by digital platforms to curate news feeds, representing the third face of power (preference-shaping) by organizing what users see and believe."
    ],
    commonMisconceptions: [
      "Assuming that power requires physical force, when the most stable and effective power operates through consent, ideology, and authority.",
      "Confusing traditional authority with rational-legal authority, when traditional authority is based on custom and personal loyalty rather than written laws."
    ],
    synopticLinks: [
      "Links to Theory (Foucault's poststructuralism vs Marx's structuralism).",
      "Links to Methods (the methodological challenge of measuring Lukes's 'invisible' third face of power)."
    ],
    keyStatistics: [
      "Weber noted that in modern industrial states, 95% of state administration is handled by rational-legal civil bureaucracies, demonstrating the dominance of bureaucratic authority (Weber, 1922)."
    ],
    essayArguments: {
      for: [
        "Modern power has become bureaucratic and legalistic, locking humans in an iron cage — Max Weber — rational-legal authority dominates modern systems.",
        "Power operates through invisible ideological manipulation that shapes desires — Steven Lukes — the third face of power prevents conflict from ever arising."
      ],
      against: [
        "Power is not a commodity held by the powerful, but is productive and decentered — Michel Foucault — power is everywhere and is resisted everywhere.",
        "Power is ultimately a structural product of economic class division — Karl Marx — those who own the economic base control the ideological superstructure."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Max Weber",
        quote: "Authority is the probability that certain specific commands... will be obeyed by a given group of persons."
      },
      {
        theorist: "Steven Lukes",
        quote: "Power is at its most effective when least observable."
      }
    ]
  }
};
