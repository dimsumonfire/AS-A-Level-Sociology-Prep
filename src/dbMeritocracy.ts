import { TextbookRAGEntry } from './sociologyRAG';

export const meritocracyDB: Record<string, Partial<TextbookRAGEntry>> = {
  "The Myth of Meritocracy": {
    theorists: ["Samuel Bowles & Herbert Gintis", "Michael Young (Lord Young)", "Pierre Bourdieu", "Richard Breen", "Stephen Ball", "Diane Reay"],
    keyTerms: {
      "The Myth of Meritocracy": "Bowles & Gintis' argument: the belief that education is a fair, open meritocracy where success is based on talent and effort is an ideological illusion designed to legitimate class inequality.",
      "'Poor-Are-Dumb' Theory": "Bowles & Gintis' concept: by convincing people that exams measure innate ability, society tricks working-class failures into blaming themselves rather than capitalist exploitation.",
      "The Rise of the Meritocracy (1958)": "Michael Young's dystopian satirical book that coined the word 'meritocracy' (Merit = IQ + Effort), warning that a society ruled by test scores would become ruthless, arrogant, and deeply divided.",
      "Legitimation of Inequality": "The ideological process by which unequal social and economic outcomes are made to appear fair, natural, and just.",
      "Cultural Reproduction of Privilege": "Pierre Bourdieu's concept: the educational system converts the arbitrary cultural habits of the ruling class into objective academic credentials.",
      "Parentocracy": "Miriam David and Stephen Ball's concept: a system where a child's educational success depends not on their ability or effort, but on the wealth and cultural power of their parents."
    },
    collinsFocus: "Details Bowles and Gintis' classic critique of meritocracy in capitalist schooling. Explores Michael Young's original satirical warning about meritocracy and contrasts with Functionalist human capital theory.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the meritocracy debate. Features Stephen Ball's analysis of parentocracy, Richard Breen's statistical studies on class reproduction in the UK, and evaluates the psychological damage of the meritocratic myth.",
    evaluationPoints: [
      "Young's Prophetic Warning: Michael Young coined 'meritocracy' as a negative satire; he warned that elite winners would feel entitled and arrogant, while losers would be abandoned with zero self-esteem.",
      "Parentocracy Replaces Meritocracy: In a marketised system, wealthy parents buy houses near top state schools or hire private tutors, turning meritocracy into an auction for parental capital (Ball).",
      "Social Mobility Reality: Studies by John Goldthorpe and Richard Breen show absolute mobility rose due to economic expansion, but relative mobility (chances of working-class kids beating middle-class kids) remained static.",
      "Functionalist Defence: Functionalists argue that without standardized meritocratic exams, jobs would be allocated purely through nepotism, family connections, and corruption.",
      "Credentialism & Over-Qualification: Randall Collins argues education is an inflationary credential arms-race where degrees serve as status barriers rather than true measures of job ability."
    ],
    keyStudies: [
      {
        researcher: "Samuel Bowles & Herbert Gintis (1976)",
        study: "Schooling in Capitalist America",
        method: "Statistical regression analysis comparing students' IQ, socio-economic background, and eventual adult income.",
        findings: "Proved that parental socio-economic wealth was overwhelmingly the best predictor of adult income, not IQ or exam grades. Concluded that meritocracy is an ideological myth that legitimates class inequality."
      },
      {
        researcher: "Stephen J. Ball (2003)",
        study: "Class Strategies and the Education Market: The Middle Classes and Higher Education",
        method: "Qualitative interviews with 80 middle-class families in London.",
        findings: "Demonstrated that middle-class parents use their economic, cultural, and social capital to game the education market ('parentocracy'), securing advantages that make true meritocracy impossible."
      },
      {
        researcher: "Michael Young (1958)",
        study: "The Rise of the Meritocracy: An Essay on Education and Equality",
        method: "Sociological-political satirical treatise.",
        findings: "Coined the term 'meritocracy' and predicted that a purely meritocratic society would become an oppressive dystopia where the ruling elite arrogantly believe they deserve their wealth, abandoning the poor as genetically inferior."
      }
    ],
    contemporaryExamples: [
      "The 'Varsity Blues' college admissions scandal in the USA, where wealthy celebrities paid millions in bribes and fake athletic credentials to secure elite university places for their children.",
      "The correlation between high house prices in catchment areas of 'Outstanding' state schools and high GCSE performance, pricing out working-class families."
    ],
    commonMisconceptions: [
      "Assuming Michael Young advocated for meritocracy; he coined the term as a warning against a dystopian, uncaring society.",
      "Believing that because some working-class individuals succeed, meritocracy exists; sociologists show exceptional individual upward mobility does not equal structural meritocracy."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist ideology, Althusser's ISA, Functionalist role allocation).",
      "Links to Paper 3 Educational Theories (Bowles & Gintis, Davis & Moore).",
      "Links to Paper 3 Education Policy (Marketisation, parentocracy, school choice)."
    ],
    keyStatistics: [
      "Privately educated individuals make up only 7% of the UK school population, but account for 65% of senior judges, 52% of diplomats, and 44% of newspaper columnists (Sutton Trust, 2023).",
      "Children from the wealthiest 20% of UK households are over 4 times more likely to attend university than children from the poorest 20% (IFS Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Meritocracy is an ideological myth designed to disguise class reproduction — Bowles & Gintis — educational achievement is determined by parental economic and cultural capital.",
        "Parentocracy has replaced meritocracy in marketised schooling — Stephen Ball — middle-class parents use their wealth to colonise elite educational pathways."
      ],
      against: [
        "Standardised public examinations provide an objective meritocratic testing ground — Talcott Parsons & Davis/Moore — effort and talent are universally assessed without nepotism.",
        "Educational expansion has enabled significant upward social mobility — John Goldthorpe — millions of working-class students have entered professional careers via state universities."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Samuel Bowles & Herbert Gintis",
        quote: "The myth of meritocracy is the cornerstone of capitalist legitimation. It convinces the failures that they are dumb and the winners that they are inherently deserving."
      },
      {
        theorist: "Michael Young",
        quote: "Meritocracy has turned society into a ruthless testing ground where the successful believe their success is entirely their own doing, forgetting the advantages they were given."
      },
      {
        theorist: "Stephen J. Ball",
        quote: "The education market has established a parentocracy: a child's educational destiny is determined by their parents' wealth and cultural savvy."
      }
    ]
  },
  "Social Mobility": {
    theorists: ["John Goldthorpe", "A.H. Halsey", "Richard Breen", "Ralph Turner", "Jo Blanden & Stephen Machin", "Sutton Trust"],
    keyTerms: {
      "Social Mobility": "The movement of individuals or groups between different socio-economic positions or social classes in the stratification hierarchy.",
      "Intergenerational vs Intragenerational Mobility": "Intergenerational: mobility between generations (child vs parents); Intragenerational: mobility within an individual's own working lifetime.",
      "Absolute vs Relative Mobility": "Absolute: the total number of people moving classes due to structural changes (e.g. expansion of office jobs); Relative (Social Fluidity): the comparative chances of someone from a working-class background reaching the top compared to a middle-class child.",
      "Contest Mobility vs Sponsored Mobility": "Ralph Turner's concept: Contest mobility (open American-style competition where everyone races for prizes) vs Sponsored mobility (British-style early selection where an elite picks chosen protégés to join them).",
      "Social Closure": "Max Weber and Frank Parkin's concept: elite groups using exclusionary barriers (private schools, elite club networks, expensive unpaid internships) to keep privileges within their own class.",
      "The Glass Floor": "The sociological phenomenon where wealthy, less academically able middle-class children are protected by parental money from downward social mobility."
    },
    collinsFocus: "Distinguishes between absolute and relative social mobility. Examines Goldthorpe's Oxford Mobility Study and Halsey's 'Origins and Destinations'.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of social mobility in modern Britain. Features Blanden & Machin's findings on declining social fluidity, the Sutton Trust reports on elite social closure, and Ralph Turner's contest vs sponsored mobility model.",
    evaluationPoints: [
      "The Stagnation of Relative Mobility: Goldthorpe and Breen prove that while absolute mobility increased because white-collar jobs expanded, relative social fluidity remained stubbornly unchanged for 50 years.",
      "Declining Mobility for Recent Cohorts: Blanden & Machin prove that children born in 1970 had *less* social mobility than those born in 1958, because middle-class parents monopolised the expansion of higher education.",
      "The 'Glass Floor': Wealthy families deploy economic safety nets to ensure their less-talented children never experience downward mobility, blocking upward mobility for talented working-class youth.",
      "Regional Mobility Traps: Social mobility is geographically fractured; young people in northern post-industrial towns face severe barriers compared to those in London and the South East (Social Mobility Commission).",
      "Elite Class Closure: The Sutton Trust reveals that the upper echelons of law, medicine, politics, and journalism remain closed off by private school and Oxbridge old-boy networks."
    ],
    keyStudies: [
      {
        researcher: "John Goldthorpe et al. (1980/1987)",
        study: "Social Mobility and Class Structure in Modern Britain (The Oxford Mobility Study)",
        method: "Nationwide representative survey of 10,000 men aged 20-64 in England and Wales.",
        findings: "Demonstrated that while 1 in 3 working-class boys moved into the service class due to the expansion of white-collar professional jobs (absolute mobility), relative mobility remained profoundly unequal: service-class boys were still three times more likely to remain in the service class."
      },
      {
        researcher: "Jo Blanden, Paul Gregg & Stephen Machin (2005)",
        study: "Intergenerational Mobility in Europe and North America (LSE Report)",
        method: "Longitudinal comparative analysis of the 1958 and 1970 British Birth Cohort Studies.",
        findings: "Proved that social mobility declined in the UK for the 1970 cohort; the expansion of university education was overwhelmingly captured by affluent families, widening the mobility gap between rich and poor."
      },
      {
        researcher: "Ralph H. Turner (1960)",
        study: "Sponsored and Contest Mobility and the School System",
        method: "Comparative sociological analysis of British and American education systems.",
        findings: "Identified two ideal-type mobility systems: 'Contest Mobility' (open, continuous sporting contest) and 'Sponsored Mobility' (elite selects chosen recruits early, as seen in the British 11-plus grammar school system)."
      }
    ],
    contemporaryExamples: [
      "The UK Social Mobility Commission's annual 'State of the Nation' report, highlighting that social mobility in Britain has stalled for over a decade.",
      "Elite investment banks and law firms introducing 'blind recruitment' and dropping UCAS tariff requirements to combat class closure in graduate hiring."
    ],
    commonMisconceptions: [
      "Confusing the growth of office jobs with increasing fairness; that is *absolute* mobility caused by economic change, not an increase in *relative* social justice.",
      "Assuming high university attendance guarantees upward mobility; graduate over-supply means working-class graduates often end up in non-graduate service roles (over-qualification)."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Weberian social closure, Functionalist stratification).",
      "Links to Paper 3 Education Theories (Social Democratic comprehensive ideal, Halsey).",
      "Links to Paper 3 Education Policy (Tripartite system, 11-plus, higher education expansion)."
    ],
    keyStatistics: [
      "The UK has one of the lowest rates of social mobility among OECD nations: parental income explains over 50% of the variance in children's adult earnings (OECD Report).",
      "A working-class person who enters a professional career earns an average of £6,800 (17%) less per year than a colleague from an affluent background in the exact same job (Social Mobility Commission)."
    ],
    essayArguments: {
      for: [
        "Educational expansion has generated substantial upward social mobility — John Goldthorpe — structural changes in the economy opened white-collar professional jobs to working-class youth.",
        "Comprehensive schooling and universal university access democratised career trajectories — Functionalists — talent and credentials allow motivated individuals to ascend the class ladder."
      ],
      against: [
        "Relative social mobility remains completely blocked by class closure — Blanden, Gregg & Machin / Sutton Trust — middle-class families monopolised educational expansion.",
        "The 'glass floor' and elite networks prevent genuine meritocratic turnover — Diane Reay & Frank Parkin — social capital and family wealth protect affluent children from downward mobility."
      ]
    },
    theoristQuotes: [
      {
        theorist: "John Goldthorpe",
        quote: "Absolute mobility expanded because the shape of the occupational structure changed, but the fundamental relative advantages of the service class remained unchanged."
      },
      {
        theorist: "Stephen Machin",
        quote: "The dramatic expansion of higher education in Britain did not promote social mobility; it was overwhelmingly colonised by the sons and daughters of the affluent."
      },
      {
        theorist: "Ralph H. Turner",
        quote: "Under sponsored mobility, elite recruits are chosen by the established elite itself, and their entry into high status is confirmed through specialized schooling."
      }
    ]
  },
  "Role Allocation": {
    theorists: ["Kingsley Davis & Wilbert E. Moore", "Talcott Parsons", "Melvin Tumin", "Randall Collins", "Alain Touraine", "Robert Blauner"],
    keyTerms: {
      "Role Allocation": "The structural function of the education system in grading, testing, and sorting individuals into occupational roles that match their talents and abilities.",
      "Functional Importance": "Davis & Moore's concept: the idea that certain societal roles (surgeons, airline pilots, engineers) are functionally vital to society's survival and require high rewards.",
      "Human Capital Theory": "The economic and sociological theory that investment in education and training produces high-skill, productive workers who drive economic growth.",
      "Credentialism (Credential Inflation)": "Randall Collins' theory: the requirement of higher educational degrees for jobs that do not actually require advanced skills, serving as an artificial barrier to entry.",
      "Circular Reasoning (Tumin's Critique)": "Tumin's argument that Davis & Moore are illogical: they claim a job is functionally important because it is highly paid, and highly paid because it is functionally important.",
      "Sifting and Sorting": "The progressive testing mechanism (GCSEs, A-Levels, Degrees) that filters individuals out of academic pathways and directs them toward appropriate economic tiers."
    },
    collinsFocus: "Details Davis & Moore's functionalist role allocation hypothesis. Explores how schools act as a sieve to allocate talent, and contrasts with Randall Collins' credentialism thesis.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of role allocation. Features Melvin Tumin's classic critique of functional importance, evaluates credential inflation, and analyses how social capital distorts occupational recruitment.",
    evaluationPoints: [
      "Tumin's Critique of Functional Importance: Many highly rewarded jobs (hedge fund managers, reality TV stars) are less functionally important than low-paid vital workers (nurses, refuse collectors, agricultural labourers).",
      "Collins' Credentialism: Degrees have become mere status symbols used by elite professions to restrict job supply, rather than reflecting technical necessity (Randall Collins).",
      "Nepotism & Social Capital: Elite occupational roles are frequently allocated through parental networks, private school connections, and unpaid internships, bypassing meritocratic sorting.",
      "Wasted Human Talent: Millions of working-class and minority individuals are sifted into low-wage jobs not because they lack talent, but because schools fail to nurture them.",
      "Underemployment Paradox: Over 35% of UK university graduates work in non-graduate jobs, proving that education fails to match skills rationally to economic roles."
    ],
    keyStudies: [
      {
        researcher: "Kingsley Davis & Wilbert E. Moore (1945)",
        study: "Some Principles of Stratification",
        method: "Theoretical functionalist treatise on social stratification and occupational roles.",
        findings: "Argued that for society to function, the most functionally important roles must be filled by the most capable persons, which requires education to act as a competitive, unequal sorting mechanism."
      },
      {
        researcher: "Melvin Tumin (1953)",
        study: "Some Principles of Stratification: A Critical Analysis",
        method: "Critical theoretical critique of Davis & Moore's functionalist assumptions.",
        findings: "Demonstrated that functional importance cannot be objectively measured, and proved that unequal rewards act as an obstacle to finding talent by trapping low-income youth in poverty."
      },
      {
        researcher: "Randall Collins (1979)",
        study: "The Credential Society: An Historical Sociology of Education and Stratification",
        method: "Historical sociological analysis of educational expansion and occupational hiring requirements.",
        findings: "Proved that rising educational entry requirements did not reflect increasing job complexity, but represented 'credential inflation' where degrees function as exclusionary licensing barriers for elite class reproduction."
      }
    ],
    contemporaryExamples: [
      "The requirement of a university degree for entry-level administrative or police roles that were historically performed expertly by school leavers with on-the-job training.",
      "The COVID-19 pandemic revealing that the most functionally vital 'key workers' (care workers, cleaners, supermarket staff) receive the lowest pay in society."
    ],
    commonMisconceptions: [
      "Assuming role allocation means everyone gets their dream job; functionalists argue role allocation means people are assigned to jobs that match their demonstrated abilities.",
      "Believing credentialism means education is useless; Collins argues education teaches socialisation, but formal degree requirements are inflated beyond technical needs."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Functionalist functional prerequisites vs Marxist exploitation).",
      "Links to Paper 3 Educational Theories (Parsons' focal agency, Bowles & Gintis).",
      "Links to Paper 3 Education Policy (Vocationalism, apprenticeship schemes)."
    ],
    keyStatistics: [
      "According to the UK Office for National Statistics, 36% of UK graduates are currently employed in jobs that do not require a degree ('over-educated / underemployed') (ONS, 2023).",
      "During the COVID-19 pandemic, 70% of workers categorized by the UK Government as 'essential key workers' were in the bottom half of the national earnings distribution."
    ],
    essayArguments: {
      for: [
        "Education performs the indispensable function of allocating talent to roles — Davis & Moore & Talcott Parsons — competitive examinations ensure the most capable fill complex occupations.",
        "Human capital investment drives technological innovation and economic growth — Theodore Schultz — credentialed sorting ensures high-skill industries thrive."
      ],
      against: [
        "Role allocation operates as a mechanism of credential inflation and class closure — Randall Collins — degrees function as arbitrary barriers to protect elite professions.",
        "The concept of 'functional importance' is an ideological justification for inequality — Melvin Tumin — low-paid essential workers are exploited while non-essential elites reap fortunes."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Kingsley Davis & Wilbert E. Moore",
        quote: "Social inequality is an unconsciously evolved device by which societies insure that the most important positions are conscientiously filled by the most qualified persons."
      },
      {
        theorist: "Melvin Tumin",
        quote: "Stratification systems limit the possibility of discovering the full range of human talent, ensuring that privilege rather than ability dictates who reaches the top."
      },
      {
        theorist: "Randall Collins",
        quote: "We live in a credential society where diplomas serve as the currency of social closure, licensing the privileged and excluding the rest."
      }
    ]
  },
  "Equality of Opportunity vs Outcome": {
    theorists: ["Anthony Crosland", "John Rawls", "Friedrich Hayek", "A.H. Halsey", "Michael Young", "Amartya Sen"],
    keyTerms: {
      "Equality of Opportunity (Formal Equality)": "The principle that everyone starts the race from the same starting line with equal rules, regardless of birth, but final outcomes (winners and losers) will be unequal.",
      "Equality of Outcome (Substantive Equality)": "The egalitarian principle that society should ensure everyone enjoys broadly equal living standards, resources, and rewards regardless of individual exam results.",
      "The 'Race' Metaphor": "Crosland's concept: if some runners start 50 metres ahead (rich kids) while others run barefoot with weights (poor kids), a formal equal race is fundamentally rigged.",
      "Positive Discrimination (Affirmative Action)": "State policies giving targeted advantages (e.g. quota systems, contextual offers) to disadvantaged groups to compensate for structural injustice.",
      "Veil of Ignorance": "John Rawls' philosophical concept: a fair society is one designed by people who do not know what class, race, or gender they will be born into.",
      "Capability Approach": "Amartya Sen's concept: true equality requires giving individuals the real substantive freedoms and capabilities to achieve their potential, not just paper legal rights."
    },
    collinsFocus: "Contrasts the liberal Social Democratic pursuit of 'Equality of Opportunity' (tripartite abolition, comprehensive schools, student loans) with the radical socialist demand for 'Equality of Outcome'.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of educational equality. Features Anthony Crosland's race metaphor, John Rawls' theory of justice, and contrasts with neoliberal New Right defenses of inequality (Hayek).",
    evaluationPoints: [
      "Flaw in Equality of Opportunity: You cannot have genuine equality of opportunity in a society with massive economic inequality, because affluent parents will always buy unfair head-starts.",
      "New Right Defence of Inequality (Hayek): The New Right argues equality of outcome destroys individual incentive, enforces authoritarian state coercion, and lowers standards for all.",
      "Compensatory Policies as Tokenism: Marxists argue policies like Pupil Premium provide the illusion of equality of opportunity while leaving the capitalist class structure intact.",
      "Affirmative Action Backlash: Positive discrimination policies often face political resistance from the middle class who claim they constitute 'reverse discrimination' against their children.",
      "Rawlsian Social Justice: John Rawls demonstrates that rational citizens would choose a society that maximizes the well-being of the least advantaged (the 'difference principle')."
    ],
    keyStudies: [
      {
        researcher: "Anthony Crosland (1956)",
        study: "The Future of Socialism",
        method: "Political-philosophical treatise on democratic socialism and educational access.",
        findings: "Demonstrated that formal equality of opportunity is meaningless in an unequal class society: true democratic socialism requires narrowing class differences in outcome to make opportunity real."
      },
      {
        researcher: "John Rawls (1971)",
        study: "A Theory of Justice",
        method: "Philosophical thought experiment (The Original Position and Veil of Ignorance).",
        findings: "Argued that socio-economic inequalities are only just if they result in compensating benefits for the least-advantaged members of society, advocating strong public education to level initial starting points."
      }
    ],
    contemporaryExamples: [
      "Contextual university admissions policies in the UK, where elite universities lower grade requirements for applicants from underperforming state schools in deprived postcodes.",
      "Debates over state inheritance taxes and private school VAT exemptions designed to prevent intergenerational wealth accumulation."
    ],
    commonMisconceptions: [
      "Assuming 'equality of opportunity' guarantees everyone ends up equal; equality of opportunity explicitly justifies *unequal* outcomes as long as the process was fair.",
      "Believing socialists oppose all competition; democratic socialists argue competition is only fair when competitors have equal health, housing, and educational resources."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Social Democratic vs Neoliberal vs Marxist political philosophy).",
      "Links to Paper 3 Education Theories (Social Democratic perspective, Crosland, Halsey).",
      "Links to Paper 3 Education Policy (Comprehensive reform, marketisation)."
    ],
    keyStatistics: [
      "In Finland, where educational policy prioritises equality of outcome (no private schools, no standardized testing), the gap between the highest and lowest achieving schools is the smallest in the OECD.",
      "In the UK, a student from an independent private school is 55 times more likely to gain an Oxbridge place than a student on Free School Meals at an average state school (Sutton Trust, 2023)."
    ],
    essayArguments: {
      for: [
        "True equality of opportunity is impossible without pursuing equality of outcome — Anthony Crosland & John Rawls — deep structural poverty rigs the educational race from the start.",
        "Targeted compensatory education and positive discrimination are required to level life chances — Social Democrats — funding must be redistributed to the most disadvantaged."
      ],
      against: [
        "Pursuing equality of outcome suppresses merit and destroys individual incentive — Friedrich Hayek & New Right — formal equality of opportunity is the only system compatible with freedom.",
        "Schooling in capitalist society exists to legitimate unequal outcomes, not eradicate them — Samuel Bowles & Herbert Gintis — education will always reproduce class divisions."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Anthony Crosland",
        quote: "Equality of opportunity is a hollow sham unless you first establish a radical equality of starting conditions."
      },
      {
        theorist: "John Rawls",
        quote: "Those who have been favored by nature may gain from their good fortune only on terms that improve the situation of those who have lost out."
      },
      {
        theorist: "Friedrich Hayek",
        quote: "From the fact that people are very different it follows that, if we treat them equally, the result must be inequality in their actual position."
      }
    ]
  }
};
