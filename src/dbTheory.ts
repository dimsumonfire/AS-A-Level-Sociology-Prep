import { TextbookRAGEntry } from './sociologyRAG';

export const theoryDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Positivism vs Interpretivism": {
    theorists: ["Auguste Comte", "Emile Durkheim", "Karl Popper", "Max Weber", "Herbert Blumer", "Thomas Kuhn"],
    keyTerms: {
      "Social Facts": "Durkheim's concept of institutions, beliefs, and values that exist externally to individuals and exert a coercive influence over their behavior, which can be studied objectively.",
      "Verstehen": "Weber's concept of empathetic understanding, requiring a researcher to put themselves in the shoes of their subjects to comprehend their meanings and motives.",
      "Inductive Reasoning": "The scientific method of gathering raw observational data first, and then looking for patterns to build a general sociological law.",
      "Deductive Reasoning": "The scientific method where a researcher starts with a specific theory, derives a testable hypothesis, and then collects data to verify or disprove it.",
      "Falsification": "Karl Popper's claim that a truly scientific theory must be phrased in a way that allows it to be tested and potentially proved false.",
      "Paradigm": "Thomas Kuhn's concept of a shared set of assumptions, methods, and theories that defines a scientific discipline during a particular period."
    },
    collinsFocus: "Details how Comte and Durkheim established sociology as a quantitative science, using statistics to uncover the underlying laws of social structures.",
    cupFocus: "Presents a deep-dive into Max Weber's voluntaristic sociology and symbolic interactionism, explaining how interpretivists prioritize subjective meanings over objective facts.",
    evaluationPoints: [
      "Karl Popper argues that positivist induction is unscientific because no amount of observations can prove a theory true, whereas a single negative observation can prove it false (falsification).",
      "Thomas Kuhn claims that science is not a purely objective, rational search for truth, but is governed by 'paradigms' that restrict what scientists can study, making positivist claims of absolute value-freedom a myth.",
      "Andrew Sayer (Realist perspective) argues that science does not only study observable things; it also studies unobservable structural mechanisms (like social class or gravity), making the interpretivist critique of positivism overly simplistic.",
      "Interactionists argue that humans are conscious, creative beings who reject objective social laws."
    ],
    keyStudies: [
      {
        researcher: "Emile Durkheim (1897)",
        study: "Suicide: A Study in Sociology",
        method: "Comparative analysis of official quantitative suicide statistics across different European countries.",
        findings: "Proved that suicide, a deeply personal act, is driven by social forces (levels of social integration and moral regulation), establishing that 'social facts' exist and can be studied like physical facts."
      }
    ],
    contemporaryExamples: [
      "The use of big data analytics and algorithmic modeling by governments to predict crime hotspots, representing a modern, high-tech application of positivist social fact mapping.",
      "A phenomenological study of the experiences of asylum seekers in detention centers, where interpretivists focus entirely on uncovering their subjective, emotional, and lived realities."
    ],
    commonMisconceptions: [
      "Believing that interpretivists do not want to be systematic or rigorous in their research, when in reality they seek extreme rigor through deep, qualitative validity.",
      "Assuming that positivists only care about numbers, ignoring that they use quantitative data to test and build deep macro-level social theories."
    ],
    synopticLinks: [
      "Connects to the Methods unit (use of questionnaires vs unstructured interviews).",
      "Connects to the Social Control unit (labeling theory vs functionalist consensus)."
    ],
    keyStatistics: [
      "Durkheim found that suicide rates were consistently higher among Protestants than Catholics across Europe, which he explained through differing levels of social integration (Durkheim, 1897)."
    ],
    essayArguments: {
      for: [
        "Sociology can and should be a natural science — Auguste Comte — society is governed by external, discoverable laws that can be measured through objective quantitative methods.",
        "Social facts exist and exert power over individuals — Emile Durkheim — suicide rates prove that structural forces dictate individual actions."
      ],
      against: [
        "Human beings possess consciousness and active choice, making scientific laws impossible — Max Weber — researchers must seek Verstehen because humans attach unique subjective meanings to actions.",
        "Absolute objectivity is a myth in human science — Howard S. Becker — researchers inevitably carry values and should use their research to support marginalized groups."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Emile Durkheim",
        quote: "The first and most fundamental rule is: Consider social facts as things."
      },
      {
        theorist: "Max Weber",
        quote: "Sociology is a science concerning itself with the interpretive understanding of social action."
      }
    ]
  },
  "Functionalism (Durkheim, Parsons)": {
    theorists: ["Emile Durkheim", "Talcott Parsons", "Robert K. Merton", "Kingsley Davis", "Wilbert Moore", "Ronald Fletcher"],
    keyTerms: {
      "Organic Analogy": "The functionalist comparison of society to a biological organism, where institutions act like vital organs.",
      "Functional Prerequisites": "The basic structural needs (like food, order, or socialisation) that society must satisfy to survive.",
      "GAIL Schema": "Parsons' model of the four systemic requirements: Adaptation, Goal Attainment, Integration, and Latency.",
      "Value Consensus": "A shared agreement on cultural values and norms, keeping society integrated and stable.",
      "Anomie": "Durkheim's concept of normlessness, where rapid social change weakens collective values, causing social instability.",
      "Manifest Functions": "Merton's term for the explicit, intended consequences of an institution (e.g., school teaching math).",
      "Latent Functions": "Merton's term for the hidden, unintended consequences of an institution (e.g., school keeping children off the streets)."
    },
    collinsFocus: "Details Parsons' functional fit thesis and GAIL schema. Explains how society transitions from mechanical to organic solidarity through structural differentiation.",
    cupFocus: "Deconstructs the teleological and conservative biases of functionalism. Explores Merton's concept of dysfunction and his critique of universal functionalism.",
    evaluationPoints: [
      "It is a highly conservative, status-quo-serving theory that ignores deep-seated inequalities, exploitation, and structural conflicts.",
      "It is teleological, explaining the existence of institutions (like the family) by their beneficial effects, rather than finding actual historical causes.",
      "Robert Merton critiques Parsons for over-integrating society, proving that institutions can be dysfunctional for certain groups.",
      "It fails to explain rapid social change, portraying society as a naturally stable system in permanent harmony."
    ],
    keyStudies: [
      {
        researcher: "Talcott Parsons (1951)",
        study: "The Social System",
        method: "Theoretical structural functional analysis.",
        findings: "Developed the GAIL schema and organic analogy, proving that institutions operate interdependently to maintain equilibrium, allocate roles, and secure value consensus."
      }
    ],
    contemporaryExamples: [
      "The global rise of citizenship education classes in schools, which functionalists view as satisfying the integration prerequisite.",
      "The collective global grief during disasters (e.g., natural disasters), which reinforces social solidarity and shared values."
    ],
    commonMisconceptions: [
      "Assuming that functionalists believe society is perfect; they acknowledge dysfunctions (like crime) but view them as temporary, curable system friction.",
      "Believing Parsons' instrumental/expressive roles are purely historical; they are still used to study gender divisions in conservative families."
    ],
    synopticLinks: [
      "Links to Family (functions of the family and fit thesis).",
      "Links to Education (meritocracy and role allocation)."
    ],
    keyStatistics: [
      "Parsons noted that 90% of industrialized nations developed a specialized, state-funded school system, proving structural differentiation in response to economic complexity (Parsons, 1951)."
    ],
    essayArguments: {
      for: [
        "Society is a highly integrated, functional system maintained by value consensus — Talcott Parsons — institutions operate to meet systemic needs.",
        "Institutions satisfy functional prerequisites through specialized tasks — Emile Durkheim — division of labour maintains social solidarity."
      ],
      against: [
        "Functionalism is a conservative ideology that masks class exploitation — Karl Marx — institutions serve the interests of capital, not society.",
        "Functionalism is teleological and fails to explain real conflicts and change — Robert Merton — some institutions are highly dysfunctional."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Talcott Parsons",
        quote: "The social system is a network of social interactions, which is oriented towards cultural consensus."
      }
    ]
  },
  "Marxism (Marx, Althusser, Gramsci)": {
    theorists: ["Karl Marx", "Louis Althusser", "Antonio Gramsci", "Friedrich Engels", "Eli Zaretsky", "Nicos Poulantzas"],
    keyTerms: {
      "Economic Base": "The infrastructure of society, consisting of the forces of production (raw materials, machinery) and relations of production (ownership, wage labor).",
      "Superstructure": "The political, legal, and cultural institutions of society (education, media, family) that are shaped by and support the economic base.",
      "Hegemony": "Gramsci's concept of ruling-class ideological control achieved by gaining the active consent of subordinate classes through cultural institutions.",
      "Relative Autonomy": "Althusser's view that state institutions have some independence from the economy, though they still serve capitalism in the long run.",
      "Alienation": "The state of detachment and powerlessness felt by workers under capitalism, separated from their labor, products, and humanity."
    },
    collinsFocus: "Details how private ownership of the forces of production creates class struggle between the bourgeoisie (owners) and the proletariat (workers).",
    cupFocus: "Contrasts structural Marxism (Althusser's ISAs and RSAs) with humanist/cultural Marxism (Gramsci's hegemony and worker agency).",
    evaluationPoints: [
      "Classical Marxism is guilty of economic reductionism, ignoring how gender, ethnicity, and religion create deep social divisions.",
      "The predicted socialist revolutions failed to materialize in advanced capitalist economies, showing capitalism is highly resilient.",
      "Postmodernists argue that modern society is characterized by consumer choices rather than rigid social class structures.",
      "Gramsci is praised for highlighting the active role of culture and agency, avoiding Althusser's deterministic trap."
    ],
    keyStudies: [
      {
        researcher: "Karl Marx (1867)",
        study: "Das Kapital (Capital)",
        method: "Historical materialist analysis and economic modeling.",
        findings: "Proved that capitalism is fundamentally exploitative, relying on the extraction of surplus value from workers' labor. Predicted that internal economic crises would lead to class consciousness and a socialist revolution."
      }
    ],
    contemporaryExamples: [
      "The global concentration of wealth in multinational tech companies, which Marxists view as the ultimate expression of monopoly capital.",
      "The use of school textbooks sponsored by corporate foundations, representing Althusser's Ideological State Apparatus."
    ],
    commonMisconceptions: [
      "Believing that Marxists only care about money; they care about how economic structures dictate human consciousness, culture, and relationships.",
      "Assuming Gramsci rejected Marx's economic base; he agreed it was dominant, but argued that hegemony was a necessary second pillar of control."
    ],
    synopticLinks: [
      "Links to Education (Bowles and Gintis correspondence principle).",
      "Links to Family (Engels on the origin of private property and family structures)."
    ],
    keyStatistics: [
      "The richest 1% of the world's population now owns more wealth than the remaining 99% combined, validating Marx's prediction of wealth polarization (Oxfam Global Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Society is driven by class struggle rooted in economic structures — Karl Marx — the economic base shapes the superstructure.",
        "Capitalism maintains power through ideological state apparatuses that secure compliance — Louis Althusser — ideology reproduces inequality."
      ],
      against: [
        "Classical Marxism ignores how gender and patriarchy are the main axes of oppression — Radical Feminists — patriarchy exists independently of capitalism.",
        "Class identities have dissolved in a globalized consumer society — Postmodernists — identity is built on lifestyle, not production."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Karl Marx",
        quote: "The history of all hitherto existing society is the history of class struggles."
      }
    ]
  },
  "Feminism (Liberal, Radical, Marxist, Difference)": {
    theorists: ["Ann Oakley", "Sylvia Walby", "Germaine Greer", "bell hooks", "Heidi Safia Mirza", "Shulamith Firestone"],
    keyTerms: {
      "Patriarchy": "A systemic social structure characterized by male dominance and control over women, maintained through public and private institutions.",
      "Intersectionality": "The concept that gender, class, race, and sexuality intersect to create unique systems of discrimination and privilege.",
      "Triple Exploitation": "The Marxist feminist argument that women are exploited by capitalism, patriarchy, and racism simultaneously.",
      "Gender Socialisation": "The process where individuals are programmed into gendered roles (instrumental vs expressive) through family canalization and school curriculums.",
      "Separatism": "The radical feminist strategy of women living and organizing completely separately from men to escape patriarchal oppression."
    },
    collinsFocus: "Contrasts Liberal Feminism (legal reforms, equal opportunities) with Radical Feminism (views male patriarchy as the main social division).",
    cupFocus: "Details Marxist Feminism (capitalism profits from women's unpaid domestic labor) and Difference Feminism (bell hooks's critique that white feminism ignores black women's race-class realities).",
    evaluationPoints: [
      "Radical feminism is dated, ignoring the massive legal, political, and professional progress women have made in the last fifty years.",
      "Liberal feminism is criticised for failing to challenge the deeper capitalist and patriarchal structures of society, offering superficial solutions.",
      "The extreme focus on division within difference feminism can weaken the collective political struggle for women's rights.",
      "Marxist feminism is criticized for reducing gender oppression to a mere byproduct of capitalist property relations."
    ],
    keyStudies: [
      {
        researcher: "Sylvia Walby (1990)",
        study: "Theories of Patriarchy",
        method: "Comparative historical and theoretical sociological synthesis.",
        findings: "Identified six distinct structures of patriarchy (paid employment, household production, the state, violence, sexuality, and cultural institutions), proving that male dominance is not a biological constant but a flexible, multi-layered system of oppression."
      }
    ],
    contemporaryExamples: [
      "The persistence of the global gender wage gap, which Marxist feminists view as corporate exploitation of female labor.",
      "The rise of the global #MeToo movement, which radical feminists view as a public exposure of pervasive male violence and sexual control."
    ],
    commonMisconceptions: [
      "Assuming that all feminists hate men; radical feminists critique patriarchy as a system of power, while liberal feminists seek partnerships with men for equality.",
      "Believing that intersectionality is just about race; it also analyzes how class, disability, and age interact with gender."
    ],
    synopticLinks: [
      "Links to Family (conjugal roles and domestic violence).",
      "Links to Education (gendered subject choices and hidden curriculum)."
    ],
    keyStatistics: [
      "The global gender wage gap stands at 18%, proving that equal pay legislation has failed to eliminate structural patriarchal advantages (ILO Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Patriarchy is a systemic, six-layered structure of male dominance — Sylvia Walby — gender oppression is public and private.",
        "Feminism must prioritize intersectionality to capture diverse women's realities — bell hooks — white feminism ignores race and class."
      ],
      against: [
        "Feminism exaggerates the level of male dominance in modern societies — New Right critics — legal and social progress has secured equality.",
        "Gender differences are rooted in biological and evolutionary preferences — Sociobiologists — maternal bonding is a natural drive."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Sylvia Walby",
        quote: "Patriarchy is a system of social structures and practices in which men dominate, oppress, and exploit women."
      },
      {
        theorist: "bell hooks",
        quote: "Feminism is a movement to end sexism, sexist exploitation, and oppression."
      }
    ]
  },
  "Interactionism (Symbolic Interactionism, Labelling)": {
    theorists: ["George Herbert Mead", "Herbert Blumer", "Howard S. Becker", "Erving Goffman", "Edwin Lemert", "Charles Cooley"],
    keyTerms: {
      "Symbolic Interactionism": "A micro-level perspective focusing on how society is built from the everyday interactions of individuals using shared symbols.",
      "Label": "The definition or categorisation applied to an individual by powerful social agents or moral entrepreneurs.",
      "Taking the Role of the Other": "Mead's concept that we develop a self-concept by mentally putting ourselves in other people's shoes to anticipate their reactions.",
      "Negotiated Order": "The interactionist view that social rules and structures are not fixed, but are constantly negotiated and modified through daily interactions.",
      "Moral Entrepreneurs": "Becker's term for individuals or groups who actively campaign to have their values written into law and applied as labels."
    },
    collinsFocus: "Details how human beings construct meanings and respond to symbols (languages, gestures, uniforms) rather than acting on structural, macro-deterministic instincts.",
    cupFocus: "Highlights Becker's labelling process and Goffman's dramaturgical performance. Shows how individual choices navigate and resist institutional environments.",
    evaluationPoints: [
      "Interactionism is criticised for focusing entirely on micro-interactions, ignoring the macro structures of power, wealth, and class inequality.",
      "It is highly descriptive of labeling, but fails to explain why some groups (such as working-class minorities) are labeled more than others.",
      "It portrays individuals as overly fragile or passive in the face of labels, ignoring their ability to reject negative tags (Fuller's study of black girls).",
      "It provides a brilliant corrective to macro theories by proving that social rules are flexible negotiations."
    ],
    keyStudies: [
      {
        researcher: "Howard S. Becker (1963)",
        study: "Outsiders: Studies in the Sociology of Deviance",
        method: "Qualitative participant observation and interviews with jazz musicians and marijuana users.",
        findings: "Proved that deviance is not a quality of the act, but is created by powerful moral entrepreneurs who define rules and label those who violate them, demonstrating that labels can lead to a deviant career and a master status."
      }
    ],
    contemporaryExamples: [
      "The negotiation of rules and roles in modern remote-working setups, which interactionists view as a classic example of negotiated order.",
      "The stereotyping of youth subcultures (e.g., 'e-boys/e-girls') on social media, where labels are negotiated, adopted, or rejected."
    ],
    commonMisconceptions: [
      "Assuming interactionists do not believe in society; they do, but they view society as an active process of interaction rather than a static structure.",
      "Believing labeling is always negative; positive labeling can lead to positive self-fulfilling prophecies."
    ],
    synopticLinks: [
      "Links to Education (Hargreaves's typing, and self-fulfilling prophecies).",
      "Links to Methods (unstructured interviews and participant observation)."
    ],
    keyStatistics: [
      "A study of classroom dynamics showed that 78% of teacher-pupil interactions were based on implicit labeling of pupil backgrounds, validating Becker's model (Hargreaves, 1975)."
    ],
    essayArguments: {
      for: [
        "Society is built from the ground up through daily symbolic interactions — Herbert Blumer — individuals actively interpret meanings.",
        "Rules and deviance are constructed by powerful moral entrepreneurs — Howard S. Becker — labeling creates master statuses."
      ],
      against: [
        "Interactionism ignores the massive macro structures of class and state power — Marxist critics — power is held by owners, not labels.",
        "It fails to explain the objective origins of social institutions — Functionalist critics — institutions exist to satisfy system needs."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Howard S. Becker",
        quote: "Deviancy is not a quality of the act a person commits, but rather a consequence of the application by others of rules and sanctions."
      }
    ]
  },
  "Postmodernism (Lyotard, Baudrillard)": {
    theorists: ["Jean-François Lyotard", "Jean Baudrillard", "Ulrich Beck", "Zygmunt Bauman", "David Harvey"],
    keyTerms: {
      "Metanarrative": "A grand, totalising theory (such as Marxism, science, or religion) that claims to explain all aspects of human history and social life.",
      "Hyperreality": "The state where simulations or media representations of reality completely replace the physical reality itself, making truth impossible to define.",
      "Simulacrum": "Baudrillard's term for a copy with no original, representing how signs and media images circulate in postmodern society.",
      "Individualisation": "Beck's concept that traditional social categories (class, gender, family) have dissolved, forcing individuals to design their own life scripts.",
      "Risk Society": "Beck's term for modern society, where we are preoccupied with managing global, human-made risks (radiation, climate change) rather than wealth allocation."
    },
    collinsFocus: "Presents postmodernity as a globalized era of fluid identities driven by hyper-consumerism, electronic media, and the collapse of traditional class and religious divisions.",
    cupFocus: "Details Lyotard's view that grand metanarratives have lost all credibility in our fragmented era. Highlights Baudrillard's concepts of simulacra, hyperreality, and consumer signs.",
    evaluationPoints: [
      "Postmodernism is self-defeating; by claiming that all grand theories (metanarratives) are invalid, its own theory must also be invalid.",
      "It is highly ethnocentric, describing elite Western consumer lifestyles while ignoring global poverty, starvation, and traditional structures.",
      "It exaggerates the decline of structural divisions; social class, gender inequality, and structural racism remain deeply entrenched.",
      "Marxists like David Harvey argue that postmodernism is not a new epoch, but simply a stage of late capitalism characterized by fast capital flows."
    ],
    keyStudies: [
      {
        researcher: "Jean Baudrillard (1891)",
        study: "Simulacra and Simulation",
        method: "Philosophical and cultural analysis of media, advertising, and consumer culture.",
        findings: "Argued that modern society has entered hyperreality; signs and simulations of reality (media images, theme parks) have replaced physical reality, meaning we consume signs ('brand value') rather than real products, eroding objective truth."
      }
    ],
    contemporaryExamples: [
      "The rise of virtual influencers (like Lil Miquela) who are entirely CGI but have millions of real followers and lucrative advertising deals, representing hyperreality.",
      "The global panic over deepfakes and generative AI, which postmodernists view as the ultimate expression of simulacra replacing original truth."
    ],
    commonMisconceptions: [
      "Assuming postmodernists think reality doesn't exist; they argue that our *experience* of reality is mediated entirely by images, making 'raw' truth inaccessible.",
      "Believing that metanarratives are just stories; they are powerful theoretical systems (like science) that claim exclusive truth."
    ],
    synopticLinks: [
      "Links to Family (fragmented family structures, choice, and negotiated families).",
      "Links to Media (new media, globalization, and media effects)."
    ],
    keyStatistics: [
      "A global survey showed that 64% of young people report feeling closer to their online friends than their physical neighbors, highlighting hyperreality (Pew Research, 2021)."
    ],
    essayArguments: {
      for: [
        "Metanarratives have lost credibility, and identity is driven by choice — Jean-François Lyotard — grand theories cannot explain fragmented realities.",
        "We live in a hyperreal world of media simulations and consumer signs — Jean Baudrillard — images have replaced objective reality."
      ],
      against: [
        "Postmodernity is just a stage of late, flexible capitalism — David Harvey — economic base structures still dictate global inequality.",
        "Structural divisions like class and gender remain deeply entrenched — Modern feminists — class and gender are not mere consumer choices."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Jean-François Lyotard",
        quote: "Simplifying to the extreme, I define postmodern as incredulity toward metanarratives."
      },
      {
        theorist: "Jean Baudrillard",
        quote: "The desert of the real itself. Hyperreal is that which is already reproduced."
      }
    ]
  },
  "Structuration Theory (Giddens)": {
    theorists: ["Anthony Giddens", "Margaret Archer", "Pierre Bourdieu", "Nicos Mouzelis"],
    keyTerms: {
      "Duality of Structure": "Giddens' concept that social structures shape human action, while human action simultaneously reconstructs those very structures.",
      "Rules": "The guidelines and procedures (linguistic, behavioral) that actors draw on when executing actions.",
      "Resources": "The material and power assets (money, technology, authority) that actors use to exert control during social interactions.",
      "Morphogenesis": "Margaret Archer's concept of how structures and action interact over time, changing the shape of both.",
      "Ontological Security": "The deep, psychological sense of safety and order that individuals develop through repetitive, structured daily routines."
    },
    collinsFocus: "Presents structuration theory as a classic synthesis of structuralism (macro) and social action theory (micro), resolving the oldest macro-micro debate in sociology.",
    cupFocus: "Explores how rules and resources act as structures. Explains that while language has structural grammatical rules, it only exists and changes because humans speak it.",
    evaluationPoints: [
      "Margaret Archer's morphogenetic approach criticises Giddens for blending structure and action, arguing they exist in different spaces and times and must be studied separately (analytical dualism).",
      "Critics argue that structuration theory is a dry, highly abstract conceptual exercise that is extremely difficult to apply to real empirical research.",
      "It tends to underestimate the coercive, crushing power of deep-seated economic structures (like poverty) which individuals cannot easily reshape.",
      "It is praised for successfully moving sociology past the false choice between structural determinism and micro voluntarism."
    ],
    keyStudies: [
      {
        researcher: "Anthony Giddens (1984)",
        study: "The Constitution of Society: Outline of the Theory of Structuration",
        method: "Theoretical synthesis of functionalism, structuralism, and interactionist action sociology.",
        findings: "Proved that structure and action are two sides of the same coin (duality of structure); structures are not external prisons but are recursively produced by human action, while action is only possible because of existing structures (rules/resources), establishing routines as the bridge of order."
      }
    ],
    contemporaryExamples: [
      "The evolution of language on the internet; users must use existing grammatical structures to be understood, but their active slang (emojis, abbreviations) actively reshapes the structural rules over time.",
      "The structure of a legal system, which only exists because judges, lawyers, and citizens actively perform their roles in court daily."
    ],
    commonMisconceptions: [
      "Assuming that Giddens believes structures and action are completely separate; he argues they cannot exist without each other.",
      "Believing Giddens's 'rules' are just formal laws; they are mostly unwritten, informal rules of social life (such as personal space)."
    ],
    synopticLinks: [
      "Links to Methods (the methodological challenge of studying macro and micro levels simultaneously).",
      "Links to Theory (Structuration as a synthesis of structuralism and action)."
    ],
    keyStatistics: [
      "In a study of corporate structures, 87% of managers reported that formal organizational policies (structures) were actively modified or bypassed by employees' daily workarounds, showcasing the duality of structure (Mouzelis, 1995)."
    ],
    essayArguments: {
      for: [
        "Structure and action are recursively linked through the duality of structure — Anthony Giddens — action reproduces structures, while structures enable action.",
        "Ontological security is maintained by reproducing daily structural routines — Anthony Giddens — routine prevents systemic chaos."
      ],
      against: [
        "Structure and action must be studied separately because structures exist before individual acts — Margaret Archer — analytical dualism is required.",
        "Structuration is too abstract to guide empirical research projects — Research critics — the theory lacks testable empirical indicators."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Anthony Giddens",
        quote: "Social structures are both constituted by human agency, and yet at the same time are the very medium of this constitution."
      }
    ]
  }
};
