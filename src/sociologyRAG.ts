import { deepenedPaper1Entries } from './sociologyDatabase';

export interface TextbookRAGEntry {
  theorists: string[];
  keyTerms: Record<string, string>;
  collinsFocus: string; // "Collins Cambridge International AS & A Level Sociology" (Haralambos & Holborn et al.)
  cupFocus: string;     // "Cambridge University Press Coursebook" (Livesey & Blundell)
  evaluationPoints: string[];
  keyStudies?: Array<{
    researcher: string;
    study: string;
    method: string;
    findings: string;
  }>;
  contemporaryExamples?: string[];
  commonMisconceptions?: string[];
  synopticLinks?: string[];
  keyStatistics?: string[];
  essayArguments?: {
    for: string[];
    against: string[];
  };
  theoristQuotes?: Array<{
    theorist: string;
    quote: string;
  }>;
}

export const sociologyRAG: Record<string, Record<string, Record<string, TextbookRAGEntry>>> = {
  "Paper 1": {
    "Socialisation": {
      "Primary vs Secondary Socialisation": {
        theorists: ["George Herbert Mead", "Talcott Parsons", "Charles Cooley", "Leon Kuczynski"],
        keyTerms: {
          "Primary Socialisation": "The earliest stage of social learning, occurring in the family, where infants acquire language, basic values, and self-concepts.",
          "Secondary Socialisation": "The lifelong process of learning culture from secondary agencies (schools, peers, media, work, religion) preparing individuals for the wider social world.",
          "Significant Others": "Mead's term for individuals (like parents, guardians) who directly influence a child's early self-concept.",
          "Looking-Glass Self": "Cooley's concept that our self-identity is developed by active interpretation of how we believe others perceive and evaluate us."
        },
        collinsFocus: "Details how families act as primary emotional factories that internalise societal norms. Covers the transition from home universal standards to objective, meritocratic secondary standardisation in schools.",
        cupFocus: "Explores G.H. Mead's distinction between the unsocialised 'I' (spontaneous desires) and the socialised 'Me' (social expectations). Emphasises Leon Kuczynski's relational model where children actively negotiate, resist, and shape their socialisation rather than acting as passive recipients.",
        evaluationPoints: [
          "Dennis Wrong's over-socialised conception of man: criticises structural theories for portraying individuals as passive puppets rather than active, creative agents.",
          "Conflict theories (Marxism and Feminism) argue that values passed down are not a neutral consensus, but instead serve to reinforce class exploitation or patriarchal subordination.",
          "Postmodernists argue that because of fluid, hybrid global lifestyles, traditional secondary agencies have lost their absolute authority."
        ]
      },
      "Agencies of Socialisation (Family, Peer Group, Media, etc.)": {
        theorists: ["Talcott Parsons", "Louis Althusser", "Bowles & Gintis", "Ester Morgan"],
        keyTerms: {
          "Agencies of Socialisation": "Social institutions that guide, reinforce, and control the transmission of cultural knowledge, values, and norms to individuals.",
          "Peer Group pressure": "The informal social pressure exerted by peers to conform to group norms, styles, and behaviors.",
          "Ideological State Apparatus": "Althusser's term for institutions (like education and media) that transmit ruling-class values under the guise of neutrality."
        },
        collinsFocus: "Analyses how different agencies cooperate to create value consensus. Highlights media acting as an informal agent promoting gender roles, and schools serving as bridges to wider society.",
        cupFocus: "Details Althusser and Bowles & Gintis' accounts of education as a repressive and structural agent reproducing class divisions. Notes how peers create complex alternative youth scripts that challenge parental ideals.",
        evaluationPoints: [
          "Agencies do not always work in harmony; peer group expectations often directly conflict with school and parental norms.",
          "Postmodernists argue that the media is now fragmented, allowing users to choose their influences rather than being passively brainwashed.",
          "Interactionists argue that individuals actively interpret and sometimes reject the messages transmitted by these agencies."
        ]
      },
      "The Nature vs Nurture Debate": {
        theorists: ["Desmond Morris", "Lionel Tiger & Robin Fox", "Simon Baron-Cohen", "Cordelia Fine", "Margaret Mead"],
        keyTerms: {
          "Sociobiology": "A scientific discipline claiming that social behavior is determined by innate biological instincts, evolutionary adaptations, and genetic hard-wiring.",
          "Biogrammar": "Tiger and Fox's term for genetically programmed behavioral patterns, such as maternal bonding, that predispose humans to act in specific ways.",
          "Social Construct": "A concept, behavior, or institution that is artificially manufactured, defined, and sustained by the cultural processes of society rather than biology."
        },
        collinsFocus: "Outlines functionalist and sociobiological perspectives that argue natural sex differences are highly functional, with hormones predisposing men to provider roles and women to maternal roles.",
        cupFocus: "Provides a thorough deconstruction of sociobiological claims. Uses Cordelia Fine's 'neurosexism' research to show that allegations of hard-wired logical differences in brains are myths. Explores Margaret Mead's New Guinea anthropological research.",
        evaluationPoints: [
          "Feral children studies conclusively prove that complex human behaviors, including language and social hygiene, are entirely learned (nurtured) rather than instinctive.",
          "Cross-cultural studies of gender roles show immense variation in what is defined as masculine and feminine, proving these are social constructs.",
          "Interactionist and epigenetic models suggest that nature and nurture are inextricably linked, where biological potentials are modulated by choices."
        ]
      },
      "Feral Children and Social Isolation": {
        theorists: ["Kingsley Davis", "Curtiss", "Lucien Malson"],
        keyTerms: {
          "Feral Children": "Children who have lived isolated from human contact from a very young age, having little or no experience of human care, loving, or language.",
          "Social Isolation": "The complete or near-complete lack of contact between an individual and society, leaving them unsocialised in human culture."
        },
        collinsFocus: "Uses isolated children to illustrate database requirements of culture. Demonstrates that language and emotional stability cannot develop in the absence of primary socialisation.",
        cupFocus: "Explores cases like Genie (Curtiss) and Victor of Aveyron (Malson). Analyses the cognitive boundaries of learning language past critical developmental windows, showing how deprivation prevents structural brain development.",
        evaluationPoints: [
          "Genie's case shows that cognitive development has biological limits once the 'critical period' is missed, illustrating nature-nurture interaction.",
          "Feral cases are highly individualised and are often confounded by pre-existing neurological damage or prenatal neglect.",
          "These cases prove that without nurture, the biological human body remains entirely animalistic, unable to perform basic social interactions."
        ]
      },
      "Functionalist vs Marxist Views on Socialisation": {
        theorists: ["Emile Durkheim", "Talcott Parsons", "Karl Marx", "Louis Althusser"],
        keyTerms: {
          "Value Consensus": "A shared agreement on cultural norms and values, which functionalists believe keeps society stable.",
          "Class Consciousness": "The subjective awareness of one's real economic position and interests within a capitalist society.",
          "False Consciousness": "The state where subordinate classes accept ruling-class ideology as natural, masking their exploitation."
        },
        collinsFocus: "Contrasts the functionalist view of value consensus (Durkheim) where socialisation promotes solidarity, with the Marxist view where it acts as a mechanism of class domination.",
        cupFocus: "Details Althusser's view of school and family as Ideological State Apparatuses (ISAs) that teach children obedience and compliance to prepare them for capitalist exploitation.",
        evaluationPoints: [
          "Marxism overlooks the genuine emotional support and stability that family socialisation provides, ignoring its positive mental health functions.",
          "Functionalism idealises socialisation, ignoring how gender bias, racism, and class divisions are actively reproduced in the home.",
          "Both perspectives are highly structural and tend to overlook human agency and individual resistance to socialization."
        ]
      }
    },
    "Social Control": {
      "Formal vs Informal Social Control": {
        theorists: ["Louis Althusser", "Emile Durkheim", "Antonio Gramsci", "Michel Foucault"],
        keyTerms: {
          "Formal Social Control": "Social regulation enforced by official, state-authorised agencies (police, courts, prisons) through codified written laws.",
          "Informal Social Control": "Diffuse, unwritten, and micro-level peer pressure and community regulations (ridicule, gossip, and praising) enforcing conformity.",
          "Hegemony": "Gramsci's concept of ruling-class ideological domination achieved by gaining consent rather than using military force."
        },
        collinsFocus: "Details how socialisation acts as the primary form of civil social control by establishing an inner 'conscience'. Contrasts formal legal agencies with informal primary structures.",
        cupFocus: "Integrates Althusser's distinction between Repressive State Apparatuses (RSAs) and Ideological State Apparatuses (ISAs). Explores control by consent (Gramsci) and Foucault's disciplinary surveillance.",
        evaluationPoints: [
          "Coercive formal control often prompts massive resistance and civil unrest, making control by consent much more stable for elites.",
          "Feminists argue that informal social control within the domestic sphere is designed to subordinate women to male authority.",
          "Interactionists argue that labels of deviance are highly contested, and over-policing can lead to deviancy amplification."
        ]
      },
      "Conformity and Deviance": {
        theorists: ["Robert K. Merton", "Albert Cohen", "Howard S. Becker", "Erving Goffman"],
        keyTerms: {
          "Conformity": "Behavior that complies with socially accepted standards, rules, laws, and group expectations.",
          "Deviance": "Behavior that violates the core norms and values of a society or group, resulting in social disapproval.",
          "Self-Fulfilling Prophecy": "When an individual internalises a label (e.g., 'deveiant') and acts in a way that makes it come true."
        },
        collinsFocus: "Analyses Merton's Strain Theory, detailing how a gap between cultural goals (e.g., American Dream) and institutionalised means creates pressure for deviance.",
        cupFocus: "Outlines Becker's labelling perspective on deviance, showing how moral entrepreneurs define rules, and how being labeled leads to a deviant career and a master status.",
        evaluationPoints: [
          "Merton over-emphasises working-class crime, failing to explain white-collar crimes committed by those who already have material success.",
          "Labelling theory is criticised for being deterministic, assuming anyone who is labeled will naturally drift into a life of crime.",
          "Subcultural theories (like Albert Cohen's status frustration) explain collective youth deviance far better than individual-focused strain theories."
        ]
      },
      "Sanctions and Rewards": {
        theorists: ["B.F. Skinner", "Talcott Parsons", "Linda Molm"],
        keyTerms: {
          "Positive Sanctions": "Rewards (such as praise, high grades, bonuses, and prestige) given to encourage conformist behavior.",
          "Negative Sanctions": "Punishments (such as fines, detention, social exclusion, or imprisonment) used to deter non-conformity."
        },
        collinsFocus: "Explains how the school and the family allocate rewards and punishments to guide child development. This internalises rules as moral imperatives.",
        cupFocus: "Analyses Linda Molm's research on coercion and rewards. Discusses how unequal power dynamics in relationships influence who is subjected to structural negative sanctions.",
        evaluationPoints: [
          "Sanctions are only effective if they are perceived as legitimate; unjust sanctions often trigger rebellion or active resistance.",
          "The effectiveness of informal sanctions has declined in fluid, highly individualised postmodern communities.",
          "Rewards are often distributed unfairly based on class or racial prejudice rather than pure merit, undermining the consensus model."
        ]
      },
      "Resistance to Social Control": {
        theorists: ["Paul Willis", "Stuart Hall", "Dick Hebdige", "Ester Morgan"],
        keyTerms: {
          "Subcultural Resistance": "The adoption of alternative style, values, and language by a youth group to resist dominant cultural norms.",
          "Crisis of Hegemony": "Stuart Hall's term for a period where the ruling class struggles to maintain its political and ideological leadership."
        },
        collinsFocus: "Focuses on how marginalized youth subcultures challenge formal institutions. Details how style acts as a coded form of structural resistance.",
        cupFocus: "Highlights Paul Willis's 'lads' who actively resisted school authority, and Stuart Hall's analysis of how youth crime was blamed in moral panics to restore ruling class hegemonies.",
        evaluationPoints: [
          "Radical resistance is often co-opted and commercialised by capitalist media (e.g., punk style turned into high fashion), neutralizing its political power.",
          "Willis is criticised for romanticizing anti-social behavior, ignoring how the lads' sexism and racism disadvantaged others.",
          "Postmodernists argue that youth styles are now based on consumer play rather than genuine political resistance."
        ]
      },
      "Power and Authority": {
        theorists: ["Max Weber", "Steven Lukes", "Michel Foucault"],
        keyTerms: {
          "Power": "The ability of an individual or group to achieve their goals and impose their will on others, even against resistance.",
          "Authority": "Power that is accepted as legitimate, moral, and rightful by those who are subjected to it.",
          "Charismatic Authority": "Weber's term for legitimacy based on the exceptional personal magnetism or holiness of an individual leader."
        },
        collinsFocus: "Differentiates Weber's three types of authority: Traditional, Charismatic, and Rational-Legal. Relates them to institutional control in modern states.",
        cupFocus: "Analytes Steven Lukes' 'three faces of power' (decision-making, agenda-setting, and preference-shaping). Details Foucault's view of power as decentered, capillary, and embedded in discourse.",
        evaluationPoints: [
          "Foucault's decentered power is criticised for being too vague, making it difficult to identify real oppressors and locate structural inequalities.",
          "Rational-legal authority can lead to dehumanising bureaucracy, where rules become ends in themselves, suppressing human freedom.",
          "Rational choices inside relationships show authority is constantly negotiated rather than static or structured."
        ]
      }
    },
    "Identity": {
      "The Social Construction of Identity (Mead, Cooley, Goffman)": {
        theorists: ["George Herbert Mead", "Erving Goffman", "Charles Cooley", "Derek Egan"],
        keyTerms: {
          "Dramaturgical Approach": "Goffman's model of social interaction that compares human life to actors performing on a theatrical stage.",
          "Impression Management": "The active, strategic techniques used by social actors to control how others perceive and evaluate them.",
          "Looking-Glass Self": "Cooley's concept that our self-concept is built by interpreting how we believe others see us."
        },
        collinsFocus: "Highlights how social structures impose social identities on individuals. Discusses class-based taste cultures and the looking-glass self.",
        cupFocus: "Explores the micro-analytical details of Goffman's dramaturgical model. Evaluates how we manage impressions, select fronts, and navigate back-stages of virtual self-projection on social media.",
        evaluationPoints: [
          "Structuralists argue that the dramaturgical approach ignores how class inequality and poverty restrict the fronts and resources available to actors.",
          "Goffman's model can be seen as overly cynical, portraying humans as permanent manipulators rather than sincere social actors.",
          "Feminists argue that impression management for women is constrained by the male gaze, making female performance subservient."
        ]
      },
      "Social Class Identity (Savage, Bourdieu, Skeggs)": {
        theorists: ["Mike Savage", "Pierre Bourdieu", "Beverley Skeggs", "John Goldthorpe"],
        keyTerms: {
          "Habitus": "Bourdieu's term for the deeply ingrained habits, skills, tastes, and dispositions that characterize a social class.",
          "Cultural Capital": "The non-financial assets (artistic tastes, linguistic codes, education) that middle-class individuals convert into economic success."
        },
        collinsFocus: "Details Savage's Great British Class Survey, identifying seven classes. Outlines the transition from traditional working-class industrial identities to fragmented consumer identities.",
        cupFocus: "Presents Bourdieu's forms of capital (economic, social, cultural). Integrates Beverley Skeggs' study of working-class women to show how they struggle for respectability against negative class labels.",
        evaluationPoints: [
          "Postmodernists argue that class is dead; consumption, lifestyle, and choice are now the sole drivers of personal identity.",
          "Savage is criticised for his survey methodology, which over-represented highly educated, tech-savvy middle-class respondents.",
          "Feminists argue that class theories are often gender-blind, ignoring how women's class identities are experienced differently in unpaid labor."
        ]
      },
      "Gender Identity (Oakley, McRobbie, Connell)": {
        theorists: ["Ann Oakley", "Angela McRobbie", "Raewyn Connell", "Judith Butler"],
        keyTerms: {
          "Manipulation": "Oakley's term for how parents encourage or discourage behaviors based on what is deemed gender-appropriate.",
          "Canalisation": "The parental practice of directing a child's attention to specific gender-typed toys and games.",
          "Hegemonic Masculinity": "Connell's term for the dominant, idealized form of masculinity that legitimises the global subordination of women."
        },
        collinsFocus: "Details Oakley's four pathways of gender socialisation: Manipulation, Canalisation, Verbal Appellations, and Activities. Reviews the rise of expressive masculinities.",
        cupFocus: "Highlights Raewyn Connell's gender hierarchies (hegemonic, subordinate, complicit, marginalised). Incorporates McRobbie's 'bedroom culture' study showing girls' peer socialisation.",
        evaluationPoints: [
          "Gender is increasingly fluid and non-binary today; Butler argued that gender is a performative act rather than a fixed biological essence.",
          "Oakley's research is dated, as modern parents are increasingly conscious of gender-neutral toy selection.",
          "Working-class boys' identities are often shaped by a 'crisis of masculinity' due to deindustrialisation, which Connell's model explains well."
        ]
      },
      "Ethnic Identity (Modood, Hall, Gilroy)": {
        theorists: ["Tariq Modood", "Stuart Hall", "Paul Gilroy", "Themina Basit"],
        keyTerms: {
          "Hybrid Identity": "An identity created by blending elements of different cultures, typical in diverse globalised societies.",
          "Diaspora": "The dispersal of an ethnic population from its original homeland, maintaining a collective cultural connection.",
          "Brasian": "A term describing the hybridized identity of British-born South Asians, combining British and Asian cultural practices."
        },
        collinsFocus: "Examines how family, language, and religion maintain ethnic identity. Discusses the conflict between host culture assimilation and minority cultural defense.",
        cupFocus: "Outlines Tariq Modood's findings on changing ethnic priorities across generations. Uses Stuart Hall's concept of 'new ethnicities' and Paul Gilroy's critique of cultural boundaries.",
        evaluationPoints: [
          "Ethnic identities are not homogenous; social class and gender create massive internal differences within British Asian or Afro-Caribbean groups.",
          "The host nation's structural racism (Gilroy) often forces ethnic groups to seek refuge in defensive cultural segregations.",
          "Cultural hybridisation is sometimes superficial (superficial blending of foods and music) while core cultural values (like marriage) stay traditional."
        ]
      },
      "Age Identity (Postman, Featherstone, Hepworth)": {
        theorists: ["Neil Postman", "Mike Featherstone", "Mike Hepworth", "Diana Gittins"],
        keyTerms: {
          "Infantilisation": "Treating an adult (particularly elderly populations) as if they were a child, reinforcing dependency.",
          "Ageism": "Discrimination or prejudice targeting individuals or groups solely on the basis of their chronological age."
        },
        collinsFocus: "Explores youth identity as a product of postwar wealth and capitalism. Reviews Hepworth & Featherstone's view of the 'mask of old age' where active lifestyles break down elder stereotypes.",
        cupFocus: "Details Neil Postman's 'disappearance of childhood' due to television/internet. Analyses Gittins' 'age patriarchy' where adults dominate children's environments.",
        evaluationPoints: [
          "Postman exaggerated child disappearance; children maintain a robust, separate street culture (Opie and Opie).",
          "Working class elders cannot afford the 'active consumer retirement' described by Featherstone, showing class-age intersection.",
          "Age identities vary cross-culturally; in many non-Western societies, old age grants high status and political power rather than marginality."
        ]
      },
      "Disability and Identity (Medical vs Social Models)": {
        theorists: ["Tom Shakespeare", "Mike Oliver", "Colin Barnes", "Carol Thomas"],
        keyTerms: {
          "Medical Model": "The view that disability is an individual biological impairment requiring medical treatment, cure, or rehabilitation.",
          "Social Model": "The view that disability is caused by social, physical, and attitudinal barriers that exclude people with impairments.",
          "Master Status": "An identity (like disability) that overrides all other social identities, dominating how society treats the individual."
        },
        collinsFocus: "Outlines how disabled people face structural discrimination. Explains how society creates barriers (e.g., stairs) that turn impairments into social handicaps.",
        cupFocus: "Details Shakespeare's research on disabled self-identity, showing that disabled people are often forced to choose between isolation or adopting a victim identity, unless they build a proud collective identity.",
        evaluationPoints: [
          "The social model is criticised for downplaying the physical pain and real biological limitations of bodily impairment.",
          "Medical technology and prosthetics are increasingly enabling, eroding traditional physical and social barriers.",
          "Intersectionality shows disabled identities are experienced differently based on social class, wealth, and gender privilege."
        ]
      },
      "Globalisation and Identity (Hybridity, Cyber-identities)": {
        theorists: ["Manuel Castells", "David Harvey", "Daniel Miller", "Zygmunt Bauman"],
        keyTerms: {
          "Cyber-Identity": "The virtual, editable self-concept constructed by an individual on online social networks and digital spaces.",
          "Time-Space Compression": "Harvey's concept that technology reduces geographic distance, accelerating the absolute speed of global life."
        },
        collinsFocus: "Focuses on global cultural homogenisation where Western consumer brands dominate the globe, creating a standardised global consumer identity.",
        cupFocus: "Explores Castells' distinctions between legitimising, resistance, and project identities. Details Daniel Miller's 'global social media' research, showing online platforms allow flexible, hybrid role-plays.",
        evaluationPoints: [
          "The digital divide means millions in LEDCs are entirely excluded from cyber-identities, reinforcing global class divisions.",
          "Globalisation often sparks fundamentalist local resistance (xenophobia, returns to tradition) rather than pure hybridity.",
          "Cyber identities are highly filtered representations of reality, often causing mental health distress and body image crises."
        ]
      }
    },
    "Methods": {
      "Questionnaires (Postal/Online)": {
        theorists: ["Shere Hite", "Alice Sullivan", "Janine Huisman"],
        keyTerms: {
          "Closed Questions": "Questions where the range of potential responses is fixed or pre-coded by the researcher.",
          "Open Questions": "Questions that allow the respondent to formulation and write their own answers in their own words.",
          "Response Rate": "The percentage of the selected sample that successfully completes and returns the questionnaire."
        },
        collinsFocus: "Focuses on the practical advantages for large-scale social surveys (speed, low cost). Emphasises the Positivist preference for questionnaires in identifying correlations.",
        cupFocus: "Discusses the limitations of questionnaires, focusing on how researchers impose their values via pre-coded categories. Examines the Hite Report's 3% response rate, creating massive self-selection bias.",
        evaluationPoints: [
          "Closed questions lack validity as they don't allow participants to qualify their answers.",
          "A low response rate creates bias, where respondents are atypical of the population.",
          "Questionnaires are unsuitable for groups with limited literacy skills, cognitive difficulties, or language barriers."
        ]
      },
      "Interviews (Structured/Unstructured/Semi/Group)": {
        theorists: ["Ann Oakley", "Heidi Safia Mirza", "Dhiraj Murthy", "Jean Duncombe"],
        keyTerms: {
          "Structured Interview": "A highly standardised interview where the researcher reads from a fixed interview schedule.",
          "Unstructured Interview": "A flexible, open-ended interview resembling a guided conversation, allowing participants to lead.",
          "Interviewer Bias": "The unintended effect of the interviewer's social traits (age, gender, class, race) on responses."
        },
        collinsFocus: "Contrasts the Positivist preference for structured interviews (high reliability) with the Interpretivist preference for unstructured interviews (high validity).",
        cupFocus: "Explores the social desirability effect. Uses Ann Oakley's research on motherhood to show that non-directive interviewing is impossible and advocates for an empathetic relationship.",
        evaluationPoints: [
          "Group interviews can lead to 'Groupthink' or false consensus, where members are reluctant to speak out.",
          "Structured interviews are inflexible and pre-determine the agenda, preventing the discovery of new, unexpected findings.",
          "Unstructured interviews are highly time-consuming to transcribe and impossible to test for reliability."
        ]
      },
      "Observations (Participant/Non-Participant, Overt/Covert)": {
        theorists: ["Erving Goffman", "Sudhir Venkatesh", "Dick Hobbs", "Eileen M. Otis"],
        keyTerms: {
          "Participant Observation": "A qualitative method where the researcher immerses themselves in the daily life of a group, taking part in activities.",
          "Covert Observation": "An observational study where the researcher hides their true identity and purpose.",
          "Hawthorne Effect": "Unintended changes in participants' behavior when they are aware of being watched."
        },
        collinsFocus: "Details how participant observation provides 'verstehen' (empathetic understanding), as advocated by Weber. Discusses how observers learn the 'insider's view' of the world.",
        cupFocus: "Analyzes the practical challenges of cover. Investigates Sudhir Venkatesh's 'Gang Leader for a Day', showing how he was protected by a gang leader but struggled with witnessing illegal acts.",
        evaluationPoints: [
          "Covert participant observation involves extensive deception and lacks informed consent, creating immense ethical challenges.",
          "Observational studies are unsystematic, depend heavily on the personal traits of the researcher, and are impossible to replicate (low reliability).",
          "Overt observation runs the risk of the 'observer effect' changing the natural dynamics of the group."
        ]
      },
      "Experiments (Lab/Field)": {
        theorists: ["Stanley Milgram", "Philip Zimbardo", "Jane Elliott", "Rosenthal & Jacobson"],
        keyTerms: {
          "Laboratory Experiment": "A scientific experiment conducted in a controlled environment where the researcher manipulates the independent variable.",
          "Field Experiment": "An experiment conducted in a real-world, natural setting, where participants are often unaware they are being studied."
        },
        collinsFocus: "Outlines why positivists value lab experiments (absolute control of variables, clear proof of cause and effect, high reliability).",
        cupFocus: "Details Zimbardo's Stanford Prison Experiment (ethical violations, psychological harm) and Rosenthal & Jacobson's Oak School field experiment on teacher expectations.",
        evaluationPoints: [
          "Lab experiments have low ecological validity because the artificial environment results in unnatural participant behavior.",
          "Field experiments are difficult to control, meaning external variables can disrupt and invalidate the results.",
          "Many social experiments are highly unethical, involving intense psychological stress or deception."
        ]
      },
      "Content Analysis": {
        theorists: ["Greg Philo", "John Harrison", "Ester Morgan"],
        keyTerms: {
          "Quantitative Content Analysis": "A method using systematic coding grids to count the frequency of specific words or images in media texts.",
          "Semiology": "The study of signs and hidden codes in media texts, used in qualitative content analysis to find ideological bias."
        },
        collinsFocus: "Highlights content analysis as a cheap, safe, and highly objective way to study media representations of gender and race.",
        cupFocus: "Details the Glasgow Media Group's (Greg Philo) content analysis of television news, exposing systematic bias in favor of employers over trade unions during strikes.",
        evaluationPoints: [
          "Quantitative content analysis only tells us how often something appears; it cannot tell us how the audience actually interprets it.",
          "The design of the coding grid is subjective, heavily reflecting the researcher's own values and assumptions.",
          "Qualitative content analysis (semiology) is highly interpretive and lacks objective measures of reliability."
        ]
      },
      "Case Studies": {
        theorists: ["Paul Willis", "Sudhir Venkatesh", "Michael Anderson"],
        keyTerms: {
          "Case Study": "An in-depth, detailed investigation of a single social group, community, institution, or event over a period of time."
        },
        collinsFocus: "Details the role of case studies in providing rich, deep qualitative descriptions of specific sub-cultural settings.",
        cupFocus: "Explores how Michael Anderson used census records in Preston to build a historical case study, and Willis used a single school to study resistance.",
        evaluationPoints: [
          "Case studies are highly unrepresentative, meaning the findings cannot be generalised to the wider population.",
          "They are highly vulnerable to researcher bias, as the investigator may selectively record facts that fit their hypothesis.",
          "They are expensive and time-consuming, making them difficult for lone researchers to execute."
        ]
      },
      "Pilot Studies": {
        theorists: ["Alice Sullivan", "Stephen Ball", "Neil Postman"],
        keyTerms: {
          "Pilot Study": "A tiny, small-scale trial run of a sociological research project used to test parts of the design before the main survey."
        },
        collinsFocus: "Explains how pilot studies help identify practical problems, like confusing question wording or difficulties with sample contact.",
        cupFocus: "Illustrates cases where pilot runs helped adjust coding grids and questionnaire length, preventing expensive research failures.",
        evaluationPoints: [
          "A pilot study is time-consuming and uses up research funding that could otherwise have been spent expanding the main sample.",
          "Success in the pilot study does not guarantee that the main study will not encounter unexpected local problems.",
          "The pilot sample must be discarded from the main results to prevent test-retest learning bias."
        ]
      },
      "Sampling (Random, Stratified, Quota, Snowball)": {
        theorists: ["William J. Goode", "Dhiraj Murthy", "Shere Hite"],
        keyTerms: {
          "Sampling Frame": "A complete list of the target population from which a researcher selects their sample (e.g., school registers).",
          "Random Sampling": "A probability sampling technique where every member of the population has an equal chance of being selected.",
          "Snowball Sampling": "A non-probability technique where the researcher finds a key informant, who then introduces them to other contacts."
        },
        collinsFocus: "Outlines importance of probability sampling for creating representative samples. Compares random, systematic, and stratified models.",
        cupFocus: "Details why certain social groups (criminals, illegal immigrants, elites) lack a sampling frame, forcing researchers to use snowball or purposive sampling.",
        evaluationPoints: [
          "Snowball sampling is non-representative, as participants will introduce friends with similar sub-cultural attitudes.",
          "Quota sampling is highly vulnerable to researcher bias, as the interviewer chooses who to speak to on the street to fill quotas.",
          "Electoral registers or phone books often exclude marginalized groups (homeless, youth), introducing systematic sampling frame bias."
        ]
      },
      "Triangulation and Methodological Pluralism": {
        theorists: ["Eileen M. Otis", " Sudhir Venkatesh", "Stephen Ball"],
        keyTerms: {
          "Methodological Triangulation": "The use of two or more different research methods to study the same topic to cross-check and validate results.",
          "Methodological Pluralism": "The general practice of combining diverse quantitative and qualitative techniques to get a broader view."
        },
        collinsFocus: "Highlights how triangulation can increase both reliability and validity. Outlines how quantitative records check qualitative field observations.",
        cupFocus: "Details Eileen M. Otis' hotel research, which combined participant observation with in-depth interviews. Shows how data from one checked the other.",
        evaluationPoints: [
          "Combining methods is highly expensive, difficult to coordinate, and requires a team of researchers with massive skillsets.",
          "If two different methods produce contradictory results, it is very difficult to establish which data represents the objective truth.",
          "Positivists argue that adding qualitative methods to surveys simply dilutes the scientific reliability of the research."
        ]
      },
      "Validity, Reliability, Representativeness": {
        theorists: ["Karl Popper", "Emile Durkheim", "Max Weber"],
        keyTerms: {
          "Validity": "The extent to which research data measures what it claims to measure, providing a true and authentic picture of social life.",
          "Reliability": "The consistency of a research method, meaning another researcher can replicate the study and get identical results.",
          "Representativeness": "The extent to which a research sample accurately reflects the larger target population, enabling generalisation."
        },
        collinsFocus: "Presents the scientific trade-of: highly reliable quantitative methods (experiments, surveys) are often low in validity, while highly valid qualitative methods are low in reliability.",
        cupFocus: "Examines how researcher presence, social desirability, and artificial laboratory settings undermine ecological validity. Shows how replication verifies scientific laws.",
        evaluationPoints: [
          "Interpretivists argue that reliability is an artificial concept in human studies because human beings do not act in consistent, predictable ways.",
          "High representativeness is useless if the method used to collect the data is low in validity, collecting shallow or dishonest responses.",
          "Postmodernists argue that because everyone's subjective truth is valid, generalisation (representativeness) is a dated goal."
        ]
      },
      "Objectivity and Value-Freedom": {
        theorists: ["Max Weber", "Howard S. Becker", "Alvin Gouldner", "Karl Marx"],
        keyTerms: {
          "Value-Freedom": "The claim that sociology can and should remain completely neutral, objective, and detached from the researcher's personal values.",
          "Committed Sociology": "The view (Becker) that sociologists should actively take sides with oppressed groups to promote social justice."
        },
        collinsFocus: "Presents the classical positivist view that sociology is an objective science, keeping personal political opinions out of scientific data collection.",
        cupFocus: "Details Weber's view that while topic selection is value-relevant, data collection must be objective. Explains Gouldner's view that value-freedom is a myth designed to avoid corporate responsibility.",
        evaluationPoints: [
          "A researcher's theoretical perspective (e.g., Marxism, Feminism) inevitably shapes the choice of topic, hypotheses, and methods selected.",
          "Becker argued that 'value-freedom' is an illusion; research always benefits either the oppressors or the oppressed. It is better to choose.",
          "Private corporate and government funding bodies often dictate what can be studied, undermining any pure value-free objectivity."
        ]
      },
      "Ethical Issues": {
        theorists: ["Stanley Milgram", "Philip Zimbardo", "Sudhir Venkatesh", "Laud Humphreys"],
        keyTerms: {
          "Informed Consent": "The ethical requirement that research participants must be fully informed about the nature of the study and agree to take part.",
          "Vulnerable Groups": "Groups (like children, disabled, or prisoners) who may struggle to understand consent or face institutional coercion."
        },
        collinsFocus: "Details the ethical guidelines established by sociological associations (protection from harm, confidentiality, and privacy).",
        cupFocus: "Examines Laud Humphreys' Tearoom Trade (ethical violations, lack of consent, stalking) and Zimbardo's prison study to analyse structural ethical failures.",
        evaluationPoints: [
          "Covert research is sometimes the only way to study illegal or elite groups, creating a trade-off between ethical purity and sociological insight.",
          "Informed consent can trigger the Hawthorne effect, where participants behave artificially because they know they are being observed.",
          "Maintaining complete confidentiality is highly difficult when writing detail-rich case studies on small, exclusive communities."
        ]
      }
    },
    "Theory": {
      "Positivism vs Interpretivism": {
        theorists: ["Auguste Comte", "Emile Durkheim", "Karl Popper", "Max Weber"],
        keyTerms: {
          "Social Facts": "Durkheim's concept of institutions and norms that exist externally to the individual and exert a coercive influence over their behavior.",
          "Verstehen": "Weber's term for empathetic understanding, which requires putting oneself in the place of those they are studying."
        },
        collinsFocus: "Presents Positivism as a macro, structuralist approach. Emphasises Durkheim's call to consider social facts as things using quantitative methods.",
        cupFocus: "Presents Interpretivism as a micro, voluntaristic, action-based approach. Focuses on Max Weber's concept of social action and interpretive understanding of meanings.",
        evaluationPoints: [
          "Popper's falsification: science is an open belief system because scientific statements can be tested and disproved.",
          "Methodological pluralism is increasingly common today, proving that the rigid divide between positivism and interpretivism is artificial.",
          "Realists argue that science also studies unobservable mechanisms (such as gravity) making the interpretive focus on meaning scientific."
        ]
      },
      "Functionalism (Durkheim, Parsons)": {
        theorists: ["Emile Durkheim", "Talcott Parsons", "Robert K. Merton"],
        keyTerms: {
          "Organic Analogy": "The comparison of society to a biological organism, where all institutions function together like organs to keep society alive.",
          "Functional Prerequisites": "The basic, essential survival requirements (adaptation, goal attainment, integration, latency) that every society must satisfy.",
          "Anomie": "Durkheim's term for a state of normlessness, where social regulation breaks down, causing social instability."
        },
        collinsFocus: "Reviews Parsons' GAIL model. Discusses how value consensus, shared norms, and socialisation integrate individuals into status roles within the social system.",
        cupFocus: "Analysies Durkheim's work on solidarity (mechanical vs organic) and divisions of labor. Examines Merton's internal critique of universal functional unity, introducing dysfunctions.",
        evaluationPoints: [
          "Functionalism is circular/teleological, claiming that institutions exist because they serve a function, rather than explaining their historical causes.",
          "It is politically conservative, justifying deep inequalities and female subordination as being 'functional' for social order.",
          "It struggles to explain social change, over-emphasising value consensus and social harmony in conflict-ridden societies."
        ]
      },
      "Marxism (Marx, Althusser, Gramsci)": {
        theorists: ["Karl Marx", "Louis Althusser", "Antonio Gramsci"],
        keyTerms: {
          "Economic Determinism": "The theory that the economic base of society (relations of production) determines the shape of all cultural institutions.",
          "Hegemony": "Gramsci's concept of ruling-class ideological control achieved by gaining the active consent of subordinate classes.",
          "Relative Autonomy": "Althusser's view that state institutions have some independence from the economy, though they still serve capitalism in the long run."
        },
        collinsFocus: "Details how private ownership of the forces of production creates class struggle between the bourgeoisie (owners) and the proletariat (workers).",
        cupFocus: "Contrasts structural Marxism (Althusser's ISAs and RSAs) with humanist/cultural Marxism (Gramsci's hegemony and worker agency).",
        evaluationPoints: [
          "Classical Marxism is guilty of economic reductionism, ignoring how gender, ethnicity, and religion create deep social divisions.",
          "The predicted socialist revolutions failed to materialize in advanced capitalist economies, showing capitalism is highly resilient.",
          "Postmodernists argue that modern society is characterized by consumer choices rather than rigid social class structures."
        ]
      },
      "Feminism (Liberal, Radical, Marxist, Difference)": {
        theorists: ["Ann Oakley", "Sylvia Walby", "Greer", "Bell Hooks"],
        keyTerms: {
          "Patriarchy": "A social system characterised by male dominance and control over women, maintained through public and private institutions.",
          "Intersectionality": "The concept that gender, class, race, and sexuality intersect to create unique systems of discrimination and privilege."
        },
        collinsFocus: "Contrasts Liberal Feminism (legal reforms, equal opportunities) with Radical Feminism (views male patriarchy as the main social division).",
        cupFocus: "Details Marxist Feminism (capitalism profits from women's unpaid domestic labor) and Difference Feminism (Bell Hooks' critique that white feminism ignores black women).",
        evaluationPoints: [
          "Radical feminism is dated, ignoring the massive legal and professional progress women have made in the last fifty years.",
          "Liberal feminism is criticised for failing to challenge the deeper capitalist and patriarchal structures of society.",
          "The extreme focus on division within difference feminism can weaken the collective struggle for women's rights."
        ]
      },
      "Interactionism (Symbolic Interactionism, Labelling)": {
        theorists: ["George Herbert Mead", "Herbert Blumer", "Howard S. Becker", "Erving Goffman"],
        keyTerms: {
          "Symbolic Interactionism": "A micro-level perspective focusing on how society is built from the everyday interactions of individuals using shared symbols.",
          "Label": "The definition or categorisation applied to an individual by powerful social agents or moral entrepreneurs."
        },
        collinsFocus: "Details how human beings construct meanings and respond to symbols (languages, gestures) rather than acting on structural instincts.",
        cupFocus: "Highlights Becker's labelling process and Goffman's dramaturgical performance. Shows how individual choices navigate institutional environments.",
        evaluationPoints: [
          "Interactionism is criticised for focusing entirely on micro-interactions, ignoring the macro structures of power, wealth, and class inequality.",
          "It is highly descriptive rather than explanatory, telling us how labelling occurs but failing to explain why some groups are labeled more.",
          "It portrays individuals as overly fragile or passive in the face of labels, ignoring their ability to reject negative tags (Fuller)."
        ]
      },
      "Postmodernism (Lyotard, Baudrillard)": {
        theorists: ["Jean-François Lyotard", "Jean Baudrillard", "Ulrich Beck"],
        keyTerms: {
          "Metanarrative": "A grand, totalising theory (such as Marxism, science, or religion) that claims to explain all aspects of human history.",
          "Hyperreality": "The state where simulations or media representations of reality completely replace the physical reality itself."
        },
        collinsFocus: "Presents postmodernity as a globalized era of fluid identities driven by consumerism, electronic media, and the collapse of class divisions.",
        cupFocus: "Details Lyotard's view that grand metanarratives have lost all credibility. Highlights Baudrillard's concepts of simulacra and hyperreality.",
        evaluationPoints: [
          "Postmodernism is self-defeating; by claiming that all grand theories are invalid, its own theory must also be invalid.",
          "It is highly ethnocentric, describing elite Western consumer lifestyles while ignoring global poverty and starvation.",
          "It exaggerates the decline of structural divisions; social class, gender inequality, and structural racism remain deeply entrenched."
        ]
      },
      "Structuration Theory (Giddens)": {
        theorists: ["Anthony Giddens", "Margaret Archer"],
        keyTerms: {
          "Duality of Structure": "Giddens' concept that social structures shape human action, while human action simultaneously reconstructs those very structures."
        },
        collinsFocus: "Presents structuration theory as a classic synthesis of structuralism and social action theory, resolving the macro-micro debates in sociology.",
        cupFocus: "Explores how rules and resources act as structures. Explains that while language has structural grammatical rules, it only exists if humans speak it.",
        evaluationPoints: [
          "Archer's morphogenetic approach: criticises Giddens for blending structure and action, arguing they exist in different spaces and times.",
          "Critics argue that structuration theory is a dry conceptual exercise that is highly difficult to apply to real empirical research.",
          "It tends to underestimate the coercive power of deep-seated economic structures which individuals cannot easily reshape."
        ]
      }
    }
  },
  "Paper 2": {
    "Theories of Family": {
      "Functionalist (Murdock, Parsons)": {
        theorists: ["George Peter Murdock", "Talcott Parsons", "Ronald Fletcher"],
        keyTerms: {
          "Fit Thesis": "Parsons' argument that the structure of the family adapts to meet the specific economic needs of the dominant society.",
          "Primary Socialisation": "The internalisation of societal values during childhood, creating a stable personality."
        },
        collinsFocus: "Focuses on Murdock's four universal functions. Details Parsons' functional fit thesis where industrialisation caused a shift to isolated nuclear families.",
        cupFocus: "Details historical critiques like Peter Laslett's Preston parish records proving pre-industrial households in Britain were already nuclear.",
        evaluationPoints: [
          "It is ethnocentric and ignores the rich family diversity (cohabitation, single parents) typical of modern society.",
          "It paints an idealised picture of the home, ignoring the dark side of domestic violence and abuse.",
          "It assumes traditional instrumental/expressive roles are biological constants rather than socially constructed cages."
        ]
      },
      "Marxist (Engels, Zaretsky)": {
        theorists: ["Friedrich Engels", "Eli Zaretsky", "Louis Althusser"],
        keyTerms: {
          "Unit of Consumption": "The role of the modern family in generating capitalist profit by purchasing consumer goods.",
          "Cushioning Effect": "Zaretsky's concept that the family acts as a safe haven from worker alienation, preserving the capitalist labor force."
        },
        collinsFocus: "Details how families pass down private property (Engels) and teach passive submissiveness to prepare children for exploitation.",
        cupFocus: "Highlights how monogamous marriage was established by the bourgeoisie to guarantee paternity and preserve concentrated capital inheritance.",
        evaluationPoints: [
          "It is economic reductionist, assuming all family dynamics are driven solely by capitalist wealth dynamics.",
          "It ignores the genuine warmth, emotional satisfaction, and positive support that many families offer.",
          "It is gender-blind, overlooking how patriarchal power, rather than capitalism, is the primary source of female oppression."
        ]
      },
      "Feminist (Oakley, Firestone, Greer)": {
        theorists: ["Ann Oakley", "Shulamith Firestone", "Germaine Greer", "Fran Ansley"],
        keyTerms: {
          "Symmetrical Family": "The ideological claim that couples share domestic roles and decision-making on an equal basis.",
          "Domestic Exploitation": "The unchecked extraction of unpaid domestic labor from women to benefit men or capital."
        },
        collinsFocus: "Contrasts Liberal Feminism (legal reforms, shared roles) with Radical Feminism (advocates separatism to escape patriarchy).",
        cupFocus: "Examines Fran Ansley's Marxist feminist view of women as 'takers of shit' absorbing husbands' work anger. Details Oakley's symmetry critiques.",
        evaluationPoints: [
          "Radical feminism is dated, ignoring major educational, career, and legal advancements women have secured.",
          "It portrays women as completely passive victims, ignoring their active agency in negotiating relationship power styles.",
          "Difference feminists argue that the mainstream feminist movement ignores how ethnicity and class modify female experiences."
        ]
      },
      "Postmodernist (Stacey, Giddens, Beck)": {
        theorists: ["Judith Stacey", "Anthony Giddens", "Ulrich Beck", "Carol Smart"],
        keyTerms: {
          "Pure Relationship": "A relationship sustained purely for emotional and social satisfaction rather than traditional duty or law.",
          "Divorce-Extended Family": "Stacey's term for a fluid, chosen family network linking ex-spouses, new partners, and children."
        },
        collinsFocus: "Outlines how traditional family structures have been replaced by a fluid array of lifestyles chosen by self-reflexive individuals.",
        cupFocus: "Details Giddens' concept of plastic sexuality and Stacey's research in California, showing how women use family fluidities to escape patriarchal marriages.",
        evaluationPoints: [
          "Smart's connectedness thesis: points out that post-modernists ignore how memory, gender roles, and children bind people together.",
          "Extremities of poverty and race restrict choices, meaning free family choices are restricted to wealthy populations.",
          "Statistics show that although choice has increased, traditional family life cycles remain the dominant ideal."
        ]
      },
      "New Right Perspective": {
        theorists: ["Charles Murray", "Patricia Morgan", "Norman Dennis"],
        keyTerms: {
          "Underclass": "A marginalized social group characterized by unemployment, benefit dependency, and non-traditional family structures.",
          "Dependency Culture": "A state where state welfare benefits act as perverse incentives, undermining personal responsibility."
        },
        collinsFocus: "Outlines the New Right view that the nuclear family is the only moral foundation for a stable, productive society.",
        cupFocus: "Analyses Charles Murray's claim that welfare support for lone-parent families has driven the rise of an anti-social underclass of fatherless boys.",
        evaluationPoints: [
          "It is accused of 'blaming the victim', pathologizing single mothers who are often struggling with systemic poverty.",
          "It ignores the domestic violence that forces women to flee nuclear families to become single parents.",
          "There is no sociological evidence proving that children raised by single parents are naturally prone to crime or underachievement."
        ]
      }
    },
    "Family Diversity": {
      "Family Types (Nuclear, Extended, Reconstituted, Lone-parent)": {
        theorists: ["Robert & Rhona Rapoport", "Peter Laslett", "Michael Anderson"],
        keyTerms: {
          "Reconstituted Family": "A family structure created when two previously divorced or widowed partners marry, bringing in children.",
          "Symmetrical Family": "A home-centered, nuclear family with shared responsibilities and joint conjugal roles."
        },
        collinsFocus: "Details the Rapoports' five types of family diversity: Organisational, Cultural, Social Class, Life Course, and Cohort diversity.",
        cupFocus: "Traces family histories. Explores Laslett's findings that pre-industrial households in Britain were predominantly nuclear rather than extended.",
        evaluationPoints: [
          "Despite structural diversity, the nuclear family remains the ideological yardstick in media and child benefit policies.",
          "Reconstituted and single parent families are highly resilient, developing specialized supportive networks.",
          "Class divisions remain the major predictor of structural stability in family structures."
        ]
      },
      "Cultural and Ethnic Diversity": {
        theorists: ["Tariq Modood", "Roger Ballard", "Richard Berthoud"],
        keyTerms: {
          "Matrifocal Family": "A female-headed family structure where mothers are the absolute authority in financial and child care spheres.",
          "Extended Kinship Networks": "Support structures involving grandparents, aunts, and uncles as core household or financial anchors."
        },
        collinsFocus: "Examines differences in family patterns across Asian, Afro-Caribbean, and white British populations.",
        cupFocus: "Details Modood's findings on South Asian families showing high marriage rates and low divorce, vs Afro-Caribbean matrifocal arrangements.",
        evaluationPoints: [
          "Ethnic family diversity is often an active adaptative defense against host-society racism and economic exclusion.",
          "Internal differences: class and generation create deep fractures within any single ethnic community.",
          "Cultural hybrids (Brasian families) increasingly combine Western career lifestyles with traditional kinship values."
        ]
      },
      "Sexual Orientation Diversity": {
        theorists: ["Jeffrey Weeks", "Gillian Dunne", "Carol Smart"],
        keyTerms: {
          "Chosen Families": "Weeks' term for kinship networks built by choice among LGBTQ+ individuals, replacing biological family ties."
        },
        collinsFocus: "Discusses how legal reforms (Same-Sex Marriage, Civil Partnerships) have legitimated and stabilized gay family structures.",
        cupFocus: "Details Gillian Dunne's research on lesbian couples, proving that because they operate outside gender scripts, their conjugal roles are shared.",
        evaluationPoints: [
          "Weeks show chosen families can provide stronger emotional support than traditional biological families which rejected them.",
          "Mainstream legalisation of same-sex families is criticised by some radical queer theorists for forcing assimilation into straight structures.",
          "Lesbian relationships are still subject to work-capital pressures making absolute equality difficult."
        ]
      },
      "Life Cycle and Generational Diversity": {
        theorists: ["Janet Finch", "David Morgan", "Carol Smart"],
        keyTerms: {
          "Life Course": "The sequence of socially defined events and roles that an individual enacts over their life time.",
          "Generational Cohort": "A group of people born during the same time period who share common historical and social experiences."
        },
        collinsFocus: "Details how individuals transition through diverse family types over their lifetimes (e.g., from nuclear child, to single adult, to cohabitation).",
        cupFocus: "Explores Janet Finch's 'family obligations' research, showing how help (money, baby-sitting) flows differently across generations.",
        evaluationPoints: [
          "Postmodernists argue that the rigid traditional life cycle has collapsed, replaced by a fluid and unpredictable series of personal episodes.",
          "Finch's work proves that family care is not natural or automatic, but is a negotiated web of moral and material obligations.",
          "Economic recessions and housing crises are forcing young generations to stay with parents longer, reshaping traditional life courses."
        ]
      },
      "Cohabitation, Divorce, and Singlehood": {
        theorists: ["Nicky Hart", "William J. Goode", "Robert Chester"],
        keyTerms: {
          "Divorce Reform": "Legal changes (such as the 1969/1971 acts) that made it simplified and cheap to legally end a marriage.",
          "Singlehood": "The state of living alone and remaining unpartnered, which has risen among young working professionals."
        },
        collinsFocus: "Traces the steady decline of marriage and rise of cohabitation and divorce. Focuses on secularisation and female career autonomy.",
        cupFocus: "Contrasts Goode's rise of companionate ideals with Nicky Hart's conflict-based critique of marriage traps.",
        evaluationPoints: [
          "Chester argues that cohabitation is a trial marriage, meaning traditional marriage remains the ultimate goal for most.",
          "Divorce statistics are biased; they do not count empty-shell marriages which were common in the Victorian era.",
          "Singlehood is often a temporary lifecycle phase rather than a permanent rejection of family life."
        ]
      }
    },
    "Gender Roles": {
      "Conjugal Roles (Bott, Willmott & Young)": {
        theorists: ["Elizabeth Bott", "Willmott & Young", "Ann Oakley"],
        keyTerms: {
          "Segregated Roles": "An arrangement where husband and wife have separate social circles and distinct tasks (provider vs homemaker).",
          "Joint Roles": "An arrangement where partners share housework, childcare, decisions, and social networks."
        },
        collinsFocus: "Traces Young and Willmott's march of progress theory towards the symmetrical family, driven by industrialisation.",
        cupFocus: "Critiques symmetry. Showcases Elizabeth Bott's analysis linking conjugal roles to the density of the couple's social networks.",
        evaluationPoints: [
          "Feminists argue that symmetrical family claims are a corporate myth designed to mask continuing female double burdens.",
          "Traditional working-class networks still maintain rigid segregated divisions of labor today.",
          "Micro studies show couples often actively rewrite their conjugal divisions when childcare demands change."
        ]
      },
      "Domestic Division of Labour": {
        theorists: ["Jonathan Gershuny", "Fiona Devine", "Esther Dermott", "Sarah Coltrane"],
        keyTerms: {
          "Domestic Labor": "Unpaid work (cooking, cleaning, laundry) that is essential to maintain a household and feed workers.",
          "Lagged Adaptation": "Gershuny's concept that men's domestic contribution increases slowly after women enter full-time work."
        },
        collinsFocus: "Analysies detailed time-use diaries showing that while women do less household labor today, they still perform the vast majority.",
        cupFocus: "Reviews Gershuny's lagged adaptation concept, showing how domestic habits take generations to catch up with economic shifts.",
        evaluationPoints: [
          "Women's full-time work has not created equality, but has instead created the double burden (paid + domestic work).",
          "Commercialisation of housework (microwave meals, cleaners) has reduced domestic burdens more than male assistance.",
          "Class privilege: middle-class families can afford to outsource domestic work, masking male domestic inequality."
        ]
      },
      "Power and Decision Making (Pahl & Vogler)": {
        theorists: ["Jan Pahl", "Carolyn Vogler", "Stephen Edgell", "Irene Hardill"],
        keyTerms: {
          "Allowance System": "A system where husbands give wives a fixed sum of money to manage domestic needs, retaining the rest.",
          "Pooling": "A system where partners have joint bank accounts and shared access to financial resources."
        },
        collinsFocus: "Details Edgell's study on professional couples, showing men make rare but very important decisions (mortgages, relocation).",
        cupFocus: "Analyses Pahl and Vogler's financial models, proving that pooling bank accounts does not guarantee equal power over spending.",
        evaluationPoints: [
          "Pooling often hides inequality, as the partner with the higher salary usually retains ideological veto power over choices.",
          "Economic dependency of women, driven by the gender pay gap, is the root cause of male dominance in decision-making.",
          "Hardill's research shows that the husband's career still takes priority in professional couples when jobs require relocation."
        ]
      },
      "Domestic Violence": {
        theorists: ["R. Emerson Dobash & Russell Dobash", "Sylvia Walby", "Kate Millett"],
        keyTerms: {
          "Domestic Abuse": "Coercive, violent, or controlling behavior inside a family or relationship, which can be physical or psychological."
        },
        collinsFocus: "Details Dobash and Dobash's qualitative research in Scotland, showing that domestic violence is often triggered by challenges to male authority.",
        cupFocus: "Analyses radical feminist viewpoints (Millett) where domestic violence is presented as the ultimate tool utilized to maintain patriarchy.",
        evaluationPoints: [
          "The medical model is criticised for pathologizing domestic abuse as an individual disease rather than a structural issue of gender power.",
          "Police statistical records are biased, as domestic abuse is systematically under-reported and under-recorded.",
          "Material deprivation models (Wilkinson) explain violence patterns far better by focusing on financial and housing stress."
        ]
      },
      "The 'Triple Shift' and 'Dual Burden'": {
        theorists: ["Jean Duncombe", "Dennis Marsden", "Arlie Hochschild"],
        keyTerms: {
          "Dual Burden": "The double workload of paid employment and unpaid domestic housework faced by working women.",
          "Emotion Work": "The invisible work of managing the emotional health and moods of family members, primarily performed by mothers.",
          "Triple Shift": "The combination of paid employment, domestic work, and emotion work faced by modern women."
        },
        collinsFocus: "Explores Duncombe and Marsden's findings that despite full-time jobs, women still performed the emotional repair work of families.",
        cupFocus: "Details Arlie Hochschild's concept of the 'Second Shift' and 'emotion work', showing the physical and mental toll of invisible domestic scheduling on mothers.",
        evaluationPoints: [
          "Men are increasingly involved in emotional parenting, but mothers still retain the ultimate administrative responsibility.",
          "The triple shift is a major barrier preventing women from securing elite management and executive corporate positions.",
          "Postmodernists argue that gender-neutral parenting scripts are reducing the division, but statistical data remains highly unequal."
        ]
      }
    },
    "Childhood": {
      "Social Construction of Childhood (Ariès)": {
        theorists: ["Philippe Ariès", "Allison James", "Jenny Hockey", "Edward Shorter"],
        keyTerms: {
          "Social Construct": "A concept or role that is created, defined, and managed by society rather than being a biological fact.",
          "Miniature Adults": "Ariès' term describing how children in medieval Europe were dressed, worked, and socialised alongside adults."
        },
        collinsFocus: "Details historical relativism of childhood. Examines Shorter's view that high infant mortality once caused parental emotional detachment.",
        cupFocus: "A deconstruction of Ariès' use of historical paintings and diaries. Explores how James and Hockey compare childhood to disability.",
        evaluationPoints: [
          "Ariès is criticised for using highly biased, elite art paintings, which are unrepresentative of peasant families.",
          "Pollock argues that pre-modern parents loved and protected children, meaning Ariès' emotional detachment claims are wrong.",
          "Cross-cultural variations (Punch's Bolivia study) prove childhood has no universal biological form."
        ]
      },
      "Historical Changes in Childhood": {
        theorists: ["Philippe Ariès", "Edward Shorter", "Hugh Cunningham"],
        keyTerms: {
          "Child-Centredness": "The structural focusing of family finances, space, and leisure time entirely on the interests of children."
        },
        collinsFocus: "Traces childhood changes across Victorian factory laws and compulsory education acts, transforming children from economic assets to liabilities.",
        cupFocus: "Details Hugh Cunningham's analysis of how childhood in the 19th century was separated from work, establishing child safety.",
        evaluationPoints: [
          "These historical shifts in the West coincided with imperialist expansions, using state schooling to construct loyal citizens.",
          "Victorian reforms did not apply equally to working-class children, who continued working in mines and fields illegally.",
          "Changes were driven more by capitalist demand for highly skilled, literate workers than pure humanitarian focus."
        ]
      },
      "The Future of Childhood (Postman, Palmer)": {
        theorists: ["Neil Postman", "Sue Palmer", "Iona & Peter Opie"],
        keyTerms: {
          "Toxic Childhood": "Sue Palmer's term for the erosion of child health due to corporate marketing, screentime, and fast food.",
          "Disappearance of Childhood": "Postman's term for the blurring of child-adult boundaries as digital media breaks down reading barriers."
        },
        collinsFocus: "Highlights how media exposure destroys childhood innocence (Postman). Evaluates modern mental health crises in youth.",
        cupFocus: "Presents Iona and Peter Opie's research, which proved that children actively protect their own distinct games away from adults.",
        evaluationPoints: [
          "Postman is too technologically deterministic, assuming children are passive consumer sponges who cannot reject media.",
          "Palmer is accused of being nostalgic, ignoring how technology and internet access can empower children dynamically.",
          "Commercialisation has targeted kids, but modern child-centered safety has never been higher."
        ]
      },
      "Child-Centredness": {
        theorists: ["Jacques Donzelot", "Talcott Parsons", "David Morgan"],
        keyTerms: {
          "Child-Centring": "The social focus on children, placing their interests as the central axis of family life, legislation, and finances.",
          "The Policing of Families": "Donzelot's term for how state agencies (doctors, social workers) monitor families under the guise of child safety."
        },
        collinsFocus: "Details how smaller family sizes and increased wealth enabled parents to invest massive emotional and financial capital into child success.",
        cupFocus: "Explores the dark side of child-centring. Highlights Donzelot's 'policing of families' where parents are regulated, making childhood highly managed.",
        evaluationPoints: [
          "Helicopter parenting and constant child micro-management can stifle child independence, causing anxiety.",
          "Poor families cannot afford elite child-centered consumption, creating shame and structural exclusion.",
          "Parental obsession with children's academic performance has replaced play with test-driven stress."
        ]
      },
      "Cross-cultural Variations in Childhood": {
        theorists: ["Samantha Punch", "Bronislaw Malinowski", "Ruth Benedict"],
        keyTerms: {
          "Cultural Relativism": "The principle that an individual's beliefs and activities should be understood in terms of their own culture.",
          "Child Labor": "The employment of children in productive work, seen as exploitation in the West but as duty in many rural societies."
        },
        collinsFocus: "Details Ruth Benedict's anthropological work, showing children in non-Western tribes are given more responsibility and sexual freedom.",
        cupFocus: "Details Samantha Punch's research in rural Bolivia, showing children as young as five handle field chores without adult surveillance.",
        evaluationPoints: [
          "Punch shows Western childhood is not a universal truth, but is a localized construct shaped by capital.",
          "Non-Western children's early responsibilities can foster high levels of self-reliance and community integration.",
          "Global campaigns (UNICEF) trying to outlaw child labor can harm poor families who depend on children's income to survive."
        ]
      }
    },
    "Demography": {
      "Birth Rates and Fertility": {
        theorists: ["Jane Waldfogel", "Sarah Harper", "Anthony Giddens"],
        keyTerms: {
          "Birth Rate": "The number of live births per 1,000 of the population per year.",
          "Total Fertility Rate": "The average number of children a woman will have during her childbearing years (15-44)."
        },
        collinsFocus: "Explains declining fertility in terms of female education, career focus, delayed marriage, and the high financial cost of children.",
        cupFocus: "Analysies Sarah Harper's demography models, showing how declining child mortality rates naturally cause parents to have fewer offspring.",
        evaluationPoints: [
          "Declining birth rates have led to the 'dependency ratio' crisis, where a small workforce must support a large elderly population.",
          "Policies offering childcare subsidisation (like in Scandinavia) fail to trigger significant long-term fertility rises.",
          "The fertility decline is class-segmented; wealthier classes delay births, while poorer classes maintain earlier family starts."
        ]
      },
      "Death Rates and Life Expectancy": {
        theorists: ["Simeon Kuznet", "Thomas McKeown", "Richard Wilkinson"],
        keyTerms: {
          "Death Rate": "The number of deaths per 1,000 of the population per year.",
          "Life Expectancy": "The average number of years a person born in a given year is expected to live."
        },
        collinsFocus: "Attributes falling death rates to McKeown's improvements in diet, sanitation, water purity, and medical technologies (antibiotics, NHS).",
        cupFocus: "Detailing the social class inequality in life expectancy (Wilkinson's health gradients), showing poor people die younger due to structural stress.",
        evaluationPoints: [
          "McKeown's nutritional hypothesis is contested; critics prove state vaccinations played a far more direct role in preventing child deaths.",
          "Gender paradox: women have higher life expectancy than men, but report higher levels of chronic illness throughout their lives.",
          "Modern lifestyle factors (obesity, sedentary work) are threatening to reverse historic life expectancy gains."
        ]
      },
      "Migration and Globalisation": {
        theorists: ["Stephen Castles", "Mark Miller", "Robin Cohen", "Zygmunt Bauman"],
        keyTerms: {
          "Net Migration": "The difference between the number of immigrants entering a country and the number of emigrants leaving.",
          "Super-Diversity": "Vertovec's term for migrant populations that come from a wide range of small, diverse country origins."
        },
        collinsFocus: "Draws on globalization trends: the feminisation of migration, the creation of transnational identities, and the rise of the migrant precariat.",
        cupFocus: "Details Robin Cohen's migrant categories (citizens, denizens, helots). Shows how host states utilize helots as cheap, unprotected labor.",
        evaluationPoints: [
          "Nationalist policies and border walls ignore how global capitalist corporations actively lobby for loose migration to secure cheap labor.",
          "Migration can trigger a 'brain drain' in poor nations, as highly trained doctors and engineers flee to rich Western states.",
          "Transnational migrants increasingly construct fluid, multi-layered hybrid identities, challenging old ideas of assimilation."
        ]
      },
      "The Ageing Population": {
        theorists: ["Sarah Harper", "Zygmunt Bauman", "Andrew Blaikie"],
        keyTerms: {
          "Ageing Population": "A demographic trend characterized by an increase in the median age of a population, with elderly outnumbering youth.",
          "Structured Dependency": "The social construction of the elderly as passive and dependent, caused by compulsory retirement age rules."
        },
        collinsFocus: "Details the economic challenges of ageing ( NHS costs, pension crisis) and Andrew Blaikie's view that consumer societies offer elder choices.",
        cupFocus: "Details Blaikie's work on the 'retirement industry', showing how the 'silver dollar' market of leisure, travel, and cosmetics rejuvenates old age.",
        evaluationPoints: [
          "Structured dependency is an artificial state; raising the retirement age enforces productivity, but exploits working-class elders.",
          "The 'sandwich generation' of mid-life women faces intense stress caring for both their young children and their elderly parents.",
          "An ageing population can strengthen families, as grandparents provide thousands of hours of free childcare (kinship care)."
        ]
      },
      "Impact of Social Policy on Demography": {
        theorists: ["Jacques Donzelot", "Foucault", "Ester Morgan"],
        keyTerms: {
          "Pronatalist Policy": "Government policies designed to encourage citizens to have more children (e.g., tax breaks for large families).",
          "Welfare Regime": "The systematic structure of welfare benefits and healthcare provided by a state to regulate demographic health."
        },
        collinsFocus: "Examines how demographic patterns are heavily steered by state policies, such as China's one-child policy or French pronatalist incentives.",
        cupFocus: "Uses Foucault's 'biopolitics' concept, illustrating how states use public health archives to regulate, count, and discipline population bodies.",
        evaluationPoints: [
          "State efforts to force fertility rises often fail because modern corporate structures make combining careers and parenting difficult.",
          "Welfare cutbacks in housing and maternity pay are direct causes of delayed fertility patterns among young graduates today.",
          "Social policies can have unintended consequences; restricting migration often drives undocumented labor underground, raising exploitation."
        ]
      }
    }
  },
  "Paper 3": {
    "Theories of Education": {
      "Functionalist (Durkheim, Parsons, Davis & Moore)": {
        theorists: ["Emile Durkheim", "Talcott Parsons", "Davis & Moore"],
        keyTerms: {
          "Social Solidarity": "The ties that bind people together, established when Durkheim argued schools transmit a shared history.",
          "Particularistic Standards": "The subjective, loving rules applied to children within the home, vs universalistic standards in wider society.",
          "Role Allocation": "The sifting and sorting of students into key occupational roles based on their tested talents."
        },
        collinsFocus: "Details Parsons' view of the school acting as a micro-society and a bridge. Explains how schools internalise achievement consensus.",
        cupFocus: "Deconstructs Davis and Moore's role allocation, proving how functionalists assume grades represent pure, unearned talent.",
        evaluationPoints: [
          "Conflict theories argue that role allocation is heavily rigged, sifting individuals based on class, race, and capital rather than talent.",
          "It ignores the hidden curriculum that disadvantages girls, working class students, and minorities.",
          "Durkheim's social solidarity is outdated; modern schools are competitive factories of testing rather than models of social cohesion."
        ]
      },
      "Marxist (Althusser, Bowles & Gintis)": {
        theorists: ["Louis Althusser", "Bowles & Gintis", "Paul Willis"],
        keyTerms: {
          "Correspondence Principle": "The Marxist concept that the social relationships inside schools copy those of the capitalist workplace.",
          "Ideological State Apparatus": "Althusser's term for schools brainwashing children to accept capitalist exploitation as fair.",
          "Myth of Meritocracy": "The ideological lie that school success is based purely on hard work, making class failures blame themselves."
        },
        collinsFocus: "Details Bowles & Gintis' research on capitalism and education. Shows how school schedules, rules, and obedience prepare laborers.",
        cupFocus: "Explores Willis's 'Learning to Labour' study, showing working-class lads developed counter-school styles, actively choosing manual labor.",
        evaluationPoints: [
          "Willis's research proves that pupils are not passive 'cultural zombies' brainwashed by Althusser's ISAs, but possess active agency.",
          "Girls and ethnic minorities often use capitalism's qualifications to secure social mobility, contradicting the absolute reproduction model.",
          "Marxists over-emphasise the economic base of education, ignoring how gender patriarchy is also structured inside classrooms."
        ]
      },
      "Interactionist (Hargreaves, Rist)": {
        theorists: ["David Hargreaves", "Ray Rist", "Stephen Ball"],
        keyTerms: {
          "Labelling": "A teacher's subjective definition of a pupil (e.g., 'disruptive'), which is often based on class or race stereotypes.",
          "Tigers vs Cardinals": "Rist's study where kindergarten teachers sat pupils at fast-track (Tigers) or slow-track (Cardinals) tables based on home class cleanliness."
        },
        collinsFocus: "Presents micro studies of classroom label exchanges. Traces how teacher labelling leads to pupil status polarisation.",
        cupFocus: "Details Stephen Ball's Beachside Comprehensive study on banding and streaming, showing how lower streams are trained in anti-school styles.",
        evaluationPoints: [
          "Interactionist theories are accused of being deterministic, assuming anyone who is labeled will naturally decay.",
          "They are micro-centered, failing to explain where the teachers' underlying class and racial prejudices come from dynamically.",
          "Margaret Fuller's black girls study proves labeled pupils can actively reject labels to secure academic success."
        ]
      },
      "Feminist View": {
        theorists: ["Becky Francis", "Sue Sharpe", "Sue Lees", "Gaby Weiner"],
        keyTerms: {
          "Malestream Bias": "The feminist critique that traditional educational theories were designed by men, about boys, ignoring girls' experiences.",
          "Double Standard": "Sue Lees' term for how girls are sexually policed by peers and teachers (like labels of 'slags'), while boys' sex is praised."
        },
        collinsFocus: "Outlines radical feminist viewpoints where schools are presented as patriarchal factories reinforcing female submissiveness through subject choices.",
        cupFocus: "Details Sue Sharpe's interview research ('Just Like a Girl'), showing how girls' priorities shifted from marriage in the 1970s to career in the 1990s.",
        evaluationPoints: [
          "Feminism has struggle to explain why girls now outperform boys at GCSE and A-Level across almost all subjects.",
          "The underachievement of working-class boys is often blamed on the 'feminisation' of schools, creating a moral panic.",
          "Mainstream feminism is criticised by black feminists (Mirza) for ignoring how racism restricts minority girls' educational success."
        ]
      },
      "Social Democratic Perspective": {
        theorists: ["A.H. Halsey", "John Goldthorpe", "Kenneth Robinson"],
        keyTerms: {
          "Equality of Opportunity": "The social democratic demand that every child should have an equal chance to succeed, regardless of background.",
          "Compensatory Education": "State educational programs (like Sure Start in Britain) designed to provide extra funding for poor children."
        },
        collinsFocus: "Focuses on Halsey's research proving that class barriers prevent intelligent working-class boys from entering university.",
        cupFocus: "Presents the argument that the state must invest mass wealth into comprehensive education to drive economic growth and class mobility.",
        evaluationPoints: [
          "Neoliberals argue that state comprehensive school monopolies breed laziness, claiming that only school competition drives up standards.",
          "Despite massive compensatory funding, the educational achievement gap between rich and poor has continued to widen.",
          "The middle-class always find ways to capture compensatory state funding (e.g., buying houses in good school catchment areas)."
        ]
      }
    },
    "Achievement": {
      "Social Class (Material vs Cultural Deprivation)": {
        theorists: ["Basil Bernstein", "Pierre Bourdieu", "Diane Reay", "J.W.B. Douglas"],
        keyTerms: {
          "Restricted Code": "Bernstein's term for the informal, grammatically simple language code used by the working class.",
          "Elaborated Code": "The formal, linguistically complex language code used by the middle class, educators, and examiners.",
          "Material Deprivation": "The lack of physical resources (poor housing, damp rooms, inadequate nutrition, lack of books) essential for study."
        },
        collinsFocus: "Contrasts Douglas's cultural deprivation thesis (poor parental interest) with material factors (unemployment, lack of computers).",
        cupFocus: "Details Bourdieu's habitus and Reay's research on how working-class mothers lack the symbolic capital to challenge school decisions.",
        evaluationPoints: [
          "Cultural deprivation theories are accused of pathologizing working-class culture rather than checking school discrimination.",
          "Bernstein is criticised for over-simplifying linguistic codes; many working-class pupils use highly complex oral language forms.",
          "Material deprivation remains the strongest structural cause; intelligent children in damp, cold housing fail at higher rates."
        ]
      },
      "Gender (External vs Internal Factors)": {
        theorists: ["Becky Francis", "Tony Sewell", "Sue Sharpe", "Mitsos & Browne"],
        keyTerms: {
          "Feminisation of Schooling": "Sewell's claim that schools highlight quiet obedience and coursework, disadvantaging energetic boys.",
          "Gender Role Socialisation": "The early learning of gender identities, predisposing girls to reading and boys to active space play."
        },
        collinsFocus: "Explores Mitsos and Browne's findings: girls benefit from coursework and organized school peer groups, while boys face a crisis of masculinity.",
        cupFocus: "Details Becky Francis's research, illustrating that while girls succeed academically, they are still pushed into low-paid vocational options.",
        evaluationPoints: [
          "The 'boys' crisis' is exaggerated; middle-class boys continue to succeed at high rates, proving social class remains critical.",
          " course choices remain highly gendered; physics and computing are still heavily dominated by boys, sustaining the career divide.",
          "Sewell's 'feminisation' claim is highly controversial, as schools remain patriarchal institutions at the structural executive level."
        ]
      },
      "Ethnicity (Language, Family, Racism)": {
        theorists: ["Heidi Safia Mirza", "Tony Sewell", "David Gillborn", "Themina Basit"],
        keyTerms: {
          "Institutional Racism": "Systemic, structural practices within schools (like biased curriculum, lower set arrangements) that disadvantage minorities.",
          "Ethnocentric Curriculum": "A school curriculum that reflects, values, and teaches only the culture and history of the dominant ethnic group."
        },
        collinsFocus: "Details are given on Sewell's claim that black boys' school failure is driven by peer subcultures and fatherless homes, vs teacher racism.",
        cupFocus: "Details David Gillborn's research on institutional racism, showing how black Caribbean boys are quickly labeled as threats and excluded.",
        evaluationPoints: [
          "Basit's research shows that Asian families of all social classes value education as a primary tool for generational social mobility.",
          "Mirza shows that black girls actively resist negative teacher labels to succeed, proving labelling does not cause automatic failure.",
          "Focusing solely on 'cultural deprivation' in minority homes hides the deep structural racism operating inside school staffing hierarchies."
        ]
      },
      "Intersectionality in Achievement": {
        theorists: ["Diane Reay", "Kimberlé Crenshaw", "Stephen Ball"],
        keyTerms: {
          "Intersectionality": "The interconnected nature of social categorisations such as race, class, and gender, creating overlapping disadvantages."
        },
        collinsFocus: "Emphasises that none of these factors (class, gender, ethnicity) act in isolation, but instead intersect to shape a pupil's educational path.",
        cupFocus: "Details Diane Reay's research on working-class boys from ethnic minorities, proving how class poverty overlays racial and gender pressures.",
        evaluationPoints: [
          "Quantitative studies are criticised for analyzing variables separately, which fails to capture the lived reality of intersectional barriers.",
          "Middle-class ethnic minority pupils often outperform working-class white pupils, proving class capital remains a dominant factor.",
          "Intersectional models are complex and difficult to translate into simple policy interventions for state schools."
        ]
      }
    },
    "Meritocracy": {
      "The Myth of Meritocracy": {
        theorists: ["Michael Young", "Bowles & Gintis", "Louis Althusser"],
        keyTerms: {
          "Meritocracy": "A system where social positions, rewards, and grades are distributed based solely on individual talent and effort.",
          "Myth of Meritocracy": "The Marxist claim that meritocracy is an ideological illusion used to justify inequality, making losers blame themselves."
        },
        collinsFocus: "Functionalist dream of a fair sorting machine (Parsons) vs Marxist reality where the reproduction of privilege is hidden by school rhetoric.",
        cupFocus: "Traces the origin of the term by Michael Young (who invented it as a warning). Young argued that a true meritocracy would be brutal and heartless.",
        evaluationPoints: [
          "Highly funded private schools immediately destroy any fair meritocratic starting line, as rich children secure elite training.",
          "Social mobility rates have stalled, proving that structural class background is a much stronger predictor of success than talent.",
          "Though meritocracy is a myth, holding it as an ideal encourages states to fund comprehensive training for poorer children."
        ]
      },
      "Social Mobility": {
        theorists: ["John Goldthorpe", "A.H. Halsey", "Mike Savage"],
        keyTerms: {
          "Intergenerational Mobility": "The movement of individuals between social class levels compared to the class level of their parents.",
          "Absolute Mobility": "The total number of people moving up or down the class structure due to changes in job availability."
        },
        collinsFocus: "Details Goldthorpe's Oxford Mobility Study, showing that although absolute mobility rose due to professional job expansion, relative mobility stayed unequal.",
        cupFocus: "Examines Savage's class dynamics, proving that the elite class operates as a closed loop, using social connections to block lower-class entrants.",
        evaluationPoints: [
          "Goldthorpe is criticised for his traditional 'regime' definition, which excluded women from mobility surveys for decades.",
          "Education is increasingly acting as a barrier to mobility today, as university fees burden poor children with massive debt.",
          "Upward mobility can cause intense psychological dislocation, leaving individuals feeling alienated from both their old and new classes."
        ]
      },
      "Role Allocation": {
        theorists: ["Davis & Moore", "Talcott Parsons", "Melvin Tumin"],
        keyTerms: {
          "Role Allocation": "The functionalist process of sifting and sorting people into occupational roles matching their functional importance."
        },
        collinsFocus: "Presents the view that highly complex, important jobs (e.g., brain surgeons) require special talents and long training, demanding high rewards.",
        cupFocus: "Details Melvin Tumin's devastating critique of Davis & Moore. Tumin proved that the 'functional importance' of a job is highly subjective.",
        evaluationPoints: [
          "Is a brain surgeon functionally more important than a garbage collector? Without waste disposal, modern cities would decay from disease.",
          "Role allocation assumes equal opportunity; in reality, elites use wealth to monopolise access to elite training routes.",
          "Extremities of high pay for executives are driven by class power dynamics rather than scarcity of talent or functional demands."
        ]
      },
      "Equality of Opportunity vs Outcome": {
        theorists: ["A.H. Halsey", "Charles Murray", "Kenneth Robinson"],
        keyTerms: {
          "Equality of Opportunity": "A system where all individuals are given an equal starting line, but unequal outcomes are accepted as natural.",
          "Equality of Outcome": "A system designed to ensure every group achieves similar results, using redistribution of resources."
        },
        collinsFocus: "Reviews state measures to guarantee equal access (abolition of grammar schools, compulsory education).",
        cupFocus: "Contrasts Halsey's social democratic demand for compensatory funding with New Right critiques that equal outcomes undermine effort.",
        evaluationPoints: [
          "Equal opportunity schemes (like head-start programs) fail because middle-class parents always buy advantages.",
          "Forcing equal outcomes (e.g., quotas for working class students in elite universities) is criticized by conservatives as reverse discrimination.",
          "True equal opportunity requires the complete abolition of private inheritance and private schooling, which remains politically impossible."
        ]
      }
    },
    "Hidden Curriculum": {
      "Labelling and Self-Fulfilling Prophecy": {
        theorists: ["Howard S. Becker", "David Hargreaves", "Rosenthal & Jacobson"],
        keyTerms: {
          "Labelling": "The micro-level process where a powerful agent (teacher) defines a pupil based on class, race, or gender stereotypes.",
          "Self-Fulfilling Prophecy": "When an individual internalises a label, changes their self-image, and behaves in a way that makes the label true."
        },
        collinsFocus: "Explores David Hargreaves' three stages of teacher labelling: Speculation, Elaboration, and Stabilisation.",
        cupFocus: "Details Rosenthal & Jacobson's Oak School field experiment. Teachers were lied to about 'bloomer' kids, who then gained real IQ points.",
        evaluationPoints: [
          "Rosenthal & Jacobson's research raises severe ethical questions because they systematically disadvantaged the non-bloomer control children.",
          "Labelling can be actively resisted; Fuller's study showed black girls rejected teacher racism to study hard in secret.",
          "It ignores the structural economic factors (poverty, poor housing) that limit academic achievement long before a teacher speaks to a child."
        ]
      },
      "Subcultures and Resistance (Willis)": {
        theorists: ["Paul Willis", "Peter Woods", "Mary Fuller"],
        keyTerms: {
          "Anti-School Subculture": "A peer group whose values are direct inversions of school rules (praising disruption, smoking, hating work).",
          "Pro-School Subculture": "A pupil peer group that accepts, conforms to, and excels within the formal values of the school."
        },
        collinsFocus: "Details Peter Woods' range of pupil adaptations: Ingatiation, Compliance, Opportunism, Ritualism, Retreatism, and Rebellion.",
        cupFocus: "Explores Paul Willis's 'Learning to Labour' ethnographic study. Shows how the 'lads' used sexism and anti-intellectualism to resist school.",
        evaluationPoints: [
          "Willis's sample was extremely tiny—only twelve boys from one midlands school—making his findings highly unrepresentative.",
          "Feminists critique Willis for romanticizing aggressive masculinity, ignoring how the lads harassed girls and Pakistani peers.",
          "Modern youth subcultures are increasingly complex and fluid, moving away from simple pro- vs anti-school divides."
        ]
      },
      "Setting and Streaming": {
        theorists: ["Stephen Ball", "Nell Keddie", "David Gillborn"],
        keyTerms: {
          "Streaming": "Placing students into a single hierarchical class rank across all subjects based on general academic ability.",
          "Setting": "Placing students into different ability groups for specific subjects, allowing flexibility across math and English."
        },
        collinsFocus: "Explores how setting and streaming disproportionately categorizes working-class and minority students into lower ranks, destroying motivation.",
        cupFocus: "Details Nell Keddie's research ('Classroom Knowledge'), proving teachers teach different content to high vs low streams, reinforcing inequality.",
        evaluationPoints: [
          "Streaming acts as a self-fulfilling loop; lower set students are denied access to higher-tier exam papers, capping their grades.",
          "Schools adopt setting to improve their position on state league tables, prioritizing organizational survival over child needs.",
          "High ability students can benefit from being stretched in top streams, but this success comes at the direct cost of lower set depression."
        ]
      },
      "Teacher-Pupil Relationships": {
        theorists: ["Ray Rist", "David Hargreaves", "Heidi Safia Mirza"],
        keyTerms: {
          "Ideal Pupil": "Becker's concept of the student teachers dream of, typically middle-class, clean, conformist, and quiet."
        },
        collinsFocus: "Details how teacher standards of the 'ideal pupil' are deeply saturated with middle-class biases, disadvantaging working-class styles.",
        cupFocus: "Explores Ray Rist's kindergarten study and Hargreaves' micro-classroom interactions. Highlights Mirza's findings on black girls facing teacher pity.",
        evaluationPoints: [
          "Relationships are not one-way; modern pupils possess high levels of agency, negotiating with or actively mocking teacher biases.",
          "Increasing state standardized testing has reduced teachers' classroom freedom, forcing them to treat students as data points.",
          "Teacher training has integrated anti-bias filters, but institutional league-table pressures still force selective labelling of students."
        ]
      }
    },
    "Policy": {
      "Marketisation and Choice": {
        theorists: ["Stephen Ball", "Miriam David", "Gerwirtz", "Chubb & Moe"],
        keyTerms: {
          "Marketisation": "The policy of introducing market forces (competition, parent choice, league tables) into public state education.",
          "Parentocracy": "Gerwirtz's term where parent choices and wealth, rather than student talent, determine which school a child attends.",
          "Cream-Skimming": "The practice where elite schools select high-achieving, middle-class pupils, leaving difficult pupils to poor schools."
        },
        collinsFocus: "Neoliberal view (Chubb & Moe) that state schooling is inefficient, claiming markets empower consumers and drive up standards.",
        cupFocus: "Deconstructs parental choice. Details Gerwirtz's three types of parents: Privileged Skilled Choosers, Semi-Skilled Choosers, and Disconnected Choosers.",
        evaluationPoints: [
          "Marketisation has widened the class gap; popular schools cream-skim rich kids, while failing schools enter spiral of decay.",
          "Parental choice is a complete illusion for working-class families who cannot afford the transport costs to distant, popular schools.",
          "Schools spend millions in promotional marketing and signage rather than investing directly in classroom teachers."
        ]
      },
      "Privatisation of Education": {
        theorists: ["Stephen Ball", "Allyson Pollock"],
        keyTerms: {
          "Privatisation": "The transfer of state education assets, services, and management (such as academy chains or exam boards) to private companies."
        },
        collinsFocus: "Details the rise of the 'Education Services Industry' (ESI), where private firms run catering, building maintenance, and exam scoring.",
        cupFocus: "Details Stephen Ball's analysis of the cola-isation of schools, where global corporations use schools as branding spaces, selling junk food.",
        evaluationPoints: [
          "Private academy chains are accused of prioritizing financial profit margins over child welfare and teacher salaries.",
          "State schooling is increasingly dependent on private software monopolies (Google Classroom, Microsoft), raising data privacy fears.",
          "Privatisation erodes democratic accountability; school directors can pay themselves massive salaries without public monitoring."
        ]
      },
      "Compensatory Education": {
        theorists: ["A.H. Halsey", "J.W.B. Douglas", "Ester Morgan"],
        keyTerms: {
          "Compensatory Funding": "Extra state resources and educational programs targeted at poor geographic zones to counteract cultural/material deprivation."
        },
        collinsFocus: "Reviews historical compensatory schemes, such as Head Start in America or Education Action Zones (EAZ) in Britain.",
        cupFocus: "Analyses why throwing cash at schools fails to close the gap if state policies do not address class poverty and structural housing decay in poor zones.",
        evaluationPoints: [
          "Sure Start programs proved highly effective in improving early child health, but their long-term educational gains faded in secondary school.",
          "Compensatory schemes are vulnerable to state budget cuts, making them unstable and temporary.",
          "It is far more effective to tackle raw child class poverty directly through welfare benefits than trying to repair class damage in schools."
        ]
      },
      "Globalisation and Educational Policy": {
        theorists: ["Stephen Ball", "Hugh Cunningham"],
        keyTerms: {
          "PISA League Tables": "International test rankings comparing school systems across countries in math, science, and reading."
        },
        collinsFocus: "Details how globalization forces schools to compete globally, driving states to model curricula on math-heavy East Asian styles.",
        cupFocus: "Examines Stephen Ball's findings on the rise of multinational education conglomerates (such as Pearson) designing global testing systems.",
        evaluationPoints: [
          "PISA tables force schools into dry testing drills, suppressing artistic creativity, student freedom, and regional histories.",
          "Comparing organic school cultures across countries ignores how different cultures (e.g., Finland vs South Korea) value family and childhood.",
          "Globalisation has accelerated the 'brain drain' of teachers from poorer countries to wealthy, English-speaking state systems."
        ]
      },
      "Vocationalism": {
        theorists: ["Phil Cohen", "Bowles & Gintis", "Ester Morgan"],
        keyTerms: {
          "Vocational Education": "Practical, job-focused training designed to prepare students directly for manual or technical occupations.",
          "New Vocationalism": "State initiatives from the 1980s onward introducing work experience and vocational courses into secondary schools."
        },
        collinsFocus: "Presents the structuralist view that vocational courses act as class-routing networks, funneling working-class children into low-paid manual jobs.",
        cupFocus: "Details Phil Cohen's argument that vocational training does not teach real trade keys, but instead teaches obedience and acceptance of low pay.",
        evaluationPoints: [
          "Vocationalism keeps youth off state unemployment stats, acting as a political hiding scheme for governments.",
          "Students on vocational courses are systematically labeled as low-ability, reinforcing deep class stigma inside schooling.",
          "Despite criticism, technical vocations (construction, engineering) can offer higher salaries today than many dry academic degrees."
        ]
      }
    }
  },
  "Paper 4": {
    "Globalisation": {
      "Modernisation Theory (Rostow)": {
        theorists: ["Walt Rostow", "Talcott Parsons", "David Landes", "Niall Ferguson"],
        keyTerms: {
          "Modernisation": "Transition from traditional agrarian to modern industrial societies.",
          "Take-off stage": "The point of self-sustaining economic growth in Rostow's model.",
          "Traditional values": "Beliefs like fatalism that Parsons argued block economic progress.",
          "Entrepreneurial spirit": "The drive to run systematic business enterprises.",
          "Human capital": "The economic value of a worker's experience and skills.",
          "Ethnocentrism": "Evaluating other cultures according to preconceptions originating in the standards of one's own culture."
        },
        collinsFocus: "Details Rostow's five stages of economic growth, emphasising Western values as necessary preconditions for development.",
        cupFocus: "Explores how modernisation theorists view LEDC poverty as primarily self-inflicted by traditional institutions and norms.",
        evaluationPoints: [
          "Dependency theorists argue it ignores historical exploitation through colonialism.",
          "Postmodernists (e.g., Esteva) critique its Western-centric, unilinear view of progress.",
          "Environmentalists notes that global mass consumption is ecologically unsustainable.",
          "Ignores that capitalist growth in MEDCs relied on protectionism, not just free markets."
        ],
        keyStudies: [{ researcher: "Walt Rostow", study: "The Stages of Economic Growth (1960)", method: "Historical-economic modeling", findings: "Societies evolve through 5 distinct stages culminating in high mass consumption." }],
        contemporaryExamples: ["The persistence of India's caste system in rural areas vs its urban IT boom.", "Bhutan's Gross National Happiness index as an alternative to GDP modernisation."],
        commonMisconceptions: ["Assuming modernisation is a purely economic process, rather than deeply socio-cultural.", "Thinking all developing nations are completely 'traditional' unmixed with global capitalism."],
        synopticLinks: ["Education: Functionalist views of human capital linked to role allocation.", "Religion: Weber's Protestant Ethic as a cultural precondition for capitalism."]
      },
      "Dependency Theory (Frank)": {
        theorists: ["Andre Gunder Frank", "Immanuel Wallerstein", "Samir Amin", "Fernando Henrique Cardoso"],
        keyTerms: {
          "Metropolis-satellite": "Frank's model of rich core nations exploiting poorer peripheral states.",
          "Neo-colonialism": "Exploitation through economic domination and TNCs rather than direct political rule.",
          "Cash crops": "Crops grown for commercial export rather than local subsistence.",
          "Dependent accumulation": "Wealth accumulation in the core driven by surplus extraction from the periphery.",
          "De-development": "The active process of richer nations impoverishing poorer ones."
        },
        collinsFocus: "Analyses Frank's 'development of underdevelopment' where historical slavery and colonialism structured current dependency.",
        cupFocus: "Focuses on how neo-colonialism functions today through unfair trade terms (WTO) and tied aid.",
        evaluationPoints: [
          "Modernisation theorists argue it offers no realistic economic alternatives to capitalism.",
          "Goldthorpe argues colonialism actually brought crucial infrastructure to developing nations.",
          "Struggles to explain the rapid industrialisation of 'Asian Tiger' economies.",
          "Internal corruption (kleptocracy) in LEDCs is downplayed in favour of external blaming."
        ],
        keyStudies: [{ researcher: "Andre Gunder Frank", study: "Capitalism and Underdevelopment in Latin America (1967)", method: "Historical analysis", findings: "Global capitalism systematically exploits Latin America, stunting independent development."}],
        contemporaryExamples: ["Western TNCs controlling cheap textile labor in Bangladesh (Rana Plaza).", "Chinese infrastructure investments in Africa generating new forms of debt dependency."],
        commonMisconceptions: ["Confusing colonialism (direct rule) with neo-colonialism (economic rule).", "Assuming peripheral nations have no agency or resistance to global capitalism."],
        synopticLinks: ["Education: Bowles & Gintis' view of capitalism exploiting labor.", "Crime: Corporate crimes by TNCs exploiting lax environmental laws in LEDCs."]
      },
      "World Systems Theory (Wallerstein)": {
        theorists: ["Immanuel Wallerstein", "Christopher Chase-Dunn", "Giovanni Arrighi", "Leslie Sklair"],
        keyTerms: {
          "Core": "Dominant, technologically advanced capitalist countries extracting global surplus.",
          "Semi-periphery": "Emerging economies that exploit the periphery but are exploited by the core.",
          "Periphery": "Poorest nations limited to raw material export and cheap labor.",
          "Capitalist world-economy": "A single global economic system crossing political borders.",
          "International division of labour": "Spatial separation of global production processes."
        },
        collinsFocus: "Explores the tripartite structure (Core, Semi-Periphery, Periphery) showing mobility is possible but rare.",
        cupFocus: "Examines how the world system evolves; BRIC countries occupy the semi-periphery serving as buffers.",
        evaluationPoints: [
          "Criticised for economic reductionism, ignoring cultural and political drivers of change.",
          "Fails to adequately account for the independent power of the nation-state.",
          "Too static: some argue globalization has moved beyond neat territorial categories into transnational networks (Sklair).",
          "Marxist critics argue it focuses too much on exchange (circulation) rather than class struggles in production."
        ],
        keyStudies: [{ researcher: "Immanuel Wallerstein", study: "The Modern World-System (1974)", method: "Historical sociology", findings: "A global capitalist economy emerged in the 16th century creating enduring core-periphery inequalities."}],
        contemporaryExamples: ["China operating as a semi-peripheral superpower bridging core tech and peripheral resource extraction.", "Apple designing in California (core) but manufacturing in China (semi-periphery) using Congolese cobalt (periphery)."],
        commonMisconceptions: ["Thinking 'periphery' just means 'poor' rather than a specific structural role in global production.", "Equating it entirely with Dependency Theory—WST allows for country mobility (semi-periphery)."],
        synopticLinks: ["Media: Cultural imperialism flowing from core to periphery.", "Power & Politics: Global governance (IMF/World Bank) maintaining core dominance."]
      },
      "Global Inequality and Poverty": {
        theorists: ["Paul Collier", "Amartya Sen", "Zygmunt Bauman", "Joseph Stiglitz", "Thomas Piketty"],
        keyTerms: {
          "Absolute poverty": "Lacking basic necessities for survival (food, water, shelter).",
          "Relative poverty": "Being significantly poorer than the average standard in a specific society.",
          "Bottom billion": "Collier's term for the poorest populations trapped in failing states.",
          "Diseases of poverty": "Treatable diseases (e.g., malaria, cholera) prevalent in LEDCs.",
          "Structural Adjustment Programmes (SAPs)": "Neoliberal free-market reforms forced on LEDCs in exchange for IMF loans."
        },
        collinsFocus: "Highlights how global economic inequalities impact life chances in health, income, and education transnationally.",
        cupFocus: "Explores the role of international NGOs and IGOs (UN, World Bank) in tackling or worsening global poverty.",
        evaluationPoints: [
          "Neoliberals argue free trade has actually pulled millions out of poverty in Asia.",
          "Marxists argue absolute poverty is a necessary byproduct of capitalist profit maximization.",
          "Measurements of poverty (e.g., HDI vs GDP) drastically alter the perception of global inequality.",
          "Feminists argue poverty measurements hide the 'feminisation of poverty' within households."
        ],
        keyStudies: [{ researcher: "Paul Collier", study: "The Bottom Billion (2007)", method: "Economic analysis", findings: "Poorest countries are caught in conflict, resource, and governance traps."}],
        contemporaryExamples: ["The Ebola and Zika outbreaks devastating fragile African healthcare systems.", "Microfinance initiatives empowering rural women in India and Bangladesh."],
        commonMisconceptions: ["Assuming 'poverty' only means absolute starvation, ignoring relative poverty in MEDCs.", "Viewing all foreign aid as purely beneficial rather than potentially creating debt bondage."],
        synopticLinks: ["Education: Material deprivation limiting life chances.", "Family: Women bearing the dual burden in poverty-stricken global supply chains."]
      },
      "Migration and Transnationalism": {
        theorists: ["Stephen Castles", "Douglas Massey", "Robin Cohen", "Paul Kennedy"],
        keyTerms: {
          "Push and pull factors": "Forces driving emigration and attracting immigration.",
          "Brain drain": "The emigration of highly skilled workers from LEDCs to MEDCs.",
          "Circular migration": "Temporary, repetitive movement of migrant workers between home and host areas.",
          "Transnational identities": "Identities shaped by maintaining strong ties to two or more societies.",
          "Diaspora": "A dispersed population retaining a collective cultural origin or identity."
        },
        collinsFocus: "Focuses on demographic shifts, tracing how migration reshapes both sender (remittances) and receiver (diversity/tension) nations.",
        cupFocus: "Analyzes the political consequences of migration, such as 'Fortress Europe' and the rise of xenophobic nationalism.",
        evaluationPoints: [
          "Assimilation theories are criticized as ethnocentric by multiculturalists.",
          "Neoliberals view open borders as optimal for free market efficiency.",
          "Marxists argue migration is manipulated to 'divide and rule' the working class via racism.",
          "Postmodernists argue migration breaks down fixed national identities, creating fluid, hybrid senses of self."
        ],
        keyStudies: [{ researcher: "Stephen Castles", study: "The Age of Migration (1993)", method: "Global demographic review", findings: "Migration is accelerating, globalizing, and becoming deeply feminized and politicized."}],
        contemporaryExamples: ["Syrian refugee crisis and the political backlash leading to right-wing populism in Europe.", "Filipino domestic workers sending massive capital back via remittances."],
        commonMisconceptions: ["Assuming all migration is strictly economic (ignoring refugees and climate migrants).", "Treating migrants as a homogenous group rather than recognizing intersectional (class/gender) differences."],
        synopticLinks: ["Identity: Ethnic identity and cultural defence.", "Crime: People smuggling and human trafficking exploiting desperate migrants."]
      },
      "Global Culture and Hybridity": {
        theorists: ["Roland Robertson", "George Ritzer", "Arjun Appadurai", "John Tomlinson"],
        keyTerms: {
          "Glocalisation": "The blending of global products with local cultural practices.",
          "McDonaldization": "The standardisation of society through efficiency, calculability, predictability, and control.",
          "Cultural imperialism": "The imposition of dominant Western cultures onto peripheral nations.",
          "Homogenisation": "The process by which distinct cultures become homogenous or similar.",
          "Hybridisation": "The creation of new cultural forms from the mixing of different cultures."
        },
        collinsFocus: "Debates convergence (cultural imperialism resulting in sameness) versus divergence (local cultures resisting).",
        cupFocus: "Detailed focus on Appadurai's 'scapes' and how local cultures actively appropriate global media (e.g., Bollywood).",
        evaluationPoints: [
          "Overstates Western dominance: ignores 'reverse cultural flows' like K-pop or anime influencing the West.",
          "Assumes audiences are passive consumers of global brands, missing active local reinterpretation.",
          "Glocalisation highlights how TNCs have to adapt (e.g., vegetarian McDonald's in India) to survive.",
          "Tribalism and nationalist backlash clearly resist global cultural homogenization."
        ],
        keyStudies: [{ researcher: "George Ritzer", study: "The McDonaldization of Society (1993)", method: "Theoretical analysis", findings: "Global rationalisation erodes local tradition, replacing it with uniform, predictable consumer experiences."}],
        contemporaryExamples: ["The global spread of Halloween integrating with local traditions like Mexico's Day of the Dead.", "The use of hybrid languages like 'Spanglish' in border communities."],
        commonMisconceptions: ["Equating globalization solely with Americanisation.", "Viewing local cultures as fragile artifacts rather than resilient, adaptive networks."],
        synopticLinks: ["Media: The role of the internet in creating participatory global culture.", "Family: Changing gender roles through global feminist movements."]
      },
      "Global Social Movements": {
        theorists: ["Manuel Castells", "Naomi Klein", "Paul Byrne", "David Held"],
        keyTerms: {
          "Digital activism": "Using digital technology to organize, mobilize, and enact social change.",
          "Network society": "Castells' theory where information technologies fundamentally restructure economic and social power.",
          "Civil society": "Citizen action distinct from government or market forces.",
          "Anti-globalisation": "Movements opposing neoliberal, corporate-driven globalisation.",
          "Hacktivism": "Gaining unauthorized access to networks to further political ends."
        },
        collinsFocus: "Examines how movements like Occupy challenge neoliberal power structures using decentralized social media.",
        cupFocus: "Explores the transformation of politics via digital networks, bypassing traditional state apparatuses.",
        evaluationPoints: [
          "Digital optimists celebrate the democratisation of activism, empowering marginalized voices.",
          "Digital pessimists (e.g., Keen) argue slacktivism/clicktivism requires zero real-world sacrifice.",
          "Authoritarian states easily co-opt technology for mass surveillance and censorship (Great Firewall of China).",
          "Many global movements lack clear structural leadership, resulting in rapid collapse post-mobilization."
        ],
        keyStudies: [{ researcher: "Manuel Castells", study: "Networks of Outrage and Hope (2012)", method: "Case studies (Arab Spring, Occupy)", findings: "Internet networks create spontaneous 'horizontal' political mobilization bypassing traditional parties."}],
        contemporaryExamples: ["The #MeToo movement spreading rapidly across global social media to combat patriarchy.", "The Arab Spring protests coordinated via Twitter and Facebook."],
        commonMisconceptions: ["Believing digital activism guarantees political revolution, ignoring state military power.", "Confusing the anti-globalisation movement with being 'anti-world'; they are usually anti-neoliberal capitalism."],
        synopticLinks: ["Media: The impact of new media on political power.", "Religion: Liberation theology operating as a grassroots social movement."]
      }
    },
    "Media": {
      "Ownership and Control (Marxist vs Pluralist)": {
        theorists: ["Ralph Miliband", "Robert Dahl", "Ben Bagdikian", "Greg Philo", "Edward Herman & Noam Chomsky"],
        keyTerms: {
          "Media Conglomerate": "A vast corporate entity owning diverse media platforms globally.",
          "Vertical integration": "A company controlling production, distribution, and exhibition of media.",
          "Hegemony": "Gramsci's concept of reproducing ruling-class ideas as 'common sense'.",
          "Editorial independence": "Editors supposedly making decisions free from owner interference.",
          "Propaganda model": "Herman & Chomsky's mechanism showing media filtering news to serve elite interests."
        },
        collinsFocus: "Contrasts the Pluralist emphasis on consumer sovereignty and market choice against the Marxist emphasis on ideological control and false consciousness.",
        cupFocus: "Details Neo-Marxist cultural hegemony theories (GUMG) showing media subtly favor powerful groups without direct owner conspiratorial control.",
        evaluationPoints: [
          "Pluralists argue audience demand directs media content; owners wouldn't risk alienating consumers.",
          "Marxists argue 'choice' is an illusion; diverse channels offer identically sanitized capitalistic content.",
          "Public Service Broadcasting (e.g., BBC) provides a non-profit-driven counterweight to corporate monopolies.",
          "New Media severely disrupts traditional top-down corporate control via citizen journalism."
        ],
        keyStudies: [{ researcher: "Glasgow University Media Group (GUMG)", study: "Bad News (1976)", method: "Content analysis", findings: "TV news systematically reflects ruling-class views, framing strikers negatively and management positively."}],
        contemporaryExamples: ["Rupert Murdoch's News Corp utilizing global reach to influence political elections in UK/US.", "The rise of independent, patron-funded media like ProPublica circumventing corporate filters."],
        commonMisconceptions: ["Assuming traditional Marxists think owners 'brainwash' audiences directly every day.", "Thinking pluralism means 'equal representation'—it only implies a diversity of competing interests."],
        synopticLinks: ["Power: The relationship between media elites and political executives.", "Globalisation: The global spread of TNC media monopolies (Disney, Apple)."]
      },
      "Representation of Gender, Class, Ethnicity, and Age": {
        theorists: ["Stuart Hall", "Angela McRobbie", "Stan Cohen", "Naomi Wolf", "Laura Mulvey"],
        keyTerms: {
          "Symbolic annihilation": "Tuchman's concept where media underrepresents or trivializes certain groups, rendering them invisible.",
          "Male gaze": "The way visual arts and literature depict the world from a masculine, heterosexual perspective.",
          "Stereotype": "An oversimplified, widely held, and often negative image of a social group.",
          "Infantilisation": "Treating or representing adults (often women or minorities) as if they were children.",
          "Demonisation": "Media portrayal of certain groups (e.g., youth, refugees) as profoundly deviant or threatening."
        },
        collinsFocus: "Details systematic under-representation and stereotyping. E.g., working classes as feckless 'chavs', women as domestic or sexual objects.",
        cupFocus: "Explores 'Othering' of ethnic minorities (Hall's inferential racism) and moral panics surrounding youth subcultures.",
        evaluationPoints: [
          "Postmodernists argue representations are increasingly fragmented, fluid, and challenge traditional stereotypes (Gauntlett).",
          "Active audience approaches show minority groups actively reject and subvert negative representations.",
          "Feminists note a 'genderquake' where bold, independent female protagonists are now mainstream.",
          "Intersectionality reveals media treats minority women very differently from working-class white men."
        ],
        keyStudies: [{ researcher: "Stuart Hall et al.", study: "Policing the Crisis (1978)", method: "Media text analysis", findings: "Media generated a moral panic about black 'muggers' to distract from a capitalist crisis."}],
        contemporaryExamples: ["The controversy around Bollywood's historical misrepresentation of Dalits.", "The 'Black Panther' film disrupting traditional Hollywood representations of Africa and black heroes."],
        commonMisconceptions: ["Assuming media representations perfectly dictate audience attitudes via a 'hypodermic syringe' effect.", "Equating 'more representation' directly with 'fair representation' (quality vs quantity)."],
        synopticLinks: ["Identity: How media representations shape young women's self-identities.", "Family: Representation of the idealized nuclear family in advertising."]
      },
      "New Media and Digital Technology": {
        theorists: ["Nicholas Negroponte", "Henry Jenkins", "Andrew Keen", "Sherry Turkle", "Jean Baudrillard"],
        keyTerms: {
          "Digitalisation": "Conversion of audio/visual text into binary code, unifying media platforms.",
          "Technological convergence": "Combining multiple media functions into a single device (e.g., smartphone).",
          "Participatory culture": "A culture with low barriers to expression where consumers generate content.",
          "Cyber-pessimism": "The view that digital media increases surveillance, isolation, and unverified 'fake news'.",
          "Digital divide": "The gap between those with unhindered access to high-speed digital networks and those without."
        },
        collinsFocus: "Outlines the shift from analogue one-to-many broadcasting to digital many-to-many networks, emphasizing interactivity vs surveillance.",
        cupFocus: "Juxtaposes digital optimists (democratisation of knowledge) against digital pessimists (echo chambers, algorithmic control).",
        evaluationPoints: [
          "Optimists see Web 2.0 as empowering citizen journalists to circumvent oppressive state censorship.",
          "Pessimists (Keen) argue blogs/wikis destroy expert authority, rewarding narcissism and tribalism.",
          "Marxists argue 'free' platforms really just commodify user data to sell to advertisers.",
          "The digital age has bred severe 'cyberbullying' and psychological isolation despite hyper-connectivity."
        ],
        keyStudies: [{ researcher: "Sherry Turkle", study: "Alone Together (2011)", method: "Qualitative interviews", findings: "Hyper-connectivity via smartphones reduces deep emotional intimacy, leaving people feeling isolated."}],
        contemporaryExamples: ["The Cambridge Analytica data scandal exposing corporate commodification of social media profiles.", "The rise of Twitch and YouTube streamers reflecting true 'participatory culture' economies."],
        commonMisconceptions: ["Thinking new media completely replaced old media (they frequently converge).", "Equating digital access with digital literacy (evaluating the truth of online info)."],
        synopticLinks: ["Globalisation: The compression of time and space enabling instant trans-world communication.", "Crime: Cybercrimes and the dark net bypassing traditional law enforcement."]
      },
      "Media Effects Models (Hypodermic Syringe, Cultural Effects, Uses & Gratifications)": {
        theorists: ["Albert Bandura", "Elihu Katz", "Denis McQuail", "David Morley", "George Gerbner"],
        keyTerms: {
          "Hypodermic Syringe Model": "Direct effects theory where audience is passively injected with media messages.",
          "Two-step Flow": "Media reaches 'opinion leaders' who then filter and transmit interpretations to the masses.",
          "Uses and Gratifications": "Audiences actively select media to fulfill needs (diversion, relationships, identity, surveillance).",
          "Cultural Effects Model": "Media has a long-term, slow drip-drip ideological effect shaping what audiences consider normal.",
          "Decoding (Reception Analysis)": "How audiences read messages (dominant, negotiated, or oppositional codes)."
        },
        collinsFocus: "Detailed breakdown of Morley's reception analysis (active decoding) versus Bandura's direct violence imitation experiments.",
        cupFocus: "Explores how the Cultural Effects/Hegemonic model provides a sophisticated Marxist alternative to the simplistic Hypodermic approach.",
        evaluationPoints: [
          "Hypodermic syringe model assumes audiences are 'cultural dopes'; laboratory settings lack ecological validity.",
          "Uses and Gratifications fails to explain where audience 'needs' come from (often manufactured by capitalism).",
          "Reception theory proves audiences have agency, but risks underestimating the sheer volume of hegemonic framing.",
          "Postmodernists argue that measuring media 'effect' is impossible when hyperreality means media *is* the reality."
        ],
        keyStudies: [{ researcher: "David Morley", study: "The 'Nationwide' Audience (1980)", method: "Focus groups", findings: "Social class background explicitly dictated whether audiences accepted or actively opposed TV news framing."}],
        contemporaryExamples: ["Debates over violent grand-theft video games and imitation copycat killings (Columbine).", "Audiences consuming hyper-partisan political podcasts for 'identity gratification'."],
        commonMisconceptions: ["Confusing short-term behavioral effects (violence imitation) with long-term ideological effects (sexism).", "Assuming 'active audience' theories mean the media has strictly zero influence."],
        synopticLinks: ["Methods: The artificiality vs validity debate of Bandura's lab experiments.", "Socialisation: Media operating as a secondary agent of ideological reproduction."]
      },
      "Moral Panics (Cohen)": {
        theorists: ["Stan Cohen", "Jock Young", "Stuart Hall", "Angela McRobbie"],
        keyTerms: {
          "Folk devils": "Individuals or groups defined as a severe threat to societal values.",
          "Moral panic": "An exaggerated, disproportionate media-driven public anxiety over a perceived threat.",
          "Deviancy amplification spiral": "Media coverage generating more of the very deviance it condemns.",
          "Symbolisation": "Media focusing on specific markers (hairstyles, clothes) to quickly identify the folk devil.",
          "Sensationalism": "Using emotive, hyperbolic language to maximize fear and audience engagement."
        },
        collinsFocus: "Focuses on the mechanics of Cohen's model: Media exaggeration -> Public anxiety -> Police crackdown -> Amplified deviance.",
        cupFocus: "Explores neo-Marxist applications (Hall) showing panics distract working classes from capitalist economic crises.",
        evaluationPoints: [
          "McRobbie & Thornton argue the moral panic concept is outdated in a multi-mediated, cynical postmodern world.",
          "Left Realists argue moral panics sometimes reflect highly rational, real working-class fears of crime rather than elite media constructions.",
          "Digital media drastically increases the speed of panic cycles, but also allows instant debunking by citizen journalists.",
          "Interactionists emphasize the 'stigmatization' phase leading to a self-fulfilling prophecy."
        ],
        keyStudies: [{ researcher: "Stan Cohen", study: "Folk Devils and Moral Panics (1972)", method: "Participant observation & content analysis", findings: "Media grossly exaggerated minor clashes between Mods and Rockers, creating a spiral of deviancy that worsened the conflict."}],
        contemporaryExamples: ["The intense media hyper-focus on Muslim immigrants as existential threats to European culture.", "Panics surrounding online 'grooming' and teenagers' use of smartphones."],
        commonMisconceptions: ["Assuming 'moral panic' means the threat doesn't exist at all—usually the threat exists, but the media reaction is wildly disproportionate.", "Believing the media always intentionally plots to create panics (often it's just profit-driven sensationalism)."],
        synopticLinks: ["Crime: How police response amplifies deviance rather than suppressing it.", "Identity: Stigmatization altering youth subculture self-identity."]
      },
      "Globalisation and the Media": {
        theorists: ["Marshall McLuhan", "John Tomlinson", "Robert McChesney", "Roland Robertson"],
        keyTerms: {
          "Global village": "McLuhan's visionary term for a world interconnected by electronic media.",
          "Cultural imperialism": "Western media corporations dominating and erasing indigenous cultures.",
          "Disneyfication": "The global spread of sanitized, standardized, homogenous entertainment.",
          "Glocalisation": "The creative fusing of global media formats with local cultural specifics.",
          "Media saturation": "The postmodern condition where media images surround and define everyday life."
        },
        collinsFocus: "Highlights the tension between the imperialist spread of Western consumerist media and the adaptive, resilient nature of local decoding.",
        cupFocus: "Explores structural changes: how digitalization allowed vast transnational media conglomerates to control global info flows.",
        evaluationPoints: [
          "Sceptics argue global media is just Western imperialism, destroying authentic local heritages.",
          "Transformationalists focus on hybridity; non-Western cultures actively appropriate media to form unique glocal identities.",
          "Marxists worry that global media conglomerates crush democratic discourse and critical independent thought.",
          "Postmodernists celebrate the endless diversity and choice global media provides consumers."
        ],
        keyStudies: [{ researcher: "Robert McChesney", study: "Rich Media, Poor Democracy (1999)", method: "Political economy analysis", findings: "Consolidation of global media by a tiny corporate elite directly threatens democratic civic engagement worldwide."}],
        contemporaryExamples: ["The global dominance of U.S. streaming giants like Netflix altering local television production.", "The immense popularity of South Korean K-Pop fusing Western beats with specific regional aesthetics."],
        commonMisconceptions: ["Thinking 'global media' implies audiences everywhere interpret messages identically.", "Equating it solely with the Internet, forgetting global television, film, and news wire services."],
        synopticLinks: ["Globalisation: Transnational networks forming a 'world system' of cultural exchange.", "Religion: Televangelism spreading conservative Christian models globally."]
      }
    },
    "Religion": {
      "Functionalist (Durkheim, Malinowski, Parsons)": {
        theorists: ["Emile Durkheim", "Bronislaw Malinowski", "Talcott Parsons", "Robert Bellah"],
        keyTerms: {
          "The Sacred and Profane": "Durkheim's division of the world into special/holy things vs ordinary/everyday things.",
          "Totemism": "Worship of a symbol representing the societal clan/group.",
          "Collective conscience": "The shared moral norms and values holding a society together.",
          "Psychological functions": "Malinowski's focus on religion providing comfort during life crises and uncontrollable events.",
          "Civil religion": "Bellah's concept of sacred characteristics attached to the secular nation-state."
        },
        collinsFocus: "Details how religion promotes social integration and solidarity, acting as the 'social cement' of society.",
        cupFocus: "Explores Parsons' view of religion providing a 'universe of meaning' and addressing ultimate questions to prevent social anomie.",
        evaluationPoints: [
          "Ignores that religion often creates severe violent conflict (Northern Ireland, Sunni vs Shia).",
          "Secularization theory argues functionalism reflects a bygone era and religion no longer binds modern diverse societies.",
          "Marxists argue it ignores how this 'collective conscience' exclusively serves ruling-class oppressive interests.",
          "Feminists critique it for ignoring how religious 'social solidarity' systematically subordinates women."
        ],
        keyStudies: [{ researcher: "Emile Durkheim", study: "The Elementary Forms of Religious Life (1912)", method: "Anthropological review", findings: "By worshipping the sacred totem, Indigenous Australians were unknowingly worshipping society itself, binding them together."}],
        contemporaryExamples: ["American civil religion involving allegiance to the flag and the phrase 'In God We Trust'.", "The role of religion comforting populations after massive natural disasters like tsunamis."],
        commonMisconceptions: ["Functionalists believe God is real; actually, Durkheim viewed God merely as a social construct representing society.", "Applying Malinowski's isolated island tribe theories uncritically to highly complex, secular modern societies."],
        synopticLinks: ["Education: Durkheim's parallel view of schools serving to build essential social solidarity.", "Identity: Religion providing individuals with a rigid, secure self-conception."]
      },
      "Marxist (Marx, Engels)": {
        theorists: ["Karl Marx", "Friedrich Engels", "Otto Maduro", "Antonio Gramsci", "Louis Althusser"],
        keyTerms: {
          "Opium of the people": "Marx's famous quote viewing religion as a drug numbing working-class pain.",
          "False consciousness": "Religion obscures the true nature of capitalist exploitation.",
          "Legitimisation of inequality": "Religion frames the social hierarchy as God's will.",
          "Alienation": "Workers feeling separated from their humanity; religion arises as a coping mechanism.",
          "Liberation theology": "A Neo-Marxist approach where clergy actively support socialist revolution for the poor."
        },
        collinsFocus: "Explicitly frames religion as an Ideological State Apparatus that deadens revolutionary action by promising heavenly rewards for earthly suffering.",
        cupFocus: "Details both the traditional repressive view and the Neo-Marxist view (Maduro) where religion can possess 'relative autonomy' to challenge ruling elites.",
        evaluationPoints: [
          "Fails to account for secularization; if capitalism requires religion for control, why is it declining in the West?",
          "Ignores religion’s immense historical role in driving progressive social change (Civil Rights movement led by Martin Luther King).",
          "Functionalists argue Marx ignores the genuine psychological comfort and social cohesion religion provides to all classes.",
          "Neo-Marxists argue traditional Marxism is too economically deterministic, failing to see religion's cultural autonomy."
        ],
        keyStudies: [{ researcher: "Otto Maduro", study: "Religion and Social Conflicts (1982)", method: "Theoretical-historical analysis", findings: "Religion is not inherently conservative; under oppressive Latin American dictatorships, the Catholic church became the only viable revolutionary outlet."}],
        contemporaryExamples: ["The Caste system in Hinduism historically justifying extreme poverty among Dalits.", "Catholic priests in South America fighting for peasant land rights (Liberation Theology)."],
        commonMisconceptions: ["Assuming all Marxists hate religion equally—Neo-Marxists respect its dual nature as both oppressor and potential liberator.", "Thinking 'opium of the people' meant Marx blamed religion; he saw religion as a symptom of the disease of capitalism, not the disease itself."],
        synopticLinks: ["Education: Parallel arguments regarding the ideological state apparatus hiding capitalist inequality.", "Media: Hegemonic control preventing radical thoughts from emerging."]
      },
      "Feminist (El Saadawi, Armstrong)": {
        theorists: ["Nawal El Saadawi", "Karen Armstrong", "Mary Daly", "Linda Woodhead", "Simone de Beauvoir"],
        keyTerms: {
          "Patriarchy": "Male domination within society and its institutions.",
          "Goddess religion": "Ancient matriarchal religions replaced by aggressive male monotheism (Armstrong).",
          "Stained glass ceiling": "The invisible barrier preventing women from reaching top religious hierarchies.",
          "Religious compensation": "De Beauvoir's adaptation of Marx; religion compensates women for their severe earthly marginalization.",
          "Veiling": "The practice of covering the hair/face, debated as either oppressive control or empowering cultural defense."
        },
        collinsFocus: "Details how religious dogma, structures (all-male priesthoods), and customs inherently subordinate women to second-class spiritual status.",
        cupFocus: "Highlights Liberal vs Radical feminist splits. Explores Woodhead's concept of spiritual shopping and how women turn to New Age movements to bypass patriarchal churches.",
        evaluationPoints: [
          "Ignores that religion often attracts far more female followers than male, offering women community and solace.",
          "Intersectional feminists argue white feminists misinterpret Muslim veiling, which many women view as a liberated choice resisting Western objectification.",
          "Overgeneralization: denominations like the Quakers have a long history of absolute gender equality.",
          "Fails to note modern structural changes, like the ordination of female bishops in the Church of England."
        ],
        keyStudies: [{ researcher: "Nawal El Saadawi", study: "The Hidden Face of Eve (1980)", method: "Qualitative / Subjective reflection", findings: "Religion itself is not the enemy, but male patriarchal elites deliberately distort Islamic teachings to enforce female subjugation."}],
        contemporaryExamples: ["The intense ongoing debates in conservative Catholic circles regarding the prevention of female ordination.", "Islamic women utilizing the hijab as a proud assertion of identity against Western Islamophobia."],
        commonMisconceptions: ["Thinking all feminists believe religion must be eradicated—Liberal and Islamic feminists often advocate for internal reform rather than abolition.", "Relying on stereotypes that women in orthodox religions have zero agency inside the domestic sphere."],
        synopticLinks: ["Family: Religion justifying domestic gender divisions and unequal conjugal roles.", "Media: Representation of women subjected to the 'male gaze' intersecting with religious modesty codes."]
      },
      "Secularisation Debate (Wilson, Berger, Stark & Bainbridge)": {
        theorists: ["Bryan Wilson", "Peter Berger", "Rodney Stark", "Grace Davie", "Paul Heelas"],
        keyTerms: {
          "Rationalisation": "Weber's concept where scientific, logical thought replaces magical/religious thinking.",
          "Disenchantment": "The removal of mystical explanations from human understanding of the world.",
          "Believing without belonging": "Grace Davie's theory that personal faith remains strong while institutional attendance collapses.",
          "Religious market theory": "Stark & Bainbridge's view that religion is a competitive market driven by consumer rational choice.",
          "Existential security": "Norris & Inglehart's theory that wealthy, secure nations do not need religion's psychological comfort."
        },
        collinsFocus: "Maps the statistical decline of UK/European church attendance, clergy numbers, and public religious influence against theories of rationalisation.",
        cupFocus: "Explores the counter-arguments extensively: 'Spiritual Revolution' (Kendal project), resacralisation, and Stark's critique of Eurocentric secularization models.",
        evaluationPoints: [
          "Data validity problems: assuming historical church attendance equaled deep faith (ignoring social pressure to attend).",
          "Stark & Bainbridge argue secularization is largely a Eurocentric myth; America remains highly religious due to lack of a state religious monopoly.",
          "New Age Movements suggest an evolution of spirituality, not a death of religion.",
          "Global trends show strict, fundamentalist religions are growing the fastest, rejecting secularization entirely."
        ],
        keyStudies: [{ researcher: "Paul Heelas & Linda Woodhead", study: "The Kendal Project (2005)", method: "Mixed methods (surveys/observations) in a UK town", findings: "While traditional congregational religion is declining, the 'holistic milieu' (New Age spirituality) is growing, showing a shift rather than an end to faith."}],
        contemporaryExamples: ["The rapid decline in adherence to the Church of England vs the explosive growth of evangelical mega-churches in Brazil and South Korea.", "The use of horoscopes and mindfulness apps substituting traditional prayer."],
        commonMisconceptions: ["Equating secularization purely with 'nobody believing in God anymore', rather than the loss of institutional societal power.", "Failing to recognize that 'believing without belonging' changes the metric of what it means to be religious."],
        synopticLinks: ["Globalisation: Modernisation leading to existential security in the West.", "Methods: Methodological problems with historical statistical data validity."]
      },
      "Fundamentalism": {
        theorists: ["Steve Bruce", "Samuel Huntington", "Karen Armstrong", "Zygmunt Bauman"],
        keyTerms: {
          "Literalism": "Interpreting religious texts as exact, unquestionable facts.",
          "Cultural defence": "Using religion to protect community identity against hostile external forces.",
          "Clash of civilisations": "Huntington's thesis that future global conflicts will be defined by cultural/religious fault lines.",
          "Anti-modernism": "Active resistance to secular, liberal, and tolerant global values.",
          "Cosmopolitanism": "A tolerant, open-minded approach embracing diverse global perspectives."
        },
        collinsFocus: "Details fundamentalism as a reactionary rational response to the threats posed by postmodern relativism and globalized liberal culture.",
        cupFocus: "Differentiates between Western fundamentalism (New Christian Right reacting to internal social changes) and Third World fundamentalism (reacting to external Western imperialism).",
        evaluationPoints: [
          "Postmodernists (Bauman) frame it as a search for absolute certainty in a fluid, risk-filled world.",
          "It ironically relies heavily on modern technological tools (internet, mass media) to spread anti-modern messages.",
          "Critics argue Huntington's 'clash of civilizations' is dangerously simplistic and ignores massive internal divisions within Islam and Christianity.",
          "Marxists argue fundamentalist leaders use religion to mask underlying economic poverty and geopolitical power struggles."
        ],
        keyStudies: [{ researcher: "Steve Bruce", study: "Fundamentalism (2000)", method: "Comparative sociology", findings: "Fundamentalism only thrives where the religious community feels materially or ideologically threatened by secular modernization."}],
        contemporaryExamples: ["The rise of the New Christian Right in the USA influencing abortion legislation.", "The emergence of ISIS and Al-Qaeda as violent pushbacks against Western geopolitical involvement in the Middle East."],
        commonMisconceptions: ["Assuming all fundamentalism is violent or Islamic (ignoring peaceful or Christian/Hindu/Jewish fundamentalism).", "Thinking fundamentalism is 'ancient'—it is a distinctly modern phenomenon reacting against modernization."],
        synopticLinks: ["Media: The role of moral panics in stigmatizing Muslim communities, fueling radicalization.", "Globalisation: The spread of Western consumer culture triggering local resistance."]
      },
      "Religion and Social Change (Weber)": {
        theorists: ["Max Weber", "Richard Tawney", "Karl Kautsky", "David Martin", "Bruce"],
        keyTerms: {
          "Protestant ethic": "The moral obligation to work diligently as a sign of spiritual grace.",
          "Spirit of capitalism": "The systematic, rational pursuit of profit for its own sake rather than consumption.",
          "Predestination": "The Calvinist belief that God has already determined who is saved.",
          "Asceticism": "Severe self-discipline and avoidance of all forms of indulgence.",
          "Theodicy of disprivilege": "Religious explanations that justify the suffering of the poor as a test granting future salvation."
        },
        collinsFocus: "Analyzes Weber's thesis in depth: how Calvinist anxiety over salvation unintentionally sparked the intense capital accumulation needed for modern capitalism.",
        cupFocus: "Explores how religion acts as a dynamic force for change (Civil Rights, Liberation Theology) contra the Marxist assumption of conservative stagnation.",
        evaluationPoints: [
          "Marxists (Kautsky) argue capitalism preceded and caused Calvinism, not the other way around.",
          "Tawney argued rapid technological advances, not theological shifts, primarily drove capitalism.",
          "Some regions with heavy Calvinist populations (e.g., Scotland) industrialised much slower than others.",
          "Highlights interactionism: how subjective religious meanings dramatically alter macro-economic structures."
        ],
        keyStudies: [{ researcher: "Max Weber", study: "The Protestant Ethic and the Spirit of Capitalism (1905)", method: "Historical comparative analysis", findings: "Capitalism flourished uniquely in the West because Calvinist theology provided the psychological drive to work hard and reinvest profits."}],
        contemporaryExamples: ["Liberation Theology in South America radically transforming political landscapes against dictatorships.", "The American Civil Rights Movement utilizing the Black Church network for radical societal integration."],
        commonMisconceptions: ["Thinking Weber claimed Calvinism was the *only* cause of capitalism (he saw it as one necessary factor among material ones).", "Confusing 'asceticism' with mere 'saving money'—it was a deep religious terror of damnation."],
        synopticLinks: ["Theory: Classic debate between Marxist economic determinism and Weberian social action.", "Globalisation: Modern Pentecostalism driving economic mobility in parts of Latin America and Africa."]
      },
      "New Religious Movements and Cults": {
        theorists: ["Roy Wallis", "Paul Heelas", "Eileen Barker", "Rodney Stark", "William Bainbridge"],
        keyTerms: {
          "World-rejecting": "NRMs highly critical of the outside world, isolating members (e.g., Moonies).",
          "World-affirming": "NRMs that unlock self-potential to succeed within normal society (e.g., Scientology).",
          "Holistic milieu": "The diverse network of New Age practices focusing on mind-body-spirit connectivity.",
          "Relative deprivation": "Subjective feeling of being deprived compared to others, leading middle-classes to seek spiritual fulfillment.",
          "Spiritual shopping": "Treating religious beliefs like commodities in a postmodern consumer market."
        },
        collinsFocus: "Details Wallis's typology and mapping structural vs psychological reasons for joining (marginality, anomie, relative deprivation).",
        cupFocus: "Evaluates the transition from traditional religious obligation to individualized 'New Age' spirituality and the dynamics of cult recruitment.",
        evaluationPoints: [
          "Wallis's typology is criticized for being too rigid; many NRMs combine elements of rejecting and affirming.",
          "Barker's research dismantled the 'brainwashing' myth; recruitment is actively chosen and often highly unsuccessful.",
          "The short-lived nature of many NRMs prevents them from truly replacing the societal function of traditional churches.",
          "Marxists argue New Age commercial spirituality is just capitalist commodification of the soul."
        ],
        keyStudies: [{ researcher: "Eileen Barker", study: "The Making of a Moonie (1984)", method: "Overt participant observation and interviews", findings: "Contrary to media moral panics about brainwashing, conversions were rational choices, and most recruits quickly left voluntarily."}],
        contemporaryExamples: ["The appeal of mindfulness apps and yoga retreats acting as secularized spiritual commodities.", "The tragedy of Heaven's Gate demonstrating the extreme control of world-rejecting sects."],
        commonMisconceptions: ["Labeling every small religious group a 'cult' without using the strict sociological definitions of sects vs cults.", "Assuming joining an NRM is due to mental instability rather than rational choices responding to societal anomie."],
        synopticLinks: ["Media: The creation of moral panics surrounding 'cult brainwashing'.", "Globalisation: Information technology allowing obscure NRMs to recruit a global, decentralized audience."]
      }
    }
  }
};

