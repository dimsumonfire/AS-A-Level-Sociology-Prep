import { TextbookRAGEntry } from './sociologyRAG';

export const genderRolesDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Conjugal Roles (Bott, Willmott & Young)": {
    theorists: ["Elizabeth Bott", "Peter Willmott & Michael Young", "Ann Oakley", "Jonathan Gershuny", "Oriel Sullivan", "Fiona Devine"],
    keyTerms: {
      "Conjugal Roles": "The domestic roles, tasks, and responsibilities shared or divided between marital or cohabiting partners in a household.",
      "Segregated Conjugal Roles": "Bott's concept: husband and wife have separate, distinct tasks (male breadwinner, female homemaker) and separate social networks.",
      "Joint Conjugal Roles": "Bott's concept: husband and wife share domestic chores, childcare, leisure time, and social networks on an egalitarian basis.",
      "Symmetrical Family": "Young & Willmott's 'Stage 3' family: a home-centered, privatized nuclear family characterized by equal, shared domestic duties and joint financial planning.",
      "Stratified Diffusion": "Young & Willmott's evolutionary concept that family patterns start at the top of the class structure and filter down to the working class over time.",
      "Social Network Density": "Elizabeth Bott's thesis: close-knit, dense kinship networks enforce segregated roles; loose-knit, dispersed networks promote joint, symmetrical roles.",
      "March of Progress View": "The optimistic evolutionary theory that family relationships are gradually and steadily becoming more equal, democratic, and symmetrical over time."
    },
    collinsFocus: "Traces Young & Willmott's 4 stages of family development from pre-industrial production (Stage 1) to the modern symmetrical family (Stage 3). Contrasts with Elizabeth Bott's seminal social network hypothesis.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the symmetry debate. Features Ann Oakley's devastating feminist critique of Young & Willmott's methodology (counting a husband helping once a week with the washing-up as 'symmetrical') and evaluates contemporary time-use evidence.",
    evaluationPoints: [
      "Oakley's Methodological Critique: Young & Willmott's definition of symmetry was deeply flawed; a husband performing one minor domestic task was counted as evidence of joint roles.",
      "Persistence of Segregated Division: Time-use surveys show that even in dual-earner homes, women perform the vast majority of routine cooking and cleaning, while men do sporadic repairs.",
      "Bott's Network Theory Relevance: Dense community networks in traditional working-class towns still uphold rigid segregated masculine and feminine scripts.",
      "Commercialisation of Chores: Reductions in female housework are driven more by technological appliances (washing machines, ready meals) and hired cleaners than by male help (Silva).",
      "Sullivan's Optimistic View: Oriel Sullivan argues that long-term data shows a 'quiet revolution', with men steadily increasing their share of routine childcare and domestic labour."
    ],
    keyStudies: [
      {
        researcher: "Peter Willmott & Michael Young (1973)",
        study: "The Symmetrical Family: A Study of Work and Leisure in the London Region",
        method: "Extensive structured survey of 1,928 adults across Greater London.",
        findings: "Claimed that Stage 3 symmetrical families were now the norm among 72% of couples, characterized by home-centred leisure, shared domestic tasks, and joint decision-making."
      },
      {
        researcher: "Elizabeth Bott (1957)",
        study: "Family and Social Network",
        method: "Intensive, in-depth qualitative case studies of 20 London families.",
        findings: "Discovered that the primary determinant of conjugal roles was social network density: couples embedded in close-knit kin networks maintained segregated roles; couples in loose-knit networks developed joint roles."
      },
      {
        researcher: "Ann Oakley (1974)",
        study: "The Sociology of Housework / Housewife",
        method: "Semi-structured in-depth interviews with 40 married women with young children.",
        findings: "Refuted Young & Willmott's findings; found that only 15% of husbands had high levels of participation in housework and only 25% in childcare, showing that the symmetrical family was an ideological myth."
      }
    ],
    contemporaryExamples: [
      "The introduction of Shared Parental Leave (SPL) in the UK, enabling fathers to take statutory paid leave to care for newborns.",
      "The rise of online food delivery services and smart robot vacuums, which outsource domestic labour without altering male domestic contributions."
    ],
    commonMisconceptions: [
      "Assuming 'symmetrical' means identical; Young & Willmott argued that symmetrical means roles are similar and equal in value, not that men and women do the exact same chores.",
      "Believing Bott argued class directly causes segregated roles; Bott showed that social network connectedness, which correlates with class, is the direct causal mechanism."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Functionalist evolution vs Feminist conflict).",
      "Links to Paper 2 Theories of Family (Parsons' instrumental/expressive roles vs Oakley).",
      "Links to Paper 3 Education (Gender socialisation and gendered subject choices)."
    ],
    keyStatistics: [
      "British Social Attitudes survey shows 68% of respondents believe in joint domestic roles, but only 32% of couples achieve an equal 50/50 division of housework in practice.",
      "Take-up of Shared Parental Leave among eligible UK fathers remains below 5%, reflecting the persistence of the male breadwinner ideology (Government Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Conjugal roles have undergone a march of progress toward symmetry — Willmott & Young / Oriel Sullivan — modern partners share home-centred leisure, finances, and parenting.",
        "Social network mobility fosters joint conjugal relationships — Elizabeth Bott — geographic mobility loosens traditional kin pressure and enables egalitarian role negotiation."
      ],
      against: [
        "The symmetrical family is an ideological myth — Ann Oakley — domestic tasks remain strictly segregated along patriarchal lines, burdening women with unpaid servitude.",
        "Men's domestic contribution remains tokenistic — Jonathan Gershuny — women still bear the ultimate administrative and emotional responsibility for the home."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Michael Young & Peter Willmott",
        quote: "The symmetrical family is one in which the spouses share their work and their leisure; it is egalitarian, home-centred, and privatised."
      },
      {
        theorist: "Ann Oakley",
        quote: "A husband who washes the dishes once a week does not make a family symmetrical. Housework remains the primary, unpaid duty of the woman."
      },
      {
        theorist: "Elizabeth Bott",
        quote: "The degree of segregation in the role-relationship of husband and wife varies directly with the connectedness of the family's social network."
      }
    ]
  },
  "Domestic Division of Labour": {
    theorists: ["Jonathan Gershuny", "Man-yee Kan", "Xavier Ramos", "Elizabeth Silva", "Fiona Devine", "Arlie Hochschild", "Oriel Sullivan"],
    keyTerms: {
      "Domestic Division of Labour": "The allocation of unpaid tasks (cooking, cleaning, laundry, maintenance, shopping) among household members.",
      "Lagged Adaptation": "Gershuny's concept that as women increase their hours in paid work, men's contribution to domestic chores increases, but with a substantial time lag across generations.",
      "Material (Economic) Explanation": "The theory that the division of labour is determined by who earns the most money; women do more housework because they earn less on average.",
      "Cultural (Ideological) Explanation": "The feminist theory that the division of labour is determined by patriarchal gender norms and socialisation that teach women to view housework as their duty.",
      "Commercialisation of Housework": "The process by which domestic goods and services (fast food, laundry services, cleaners) are purchased in the market, reducing household labour.",
      "Routine vs Sporadic Tasks": "The distinction between daily, relentless tasks (cooking, washing) performed by women and occasional, flexible tasks (gardening, DIY, taking out bins) performed by men."
    },
    collinsFocus: "Contrasts the cultural explanation (gender role socialisation) with the material explanation (economic earnings and working hours). Evaluates Gershuny's time-use diaries and Kan's employment analysis.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of domestic labour patterns. Highlights Elizabeth Silva's qualitative study on technology in the home (washing machines reinforcing female domestic burdens) and Xavier Ramos' findings on domestic labour when male partners are unemployed.",
    evaluationPoints: [
      "Kan's Evidence on Employment: Full-time paid work reduces female domestic labour slightly, but female retirement or male unemployment increases female domestic hours.",
      "Ramos' Finding on Role Reversal: Even when the male is unemployed and the female works full-time, men rarely take on the full domestic load, disproving purely material explanations.",
      "Silva's Technology Paradox: Labour-saving household appliances (dishwashers, microwaves) do not reduce time spent on domestic work; they simply raise cleanliness standards.",
      "Class Outsourcing: Middle-class women achieve domestic relief by paying low-income or migrant domestic cleaners, which reproduces class and racial inequalities (Gregson & Lowe).",
      "Emotional Resistance: Men actively resist routine chores (laundry, toilet cleaning) by feigning incompetence or claiming modern appliances are too complex (Silva)."
    ],
    keyStudies: [
      {
        researcher: "Jonathan Gershuny (2006)",
        study: "Time-Use Surveys: The Division of Domestic Labour across Cohorts",
        method: "Longitudinal cross-national analysis of detailed 24-hour time-use diaries.",
        findings: "Demonstrated 'lagged adaptation': women still do the majority of domestic chores, but men whose wives work full-time are doing steadily more routine household and childcare work than previous generations."
      },
      {
        researcher: "Elizabeth Silva (2010)",
        study: "Technology, Culture, Family: Influences on Home Life",
        method: "Qualitative semi-structured interviews and naturalistic observations of British households.",
        findings: "Proved that modern domestic technologies (especially the washing machine) did not equalize gender roles; husbands viewed washing machines as 'too complex' and left laundry entirely to wives."
      },
      {
        researcher: "Xavier Ramos (2003)",
        study: "Domestic Work Time and Gender Differentials in Great Britain",
        method: "Secondary statistical regression analysis of British Household Panel Survey (BHPS) data.",
        findings: "Found that domestic labour was only equally shared in households where the male was unemployed and his female partner worked full-time (averaging around 19 hours each per week)."
      }
    ],
    contemporaryExamples: [
      "The massive growth in gig-economy cleaning and meal-prep subscription services (HelloFresh, UberEats) utilized by middle-class dual-career couples to bypass domestic conflicts.",
      "The gendered marketing of household cleaning products, which continue to feature female actors in domestic roles across over 80% of television commercials."
    ],
    commonMisconceptions: [
      "Believing that buying a washing machine or dishwasher automatically saves time; Silva proves technology increases the frequency of domestic washing, keeping workloads high.",
      "Assuming higher female earnings automatically eliminate the domestic gap; Bittman found that women who earn more than their husbands sometimes do *more* housework to compensate for threatening male identity."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Time-use diaries, longitudinal surveys, BHPS).",
      "Links to Paper 2 Theories of Family (Marxist feminist unpaid labour, Functionalist expressive role).",
      "Links to Paper 4 Globalisation (Global care chains, female migrant domestic workers)."
    ],
    keyStatistics: [
      "In the UK, women spend an average of 168 minutes per day on housework, compared to 84 minutes for men (ONS Time Use Survey, 2022).",
      "Over 75% of routine laundry and food preparation in cohabiting heterosexual couples is carried out predominantly by women (British Social Attitudes, 2023)."
    ],
    essayArguments: {
      for: [
        "Economic factors determine the division of labour — Xavier Ramos & Jonathan Gershuny — as women close the earnings gap and work full-time, domestic burdens adaptively equalize.",
        "Generational cultural norms are shifting toward equality — Oriel Sullivan — younger men exhibit a progressive acceptance of shared domestic and parenting responsibilities."
      ],
      against: [
        "Patriarchal cultural scripts preserve domestic inequality — Elizabeth Silva & Man-yee Kan — technology and employment fail to dismantle the female monopoly on routine domestic drudgery.",
        "Domestic equality is an illusion outsourced to low-paid working-class women — Nicky Gregson & Michelle Lowe — affluent families buy domestic help rather than negotiating male equality."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Jonathan Gershuny",
        quote: "There is a clear trend towards the gradual sharing of domestic labour, characterized by a process of lagged adaptation across generations."
      },
      {
        theorist: "Elizabeth Silva",
        quote: "Technology does not erase patriarchal division; it is absorbed into existing gender relations, leaving women to manage the machinery of the home."
      },
      {
        theorist: "Man-yee Kan",
        quote: "Women's entry into the labor force has challenged the traditional division of labor, but cultural assumptions about gender roles remain deeply entrenched."
      }
    ]
  },
  "Power and Decision Making (Pahl & Vogler)": {
    theorists: ["Jan Pahl & Carolyn Vogler", "Stephen Edgell", "Irene Hardill", "David Morgan", "Sally & Rudi Dallos", "Carol Smart"],
    keyTerms: {
      "Allowance System": "Pahl & Vogler's financial model: husbands give wives a set budget for domestic groceries and children's needs, while retaining sole control of surplus capital.",
      "Pooling System": "Pahl & Vogler's model: partners share a joint bank account, common in dual-earner households, though men often retain final control over large investments.",
      "Decision-Making Hierarchy": "Stephen Edgell's taxonomy of power: Very Important Decisions (mortgages, house buying, moving—dominated by men), Important (schools, holidays—joint), and Less Important (food, clothing—dominated by women).",
      "Dual-Career Priority": "Irene Hardill's finding: in professional dual-earner couples, the man's career almost always takes priority when deciding whether to relocate for work.",
      "Affective Power": "Dallos' concept: power derived from emotional leverage in a relationship (the partner who 'loves least' or cares less holds the emotional power to dominate).",
      "Three Family Economies": "David Morgan's concept: the Political economy (financial management), the Moral economy (gendered duty/values), and the Emotional economy (interpersonal affective power)."
    },
    collinsFocus: "Details Pahl and Vogler's financial allocation systems (allowance, pooling, separate spheres) and Edgell's decision-making hierarchy in middle-class professional families.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of family power dynamics. Highlights David Morgan's political, moral, and emotional family economies, alongside Irene Hardill's research on career dominance and Dallos' concept of affective power.",
    evaluationPoints: [
      "Pooling Does Not Guarantee Equality: Pahl & Vogler found that even with joint accounts, men frequently exercise veto power over major financial decisions.",
      "Edgell's Material Determinism: Men dominated very important decisions primarily because they earned significantly higher salaries, linking domestic power to workplace inequality.",
      "Smart's Same-Sex Freedom: Carol Smart found that same-sex and younger cohabiting couples often hold separate bank accounts, attaching little symbolic meaning of power to money.",
      "Emotional Power vs Financial Power: Dallos and Morgan show that women can exercise substantial moral and emotional control over daily family life despite financial subordination.",
      "Class Differences in Management: In low-income working-class families, women often carry the stressful burden of managing scarce funds ('budgeting poverty'), whereas men control wealth."
    ],
    keyStudies: [
      {
        researcher: "Jan Pahl & Carolyn Vogler (1994)",
        study: "Money, Power and Inequality Within Marriage",
        method: "Structured and qualitative interviews with 1,211 married and cohabiting couples in the UK.",
        findings: "Identified two main money management systems: the allowance system and the pooling system. Proved that even within pooling, men were twice as likely as women to make final financial decisions."
      },
      {
        researcher: "Stephen Edgell (1980)",
        study: "Middle-Class Couples: A Study of Segregation, Strategy and Equality in Marriage",
        method: "In-depth semi-structured interviews with 38 middle-class professional couples.",
        findings: "Discovered a 3-tier hierarchy: Very Important decisions (housing, finance, cars) were made by men; Important decisions (holidays, schools) were joint; Less Important decisions (food, decor) were left to wives."
      },
      {
        researcher: "Irene Hardill et al. (1997)",
        study: "Decision-Making in Dual-Career Households",
        method: "Survey of 30 dual-career professional households in Nottingham and Leeds.",
        findings: "Demonstrated that the husband's career took priority in 80% of couples when considering geographic job relocations, proving that female career advancement is subordinated to male earning power."
      }
    ],
    contemporaryExamples: [
      "The prevalence of separate digital bank accounts and budgeting apps (Monzo, Revolut) among millennial cohabiting couples who deliberately maintain financial independence.",
      "Economic abuse legislation in the UK Domestic Abuse Act 2021, which formally recognized controlling access to bank accounts and money as a criminal form of coercive control."
    ],
    commonMisconceptions: [
      "Assuming that managing the household budget equates to holding financial power; Pahl proves low-income women given the 'allowance' bear the stress of debt, while men retain surplus disposable cash.",
      "Believing that joint bank accounts prove equal partnership; Vogler proved that pooling often masks covert male veto power over significant investments."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Power, Authority, Lukes' three dimensions of power).",
      "Links to Paper 2 Theories of Family (Marxist political economy, Radical feminist patriarchy).",
      "Links to Paper 3 Education (Economic and cultural capital investments by parents)."
    ],
    keyStatistics: [
      "Over 65% of UK couples now operate a pooling system or joint bank account, but in over half of these, men report having the final say on major financial investments (Pahl & Vogler).",
      "The gender pay gap in the UK remains at 14.3% for full-time workers, directly underwriting male dominance in domestic decision-making (ONS, 2023)."
    ],
    essayArguments: {
      for: [
        "Domestic power and major decision-making remain concentrated in male hands — Stephen Edgell & Jan Pahl — the gender wage gap ensures men retain ultimate financial authority.",
        "Women's professional careers remain systematically subordinated to men's — Irene Hardill — dual-career relocations almost exclusively prioritise the male breadwinner's advancement."
      ],
      against: [
        "Modern couples increasingly utilize individualized financial management to preserve equality — Carol Smart — separate accounts and negotiated pooling dismantle financial dominance.",
        "Women exercise decisive moral and emotional power within the household — David Morgan & Dallos — affective power and domestic management provide substantial relational leverage."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Jan Pahl",
        quote: "The way money is managed and controlled within the household reveals the hidden power structures that underpin marital inequality."
      },
      {
        theorist: "Stephen Edgell",
        quote: "Men dominate the very important decisions because they control the major economic resources of the family."
      },
      {
        theorist: "Carol Smart",
        quote: "For same-sex and younger couples, money does not automatically equal power; control is negotiated on terms of personal autonomy."
      }
    ]
  },
  "Domestic Violence": {
    theorists: ["R. Emerson Dobash & Russell Dobash", "Sylvia Walby & Jonathan Allen", "Kate Millett", "Richard Wilkinson & Kate Pickett", "Catherine Kirkwood", "Stephanie Yearnshire"],
    keyTerms: {
      "Domestic Violence": "Any incident or pattern of controlling, coercive, threatening behaviour, violence or abuse (physical, sexual, psychological, emotional, financial) between intimate partners or family members.",
      "Coercive Control": "A continuous pattern of acts of intimidation, degradation, surveillance, and control used by an abuser to punish and dominate their victim.",
      "Radical Feminist Explanation": "The theory that domestic violence is an inevitable feature of patriarchal society used by men to reinforce and maintain male domination over women.",
      "Materialist (Stress) Explanation": "Wilkinson and Pickett's theory that domestic violence results from stress on family members caused by social and economic inequalities (poverty, overcrowding, debt).",
      "Underreporting & Underrecording": "The sociological reality that official police crime statistics capture only a fraction of domestic abuse due to victim fear, shame, and police reluctance to intervene in private homes.",
      "Status Passage of Abuse": "Dobash & Dobash's concept showing how violence is systematically triggered when a husband perceives his patriarchal authority is challenged by his wife."
    },
    collinsFocus: "Contrasts the Radical Feminist model (Dobash & Dobash, Walby, Millett—domestic violence as patriarchal enforcement) with the Materialist model (Wilkinson & Pickett—domestic violence as economic stress and inequality).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of domestic violence and child abuse. Evaluates WHO global statistics (70% of female homicide victims killed by male partners), Catherine Kirkwood's research on psychological dependency barriers to leaving, and the UK National Commission of Inquiry into Child Abuse.",
    evaluationPoints: [
      "Critique of Radical Feminism: Fails to explain female violence against men (approx. 1 in 6 victims are male) and cannot explain why not all men are violent toward their partners (Elliot).",
      "Critique of Materialism: Does not explain why women in poor households are far more likely to be victims of male violence than men are of female violence (gender asymmetry).",
      "Institutional Reluctance: Stephanie Yearnshire found a woman experiences an average of 35 assaults before making a formal police report, demonstrating deep institutional failings.",
      "Intersectionality: Working-class, young, and disabled women face significantly higher risks of domestic abuse due to compounding financial, housing, and social isolation factors.",
      "Child Victimization Link: The National Commission of Inquiry proves that domestic violence against mothers is directly correlated with physical and emotional abuse of children in the home."
    ],
    keyStudies: [
      {
        researcher: "R. Emerson Dobash & Russell Dobash (1979/1992)",
        study: "Violence Against Wives: A Case Against the Patriarchy / Women, Violence and Social Change",
        method: "In-depth unstructured qualitative interviews with 109 battered women in Scottish women's refuges, combined with police and court records.",
        findings: "Demonstrated that violent incidents were routinely triggered by what husbands perceived as a challenge to their patriarchal authority (e.g. wife asking why he was late or challenging his spending), showing marriage legitimates violence."
      },
      {
        researcher: "Richard Wilkinson & Kate Pickett (2009)",
        study: "The Spirit Level: Why More Equal Societies Almost Always Do Better",
        method: "Comparative international epidemiological and statistical correlation analysis.",
        findings: "Proved that rates of domestic violence and child abuse are significantly higher in societies with high income inequality, as poverty, job insecurity, and housing stress reduce emotional tolerance."
      },
      {
        researcher: "Stephanie Yearnshire (1997)",
        study: "Analysis of Domestic Violence Reporting Patterns",
        method: "Longitudinal survey analysis of domestic abuse victims.",
        findings: "Found that on average, a female victim suffers 35 physical assaults before reporting domestic abuse to the police, proving official crime statistics vastly under-represent the dark side of the family."
      }
    ],
    contemporaryExamples: [
      "The implementation of 'Clare's Law' (Domestic Violence Disclosure Scheme) in the UK, enabling individuals to check police records for a partner's previous abusive history.",
      "The surge in domestic violence distress calls reported globally by the UN during COVID-19 pandemic lockdowns, dubbed the 'Shadow Pandemic'."
    ],
    commonMisconceptions: [
      "Believing domestic violence is caused primarily by alcohol or mental illness; Dobash & Dobash prove alcohol is merely an excuse; the root cause is patriarchal power assertion.",
      "Assuming domestic violence is purely physical; modern law and sociology recognize coercive control, psychological gaslighting, and financial isolation as severe domestic abuse."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Ethical issues in researching vulnerable groups, official statistics validity).",
      "Links to Paper 1 Social Control (Formal vs informal control, patriarchal hegemony).",
      "Links to Paper 4 Media (Sensationalism, underrepresentation of corporate/domestic crime)."
    ],
    keyStatistics: [
      "1 in 4 women and 1 in 6 men in the UK will experience domestic abuse in their lifetime (Crime Survey for England and Wales, 2023).",
      "Two women are killed every week in England and Wales by a current or former male partner (Office for National Statistics, 2023).",
      "Global WHO data indicates 25-30% of women worldwide experience physical or sexual violence by an intimate partner (World Health Organization Report)."
    ],
    essayArguments: {
      for: [
        "Domestic violence is a structural tool of patriarchal power — Dobash & Dobash / Kate Millett — men utilize violence to assert dominance and punish challenges to marital authority.",
        "Official statistics dramatically underestimate the dark side of the family — Stephanie Yearnshire & Catherine Kirkwood — fear, psychological trauma, and underreporting hide widespread abuse."
      ],
      against: [
        "Domestic abuse is driven primarily by material and economic stress — Richard Wilkinson & Kate Pickett — poverty, debt, and social deprivation erode emotional stability in families.",
        "Radical feminist models fail to account for male victims and female perpetrators — David Cheal — interpersonal violence is complex and not exclusively reducible to patriarchal power."
      ]
    },
    theoristQuotes: [
      {
        theorist: "R. Emerson Dobash & Russell Dobash",
        quote: "The family is a violent institution. Marriage provides a culturally approved script for male domination and the physical punishment of wives."
      },
      {
        theorist: "Kate Millett",
        quote: "Patriarchy's chief institution is the family. It is both a mirror of and a connection with the larger society, relying on the threat and reality of male violence."
      },
      {
        theorist: "Richard Wilkinson",
        quote: "Inequality increases social stress. Financial strains, poor housing, and lack of resources boil over into domestic conflict and violence."
      }
    ]
  },
  "The 'Triple Shift' and 'Dual Burden'": {
    theorists: ["Jean Duncombe & Dennis Marsden", "Arlie Russell Hochschild", "Ann Oakley", "Danya Glauber", "Lydia Morris"],
    keyTerms: {
      "Dual Burden (Double Shift)": "The simultaneous burden of full-time paid employment in the labor market and unpaid domestic housework in the home, borne disproportionately by women.",
      "Triple Shift": "Duncombe and Marsden's concept: women performing paid employment, unpaid domestic labour, and invisible 'emotion work' to maintain family stability.",
      "Emotion Work": "Arlie Hochschild's concept: the skilled, exhausting labour of soothing children's anxieties, repairing relationship tensions, and managing the emotional moods of household members.",
      "The Second Shift": "Hochschild's term for the extra month of 24-hour days that working mothers perform each year in unpaid domestic chores compared to their working husbands.",
      "Care Deficit": "The societal shortfall in childcare and domestic nurture created when women work full-time without men increasing their domestic contributions or state childcare provision.",
      "Commercialisation of Intimacy": "Hochschild's concept describing how private emotional and caring functions (babysitting, dating agencies, eldercare) are increasingly bought and sold in capitalist markets."
    },
    collinsFocus: "Details Duncombe and Marsden's research on the emotional economy of the family. Examines Arlie Hochschild's classic study 'The Second Shift' and evaluates the physical and psychological toll on working mothers.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the triple shift. Explores how female emotional investment in children and partners props up both the patriarchal household and wider economic stability, while exposing women to exhaustion, stress, and career stagnation.",
    evaluationPoints: [
      "The Illusion of the 'New Man': Hochschild and Duncombe & Marsden prove that while men may identify with the idea of the caring 'New Man', their practical emotion work is negligible.",
      "Barrier to Career Advancement: The exhausting burden of the triple shift is the single largest structural explanation for why women hit the 'glass ceiling' in corporate management.",
      "Postmodern Fragmentation: Postmodernists argue that gender-neutral parenting arrangements and flexible remote working are enabling couples to deconstruct the triple shift.",
      "Neglect of Male Stress: Men in low-paid manual jobs argue that working 50+ hours of physical overtime to provide economic survival is equally taxing, though rarely classified as 'emotion work'.",
      "Global Care Chains: Wealthy Western women relieve their dual burden by employing low-wage migrant women, transferring the domestic care deficit to developing countries (Hochschild)."
    ],
    keyStudies: [
      {
        researcher: "Jean Duncombe & Dennis Marsden (1993/1995)",
        study: "Love and Intimacy: The Gender Division of Emotion and 'Emotion Work'",
        method: "In-depth semi-structured qualitative interviews with 40 couples married for 15+ years.",
        findings: "Demonstrated that women experienced deep emotional dissatisfaction because they had to perform a 'triple shift': paid work, domestic labour, and the exhausting task of sustaining family emotional harmony with minimal male reciprocation."
      },
      {
        researcher: "Arlie Russell Hochschild (1989/2003)",
        study: "The Second Shift: Working Families and the Revolution at Home",
        method: "Intensive qualitative case studies and participant observation of 50 American working couples.",
        findings: "Discovered that working mothers worked an extra 'second shift' of domestic chores and emotional care equivalent to an extra month of 24-hour days per year compared to their husbands."
      }
    ],
    contemporaryExamples: [
      "Working mothers managing 'Zoom school' and childcare during remote work while full-time fathers occupied private home-office spaces during the pandemic.",
      "The rapid growth of corporate 'mental health days' and wellness apps targeting working mothers suffering from chronic burnout and exhaustion."
    ],
    commonMisconceptions: [
      "Confusing emotion work with natural female caring instincts; Hochschild proves emotion work is conscious, skilled, and exhausting labour, not a biological impulse.",
      "Assuming the dual burden only affects working-class women; studies show professional middle-class women in elite careers suffer intense triple shift pressures due to perfectionist standards."
    ],
    synopticLinks: [
      "Links to Paper 1 Socialisation (Gender socialisation, expressive role expectations).",
      "Links to Paper 2 Theories of Family (Marxist feminist reserve army of labour, Ansley).",
      "Links to Paper 4 Globalisation (Hochschild's global care chains, female migrant labor)."
    ],
    keyStatistics: [
      "UK studies show 73% of working mothers report feeling exhausted and overwhelmed by the combined burden of work, housework, and emotional scheduling (Mothers' Union Report).",
      "Over 85% of sole-carer responsibilities for sick children or eldercare in dual-earner households fall upon the female partner (Carers UK, 2023)."
    ],
    essayArguments: {
      for: [
        "Women are systematically exploited through the triple shift — Duncombe & Marsden / Arlie Hochschild — paid employment has expanded without any corresponding reduction in domestic and emotional duties.",
        "The second shift damages women's career and psychological health — Ann Oakley — the double burden of unpaid domesticity holds women back in the capitalist labour market."
      ],
      against: [
        "Paternal involvement in active emotional childcare is reaching record highs — Oriel Sullivan & Esther Dermott — 'intimate fatherhood' is transforming modern male identities.",
        "Commercialisation and digital services allow families to offload emotional and domestic strain — Postmodernists — automated domestic technologies significantly reduce workloads."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Jean Duncombe & Dennis Marsden",
        quote: "Women are doing the triple shift: they work for wages, they clean the house, and they do the exhausting emotional repair work that holds the marriage together."
      },
      {
        theorist: "Arlie Russell Hochschild",
        quote: "Women come home from paid work to begin a second shift of unpaid domestic labor and emotional caretaking. The revolution at home has stalled."
      },
      {
        theorist: "Esther Dermott",
        quote: "Modern fatherhood is increasingly defined by emotional intimacy, with men seeking close, nurturing relationships with their children."
      }
    ]
  }
};
