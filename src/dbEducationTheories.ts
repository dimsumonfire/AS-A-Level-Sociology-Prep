import { TextbookRAGEntry } from './sociologyRAG';

export const educationTheoriesDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Functionalist (Durkheim, Parsons, Davis & Moore)": {
    theorists: ["Émile Durkheim", "Talcott Parsons", "Kingsley Davis & Wilbert E. Moore", "Melvin Tumin", "Dennis Wrong"],
    keyTerms: {
      "Social Solidarity": "Durkheim's concept: the sense of belonging and collective unity created when school teaches a shared history, culture, and national identity.",
      "Society in Miniature": "Durkheim's term: school preparing children for the wider world by teaching them to cooperate with non-relatives and follow impersonal school rules.",
      "Specialist Division of Labour": "Durkheim's finding: modern industrial economies require a vast array of specialized vocational and academic skills which schools teach and credential.",
      "Focal Socialising Agency": "Parsons' term: school acting as the crucial bridge between the particularistic standards of the family and the universalistic standards of society.",
      "Particularistic vs Universalistic Standards": "In the family, a child is judged by particularistic rules (loved unconditionally as a unique child); in school and adult society, everyone is judged by universalistic, objective rules (exams, laws).",
      "Ascribed vs Achieved Status": "Family status is fixed at birth (ascribed); educational and occupational status must be earned through individual effort and talent (achieved).",
      "Role Allocation (Sifting & Sorting)": "Davis & Moore's theory: schools act as a meritocratic sorting mechanism, testing students to ensure the most functionally important roles in society are filled by the most able individuals.",
      "Meritocracy": "A system where educational and occupational rewards are allocated strictly on the basis of individual ability (talent) plus effort, rather than social background or privilege."
    },
    collinsFocus: "Details Durkheim's core text 'Moral Education' (transmitting value consensus and teaching specialized division of labour). Explores Parsons' bridge model and Davis & Moore's human capital role allocation theory.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of functionalist sociology of education. Contrasts functionalist meritocratic assumptions with Melvin Tumin's devastating critique of Davis & Moore (circular reasoning and blocked talent), and evaluates the ideological nature of exams.",
    evaluationPoints: [
      "Tumin's Critique of Role Allocation: Functionalists assume talent is rare, but working-class and ethnic minority talent is systematically blocked by material and cultural poverty.",
      "Myth of Meritocracy: Marxists (Bowles & Gintis) prove that educational achievement is determined by parental social class wealth, not natural individual ability.",
      "Wrong's Over-Socialised View: Dennis Wrong argues functionalists view pupils as passive automatons who absorb values unquestioningly, ignoring student resistance and subcultures (Willis).",
      "Ethnocentric Solidarity: Durkheim's 'shared history' and social solidarity often translates into an ethnocentric curriculum that alienates ethnic minority students (Ball, Coard).",
      "Educational Mismatch: Modern economies frequently suffer from 'over-education' and graduate underemployment, showing schools do not smoothly match skills to jobs."
    ],
    keyStudies: [
      {
        researcher: "Émile Durkheim (1925/1961)",
        study: "Moral Education: A Study in the Theory and Application of the Sociology of Education",
        method: "Theoretical sociological and historical analysis of French state education.",
        findings: "Argued that education's primary function is creating social solidarity by transmitting cultural heritage, and equipping individuals with the specialised technical skills needed for the industrial division of labour."
      },
      {
        researcher: "Talcott Parsons (1959/1961)",
        study: "The School Class as a Social System: Some of its Functions in American Society",
        method: "Structural-functionalist theoretical analysis of American elementary and high schools.",
        findings: "Demonstrated that the school operates as a meritocratic focal socialising agency, transitioning children from ascribed, particularistic family statuses to achieved, universalistic societal standards."
      },
      {
        researcher: "Kingsley Davis & Wilbert E. Moore (1945)",
        study: "Some Principles of Stratification",
        method: "Theoretical functionalist analysis of social stratification and occupational allocation.",
        findings: "Argued that inequality is necessary and functional; education acts as a testing ground that sifts and sorts individuals according to ability, ensuring top talents fill functionally vital jobs."
      }
    ],
    contemporaryExamples: [
      "National curriculum history teaching in the UK, designed to foster shared civic values and British identity among students.",
      "The massive expansion of STEM (Science, Technology, Engineering, Maths) university courses funded by governments to meet specialist economic demands."
    ],
    commonMisconceptions: [
      "Assuming functionalists believe all schools are identical; they acknowledge differences, but argue the underlying meritocratic principle functions to reward hard work.",
      "Confusing Durkheim's social solidarity with political propaganda; Durkheim viewed solidarity as an essential social glue preventing anomie (normlessness)."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Functionalism, Durkheim's value consensus, Parsons).",
      "Links to Paper 2 Theories of Family (Parsons' primary socialisation factories).",
      "Links to Paper 3 Meritocracy (Davis & Moore's role allocation, Tumin)."
    ],
    keyStatistics: [
      "Over 85% of high-paying medical, legal, and engineering careers in the UK require university degrees, supporting functionalist claims of credentialed role allocation (HESA, 2023).",
      "However, graduates from private independent schools are over 5 times more likely to occupy elite FTSE-100 CEO positions than comprehensive school graduates (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "Education creates indispensable social solidarity and specialist skills — Émile Durkheim — teaching shared values and technical competence prevents anomie in modern division of labour.",
        "Schooling operates as a meritocratic bridge to society — Talcott Parsons & Davis/Moore — universalistic standards ensure individuals achieve status based on effort and ability."
      ],
      against: [
        "Meritocracy is an ideological myth concealing class reproduction — Bowles & Gintis — educational success is dictated by economic and cultural capital, not natural talent.",
        "Role allocation functions to preserve ruling-class privilege — Melvin Tumin — structural inequalities block working-class talent from reaching functionally important roles."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Émile Durkheim",
        quote: "Society can survive only if there exists among its members a sufficient degree of homogeneity; education perpetuates and reinforces this homogeneity by fixing in the child the essential similarities which social life demands."
      },
      {
        theorist: "Talcott Parsons",
        quote: "The school class is the focal agency through which the allocation of individuals to adult roles in society is effected on a genuinely meritocratic basis."
      },
      {
        theorist: "Melvin Tumin",
        quote: "Davis and Moore assume talent is a rare commodity, ignoring how poverty and social class prevent the vast majority of human talent from ever being discovered."
      }
    ]
  },
  "Marxist (Althusser, Bowles & Gintis)": {
    theorists: ["Louis Althusser", "Samuel Bowles & Herbert Gintis", "Pierre Bourdieu", "Inge Bates & George Riseborough", "Paul Willis", "Glenn Rikowski"],
    keyTerms: {
      "Ideological State Apparatus (ISA)": "Althusser's concept: institutions (schools, media, churches) that maintain ruling-class hegemony by transmitting capitalist values under the guise of neutrality.",
      "Repressive State Apparatus (RSA)": "Althusser's concept: coercive state forces (police, army, courts, prisons) that use physical force to maintain social order when ideological control fails.",
      "Correspondence Principle": "Bowles & Gintis' theory that the norms, social relationships, and structures of schooling mirror (correspond directly to) the hierarchies of the capitalist workplace.",
      "Hidden Curriculum": "The unwritten, unofficial lessons taught in schools (punctuality, obedience to authority, acceptance of hierarchy, external rewards) that prepare pupils for capitalist exploitation.",
      "Myth of Meritocracy": "Bowles & Gintis' argument that meritocracy is an ideological illusion used to convince working-class failures that their poverty is their own personal fault ('poor-are-dumb' theory).",
      "Cultural Reproduction & Habitus": "Pierre Bourdieu's theory: education legitimates ruling-class culture as superior, converting middle-class cultural capital into academic qualifications.",
      "New Vocationalism": "Bates & Riseborough's concept: government vocational training schemes acting as a form of social control, preparing working-class youth for low-paid, precarious manual labour."
    },
    collinsFocus: "Details Althusser's two ISA functions (reproducing and legitimating class inequality). Explores Bowles & Gintis' 1976 study 'Schooling in Capitalist America' and the 4 parallels of the correspondence principle.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Marxist theories of education. Features Pierre Bourdieu's cultural capital, habitus, and symbolic violence, alongside Bates & Riseborough's critique of New Vocationalism as low-wage labor conditioning.",
    evaluationPoints: [
      "Willis' Critique of Determinism: Bowles & Gintis assume pupils are passive puppets; Paul Willis proves 'the lads' actively resist school authority and the hidden curriculum.",
      "Economic Reductionism: Classical Marxism focuses solely on class, ignoring how education reproduces patriarchal subordination and institutional racism (Gillborn).",
      "Critical Education: Modern curricula often encourage critical thinking, political debate, and sociology, directly contradicting the claim that schools only produce obedient drones.",
      "Democratic Accountability: State schools are accountable to democratically elected governments and local parents, not solely to private capitalist corporations.",
      "Bourdieu's Nuance: Bourdieu provides a more sophisticated cultural explanation than mechanical economic correspondence, showing how habitus unconsciously guides academic trajectories."
    ],
    keyStudies: [
      {
        researcher: "Samuel Bowles & Herbert Gintis (1976)",
        study: "Schooling in Capitalist America: Educational Reform and the Contradictions of Economic Life",
        method: "Quantitative statistical survey of 237 high school students' personality traits combined with historical-economic analysis.",
        findings: "Demonstrated the Correspondence Principle: schools rewarded submissive, compliant, punctual students with high grades, while penalizing creative, independent thinkers, preparing students for alienated workplace hierarchy."
      },
      {
        researcher: "Louis Althusser (1971)",
        study: "Ideology and Ideological State Apparatuses",
        method: "Theoretical structural Marxist analysis of the capitalist state.",
        findings: "Argued that education had replaced religion as the dominant ISA in modern capitalism, functioning to reproduce labor skills and teach capitalist ideology that justifies inequality as natural."
      },
      {
        researcher: "Inge Bates & George Riseborough (1993)",
        study: "Deep Innovation and the New Vocationalism",
        method: "Qualitative interviews with young trainees on government youth vocational schemes in the UK.",
        findings: "Discovered that New Vocationalism was not about teaching genuine high-tech skills, but was an ideological mechanism to discipline working-class youth, lower wage expectations, and reduce unemployment statistics."
      }
    ],
    contemporaryExamples: [
      "Zero-tolerance behaviour policies, school uniforms, and biometric fingerprint scanners in academies that condition pupils into total obedience to institutional surveillance.",
      "Government-funded T-Levels and apprenticeships that funnel working-class students directly into entry-level corporate service work."
    ],
    commonMisconceptions: [
      "Assuming Bowles & Gintis believe the formal academic curriculum is what matters most; they argue the *hidden curriculum* (school discipline and hierarchy) is the real engine of capitalist reproduction.",
      "Believing Marxists claim teachers are deliberately evil; Marxists argue teachers are unwittingly caught inside a structural capitalist system."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxism, Althusser's ISA vs RSA, Gramsci's hegemony).",
      "Links to Paper 3 Hidden Curriculum (Willis' counter-school subculture, Bowles & Gintis).",
      "Links to Paper 3 Meritocracy (Myth of meritocracy, Bourdieu's cultural capital)."
    ],
    keyStatistics: [
      "Over 60% of students attending the UK's top Russell Group universities come from the top socio-economic quintile, compared to under 10% from the most deprived quintile (UCAS, 2023).",
      "Working-class pupils eligible for Free School Meals (FSM) are on average 27 months behind their affluent peers in GCSE educational attainment (Education Policy Institute, 2023)."
    ],
    essayArguments: {
      for: [
        "Education reproduces and legitimates capitalist class exploitation — Louis Althusser & Bowles/Gintis — the correspondence principle and hidden curriculum train a submissive workforce.",
        "Meritocracy is an ideological myth disguising cultural capital reproduction — Pierre Bourdieu — education rewards the habitus of the ruling class while blaming the poor for their own failure."
      ],
      against: [
        "Working-class pupils actively resist and reject school indoctrination — Paul Willis — 'the lads' construct counter-school subcultures that mock the hidden curriculum.",
        "Education provides genuine social mobility and critical thinking skills — Functionalists & Social Democrats — comprehensive schooling enables working-class students to achieve elite degrees."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Louis Althusser",
        quote: "The school is the dominant Ideological State Apparatus. It takes children from all classes, drums into them ruling-class ideology, and reproduces the relations of exploitation."
      },
      {
        theorist: "Samuel Bowles & Herbert Gintis",
        quote: "The educational system helps integrate youth into the economic system through a structural correspondence between its social relationships and those of production."
      },
      {
        theorist: "Pierre Bourdieu",
        quote: "Academic success is not the result of natural gifts, but the social return on cultural capital transmitted by the family."
      }
    ]
  },
  "Interactionist (Hargreaves, Rist)": {
    theorists: ["David Hargreaves", "Ray C. Rist", "Howard S. Becker", "Stephen Ball", "Nell Keddie", "Robert Rosenthal & Lenore Jacobson"],
    keyTerms: {
      "Interactionism (Micro-Sociology)": "A perspective focusing on everyday classroom interactions, teacher perceptions, student interpretations, and the negotiation of meanings.",
      "The 'Ideal Pupil'": "Howard S. Becker's concept: the teacher's mental stereotype of the model student—middle-class, polite, well-spoken, compliant, and academically motivated.",
      "Labelling Theory": "The process where teachers attach a definition or meaning (e.g. 'bright', 'troublemaker', 'lazy') to a pupil, which influences how the teacher interacts with them.",
      "Self-Fulfilling Prophecy (SFP)": "Rosenthal & Jacobson's concept: a prediction that causes itself to become true because the individual internalises the label and acts in accordance with it.",
      "Typing Process (3 Stages)": "David Hargreaves' model of teacher labelling: Speculation (initial guesses), Elaboration (confirming/disconfirming hypotheses), and Stabilisation (label becomes fixed and permanent).",
      "Educational Triage": "Gillborn & Youdell's concept: schools categorizing pupils into 'hopeless cases', 'safe passes', and 'C/D borderline' to maximise league table results.",
      "Unequal Classroom Knowledge": "Nell Keddie's finding: teachers distribute different quality knowledge based on class stereotypes (abstract knowledge to top streams; low-level, simplified knowledge to bottom streams)."
    },
    collinsFocus: "Focuses on micro-level classroom processes. Explores Becker's ideal pupil interviews, Rosenthal & Jacobson's Pygmalion experiment, and Hargreaves' study of Lumley Secondary Modern.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of classroom interaction. Features Ray Rist's kindergarten seating study (Tigers, Cardinals, Clowns), Nell Keddie's streaming study, and evaluates the ability of students to reject labels (Fuller).",
    evaluationPoints: [
      "Fuller's Label Rejection: Mary Fuller proves labelling is not deterministic; black girls in her London study rejected negative teacher labels and worked hard to achieve high exam grades.",
      "Neglect of Macro Structures: Interactionism focuses solely on micro classroom exchanges, ignoring how macro capitalism, state funding, and poverty dictate school resources.",
      "Blaming Teachers: Tends to portray teachers as unfairly biased villains, ignoring that teachers work under intense league table pressures imposed by the state.",
      "Methodological Strengths: Utilises high-validity qualitative participant observations and unstructured interviews that capture real classroom interactions.",
      "Polarisation of Subcultures: Hargreaves and Ball prove that streaming and labelling polarise pupils into pro-school and anti-school subcultures."
    ],
    keyStudies: [
      {
        researcher: "Ray C. Rist (1970)",
        study: "Student Social Class and Teacher Expectations: The Self-Fulfilling Prophecy in Ghetto Education",
        method: "Longitudinal ethnographic participant observation of a kindergarten class in an American elementary school.",
        findings: "Discovered that by day eight, the teacher placed pupils at three tables based on social class background and appearance: Table 1 'Tigers' (middle-class, sat closest, given praise) vs Table 2/3 'Cardinals & Clowns' (working-class, given low-level books and criticism), permanently cementing their academic destiny."
      },
      {
        researcher: "David Hargreaves (1967/1975)",
        study: "Social Relations in a Secondary School / Deviance in Classrooms",
        method: "Participant observation, sociometric tests, and interviews in a boys' secondary modern school.",
        findings: "Demonstrated how streaming and teacher typing (speculation, elaboration, stabilisation) caused low-stream boys to suffer status frustration, creating an anti-school subculture where status was gained by breaking school rules."
      },
      {
        researcher: "Robert Rosenthal & Lenore Jacobson (1968)",
        study: "Pygmalion in the Classroom: Teacher Expectation and Pupils' Intellectual Development",
        method: "Field experiment in a California elementary school using a fake IQ test ('Harvard Test of Inflected Acquisition').",
        findings: "Teachers were told 20% of randomly chosen pupils were 'academic spurters'; one year later, those specific pupils made dramatic real IQ gains because positive teacher expectations produced a self-fulfilling prophecy."
      }
    ],
    contemporaryExamples: [
      "Artificial intelligence marking algorithms and predictive grading software in schools that risk automating historic demographic teacher biases.",
      "The widespread practice of setting and streaming in UK secondary schools from Year 7, where working-class pupils remain disproportionately placed in bottom sets."
    ],
    commonMisconceptions: [
      "Believing a label automatically determines a student's fate; interactionists emphasize that the label must be *internalised* through a self-fulfilling prophecy, and can be resisted.",
      "Assuming teachers label maliciously; Becker proves teachers label unconsciously based on middle-class cultural habitus and societal stereotypes."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Field experiments, Rosenthal & Jacobson ethics, participant observation).",
      "Links to Paper 1 Social Control (Informal labelling, Becker, Lemert's primary/secondary deviance).",
      "Links to Paper 3 Hidden Curriculum (Streaming, setting, Ball's Beachside Comprehensive)."
    ],
    keyStatistics: [
      "Working-class pupils are over 3 times more likely to be placed in lower ability sets than middle-class pupils with identical prior attainment scores (Hallam & Hurley, 2021).",
      "Black Caribbean pupils are over 3.5 times more likely to be permanently excluded from UK state schools than the school average (Department for Education, 2023)."
    ],
    essayArguments: {
      for: [
        "Internal classroom labelling and the self-fulfilling prophecy determine educational achievement — Ray Rist & Rosenthal/Jacobson — teacher expectations construct pupils' academic identities.",
        "Streaming and teacher typing polarise students into anti-school subcultures — David Hargreaves & Stephen Ball — institutional processes generate working-class educational failure."
      ],
      against: [
        "Labelling theory is overly deterministic and ignores pupil resistance — Mary Fuller — students can actively reject negative labels and achieve academic excellence.",
        "External material and structural factors are far more powerful than classroom labels — Marxists — poverty, poor housing, and lack of resources determine success before a child enters school."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Howard S. Becker",
        quote: "Teachers judge pupils against their mental image of the 'ideal pupil': a middle-class child who is well-mannered, quiet, and motivated."
      },
      {
        theorist: "Ray C. Rist",
        quote: "The teacher's expectation of the pupil's potential, formed in the first few days of school on the basis of social class, becomes a self-fulfilling prophecy."
      },
      {
        theorist: "David Hargreaves",
        quote: "When schools deny status to low-stream boys, they seek alternative status in an anti-school subculture that inverts official school values."
      }
    ]
  },
  "Feminist View": {
    theorists: ["Becky Francis", "Dale Spender", "Sue Sharpe", "Gaby Weiner", "Carolyn Jackson", "Alison Kelly"],
    keyTerms: {
      "Patriarchal Curriculum": "The hidden and formal ways education historically reinforced male dominance, male-dominated history/science, and traditional female domestic roles.",
      "Male Gaze in Schools": "Mac an Ghaill's concept: male pupils and teachers looking women up and down, judging their appearance, and policing female sexual morality.",
      "Invisible Women": "Dale Spender's finding: teachers devote the vast majority of their classroom time, attention, and praise to demanding male students.",
      "Gendered Subject Choices": "The persistent pattern where boys dominate STEM (Physics, Computer Science, Engineering) while girls dominate Arts, Humanities, and Health/Social Care.",
      "Feminisation of Education": "Tony Sewell's concept: the replacement of traditional exams with coursework and predominantly female primary teaching staff, which critics argue disadvantages boys.",
      "Glass Ceiling in Education": "The structural phenomenon where women make up the majority of teachers but men disproportionately occupy high-paying secondary headteacher and university executive posts."
    },
    collinsFocus: "Traces the dramatic reversal in gender achievement: girls outperforming boys at GCSE and A-Level. Examines feminist educational initiatives (GIST, WISE) and Sue Sharpe's changing female ambitions.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of feminist sociology of education. Features Dale Spender's studies of classroom sexism, Becky Francis' research on gendered classroom interactions, and evaluates the 'moral panic' over boys' underachievement.",
    evaluationPoints: [
      "Girls' Outperformance: Girls now outperform boys at GCSE, A-Level, and university entry across all ethnic groups, proving historical feminist reforms have had massive success.",
      "Persistence of the Gender Pay Gap: Despite outperforming boys academically, women still face a 14% gender pay gap and glass ceiling in elite corporate leadership.",
      "Gendered Subject Traps: Girls remain underrepresented in high-paying STEM sectors, funnelled into low-wage caring and administrative trajectories (Alison Kelly).",
      "Moral Panic Over Boys: Feminist sociologists (Francis, Weiner) argue the moral panic over boys' underachievement distracts from persistent sexual harassment of girls in schools.",
      "Intersectionality: Working-class girls face severe disadvantage, where hyper-feminine 'ladette' subcultures or caring duties restrict higher education access (Archer, Skeggs)."
    ],
    keyStudies: [
      {
        researcher: "Sue Sharpe (1976/1994)",
        study: "Just Like a Girl: How Girls Learn to Be Women",
        method: "Comparative longitudinal qualitative interviews with London schoolgirls across two decades.",
        findings: "Discovered a profound shift in female ambitions: in the 1970s, girls prioritized 'love, marriage, husbands, children'; by the 1990s, they prioritized 'careers, jobs, independence, and supporting themselves'."
      },
      {
        researcher: "Dale Spender (1982)",
        study: "Invisible Women: The Schooling Scandal",
        method: "Tape recordings and classroom observations of teacher-pupil interactions.",
        findings: "Proved that teachers gave over 60% of their classroom time and attention to male pupils, who dominated discussions and teacher interactions, making female pupils effectively invisible."
      },
      {
        researcher: "Becky Francis (2000)",
        study: "Boys, Girls and Achievement: Addressing the Agenda",
        method: "Classroom observations and interviews with 14-16 year old British pupils.",
        findings: "Demonstrated that while girls had high career ambitions, male pupils dominated classroom physical space and intimidated girls with sexualized banter and 'laddish' behavior."
      }
    ],
    contemporaryExamples: [
      "The 'Everyone's Invited' campaign in the UK, which gathered tens of thousands of student testimonies exposing endemic sexual harassment and rape culture in schools.",
      "Government-backed initiatives (GIST - Girls into Science and Technology, WISE) promoting female participation in coding, engineering, and aerospace."
    ],
    commonMisconceptions: [
      "Assuming girls have achieved total equality because they get higher exam grades; girls still face severe gender segregation in STEM career payoffs and corporate earnings.",
      "Believing boys fail because schools are 'anti-male'; research shows boys' underachievement is driven by anti-school 'laddish' peer subcultures (Jackson)."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Gender identity socialisation, McRobbie, Connell).",
      "Links to Paper 2 Gender Roles (Conjugal roles, gender pay gap, dual burden).",
      "Links to Paper 3 Achievement (Gender differences in attainment, internal vs external factors)."
    ],
    keyStatistics: [
      "Girls outperform boys in achieving top grades (A*-C) in over 70% of GCSE subjects, including English, Languages, and Humanities (Joint Council for Qualifications, 2023).",
      "Women make up 74% of all UK schoolteachers, but only 39% of secondary school headteachers are women (Department for Education, 2022)."
    ],
    essayArguments: {
      for: [
        "Feminist reforms have successfully transformed female educational ambition and achievement — Sue Sharpe & Gaby Weiner — girls have overtaken boys across all major academic benchmarks.",
        "Schools continue to reproduce subtle patriarchal hierarchies and subject segregation — Dale Spender & Becky Francis — male pupils monopolize teacher time and STEM career pathways."
      ],
      against: [
        "The education system has become feminized to the detriment of male pupils — Tony Sewell — coursework, female teaching staff, and lack of male discipline disadvantage boys.",
        "Social class remains a far more decisive factor in educational life chances than gender — Diane Reay — middle-class boys far outperform working-class girls."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Sue Sharpe",
        quote: "In the 1970s, girls' priorities were love, marriage, and children. In the 1990s, they had shifted decisively to jobs, careers, and financial independence."
      },
      {
        theorist: "Dale Spender",
        quote: "Education is made by men, for men, and about men. The curriculum systematically excludes and marginalises female experience."
      },
      {
        theorist: "Becky Francis",
        quote: "Boys dominate classroom space, teacher attention, and playground territory, using verbal intimidation to assert masculine supremacy."
      }
    ]
  },
  "Social Democratic Perspective": {
    theorists: ["Anthony Crosland", "A.H. Halsey", "C.A.R. Crosland", "C. Chitty", "Michael Young (Lord Young)", "Richard Titmuss"],
    keyTerms: {
      "Social Democratic Model": "A reformist perspective arguing that the state should use education as an instrument to promote social justice, reduce class inequality, and expand equality of opportunity.",
      "Comprehensive Schooling (1965 Circular 10/65)": "The abolition of the selective Tripartite System (Grammar, Secondary Modern, Technical) in favor of non-selective state secondary schools for all children.",
      "Equality of Opportunity": "The social democratic principle that all children, regardless of socio-economic background, should have equal access to high-quality education and equal life chances.",
      "Compensatory Education": "State-funded programmes (e.g. Educational Priority Areas, Sure Start, Pupil Premium) that inject extra resources into disadvantaged schools to overcome social deprivation.",
      "Tripartite System (1944 Butler Act)": "The historical system that sifted 11-year-olds via the 11-Plus exam into Grammar schools (academic elite) and Secondary Moderns (manual workers), reproducing class division.",
      "Human Capital & Modern Economy": "Chitty's concept: an equitable, high-quality public education system is essential to build a high-skill, high-wage modern economy."
    },
    collinsFocus: "Traces the political history of educational reform: from the 1944 Butler Act and the failure of the 11-Plus exam, to the 1965 comprehensive revolution and modern compensatory funding.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the Social Democratic perspective. Features Anthony Crosland's egalitarian vision, A.H. Halsey's Educational Priority Areas research, and evaluates the comprehensive ideal.",
    evaluationPoints: [
      "Failure of Comprehensive Equality: Comprehensive schools failed to abolish class inequality because setting, streaming, and middle-class catchment areas reproduced selection within schools (Ball).",
      "Marxist Critique: Marxists argue social democratic reforms are mere 'band-aids' on capitalism; true equality of outcome is impossible without abolishing the capitalist economic base.",
      "New Right Market Critique: The New Right argues comprehensive state monopolies lower academic standards, advocating marketisation and school choice instead (Chubb & Moe).",
      "Success of Tripartite Abolition: Comprehensivisation opened university education to millions of working-class and minority students who would have failed the biased 11-Plus exam.",
      "Compensatory Limitations: Compensatory education (e.g. Sure Start) cannot overcome deep structural poverty, low wages, and poor housing in wider society (Bernstein)."
    ],
    keyStudies: [
      {
        researcher: "A.H. Halsey, Anthony Heath & J.M. Ridge (1980)",
        study: "Origins and Destinations: Family, Class and Education in Modern Britain",
        method: "Nationwide longitudinal survey of 8,529 men born in England and Wales.",
        findings: "Demonstrated that the Tripartite System was heavily biased toward the middle class; service-class boys were four times more likely to attend grammar school and ten times more likely to enter university than working-class boys of equal ability."
      },
      {
        researcher: "Anthony Crosland (1956)",
        study: "The Future of Socialism",
        method: "Theoretical political-economic treatise on educational egalitarianism.",
        findings: "Argued that the selective 11-plus examination was a catastrophic social divider, proposing universal comprehensive schooling to build a classless, meritocratic society."
      }
    ],
    contemporaryExamples: [
      "The UK Pupil Premium policy, which provides schools with over £1,400 in direct state funding for every disadvantaged pupil enrolled.",
      "The Finnish comprehensive education system, which has no private schools, no standardized setting, and minimal testing, consistently ranking among the top global PISA performers."
    ],
    commonMisconceptions: [
      "Confusing Social Democracy with Marxism; Social Democrats believe capitalism can be reformed through state education, whereas Marxists believe education will always serve capitalism.",
      "Assuming comprehensive schools abolished all selection; 'covert selection' and catchment-area house price inflation effectively maintained social class segregation."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Social democratic reformism vs Marxist revolution).",
      "Links to Paper 3 Meritocracy (Contest vs sponsored mobility, Ralph Turner).",
      "Links to Paper 3 Policy (Compensatory education, 1988 Education Reform Act)."
    ],
    keyStatistics: [
      "Following the introduction of comprehensive schooling, the percentage of UK students entering higher education rose from under 8% in 1965 to over 50% today (Department for Education).",
      "Grammar school areas today continue to exhibit a severe class divide: less than 5% of grammar school pupils receive Free School Meals, compared to 22% in surrounding comprehensives (Sutton Trust)."
    ],
    essayArguments: {
      for: [
        "State comprehensive education and compensatory funding expand genuine equality of opportunity — Anthony Crosland & A.H. Halsey — abolishing early selection democratised education.",
        "Public investment in education is vital for a high-wage, egalitarian economy — C. Chitty — state-led schooling provides the human capital needed for modern civic progress."
      ],
      against: [
        "Education cannot compensate for society's structural inequalities — Basil Bernstein & Louis Althusser — schooling reforms cannot eradicate capitalist exploitation or deep poverty.",
        "State comprehensive monopolies lower academic standards and remove parental choice — Chubb & Moe — marketisation and competition create superior educational quality."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Anthony Crosland",
        quote: "If it is the last thing I do on this earth, I am going to destroy every grammar school in England, Wales, and Northern Ireland."
      },
      {
        theorist: "A.H. Halsey",
        quote: "Education was intended to be the great engine of social mobility, but the selective tripartite system operated as a mechanism of class closure."
      },
      {
        theorist: "Basil Bernstein",
        quote: "Education cannot compensate for society. You cannot solve the inequalities of the economic structure simply by tinkering with the classroom."
      }
    ]
  }
};
