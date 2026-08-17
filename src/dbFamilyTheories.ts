import { TextbookRAGEntry } from './sociologyRAG';

export const familyTheoriesDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Functionalist (Murdock, Parsons)": {
    theorists: ["George Peter Murdock", "Talcott Parsons", "Ronald Fletcher", "Steven Horwitz", "William J. Goode", "Peter Laslett", "Michael Anderson"],
    keyTerms: {
      "Universal Nuclear Family": "Murdock's concept that the nuclear family exists in all known human societies as the irreducible bedrock of social organisation.",
      "Four Functional Prerequisites": "Murdock's 4 core functions: Sexual regulation (stability through monogamy), Reproduction (creating new society members), Socialisation (cultural transmission), and Economic provision (division of labour).",
      "Functional Fit Thesis": "Parsons' theory that the dominant family structure evolves to meet the economic requirements of the era (extended in pre-industrial, isolated nuclear in industrial).",
      "Geographic Mobility": "The capacity of compact, isolated nuclear families to relocate quickly to urban industrial centres where factory jobs are located.",
      "Structural Differentiation": "The historical process where specialised institutions (schools, NHS, factories) take over peripheral functions previously performed by the family.",
      "Primary Socialisation of Children": "Parsons' first irreducible function: turning biological infants into social human beings with internalised cultural values.",
      "Stabilisation of Adult Personalities": "Parsons' second irreducible function (the 'warm bath theory'): family providing psychological sanctuary from the alienation of capitalist work.",
      "Instrumental vs Expressive Roles": "Parsons' division of labour: the male breadwinner provides economic survival (instrumental), while the female homemaker provides nurturing emotion work (expressive).",
      "Core vs Peripheral Functions": "Ronald Fletcher's distinction: core functions (childbearing, primary care) remain with the family; peripheral functions (education, healthcare) are modified and shared with the welfare state."
    },
    collinsFocus: "Highlights Murdock's survey of 250 societies proving universality. Details Parsons' structural-functionalist model where industrialisation demanded structural differentiation, stripping the family down to its two core, irreducible functions.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the 'loss of functions' debate. Contrasts Parsons' fit thesis with Peter Laslett's English parish records showing pre-industrial families were already nuclear, and Michael Anderson's Preston textile study showing industrialisation temporarily reinforced extended kinship for economic survival.",
    evaluationPoints: [
      "Ethnocentric & Outdated: Assumes the white, middle-class Western nuclear family is the universal ideal, ignoring single-parent, same-sex, and matriarchal family forms.",
      "Ignored the Dark Side: Idealises the home as a harmonious haven, completely ignoring domestic violence, child abuse, and patriarchal domination (Dobash & Dobash).",
      "Biological Determinism: Parsons treats gendered instrumental/expressive roles as natural biogrammars rather than oppressive social constructions (Oakley).",
      "Historical Inaccuracy: Peter Laslett and Michael Anderson proved that extended families were neither universal pre-industrially nor automatically destroyed by factories.",
      "Neo-Functionalist Update: Steven Horwitz modernises Parsons by viewing the family as an emotional and cognitive bridge connecting micro-agency with macro-economic cooperation."
    ],
    keyStudies: [
      {
        researcher: "George Peter Murdock (1949)",
        study: "Social Structure (Cross-Cultural Analysis of 250 Societies)",
        method: "Comparative cross-cultural anthropological analysis of secondary ethnographic data.",
        findings: "Concluded that the nuclear family is universal across all human societies because no alternative social institution can simultaneously fulfill the four functional prerequisites."
      },
      {
        researcher: "Peter Laslett (1972)",
        study: "Household and Family in Past Time (Cambridge Group for History of Population)",
        method: "Historical demographic analysis of English parish baptismal and census records (1564-1821).",
        findings: "Demonstrated that only 10% of households in pre-industrial England contained extended kin; late marriage age and low life expectancy meant the nuclear family was already the norm before industrialisation."
      },
      {
        researcher: "Michael Anderson (1971)",
        study: "Family Structure in Nineteenth Century Lancashire (Preston Study)",
        method: "Quantitative analysis of the 1851 census combined with historical qualitative letters.",
        findings: "Showed that early industrial urbanisation actually increased working-class extended kinship networks, as relatives pooled rent, shared childcare, and helped secure factory jobs."
      }
    ],
    contemporaryExamples: [
      "The enduring appeal of the nuclear family in contemporary government tax policies, such as the UK Married Couple's Allowance, which financially rewards traditional dual-parent structures.",
      "Modified extended families in Mauritius and India, where nuclear households maintain intense daily digital communication and reciprocal financial support with grandparents without co-residence."
    ],
    commonMisconceptions: [
      "Assuming functionalists believe families perform zero economic functions today; Fletcher proves families still function as primary economic consumption units and health care providers.",
      "Confusing Parsons' 'loss of functions' with family decline; functionalists argue structural differentiation makes the family more specialized and efficient, not obsolete."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Functionalism, Value Consensus, Organic Analogy).",
      "Links to Paper 2 Gender Roles (Bott's segregated roles, Oakley's critique of the expressive housewife).",
      "Links to Paper 3 Education (Parsons' universalistic standards and secondary socialisation bridge)."
    ],
    keyStatistics: [
      "Around 60% of all families with dependent children in the UK remain married-couple nuclear families (ONS, 2023).",
      "Fletcher's study shows 70% of non-critical illnesses are treated entirely inside the family home before any medical doctor is consulted."
    ],
    essayArguments: {
      for: [
        "The nuclear family performs irreplaceable psychological and socialising functions — Talcott Parsons — primary socialisation and personality stabilisation cannot be replicated by bureaucratic state institutions.",
        "Universal functional requirements demand family structure — G.P. Murdock — cross-cultural data from 250 societies proves sexual regulation and economic cooperation require stable family units."
      ],
      against: [
        "The functionalist view is an ideological mask hiding patriarchal exploitation — Ann Oakley — the expressive role traps women into unpaid domestic servitude.",
        "Historical reality disproves the functional fit thesis — Peter Laslett & Michael Anderson — pre-industrial families were already nuclear, and early industrial families expanded kinship ties."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Talcott Parsons",
        quote: "The family's primary functions are the primary socialisation of children and the stabilisation of the adult personalities of the population."
      },
      {
        theorist: "George Peter Murdock",
        quote: "The nuclear family is a universal human social grouping. Either as the sole prevailing form or as the basic unit from which more complex forms are compounded."
      },
      {
        theorist: "Ronald Fletcher",
        quote: "The family has not lost its functions; rather, its functions have been modified and specialized to work in partnership with the modern state."
      }
    ]
  },
  "Marxist (Engels, Zaretsky)": {
    theorists: ["Friedrich Engels", "Karl Marx", "Eli Zaretsky", "Louis Althusser", "Pierre Bourdieu", "David Cooper"],
    keyTerms: {
      "Monogamous Nuclear Family": "Engels' argument that monogamous marriage was developed alongside private property to ensure legitimate heirs for inheritance, legally subjugating women.",
      "Ideological State Apparatus (ISA)": "Althusser's term for cultural institutions, including the family, that transmit ruling-class ideology, teaching obedience to hierarchy and the work ethic.",
      "Unit of Consumption": "The modern family's economic role under capitalism: purchasing goods, driven by targeted advertising, pester power, and status competition, directly creating surplus profits.",
      "Cushioning Effect (Safety Valve)": "Zaretsky's concept that the family acts as a private emotional refuge where alienated workers vent frustrations, preventing anti-capitalist revolution.",
      "Reproduction of Labour Power": "The family's daily maintenance and generational reproduction of healthy, compliant workers at zero cost to the capitalist class.",
      "Pester Power": "Media-driven marketing targeting children within families to pressure parents into purchasing consumer goods.",
      "Cultural & Economic Capital": "Bourdieu's concept showing how ruling-class families pass down wealth, elite cultural tastes (habitus), and elite connections to maintain intergenerational privilege."
    },
    collinsFocus: "Details Engels' historical materialist origins of the family in private property accumulation. Examines Althusser's ISA and Zaretsky's analysis of the family as an economic shock-absorber for capitalist worker alienation.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the family's three capitalist functions: ideological control (obedience to authority), economic reproduction (unpaid generational replacement), and political stabilisation (diffusing working-class militancy by forcing workers into mortgage/debt dependencies).",
    evaluationPoints: [
      "Economic Reductionism: Assumes all family relationships and emotional bonds are mechanically dictated by economic property relations.",
      "Gender Blindness: Focuses on social class exploitation while overlooking how patriarchy oppresses women inside working-class households (Feminist critique).",
      "Neglects Real Fulfilment: Many people genuinely derive deep happiness, solidarity, and psychological safety from family life rather than feeling exploited or brainwashed.",
      "Working-Class Resistance: Families can be centres of radical working-class consciousness and mutual aid (e.g. miners' strike support groups) rather than submissive ISAs.",
      "Postmodern Plurality: High divorce rates and diverse household forms disprove the claim that a uniform bourgeois nuclear template is successfully imposed on all."
    ],
    keyStudies: [
      {
        researcher: "Eli Zaretsky (1976)",
        study: "Capitalism, the Family, and Personal Life",
        method: "Theoretical Marxist historical analysis of capitalist transitions.",
        findings: "Demonstrated that capitalism created an artificial split between the alienated public world of work and the private haven of the family, forcing the family to carry impossible emotional burdens."
      },
      {
        researcher: "Friedrich Engels (1884)",
        study: "The Origin of the Family, Private Property and the State",
        method: "Historical-comparative analysis of early anthropological data on tribal societies.",
        findings: "Argued that primitive communism was classless and promiscuous; the emergence of private property necessitated monogamous marriage to ensure clear paternity for inheritance."
      }
    ],
    contemporaryExamples: [
      "The commercialisation of family holidays and celebrations (Christmas, Halloween, Valentine's Day) where corporations exploit parental guilt and pester power for profit.",
      "Inheritance tax loopholes and family trusts in the UK and USA used by the top 1% to transfer multi-million pound property portfolios tax-free across generations."
    ],
    commonMisconceptions: [
      "Believing Marxists want to abolish family love; Marxists critique the exploitative capitalist structure of the family, not personal affection between human beings.",
      "Assuming Zaretsky agrees the family is a successful haven; he argues the haven is an illusion that ultimately props up the very system causing worker distress."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Althusser's ISA vs RSA, False Class Consciousness).",
      "Links to Paper 3 Education (Bowles & Gintis' correspondence principle and reproduction of class inequality).",
      "Links to Paper 4 Media (Advertising, consumerism, and the culture industry of Adorno & Horkheimer)."
    ],
    keyStatistics: [
      "The top 1% of the global population owns over 45% of total household wealth, transferred predominantly through nuclear family inheritance (Credit Suisse Global Wealth Report).",
      "UK parents spend an average of over £460 per child on Christmas presents alone, demonstrating the immense economic pressure on the family as a unit of consumption."
    ],
    essayArguments: {
      for: [
        "The family serves the ideological and economic needs of capitalism — Eli Zaretsky — it socialises workers into submissive discipline and serves as an indispensable unit of consumption.",
        "Monogamy emerged to preserve private property — Friedrich Engels — marriage legally institutionalises wealth inheritance and the historic defeat of the female sex."
      ],
      against: [
        "Marxism ignores the patriarchal exploitation of women by men — Radical Feminists — women's oppression predates capitalism and exists across all socialist systems.",
        "The family provides genuine emotional security and functional solidarity — Functionalists — reducing the warmth of family life to capitalist brainwashing is deterministic."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Eli Zaretsky",
        quote: "The family is a cushion against the brutal effects of capitalism, but it cannot compensate for the alienation of the workplace."
      },
      {
        theorist: "Friedrich Engels",
        quote: "The modern individual family is founded on the open or concealed domestic slavery of the wife, and modern society is a mass composed of these individual families."
      },
      {
        theorist: "Louis Althusser",
        quote: "The family is an ideological state apparatus that transforms individuals into subjects obedient to the demands of the economic base."
      }
    ]
  },
  "Feminist (Oakley, Firestone, Greer)": {
    theorists: ["Ann Oakley", "Shulamith Firestone", "Germaine Greer", "Fran Ansley", "Margaret Benston", "Delphy & Leonard", "Heidi Safia Mirza", "Bell Hooks"],
    keyTerms: {
      "Patriarchy": "A universal social system in which men hold primary power and dominate roles in political leadership, moral authority, social privilege, and control of property.",
      "Dual Burden (Double Shift)": "The workload of women who have paid jobs outside the home and must also perform the bulk of unpaid domestic labour and childcare inside the home.",
      "Triple Shift": "Duncombe and Marsden's concept: women performing paid employment, domestic chores, and the invisible emotional management of the family.",
      "Takers of Shit": "Fran Ansley's Marxist feminist term describing how wives absorb the frustration, alienation, and anger of their exploited husbands, protecting capitalism.",
      "Reserve Army of Labour": "Veronica Beechey and Irene Bruegel's concept: women hired cheaply during economic booms and discarded back into the domestic sphere during slumps.",
      "Separatism": "Radical feminist strategy (advocated by Greer) where women live entirely independently of men to escape patriarchal violence and domination.",
      "Biological Dependency": "Shulamith Firestone's thesis that women's reproductive biology is the root cause of inequality, requiring artificial reproduction technology for liberation.",
      "Matrifocal Alternative": "Female-headed kinship structures where maternal grandmothers and mothers raise children collaboratively without patriarchal control."
    },
    collinsFocus: "Breaks down the core branches: Liberal Feminism (Somerville, gradual legal progress, Equal Pay Acts), Radical Feminism (Greer, Firestone, Delphy & Leonard, the family as patriarchal core), and Marxist Feminism (Benston, Ansley, unpaid domestic labour propping up capital).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of feminist critiques of the nuclear family. Highlights Black Feminism (Mirza, hooks) showing the family as a haven against racism, and Difference Feminism critiquing the universalisation of white middle-class female experiences.",
    evaluationPoints: [
      "Dated View of Progress: Radical feminism overlooks substantial legal, educational, and professional gains made by women (Liberal feminist critique).",
      "Overlooks Female Agency: Portrays women as passive victims trapped in domesticity, ignoring how women actively negotiate power, cohabitation terms, and careers.",
      "Ethnocentrism of White Feminism: Black feminists (Mirza, hooks) argue that for ethnic minority women, the family is a crucial fortress of solidarity and cultural defence against institutional racism.",
      "Ignores Diversity of Family Models: Many contemporary relationships exhibit genuine symmetry, shared parental leave, and dual-career equality.",
      "Postmodern Pluralism: Personal life is now characterised by fluid lifestyle choices where women construct egalitarian, chosen relationships (Smart, Weeks)."
    ],
    keyStudies: [
      {
        researcher: "Ann Oakley (1974)",
        study: "The Sociology of Housework",
        method: "In-depth semi-structured qualitative interviews with 40 London housewives.",
        findings: "Disproved Young & Willmott's symmetrical family claims; found that 70% of women experienced housework as alienated, lonely, and monotonous, with minimal male involvement."
      },
      {
        researcher: "Christine Delphy & Diana Leonard (1992)",
        study: "Familiar Exploitation: A New Analysis of Marriage in Contemporary Western Societies",
        method: "Theoretical feminist economic analysis of domestic labour and consumption.",
        findings: "Argued that the family is an economic system where the male head of the household exploits the unpaid domestic and sexual labour of female members."
      },
      {
        researcher: "Fran Ansley (1972)",
        study: "Marxist Feminism and the American Working-Class Family",
        method: "Theoretical synthesis of Marxist alienation and feminist family dynamics.",
        findings: "Described wives as 'takers of shit', absorbing the workplace frustration of proletarian husbands which would otherwise be directed into anti-capitalist rebellion."
      }
    ],
    contemporaryExamples: [
      "The 'mental load' or cognitive labour documented in modern dual-earner households, where mothers are disproportionately responsible for planning medical appointments, school schedules, and childcare logistics.",
      "The impact of the COVID-19 pandemic lockdowns, which studies showed pushed the burden of home-schooling and domestic chores overwhelmingly onto working mothers."
    ],
    commonMisconceptions: [
      "Assuming all feminists want to abolish the nuclear family; Liberal feminists seek to reform domestic equality through shared parental leave and equal pay legislation.",
      "Believing Black feminists agree that the family is purely oppressive; Black feminists view the family as a vital source of refuge from racism in the public sphere."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Gender identity construction, Oakley's manipulation and canalisation).",
      "Links to Paper 2 Gender Roles (Domestic division of labour, Pahl & Vogler's financial power models).",
      "Links to Paper 4 Religion (Patriarchal religious hierarchies and the stained-glass ceiling)."
    ],
    keyStatistics: [
      "UK time-use data shows women do an average of 1.5 hours more unpaid domestic labour per day than men, even when both partners work full-time (ONS, 2022).",
      "Over 70% of female murder victims globally are killed by a current or former male intimate partner or family member (UN Women / WHO Data)."
    ],
    essayArguments: {
      for: [
        "The family remains fundamentally patriarchal — Delphy & Leonard — men exploit the unpaid domestic, emotional, and physical labour of women to maintain dominance.",
        "Women bear the triple shift in contemporary families — Duncombe & Marsden — paid employment has simply added a third burden to women's existing domestic and emotional duties."
      ],
      against: [
        "Gender relationships in the family have experienced a quiet revolution — Jonathan Gershuny & Oriel Sullivan — men are doing significantly more childcare and domestic work.",
        "The family operates as a haven against racism for minority women — Heidi Safia Mirza & Bell Hooks — mainstream feminism ignores the protective value of extended minority families."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Ann Oakley",
        quote: "The housewife role is exclusively allocated to women, has the status of non-work, and is economically dependent."
      },
      {
        theorist: "Fran Ansley",
        quote: "When wives play their traditional role as takers of shit, they absorb their husbands' legitimate workplace anger."
      },
      {
        theorist: "Germaine Greer",
        quote: "Women have very little idea of how much men hate them. The nuclear family remains a danger zone for women."
      }
    ]
  },
  "Postmodernist (Stacey, Giddens, Beck)": {
    theorists: ["Judith Stacey", "Anthony Giddens", "Ulrich Beck", "Carol Smart", "David Cheal", "David Morgan"],
    keyTerms: {
      "Individualisation Thesis": "Beck and Giddens' theory that traditional social structures (class, gender, religion) have lost their power, forcing individuals to construct their own personal life narratives.",
      "Pure Relationship": "Giddens' concept of a modern relationship entered into purely for emotional satisfaction, lasting only as long as both partners find it fulfilling.",
      "Plastic Sexuality": "Giddens' term for sexuality freed from reproduction due to modern contraception and LGBTQ+ liberation, enabling sex to become an aspect of personal identity.",
      "Confluent Love": "Conditional, reflexive love based on emotional intimacy and mutual equality, replacing unconditional romantic lifelong commitment.",
      "Divorce-Extended Family": "Judith Stacey's term for dynamic, chosen kinship networks connecting ex-in-laws, ex-spouses, new partners, and step-children.",
      "Negotiated Family": "Ulrich Beck's concept of families that do not conform to fixed norms, where roles and domestic duties must be continually discussed and agreed.",
      "Risk Society": "Beck's concept that modern life is characterised by calculated risks and uncertainties; entering marriage involves calculating the statistical risk of divorce.",
      "Connectedness Thesis": "Carol Smart's alternative concept emphasizing that people are not isolated individual choosers, but are deeply embedded in webs of past relationships, memories, and obligations."
    },
    collinsFocus: "Focuses on the collapse of the modernist meta-narrative of 'The Family'. Details Giddens' pure relationships, confluent love, and Beck's negotiated family in late modern risk society.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of postmodern optimism. Highlights Judith Stacey's ethnographic study in Silicon Valley showing women creating flexible divorce-extended networks, and contrasts it with Carol Smart's sociology of personal life and connectedness thesis.",
    evaluationPoints: [
      "Exaggerates Freedom of Choice: Ignores how poverty, class inequality, and patriarchal structures still severely constrain people's relationship decisions (May, Smart).",
      "Connectedness Thesis (Smart): People cannot simply walk away from relationships at will; children, mortgages, shared histories, and emotional ties keep people bonded.",
      "Persistence of Traditional Norms: Despite theoretical fluidity, the majority of people still aspire to long-term monogamous relationships and traditional parenting cycles.",
      "Ignores Gender Power Imbalances: Individualisation assumes equal bargaining power, but women with young children are economically disadvantaged in negotiations.",
      "Privileged Perspective: Free exploration of 'plastic sexuality' and diverse lifestyle choices is predominantly available to affluent middle-class urban populations."
    ],
    keyStudies: [
      {
        researcher: "Judith Stacey (1990)",
        study: "Brave New Families: Stories of Domestic Upheaval in Late Twentieth-Century America",
        method: "Longitudinal life-history interviews and participant observation with working-class families in Silicon Valley, California.",
        findings: "Discovered that women were the primary agents of change, rejecting traditional patriarchal marriage to create flexible 'divorce-extended families' linking ex-husbands' new partners and kin."
      },
      {
        researcher: "Carol Smart (2007)",
        study: "Personal Life: New Directions in Sociological Thinking",
        method: "Qualitative narrative interviews exploring intimacy, memory, and kinship.",
        findings: "Critiqued Giddens and Beck's individualisation thesis; demonstrated that people's lives are deeply interconnected within complex webs of relational obligations and emotional memories."
      }
    ],
    contemporaryExamples: [
      "Modern co-parenting apps and blended family schedules where divorced parents, step-parents, and extended grandparents collaborate in multi-household arrangements.",
      "Living Apart Together (LAT) relationships among professionals in metropolitan cities who maintain long-term intimate commitments while preserving independent residences."
    ],
    commonMisconceptions: [
      "Assuming postmodernists argue the family has ceased to exist; they argue 'The Family' (monolithic concept) has been replaced by diverse, fluid 'families and personal relationships'.",
      "Confusing Giddens' 'pure relationship' with a perfect relationship; a pure relationship is inherently unstable because it can be terminated as soon as personal satisfaction wanes."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Postmodernism, Metanarratives, Baudrillard's Simulacra).",
      "Links to Paper 2 Family Diversity (Cohabitation, Single-person households, Families of choice).",
      "Links to Paper 4 Globalisation (Deterritorialisation, Individualisation, and Transnational Families)."
    ],
    keyStatistics: [
      "Over 42% of marriages in England and Wales currently end in divorce, illustrating Giddens' concept of confluent love replacing lifelong permanence (ONS).",
      "Over 2.2 million couples in the UK are currently Living Apart Together (LAT), representing around 10% of the adult population."
    ],
    essayArguments: {
      for: [
        "Family life is now defined by choice and individualisation — Ulrich Beck & Anthony Giddens — individuals construct negotiated families and pure relationships based on personal fulfilment.",
        "Women have pioneered dynamic divorce-extended family networks — Judith Stacey — traditional patriarchal structures have fragmented into fluid, supportive kinship webs."
      ],
      against: [
        "The individualisation thesis exaggerates freedom of choice — Carol Smart — structural class, gender, and emotional connectedness still deeply bind and constrain individuals.",
        "Traditional family ideals remain dominant — Robert Chester — the neo-conventional nuclear family remains the primary life-cycle norm for the vast majority."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Judith Stacey",
        quote: "Modern family arrangements are diverse, fluid, and unresolved. Every family is an alternative family."
      },
      {
        theorist: "Anthony Giddens",
        quote: "The pure relationship is entered into for its own sake, for what can be derived by each person from a sustained association with another; and it continues only so long as it is thought by both parties to deliver enough satisfaction."
      },
      {
        theorist: "Carol Smart",
        quote: "Rather than existing as autonomous individual choosers, our personal lives are embedded within complex webs of past relationships, memories, and mutual obligations."
      }
    ]
  },
  "New Right Perspective": {
    theorists: ["Charles Murray", "Patricia Morgan", "Norman Dennis & George Erdos", "Roger Scruton", "Brenda Almond"],
    keyTerms: {
      "Traditional Nuclear Family": "The New Right's idealized family form: married, heterosexual, dual-parent family with segregated roles (male breadwinner, female homemaker).",
      "Underclass": "Charles Murray's concept of a distinct subcultural group at the bottom of the class structure characterised by worklessness, crime, and lone parenthood.",
      "Dependency Culture": "A state of reliance on government welfare benefits that destroys individual initiative, self-reliance, and familial duty.",
      "Perverse Incentives": "Welfare policies (such as council housing for unmarried mothers) that inadvertently encourage single parenthood and irresponsible fatherhood.",
      "Fatherlessness": "Dennis and Erdos' thesis that boys raised without co-resident fathers suffer from inadequate socialisation, lacking discipline and male role models.",
      "Family Breakdown": "The erosion of traditional marriage through rising divorce, cohabitation, and illegitimacy, viewed as the root cause of educational failure and crime.",
      "Moral Decay": "The societal decline in traditional Christian family values, sexual restraint, and duty, promoted by liberal permissive legislation."
    },
    collinsFocus: "Examines the conservative sociological perspective linking rising welfare expenditure to family dissolution, delinquency, educational underachievement, and the rise of an urban underclass.",
    cupFocus: "Explores Livesey & Blundell's critical review of New Right social policy proposals. Evaluates Patricia Morgan's attacks on cohabitation and marriage equality, alongside Charles Murray's cross-Atlantic comparisons of welfare dependency in the USA and Britain.",
    evaluationPoints: [
      "Blaming the Victim: Scapegoats single mothers and the poor for wider economic structural inequalities, job deindustrialisation, and low wages.",
      "Idealised Past: Romanticises the Victorian nuclear family, ignoring its high rates of domestic violence, prostitution, child labour, and severe poverty.",
      "No Evidence of Welfare Incentive: Sociological research proves the vast majority of lone parents do not choose single motherhood for benefits, but flee abusive relationships.",
      "Hostility to Equality: Ignores the benefits of gender equality, divorce rights, and LGBTQ+ liberation, attempting to force women back into economic subservience.",
      "Empirical Weakness: Children from diverse family forms perform just as well academically when controlling for income and material deprivation (Robinson)."
    ],
    keyStudies: [
      {
        researcher: "Charles Murray (1989)",
        study: "The Emerging British Underclass",
        method: "Comparative analysis of UK social welfare statistics and crime data.",
        findings: "Argued that generous welfare benefits in Britain were creating a burgeoning underclass of unmarried mothers and predatory, undisciplined young men."
      },
      {
        researcher: "Norman Dennis & George Erdos (2000)",
        study: "Families Without Fatherhood",
        method: "Longitudinal demographic and social trends analysis in the UK.",
        findings: "Claimed that fatherless boys grow up without internalising responsibilities, leading to higher rates of antisocial behaviour, crime, and educational failure."
      },
      {
        researcher: "Patricia Morgan (2000)",
        study: "Marriage-Lite: The Case Against Cohabitation",
        method: "Comparative survey analysis of married vs cohabiting couples.",
        findings: "Argued cohabitation is inherently unstable, shorter-lived, and more prone to domestic abuse and infidelity than traditional legal marriage."
      }
    ],
    contemporaryExamples: [
      "The UK Government's 'Troubled Families Programme' and benefit caps, which reflect New Right assumptions that family culture rather than economic poverty drives social issues.",
      "Political rhetoric in the USA promoting 'marriage initiatives' and fatherhood programs as solutions to inner-city poverty and youth crime."
    ],
    commonMisconceptions: [
      "Confusing the New Right with Functionalism; while both prefer the nuclear family, Functionalism views family change as adaptive evolution, whereas the New Right views it as catastrophic moral collapse.",
      "Assuming the New Right is opposed to all state intervention; they strongly support state interventions that promote traditional marriage and penalize single parenthood."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Under-socialisation, Subcultures, and Deviance).",
      "Links to Paper 2 Family Diversity (Cohabitation vs Marriage, Single-parent households).",
      "Links to Paper 3 Education Policy (Marketisation, Parentocracy, and Compensatory Education)."
    ],
    keyStatistics: [
      "Over 90% of lone-parent families in the UK are headed by mothers, with over 45% living in relative poverty compared to 20% of children in couple families (CPAG, 2023).",
      "Cohabiting couple relationships are on average three times more likely to break down before a child turns five than married relationships (Millennium Cohort Study)."
    ],
    essayArguments: {
      for: [
        "Traditional marriage is essential for effective primary socialisation — Dennis & Erdos — children, particularly boys, require co-resident male role models to learn civic discipline.",
        "Welfare benefits create dependency and family breakdown — Charles Murray — state subsidies for single mothers undermine traditional work and marital commitments."
      ],
      against: [
        "New Right ideology unjustly blames the victims of poverty — Hilary Land — lone parents are impoverished due to low wages and unaffordable childcare, not moral deficiency.",
        "Family diversity does not cause juvenile crime or failure — Allan & Crow — poverty and material deprivation, rather than family structure, determine life chances."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Charles Murray",
        quote: "The underclass is not defined by its lack of money, but by its behaviour: high illegitimacy, high crime, and unwillingness to enter the labor force."
      },
      {
        theorist: "Patricia Morgan",
        quote: "Cohabitation is marriage-lite: less stable, less committed, and more damaging to children's emotional development."
      },
      {
        theorist: "Norman Dennis",
        quote: "A generation of fatherless boys becomes a generation of men without the habits of work, discipline, and family commitment."
      }
    ]
  }
};
