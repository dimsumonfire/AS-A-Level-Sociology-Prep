import { TextbookRAGEntry } from './sociologyRAG';

export const hiddenCurriculumDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Labelling and Self-Fulfilling Prophecy": {
    theorists: ["Howard S. Becker", "Ray C. Rist", "Robert Rosenthal & Lenore Jacobson", "David Hargreaves", "Mary Fuller", "Mairtin Mac an Ghaill"],
    keyTerms: {
      "The 'Ideal Pupil' Stereotype": "Howard Becker's concept: teachers judge pupils against a middle-class archetype (polite, clean, compliant, motivated) rather than raw academic ability.",
      "Self-Fulfilling Prophecy (Pygmalion Effect)": "The sociological process where a false prediction made about a student (e.g. 'high ability' or 'hopeless') causes behaviors that make the prediction come true.",
      "The Typing Process": "David Hargreaves' 3-stage model of teacher categorization: 1. Speculation (first impressions), 2. Elaboration (testing hypotheses), 3. Stabilisation (fixed identity).",
      "Pygmalion in the Classroom": "Rosenthal & Jacobson's landmark field experiment proving teacher expectations directly raise or lower pupils' real IQ scores.",
      "Halo Effect": "The cognitive bias where a teacher assumes a pupil who is well-behaved or neatly dressed is also academically gifted.",
      "Master Status": "A label (e.g. 'deviant', 'genius') that overrides all other aspects of a pupil's identity in the eyes of teachers and peers.",
      "Label Rejection (Non-Determinism)": "Mary Fuller's proof that pupils possess agency and can actively resist, reject, and overcome negative teacher stereotypes."
    },
    collinsFocus: "Details micro-interactionist studies of classroom labelling. Explores Becker's Chicago teacher interviews, Rosenthal & Jacobson's California experiment, and Hargreaves' Lumley Secondary Modern study.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the internal mechanics of labelling. Features Ray Rist's kindergarten seating study, Mary Fuller's study of black girls rejecting labels, and evaluates the ethical and methodological validity of labelling research.",
    evaluationPoints: [
      "Critique of Determinism: Early labelling theory was accused of being overly deterministic; Mary Fuller proved black girls channelled teacher negativity into academic drive.",
      "Ethical Concerns in Field Experiments: Rosenthal & Jacobson knowingly allowed teachers to neglect children not labelled as 'spurters', raising severe ethical issues.",
      "Interactionism vs Structural Marxism: Focuses on micro teacher-pupil exchanges, ignoring that teacher bias is produced by wider capitalist and racial structures.",
      "Subcultural Polarization: Labelling does not happen in a vacuum; negative labels push rejected pupils into anti-school subcultures (Hargreaves, Lacey).",
      "Modern Predictive Profiling: In contemporary schools, computerized tracking and target minimum grades (e.g. FFT Aspire) risk institutionalizing algorithmic labelling."
    ],
    keyStudies: [
      {
        researcher: "Howard S. Becker (1952/1971)",
        study: "Social-Class Variations in the Teacher-Pupil Relationship",
        method: "In-depth semi-structured qualitative interviews with 60 Chicago high school teachers.",
        findings: "Demonstrated that teachers judged pupils against an image of the 'ideal pupil': middle-class children closest to the ideal were seen as bright and teachable, whereas working-class children were labelled as unmotivated and disruptive."
      },
      {
        researcher: "Robert Rosenthal & Lenore Jacobson (1968)",
        study: "Pygmalion in the Classroom",
        method: "Field experiment in a California elementary school using a bogus IQ test.",
        findings: "Told teachers that a randomly chosen 20% of pupils were 'spurters'; one year later, those children made massive genuine IQ gains because teachers unconsciously provided more praise, attention, and challenging work, proving the self-fulfilling prophecy."
      },
      {
        researcher: "Mary Fuller (1984)",
        study: "Black Girls in a London Comprehensive",
        method: "Qualitative participant observation and interviews with a group of Year 11 Black girls.",
        findings: "Found that instead of internalising negative teacher stereotypes, the girls channelled their anger into educational success, working hard in secret to achieve top exam grades while maintaining a rebellious facade to peers."
      }
    ],
    contemporaryExamples: [
      "The 'Target Grade' system in UK secondary schools, where a student's prior KS2 SAT score generates a fixed GCSE target that teachers and pupils treat as a ceiling.",
      "The disproportionate disciplinary isolation of pupils with ADHD or neurodivergence who are mislabelled by teachers as 'wilfully defiant'."
    ],
    commonMisconceptions: [
      "Assuming labelling theory claims teachers are evil or malicious; Becker shows teachers label unconsciously based on middle-class cultural conditioning.",
      "Believing a label is an irreversible death sentence; Fuller proves students have agency and can choose how to react to teacher perceptions."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Field experiments, ethical guidelines, Rosenthal & Jacobson).",
      "Links to Paper 1 Social Control (Informal labelling, Lemert, Becker's deviance).",
      "Links to Paper 3 Achievement (Class and ethnic attainment gaps, Gillborn & Youdell)."
    ],
    keyStatistics: [
      "Working-class pupils predicted low grades by teachers who are then entered into Foundation Tier GCSEs are legally capped at a maximum Grade 5/C, regardless of performance (Ofqual).",
      "Studies show teachers spend an average of 4 times longer listening to and answering questions from pupils they perceive as 'high ability' (Hargreaves)."
    ],
    essayArguments: {
      for: [
        "Classroom labelling and the self-fulfilling prophecy are decisive drivers of educational outcome — Howard Becker & Rosenthal/Jacobson — teacher expectations construct pupils' academic identities.",
        "Teacher typing institutionalises social class inequality inside the classroom — Ray Rist & David Hargreaves — initial stereotypes harden into permanent academic trajectories."
      ],
      against: [
        "Pupils possess agency to reject and overcome negative teacher labels — Mary Fuller — students actively subvert stereotypes to achieve academic success.",
        "Macro-structural material inequalities are far more significant than micro classroom interactions — Louis Althusser & J.W.B. Douglas — poverty and class determine failure prior to school entry."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Howard S. Becker",
        quote: "The 'ideal pupil' is not a neutral concept. It is a middle-class yardstick against which working-class children are judged and found wanting."
      },
      {
        theorist: "Robert Rosenthal",
        quote: "When teachers expect children to do well, the children do well. The teacher's expectation acts as a self-fulfilling prophecy."
      },
      {
        theorist: "Mary Fuller",
        quote: "The girls did not accept the low opinions their teachers had of them. They used the negative label as fuel to drive their educational achievement."
      }
    ]
  },
  "Subcultures and Resistance (Willis)": {
    theorists: ["Paul Willis", "Colin Lacey", "David Hargreaves", "Mairtin Mac an Ghaill", "Peter Woods", "Carolyn Jackson"],
    keyTerms: {
      "Counter-School (Anti-School) Subculture": "A peer group of pupils who invert the official values of the school, gaining status through rule-breaking, defiance, disruption, and truancy.",
      "Learning to Labour (1977)": "Paul Willis' classic Marxist-interactionist ethnography of 12 working-class boys ('the lads') in a Midlands secondary school.",
      "'Having a Laff'": "Willis' term for the lads' primary motivation: using humour, mockery, banter, and disruption to survive the boredom of school and manual work.",
      "The 'Lads' vs The 'Ear'oles'": "Willis' finding: the lads mocked conforming, pro-school working-class pupils ('ear'oles' who just listened to teachers) as effeminate and cowardly.",
      "Differentiation and Polarisation": "Colin Lacey's model: Differentiation (schools categorising pupils by ability/streaming) leads to Polarisation (pupils dividing into pro-school and anti-school camps).",
      "Typology of Pupil Adaptations": "Peter Woods' 8 responses to school: Ingratiation (teachers' pet), Compliance, Opportunism, Ritualism, Colonisation, Intransigence, Rebellion, and Retreatism.",
      "The 'Macho Lads'": "Mac an Ghaill's concept: working-class boys in the 1990s whose counter-school subculture was defined by traditional manual toughness, clashing with the modern service economy."
    },
    collinsFocus: "Details Willis' classic Marxist ethnography 'Learning to Labour'. Explores Lacey's Hightown Grammar study on differentiation/polarisation and Peter Woods' nuanced range of pupil adaptations.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of pupil subcultures. Features Mairtin Mac an Ghaill's study of 4 distinct male subcultures (Macho Lads, Academic Achievers, New Enterprisers, Real Englishmen), and evaluates Willis' small-sample methodology.",
    evaluationPoints: [
      "Willis' Sample Limitation: Willis studied only 12 boys in one single school; his findings cannot be generalised to all working-class youth.",
      "Romanticisation of Deviance: Willis is criticized for romanticising the lads' misogynistic, racist, and homophobic attitudes as heroic 'resistance' (McRobbie).",
      "The Irony of Resistance: Willis proves the tragic irony of working-class culture: by rejecting the school's meritocratic ideology, the lads freely choose the very low-paid manual factory jobs capitalism needs them to fill.",
      "Diversity of Subcultures: Mac an Ghaill and Woods show pupils do not fit into a simple pro/anti binary; pupils move fluidly between rebellion, compliance, and opportunism.",
      "Modern Laddishness: Carolyn Jackson shows laddish subcultures have spread to middle-class boys and girls as an anxiety defense mechanism."
    ],
    keyStudies: [
      {
        researcher: "Paul Willis (1977)",
        study: "Learning to Labour: How Working Class Kids Get Working Class Jobs",
        method: "Qualitative multi-method ethnography (participant observation, group discussions, diaries) tracking 12 working-class boys ('the lads') over 3 years.",
        findings: "Demonstrated that the lads actively resisted the school's ideology and hidden curriculum, constructing a counter-school subculture focused on 'having a laff', which ironically prepared them perfectly for the boredom and masculinity of manual factory labor."
      },
      {
        researcher: "Colin Lacey (1970)",
        study: "Hightown Grammar: The School as a Social System",
        method: "Participant observation, teacher interviews, and questionnaires in a selective boys' grammar school.",
        findings: "Discovered that streaming produced 'differentiation and polarisation': bottom-stream boys suffered status deprivation and formed an anti-school subculture, rejecting the school's academic values."
      },
      {
        researcher: "Mairtin Mac an Ghaill (1994)",
        study: "The Making of Men: Masculinities, Sexualities and Schooling",
        method: "Ethnographic participant observation in a Midlands comprehensive school.",
        findings: "Identified 4 distinct subcultural groups among male pupils: The Macho Lads (anti-school, manual masculinity), The Academic Achievers (pro-school, upwardly mobile), The New Enterprisers (vocational, IT-focused), and The Real Englishmen (middle-class, effortless superiority)."
      }
    ],
    contemporaryExamples: [
      "Drill and rap music youth subcultures inside urban schools where pupils express alienation from mainstream authority while building alternative peer status.",
      "The rise of online influencer 'hustle culture' (e.g. Andrew Tate, crypto trading) inspiring young boys to reject school academic credentials in favour of alternative masculine wealth."
    ],
    commonMisconceptions: [
      "Assuming Willis argued the lads were forced into factory jobs by teachers; Willis showed the lads *freely chose* to fail because they viewed school as irrelevant.",
      "Believing all working-class pupils join anti-school subcultures; the majority conform, negotiate, or oscillate between pro- and anti-school stances (Mac an Ghaill)."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Ethnography, participant observation, Willis sample validity).",
      "Links to Paper 1 Identity (Youth subcultures, ladettes, masculine identity).",
      "Links to Paper 3 Education Theories (Bowles & Gintis vs Willis agency debate)."
    ],
    keyStatistics: [
      "In the UK, over 80% of persistent school truants and students permanently excluded for defiance originate from bottom ability sets (Department for Education).",
      "Working-class boys in the UK remain twice as likely to be sanctioned for disruptive 'laddish' classroom behavior compared to middle-class peers (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "Pupils actively resist school through counter-school subcultures — Paul Willis — working-class youth penetrate the myth of meritocracy and reject school authority.",
        "School streaming structures polarise pupils into anti-school defiance — Colin Lacey & David Hargreaves — status deprivation inside schools directly creates subcultural rebellion."
      ],
      against: [
        "Pupil responses are fluid, diverse, and pragmatic rather than strictly anti-school — Peter Woods & Mac an Ghaill — students strategically shift between compliance and resistance.",
        "Anti-school subcultures reflect masculine anxiety rather than political class resistance — Carolyn Jackson — laddishness is a psychological defense mechanism against academic failure."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Paul Willis",
        quote: "The lads' counter-school culture is a creative cultural penetration of the school's ideology: they see through the myth of meritocracy and choose working-class solidarity."
      },
      {
        theorist: "Colin Lacey",
        quote: "Polarisation is the process whereby pupils are driven by the school's selective streaming into two opposing camps: the pro-school and the anti-school."
      },
      {
        theorist: "Mairtin Mac an Ghaill",
        quote: "Schools are institutions where young men negotiate multiple and competing forms of masculinity, from traditional manual machismo to modern academic ambition."
      }
    ]
  },
  "Setting and Streaming": {
    theorists: ["Stephen J. Ball", "Colin Lacey", "David Hargreaves", "Nell Keddie", "David Gillborn & Deborah Youdell", "Susan Hallam"],
    keyTerms: {
      "Streaming (Banding)": "Placing pupils into a fixed ability group across all academic subjects based on general assessment or 11-plus results.",
      "Setting": "Placing pupils into different ability groups on a subject-by-subject basis (e.g. top set in Maths, middle set in English).",
      "Mixed-Ability Teaching": "Teaching pupils of all abilities together in the same classroom without ability sorting.",
      "Status Deprivation": "Albert Cohen and Colin Lacey's concept: the loss of self-esteem suffered by pupils placed in low streams who are labelled as academic failures.",
      "Educational Triage": "Gillborn & Youdell's concept: the marketised sorting of pupils into 1. Safe passes, 2. C/D borderline (where resources are concentrated), and 3. Hopeless cases (bottom sets left to fail).",
      "Unequal Classroom Knowledge": "Nell Keddie's finding: top-stream pupils are taught high-status theoretical, abstract knowledge, while bottom-stream pupils are given low-status descriptive worksheets.",
      "Self-Fulfilling Prophecy of Setting": "Susan Hallam's finding: pupils in bottom sets develop low academic self-concept, reduced motivation, and lower exam grades regardless of initial ability."
    },
    collinsFocus: "Details how setting and streaming reproduce social class inequalities within comprehensive schools. Explores Ball's classic study 'Beachside Comprehensive' and Keddie's classroom knowledge research.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the impact of ability grouping. Features Gillborn & Youdell's educational triage model, Susan Hallam's longitudinal studies of setting, and evaluates the benefits and drawbacks of mixed-ability teaching.",
    evaluationPoints: [
      "Ball's Beachside Comprehensive: Proved that abolishing streaming and introducing mixed-ability teaching reduced anti-school subcultures and behavioural conflict.",
      "Persistence of Teacher Bias in Setting: Even in mixed-ability classes, teachers continued to categorise and differentiate pupils based on middle-class stereotypes (Ball).",
      "Keddie's Knowledge Stratification: Low-stream pupils are systematically denied access to the high-level exam content required to achieve top grades.",
      "Educational Triage Under League Tables: Gillborn & Youdell prove that high-stakes league tables force schools to abandon bottom sets and pour extra resources exclusively into borderlines.",
      "Hallam's Findings on Setting: Ability grouping provides negligible academic benefit to high attainers while causing severe psychological harm, stigmatisation, and demotivation to low attainers."
    ],
    keyStudies: [
      {
        researcher: "Stephen J. Ball (1981)",
        study: "Beachside Comprehensive: A Case-Study of Secondary Schooling",
        method: "Longitudinal participant observation, interviews, and questionnaire study of a comprehensive school transitioning from streaming to mixed-ability teaching.",
        findings: "Demonstrated that streaming polarised pupils into pro- and anti-school subcultures; when mixed-ability teaching was introduced, subcultural polarization declined, but teachers continued to covertly label middle-class pupils as more capable."
      },
      {
        researcher: "Nell Keddie (1971)",
        study: "Classroom Knowledge",
        method: "Classroom observations and audio recordings of Humanities lessons across different streams in an English comprehensive school.",
        findings: "Discovered that teachers taught different forms of knowledge based on stream: high streams received abstract, conceptual knowledge and were encouraged to ask critical questions; low streams were given mundane, factual worksheets and had their critical questions dismissed as 'disruptive'."
      },
      {
        researcher: "David Gillborn & Deborah Youdell (2000)",
        study: "Rationing Education: Policy, Practice, Equity and Selection",
        method: "Ethnographic case studies of two London secondary schools.",
        findings: "Identified 'Educational Triage': schools rationing resources like battlefield doctors, ignoring the 'hopeless cases' (predominantly working-class and Black boys in bottom sets) to concentrate help on C/D borderline students to boost league table rankings."
      }
    ],
    contemporaryExamples: [
      "The 'Progress 8' accountability measure in UK schools, which still incentivizes schools to focus disproportionate interventions on specific borderline ability tiers.",
      "Top-tier independent private schools maintaining small mixed-ability tutor groups while state comprehensives enforce rigid setting from Year 7."
    ],
    commonMisconceptions: [
      "Assuming setting is strictly objective and based on maths/reading scores; sociologists prove social class, neatness, and pupil demeanor heavily bias set placements.",
      "Believing top sets always benefit high attainers; Boaler found top sets create acute pressure, anxiety, and fast-paced rote learning that damages deep mathematical understanding."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Participant observation in schools, Ball, Keddie).",
      "Links to Paper 3 Educational Theories (Interactionism, Hargreaves, Becker).",
      "Links to Paper 3 Education Policy (Marketisation, league tables, educational triage)."
    ],
    keyStatistics: [
      "Over 85% of secondary schools in England use setting for Maths and Science from Year 7 onwards (Education Endowment Foundation).",
      "Pupils placed in bottom sets make 1 to 2 months less academic progress per year than identical pupils placed in mixed-ability groups (EEF Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Setting and streaming polarise pupils and institutionalise working-class failure — Stephen Ball & Colin Lacey — ability grouping generates status deprivation and anti-school subcultures.",
        "Educational triage and knowledge rationing deny bottom sets the tools to succeed — Gillborn & Youdell / Nell Keddie — league table pressures force schools to sacrifice lower ability streams."
      ],
      against: [
        "Setting allows teachers to tailor lessons and pace to specific academic needs — Functionalists & New Right — high attainers are stretched while lower attainers receive targeted support.",
        "Teacher quality and pedagogical technique are more decisive than the organizational grouping method — Susan Hallam & John Hattie — effective feedback matters more than setting."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stephen J. Ball",
        quote: "Banding and streaming act as a mechanism of social differentiation, creating pro- and anti-school polarisations that mirror the class structure of society."
      },
      {
        theorist: "Nell Keddie",
        quote: "What counts as knowledge in the classroom is stratified: top streams are trusted with abstract concepts, while bottom streams are fed low-status facts."
      },
      {
        theorist: "David Gillborn & Deborah Youdell",
        quote: "Educational triage is the harsh reality of marketisation: schools allocate resources to borderline pupils who can boost league tables, abandoning the rest."
      }
    ]
  },
  "Teacher-Pupil Relationships": {
    theorists: ["Howard S. Becker", "David Hargreaves", "Peter Woods", "Michael Stubbs", "Cecile Wright", "Mary Fuller", "Robert Rosenthal"],
    keyTerms: {
      "Teacher-Pupil Interaction": "The reciprocal, negotiated micro-processes of communication, interpretation, and discipline occurring daily in the classroom.",
      "Negotiated Order": "Peter Woods' concept: classroom discipline is not an absolute dictatorship, but an ongoing truce and bargain negotiated daily between teachers and pupils.",
      "Teacher Typologies (Woods)": "The strategies teachers use to survive classroom conflict: Domination (strict discipline), Fraternisation (acting as a friend), Morale-boosting (enthusiasm), and Occupational therapy (keeping kids busy with easy tasks).",
      "Linguistic Disadvantage (Stubbs)": "Michael Stubbs' finding: teachers evaluate pupils' intelligence based on how closely their speech accent matches Standard English (Received Pronunciation).",
      "Pygmalion Expectation Dynamics": "The subtle body language, praise frequency, eye contact, and wait-time variations teachers unconsciously give to favoured students.",
      "Racialised Discipline": "Cecile Wright's finding: teachers perceiving Black pupils' body language as aggressive and Asian pupils' quietness as lack of English proficiency."
    },
    collinsFocus: "Examines how teachers construct social order in the classroom. Explores Becker's ideal pupil concept, language evaluation (Stubbs), and the impact of teacher stereotypes on student motivation.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of teacher-pupil relationships. Features Peter Woods' negotiated order and teacher survival strategies, Cecile Wright's observational research on ethnic microaggressions, and evaluates student coping strategies.",
    evaluationPoints: [
      "Negotiated Nature of Authority: Teachers do not hold unilateral power; disruptive pupils can make a teacher's career unbearable, forcing teachers into compromises (Woods).",
      "Teacher Stereotypes are Unconscious: Teachers rarely set out to discriminate; their biases are unconscious reflections of their own middle-class cultural habitus and societal media framing.",
      "Classroom Climate & Student Mental Health: Positive, supportive teacher relationships are the single strongest school-level predictor of student well-being and academic resilience.",
      "Institutional Pressures on Teachers: High-stakes testing, workload, and threat of Ofsted inspections force teachers to adopt authoritarian survival strategies rather than creative pedagogy.",
      "Fuller's Subversion of Relationships: Students can maintain external compliance while internally despising the teacher, separating relationship from exam success."
    ],
    keyStudies: [
      {
        researcher: "Peter Woods (1979)",
        study: "The Divided School",
        method: "Ethnographic participant observation, informal interviews, and diary analysis in a secondary modern school.",
        findings: "Demonstrated that classrooms operate as a 'negotiated order': teachers and pupils constantly bargain and negotiate to make daily school life bearable, using survival strategies like fraternisation, humour, and ritualism."
      },
      {
        researcher: "Cecile Wright (1992)",
        study: "Race Relations in the Primary School",
        method: "Classroom observations of 1,000+ pupils and staff in 4 multi-ethnic primary schools.",
        findings: "Showed that teachers held ethnocentric stereotypes: they assumed Asian pupils had poor language skills and left them out of discussions, while assuming Black pupils were disruptive and disciplining them more harshly."
      }
    ],
    contemporaryExamples: [
      "The widespread adoption of 'Restorative Justice' behaviour frameworks in UK schools, replacing punitive detentions with teacher-pupil mediation circles.",
      "The surge in teacher recruitment crises and burnout, driven by constant behavioral conflict and pressure to meet standardized exam targets."
    ],
    commonMisconceptions: [
      "Assuming teachers always maintain absolute control; Woods proves classroom order is a fragile truce that requires continuous mutual compromise.",
      "Believing teacher praise is always positive; interactionists show false or patronizing praise can signal low expectations to struggling students."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Classroom observation ethics, Hawthorne effect).",
      "Links to Paper 1 Social Control (Informal social control, negotiated authority).",
      "Links to Paper 3 Education Theories (Interactionism, Becker, Hargreaves)."
    ],
    keyStatistics: [
      "Over 40% of newly qualified teachers in the UK leave the profession within five years, citing student behavioral friction and workload pressure as the primary cause (DfE, 2023).",
      "Surveys reveal that 70% of students report that having a teacher who 'believes in them' was the single most decisive factor in choosing their university pathway (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "Teacher-pupil relationships and classroom negotiations determine student engagement — Peter Woods & Howard Becker — classroom order is a negotiated reality shaped by teacher perceptions.",
        "Unconscious teacher stereotypes systematically disadvantage working-class and minority students — Cecile Wright & Ray Rist — linguistic and cultural biases alienate vulnerable pupils."
      ],
      against: [
        "External family capital and structural resources are far more powerful than teacher interactions — Basil Bernstein & Pierre Bourdieu — home environment dictates educational capacity.",
        "Pupils possess agency to navigate and bypass negative teacher relationships — Mary Fuller — motivated students succeed independently of teacher expectations."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Peter Woods",
        quote: "Classroom order is not a given; it is a fragile, negotiated truce constructed daily through the survival strategies of teachers and pupils."
      },
      {
        theorist: "Cecile Wright",
        quote: "Even in primary schools, teachers' unconscious ethnocentric expectations result in the marginalisation of Asian children and the over-disciplining of Black children."
      },
      {
        theorist: "Michael Stubbs",
        quote: "Language is the currency of the classroom. Teachers make immediate, lasting judgements about a child's intellect based purely on the way they speak."
      }
    ]
  }
};