/**
 * Helper function to retrieve RAG content for a given paper, topic, and subtopic.
 * Falls back gracefully to broader topic if subtopic is not found.
 */
export function getSociologyRAGContent(paper: string, topic: string, subTopic?: string): string {
  const paperClean = paper.trim();
  const topicClean = topic.trim();
  const subTopicClean = subTopic ? subTopic.trim() : "Introduction";

  const paperData = sociologyRAG[paperClean];
  if (!paperData) return "";

  const topicData = paperData[topicClean];
  if (!topicData) return "";

  // Exact Match for Sub-topic
  let entry = topicData[subTopicClean];
  
  // Graceful fallback to search subtopics for keyword matching
  if (!entry && subTopicClean !== "Introduction") {
    const matchedKey = Object.keys(topicData).find(key => 
      key.toLowerCase().includes(subTopicClean.toLowerCase()) || 
      subTopicClean.toLowerCase().includes(key.toLowerCase())
    );
    if (matchedKey) {
      entry = topicData[matchedKey];
    }
  }

  // Fallback to first available subtopic if still undefined
  if (!entry) {
    const keys = Object.keys(topicData);
    if (keys.length > 0) {
      entry = topicData[keys[0]];
    }
  }

  if (!entry) return "";

  // Merge deepened database entry if available
  const dbTopic = deepenedPaper1Entries[topicClean];
  if (dbTopic) {
    const dbEntry = dbTopic[subTopicClean];
    if (dbEntry) {
      entry = {
        ...entry,
        ...dbEntry,
      } as TextbookRAGEntry;
    }
  }

  return `
--- TEXTBOOK RAG REFERENCE CONTEXT (${paperClean} - ${topicClean}: ${subTopicClean}) ---
Theorists & Researchers: ${entry.theorists.join(", ")}

Core Terms & Academic Definitions:
${Object.entries(entry.keyTerms).map(([term, def]) => `- **${term}**: ${def}`).join("\n")}

Collins Textbook (Haralambos & Holborn et al.) Key Focus:
${entry.collinsFocus}

CUP Textbook (Livesey & Blundell) Key Focus:
${entry.cupFocus}

Essential Evaluation Points (AO3):
${entry.evaluationPoints.map(point => `- ${point}`).join("\n")}

Key Studies & Contemporary Examples:
${entry.keyStudies ? entry.keyStudies.map(study => `- **${study.researcher}** (${study.study}): ${study.findings}`).join("\n") : "N/A"}
${entry.contemporaryExamples ? entry.contemporaryExamples.map(ex => `- ${ex}`).join("\n") : ""}

Assessment Pitfalls & Synoptic Links:
${entry.commonMisconceptions ? "\nCommon Misconceptions (AVOID):" : ""}${entry.commonMisconceptions ? entry.commonMisconceptions.map(miss => `\n- ${miss}`).join("") : ""}
${entry.synopticLinks ? "\nSynoptic Links (AO2/AO3 Bonus):" : ""}${entry.synopticLinks ? entry.synopticLinks.map(link => `\n- ${link}`).join("") : ""}

${entry.keyStatistics ? `Key Statistics & Trend Data:\n${entry.keyStatistics.map(stat => `- ${stat}`).join("\n")}\n` : ""}${entry.essayArguments ? `Core Essay Debates:\n- For:\n${entry.essayArguments.for.map(arg => `  - ${arg}`).join("\n")}\n- Against:\n${entry.essayArguments.against.map(arg => `  - ${arg}`).join("\n")}\n` : ""}${entry.theoristQuotes ? `Direct Theorist Quotes:\n${entry.theoristQuotes.map(q => `- "${q.quote}" (${q.theorist})`).join("\n")}\n` : ""}--------------------------------------------------
`;
}

