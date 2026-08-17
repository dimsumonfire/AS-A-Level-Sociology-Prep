import { TextbookRAGEntry } from './sociologyRAG';

export const familyDiversityDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Family Types (Nuclear, Extended, Reconstituted, Lone-parent)": {
    theorists: ["Robert & Rhona Rapoport", "Peter Laslett", "Michael Anderson", "Julia Brannen", "Graham Allan, Graham Crow & Sheila Hawker", "Jen Beaumont", "Sasha Roseneil"],
    keyTerms: {
      "Five Types of Family Diversity": "The Rapoports' landmark taxonomy: Organisational (structure/division of labour), Cultural (ethnic/religious), Social Class (wealth/parenting style), Life-Course (stage in life cycle), and Cohort (historical generation).",
      "Isolated Nuclear Family": "Parsons' term for a self-contained two-generation unit geographically and economically detached from extended kin.",
      "Beanpole Family": "Julia Brannen's term for long, thin multi-generational families with few children (weak horizontal branches) but 3-4 living generations (strong vertical ties) due to high life expectancy and low birth rates.",
      "Reconstituted (Step) Family": "A family unit formed after divorce or bereavement where one or both adults bring children from previous relationships.",
      "Modified Extended Family": "Gordon's concept of extended families who live apart in separate households but maintain regular digital contact, emotional closeness, and mutual aid.",
      "Lone-Parent Family": "A household consisting of one parent (over 90% mothers in the UK) living with dependent children, resulting from divorce, separation, bereavement, or single choice.",
      "Living Apart Together (LAT)": "Sasha Roseneil's concept: couples in a committed intimate partnership who maintain separate residential households for autonomy or career demands.",
      "Single-Person Household": "A household containing an individual living alone due to relationship breakdown, delay of marriage, bereavement, or independent lifestyle choice."
    },
    collinsFocus: "Systematically outlines the Rapoports' 5 dimensions of diversity. Details the structural rise of single-parent, reconstituted, and beanpole families, alongside Robert Chester's concept of the 'neo-conventional family' where dual-earners retain the nuclear form.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the diversity vs dominance debate. Evaluates Allan, Crow & Hawker's ethnographic study of step-family boundary negotiations, Gordon's modified extended kinship networks, and Beaumont's demographic analysis of the explosion in single-person households (29% of UK households).",
    evaluationPoints: [
      "Chester's Neo-Conventional Family: Robert Chester argues diversity is exaggerated; the nuclear structure remains the standard ideal that most people cycle through at some life stage.",
      "New Right Pathologisation: The New Right views lone-parent and reconstituted families as broken, dysfunctional structures causing social problems and dependency.",
      "Stepfamily Negotiation: Allan, Crow & Hawker show stepfamilies face unique ambiguity over parental authority, requiring complex emotional negotiation rather than automatic harmony.",
      "Class Influence: Lower-income families have higher rates of lone parenthood due to economic stress, while middle-class families use economic capital to stabilise dual-career units.",
      "Resilience of Modified Extended Ties: Despite residential separation, grandparents remain vital economic and childcare anchors (Wellard, Brannen)."
    ],
    keyStudies: [
      {
        researcher: "Robert & Rhona Rapoport (1982)",
        study: "Contemporary Families: A Sociological Perspective",
        method: "Comprehensive theoretical and empirical review of British household statistics.",
        findings: "Proved that family life in Britain had shifted irreversibly away from a single dominant nuclear family into a pluralistic landscape of 5 distinct types of diversity."
      },
      {
        researcher: "Graham Allan, Graham Crow & Sheila Hawker (2011)",
        study: "Stepfamilies: Dynamics, Ambiguities, and Negotiations",
        method: "Qualitative in-depth case study interviews with step-parents and children.",
        findings: "Demonstrated that stepfamilies are dynamic and negotiated; children often maintain strong loyalties to non-resident biological parents, requiring step-parents to earn authority rather than assume it."
      },
      {
        researcher: "Julia Brannen (2003)",
        study: "Ageing and the Intergenerational Compact: The Beanpole Family",
        method: "Longitudinal demographic and qualitative analysis of multi-generational kinship networks in the UK.",
        findings: "Identified the rise of the 4-generation 'beanpole family', where low fertility and high life expectancy create intense vertical grandparent-grandchild caring ties."
      }
    ],
    contemporaryExamples: [
      "The rapid rise of 'Boomerang Children' in the UK and USA—young adult graduates moving back into the parental home due to soaring house prices and student debt.",
      "The legal recognition and protection of step-parents and cohabitants under modern child custody and inheritance laws."
    ],
    commonMisconceptions: [
      "Believing that extended families no longer exist in modern society; modified extended families and beanpole networks are thriving and provide over 30% of UK informal childcare.",
      "Assuming that single-person households are exclusively elderly widows; young professional adults choosing singlehood form the fastest-growing demographic of solo living."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Identity (Class, Age, and changing identity choices).",
      "Links to Paper 2 Demography (Ageing population, falling birth rates, beanpole structures).",
      "Links to Paper 4 Globalisation (Migration, diasporic families, transnational networks)."
    ],
    keyStatistics: [
      "Single-person households make up 29% of all UK households, up from 12% in 1961 (Beaumont, ONS).",
      "Reconstituted families with dependent children account for around 11% of all couple families in the UK (ONS, 2022)."
    ],
    essayArguments: {
      for: [
        "Britain has transitioned into a fundamentally diverse, pluralistic family society — Rapoport & Rapoport — organisational, cultural, and class variations have permanently fragmented the nuclear monopoly.",
        "Stepfamilies and lone parents represent adaptable modern alternatives — Allan, Crow & Hawker — family life is successfully constructed around negotiated personal networks."
      ],
      against: [
        "The extent of family diversity is greatly exaggerated — Robert Chester — the neo-conventional dual-earner nuclear family remains the dominant life-cycle experience for most citizens.",
        "Alternative family forms generate instability and child disadvantage — Charles Murray & Patricia Morgan — the traditional nuclear family remains the only functional structure."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Robert & Rhona Rapoport",
        quote: "Families in Britain today are in a state of transition. Plurality is now the social norm, replacing the monolithic family of the past."
      },
      {
        theorist: "Julia Brannen",
        quote: "The beanpole family structure creates an intergenerational pivot, binding grandparents, parents, and grandchildren across longer lifespans."
      },
      {
        theorist: "Robert Chester",
        quote: "Most people still spend the major part of their lives as members of a nuclear family; the basic neo-conventional family remains the prevailing pattern."
      }
    ]
  },
  "Cultural and Ethnic Diversity": {
    theorists: ["Richard Berthoud", "Tariq Modood", "Angela Dale", "Miri Song", "Roger Ballard", "Sundeep Johal", "Heidi Safia Mirza"],
    keyTerms: {
      "Matrifocal Kinship": "A female-centered family structure where mothers and grandmothers form the domestic, financial, and emotional core of the household.",
      "Visiting Partner Arrangements": "Berthoud's term for African-Caribbean fathers who maintain regular romantic, financial, and paternal contact with children without co-residing.",
      "Family as Workplace": "Miri Song's concept describing how immigrant minority families (e.g. Chinese, Italian) co-opt children into the family business as a shared enterprise.",
      "Modern Individualism": "Berthoud's concept describing the cultural emphasis on relationship quality and personal autonomy over formal marriage in African-Caribbean communities.",
      "Old-Fashioned Values": "Berthoud's concept describing the high marriage rates, low divorce rates, and strong multi-generational extended living among British South Asian families.",
      "Brasian Hybrid Identities": "Sundeep Johal's term for young British Asians blending traditional South Asian familial duties with British individualistic career choices.",
      "Transnational Families": "Families whose members live in different nation-states but maintain intense emotional, financial (remittances), and cultural bonds via digital technology."
    },
    collinsFocus: "Compares family patterns across South Asian (Pakistani, Indian, Bangladeshi), African-Caribbean, and White British populations. Evaluates differences in marriage, divorce, and lone-parent rates.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Richard Berthoud's 'Family Formation in Multi-Cultural Britain'. Examines Angela Dale et al.'s findings on female employment across ethnic groups and Miri Song's study on Chinese family business labour.",
    evaluationPoints: [
      "Ethnic Diversity as Adaptation: Cultural family patterns are not biological constants, but active rational adaptations to socio-economic opportunities and host-society discrimination (Ballard).",
      "Internal Diversity: Broad ethnic labels (e.g. 'Asian') mask deep religious and class divides (e.g., Indian Sikhs and Hindus have higher incomes and smaller families than Pakistani and Bangladeshi Muslims).",
      "Intergenerational Conflict: Second and third-generation British Asians often experience cultural tension between parental collectivism and Western individualistic freedom (Johal).",
      "Strength of African-Caribbean Women: Matrifocal arrangements should be recognized as resilient networks of female empowerment rather than 'broken fatherless homes' (Mirza).",
      "Changing Employment Norms: Angela Dale et al. prove younger minority women are rapidly entering higher education and full-time professional careers, transforming traditional domestic roles."
    ],
    keyStudies: [
      {
        researcher: "Richard Berthoud (2000)",
        study: "Family Formation in Multi-Cultural Britain",
        method: "Quantitative analysis of the Fourth National Survey of Ethnic Minorities and Labour Force Survey.",
        findings: "Found three distinct patterns: White British (standard trend), African-Caribbean (low marriage, high single-parenthood, visiting partners, 'modern individualism'), and South Asian (high marriage, low divorce, extended households, 'old-fashioned values')."
      },
      {
        researcher: "Miri Song (1999)",
        study: "Helping Out: Children's Labor in Ethnic Businesses",
        method: "Qualitative semi-structured interviews with young Chinese adults working in family take-aways and restaurants in the UK.",
        findings: "Showed that helping out in the family business was seen as a moral obligation of familial solidarity and reciprocal kinship support rather than capitalist exploitation."
      },
      {
        researcher: "Angela Dale et al. (2004)",
        study: "Ethnic Differences in Women's Family Characteristics and Economic Activity Profiles",
        method: "Secondary longitudinal statistical analysis of UK Labour Market Trends data.",
        findings: "Discovered sharp employment variations: Black women maintain full-time employment through childbearing, Indian women favor part-time work, and Pakistani/Bangladeshi women historically withdrew upon marriage, though younger cohorts are increasingly career-oriented."
      }
    ],
    contemporaryExamples: [
      "The massive growth in remittance flows sent by diaspora family members in the UK and USA back to extended kin in Pakistan, Nigeria, and the Philippines.",
      "The popularity of modern hybrid wedding celebrations combining traditional South Asian Hindu/Muslim ceremonies with Western evening receptions."
    ],
    commonMisconceptions: [
      "Stereotyping all African-Caribbean fathers as absent and neglectful; Berthoud proves many operate highly supportive 'visiting partner' relationships.",
      "Assuming that arranged marriages in South Asian communities are forced marriages; arranged marriages involve mutual consent and active family consultation."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Ethnic identity, Brasian hybridity, cultural defence).",
      "Links to Paper 3 Education (Ethnicity and educational attainment, parental expectations).",
      "Links to Paper 4 Globalisation (Transnational migration, global care chains, cultural hybridity)."
    ],
    keyStatistics: [
      "Over 50% of African-Caribbean families with dependent children in the UK are lone-parent households, compared to only 10% of British Indian families (Berthoud, ONS).",
      "Over 65% of Pakistani and Bangladeshi households contain extended kin or operate multi-generational co-residence (ONS, 2022)."
    ],
    essayArguments: {
      for: [
        "Ethnic diversity has permanently enriched the landscape of modern family life — Richard Berthoud — diverse cultural traditions create distinct and resilient kinship arrangements.",
        "Minority extended families provide indispensable economic solidarity — Miri Song & Roger Ballard — mutual family enterprise and reciprocal care defend against racial inequality."
      ],
      against: [
        "Cultural hybridity is eroding distinct ethnic differences — Sundeep Johal — young generations of British Asians increasingly adopt Western individualistic marriage and career patterns.",
        "Class position remains a more powerful determinant of family life than ethnicity — Angela Dale — high-earning professionals across all ethnic groups exhibit similar symmetrical nuclear structures."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Richard Berthoud",
        quote: "African-Caribbean family patterns represent a vanguard of modern individualism, while South Asian families maintain the strong moral core of old-fashioned values."
      },
      {
        theorist: "Miri Song",
        quote: "For ethnic minority families, the family business is a collective enterprise where children's labor is a demonstration of filial piety and reciprocal survival."
      },
      {
        theorist: "Angela Dale",
        quote: "Educational advancement and labor market participation among young British Asian women is transforming traditional patriarchal domestic expectations."
      }
    ]
  },
  "Sexual Orientation Diversity": {
    theorists: ["Jeffrey Weeks", "Gillian Dunne", "Carol Smart", "Kath Weston", "Roseneil & Budgeon"],
    keyTerms: {
      "Families of Choice": "Kath Weston and Jeffrey Weeks' concept: kinship networks constructed freely by LGBTQ+ individuals based on mutual friendship, support, and chosen commitment rather than biology.",
      "Queer Kinship": "Non-heteronormative relationship structures that reject traditional patriarchal and gendered assumptions about marriage and parenthood.",
      "Egalitarian Conjugal Division": "Gillian Dunne's finding that lesbian couples construct more equal, symmetrical domestic roles because they operate free from cultural gender scripts.",
      "Gender Scripts": "Deeply ingrained cultural expectations dictating how men and women 'ought' to behave in relationships, housework, and breadwinning.",
      "Civil Partnerships & Same-Sex Marriage": "Historic legal milestones (UK Civil Partnership Act 2004, Marriage (Same Sex Couples) Act 2013) that extended full legal equality to same-sex unions.",
      "Surrogacy & Assisted Reproduction": "Medical technologies and legal frameworks enabling same-sex male and female couples to parent biological children."
    },
    collinsFocus: "Examines how legal reforms (decriminalisation, civil partnerships, equal adoption rights, same-sex marriage) enabled LGBTQ+ families to move from stigmatised margins into mainstream recognition.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Jeffrey Weeks' 'chosen families' and Gillian Dunne's empirical study of 86 lesbian households, proving domestic symmetry is achieved when heteronormative gender roles are absent.",
    evaluationPoints: [
      "Dunne's Evidence on Gender Scripts: Proves that traditional domestic inequality in heterosexual couples is a social construct, not a natural outcome.",
      "Radical Queer Critique: Some radical theorists argue that seeking legal marriage assimilates LGBTQ+ couples into conservative bourgeois heteronormative structures.",
      "Continuing Prejudices: Same-sex families still face subtle discrimination, homophobic microaggressions, and legal complexities surrounding overseas surrogacy.",
      "Economic Pressures: Lesbian couples face the gender pay gap twice over in the labour market, creating unique material pressures on dual-earner arrangements.",
      "Fluidity & Friendship Networks: Weeks shows chosen families provide lifelines of emotional care during crises (e.g. HIV/AIDS epidemic) where biological families rejected them."
    ],
    keyStudies: [
      {
        researcher: "Jeffrey Weeks et al. (2001)",
        study: "Same Sex Intimacies: Families of Choice and Other Life Experiments",
        method: "Qualitative semi-structured interviews with 96 gay, lesbian, and bisexual individuals in the UK.",
        findings: "Demonstrated that LGBTQ+ individuals actively construct 'families of choice', prioritizing mutual emotional support, egalitarian negotiation, and elective kinship over biological ties."
      },
      {
        researcher: "Gillian Dunne (1999)",
        study: "Lesbian Lifestyles: Women's Work and the Transformation of Family",
        method: "Comparative empirical study of 86 lesbian couples with dependent children.",
        findings: "Found that because lesbian couples operate outside heterosexual 'gender scripts', domestic chores, childcare, and career compromises are shared equally on a symmetrical basis."
      },
      {
        researcher: "Kath Weston (1991)",
        study: "Families We Choose: Lesbians, Gays, Kinship",
        method: "Ethnographic fieldwork and in-depth interviews in San Francisco.",
        findings: "Traced how coming out historically meant exclusion from biological families, prompting gay communities to invent chosen kinship networks that replicate and surpass traditional family support."
      }
    ],
    contemporaryExamples: [
      "The growing number of male same-sex couples utilizing regulated surrogacy and shared parental leave to construct equal co-parenting households.",
      "Modern adoption statistics in the UK, where around 1 in 6 adoptions are now legally granted to same-sex couples."
    ],
    commonMisconceptions: [
      "Assuming same-sex couples mimic traditional male/female roles; Dunne proves same-sex couples explicitly reject patriarchal role-playing.",
      "Believing chosen families are less stable than biological families; Weeks demonstrates chosen networks frequently provide higher levels of reciprocal emotional intimacy."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Gender identity, sexual identity, Weeks).",
      "Links to Paper 2 Gender Roles (Bott's conjugal roles, Oakley's domestic division).",
      "Links to Paper 4 Globalisation (Global human rights, cross-border surrogacy)."
    ],
    keyStatistics: [
      "Over 120,000 same-sex marriages and civil partnerships have been registered in the UK since legalisation (ONS, 2023).",
      "17% of all child adoptions in England and Wales were to same-sex couples (Department for Education, 2022)."
    ],
    essayArguments: {
      for: [
        "Same-sex relationships pioneer genuine domestic equality — Gillian Dunne — operating without patriarchal gender scripts enables true symmetry in conjugal roles and childcare.",
        "Chosen families demonstrate the creative potential of modern kinship — Jeffrey Weeks & Kath Weston — family is defined by active commitment and care, not biological bloodlines."
      ],
      against: [
        "Same-sex families remain subject to wider economic inequalities — Radical Feminists — the gender pay gap still impacts lesbian households, limiting absolute financial autonomy.",
        "Traditional biological ties remain the resilient core for most people — Functionalists — chosen networks often lack the long-term institutional permanence of marriage."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Jeffrey Weeks",
        quote: "Families of choice represent creative life experiments, where intimacy and mutual care are negotiated freely rather than dictated by tradition."
      },
      {
        theorist: "Gillian Dunne",
        quote: "Heterosexual relationships are weighed down by the baggage of gender scripts; in lesbian relationships, equality must be negotiated from scratch."
      },
      {
        theorist: "Kath Weston",
        quote: "Love makes a family. We choose our kin not through blood, but through the enduring daily practices of solidarity and care."
      }
    ]
  },
  "Life Cycle and Generational Diversity": {
    theorists: ["Janet Finch", "David Morgan", "Carol Smart", "Julia Brannen", "Sarah Wellard", "Tamara Hareven"],
    keyTerms: {
      "Life-Course Perspective": "Tamara Hareven's approach examining the sequence of transitions, roles, and historical events individuals experience across their lives, rejecting a static family definition.",
      "Family Obligations": "Janet Finch's concept: the unwritten, negotiated moral rules governing when and how family members provide financial help, housing, or care to relatives.",
      "Sandwich (Pivot) Generation": "Adults (predominantly women in their 40s and 50s) caught between caring for dependent teenage children and supporting elderly frail parents.",
      "Intergenerational Reciprocity": "The reciprocal exchange of money, childcare, and emotional support between generations over time.",
      "Negotiated Kinship": "Finch and Mason's finding that family assistance is not automatic, but depends on past relational goodwill, geographic proximity, and personal capacity.",
      "Life Cycle Stages": "The sequence of stages an individual passes through: childhood, independent singlehood, cohabitation/marriage, child-rearing, empty nest, retirement, widowhood."
    },
    collinsFocus: "Details how individuals move through multiple family forms over their lifespan. Examines the impact of the ageing population, divorce, and boomerang children on household life cycles.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Janet Finch's 'Family Obligations' research. Evaluates the role of grandparents as vital childcare anchors (Wellard) and the emotional stresses borne by the sandwich generation.",
    evaluationPoints: [
      "Critique of Static Family Models: Proves that snapshot statistics (e.g. census data) mislead; someone living in a lone-parent household may later form a nuclear or reconstituted family.",
      "Finch's Evidence on Negotiation: Rebuts the New Right claim that family duties are natural; shows that care for elderly parents is selectively negotiated based on past fairness.",
      "Gendered Burden of Care: The sandwich generation's caring duties fall overwhelmingly on women, reinforcing gender inequalities in retirement income and pensions (Ginn & Arber).",
      "Economic Barriers to Independence: The housing crisis has disrupted the traditional life-course, extending youth dependency well into the late 20s and 30s.",
      "Grandparent Empowerment: Older people today enjoy better health and financial power (the 'grey pound'), transforming grandparenting into an active, enjoyable choice."
    ],
    keyStudies: [
      {
        researcher: "Janet Finch & Jennifer Mason (1993)",
        study: "Negotiating Family Responsibilities",
        method: "Extensive survey of 878 adults combined with 88 in-depth qualitative interviews.",
        findings: "Demonstrated that family support across generations is not automatic or rule-bound, but is negotiated; people maintain 'moral accounts' and offer assistance based on reciprocity and past relationships."
      },
      {
        researcher: "Sarah Wellard (2011)",
        study: "Doing It All? Grandparents, Childcare and Employment (Grandparents Plus)",
        method: "Secondary statistical analysis of the British Social Attitudes Survey data.",
        findings: "Found that over 30% of UK families (and nearly 50% of lone-parent families) rely regularly on grandparents for informal childcare, saving the economy billions."
      }
    ],
    contemporaryExamples: [
      "Grandparents providing interest-free loans and deposits ('Bank of Gran and Grandad') to help millennial grandchildren buy their first homes.",
      "Multi-generational households in southern Europe (Spain, Italy, Greece) where three generations co-reside to share utility bills during economic recessions."
    ],
    commonMisconceptions: [
      "Assuming that parents and children automatically live in extended co-residence; modern generational support operates predominantly via modified extended networks.",
      "Believing that elderly grandparents are purely dependent burdens; data proves grandparents provide vital economic and social subsidies to their adult children."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Social exchange theory, reciprocity, informal sanctions).",
      "Links to Paper 2 Gender Roles (Expressive emotion work, care for ageing relatives).",
      "Links to Paper 2 Demography (Ageing population, dependency ratio, life expectancy)."
    ],
    keyStatistics: [
      "Grandparents provide an estimated £7.7 billion of free childcare per year in the UK (Grandparents Plus, 2022).",
      "Over 1 in 3 women aged 50-65 in the UK are part of the 'sandwich generation', balancing paid employment with caring for grandchildren and parents (Carers UK)."
    ],
    essayArguments: {
      for: [
        "Family life must be understood as a dynamic, unfolding life-course — Tamara Hareven & Carol Smart — individuals continually transition through diverse family arrangements across their lives.",
        "Intergenerational family obligations remain a vital pillar of social survival — Janet Finch — moral negotiations between generations provide an essential safety net."
      ],
      against: [
        "Caring burdens across generations reinforce structural gender inequalities — Jay Ginn & Sara Arber — women in the sandwich generation sacrifice their careers and pensions to provide unpaid care.",
        "Individualisation has weakened traditional family loyalties — Ulrich Beck — personal lifestyle aspirations take priority over traditional intergenerational duty."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Janet Finch",
        quote: "Family obligations are not fixed in stone; they are carefully, reflexively negotiated through a history of reciprocal exchanges."
      },
      {
        theorist: "Tamara Hareven",
        quote: "Family life is not a static structure, but an ongoing process of transitions synchronised across individual, family, and historical time."
      },
      {
        theorist: "David Morgan",
        quote: "Family is not a noun; it is a verb. It is something people 'do' through daily relational practices and caring commitments."
      }
    ]
  },
  "Cohabitation, Divorce, and Singlehood": {
    theorists: ["Carol Smart & Pippa Stevens", "Anthony Giddens", "Ulrich Beck", "Robert Chester", "Nicky Hart", "William J. Goode", "John Gillis"],
    keyTerms: {
      "Cohabitation": "An arrangement where two unmarried intimate partners live together in a domestic household; now the fastest growing family type in the UK.",
      "Serial Monogamy": "A lifestyle pattern involving a succession of monogamous marriages or long-term partnerships over a lifetime, separated by divorce.",
      "Divorce Reform Act (1969/1971)": "Landmark UK legislation introducing 'irretrievable breakdown' as the sole ground for divorce, abolishing the need to prove matrimonial fault (adultery/cruelty).",
      "Secularisation": "The decline in the social significance and moral authority of religious institutions, removing the religious stigma from divorce and unmarried cohabitation.",
      "Trial Marriage": "Robert Chester's concept that cohabitation serves as a temporary testing period before entering formal legal marriage, rather than a permanent rejection of it.",
      "Empty Shell Marriage": "A marriage where the couple continue to co-reside for financial reasons or for the children, but emotional intimacy, love, and sexual relations have ended.",
      "Stigma Reduction": "The historical shift where single parenthood, divorce, and cohabitation are no longer socially condemned as immoral or shameful.",
      "Economic Independence of Women": "The expansion of female employment and welfare benefits enabling women to financially leave unhappy, abusive, or unfulfilling marriages."
    },
    collinsFocus: "Details demographic trends in marriage, cohabitation, and divorce since the 1960s. Examines legal changes, secularisation, rising female financial autonomy, and Giddens' confluent love.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Smart & Stevens' 4 reasons for rising cohabitation. Evaluates Nicky Hart's three-tier model of divorce causes (structural, normative, and micro-relational factors) and John Gillis' historical common-law marriage research.",
    evaluationPoints: [
      "Chester's Defence of Marriage: Cohabitation is predominantly a prelude to marriage; over 80% of cohabiting couples marry within 5 years or separate.",
      "New Right Moral Panic: Patricia Morgan and Charles Murray argue rising divorce and cohabitation cause child instability, emotional trauma, and welfare cost.",
      "Feminist Liberation: Feminists view rising divorce positively as evidence that women are refusing to tolerate patriarchal violence, infidelity, and domestic drudgery.",
      "Underreporting of Past Separation: Divorce rates were low in the Victorian era only because divorce was legally impossible for the poor; empty-shell marriages and desertion were widespread.",
      "Beck's Risk Society: In late modernity, people avoid the long-term legal risks of marriage, using cohabitation to maintain autonomy in an unstable economic climate."
    ],
    keyStudies: [
      {
        researcher: "Carol Smart & Pippa Stevens (2000)",
        study: "Cohabitation Breakdown: Cohabiting Parents and the Negotiation of Intimacy",
        method: "In-depth qualitative interviews with 40 separated cohabiting parents in the UK.",
        findings: "Identified 4 main reasons for cohabitation: testing partner suitability for marriage, ideological resistance to patriarchal marriage, desire for quick exit flexibility, and indifference to the legal institution."
      },
      {
        researcher: "Nicky Hart (1976)",
        study: "When Marriage Ends: A Study in Status Passage",
        method: "Sociological analysis of historical divorce statistics and qualitative case studies.",
        findings: "Categorized divorce causes into three factors: Structural (increased female work/welfare), Normative (secularisation/declining stigma), and Relational (frustration of high romantic expectations)."
      },
      {
        researcher: "John Gillis (1985)",
        study: "For Better, For Worse: British Marriages, 1500 to the Present",
        method: "Historical demographic and archival study of informal and formal unions.",
        findings: "Showed that 'common-law marriage' and informal cohabitation were widely accepted in working-class British history long before state-regulated church ceremonies became compulsory."
      }
    ],
    contemporaryExamples: [
      "The introduction of the 'No-Fault Divorce' law in England and Wales (Divorce, Dissolution and Separation Act 2020), which eliminated blame from divorce applications.",
      "The increasing proportion of couples who draft prenuptial agreements before marriage, reflecting Beck's individualized risk calculations."
    ],
    commonMisconceptions: [
      "Assuming high divorce rates prove that marriage has been rejected; high rates of remarriage prove that people are rejecting specific partners, not the institution of marriage itself.",
      "Believing cohabitation is legally identical to marriage; cohabitants in many countries have significantly fewer automatic inheritance and property rights upon separation."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Informal vs formal controls, secularisation).",
      "Links to Paper 2 Gender Roles (Conjugal power, domestic violence as a trigger for divorce).",
      "Links to Paper 4 Religion (Secularisation thesis, decline in church weddings)."
    ],
    keyStatistics: [
      "Cohabiting couple families have doubled over the last 20 years to reach over 3.6 million in the UK (ONS, 2023).",
      "Over 75% of first-time marriages in the UK are preceded by a period of cohabitation (ONS data).",
      "Around 62% of divorce applications in England and Wales are initiated by women (Ministry of Justice)."
    ],
    essayArguments: {
      for: [
        "Rising divorce and cohabitation reflect the search for confluent love and emotional equality — Anthony Giddens — individuals refuse to remain trapped in unfulfilling or oppressive unions.",
        "Cohabitation offers flexibility and a pragmatic test of partnership — Carol Smart & Pippa Stevens — changing social norms have removed the historical stigma attached to cohabitation."
      ],
      against: [
        "Cohabitation creates family instability and emotional insecurity — Patricia Morgan & Charles Murray — cohabiting unions break down at significantly higher rates, damaging children.",
        "Marriage remains the aspirational norm for modern citizens — Robert Chester — cohabitation functions as a temporary stepping stone toward conventional marriage."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Carol Smart",
        quote: "Cohabitation is not simply a degraded form of marriage; for many, it is a conscious choice to live with flexibility, equality, and independence."
      },
      {
        theorist: "Anthony Giddens",
        quote: "Where marriage was once an economic contract for life, modern partnerships are based on confluent love: conditional, reflexive, and dissolvable."
      },
      {
        theorist: "Nicky Hart",
        quote: "Divorce is not the cause of marital breakdown; it is the legal recognition that the relationship has already died in the private sphere."
      }
    ]
  }
};
