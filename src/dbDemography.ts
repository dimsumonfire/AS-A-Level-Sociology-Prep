import { TextbookRAGEntry } from './sociologyRAG';

export const demographyDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Birth Rates and Fertility": {
    theorists: ["Thomas McKeown", "Sarah Womack", "Anthony Giddens", "Beck & Beck-Gernsheim", "David Coleman", "Sarah Harper"],
    keyTerms: {
      "Birth Rate": "The number of live births per 1,000 of the total population per year.",
      "Total Fertility Rate (TFR)": "The average number of children a woman will bear during her childbearing years (15-44); currently around 1.5 in the UK, well below the replacement level of 2.1.",
      "Infant Mortality Rate (IMR)": "The number of babies who die before their first birthday per 1,000 live births per year; plummeted from over 150 in 1900 to under 4 in the UK today.",
      "Child-Centred Society": "Smaller family sizes enable parents to invest concentrated emotional and financial capital into fewer children.",
      "Cost of Children (Economic Liability)": "The rising financial expense of raising children (£200,000+ to age 18) discouraging large families in industrial economies.",
      "Female Emancipation & Career Prioritisation": "The expansion of higher education and professional career opportunities for women leading to delayed childbearing and voluntary childlessness."
    },
    collinsFocus: "Traces long-term UK demographic trends: the post-WWII baby boom (1960s) followed by sustained birth rate decline. Analyses rising female employment, contraception, and the rising average age of first motherhood (now over 30).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of falling fertility rates. Features Sarah Womack's analysis of the rising financial cost of children, Beck-Gernsheim's individualisation thesis, and evaluates the consequences for the dependency ratio.",
    evaluationPoints: [
      "Economic Calculations (Beck): Having children is no longer a natural certainty; it is a calculated lifestyle risk requiring career sacrifices and heavy financial investment.",
      "Class Differences in Fertility: Working-class women have children earlier on average than middle-class professional women who delay motherhood to establish careers (McAllister & Clarke).",
      "Ethnic Variations: British Pakistani and Bangladeshi women have higher fertility rates on average (reflecting extended family values), though younger cohorts are converging with the national average.",
      "Dependency Crisis: Long-term below-replacement fertility (TFR < 2.1) shrinks the future taxpaying workforce needed to fund state pensions and healthcare for an ageing population.",
      "Voluntary Childlessness: More women choose to remain permanently childfree, rejecting the traditional functionalist assumption of a 'maternal instinct' (Gillespie)."
    ],
    keyStudies: [
      {
        researcher: "Fiona McAllister & Lynda Clarke (1998)",
        study: "A Study of Childlessness in Britain (Joseph Rowntree Foundation)",
        method: "Comprehensive survey of 2,000 women and in-depth qualitative interviews with childless couples.",
        findings: "Found that voluntary childlessness was chosen due to career commitments, financial autonomy, desire for leisure mobility, and fear of relationship strain."
      },
      {
        researcher: "Ulrich Beck & Elisabeth Beck-Gernsheim (2002)",
        study: "Individualization: Institutionalized Individualism and its Social and Political Consequences",
        method: "Theoretical sociological analysis of modern risk and demographic transformations.",
        findings: "Argued that in modern risk societies, children are the ultimate source of unconditional emotional love, but having children introduces acute financial and career risks, leading people to limit family size."
      }
    ],
    contemporaryExamples: [
      "The 'Childcare Cliff' in the UK and USA where soaring nursery costs (often exceeding £1,200 per month per child) force dual-earner couples to limit themselves to one child.",
      "South Korea's national demographic emergency with the world's lowest fertility rate (0.72 in 2023), prompting government cash incentives for newlyweds."
    ],
    commonMisconceptions: [
      "Confusing birth rate with fertility rate; birth rate measures births across the whole population (including men and elderly), whereas fertility rate measures births per woman of childbearing age.",
      "Assuming falling birth rates mean people dislike children; sociologists show parents value children *more* intensely, choosing quality over quantity (child-centredness)."
    ],
    synopticLinks: [
      "Links to Paper 2 Theories of Family (Functionalist universal reproduction vs Postmodern choice).",
      "Links to Paper 2 Childhood (Child-centred family, Postman).",
      "Links to Paper 4 Globalisation (Global demographic transitions and migration flows)."
    ],
    keyStatistics: [
      "The UK Total Fertility Rate fell to 1.49 children per woman in 2023, the lowest level recorded since records began in 1938 (ONS).",
      "The average age of mothers at childbirth in the UK has risen steadily to 30.9 years (Office for National Statistics, 2023)."
    ],
    essayArguments: {
      for: [
        "Falling birth rates reflect female emancipation and career autonomy — Anthony Giddens & Beck-Gernsheim — women control their fertility through contraception and prioritise education and careers.",
        "Children have become massive financial liabilities in capitalist economies — Sarah Womack — soaring childcare and housing costs make large families economically unviable."
      ],
      against: [
        "Sub-replacement fertility threatens economic stability — David Coleman & Sarah Harper — an unsustainable dependency ratio places immense tax burdens on shrinking working generations.",
        "Cultural and ethnic values sustain higher fertility in specific communities — Richard Berthoud — extended family networks provide mutual support that encourages larger families."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Elisabeth Beck-Gernsheim",
        quote: "The decision to have a child is no longer a natural duty; it is a calculated choice weighed against career ambitions, personal freedom, and financial risk."
      },
      {
        theorist: "Sarah Harper",
        quote: "Falling birth rates are a marker of educational and economic success for women, but they necessitate a total rethinking of the social contract across generations."
      },
      {
        theorist: "Sarah Womack",
        quote: "The soaring cost of raising children has turned the traditional large family into an unaffordable luxury for ordinary working-class households."
      }
    ]
  },
  "Death Rates and Life Expectancy": {
    theorists: ["Thomas McKeown", "David Gordon", "Sarah Harper", "Richard Wilkinson & Kate Pickett", "Tracie Trussel"],
    keyTerms: {
      "Death Rate (Crude Mortality Rate)": "The number of deaths per 1,000 of the total population per year; has steadily fallen over the past century.",
      "Life Expectancy": "The average number of years a person born in a specific year can expect to live; in the UK, has risen from ~45 for men in 1900 to over 79 for men and 83 for women today.",
      "McKeown Thesis": "Thomas McKeown's argument that the historical decline in mortality was driven primarily by improved nutrition, economic living standards, and hygiene rather than medical intervention.",
      "Public Health Measures": "State-led sanitation reforms: clean piped water supplies, modern sewer systems, food hygiene laws, and improved housing conditions.",
      "Social Class Mortality Gap": "The persistent health inequality where individuals in lower socio-economic classes die significantly younger and spend more years in chronic illness than higher classes.",
      "Diseases of Affluence": "Non-communicable lifestyle illnesses (heart disease, type-2 diabetes, cancer, stroke) that have replaced infectious diseases (cholera, TB, typhoid) in developed countries."
    },
    collinsFocus: "Details the four main drivers of falling mortality: improved nutrition, public health infrastructure, medical advancements (antibiotics, NHS, immunisation), and lifestyle changes (decline in manual heavy industry and smoking).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of rising life expectancy. Features Thomas McKeown's thesis on nutrition and sanitation, and contrasts it with Richard Wilkinson's evidence on the deadly toll of class inequality and chronic stress on longevity.",
    evaluationPoints: [
      "McKeown's Controversy: Medical historians argue McKeown underestimated the decisive role of modern medical discoveries (penicillin, polio vaccines, NHS cardiac care) after 1945.",
      "The Class Longevity Divide: The Marmot Review proves that a boy born in the most deprived ward of Glasgow lives 10-15 years less than a boy born in wealthy Kensington and Chelsea.",
      "Gender Paradox: Women live on average 3.5 years longer than men, but spend significantly more years in old age suffering from chronic illness, disability, and poverty.",
      "Stagnation of Life Expectancy: In recent years (post-2010), austerity cuts, NHS delays, and the COVID-19 pandemic have caused UK life expectancy growth to stall.",
      "Global Inequality in Mortality: In sub-Saharan African countries (e.g. Chad, CAR), life expectancy remains below 55 due to lack of clean water, maternal healthcare, and treatable infections."
    ],
    keyStudies: [
      {
        researcher: "Thomas McKeown (1976)",
        study: "The Modern Rise of Population",
        method: "Historical demographic and epidemiological regression analysis.",
        findings: "Demonstrated that over 80% of the reduction in deaths from infectious diseases (such as tuberculosis and measles) occurred *before* the invention of effective antibiotics and vaccines, driven by better nutrition and clean water."
      },
      {
        researcher: "Sir Michael Marmot (2010/2020)",
        study: "Fair Society, Healthy Lives: The Marmot Review / Health Equity in England",
        method: "Nationwide longitudinal epidemiological and social gradient analysis.",
        findings: "Proved the existence of a continuous social gradient in health: individuals living in deprived areas die significantly earlier and suffer double the rate of disability compared to affluent areas."
      }
    ],
    contemporaryExamples: [
      "The impact of the COVID-19 pandemic, which caused the first recorded drop in UK life expectancy in over 40 years, hitting deprived communities and ethnic minorities hardest.",
      "Advances in specialized cancer immunotherapy and robotic surgery extending survival rates for diseases that were fatal a generation ago."
    ],
    commonMisconceptions: [
      "Believing that rising life expectancy means humans are genetically living to 120; life expectancy at birth rose primarily because the eradication of infant mortality boosted statistical averages.",
      "Assuming universal healthcare (like the NHS) has eliminated class differences in death rates; Marmot proves material inequality and lifestyle stress maintain a massive class longevity gap."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Official statistics, mortality data validity, Marmot).",
      "Links to Paper 2 Age and Family Life (Ageing population, sandwich generation).",
      "Links to Paper 4 Globalisation (Health inequalities, communicable vs non-communicable diseases)."
    ],
    keyStatistics: [
      "UK life expectancy currently stands at 78.6 years for males and 82.6 years for females (Office for National Statistics, 2023).",
      "There is a 9.5-year gap in male life expectancy and an 18.8-year gap in healthy life expectancy between the least and most deprived areas in England (Marmot Review, 2020)."
    ],
    essayArguments: {
      for: [
        "Public health infrastructure, sanitation, and nutrition drove the decline in mortality — Thomas McKeown — clean water, sewage systems, and higher living standards eradicated deadly epidemics.",
        "Medical advancements and the welfare state transformed life expectancy — Functionalists — universal healthcare (NHS), immunisation, and elderly social care extended human lifespans."
      ],
      against: [
        "Material deprivation and class inequality continue to dictate life expectancy — Michael Marmot & Richard Wilkinson — poverty and chronic stress systematically shorten working-class lives.",
        "Austerity cuts and healthcare crises have stalled life expectancy gains — Danny Dorling — structural underfunding of public services reverses decades of demographic progress."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Thomas McKeown",
        quote: "The improvement in health and decline in mortality were due mainly to improved nutrition resulting from higher standards of living, rather than specific medical measures."
      },
      {
        theorist: "Michael Marmot",
        quote: "Health inequalities and the social gradient in life expectancy are not inevitable; they reflect the unequal distribution of power, money, and resources."
      },
      {
        theorist: "Sarah Harper",
        quote: "Increased longevity is one of humanity's greatest achievements, transforming three-generation families into enduring multi-generational kinship webs."
      }
    ]
  },
  "Migration and Globalisation": {
    theorists: ["Arlie Russell Hochschild", "Stephen Castles & Mark Miller", "Robin Cohen", "Richard Berthoud", "Peggy Levitt", "David Held"],
    keyTerms: {
      "Immigration & Emigration": "Immigration is the movement of people into a country; emigration is the movement of people out of a country; Net Migration is the net difference.",
      "Push and Pull Factors": "Push factors: poverty, war, political persecution, famine driving people away; Pull factors: higher wages, job opportunities, political freedom, education attracting migrants.",
      "Global Care Chains": "Arlie Hochschild's concept: the international transfer of domestic and emotional care work from female migrant nannies in developing countries to wealthy families in the West.",
      "Transnational Families": "Families that live across national borders but sustain emotional solidarity, daily digital communication, and economic remittances (money sent home).",
      "Remittances": "Financial transfers sent by migrant workers back to extended family members in their country of origin, forming an economic lifeline.",
      "Femininisation of Migration": "Castles and Miller's finding: women now make up nearly half of all international migrants, working predominantly in domestic care, nursing, and the service sector.",
      "Fortress Europe": "The strict border enforcement policies, detention centres, and carrier sanctions deployed by the European Union to block undocumented migrants and asylum seekers.",
      "Hybrid Diasporic Identities": "Robin Cohen's concept: migrant communities creating hybrid cultural and familial identities blending homeland traditions with host-society practices."
    },
    collinsFocus: "Details the economic and political drivers of global migration flows (South-North and South-South). Analyses how globalization creates ethnically diverse family structures and evaluates immigration policies.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the impact of global migration on the family. Highlights Arlie Hochschild's global care chains (creating a 'care deficit' in developing nations) and Robin Cohen's analysis of transnational diasporas.",
    evaluationPoints: [
      "Care Deficit in Developing Nations: When mothers migrate to the West to work as nannies, their own children back home are left to be raised by grandmothers or older siblings (Hochschild).",
      "Economic Exploitation of Migrants: Undocumented migrant domestic workers often suffer extreme exploitation, working 80+ hours for sub-minimum wages without legal recourse.",
      "Vital Economic Subsidies: Remittances sent home by migrant workers dwarf official government foreign aid budgets, funding schools, healthcare, and housing in developing nations.",
      "Political Backlash & Xenophobia: Hostile media sensationalism and anti-immigration populist politics create a 'hostile environment' that criminalizes vulnerable migrant families.",
      "Brain Drain: High emigration of skilled professionals (doctors, nurses, teachers) strips developing nations of the human capital needed to develop their own public services."
    ],
    keyStudies: [
      {
        researcher: "Arlie Russell Hochschild (2000)",
        study: "Global Care Chains and Emotional Surplus Value",
        method: "Qualitative multi-sited interviews with female migrant nannies from the Philippines working in the USA and Europe.",
        findings: "Demonstrated the existence of 'global care chains': Western dual-career mothers hire migrant nannies, who send remittances home while leaving their own children to be cared for by grandmothers, creating an emotional and care deficit in the South."
      },
      {
        researcher: "Stephen Castles & Mark Miller (2009)",
        study: "The Age of Migration: International Population Movements in the Modern World",
        method: "Global comparative sociological and demographic analysis of international migration trends.",
        findings: "Identified key global trends: globalization of migration (more countries involved), acceleration of movements, differentiation of migrant types, and the growing feminisation of migration."
      }
    ],
    contemporaryExamples: [
      "The reliance of the UK National Health Service (NHS) on recruiting thousands of doctors and nurses from India, Nigeria, and the Philippines to fill chronic domestic staffing shortages.",
      "The tragic humanitarian crossings in the English Channel and Mediterranean Sea, where families fleeing conflict risk their lives due to the lack of legal, safe asylum routes."
    ],
    commonMisconceptions: [
      "Assuming all global migration is from developing countries to the West; UN data proves South-South migration (between developing nations) is equally common.",
      "Believing migrants are an economic drain; independent studies prove working-age migrants in the UK contribute significantly more in taxes than they receive in public services."
    ],
    synopticLinks: [
      "Links to Paper 2 Family Diversity (Cultural and ethnic diversity, Berthoud).",
      "Links to Paper 4 Globalisation (Global migration, transnationalism, Wallerstein's world systems).",
      "Links to Paper 4 Media (Moral panics, folk devils, media framing of asylum seekers)."
    ],
    keyStatistics: [
      "Over 280 million people worldwide (around 3.6% of the global population) live outside their country of birth as international migrants (UN IOM Report, 2023).",
      "Global remittance flows to developing countries exceeded $650 billion, over three times larger than total global Official Development Assistance (World Bank, 2023)."
    ],
    essayArguments: {
      for: [
        "Global migration has enriched family diversity and economic resilience — Stephen Castles & Robin Cohen — transnational families maintain vibrant hybrid identities and reciprocal remittance flows.",
        "Migrant labor fills crucial care gaps in Western economies — Functionalists — international recruitment sustains health services and childcare for dual-earner families."
      ],
      against: [
        "Global care chains extract emotional and domestic resources from the global poor — Arlie Hochschild — Western women export their care burdens, creating a tragic care deficit in developing nations.",
        "Restrictive border policies and xenophobia victimize vulnerable families — Victoria Canning & Robin Cohen — 'Fortress' policies criminalize refugees and divide families."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Arlie Russell Hochschild",
        quote: "Love and care have become the new gold. In global care chains, emotional surplus value is extracted from the Third World to nurture the First World."
      },
      {
        theorist: "Stephen Castles",
        quote: "We live in the Age of Migration: international population movements are transforming social structures, labor markets, and family forms across the globe."
      },
      {
        theorist: "Robin Cohen",
        quote: "Diasporic and transnational families construct fluid, hybrid spaces of belonging that transcend the rigid borders of the traditional nation-state."
      }
    ]
  },
  "The Ageing Population": {
    theorists: ["Sarah Harper", "Julia Brannen", "Christina Victor", "Mary Dianne Kagan", "Peter Townsend", "Mike Featherstone & Mike Hepworth", "Chris Phillipson"],
    keyTerms: {
      "Ageing Population": "A demographic shift where the median age of a population rises and older people (65+) make up an increasing percentage of the total population.",
      "Old Age Sub-divisions": "Christina Victor's categories: the 'Young Elderly' (65-74, active, healthy), the 'Old Elderly' (75-84), and the 'Very Elderly' (85+, high frailty and care needs).",
      "Dependency Ratio": "The ratio of economically non-working dependents (children + pensioners) to the economically active, taxpaying working population.",
      "Structured Dependency": "Peter Townsend and Chris Phillipson's Marxist concept: mandatory retirement ages and low state pensions systematically construct older people as poor, dependent, and socially excluded.",
      "Grey Pound (Silver Economy)": "The significant consumer spending power of healthy, wealthy retired baby-boomers targeted by leisure, cruise, and travel industries.",
      "Ageism": "Prejudice, stereotyping, and systematic discrimination against individuals on the basis of chronological age, viewing the elderly as a societal burden.",
      "Gerontocracy": "A society or social structure where power, wealth, and leadership are held by the oldest members of the community (e.g. traditional African elder councils)."
    },
    collinsFocus: "Details the structural causes of population ageing (falling fertility + rising life expectancy). Evaluates the economic consequences for state pension funds, the NHS, and social care.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the status of older people. Features Christina Victor's cross-cultural analysis, Mary Dianne Kagan's Colombian village study (elders as valued contributors), and contrasts with modern Western ageist structured dependency.",
    evaluationPoints: [
      "Active Ageing vs Burden Myth: Postmodernists (Featherstone & Hepworth) argue old age has been deconstructed; the grey pound enables active consumption, gym memberships, and second careers.",
      "Townsend's Structured Dependency: Mandatory retirement acts as a social mechanism to remove older workers from the labor force, institutionalizing dependency and poverty.",
      "Cross-Cultural Status Contrast: In settled traditional societies (Kagan, Victor), elders retain high status as wisdom-keepers and conflict arbiters, whereas Western capitalism devalues non-workers.",
      "Class & Gender Divide in Old Age: Middle-class retirees with final-salary private pensions enjoy luxury travel, while working-class elderly women suffer from chronic pension poverty (Ginn & Arber).",
      "Intergenerational Support: Rather than being pure economic drains, older grandparents provide billions in free childcare and housing deposits to adult children (Wellard, Brannen)."
    ],
    keyStudies: [
      {
        researcher: "Christina Victor (1987/2005)",
        study: "Old Age in Modern Society: A Textbook of Social Gerontology",
        method: "Comprehensive theoretical, comparative, and demographic review.",
        findings: "Subdivided old age into Young Elderly, Old Elderly, and Very Elderly. Proved that status in old age depends on control over valued social resources and cultural attitudes toward death."
      },
      {
        researcher: "Mary Dianne Kagan (1980)",
        study: "Being Old in Bojacá: A Study of Aging in a Colombian Peasant Village",
        method: "Ethnographic anthropological participant observation in rural Colombia.",
        findings: "Demonstrated that older people remained socially, culturally, and economically active as valued family contributors, avoiding the social isolation and stigma typical of Western retirement."
      },
      {
        researcher: "Mike Featherstone & Mike Hepworth (2005)",
        study: "Images of Ageing: Cultural Representations of Later Life",
        method: "Content analysis of media images and qualitative interviews with retirees.",
        findings: "Argued that consumer culture and the 'grey pound' have broken down the rigid boundary of old age, replacing negative senility stereotypes with images of youthful, active, hedonistic retirement."
      }
    ],
    contemporaryExamples: [
      "UK legislation raising the state pension age incrementally to 67 and 68 to offset the rising cost of the pension dependency ratio.",
      "The boom in specialised retirement villages and senior cruise tourism marketing directly to wealthy 'young elderly' retirees."
    ],
    commonMisconceptions: [
      "Stereotyping all elderly people as frail, lonely, and senile; over 70% of UK over-65s report good health and lead fully independent, socially active lives.",
      "Assuming an ageing population only causes problems; older people contribute immense unpaid voluntary work, community leadership, and essential family childcare."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Age identity, social construction of old age).",
      "Links to Paper 2 Family Diversity (Beanpole families, Brannen, Finch).",
      "Links to Paper 4 Globalisation (Global demographic transitions, ageing in developed nations)."
    ],
    keyStatistics: [
      "In the UK, over 19% of the population is aged 65 and over, projected to reach 24% by 2040 (Office for National Statistics, 2023).",
      "People aged 50+ in the UK control over 75% of the nation's total financial wealth and household assets (Institute for Fiscal Studies)."
    ],
    essayArguments: {
      for: [
        "The ageing population has transformed family structures and later life — Julia Brannen & Featherstone — beanpole kinship networks and the grey pound create active, multi-generational solidarity.",
        "Older people provide indispensable social and economic subsidies — Sarah Wellard — informal grandparental childcare is vital for the modern economy to function."
      ],
      against: [
        "Capitalism creates structured dependency and ageism for the elderly — Peter Townsend & Chris Phillipson — mandatory retirement and inadequate pensions marginalise older citizens.",
        "The soaring dependency ratio threatens the welfare state and health services — Sarah Harper — an ageing population creates acute funding crises for the NHS and state pensions."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Christina Victor",
        quote: "Old age is not a single, homogeneous category. It spans over forty years of life, encompassing active independent living through to frailty."
      },
      {
        theorist: "Peter Townsend",
        quote: "Society creates the dependency of the elderly through structured institutional processes such as compulsory retirement and poverty-level pensions."
      },
      {
        theorist: "Mike Featherstone",
        quote: "The mask of ageing has slipped. Postmodern consumer culture has turned retirement into an arena of reinvention, leisure, and personal expression."
      }
    ]
  },
  "Impact of Social Policy on Demography": {
    theorists: ["Jacques Donzelot", "Eileen Drew", "Hilary Land", "Alva Myrdal", "Brenda Almond", "Charles Murray"],
    keyTerms: {
      "Pronatalist Policies": "Government social policies designed to encourage couples to have more children (e.g. child subsidies, heavily subsidized childcare in Sweden and France).",
      "Antinatalist Policies": "Government policies designed to restrict or reduce population growth and birth rates (e.g. China's historic One-Child Policy 1979-2015).",
      "Familistic vs Individualistic Gender Regimes": "Eileen Drew's concept: Familistic regimes (e.g. Greece) base policies on the traditional male breadwinner; Individualistic regimes (e.g. Sweden) treat husbands and wives as equal independent earners.",
      "Patriarchal State Policies": "Hilary Land's argument: state social policies assume the ideal family is a patriarchal nuclear family, penalizing single mothers and cohabitants.",
      "Pensions & Retirement Legislation": "State laws regulating the statutory age at which citizens can draw state retirement pensions (e.g. UK Pension Acts equalising and raising pension ages).",
      "Childcare Subsidies": "State-funded nursery hours and tax-free childcare schemes aimed at enabling mothers to return rapidly to the full-time labour market."
    },
    collinsFocus: "Compares international family social policies: China's coercive One-Child Policy vs Scandinavian egalitarian gender regimes vs UK mixed liberal welfare models.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the relationship between the state and the family. Features China's One-Child demographic legacy, Eileen Drew's gender regime taxonomy, and evaluates Donzelot's 'policing of families'.",
    evaluationPoints: [
      "Drew's Comparative Insight: Shows that where social policy supports equal parental leave and universal cheap nurseries (Sweden), birth rates remain higher and gender equality improves.",
      "Unintended Demographic Consequences: China's One-Child Policy successfully halted rapid growth, but created a severe demographic crisis of an ageing population and a skewed male-to-female sex ratio.",
      "New Right 'Perverse Incentives': Charles Murray argues welfare policies encourage unmarried single motherhood, driving family breakdown and welfare dependency.",
      "Feminist Critique of Policy (Land): Tax allowances and lack of free full-time childcare reinforce female economic dependence on male breadwinners.",
      "Donzelot's Surveillance: Social policy is not a neutral benefit, but an apparatus of state surveillance deployed to control and regulate working-class family routines."
    ],
    keyStudies: [
      {
        researcher: "Eileen Drew (1998)",
        study: "Gender Regimes and Family Policies in the European Union",
        method: "Comparative cross-national policy and demographic analysis across EU member states.",
        findings: "Identified two types of gender regimes: 'Familistic' (traditional male breadwinner assumed; public childcare neglected) and 'Individualistic' (equal citizen rights, subsidized childcare, parental leave), showing policy directly shapes gender equality and birth rates."
      },
      {
        researcher: "Hilary Land (1978)",
        study: "Who Cares for the Family? The Ideology of Social Policy",
        method: "Critical feminist legal and policy analysis of UK tax, social security, and housing laws.",
        findings: "Proved that state social policies are built on the underlying patriarchal assumption that the normal, desirable family is headed by a male breadwinner, actively discouraging female independence."
      }
    ],
    contemporaryExamples: [
      "The UK 30-hours free childcare expansion for working parents, designed to boost maternal workforce participation and stimulate the birth rate.",
      "China's policy shift in 2021 allowing families to have up to three children alongside tax rebates to combat its acute demographic ageing crisis."
    ],
    commonMisconceptions: [
      "Assuming social policies are always designed to help families; sociologists show policies are often designed to cut state spending, boost capitalist labor supply, or regulate behavior.",
      "Believing the UK has an individualistic gender regime; UK policy remains a hybrid, offering partial childcare while leaving major costs to private families."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (State ideological apparatus, formal legal controls).",
      "Links to Paper 2 Theories of Family (New Right vs Feminist views of the state).",
      "Links to Paper 3 Education Policy (Compensatory education, Sure Start)."
    ],
    keyStatistics: [
      "In Sweden, where state policies fund 80% of nursery costs and 480 days of shared parental leave, maternal employment exceeds 80% and fertility remains higher than the EU average.",
      "China's One-Child Policy prevented an estimated 400 million births, but resulted in a demographic ratio where 1 child must support 2 parents and 4 grandparents (the '4-2-1 problem')."
    ],
    essayArguments: {
      for: [
        "Social policies decisively determine demographic and family structures — Eileen Drew — individualistic state regimes empower women and sustain birth rates through universal childcare.",
        "State legislation has historically protected vulnerable family members — Functionalists — child protection laws, maternity leave, and state pensions ensure social solidarity and health."
      ],
      against: [
        "Social policies are ideological instruments enforcing patriarchal dependency — Hilary Land — tax and welfare laws systematically disadvantage non-traditional and single-mother households.",
        "Welfare policies create perverse incentives and family breakdown — Charles Murray — state dependency damages traditional marriage and social responsibility."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Eileen Drew",
        quote: "The way a state structures its family policy either traps women in traditional dependence or liberates them to achieve full economic and familial equality."
      },
      {
        theorist: "Hilary Land",
        quote: "Social policy is not neutral. It is permeated with assumptions about the proper roles of women as unpaid domestic carers and men as breadwinners."
      },
      {
        theorist: "Jacques Donzelot",
        quote: "Social policy transforms the private home into an arena of public supervision, policed by professionals wielding the expert power of the state."
      }
    ]
  }
};
