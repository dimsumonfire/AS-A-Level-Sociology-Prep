import { TextbookRAGEntry } from './sociologyRAG';

export const achievementDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Social Class (Material vs Cultural Deprivation)": {
    theorists: ["Basil Bernstein", "Pierre Bourdieu", "Barry Sugarman", "J.W.B. Douglas", "David Bull", "Diane Reay", "Nell Keddie", "Alice Sullivan"],
    keyTerms: {
      "Material Deprivation": "The lack of physical resources, money, adequate housing, healthy diet, and quiet study space necessary for academic success.",
      "Hidden Costs of Free Schooling": "David Bull's concept: the financial burdens of school uniforms, compulsory PE kits, bus fares, school trips, and textbooks on low-income families.",
      "Cultural Deprivation": "The controversial theory that working-class parents fail to transmit the linguistic codes, values, and cultural capital needed for educational achievement.",
      "Speech Codes (Restricted vs Elaborated)": "Basil Bernstein's concept: Restricted code (short, context-bound, informal speech used by working-class) vs Elaborated code (abstract, grammatically complex, formal speech used by middle-class and in school exams).",
      "Subcultural Values (Sugarman)": "Barry Sugarman's 4 working-class subcultural traits: Fatalism (acceptance of fate), Immediate Gratification (seeking pleasure now), Present-Time Orientation (no long-term planning), and Collectivism (loyalty to group over individual success).",
      "Cultural Capital": "Pierre Bourdieu's concept: the middle-class knowledge, language, taste in arts/books, and habits that schools value and convert into high qualifications.",
      "Myth of Cultural Deprivation": "Nell Keddie's critique: working-class culture is culturally different, not deficient; schools discriminate because they are biased toward middle-class habitus."
    },
    collinsFocus: "Contrasts material factors (Douglas' housing and diet, Bull's hidden costs) with cultural factors (Bernstein's speech codes, Sugarman's subcultural attitudes, and Bourdieu's cultural capital).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the class attainment gap. Features Alice Sullivan's empirical testing of cultural capital in 465 pupils, Diane Reay's research on mothers' educational involvement, and evaluates Keddie's critique of deficit models.",
    evaluationPoints: [
      "Sullivan's Empirical Test: Alice Sullivan proved cultural capital (reading complex fiction, watching documentaries) explains part of the class gap, but material resources remain equally decisive.",
      "Keddie's Victim-Blaming Critique: Cultural deprivation theory blames working-class parents for their failure, ignoring that schools actively penalise working-class cultural differences.",
      "Material vs Cultural Primacy: You cannot separate cultural attitudes from poverty; parents who work two manual shift jobs cannot attend parents' evenings due to work, not lack of interest.",
      "Reay's Maternal Emotional Capital: Middle-class mothers have the confidence, education, and social networks to challenge teachers and get children into top sets, while working-class mothers feel intimidated.",
      "Impact of Food Insecurity: Over 800,000 children arrive at school hungry in the UK, directly impairing cognitive focus, memory retention, and attendance (Child Poverty Action Group)."
    ],
    keyStudies: [
      {
        researcher: "Basil Bernstein (1971)",
        study: "Class, Codes and Control: Theoretical Studies Towards a Sociology of Language",
        method: "Sociolinguistic analysis of children's spoken and written language samples.",
        findings: "Identified two speech codes: the Restricted Code (working-class) and Elaborated Code (middle-class). Because textbooks, teachers, and exams utilize the elaborated code, middle-class pupils feel instantly at home, whereas working-class pupils are linguistically excluded."
      },
      {
        researcher: "Barry Sugarman (1970)",
        study: "Social Class and Subcultural Differences in Education",
        method: "Survey questionnaire administered to 540 fourth-year boys in London secondary schools.",
        findings: "Demonstrated that working-class subculture is characterized by fatalism, immediate gratification, present-time orientation, and collectivism, which directly undermine long-term academic study."
      },
      {
        researcher: "Alice Sullivan (2001)",
        study: "Cultural Capital and Educational Attainment",
        method: "Survey of 465 pupils across 4 schools testing cultural habits (reading, TV, museum visits) and GCSE outcomes.",
        findings: "Proved that pupils who possessed high cultural capital achieved higher GCSE grades, but cultural capital only accounted for part of the class gap; economic resources remained deeply significant."
      }
    ],
    contemporaryExamples: [
      "The 'Digital Divide' exposed during pandemic lockdowns, where working-class pupils had to share a single smartphone for online lessons while middle-class peers had private laptops and high-speed broadband.",
      "The rapid growth in schools establishing free breakfast clubs and clothing banks to mitigate the direct educational impact of child poverty."
    ],
    commonMisconceptions: [
      "Assuming working-class parents do not care about their children's education; Douglas proved working-class parents are highly supportive, but face structural shift-work barriers.",
      "Believing Bernstein claimed working-class speech is inferior; Bernstein emphasized that restricted code is rich and expressive, but schools arbitrarily favor the elaborated code."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Identity (Class habitus, Bourdieu, cultural reproduction).",
      "Links to Paper 2 Childhood (Lareau's concerted cultivation vs natural growth).",
      "Links to Paper 3 Hidden Curriculum (Keddie's unequal classroom knowledge)."
    ],
    keyStatistics: [
      "Pupils eligible for Free School Meals (FSM) are only half as likely to achieve Grade 5+ in GCSE English and Maths compared to non-FSM pupils (Department for Education, 2023).",
      "In the UK, over 40% of the educational achievement gap between social classes is already established before children enter primary school at age 5 (Joseph Rowntree Foundation)."
    ],
    essayArguments: {
      for: [
        "Material deprivation is the primary barrier to educational success — David Bull & J.W.B. Douglas — poverty, cramped housing, malnutrition, and lack of books limit cognitive development.",
        "Cultural capital and language codes systematically privilege the middle class — Pierre Bourdieu & Basil Bernstein — schools reward the elaborated code and habitus of the affluent."
      ],
      against: [
        "Working-class subcultural values limit academic ambition — Barry Sugarman — immediate gratification and fatalism discourage students from pursuing higher education.",
        "Internal school processes and teacher labelling are more decisive than home background — Ray Rist & David Hargreaves — streaming and negative typing create the attainment gap."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Basil Bernstein",
        quote: "The speech code of the school is the elaborated code. The working-class child has to learn not only the subject matter, but a completely alien language of communication."
      },
      {
        theorist: "Pierre Bourdieu",
        quote: "By treating all pupils as equal, when they are profoundly unequal in cultural capital, the school system transforms social privilege into natural academic merit."
      },
      {
        theorist: "Nell Keddie",
        quote: "Working-class children are not culturally deprived; they are culturally different. The problem lies with schools that treat difference as a deficit."
      }
    ]
  },
  "Gender (External vs Internal Factors)": {
    theorists: ["Sue Sharpe", "Becky Francis", "Angela McRobbie", "Tony Sewell", "Carolyn Jackson", "Louise Archer", "Mitsos & Browne"],
    keyTerms: {
      "External Factors (Gender)": "Forces outside the school driving achievement changes: female employment, equal pay laws, changing female ambitions, and the decline of traditional male manual jobs.",
      "Internal Factors (Gender)": "Forces inside the school: equal opportunity policies (GIST, WISE), positive female role models (female teachers), coursework assessment, and teacher labelling.",
      "Crisis of Masculinity": "Mac an Ghaill's concept: the decline of traditional manufacturing and manual jobs leaving working-class boys feeling insecure about their future breadwinner status.",
      "Laddish Subcultures": "Carolyn Jackson's concept: male and female pupils adopting uncool-to-work attitudes, disruptive banter, and swagger to avoid being labelled 'geeks' or appearing to try.",
      "Bedroom Culture": "Angela McRobbie's concept: girls socialized to stay indoors, reading, chatting, and developing communication and literacy skills that directly aid academic study.",
      "Hyper-Heterosexual Feminine Identities": "Louise Archer's concept: working-class girls investing time and money into glamorous, branded appearance ('sexy' aesthetic) to gain peer status, clashing with school dress codes.",
      "Feminisation of Assessment": "Mitsos & Browne's finding: girls outperform boys in continuous coursework assessment because of superior organizational skills, neatness, and sustained effort."
    },
    collinsFocus: "Details the external shift in female ambitions (Sharpe) alongside internal factors (removal of gender stereotypes from textbooks, GIST/WISE initiatives, and coursework 도입). Analyses boys' underachievement and the crisis of masculinity.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of gender differences in education. Features Carolyn Jackson's 'Lads and Ladettes' research, Louise Archer's study of working-class girls' identities (Nike identities and symbolic violence), and Sewell's critique of the feminisation of schooling.",
    evaluationPoints: [
      "Class Intersects Gender: Middle-class boys outperform working-class girls, proving gender cannot be analysed in isolation from social class (Diane Reay).",
      "Sewell's Masculinity Argument: Tony Sewell argues schools have alienated boys by devaluing competitive traditional masculinity and replacing tough discipline with nurturing female norms.",
      "Coursework vs Linear Exams: When the UK government reformed GCSEs to remove coursework in favor of terminal linear exams (post-2015), the gender gap narrowed slightly, supporting Mitsos & Browne.",
      "Archer's Symbolic Violence: Working-class girls who construct glamorous hyper-feminine identities are punished and labelled by teachers as 'sexually precocious' or academically hopeless.",
      "Post-16 Subject Divide: Despite overall female dominance in grades, girls remain heavily underrepresented in high-earning STEM subjects (Computing 15%, Physics 23%)."
    ],
    keyStudies: [
      {
        researcher: "Sue Sharpe (1976/1994)",
        study: "Just Like a Girl: How Girls Learn to Be Women",
        method: "Longitudinal comparative qualitative interviews with working-class London girls across two decades.",
        findings: "Demonstrated a massive shift in priorities from marriage, love, and children in 1976 to career, qualifications, financial independence, and self-sufficiency in 1994."
      },
      {
        researcher: "Carolyn Jackson (2006)",
        study: "Lads and Ladettes in School: Gender and a Fear of Failure",
        method: "Interviews and questionnaires with 153 Year 8 pupils and 30 teachers across 6 secondary schools.",
        findings: "Discovered that both boys and girls adopted 'laddish' anti-effort behavior as a psychological self-worth defense: if they don't try and fail, they can blame laziness rather than stupidity."
      },
      {
        researcher: "Louise Archer et al. (2010)",
        study: "Educational Diversity: The Working-Class Girls' Struggle for Success",
        method: "In-depth qualitative focus groups and interviews with 89 working-class girls.",
        findings: "Showed that girls faced a conflict between acquiring 'symbolic capital' from peers through hyper-heterosexual feminine glamour vs acquiring educational capital from the school, which penalised their working-class identity."
      }
    ],
    contemporaryExamples: [
      "The national recruitment drive for male primary school teachers to provide positive male role models in early childhood education.",
      "The massive gender divide in vocational apprenticeships: 90% of construction and motor engineering apprentices are male; 85% of early years and beauty apprentices are female."
    ],
    commonMisconceptions: [
      "Assuming all boys are underachieving; middle-class boys consistently outperform working-class girls and gain entry to elite Russell Group university courses.",
      "Believing the crisis of masculinity affects middle-class boys; middle-class boys know they are entering office-based professional careers unaffected by manual de-industrialisation."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Gender identity, McRobbie's bedroom culture, Connell's hegemonic masculinity).",
      "Links to Paper 2 Gender Roles (Conjugal roles, female workforce participation).",
      "Links to Paper 3 Education Theories (Feminist perspectives, Spender, Francis)."
    ],
    keyStatistics: [
      "In 2023, 71% of female GCSE entries achieved a standard pass (Grade 4/C or above) compared to 65% of male entries (Joint Council for Qualifications).",
      "At UK universities, women now make up over 57% of all undergraduate enrolments and 60% of first-class degree recipients (HESA, 2023)."
    ],
    essayArguments: {
      for: [
        "External shifts in the economy and female ambitions have propelled girls' academic triumph — Sue Sharpe & Angela McRobbie — women recognize educational credentials are vital for financial survival.",
        "Internal school reforms and anti-sexist policies have dismantled barriers for girls — Jo Boaler & Gaby Weiner — equal opportunity initiatives and female teacher role models have empowered female pupils."
      ],
      against: [
        "Anti-school laddish subcultures and the crisis of masculinity hold working-class boys back — Carolyn Jackson & Mac an Ghaill — fear of failure and de-industrialisation undermine male academic engagement.",
        "Social class remains a far more decisive determinant of achievement than gender — Diane Reay & Louise Archer — working-class girls suffer intense structural disadvantage."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Carolyn Jackson",
        quote: "Laddish behaviour is a protective shield against the fear of academic failure: it allows pupils to maintain peer status by pretending they don't care."
      },
      {
        theorist: "Louise Archer",
        quote: "Working-class girls construct hyper-heterosexual feminine identities that bring peer status but clash directly with the middle-class culture of the school."
      },
      {
        theorist: "Mac an Ghaill",
        quote: "The collapse of traditional manual labor has created a crisis of masculinity, stripping young working-class males of their historic breadwinner identity."
      }
    ]
  },
  "Ethnicity (Language, Family, Racism)": {
    theorists: ["David Gillborn & Deborah Youdell", "Tony Sewell", "Heidi Safia Mirza", "Tariq Modood", "Bernard Coard", "Robin Richardson", "Cecile Wright"],
    keyTerms: {
      "Institutional Racism": "Gillborn's concept: systemic, ingrained, unconscious discrimination within the educational structure, policies, and curriculum that disadvantages ethnic minority pupils.",
      "Ethnocentric Curriculum": "Bernard Coard and Stephen Ball's concept: a curriculum that gives priority to white British history, literature, music, and Christian religion while ignoring minority cultures.",
      "Black Caribbean Underachievement": "The historical statistical trend where Black Caribbean boys have lower GCSE attainment and significantly higher permanent exclusion rates.",
      "Asian Work Ethic & Extended Kinship": "Modood and Francis' finding: British Indian and Chinese families possess high cultural and educational capital, reinforcing strict study routines and respect for teachers.",
      "Gangs and Lone-Parent Street Culture": "Tony Sewell's controversial thesis: Black Caribbean boys underachieve not primarily due to racism, but due to a lack of 'tough love' father figures, leading them into anti-school peer groups.",
      "Myth of Black Female Underachievement": "Heidi Safia Mirza's finding: Black girls possess high academic ambition and succeed by strategically navigating and bypassing racist teachers.",
      "Racialised Expectations": "Gillborn & Youdell's concept: teachers holding racialized stereotypes (expecting Black pupils to be disruptive and Asian pupils to be quiet/passive)."
    },
    collinsFocus: "Compares achievement across ethnic groups (Chinese/Indian high attainment vs Black Caribbean/Pakistani/Bangladeshi gaps). Contrasts cultural deprivation models (Sewell) with institutional racism (Gillborn).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of ethnicity in education. Features Heidi Safia Mirza's study of young black women, Cecile Wright's early years observations of Asian pupils, and evaluates the ethnocentric curriculum.",
    evaluationPoints: [
      "Critique of Sewell: Blames black families and 'absent fathers' for failure, deflecting attention away from systemic institutional racism and school exclusions (Gillborn).",
      "Model Minority Myth: High achievement of British Chinese and Indian pupils is often weaponised to deny that racism exists in schools, ignoring racism faced by these groups (Archer & Francis).",
      "Mirza's Typology of Racist Teachers: Identified 4 types of teachers: The Colour-Blind (ignore racism), The Liberal Chauvinists (pity minorities), The Overt Racists, and The Crusaders, proving racism is pervasive.",
      "Wright's Early Years Labelling: Cecile Wright found primary school teachers assumed Asian children had poor English and spoke to them in simplistic baby-talk, marginalising them early.",
      "Class and Ethnicity Interlock: British Pakistani and Bangladeshi underachievement is heavily correlated with high rates of material deprivation and poverty, not cultural deficiency."
    ],
    keyStudies: [
      {
        researcher: "David Gillborn & Deborah Youdell (2000)",
        study: "Rationing Education: Policy, Practice, Equity and Selection",
        method: "Ethnographic observations, teacher interviews, and statistical analysis across two London secondary schools.",
        findings: "Demonstrated that teachers held 'racialised expectations': they interpreted the normal behavior of Black Caribbean boys as threatening or aggressive, resulting in disproportionate disciplinary sanctions, low-set placements, and lower tier exam entry."
      },
      {
        researcher: "Tony Sewell (1997/2009)",
        study: "Black Masculinities and Schooling: How Black Boys Survive Modern Schooling",
        method: "Qualitative ethnographic interviews and participant observation in an inner-city comprehensive school.",
        findings: "Identified 4 responses among Black boys: The Rebels (anti-school subculture, street masculinity), The Conformists (largest group, pro-school), The Retreatists (isolated), and The Innovators (pro-education but anti-school discipline)."
      },
      {
        researcher: "Heidi Safia Mirza (1992)",
        study: "Young, Female and Black",
        method: "Ethnographic study and qualitative interviews with 62 Black female pupils aged 15-19 in two South London schools.",
        findings: "Proved that Black girls had high self-esteem and high educational aspirations; they resisted teacher racism not through rebellion, but by strategically avoiding racist teachers and studying independently."
      }
    ],
    contemporaryExamples: [
      "The 'Decolonise the Curriculum' campaign across UK schools and universities, demanding the inclusion of Black British history, colonial history, and global literature.",
      "The severe racial disparity in school exclusions: Gypsy/Roma and Black Caribbean pupils continue to be excluded at over three times the national average rate."
    ],
    commonMisconceptions: [
      "Assuming all ethnic minorities underachieve; British Chinese and British Indian pupils are the highest-achieving demographic groups in the entire UK education system.",
      "Believing language barrier (English as an Additional Language - EAL) causes long-term failure; DfE statistics show EAL pupils catch up with and often surpass native English speakers by age 16."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Ethnic identity, hybridity, Gilroy's Black Atlantic).",
      "Links to Paper 2 Family Diversity (Cultural and ethnic diversity, Berthoud).",
      "Links to Paper 3 Hidden Curriculum (Educational triage, institutional racism)."
    ],
    keyStatistics: [
      "Chinese pupils have the highest GCSE attainment in the UK (75%+ achieving Grade 5+ in English and Maths), followed by Indian pupils (68%), compared to White British (43%) and Black Caribbean (34%) (Department for Education, 2023).",
      "Black Caribbean pupils are 3.5 times more likely to receive an official school exclusion than their White British peers (DfE Exclusions Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Institutional racism and racialised teacher labelling create ethnic attainment inequalities — David Gillborn & Deborah Youdell — schools systematically discriminate against Black pupils.",
        "The ethnocentric curriculum alienates ethnic minority pupils — Bernard Coard & Stephen Ball — the British curriculum invalidates minority cultural heritage."
      ],
      against: [
        "Family structure and cultural attitudes toward education drive ethnic differences — Tony Sewell & Tariq Modood — high parental expectations and extended family support explain Asian academic success.",
        "Material deprivation remains the primary driver of ethnic underachievement — Tariq Modood — high poverty rates among Pakistani and Bangladeshi communities explain their exam results."
      ]
    },
    theoristQuotes: [
      {
        theorist: "David Gillborn",
        quote: "Institutional racism is not the product of a few prejudiced teachers; it is locked into the everyday routines, policies, and assessment regimes of the education system."
      },
      {
        theorist: "Tony Sewell",
        quote: "Black Caribbean boys are let down not simply by school racism, but by a lack of fatherly discipline and the seductive pull of street gang subcultures."
      },
      {
        theorist: "Heidi Safia Mirza",
        quote: "Black girls do not internalize teacher labels. They develop survival strategies to bypass racism and pursue their academic ambitions with fierce determination."
      }
    ]
  },
  "Intersectionality in Achievement": {
    theorists: ["Diane Reay", "Louise Archer", "Avtar Brah", "Kimberlé Crenshaw", "Gillborn & Mirza", "Patricia Hill Collins"],
    keyTerms: {
      "Intersectionality": "Kimberlé Crenshaw's analytical framework: social categories (Class, Gender, Ethnicity) cannot be studied in isolation; they intersect and interact to create unique, interlocking forms of privilege and oppression.",
      "The White Working-Class Boys Paradox": "Statistical evidence showing that disadvantaged White working-class boys on Free School Meals are among the lowest-performing demographic groups in British education.",
      "Symbolic Capital vs Educational Capital": "Louise Archer's concept: working-class minority girls forced to choose between winning peer status (symbolic capital) and conforming to the school's middle-class rules (educational capital).",
      "Racialised Class Habitus": "Diane Reay's concept: how working-class minority students experience feelings of inferiority, intimidation, and alienation inside elite educational institutions.",
      "Multiple Subordination": "Patricia Hill Collins' concept: individuals experiencing simultaneous compounding discrimination on the basis of race, gender, and socio-economic class."
    },
    collinsFocus: "Explores how Class, Gender, and Ethnicity interact simultaneously to shape educational trajectories. Details the specific crisis of White working-class underachievement vs minority middle-class success.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of intersectionality in education. Features Gillborn & Mirza's landmark statistical analysis, Diane Reay's research on class-race transitions to university, and Louise Archer's multi-layered study of urban youth identities.",
    evaluationPoints: [
      "Gillborn & Mirza's Landmark Finding: While class has the largest single overall impact on achievement, ethnicity and gender create profound internal inequalities within every class stratum.",
      "Deconstruction of Binary Stereotypes: Proves that simplistic claims (e.g. 'girls do better than boys' or 'Asians do better than Whites') collapse once class background is introduced.",
      "White Working-Class Alienation: Disadvantaged White working-class boys suffer from intergenerational deindustrialisation, low cultural capital, and low geographical mobility (Reay).",
      "Middle-Class Minority Mobilisation: Middle-class Black and Asian parents use their economic capital (private tutors, top postcodes) to buffer their children against school racism (Rollock et al.).",
      "Emotional Cost of Educational Mobility: Diane Reay shows that working-class minority students who reach elite universities often suffer from imposter syndrome and emotional isolation."
    ],
    keyStudies: [
      {
        researcher: "David Gillborn & Heidi Safia Mirza (2000)",
        study: "Educational Inequality: Mapping Race, Class and Gender (Ofsted Report)",
        method: "Statistical meta-analysis of local authority youth cohort data across England.",
        findings: "Demonstrated that Social Class was the strongest overall predictor of educational achievement, but Gender and Ethnicity interacted continuously: middle-class Black Caribbean pupils still underperformed middle-class White pupils, proving racism operates across all classes."
      },
      {
        researcher: "Diane Reay (2017)",
        study: "Miseducation: Inequality, Education and the Working Classes",
        method: "In-depth qualitative life histories of 500+ working-class and middle-class students in Britain.",
        findings: "Showed that the intersection of class, race, and gender creates deep psychological trauma: working-class students internalise a sense of educational worthlessness, viewing elite schooling as 'not for the likes of us'."
      },
      {
        researcher: "Nicola Rollock, David Gillborn, Carol Vincent & Stephen J. Ball (2015)",
        study: "The Colour of Class: The Educational Strategies of the Black Middle Classes",
        method: "Qualitative interviews with 62 Black middle-class professional parents in the UK.",
        findings: "Proved that having high income and professional status does not protect Black families from racism; parents had to constantly intervene with teachers who stereotyped their children as disruptive or academically incapable."
      }
    ],
    contemporaryExamples: [
      "UK House of Commons Education Committee inquiries into 'Left Behind: White working-class pupils with Free School Meals', highlighting the intersection of place, class, and ethnicity.",
      "Contextual university admissions schemes in the UK that evaluate applicants' grades in light of multiple intersecting deprivation metrics (POLAR4 postcodes, FSM status, school performance)."
    ],
    commonMisconceptions: [
      "Assuming one demographic factor (e.g. class) is all that matters; Gillborn & Mirza prove racism and sexism operate independently within every socio-economic class bracket.",
      "Believing that all middle-class pupils experience school identically; Rollock et al. prove Black middle-class pupils face persistent racialised low expectations."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Identity (Intersectionality, Crenshaw, class/gender/ethnic identity).",
      "Links to Paper 3 Educational Theories (Marxist vs Feminist vs Interactionist syntheses).",
      "Links to Paper 3 Education Policy (Targeted interventions, Pupil Premium)."
    ],
    keyStatistics: [
      "Only 17.6% of White British boys eligible for Free School Meals progress to higher education, the lowest progression rate of any major demographic group in England (UCAS / DfE, 2023).",
      "Black Caribbean girls eligible for FSM outperform White British boys eligible for FSM, demonstrating the complex cross-cutting effects of gender and ethnicity on class outcomes (DfE, 2023)."
    ],
    essayArguments: {
      for: [
        "Educational achievement can only be understood through an intersectional framework — Kimberlé Crenshaw & Gillborn/Mirza — class, race, and gender interact to multiply advantage or disadvantage.",
        "The Black middle-class experience reveals how racism cuts across economic capital — Nicola Rollock & David Gillborn — wealth cannot completely shield minority children from institutional stereotypes."
      ],
      against: [
        "Social class remains the paramount structural determinant of educational life chances — Diane Reay & Basil Bernstein — material and cultural poverty override other demographic variables.",
        "Individual agency and resilience allow pupils to transcend intersecting disadvantages — Mary Fuller & Heidi Safia Mirza — high ambition and independent study enable students to overcome structural hurdles."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Diane Reay",
        quote: "Education is a site where class, race, and gender collide. It is an engine of inequality that inflicts deep psychological wounds on the working classes."
      },
      {
        theorist: "David Gillborn & Heidi Safia Mirza",
        quote: "Inequalities of race, class, and gender do not operate in isolation. They are intertwined, with class having the greatest single impact, but race and gender continuously altering outcomes."
      },
      {
        theorist: "Nicola Rollock",
        quote: "Being middle-class does not insulate Black parents and children from the pervasive, everyday reality of racism within British schooling."
      }
    ]
  }
};