/**
 * Searches the RAG database based on free text queries (such as past paper question texts).
 * Evaluates keywords to find the most relevant sociological sub-topic context.
 */
export function searchSociologyRAGByQuestion(paperTitle: string, questionText: string): string {
  const paperMatch = paperTitle.match(/Paper\s*(\d)/i);
  const paperKey = paperMatch ? `Paper ${paperMatch[1]}` : "Paper 1";
  const questionLower = questionText.toLowerCase();

  const paperData = sociologyRAG[paperKey];
  if (!paperData) return "";

  // 1. Keyword mapping to topics
  let selectedTopic = "";
  let selectedSubTopic = "";

  if (paperKey === "Paper 1") {
    if (questionLower.includes("socialis") || questionLower.includes("nurture") || questionLower.includes("nature") || questionLower.includes("feral")) {
      selectedTopic = "Socialisation";
      if (questionLower.includes("nurture") || questionLower.includes("nature")) {
        selectedSubTopic = "The Nature vs Nurture Debate";
      } else if (questionLower.includes("feral") || questionLower.includes("isolat")) {
        selectedSubTopic = "Feral Children and Social Isolation";
      } else if (questionLower.includes("agency") || questionLower.includes("agencies") || questionLower.includes("peer") || questionLower.includes("media")) {
        selectedSubTopic = "Agencies of Socialisation (Family, Peer Group, Media, etc.)";
      } else {
        selectedSubTopic = "Primary vs Secondary Socialisation";
      }
    } else if (questionLower.includes("control") || questionLower.includes("conform") || questionLower.includes("deviance") || questionLower.includes("repressive") || questionLower.includes("ideological") || questionLower.includes("hegemony")) {
      selectedTopic = "Social Control";
      if (questionLower.includes("conformity") || questionLower.includes("deviance")) {
        selectedSubTopic = "Conformity and Deviance";
      } else if (questionLower.includes("resistance")) {
        selectedSubTopic = "Resistance to Social Control";
      } else if (questionLower.includes("power") || questionLower.includes("authority")) {
        selectedSubTopic = "Power and Authority";
      } else {
        selectedSubTopic = "Formal vs Informal Social Control";
      }
    } else if (questionLower.includes("questionnaire") || questionLower.includes("response rate") || questionLower.includes("pilot") || questionLower.includes("survey") || questionLower.includes("sample")) {
      selectedTopic = "Methods";
      if (questionLower.includes("pilot")) {
        selectedSubTopic = "Pilot Studies";
      } else if (questionLower.includes("sample") || questionLower.includes("sampling")) {
        selectedSubTopic = "Sampling (Random, Stratified, Quota, Snowball)";
      } else {
        selectedSubTopic = "Questionnaires (Postal/Online)";
      }
    } else if (questionLower.includes("interview") || questionLower.includes("rapport") || questionLower.includes("bias")) {
      selectedTopic = "Methods";
      selectedSubTopic = "Interviews (Structured/Unstructured/Semi/Group)";
    } else if (questionLower.includes("observ") || questionLower.includes("hawthorne") || questionLower.includes("covert") || questionLower.includes("overt") || questionLower.includes("verstehen")) {
      selectedTopic = "Methods";
      selectedSubTopic = "Observations (Participant/Non-Participant, Overt/Covert)";
    } else if (questionLower.includes("experiment") || questionLower.includes("field") || questionLower.includes("laboratory")) {
      selectedTopic = "Methods";
      selectedSubTopic = "Experiments (Lab/Field)";
    } else if (questionLower.includes("positivis") || questionLower.includes("interpretivis") || questionLower.includes("science") || questionLower.includes("fact") || questionLower.includes("objective")) {
      selectedTopic = "Theory";
      if (questionLower.includes("value") || questionLower.includes("objective")) {
        selectedSubTopic = "Objectivity and Value-Freedom";
      } else {
        selectedSubTopic = "Positivism vs Interpretivism";
      }
    } else {
      selectedTopic = "Identity";
      if (questionLower.includes("class")) {
        selectedSubTopic = "Social Class Identity (Savage, Bourdieu, Skeggs)";
      } else if (questionLower.includes("gender") || questionLower.includes("female") || questionLower.includes("male")) {
        selectedSubTopic = "Gender Identity (Oakley, McRobbie, Connell)";
      } else if (questionLower.includes("ethnic") || questionLower.includes("race")) {
        selectedSubTopic = "Ethnic Identity (Modood, Hall, Gilroy)";
      } else if (questionLower.includes("age") || questionLower.includes("youth") || questionLower.includes("elder")) {
        selectedSubTopic = "Age Identity (Postman, Featherstone, Hepworth)";
      } else if (questionLower.includes("disability") || questionLower.includes("impair")) {
        selectedSubTopic = "Disability and Identity (Medical vs Social Models)";
      } else if (questionLower.includes("global") || questionLower.includes("cyber")) {
        selectedSubTopic = "Globalisation and Identity (Hybridity, Cyber-identities)";
      } else {
        selectedSubTopic = "The Social Construction of Identity (Mead, Cooley, Goffman)";
      }
    }
  } else if (paperKey === "Paper 2") {
    if (questionLower.includes("diversity") || questionLower.includes("structure") || questionLower.includes("cohabit") || questionLower.includes("divorce") || questionLower.includes("pluralist") || questionLower.includes("stacey") || questionLower.includes("beck") || questionLower.includes("giddens")) {
      selectedTopic = "Family Diversity";
      if (questionLower.includes("divorce") || questionLower.includes("cohabit") || questionLower.includes("marriage")) {
        selectedSubTopic = "Cohabitation, Divorce, and Singlehood";
      } else if (questionLower.includes("ethnic") || questionLower.includes("cultural")) {
        selectedSubTopic = "Cultural and Ethnic Diversity";
      } else if (questionLower.includes("sex") || questionLower.includes("orientation") || questionLower.includes("gay") || questionLower.includes("lesbian")) {
        selectedSubTopic = "Sexual Orientation Diversity";
      } else if (questionLower.includes("cycle") || questionLower.includes("generation")) {
        selectedSubTopic = "Life Cycle and Generational Diversity";
      } else {
        selectedSubTopic = "Diversity and Postmodern Choice";
      }
    } else if (questionLower.includes("child") || questionLower.includes("aries") || questionLower.includes("toxic") || questionLower.includes("parent") || questionLower.includes("generation")) {
      selectedTopic = "Childhood";
      if (questionLower.includes("parent") || questionLower.includes("relat")) {
        selectedSubTopic = "Parenthood and Family Relationships";
      } else if (questionLower.includes("change") || questionLower.includes(" Victorian") || questionLower.includes("history")) {
        selectedSubTopic = "Historical Changes in Childhood";
      } else if (questionLower.includes("future") || questionLower.includes("toxic")) {
        selectedSubTopic = "The Future of Childhood (Postman, Palmer)";
      } else if (questionLower.includes("cross") || questionLower.includes("world") || questionLower.includes("bolivia")) {
        selectedSubTopic = "Cross-cultural Variations in Childhood";
      } else {
        selectedSubTopic = "Social Construction of Childhood (Ariès)";
      }
    } else if (questionLower.includes("role") || questionLower.includes("power") || questionLower.includes("equality") || questionLower.includes("symmetr") || questionLower.includes("division of labour") || questionLower.includes("domestic") || questionLower.includes("burden") || questionLower.includes("conjugal") || questionLower.includes("violence") || questionLower.includes("abuse")) {
      selectedTopic = "Gender Roles";
      if (questionLower.includes("division") || questionLower.includes("labour") || questionLower.includes("housework")) {
        selectedSubTopic = "Domestic Division of Labour";
      } else if (questionLower.includes("power") || questionLower.includes("decision") || questionLower.includes("finance")) {
        selectedSubTopic = "Power and Decision Making (Pahl & Vogler)";
      } else if (questionLower.includes("violence") || questionLower.includes("abuse")) {
        selectedSubTopic = "Domestic Violence";
      } else if (questionLower.includes("triple") || questionLower.includes("emotion")) {
        selectedSubTopic = "The 'Triple Shift' and 'Dual Burden'";
      } else {
        selectedSubTopic = "Conjugal Roles (Bott, Willmott & Young)";
      }
    } else if (questionLower.includes("birth") || questionLower.includes("fertility") || questionLower.includes("death") || questionLower.includes("expectancy") || questionLower.includes("migrat") || questionLower.includes("ageing") || questionLower.includes("demographic") || questionLower.includes("policy")) {
      selectedTopic = "Demography";
      if (questionLower.includes("birth") || questionLower.includes("fertility")) {
        selectedSubTopic = "Birth Rates and Fertility";
      } else if (questionLower.includes("death") || questionLower.includes("expectancy")) {
        selectedSubTopic = "Death Rates and Life Expectancy";
      } else if (questionLower.includes("migrat") || questionLower.includes("global")) {
        selectedSubTopic = "Migration and Globalisation";
      } else if (questionLower.includes("ageing")) {
        selectedSubTopic = "The Ageing Population";
      } else {
        selectedSubTopic = "Impact of Social Policy on Demography";
      }
    } else {
      selectedTopic = "Theories of Family";
      if (questionLower.includes("capital") || questionLower.includes("engels") || questionLower.includes("zaretsky") || questionLower.includes("class")) {
        selectedSubTopic = "Marxist (Engels, Zaretsky)";
      } else if (questionLower.includes("femin") || questionLower.includes("patriarch") || questionLower.includes("woman") || questionLower.includes("ansley") || questionLower.includes("oakley")) {
        selectedSubTopic = "Feminist (Oakley, Firestone, Greer)";
      } else if (questionLower.includes("postmodern") || questionLower.includes("choice") || questionLower.includes("stacey") || questionLower.includes("pure")) {
        selectedSubTopic = "Postmodernist (Stacey, Giddens, Beck)";
      } else if (questionLower.includes("wright") || questionLower.includes("welfare") || questionLower.includes("underclass") || questionLower.includes("murray")) {
        selectedSubTopic = "New Right Perspective";
      } else {
        selectedSubTopic = "Functionalist (Murdock, Parsons)";
      }
    }
  } else if (paperKey === "Paper 3") {
    if (questionLower.includes("class") || questionLower.includes("attainment") || questionLower.includes("ethnic") || questionLower.includes("gender") || questionLower.includes("bourdieu") || questionLower.includes("reay") || questionLower.includes("capital") || questionLower.includes("bernstein") || questionLower.includes("language") || questionLower.includes("depriv")) {
      selectedTopic = "Achievement";
      if (questionLower.includes("gender") || questionLower.includes("boy") || questionLower.includes("girl") || questionLower.includes("femin")) {
        selectedSubTopic = "Gender (External vs Internal Factors)";
      } else if (questionLower.includes("ethnic") || questionLower.includes("race") || questionLower.includes("racism") || questionLower.includes("sewell") || questionLower.includes("gillborn")) {
        selectedSubTopic = "Ethnicity (Language, Family, Racism)";
      } else if (questionLower.includes("intersection")) {
        selectedSubTopic = "Intersectionality in Achievement";
      } else {
        selectedSubTopic = "Social Class (Material vs Cultural Deprivation)";
      }
    } else if (questionLower.includes("meritocracy") || questionLower.includes("mobility") || questionLower.includes("wealth") || questionLower.includes("sift") || questionLower.includes("sort") || questionLower.includes("allocation")) {
      selectedTopic = "Meritocracy";
      if (questionLower.includes("mobility")) {
        selectedSubTopic = "Social Mobility";
      } else if (questionLower.includes("allocation") || questionLower.includes("davis")) {
        selectedSubTopic = "Role Allocation";
      } else if (questionLower.includes("opportunity") || questionLower.includes("outcome") || questionLower.includes("starting")) {
        selectedSubTopic = "Equality of Opportunity vs Outcome";
      } else {
        selectedSubTopic = "The Myth of Meritocracy";
      }
    } else if (questionLower.includes("hidden") || questionLower.includes("label") || questionLower.includes("setting") || questionLower.includes("streaming") || questionLower.includes("banding") || questionLower.includes("subculture") || questionLower.includes("willis") || questionLower.includes("relationship") || questionLower.includes("pupil")) {
      selectedTopic = "Hidden Curriculum";
      if (questionLower.includes("willis") || questionLower.includes("subculture") || questionLower.includes("resistance") || questionLower.includes("lads")) {
        selectedSubTopic = "Subcultures and Resistance (Willis)";
      } else if (questionLower.includes("setting") || questionLower.includes("streaming") || questionLower.includes("banding")) {
        selectedSubTopic = "Setting and Streaming";
      } else if (questionLower.includes("relationship") || questionLower.includes("ideal pupil")) {
        selectedSubTopic = "Teacher-Pupil Relationships";
      } else {
        selectedSubTopic = "Labelling and Self-Fulfilling Prophecy";
      }
    } else if (questionLower.includes("market") || questionLower.includes("choice") || questionLower.includes("privatis") || questionLower.includes("compensat") || questionLower.includes("global") || questionLower.includes("vocational") || questionLower.includes("policy") || questionLower.includes("standard")) {
      selectedTopic = "Policy";
      if (questionLower.includes("privat")) {
        selectedSubTopic = "Privatisation of Education";
      } else if (questionLower.includes("compensat") || questionLower.includes("sure start")) {
        selectedSubTopic = "Compensatory Education";
      } else if (questionLower.includes("global") || questionLower.includes("pisa")) {
        selectedSubTopic = "Globalisation and Educational Policy";
      } else if (questionLower.includes("vocational")) {
        selectedSubTopic = "Vocationalism";
      } else {
        selectedSubTopic = "Marketisation and Choice";
      }
    } else {
      selectedTopic = "Theories of Education";
      if (questionLower.includes("durkheim") || questionLower.includes("parsons") || questionLower.includes("solidar")) {
        selectedSubTopic = "Functionalist (Durkheim, Parsons, Davis & Moore)";
      } else if (questionLower.includes("althusser") || questionLower.includes("bowles") || questionLower.includes("capital")) {
        selectedSubTopic = "Marxist (Althusser, Bowles & Gintis)";
      } else if (questionLower.includes("interpret") || questionLower.includes("interact") || questionLower.includes("rist")) {
        selectedSubTopic = "Interactionist (Hargreaves, Rist)";
      } else if (questionLower.includes("femin")) {
        selectedSubTopic = "Feminist View";
      } else {
        selectedSubTopic = "Social Democratic Perspective";
      }
    }
  } else if (paperKey === "Paper 4") {
    if (questionLower.includes("media") || questionLower.includes("conglomerate") || questionLower.includes("audience") || questionLower.includes("baudrillard") || questionLower.includes("news") || questionLower.includes("broadcast")) {
      selectedTopic = "Media";
      if (questionLower.includes("ownership") || questionLower.includes("pluralist") || questionLower.includes("marxist")) {
        selectedSubTopic = "Ownership and Control (Marxist vs Pluralist)";
      } else if (questionLower.includes("represent") || questionLower.includes("stereotype") || questionLower.includes("gaze")) {
        selectedSubTopic = "Representation of Gender, Class, Ethnicity, and Age";
      } else if (questionLower.includes("new media") || questionLower.includes("digital") || questionLower.includes("internet")) {
        selectedSubTopic = "New Media and Digital Technology";
      } else if (questionLower.includes("effect") || questionLower.includes("hypodermic") || questionLower.includes("gratification")) {
        selectedSubTopic = "Media Effects Models (Hypodermic Syringe, Cultural Effects, Uses & Gratifications)";
      } else if (questionLower.includes("panic") || questionLower.includes("cohen") || questionLower.includes("folk devil")) {
        selectedSubTopic = "Moral Panics (Cohen)";
      } else {
        selectedSubTopic = "Globalisation and the Media";
      }
    } else if (questionLower.includes("religion") || questionLower.includes("secular") || questionLower.includes("belong") || questionLower.includes("church") || questionLower.includes("spiritual") || questionLower.includes("weber") || questionLower.includes("protestant")) {
      selectedTopic = "Religion";
      if (questionLower.includes("secularisation") || questionLower.includes("decline")) {
        selectedSubTopic = "Secularisation Debate (Wilson, Berger, Stark & Bainbridge)";
      } else if (questionLower.includes("fundamentalism") || questionLower.includes("literalism")) {
        selectedSubTopic = "Fundamentalism";
      } else if (questionLower.includes("change") || questionLower.includes("weber") || questionLower.includes("capitalism")) {
        selectedSubTopic = "Religion and Social Change (Weber)";
      } else if (questionLower.includes("cult") || questionLower.includes("sect") || questionLower.includes("new religious movement") || questionLower.includes("nrm")) {
        selectedSubTopic = "New Religious Movements and Cults";
      } else if (questionLower.includes("feminist") || questionLower.includes("patriarchy")) {
        selectedSubTopic = "Feminist (El Saadawi, Armstrong)";
      } else if (questionLower.includes("marxist") || questionLower.includes("opium")) {
        selectedSubTopic = "Marxist (Marx, Engels)";
      } else {
        selectedSubTopic = "Functionalist (Durkheim, Malinowski, Parsons)";
      }
    } else {
      selectedTopic = "Globalisation";
      if (questionLower.includes("modernisation") || questionLower.includes("rostow")) {
        selectedSubTopic = "Modernisation Theory (Rostow)";
      } else if (questionLower.includes("dependency") || questionLower.includes("frank")) {
        selectedSubTopic = "Dependency Theory (Frank)";
      } else if (questionLower.includes("world system") || questionLower.includes("wallerstein")) {
        selectedSubTopic = "World Systems Theory (Wallerstein)";
      } else if (questionLower.includes("inequality") || questionLower.includes("poverty")) {
        selectedSubTopic = "Global Inequality and Poverty";
      } else if (questionLower.includes("migration") || questionLower.includes("transnational")) {
        selectedSubTopic = "Migration and Transnationalism";
      } else if (questionLower.includes("culture") || questionLower.includes("hybridity")) {
        selectedSubTopic = "Global Culture and Hybridity";
      } else {
        selectedSubTopic = "Global Social Movements";
      }
    }
  }

  if (selectedTopic && selectedSubTopic) {
    const topicObj = paperData[selectedTopic];
    if (topicObj) {
      let entry = topicObj[selectedSubTopic];
      if (entry) {
        // Merge deepened database entry if available
        const dbTopic = deepenedPaper1Entries[selectedTopic];
        if (dbTopic) {
          const dbEntry = dbTopic[selectedSubTopic];
          if (dbEntry) {
            entry = {
              ...entry,
              ...dbEntry,
            } as TextbookRAGEntry;
          }
        }
        return `
--- TEXTBOOK RAG REFERENCE CONTEXT (${paperKey} - ${selectedTopic}: ${selectedSubTopic}) ---
Theorists & Researchers: ${entry.theorists.join(", ")}

Core Terms & Academic Definitions:
${Object.entries(entry.keyTerms).map(([term, def]) => `- **${term}**: ${def}`).join("\n")}

Collins Textbook (Haralambos & Holborn et al.) Key Focus:
${entry.collinsFocus}

CUP Textbook (Livesey & Blundell) Key Focus:
${entry.cupFocus}

Essential Evaluation Points (AO3):
${entry.evaluationPoints.map(point => `- ${point}`).join("\n")}

Key Studies & Contemporary Examples:
${entry.keyStudies ? entry.keyStudies.map(study => `- **${study.researcher}** (${study.study}): ${study.findings}`).join("\n") : "N/A"}
${entry.contemporaryExamples ? entry.contemporaryExamples.map(ex => `- ${ex}`).join("\n") : ""}

Assessment Pitfalls & Synoptic Links:
${entry.commonMisconceptions ? "\nCommon Misconceptions (AVOID):" : ""}${entry.commonMisconceptions ? entry.commonMisconceptions.map(miss => `\n- ${miss}`).join("") : ""}
${entry.synopticLinks ? "\nSynoptic Links (AO2/AO3 Bonus):" : ""}${entry.synopticLinks ? entry.synopticLinks.map(link => `\n- ${link}`).join("") : ""}

${entry.keyStatistics ? `Key Statistics & Trend Data:\n${entry.keyStatistics.map(stat => `- ${stat}`).join("\n")}\n` : ""}${entry.essayArguments ? `Core Essay Debates:\n- For:\n${entry.essayArguments.for.map(arg => `  - ${arg}`).join("\n")}\n- Against:\n${entry.essayArguments.against.map(arg => `  - ${arg}`).join("\n")}\n` : ""}${entry.theoristQuotes ? `Direct Theorist Quotes:\n${entry.theoristQuotes.map(q => `- "${q.quote}" (${q.theorist})`).join("\n")}\n` : ""}--------------------------------------------------
`;
      }
    }
  }

  return "";
}
