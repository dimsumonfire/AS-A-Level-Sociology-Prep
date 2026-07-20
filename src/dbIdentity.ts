import { TextbookRAGEntry } from './sociologyRAG';

export const identityDB: Record<string, Partial<TextbookRAGEntry>> = {
  "The Social Construction of Identity (Mead, Cooley, Goffman)": {
    theorists: ["George Herbert Mead", "Erving Goffman", "Charles Cooley", "Derek Egan", "Herbert Blumer", "Howard S. Becker"],
    keyTerms: {
      "Dramaturgical Approach": "Goffman's model of social interaction that compares human life to actors performing on a theatrical stage.",
      "Impression Management": "The active, strategic techniques used by social actors to control how others perceive and evaluate them.",
      "Looking-Glass Self": "Cooley's concept that our self-concept is built by interpreting how we believe others see us.",
      "Front-Stage": "Goffman's term for the public arena where individuals perform their roles and manage impressions for an audience.",
      "Back-Stage": "Goffman's term for the private sphere where individuals drop their social masks, relax, and prepare for future front-stage performances.",
      "Generalized Other": "Mead's concept representing the collective expectations and values of a community, which an individual internalises."
    },
    collinsFocus: "Highlights how social structures impose social identities on individuals. Discusses class-based taste cultures and Cooley's looking-glass self as mechanisms of social adaptation.",
    cupFocus: "Explores the micro-analytical details of Goffman's dramaturgical model. Evaluates how we manage impressions, select fronts, and navigate back-stages of virtual self-projection on modern social media platforms.",
    evaluationPoints: [
      "Structuralists (Marxists/Functionalists) argue that the dramaturgical approach ignores how class inequality and poverty restrict the fronts and resources available to actors.",
      "Goffman's model can be seen as overly cynical, portraying humans as permanent manipulators and actors rather than sincere social beings.",
      "Feminists argue that impression management for women is constrained by the male gaze, making female performance subservient to patriarchies.",
      "It is highly descriptive of micro-level interactions but fails to explain the macro-level origins of social roles (e.g., why a certain role exists in the first place)."
    ],
    keyStudies: [
      {
        researcher: "Erving Goffman (1959)",
        study: "The Presentation of Self in Everyday Life",
        method: "Qualitative observations and secondary analysis of institutional and social interactions.",
        findings: "Demonstrated that identity is not a fixed, internal essence but a fluid performance; individuals act as performers who use props, settings, and impression management to project a desired self-image, constantly separating front-stage and back-stage behaviors."
      }
    ],
    contemporaryExamples: [
      "The curation of an Instagram or TikTok profile, representing a high-tech form of impression management where the grid is the front-stage and private life is the back-stage.",
      "Professional 'emotional labor' performed by flight attendants in commercial airlines, where they must project a permanently cheerful front-stage identity as part of their employment."
    ],
    commonMisconceptions: [
      "Assuming that Goffman believes there is a 'true' self hidden in the back-stage, when he argues that the self is simply a collection of performances all the way down.",
      "Confusing Mead's 'I' (the active, spontaneous self) with the 'Me' (the conformist, socialized self)."
    ],
    synopticLinks: [
      "Links to Media (cyber-identities and digital self-presentation).",
      "Links to Methods (the validity of participant observation in studying hidden front-stages)."
    ],
    keyStatistics: [
      "A survey showed that 74% of adolescents actively filter or edit their photos before posting them online, showing the intensity of modern impression management (Pew Research, 2019)."
    ],
    essayArguments: {
      for: [
        "Identity is an active, performative construction negotiated through micro-interactions — Erving Goffman — dramaturgical performances build our sense of self.",
        "We develop our self-concept through the reflective feedback of others — Charles Cooley — the looking-glass self highlights the social nature of identity."
      ],
      against: [
        "Identity is structurally determined by macro class and economic systems — Karl Marx — our identity is a reflection of our economic position in the base.",
        "Performative models ignore the biological and psychological elements of the self — Cognitive psychologists — identity has innate cognitive anchors."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Erving Goffman",
        quote: "All the world is a stage, and all the men and women merely players."
      }
    ]
  },
  "Social Class Identity (Savage, Bourdieu, Skeggs)": {
    theorists: ["Mike Savage", "Pierre Bourdieu", "Beverley Skeggs", "John Goldthorpe", "Diane Reay"],
    keyTerms: {
      "Habitus": "Bourdieu's concept referring to the deeply ingrained, class-based habits, skills, tastes, and dispositions that are unconsciously acquired during primary socialization.",
      "Cultural Capital": "The non-financial assets (artistic tastes, linguistic codes, education) that middle-class individuals convert into economic success and social privilege.",
      "Social Capital": "The networks of influence, relationships, and contacts ('who you know') that can be converted into economic or social advantage.",
      "Embourgeoisement": "The theory that working-class individuals adopt middle-class values, lifestyles, and identities as their income rises.",
      "Respectability": "Beverley Skeggs's term for the moral standard that working-class women struggle to achieve to defend themselves against classist stereotypes."
    },
    collinsFocus: "Details Mike Savage's Great British Class Survey, identifying seven distinct classes. Outlines the transition from traditional working-class industrial identities to fragmented consumer identities.",
    cupFocus: "Presents Pierre Bourdieu's forms of capital (economic, social, cultural). Integrates Beverley Skeggs's ethnographic study of working-class women to show how they struggle for respectability against negative class labels.",
    evaluationPoints: [
      "Postmodernists argue that class is dead; consumption, lifestyle, and individual choice are now the sole drivers of personal identity, making class irrelevant.",
      "Savage is criticised for his survey methodology, which heavily over-represented highly educated, tech-savvy middle-class respondents.",
      "Feminists argue that classic class theories are often gender-blind, ignoring how women's class identities are experienced differently in unpaid domestic labor.",
      "Goldthorpe's research indicates that despite rising wages, working-class communities retain a distinct communal identity rather than assimilating into the middle class."
    ],
    keyStudies: [
      {
        researcher: "Beverley Skeggs (1997)",
        study: "Formations of Class and Gender",
        method: "Twelve-year longitudinal ethnography tracking 83 working-class women in Northern England.",
        findings: "Revealed that class is not just an economic position but a moral battleground; working-class women constantly perform 'respectability' in dress, speech, and mothering to avoid being labeled as 'tartish' or 'lazy' by middle-class standards."
      }
    ],
    contemporaryExamples: [
      "The 'gentrification' of working-class neighborhoods in global cities like London or Brooklyn, which shifts local class aesthetics and pricing out traditional identities.",
      "The rise of working-class 'chav' stereotypes in reality television shows, which middle-class audiences consume as a form of symbolic class devaluation."
    ],
    commonMisconceptions: [
      "Assuming cultural capital is simply 'being smart' or 'high culture', rather than a specific class-based resource that is arbitrary but valued by institutions like schools.",
      "Believing that class identity is purely defined by income, ignoring Bourdieu's emphasis on taste, habitus, and relationships."
    ],
    synopticLinks: [
      "Links to Education (how cultural capital and habitus inside the family create middle-class educational advantages).",
      "Links to Methods (the limits of massive national surveys like Savage's GBCS)."
    ],
    keyStatistics: [
      "The Great British Class Survey showed that only 6% of the UK population now fit the traditional working-class profile, while 39% are grouped in new middle-class categories (Savage, 2013)."
    ],
    essayArguments: {
      for: [
        "Class identity is deeply embedded in class-based habitus and capitals — Pierre Bourdieu — cultural capital reproduces class inequalities across generations.",
        "Class is experienced as a gendered struggle for moral respectability — Beverley Skeggs — working-class women must defend themselves against classist labeling."
      ],
      against: [
        "Traditional class structures have dissolved into consumer-driven lifestyles — Zygmunt Bauman — people build identities around what they buy, not what they do.",
        "Class is no longer the primary source of personal identity — Ulrich Beck — the individualized risk society forces people to see themselves as individual agents."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Pierre Bourdieu",
        quote: "Taste classifies, and it classifies the classifier."
      }
    ]
  },
  "Gender Identity (Oakley, McRobbie, Connell)": {
    theorists: ["Ann Oakley", "Angela McRobbie", "Raewyn Connell", "Judith Butler", "Sylvia Walby", "Ester Morgan"],
    keyTerms: {
      "Manipulation": "The way parents encourage or discourage behaviors based on perceived gender, such as praising a girl for being neat and a boy for being active.",
      "Canalisation": "The practice of parents channeling children's interests towards specific gender-typed toys, activities, and games.",
      "Verbal Appellations": "The use of gendered language, titles, and nicknames (e.g., 'little princess' vs 'troublemaker') that shape a child's understanding of their gender role.",
      "Bedroom Culture": "McRobbie and Garber's term describing how girls' social lives are centered inside the domestic sphere, protecting them from outside risks while reinforcing traditional feminine expectations.",
      "Hegemonic Masculinity": "Connell's term for the dominant, culturally idealized form of masculinity in a society that enforces authority, emotional distance, and physical strength.",
      "Gender Performativity": "Judith Butler's concept that gender is not an inherent identity but a continuous, repetitive set of social performances (acts, gestures, style) that produce the illusion of a natural gender."
    },
    collinsFocus: "Stresses the four specific processes of gender socialization in the family (Oakley) and how the school curriculum reinforces traditional gender divisions.",
    cupFocus: "Explores Connell's hierarchy of masculinities (hegemonic, subordinate, complicit, marginalized) and McRobbie's feminist research on youth subcultures, media representations, and girls' active agency.",
    evaluationPoints: [
      "Jeffrey Weeks (Pluralist perspective) argues that gender identities are now highly contested and fluid, allowing individuals to construct non-binary or trans identities.",
      "Mirza (Difference Feminist perspective) critiques mainstream feminist accounts of gender socialization for failing to explain how race and class intersect, creating very different expectations for black girls.",
      "Mac an Ghaill (Interactionist perspective) notes that 'the crisis of masculinity' has led to the emergence of diverse masculinities (e.g., 'new lads' vs 'metrosexuals') rather than a single hegemonic model.",
      "Postmodernists argue that gender-blind toys and rising female career success have weakened the grip of traditional canalization."
    ],
    keyStudies: [
      {
        researcher: "Angela McRobbie (1976)",
        study: "Girls and Subcultures",
        method: "Ethnographic observations and informal group discussions.",
        findings: "Identified a distinct 'bedroom culture' among adolescent working-class girls, where they gathered in safe domestic spaces to discuss fashion and romance, establishing a defense against male-dominated street subcultures while reproducing traditional femininity."
      }
    ],
    contemporaryExamples: [
      "The Rise of 'K-Pop Masculinity' globally, where soft, expressive, and highly stylized male aesthetics challenge traditional Western notions of hegemonic masculinity.",
      "The gendered socialization of children through digital algorithms on platforms like YouTube Kids, where content is strictly divided into pink/doll-themed and blue/car-themed recommendation loops."
    ],
    commonMisconceptions: [
      "Believing that gender and biological sex are identical, failing to recognize that sex is biological while gender is a socially constructed role.",
      "Assuming that traditional gender roles are universally declining, overlooking the persistent wage gap and domestic unequal division of labor."
    ],
    synopticLinks: [
      "Connects to the Family unit (segregated conjugal roles, domestic abuse).",
      "Connects to the Media unit (representation of gender, the male gaze)."
    ],
    keyStatistics: [
      "Women still perform 3 times as much unpaid domestic work as men globally, indicating the persistence of deeply socialized gender roles (UN Women Database, 2023)."
    ],
    essayArguments: {
      for: [
        "Gender identity is structurally imposed through primary socialization — Ann Oakley — primary socialization processes like manipulation and canalization construct distinct gender roles.",
        "Bedroom culture actively traps girls in domesticity from an early age — Angela McRobbie — peer groups and media reinforce female domestic expectations."
      ],
      against: [
        "Gender is a fluid performance rather than a fixed structure — Judith Butler — gender is a daily performance that can be subverted, reinterpreted, and deconstructed.",
        "Diverse masculinities emerge from modern labor market changes — Mac an Ghaill — the collapse of traditional industrial jobs has fragmented working-class male identity."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Judith Butler",
        quote: "Gender is not a noun, but a set of actions and repetitions that produce the effect of an identity."
      },
      {
        theorist: "Raewyn Connell",
        quote: "Hegemonic masculinity is the configuration of gender practice which embodies the currently accepted answer to the problem of the legitimacy of patriarchy."
      }
    ]
  },
  "Ethnic Identity (Modood, Hall, Gilroy)": {
    theorists: ["Tariq Modood", "Stuart Hall", "Paul Gilroy", "Themina Basit", "Heidi Safia Mirza"],
    keyTerms: {
      "Hybrid Identity": "An identity created by blending elements of different cultures, typical in diverse globalised societies.",
      "Diaspora": "The dispersal of an ethnic population from its original homeland, maintaining a collective cultural connection.",
      "Brasian": "A term describing the hybridized identity of British-born South Asians, combining British and Asian cultural practices.",
      "Cultural Defense": "Using ethnic culture (religion, language, clothing) as a shield to protect against racism, exclusion, or host-society hostility.",
      "New Ethnicities": "Stuart Hall's term for fluid, non-essentialist ethnic identities that are constantly reconstructed through cultural exchange."
    },
    collinsFocus: "Examines how family, language, and religion maintain ethnic identity across generations. Discusses the conflict between host culture assimilation and minority cultural defense.",
    cupFocus: "Outlines Tariq Modood's findings on changing ethnic priorities across generations, where young British Muslims prioritize religious identity over national/ethnic labels. Uses Stuart Hall's concept of 'new ethnicities'.",
    evaluationPoints: [
      "Ethnic identities are not homogenous; social class and gender create massive internal differences within British Asian or Afro-Caribbean groups.",
      "The host nation's structural racism (Gilroy) often forces ethnic groups to seek refuge in defensive cultural segregations (cultural defense).",
      "Cultural hybridisation is sometimes superficial (e.g., foods and music) while core cultural values (like marriage patterns) stay traditional.",
      "Marxists argue that focusing on ethnic identity divides the working class, masking the shared economic exploitation they face under capitalism."
    ],
    keyStudies: [
      {
        researcher: "Tariq Modood et al. (1997)",
        study: "Ethnic Minorities in Britain: Diversity and Disadvantage",
        method: "National large-scale survey combined with in-depth interviews.",
        findings: "Discovered a generational shift in ethnic identity; while first-generation immigrants felt a strong connection to their country of origin, second and third-generation British Asians developed complex hybrid identities, with religion (especially Islam) becoming a primary marker of identity over national origins."
      }
    ],
    contemporaryExamples: [
      "The emergence of hybrid musical genres like 'Afrobeats' in London, blending traditional West African rhythms with British electronic grime, creating a new diasporic youth identity.",
      "The use of the hijab as a symbol of proud feminist self-assertion and cultural defense by young professional Muslim women in Western Europe."
    ],
    commonMisconceptions: [
      "Believing that ethnic identity is a static, fixed relic of the past, rather than a dynamic, fluid construct that changes in response to global forces.",
      "Assuming that hybrid identities mean ethnic minorities are abandoning their heritage, rather than creatively blending it with host cultures."
    ],
    synopticLinks: [
      "Links to Education (teacher stereotyping of ethnic minority pupils, and language codes).",
      "Links to Globalisation (the rise of global migration flows and transnational communities)."
    ],
    keyStatistics: [
      "Modood found that 95% of young British Muslims stated that their religious faith was of central importance to their daily identity, compared to only 30% of white Anglicans (Modood et al., 1997)."
    ],
    essayArguments: {
      for: [
        "Ethnic identity is maintained through structural cultural defense against institutional racism — Paul Gilroy — ethnic identity is a site of political and historical struggle.",
        "Ethnic identity has become a highly fluid and hybridized consumer choice — Stuart Hall — new ethnicities are constantly constructed through cultural exchange."
      ],
      against: [
        "Class division is far more important than ethnicity in shaping life chances and self-concept — Marxist critics — class exploitation unites diverse ethnic workers.",
        "Ethnic minority identities are increasingly assimilating into a globalized Western consumer culture — Assimilation theorists — structural integration erodes ethnic boundaries."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stuart Hall",
        quote: "Identity is not as transparent or unproblematic as we think. Perhaps instead of thinking of identity as an already accomplished fact, we should think of it as a 'production'."
      }
    ]
  },
  "Age Identity (Postman, Featherstone, Hepworth)": {
    theorists: ["Neil Postman", "Mike Featherstone", "Mike Hepworth", "Diana Gittins", "Phillipson"],
    keyTerms: {
      "Infantilisation": "Treating an adult (particularly elderly populations) as if they were a child, reinforcing dependency and stripping them of authority.",
      "Ageism": "Discrimination or prejudice targeting individuals or groups solely on the basis of their chronological age.",
      "Age Patriarchy": "Diana Gittins's term describing how adult males dominate and control the time, space, and bodies of children.",
      "Mask of Old Age": "Featherstone & Hepworth's concept that the physical, aging body can act as a mask, hiding an active, youthful inner self-concept.",
      "Social Construction of Childhood": "The sociological argument that childhood is not a natural biological stage, but a distinct status defined and regulated by society."
    },
    collinsFocus: "Explores youth identity as a product of postwar wealth and capitalist consumerism. Reviews Hepworth & Featherstone's view of the 'mask of old age' where active lifestyles break down elder stereotypes.",
    cupFocus: "Details Neil Postman's 'disappearance of childhood' due to television/internet. Analyses Gittins' 'age patriarchy' where adults dominate children's environments, budgets, and schedules.",
    evaluationPoints: [
      "Postman exaggerated child disappearance; children maintain a robust, separate street and playground culture that adults cannot easily access.",
      "Working-class elders cannot afford the 'active consumer retirement' (gym memberships, cruises) described by Featherstone, showing class-age intersection.",
      "Age identities vary cross-culturally; in many non-Western societies, old age grants high political and spiritual status rather than marginality.",
      "Marxists argue that age categories (like 'retirement' or 'school-age') are designed by capitalism to manage who is in the labor market."
    ],
    keyStudies: [
      {
        researcher: "Neil Postman (1982)",
        study: "The Disappearance of Childhood",
        method: "Historical analysis of media technologies, literacy rates, and child representations.",
        findings: "Argued that the printed word created an 'information hierarchy' that separated adults from children; the rise of visual electronic media (TV) demolished this boundary, exposing children to adult secrets (sex, violence, money) and causing childhood to disappear."
      }
    ],
    contemporaryExamples: [
      "The 'grey pound' economy in Western countries, where wealthy baby-boomers in their 70s are targeted by advertisers for active leisure, challenging traditional passive elder identities.",
      "The global 'Fridays for Future' school strikes led by children, which challenge Gittins's concept of child helplessness and adult age patriarchy."
    ],
    commonMisconceptions: [
      "Believing that 'childhood' is a universal biological constant, failing to recognize that historical and cross-cultural children often worked or married early.",
      "Assuming ageism only targets the elderly, when young people also face negative labeling (e.g., 'anti-social youths' or 'hoodies')."
    ],
    synopticLinks: [
      "Links to Family (child-centeredness, and power relations inside the household).",
      "Links to Media (moral panics around youth subcultures, and digital child socialization)."
    ],
    keyStatistics: [
      "A study showed that 82% of elderly nursing home residents reported being spoken to in 'elderspeak' (baby talk), illustrating systematic infantilisation (Phillipson, 2004)."
    ],
    essayArguments: {
      for: [
        "Childhood is disappearing as media erodes the boundary between adult and child — Neil Postman — visual technologies destroy the information hierarchy.",
        "Elderly identities are marginalized by capitalism because they are no longer productive units — Phillipson — retirement forces elders into structural dependency."
      ],
      against: [
        "Children maintain a robust, separate peer culture that protects their status — Opie and Opie — childhood remains a distinct social stage.",
        "The elderly can actively reconstruct their identities through consumer play — Featherstone & Hepworth — the 'mask of old age' is broken by active retirement."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Neil Postman",
        quote: "Children are the living messages we send to a time we will not see."
      }
    ]
  },
  "Disability and Identity (Medical vs Social Models)": {
    theorists: ["Tom Shakespeare", "Mike Oliver", "Colin Barnes", "Carol Thomas", "Goffman"],
    keyTerms: {
      "Medical Model": "The view that disability is an individual biological impairment requiring medical treatment, cure, or rehabilitation.",
      "Social Model": "The view that disability is caused by social, physical, and attitudinal barriers that exclude people with impairments.",
      "Master Status": "An identity (like disability) that overrides all other social identities, dominating how society treats the individual.",
      "Stigma": "A deeply discrediting attribute that reduces an individual from a whole, ordinary person to a tainted, discounted one.",
      "Disablism": "Discriminatory, oppressive, or abusive behavior directed against disabled people."
    },
    collinsFocus: "Outlines how disabled people face structural discrimination. Explains how society creates barriers (e.g., lack of ramp access) that turn physical impairments into social handicaps.",
    cupFocus: "Details Shakespeare's research on disabled self-identity, showing that disabled people are often forced to choose between isolation or adopting a victim identity, unless they build a proud collective identity.",
    evaluationPoints: [
      "The social model is criticised for downplaying the physical pain and real biological limitations of bodily impairment, making it overly political.",
      "Medical technology, prosthetics, and digital accessibility are increasingly enabling, eroding traditional physical and social barriers.",
      "Intersectionality shows disabled identities are experienced differently based on social class, wealth, and gender privilege.",
      "Goffman's theory of stigma shows that disabled people often develop complex strategies ('covering' or 'passing') to manage interactions."
    ],
    keyStudies: [
      {
        researcher: "Tom Shakespeare (1996)",
        study: "Disability, Identity, Difference",
        method: "Qualitative semi-structured interviews with 44 disabled activists and individuals.",
        findings: "Revealed that disabled identity is socially constructed through oppressive barriers and patronizing attitudes, but discovered that disabled people who join support networks develop a proud 'collective identity', transforming disability from an individual tragedy to a shared political movement."
      }
    ],
    contemporaryExamples: [
      "The Paralympics, which disability activists praise for showcasing athletic prowess, but critique for promoting 'super-crip' stereotypes that ignore daily structural barriers.",
      "The emergence of online neurodivergent communities (e.g., 'Autistic Pride'), where individuals reject the medical deficit model in favor of neurodiversity."
    ],
    commonMisconceptions: [
      "Confusing 'impairment' (biological limitation) with 'disability' (social barrier), which is the core distinction established by the social model.",
      "Assuming that disabled people are passive victims of their bodies, ignoring their active political agency in demanding civil rights."
    ],
    synopticLinks: [
      "Links to Theory (the social construction of reality vs biological determinism).",
      "Links to Methods (the ethics of researching vulnerable or institutionalized disabled groups)."
    ],
    keyStatistics: [
      "Disabled adults are twice as likely to live in poverty than non-disabled adults, indicating the deep structural class-disability intersection (UK Department for Work and Pensions, 2021)."
    ],
    essayArguments: {
      for: [
        "Disability is caused by social barriers, not biological impairments — Mike Oliver — the social model places responsibility on an exclusionary society.",
        "Disability functions as a master status that triggers social stigma — Erving Goffman — disabled individuals face systematic interactional devaluation."
      ],
      against: [
        "The social model ignores the real, painful biological realities of impairment — Carol Thomas — impairment-effects cannot be completely socialized away.",
        "Disabled individuals can actively reconstruct their identity through assistive technologies — Modern pluralists — tech dissolves traditional physical barriers."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Tom Shakespeare",
        quote: "Disabled people are disabled by society, not by their bodies."
      }
    ]
  },
  "Globalisation and Identity (Hybridity, Cyber-identities)": {
    theorists: ["Manuel Castells", "David Harvey", "Daniel Miller", "Zygmunt Bauman", "Benjamin Barber"],
    keyTerms: {
      "Cyber-Identity": "The virtual, editable self-concept constructed by an individual on online social networks and digital spaces.",
      "Time-Space Compression": "Harvey's concept that technology reduces geographic distance, accelerating the absolute speed of global life.",
      "Legitimising Identity": "Castells's term for identities generated by dominant institutions to support existing power structures (e.g., national citizenship).",
      "Resistance Identity": "Castells's term for identities constructed by marginalized actors who build trenches of cultural survival (e.g., religious fundamentalism).",
      "Project Identity": "Castells's term for identities constructed when social actors build new cultural projects that redefine their position (e.g., the LGBTQ+ movement).",
      "Cultural Homogenisation": "The process where global consumer culture makes diverse local societies increasingly similar (e.g., 'McWorld')."
    },
    collinsFocus: "Focuses on global cultural homogenisation where Western consumer brands (McDonald's, Coca-Cola) dominate the globe, creating a standardized global consumer identity.",
    cupFocus: "Explores Castells' distinctions between legitimising, resistance, and project identities. Details Daniel Miller's 'global social media' research, showing online platforms allow flexible, hybrid role-plays.",
    evaluationPoints: [
      "The digital divide means millions in LEDCs are entirely excluded from cyber-identities, reinforcing global class and geographic divisions.",
      "Globalisation often sparks violent fundamentalist local resistance (xenophobia, religious returns to tradition) rather than pure hybridity.",
      "Cyber identities are highly filtered representations of reality, often causing intense mental health distress and body image crises among youth.",
      "Benjamin Barber argues we are caught between 'McWorld' (corporate uniformity) and 'Jihad' (aggressive, localized tribal resistance)."
    ],
    keyStudies: [
      {
        researcher: "Daniel Miller et al. (2016)",
        study: "How the World Changed Social Media",
        method: "Comparative global ethnography ('Why We Post') conducted over 15 months in 9 diverse global locations.",
        findings: "Discovered that social media is not a uniform globalizing force; rather, local cultures 'modularise' platforms (e.g., in industrial China, workers use social media to construct dream-like middle-class cyber-identities, escaping rural realities), proving that local agency drives global tech usage."
      }
    ],
    contemporaryExamples: [
      "The 'K-pop' global fandom, where fans from Brazil, Kenya, and Norway build a shared global identity around South Korean music, crossing national borders.",
      "The rise of religious nationalism in multiple countries as a 'resistance identity' against the perceived threat of Western secular globalization."
    ],
    commonMisconceptions: [
      "Assuming globalization leads to a single, identical world culture, ignoring the rise of 'glocalization' (blending global and local cultures).",
      "Believing cyber-identities are completely fake, when they are deeply real in terms of social interaction and psychological impact on the user."
    ],
    synopticLinks: [
      "Links to Theory (Postmodernism's hyperreality vs Castells's networked structuralism).",
      "Links to Methods (the methodological challenge of conducting online 'netnography' across multiple languages)."
    ],
    keyStatistics: [
      "Castells noted that while 65% of the world is connected online, 35% remain in complete digital darkness, highlighting how Castells's network society remains exclusionary (UN ICT Report, 2023)."
    ],
    essayArguments: {
      for: [
        "Globalization leads to fragmented, hybrid, and cyber-directed identities — Daniel Miller — social media allows individuals to construct customized lives.",
        "National identity is being eroded by global consumer networks — Zygmunt Bauman — we are now global consumers rather than localized citizens."
      ],
      against: [
        "Globalization triggers a retreat into defensive, localized resistance identities — Manuel Castells — fundamentalism is a shield against global networks.",
        "Global culture is merely a cover for American economic imperialism — Marxist critics — multinational corporations dictate global tastes to extract profit."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Manuel Castells",
        quote: "Our societies are increasingly structured around the bipolar opposition of the Net and the Self."
      }
    ]
  }
};
