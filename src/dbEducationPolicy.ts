import { TextbookRAGEntry } from './sociologyRAG';

export const educationPolicyDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Marketisation and Choice": {
    theorists: ["Stephen J. Ball", "Miriam David", "John Chubb & Terry Moe", "Will Bartlett & Sharon Gewirtz", "Julian Le Grand"],
    keyTerms: {
      "Marketisation": "The policy of introducing market forces (competition, consumer choice, privatization) into the state education system.",
      "1988 Education Reform Act (ERA)": "Margaret Thatcher's landmark legislation that introduced league tables, formula funding, open enrolment, local management of schools (LMS), and the National Curriculum.",
      "Parentocracy": "Miriam David's concept: 'rule by parents'—shifting power away from teachers and local authorities to parent consumers.",
      "Formula Funding": "Schools receiving state funding based directly on the number of pupils they attract, incentivizing schools to compete for students.",
      "League Tables & Cream-Skimming": "Will Bartlett's concepts: League tables published in media lead high-performing schools to 'cream-skim' desirable middle-class pupils and 'silt-shift' low-attaining, expensive working-class pupils.",
      "Parental Typology (Gewirtz)": "Sharon Gewirtz's 3 types of parents: 1. Privileged-Skilled Choosers (middle-class, mobile, cultural capital), 2. Disconnected-Local Choosers (working-class, restricted by transport/cash), 3. Semi-Skilled Choosers (ambitious but lacking cultural capital).",
      "Consumer Choice vs Bureaucratic Monopoly": "Chubb & Moe's argument: state schools fail because they are an inefficient state monopoly not accountable to parents; market competition forces schools to improve."
    },
    collinsFocus: "Details the 1988 Education Reform Act policies (league tables, OFSTED, open enrolment, formula funding). Contrasts Neoliberal/New Right theory (Chubb & Moe) with Marxist critiques of class reproduction.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of marketisation. Features Sharon Gewirtz's study of parental choice, Bartlett's cream-skimming and silt-shifting, and evaluates Stephen Ball's myth of parentocracy.",
    evaluationPoints: [
      "The Myth of Parentocracy: Stephen Ball argues parentocracy is an illusion; only middle-class parents have the economic capital to buy houses in top catchments and cultural capital to exploit appeals.",
      "Gewirtz's Evidence of Inequality: Disconnected-local working-class parents are forced to choose local underperforming schools due to bus fare costs and work schedules, widening the class gap.",
      "Teaching to the Test: League table pressures force schools to narrow the curriculum, focus exclusively on exam drills, and eliminate creative arts and pastoral support.",
      "Chubb & Moe's Market Success: Proponents argue consumer choice empowers parents, creates innovative charter/academy schools, and eliminates complacency in poor schools.",
      "Off-Rolling & Silt-Shifting: High-stakes marketisation incentivises schools to covertly expel ('off-roll') low-achieving or vulnerable pupils before GCSE exams to protect league table scores."
    ],
    keyStudies: [
      {
        researcher: "Sharon Gewirtz (1995)",
        study: "Markets, Choice and Equity in Education",
        method: "Qualitative interviews with parents and teachers across 14 London secondary schools.",
        findings: "Identified 3 parental chooser types: Privileged-Skilled (prosperous, culturally savvy, mobile), Disconnected-Local (working-class, limited by travel costs and local loyalty), and Semi-Skilled, proving market choice directly reinforces social class segregation."
      },
      {
        researcher: "John Chubb & Terry Moe (1990)",
        study: "Politics, Markets, and America's Schools",
        method: "Comparative statistical survey of 60,000 students across 1,015 US high schools.",
        findings: "Demonstrated that low-income pupils in private voucher schools achieved 5% higher exam scores than in state schools. Argued that state control creates bureaucratic failure, advocating a free-market voucher system."
      },
      {
        researcher: "Stephen J. Ball (1994)",
        study: "Education Reform: A Critical and Post-Structural Approach",
        method: "Critical policy discourse analysis and qualitative fieldwork.",
        findings: "Proved that marketisation creates the 'Myth of Parentocracy': market forces legitimate class inequality by making it look like parents have free choice, when in reality middle-class parents colonize elite state schools."
      }
    ],
    contemporaryExamples: [
      "The annual publication of national GCSE 'Progress 8' and 'Attainment 8' league tables in national newspapers, driving local school competition.",
      "The property market phenomenon where houses within the catchment area of an Ofsted 'Outstanding' comprehensive sell for a £40,000+ premium over adjacent streets."
    ],
    commonMisconceptions: [
      "Assuming marketisation gave all parents equal choice; sociologists show choice without economic mobility is an illusion.",
      "Believing league tables measure pure school quality; league tables heavily reflect the socio-economic intake of pupils rather than added value."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Neoliberalism vs Marxist critique of commodification).",
      "Links to Paper 3 Education Theories (Marxist Althusser vs Functionalist Davis & Moore).",
      "Links to Paper 3 Meritocracy (Parentocracy replacing meritocracy, Ball)."
    ],
    keyStatistics: [
      "Schools with an Ofsted 'Outstanding' rating have on average 40% fewer Free School Meal pupils than schools rated 'Inadequate' in the same local authority (Education Policy Institute).",
      "Over 65% of admissions appeals to oversubscribed top-tier state schools in England are submitted by professional middle-class parents (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "Marketisation and parental choice drive school improvement and accountability — Chubb & Moe & New Right — competition breaks state monopolies and raises academic standards.",
        "Open enrolment and published performance data empower parents as informed consumers — Julian Le Grand — transparency allows parents to escape failing schools."
      ],
      against: [
        "Marketisation reproduces and deepens social class segregation — Stephen Ball & Sharon Gewirtz — middle-class parents use cultural and economic capital to monopolise top schools.",
        "League tables incentivize cream-skimming, silt-shifting, and off-rolling of vulnerable pupils — Will Bartlett & Gillborn/Youdell — schools sacrifice disadvantaged students for rankings."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stephen J. Ball",
        quote: "Marketisation does not create equality of opportunity; it creates a parentocracy that legitimates the transmission of middle-class privilege."
      },
      {
        theorist: "John Chubb & Terry Moe",
        quote: "State schools are held hostage by bureaucratic politics and teacher unions. Only market competition and consumer choice can produce educational excellence."
      },
      {
        theorist: "Sharon Gewirtz",
        quote: "The education market is an arena of class warfare where privileged-skilled choosers deploy their capital to capture the best schooling for their children."
      }
    ]
  },
  "Privatisation of Education": {
    theorists: ["Stephen J. Ball", "Alex Molnar", "Glenn Rikowski", "Stuart Hall", "Colin Leys", "Henry Giroux"],
    keyTerms: {
      "Privatisation of Education": "The transfer of educational services, management, and assets from the state and local authorities to private business corporations.",
      "Privatisation IN Education (Endogenous)": "Importing private-sector business practices into state schools: performance-related pay for teachers, marketing budgets, competitive bidding, league tables.",
      "Privatisation OF Education (Exogenous)": "Private companies opening up the state education system for corporate profit: Multi-Academy Trusts (MATs), private exam boards, EdTech software, school catering, building maintenance.",
      "The 'Cola-isation' of Schools": "Alex Molnar's concept: the penetration of private corporate branding, vending machines, and sponsored learning materials into classrooms.",
      "Education Services Industry (ESI)": "Stephen Ball's concept: the multi-billion pound global corporate marketplace of private companies selling curriculum, inspection, and software services to schools.",
      "Commodification of Knowledge": "Glenn Rikowski's Marxist concept: transforming education into a capitalist commodity bought and sold on international markets for capital accumulation.",
      "Academies & Free Schools (2010 Academies Act)": "The mass conversion of state schools into independent state-funded academies run by private Multi-Academy Trusts, removed from local council control."
    },
    collinsFocus: "Distinguishes between endogenous privatisation (internal market techniques) and exogenous privatisation (private sector running public education for profit). Evaluates Multi-Academy Trusts and corporate involvement.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the Education Services Industry (ESI). Features Stephen Ball's global policy networks, Alex Molnar's 'Cola-isation' studies, and evaluates the democratic accountability of private academy trusts.",
    evaluationPoints: [
      "Loss of Democratic Accountability: Multi-Academy Trusts (MATs) are run by unelected private boards; parents and local communities have no democratic voting power over school decisions (Ball).",
      "Executive Pay Scandals: In privatized academies, CEOs of academy trusts award themselves salaries exceeding £300,000 while cutting frontline classroom support assistants.",
      "Rikowski's Marxist Warning: Capitalist globalisation views state education as one of the final untapped frontiers for corporate profit extraction.",
      "Private Sector Efficiency: Proponents argue private management brings cutting-edge technology, corporate discipline, cost efficiency, and dynamic leadership to struggling schools.",
      "The 'Cola-isation' Intrusion: Corporate sponsorships turn vulnerable students into captive audiences for commercial product advertising and data harvesting (Molnar)."
    ],
    keyStudies: [
      {
        researcher: "Stephen J. Ball (2007/2012)",
        study: "Education Plc: Understanding Private Sector Participation in Public Sector Education / Global Education Inc.",
        method: "Critical policy network analysis and economic mapping of private educational corporations.",
        findings: "Demonstrated the emergence of the Education Services Industry (ESI): private corporations, consultancy firms, and ed-tech companies make enormous profits from state educational funding, blurring the boundary between public service and private profit."
      },
      {
        researcher: "Alex Molnar (2005)",
        study: "School Commercialism: From Democratic Institution to Market Commodity",
        method: "Content analysis and empirical tracking of corporate sponsorship in US and UK schools.",
        findings: "Proved that schools are targeted by corporations for 'cola-isation' (product placement, fast-food sponsorships, branded learning materials), exploiting schools' funding shortages to cultivate brand loyalty among children."
      },
      {
        researcher: "Glenn Rikowski (2001)",
        study: "The Battle in Seattle: Its Significance for Education",
        method: "Marxist theoretical critique of international trade agreements (GATS).",
        findings: "Argued that the privatisation of education is a global project designed to convert human labour-power into a commodified asset for transnational corporate exploitation."
      }
    ],
    contemporaryExamples: [
      "Large Multi-Academy Trusts (MATs) in England managing over 50 schools each, operating like commercial corporate chains with centralized marketing and HR.",
      "Private educational technology companies (Google Classroom, Microsoft Education) capturing millions of school user accounts and public budget subscriptions."
    ],
    commonMisconceptions: [
      "Assuming academies are private fee-paying schools; state academies remain free to attend, but are managed outside of local democratic government control.",
      "Believing privatisation only affects school buildings; the entire ecosystem of teacher training, exam marking, and inspection (Ofsted contractors) is heavily privatized."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist commodity fetishism, Neoliberal market hegemony).",
      "Links to Paper 3 Education Theories (Marxist reproduction, Bowles & Gintis).",
      "Links to Paper 4 Globalisation (Transnational corporations, global education trade)."
    ],
    keyStatistics: [
      "Over 80% of secondary schools and 40% of primary schools in England have converted into state-funded academies run by Multi-Academy Trusts (Department for Education, 2023).",
      "The global Education Services Industry (ESI) is projected to reach a market value of over $8 trillion worldwide by 2030 (HolonIQ Global Market Report)."
    ],
    essayArguments: {
      for: [
        "Privatisation and academy freedom introduce dynamic leadership and innovation — Neoliberals & New Right — business management breaks bureaucratic stagnation and raises efficiency.",
        "Public-private partnerships bring vital private capital investment and technology to underfunded schools — Julian Le Grand — corporate sponsorship modernises infrastructure."
      ],
      against: [
        "Privatisation transforms education into a source of private corporate profit extraction — Stephen Ball & Glenn Rikowski — public funds are diverted from classrooms to CEO salaries and shareholders.",
        "School 'cola-isation' and corporate takeover strip communities of democratic accountability — Alex Molnar & Henry Giroux — schools become marketing arenas rather than democratic civic spaces."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stephen J. Ball",
        quote: "Education is no longer simply a public good; it has become a lucrative sub-sector of the global market, carved up by private corporations for profit."
      },
      {
        theorist: "Alex Molnar",
        quote: "Schools have become the ultimate billboard. Underfunded schools sell out their children's attention to corporate advertisers in exchange for basic supplies."
      },
      {
        theorist: "Glenn Rikowski",
        quote: "The privatisation of education is not an accident; it is a structural necessity of late capitalism, turning schools into factories of commodified human capital."
      }
    ]
  },
  "Compensatory Education": {
    theorists: ["Basil Bernstein", "A.H. Halsey", "Mary Mortimore & Peter Mortimore", "B. Whitty", "T. Bennett", "Sutton Trust"],
    keyTerms: {
      "Compensatory Education": "Targeted government social and educational policies designed to provide extra material, cultural, and financial resources to disadvantaged schools and pupils to overcome social deprivation.",
      "Operation Head Start (USA)": "1960s multi-billion dollar American compensatory programme offering free preschooling, medical screenings, and parental education in impoverished areas.",
      "Educational Priority Areas (EPAs)": "A.H. Halsey's 1960s UK programme injecting direct state grants into schools located in deprived working-class neighbourhoods.",
      "Sure Start Children's Centres (1998)": "New Labour's flagship policy providing integrated early-years childcare, maternal health support, and parenting classes in low-income UK communities.",
      "Pupil Premium (2011)": "Coalition government policy allocating additional direct state funding per pupil (£1,400+) to schools for every child eligible for Free School Meals.",
      "Education Action Zones (EAZs)": "New Labour policy creating local partnerships between businesses, councils, and schools in deprived urban areas to raise standards.",
      "Education Cannot Compensate for Society": "Basil Bernstein's famous sociological warning that schools alone cannot eradicate class inequality caused by low wages, poor housing, and capitalist exploitation."
    },
    collinsFocus: "Traces the historical evolution of compensatory policies from US Head Start and UK 1960s EPAs to New Labour's Sure Start, Aimhigher, and the modern Pupil Premium. Evaluates success and limitations.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of compensatory education. Features Basil Bernstein's critique of compensatory assumptions, Halsey's EPA evaluations, and the Sutton Trust's evidence on how schools spend Pupil Premium funds.",
    evaluationPoints: [
      "Bernstein's Core Critique: Compensatory education operates on a flawed 'deficit model', assuming working-class homes are culturally deficient while ignoring capitalist structural poverty.",
      "Misuse of Pupil Premium: Sutton Trust research reveals many headteachers use Pupil Premium to plug general school budget deficits rather than spending it on targeted one-to-one tutoring for poor kids.",
      "Austerity Cuts Undermining Sure Start: Over 1,000 Sure Start centres have been closed due to post-2010 government austerity cuts, reversing major early-years gains for disadvantaged families.",
      "Positive Impact of Early Intervention: Longitudinal studies of Head Start and Sure Start prove early childhood nutrition and health interventions significantly boost lifelong high school graduation and reduce crime.",
      "Whitty's Evaluation: Geoff Whitty argues compensatory policies act as cosmetic 'band-aids' that allow governments to appear compassionate without reforming the unequal taxation or wealth system."
    ],
    keyStudies: [
      {
        researcher: "A.H. Halsey (1972)",
        study: "Educational Priority: EPA Problems and Policies (Government Report)",
        method: "Action research and multi-site policy evaluation across 4 designated Educational Priority Areas in England.",
        findings: "Concluded that while EPAs generated positive local innovations, targeted school funding could not overcome the crushing weight of structural neighborhood poverty without wider economic regeneration."
      },
      {
        researcher: "Basil Bernstein (1970)",
        study: "Education Cannot Compensate for Society",
        method: "Theoretical sociolinguistic and policy critique.",
        findings: "Argued that compensatory programmes mistakenly label working-class families as deficient, distracting attention from the fact that schools are institutions that serve middle-class interests."
      },
      {
        researcher: "Sutton Trust (2018)",
        study: "The Pupil Premium: A Five-Year Review of Impact",
        method: "Survey of 1,200 secondary and primary school teachers and headteachers across England.",
        findings: "Found that while Pupil Premium improved awareness of disadvantage, 34% of headteachers admitted using the funds to offset core budget cuts rather than funding evidence-based interventions like metacognition tutoring."
      }
    ],
    contemporaryExamples: [
      "The UK National Tutoring Programme (NTP) launched after COVID-19 to provide subsidised catch-up tutoring for disadvantaged students.",
      "Free school breakfast clubs and holiday food voucher programmes targeted at families on Universal Credit to prevent child malnutrition during school vacations."
    ],
    commonMisconceptions: [
      "Assuming compensatory education has failed completely; studies show quality early-years intervention dramatically reduces long-term juvenile delinquency and special needs referrals.",
      "Believing compensatory education changes the capitalist class structure; sociologists show it only improves individual life chances at the margins."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Social Democratic reformism vs Marxist critique).",
      "Links to Paper 2 Childhood (Child-centred welfare, Donzelot).",
      "Links to Paper 3 Achievement (Material vs cultural deprivation, Bull, Douglas)."
    ],
    keyStatistics: [
      "The UK Government allocates over £2.9 billion annually in Pupil Premium funding to state schools for disadvantaged children (Department for Education, 2023).",
      "Children who attended Sure Start Children's Centres experienced an average 20% reduction in childhood hospitalizations for injuries by age 11 (Institute for Fiscal Studies, 2021)."
    ],
    essayArguments: {
      for: [
        "Compensatory education provides essential targeted resources to narrow the class gap — A.H. Halsey & Social Democrats — early intervention and Pupil Premium level starting conditions.",
        "Early years support transforms lifelong developmental health — Institute for Fiscal Studies — programmes like Sure Start provide lasting cognitive and social benefits."
      ],
      against: [
        "Education cannot compensate for society's structural inequalities — Basil Bernstein & Geoff Whitty — schooling cannot eradicate poverty, substandard housing, and low wages.",
        "Compensatory policies operate on a flawed deficit model that blames the victim — Nell Keddie — programs pathologise working-class culture while leaving capitalist inequality intact."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Basil Bernstein",
        quote: "Education cannot compensate for society. The role of the school cannot be divorced from the wider structure of economic and social inequality."
      },
      {
        theorist: "A.H. Halsey",
        quote: "Educational Priority Areas showed that schools can make a difference, but only if they are part of a total assault on urban poverty and deprivation."
      },
      {
        theorist: "Geoff Whitty",
        quote: "Compensatory policies allow governments to pretend they are addressing poverty in the classroom while refusing to tackle the root causes of economic inequality in society."
      }
    ]
  },
  "Globalisation and Educational Policy": {
    theorists: ["Stephen J. Ball", "Joel Spring", "Andy Green", "Michael Kelly", "Pasi Sahlberg", "PISA (OECD)"],
    keyTerms: {
      "Globalisation of Education": "The increasing interconnectedness of national education systems driven by international rankings, transnational corporations, digital technology, and global policy borrowing.",
      "PISA (Programme for International Student Assessment)": "The OECD's triennial standardized test evaluating 15-year-olds in Maths, Science, and Reading across 80+ countries, driving global league tables.",
      "PISA Panic": "The political moral panic triggered when a nation performs poorly in international PISA rankings, forcing governments to rapidly copy foreign educational policies.",
      "Global Education Reform Movement (GERM)": "Pasi Sahlberg's concept: the contagious global spread of neoliberal policies (standardized testing, market competition, school choice, privatization, corporate management).",
      "Policy Borrowing & Policy Lending": "Governments adopting educational models from top-performing nations (e.g. UK adopting 'Mastery Maths' from Singapore and Shanghai).",
      "Multicultural vs National Identity Curriculum": "The tension in educational policy between teaching global citizenship and foreign languages vs defending traditional national history and patriotic values."
    },
    collinsFocus: "Explores how economic globalisation pressures governments to restructure schools for global market competition. Examines the impact of OECD PISA league tables and transnational student migration.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of globalisation and education. Features Pasi Sahlberg's GERM critique, Joel Spring's analysis of corporate globalization, and evaluates international policy borrowing from East Asia.",
    evaluationPoints: [
      "Flaws in Policy Borrowing: Copying East Asian 'Mastery Maths' ignores that high performance in Singapore and Shanghai is driven by intense private tutoring and cultural family values that cannot be transplanted to the UK.",
      "Narrowing of Education: International PISA league tables reduce education to a narrow race in Maths and Reading, causing schools to abandon humanities, music, and physical education.",
      "Sahlberg's Finnish Model: Finland rejects GERM (no standardized testing, no league tables, teacher autonomy), yet outperforms marketized nations, proving GERM is ideologically driven.",
      "Transnational Higher Education: UK and US universities have become multi-billion dollar export industries reliant on recruiting high-tuition international students from China and India.",
      "Global Policy Networks: Stephen Ball shows educational policies are no longer made solely by national parliaments, but by global networks of corporate consultants and tech giants."
    ],
    keyStudies: [
      {
        researcher: "Pasi Sahlberg (2011/2015)",
        study: "Finnish Lessons: What Can the World Learn from Educational Change in Finland?",
        method: "Comparative international policy and epidemiological educational analysis.",
        findings: "Identified GERM (Global Education Reform Movement) as a destructive global dogma promoting competition and high-stakes testing. Proved that Finland achieved world-leading outcomes by doing the exact opposite: professional trust, equity, no school choice, and no standardized testing."
      },
      {
        researcher: "Stephen J. Ball (2012)",
        study: "Global Education Inc.: New Policy Networks and the Neo-Liberal Imaginary",
        method: "Global ethnography and political network analysis of international educational policy-making.",
        findings: "Demonstrated that global educational policy is orchestrated by transnational networks of corporate philanthropists (Gates Foundation), multinational publishers (Pearson), and international bodies (OECD/World Bank), overriding national democracy."
      },
      {
        researcher: "Joel Spring (2009)",
        study: "Globalization of Education: An Introduction",
        method: "Historical and political analysis of global education markets.",
        findings: "Showed how global economic agencies (World Trade Organization, OECD) promote a uniform neoliberal model of education aimed solely at training human capital for multinational corporations."
      }
    ],
    contemporaryExamples: [
      "The UK Department for Education spending tens of millions to import the 'Shanghai Mastery Maths' curriculum and textbooks into thousands of English primary schools.",
      "UK universities opening overseas branch campuses in Dubai, Malaysia, and Qatar to capture global student market share."
    ],
    commonMisconceptions: [
      "Assuming PISA scores measure a country's total educational quality; PISA tests only narrow domains of Maths, Science, and Reading in multiple-choice formats.",
      "Believing globalisation only affects higher education; primary school reading methods (synthetic phonics) and math pedagogies are heavily borrowed across global networks."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Neoliberal globalisation vs Marxist dependency theory).",
      "Links to Paper 3 Education Policy (Marketisation, privatisation, GERM).",
      "Links to Paper 4 Globalisation (Cultural homogenisation, global hyper-capitalism)."
    ],
    keyStatistics: [
      "Over 3 million 15-year-old students across 80+ countries have taken the OECD PISA examination since its launch in 2000 (OECD, 2023).",
      "International non-EU students contribute over £28 billion annually in fees and living expenditure to the UK economy (Universities UK International, 2023)."
    ],
    essayArguments: {
      for: [
        "Globalisation has driven international benchmark standards and policy innovation — OECD & New Right — international data (PISA) helps governments identify weaknesses and modernise curricula.",
        "Global competition forces education systems to equip students with high-tech skills — Theodore Schultz — global markets demand competitive, world-class workforce preparation."
      ],
      against: [
        "The Global Education Reform Movement (GERM) imposes a destructive neoliberal testing dogma — Pasi Sahlberg — market competition narrows learning and causes student stress.",
        "Global education is controlled by unaccountable transnational corporate networks — Stephen Ball & Joel Spring — corporate profit extraction overrides national democratic priorities."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Pasi Sahlberg",
        quote: "The Global Education Reform Movement is like an epidemic that infects education systems with standardized testing, market competition, and corporate management."
      },
      {
        theorist: "Stephen J. Ball",
        quote: "Global policy networks have created an education marketplace where transnational corporations dictate curriculum, testing, and teacher management across the globe."
      },
      {
        theorist: "Joel Spring",
        quote: "Globalisation has reduced education to a single overarching purpose: the production of human capital to serve the profit requirements of multinational corporations."
      }
    ]
  },
  "Vocationalism": {
    theorists: ["Inge Bates & George Riseborough", "Finn", "Philip Cohen", "Wolf Review (Alison Wolf)", "Randall Collins", "Paul Willis"],
    keyTerms: {
      "Vocationalism (New Vocationalism)": "Government educational policies and training schemes designed to teach work-related practical skills to prepare non-academic pupils for employment.",
      "Youth Training Scheme (YTS)": "1980s government youth vocational training scheme introduced during mass youth unemployment, criticized by Marxists as low-wage exploitation.",
      "T-Levels & Apprenticeships": "Contemporary UK technical qualifications and workplace apprenticeships designed as high-status vocational alternatives to academic A-Levels.",
      "Social Control Function (Finn)": "Dan Finn's Marxist argument: vocational training was introduced not to teach real skills, but to keep unemployed working-class youth off the streets and reduce politically embarrassing unemployment figures.",
      "Work Disciplinary Function (Cohen)": "Philip Cohen's concept: vocational schemes exist to teach working-class youth good work habits, punctuality, and subordination rather than technical mastery.",
      "The Wolf Review of Vocational Education (2011)": "Professor Alison Wolf's official UK government review finding that 400,000 young people a year were pushed into 'dead-end' vocational qualifications with zero value in the labour market.",
      "Parity of Esteem": "The elusive educational goal of giving technical and vocational qualifications the same high social status, prestige, and university currency as academic A-Levels."
    },
    collinsFocus: "Traces the evolution of UK vocational policy from the 1976 'Great Debate' (James Callaghan) and 1980s YTS to NVQs, BTECs, and modern T-Levels. Contrasts Functionalist human capital theory with Marxist critiques.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of New Vocationalism. Features Dan Finn's and Philip Cohen's Marxist critique of youth training as social control, Inge Bates' empirical trainee studies, and the Wolf Review's findings.",
    evaluationPoints: [
      "The Myth of Skill Shortages: Marxists argue mass youth unemployment was caused by a collapse of industrial jobs, not a lack of youth training; vocational schemes simply blamed young people for capitalist failure (Finn).",
      "Cohen's Socialisation for Subordination: Vocational schemes teach pupils how to be obedient, punctual, low-wage workers, rather than teaching genuine technical engineering or coding.",
      "Wolf Review's Devastating Verdict: The official Wolf Review proved that low-level vocational courses had zero economic payoff, funnelling working-class youth into dead-end retail jobs.",
      "Gender Stereotyping in Vocationalism: Vocational courses reproduce rigid gender divisions: boys are directed into motor engineering/construction and girls into beauty therapy/childcare (Bates).",
      "Functionalist Defence: High-quality modern apprenticeships and T-Levels provide crucial technical skills needed for green energy, digital infrastructure, and aerospace."
    ],
    keyStudies: [
      {
        researcher: "Dan Finn (1987)",
        study: "Training Without Jobs: New Deals and Broken Promises",
        method: "Critical Marxist policy and political analysis of UK youth unemployment schemes.",
        findings: "Proved that New Vocationalism was designed to provide cheap, flexible labor for employers, suppress youth wage demands, artificially reduce official unemployment statistics, and police rebellious working-class youth."
      },
      {
        researcher: "Philip Cohen (1984)",
        study: "Against the New Vocationalism",
        method: "Sociological analysis of vocational curriculum frameworks.",
        findings: "Demonstrated that youth training schemes were not about imparting technical craft skills, but were about inculcating 'work discipline' (punctuality, obedience, and acceptance of low pay)."
      },
      {
        researcher: "Professor Alison Wolf (2011)",
        study: "Review of Vocational Education (The Wolf Report)",
        method: "Independent comprehensive policy and statistical review commissioned by the UK Department for Education.",
        findings: "Revealed that up to 350,000 14-19 year olds were enrolled in poor-quality vocational courses (like 'nail art' or low-level administration) that failed to progress them to higher education or skilled employment."
      }
    ],
    contemporaryExamples: [
      "The introduction of 'T-Levels' (Technical Levels) in England, requiring a compulsory 45-day industry placement alongside classroom technical learning.",
      "Degree Apprenticeships offered by companies like Rolls-Royce, PwC, and Dyson, allowing school leavers to earn a debt-free degree while earning a salary."
    ],
    commonMisconceptions: [
      "Assuming vocational education has achieved parity of esteem with A-Levels; A-Levels and elite universities continue to hold vastly higher cultural and economic status.",
      "Believing vocational students lack ambition; Bates showed vocational trainees are eager to work, but are frustrated by repetitive, low-wage training tasks."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist labor market segmentation vs Functionalist human capital).",
      "Links to Paper 3 Education Theories (Bowles & Gintis' correspondence principle).",
      "Links to Paper 3 Meritocracy (Role allocation, Randall Collins' credentialism)."
    ],
    keyStatistics: [
      "Over 92% of T-Level and BTEC construction and engineering students in the UK are male, while 88% of health and social care students are female, showing acute gender segregation (DfE, 2023).",
      "Graduates of advanced technical apprenticeships earn on average £4,000 more per year by age 25 than graduates of non-Russell Group academic degree courses (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "Modern vocationalism and apprenticeships provide essential technical skills for the modern economy — Functionalists & Theodore Schultz — technical qualifications bridge the gap between school and work.",
        "Degree apprenticeships offer debt-free social mobility for working-class students — Sutton Trust — work-based routes provide valuable practical competence."
      ],
      against: [
        "New Vocationalism operates as an instrument of social control and cheap labor reproduction — Dan Finn & Philip Cohen — schemes discipline working-class youth into low-wage subservience.",
        "Vocationalism reproduces class and gender inequality without delivering parity of esteem — Alison Wolf & Inge Bates — working-class and female pupils are funneled into dead-end, low-status sectors."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Dan Finn",
        quote: "Youth training schemes were never about creating real jobs. They were about disciplining the young, cheapening youth labor, and concealing unemployment."
      },
      {
        theorist: "Philip Cohen",
        quote: "The real hidden curriculum of vocationalism is not technical competence, but work discipline: teaching young people to accept boredom and low pay."
      },
      {
        theorist: "Alison Wolf",
        quote: "Hundreds of thousands of young people have been funneled into dead-end vocational qualifications that do nothing to improve their life chances or earnings."
      }
    ]
  }
};
