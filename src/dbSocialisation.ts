import { TextbookRAGEntry } from './sociologyRAG';

export const socialisationDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Primary vs Secondary Socialisation": {
    theorists: ["George Herbert Mead", "Talcott Parsons", "Charles Cooley", "Leon Kuczynski", "Arlie Hochschild", "Pierre Bourdieu"],
    keyTerms: {
      "Primary Socialisation": "The foundational stage of social learning, occurring primarily within the family unit, where infants acquire language, basic values, cognitive skills, and their initial self-concept.",
      "Secondary Socialisation": "The lifelong, continuous process of learning cultural norms, values, and roles from secondary agencies such as schools, peer groups, mass media, workplaces, and organized religion.",
      "Significant Others": "Mead's term for specific individuals (typically parents or primary caregivers) whose opinions and expectations directly influence a child's early self-concept and development.",
      "Generalized Other": "Mead's concept representing the collection of social expectations and cultural rules that an individual internalises as they grow, enabling them to understand wider society's expectations.",
      "Looking-Glass Self": "Cooley's concept stating that our self-identity is not innate, but is actively constructed by interpreting how we believe others perceive and evaluate us.",
      "Relational Model": "Kuczynski's modern model of socialization emphasizing that children are not passive vessels, but active agents who negotiate, resist, and dynamically shape their interactions with socializers.",
      "Habitus": "Bourdieu's concept referring to the deeply ingrained, class-based habits, skills, tastes, and dispositions that are unconsciously acquired during primary socialization inside the family."
    },
    collinsFocus: "Focuses on how the family operates as a crucial 'emotional factory' that internalises social rules, acting as a functional bridge between private emotional spaces and the highly competitive public sphere.",
    cupFocus: "Critically deconstructs the classic passive models of childhood, drawing on G.H. Mead's distinction between the active, unsocialised 'I' and the socially conformist 'Me', alongside Kuczynski's relational negotiation studies.",
    evaluationPoints: [
      "Dennis Wrong (Functionalist critic) raises the 'over-socialised conception of man', arguing that classical theories portray humans as passive cultural puppets rather than creative, decision-making agents.",
      "Louis Althusser (Marxist perspective) argues that the values transmitted during socialization are not a neutral consensus, but rather a ruling-class ideology designed to produce submissive workers for capitalism.",
      "Ann Oakley (Feminist perspective) critiques traditional models for normalizing gendered manipulation and canalization in primary socialization, which reproduces patriarchal inequalities.",
      "Jean-François Lyotard (Postmodernist perspective) claims that secondary socialization agencies have lost their absolute authority in our fragmented, hyper-consumerist era, resulting in highly fluid, hybrid lifestyles."
    ],
    keyStudies: [
      {
        researcher: "Leon Kuczynski et al. (2001)",
        study: "Socialisation as a Bilateral Process",
        method: "Semi-structured interviews and naturalistic observations of parent-child dyads.",
        findings: "Discovered that children actively employ sophisticated negotiation tactics, stalling, and cognitive reframing to resist and modify parental demands, proving that socialization is a bidirectional transaction."
      }
    ],
    contemporaryExamples: [
      "The 'Kiasu' parenting style in Singapore, where primary socialization focuses heavily on educational success and fear of losing out, actively molding the child's identity around civic competition.",
      "Digital socialisation of children in South Korea via smart devices, where virtual peer groups and online educational software act as dominant secondary agencies of socialization from early ages."
    ],
    commonMisconceptions: [
      "Believing that children are purely passive recipients of socialization who absorb culture like a blank slate (tabula rasa), ignoring Kuczynski's relational agency.",
      "Confusing primary socialization with biological development, assuming language or walking are purely natural milestones rather than socially nurtured behaviors."
    ],
    synopticLinks: [
      "Connects directly to the Family unit (functionalist fit thesis, joint vs segregated conjugal roles).",
      "Connects directly to the Education unit (meritocracy, hidden curriculum, and social mobility)."
    ],
    keyStatistics: [
      "78% of UK parents surveyed state that social media acts as a more powerful secondary agent of moral socialization for their teenage children than schools or churches (Ofcom Media Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Primary socialization is the ultimate structural determinant of human identity — Talcott Parsons — primary socialization ensures moral consensus and social order by internalising value systems.",
        "Class-based habitus acquired during primary socialization sets permanent boundaries — Pierre Bourdieu — cultural capital acquired at home creates lifelong educational advantages."
      ],
      against: [
        "Human identity is constantly negotiated and modified throughout life — Herbert Blumer — interactionist perspectives argue that individuals actively interpret symbols and can reject early programming.",
        "Secondary socialization via digital media can completely override family values — Postmodernist critics — hybrid global cultures provide children with choices that bypass parental authority."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Charles Cooley",
        quote: "I am not what I think I am, and I am not what you think I am; I am what I think you think I am."
      },
      {
        theorist: "Talcott Parsons",
        quote: "The family is a factory which specializes in the manufacture of human personalities."
      }
    ]
  },
  "Agencies of Socialisation (Family, Peer Group, Media, etc.)": {
    theorists: ["Talcott Parsons", "Louis Althusser", "Bowles & Gintis", "Ester Morgan", "Angela McRobbie", "Judith Harris"],
    keyTerms: {
      "Agencies of Socialisation": "Social institutions that guide, reinforce, and control the transmission of cultural knowledge, values, and norms to individuals.",
      "Hidden Curriculum": "The unwritten, unofficial lessons, values, and perspectives that students learn in school alongside the academic syllabus.",
      "Ideological State Apparatus": "Althusser's term for state-controlled institutions (like schools, media, and churches) that reproduce class inequalities by propagating ruling-class ideology.",
      "Peer Group Pressure": "The informal social pressure exerted by peers to conform to group norms, styles, and behaviors, often using ridicule or exclusion.",
      "Canalisation": "The practice of parents channeling children's interests towards specific gender-typed toys, activities, and games during early family socialization."
    },
    collinsFocus: "Details the collaborative role of primary and secondary agencies in securing value consensus. Emphasizes how the family establishes a moral foundation, while peer groups and media reinforce localized or gendered behaviors.",
    cupFocus: "Focuses on Althusser's structural Marxist model of education as an ideological apparatus, and Bowles & Gintis's correspondence principle. Highlights how peer groups act as sites of subcultural resistance that challenge parental norms.",
    evaluationPoints: [
      "Functionalists assume agencies work in absolute harmony, ignoring deep conflicts where peer expectations directly sabotage educational performance.",
      "Postmodernists argue that the contemporary media is highly fragmented, giving individuals active consumer choices rather than subjecting them to top-down brainwashing.",
      "Interactionists argue that socialization is a localized negotiation where individuals actively interpret, adapt, or completely reject agency messaging.",
      "Judith Harris argues that peer groups are far more influential in shaping adult personality than parental socialization within the home."
    ],
    keyStudies: [
      {
        researcher: "Samuel Bowles & Herbert Gintis (1976)",
        study: "Schooling in Capitalist America",
        method: "Statistical comparisons of school structures alongside workplace hierarchies.",
        findings: "Uncovered the 'correspondence principle', showing that the hidden curriculum of schools mirrors the social relations of production in workplaces (obedience, hierarchy, external rewards), preparing working-class children for exploitation."
      }
    ],
    contemporaryExamples: [
      "The use of 'social credit' systems in China to socialize citizens through constant digital feedback, penalizing deviant online activity and rewarding conformity.",
      "Subcultural peer groups among young skaters in Tokyo, creating exclusive alternative linguistic codes and clothing norms that resist parental consumer expectations."
    ],
    commonMisconceptions: [
      "Assuming that different agencies of socialization always reinforce each other, when they are frequently in direct ideological conflict.",
      "Believing the hidden curriculum is an explicit, written part of school policies, rather than an uncodified set of structural practices."
    ],
    synopticLinks: [
      "Links to Education (hidden curriculum, social reproduction, and meritocracy).",
      "Links to Media (audience reception, ideological manipulation, and stereotyping)."
    ],
    keyStatistics: [
      "In a US survey, 85% of teenagers reported that their peer group's tastes in digital media and music mattered more to them than their parents' opinions (Pew Research, 2022)."
    ],
    essayArguments: {
      for: [
        "Agencies of socialization successfully reproduce structural conformity — Louis Althusser — ideological state apparatuses secure obedience to capitalism.",
        "Socialization agencies operate in harmony to maintain organic stability — Talcott Parsons — primary and secondary agencies bridge individual identities to shared values."
      ],
      against: [
        "Agencies are sites of active resistance and cultural hybridity — Paul Willis — working-class subcultures actively reject the schooling system's messages.",
        "The power of traditional agencies has collapsed in the digital age — Postmodernist critics — individuals construct self-directed identities through customized online spaces."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Louis Althusser",
        quote: "No class can hold State power over any period of time without at the same time exercising its hegemony over and in the State Ideological Apparatuses."
      }
    ]
  },
  "The Nature vs Nurture Debate": {
    theorists: ["Desmond Morris", "Simon Baron-Cohen", "Cordelia Fine", "Margaret Mead", "Lucien Malson", "Stephen Pinker"],
    keyTerms: {
      "Sociobiology": "A scientific discipline claiming that social behavior is determined by innate biological instincts, evolutionary adaptations, and genetic hard-wiring.",
      "Biogrammar": "Tiger and Fox's term for genetically programmed behavioral patterns, such as maternal bonding, that predispose humans to act in specific ways.",
      "Social Construct": "A concept, behavior, or institution that is artificially manufactured, defined, and sustained by the cultural processes of society rather than biology.",
      "Neurosexism": "Cordelia Fine's term for the biased use of neuroscientific arguments to justify traditional gender stereotypes as biological certainties.",
      "Cultural Relativism": "The principle that an individual's beliefs and activities should be understood in terms of their own culture, rather than judged by external standards."
    },
    collinsFocus: "Outlines sociobiological arguments that natural sex differences are functional, with hormones predisposing men to instrumental roles and women to expressive, maternal roles.",
    cupFocus: "Presents a deep deconstruction of sociobiology, using Cordelia Fine's research to debunk 'hard-wired' brain theories. Highlights Margaret Mead's anthropological research in Samoa and New Guinea.",
    evaluationPoints: [
      "Cross-cultural studies of gender show immense variation, proving that what is deemed 'natural' is actually a highly flexible social construct.",
      "Sociobiology is heavily criticized for biological determinism, which has historically been used to justify racist, sexist, and classist inequalities.",
      "Modern epigenetics proves that gene expression is highly dependent on environmental social inputs, meaning nature and nurture are inextricably linked.",
      "Feral children studies conclusively prove that complex human behaviors like language, empathy, and hygiene are entirely learned (nurtured) rather than instinctive."
    ],
    keyStudies: [
      {
        researcher: "Margaret Mead (1935)",
        study: "Sex and Temperament in Three Primitive Societies",
        method: "Comparative ethnographic participant observation across three tribes in New Guinea.",
        findings: "Discovered that the Tchambuli tribe reversed Western gender roles (women were dominant, rational and managerial; men were artistic, decorative, and gossipers), proving gender traits are cultural constructs, not biological mandates."
      }
    ],
    contemporaryExamples: [
      "The rise of gender-neutral parenting in Sweden, where the pronoun 'hen' is used to minimize early gendered socialization, resulting in children exhibiting less stereotyped behavior.",
      "Cross-national variations in pain tolerance expression, showing that the physical experience of pain is managed and displayed according to cultural rules of stoicism."
    ],
    commonMisconceptions: [
      "Believing that gender differences must be either 100% biological or 100% social, ignoring how biology provides a raw capacity while culture shapes the actual practice.",
      "Assuming that sociobiology is an objective science, when it is frequently critiques as an ideological defense of traditional hierarchies."
    ],
    synopticLinks: [
      "Links to Identity (construction of gender, sexuality, and cultural variations).",
      "Links to Methods (the use of cross-cultural comparisons and scientific objectivity)."
    ],
    keyStatistics: [
      "Sociobiologists frequently cite twin studies showing up to 50% concordance in certain personality traits, but critics note these twins share identical social environments (Pinker, 2002)."
    ],
    essayArguments: {
      for: [
        "Human behavior is primarily driven by biological and evolutionary programming — Desmond Morris — biological drives dictate human social survival strategies.",
        "A-level gender roles are rooted in universal functional biogrammars — Lionel Tiger — maternal instinct is a biological constant necessary for child survival."
      ],
      against: [
        "Human behavior is entirely a product of cultural learning and environment — Margaret Mead — cross-cultural gender reversals prove roles are socially constructed.",
        "The brain is highly plastic and not biologically hard-wired for gender — Cordelia Fine — neuroscientific claims of gendered brains are based on neurosexism."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Margaret Mead",
        quote: "We are forced to conclude that human nature is almost unbelievably malleable, responding accurately and contrastingly to contrasting cultural conditions."
      }
    ]
  },
  "Feral Children and Social Isolation": {
    theorists: ["Kingsley Davis", "Susan Curtiss", "Lucien Malson", "Michael Newton", "Jean Itard"],
    keyTerms: {
      "Feral Children": "Children who have lived isolated from human contact from a very young age, having little or no experience of human care, loving, or language.",
      "Social Isolation": "The complete or near-complete lack of contact between an individual and society, leaving them unsocialised in human culture.",
      "Critical Period Hypothesis": "The linguistic theory that there is a biologically determined window (up to puberty) during which humans must acquire first language, after which complete fluency is impossible.",
      "Anomie": "A state of profound normlessness where an individual is completely detached from the moral regulations and guidelines of society.",
      "Primary Deprivation": "The lack of essential emotional bonding and cognitive stimulation during early childhood development."
    },
    collinsFocus: "Uses isolated children to illustrate database requirements of culture. Demonstrates that language, posture, and emotional stability cannot develop in the absence of primary socialisation.",
    cupFocus: "Explores cases like Genie (Curtiss) and Victor of Aveyron (Malson). Analyses the cognitive boundaries of learning language past critical developmental windows, showing how deprivation prevents structural brain development.",
    evaluationPoints: [
      "Feral cases are highly individualised and are often confounded by pre-existing neurological damage or prenatal neglect.",
      "Genie's case shows that cognitive development has biological limits once the 'critical period' is missed, illustrating nature-nurture interaction.",
      "These cases prove that without nurture, the biological human body remains entirely animalistic, unable to perform basic social interactions.",
      "The scientific study of feral children often raises immense ethical issues, as researchers can end up exploiting vulnerable children for academic gain."
    ],
    keyStudies: [
      {
        researcher: "Susan Curtiss (1977)",
        study: "Genie: A Psycholinguistic Study of a Modern-Day 'Wild Child'",
        method: "Longitudinal case study combining clinical observations, cognitive testing, and linguistic therapy.",
        findings: "Revealed that despite extensive therapy, Genie could acquire vocabulary but could never master syntax, confirming Chomsky's critical period hypothesis and proving that language requires environmental activation."
      }
    ],
    contemporaryExamples: [
      "The case of Oxana Malaya in Ukraine, who was raised by dogs in a kennel until age 8, displaying canine behaviors (barking, running on all fours) and requiring decades of social retraining.",
      "The case of Rochom Pngieng in Cambodia, who emerged from the jungle after 18 years, unable to speak any human language and exhibiting intense distress in social settings."
    ],
    commonMisconceptions: [
      "Believing that feral children are 'natural humans' who showcase the pure, untamed human state, ignoring that human nature is fundamentally social and requires culture to be activated.",
      "Assuming that feral children can easily catch up and achieve full social and language fluency once they are rescued and socialized."
    ],
    synopticLinks: [
      "Links to Theory (the social construction of reality, symbolic interactionism).",
      "Links to Methods (ethics of case studies, and limits of naturalistic observation)."
    ],
    keyStatistics: [
      "A review of 53 documented cases of extreme child isolation showed that 100% of children rescued after puberty failed to achieve complex syntactic linguistic capability (Malson, 1972)."
    ],
    essayArguments: {
      for: [
        "Feral children prove that human nature is entirely constructed by society — Lucien Malson — without socialization, human biological potentials remain completely dormant.",
        "Primary socialization in a loving family is a functional prerequisite for human development — Kingsley Davis — social isolation permanently stunts personality construction."
      ],
      against: [
        "Feral children show that biological limitations are real and cannot be overridden by late socialization — Susan Curtiss — the critical period proves nature sets hard boundaries.",
        "Individual feral cases are scientifically unreliable due to confounding variables — Academic critics — pre-existing cognitive deficits cannot be ruled out."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Lucien Malson",
        quote: "Man is not a completed product at birth, but a potentiality that can only be realized through the social group."
      }
    ]
  },
  "Functionalist vs Marxist Views on Socialisation": {
    theorists: ["Emile Durkheim", "Talcott Parsons", "Karl Marx", "Louis Althusser", "Bowles & Gintis", "Ester Morgan"],
    keyTerms: {
      "Value Consensus": "A shared agreement on cultural norms and values, which functionalists believe keeps society stable.",
      "Class Consciousness": "The subjective awareness of one's real economic position and interests within a capitalist society.",
      "False Consciousness": "The state where subordinate classes accept ruling-class ideology as natural, masking their exploitation.",
      "Reproduction of Labour Power": "The Marxist concept that the family and school socialize children to accept exploitation, ensuring a compliant workforce.",
      "Social Solidarity": "Durkheim's concept of social cohesion, built on shared values and mutual dependency.",
      "Ideological State Apparatus": "Althusser's term for institutions (like family, school, media) that propagate ruling-class values to maintain capital's dominance."
    },
    collinsFocus: "Contrasts the functionalist view of value consensus (Durkheim) where socialisation promotes solidarity, with the Marxist view where it acts as a mechanism of class domination.",
    cupFocus: "Details Althusser's view of school and family as Ideological State Apparatuses (ISAs) that teach children obedience and compliance to prepare them for capitalist exploitation.",
    evaluationPoints: [
      "Marxism overlooks the genuine emotional support and stability that family socialisation provides, ignoring its positive mental health functions.",
      "Functionalism idealises socialisation, ignoring how gender bias, racism, and class divisions are actively reproduced in the home.",
      "Both perspectives are highly structural (macro-deterministic) and tend to overlook human agency and individual resistance to socialization.",
      "Feminists argue that both perspectives ignore how socialization reproduces patriarchy and female subordination."
    ],
    keyStudies: [
      {
        researcher: "Louis Althusser (1970)",
        study: "Ideology and Ideological State Apparatuses",
        method: "Theoretical Marxist structural analysis of capitalist institutions.",
        findings: "Demonstrated that socialization is not a neutral transmission of culture but an ideological campaign; ISAs like schools use the hidden curriculum to program children with submissiveness, reproducing class subjection."
      }
    ],
    contemporaryExamples: [
      "The implementation of nationwide patriotic education programs in Russian schools, which functionalists view as building social solidarity, but Marxists critique as state-sponsored ideological brainwashing.",
      "The socialization of children into consumer culture through toy advertising, which Marxists view as creating artificial material needs to serve capital accumulation."
    ],
    commonMisconceptions: [
      "Assuming that Marxists reject the importance of socialization; they agree it is powerful, but they view its purpose as exploitative rather than beneficial.",
      "Believing that functionalists see all families as successfully socialising children; they acknowledge 'dysfunctional' families but view them as curable anomalies."
    ],
    synopticLinks: [
      "Links to Theory (Structuralism vs Action theory).",
      "Links to Family (Marxist vs Functionalist views of the family's role)."
    ],
    keyStatistics: [
      "A study found that working-class parents are 40% more likely to value obedience and conformity in children, while middle-class parents value creativity and independence, reflecting class reproduction (Bowles & Gintis, 1976)."
    ],
    essayArguments: {
      for: [
        "Socialization builds value consensus and integrates individuals into society — Talcott Parsons — socialization is essential for social system stability.",
        "Socialization reproduces and legitimizes class inequalities — Louis Althusser — ideology masks exploitation and prevents revolution."
      ],
      against: [
        "Both models are overly deterministic and treat humans as 'cultural dopes' — Dennis Wrong — individuals actively resist structural programming.",
        "Structural models ignore how socialization is primarily used to reproduce patriarchal dominance — Ann Oakley — gender socialisation is the main axis of control."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Talcott Parsons",
        quote: "The family is a factory which specializes in the manufacture of human personalities, which are essential to the social order."
      },
      {
        theorist: "Louis Althusser",
        quote: "The school... takes charge of children from and teaches them 'know-how' wrapped in the ruling ideology."
      }
    ]
  }
};
