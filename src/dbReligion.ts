import { TextbookRAGEntry } from './sociologyRAG';

export const religionDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Functionalist (Durkheim, Malinowski, Parsons)": {
    theorists: ["Émile Durkheim", "Bronislaw Malinowski", "Talcott Parsons", "Robert N. Bellah", "Clifford Geertz", "Steven Lukes"],
    keyTerms: {
      "The Sacred and the Profane": "Durkheim's foundational distinction: the sacred represents set-apart, forbidden things that inspire awe and reverence (symbolizing society); the profane represents mundane, ordinary, everyday utilitarian things.",
      "Totemism": "The worship of a sacred animal or plant (the totem) representing the clan, which Durkheim identified among Australian Aboriginal tribes as the most basic, elemental form of religion.",
      "Collective Conscience": "The shared beliefs, moral values, and collective representations that integrate individuals into a cohesive moral community.",
      "Collective Effervescence": "The intense collective emotional energy and transcendent unity experienced by individuals during communal sacred religious rituals.",
      "Psychological Functions of Religion": "Malinowski's theory: religion provides emotional comfort, stability, and coping mechanisms during unpredictable crises of life (birth, puberty, illness, death) and high-risk endeavors (e.g., ocean fishing).",
      "Universe of Meaning / Value Integration": "Parsons' concept: religion legitimates core societal norms and answers ultimate existential questions (why do good people suffer?), preventing anomie and social despair.",
      "Civil Religion": "Robert Bellah's concept: a secular, overarching faith attached to the symbols, rituals, and history of the nation-state (e.g., American civil religion: 'In God We Trust', Fourth of July, flag reverence) that unifies multi-faith societies."
    },
    collinsFocus: "Details Durkheim's classic 1912 text 'The Elementary Forms of Religious Life' (analyzing Central Australian Arunta clan totemism). Explores Malinowski's anthropological fieldwork in the Trobriand Islands (contrast between lagoon fishing and ocean fishing rituals) and Parsons' functional integration thesis.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of functionalist sociological theories of religion. Evaluates Robert Bellah's American civil religion thesis alongside severe empirical critiques: functionalism's failure to account for religion as a major source of violent social conflict, persecution, and global terrorism.",
    evaluationPoints: [
      "Religion as a Source of Conflict: Completely ignores that religion frequently acts as a major catalyst for violent division, warfare, and civil strife (e.g., Sunni vs. Shia in the Middle East, The Troubles in Northern Ireland, Israeli-Palestinian conflict).",
      "Secularisation and Diversity: Functionalist consensus theories reflect small, homogenous traditional tribes; in modern pluralistic, multi-cultural, secular societies, religion cannot serve as a universal 'social cement' (Wilson).",
      "Marxist Critique: Functionalists mistake ruling-class ideological mystification for genuine value consensus; religion legitimates exploitation and social hierarchy (Marx).",
      "Feminist Critique: Functionalist 'social solidarity' systematically legitimates the patriarchal subordination of women through religious dogma and male-only priesthoods (Armstrong, Daly).",
      "Durkheim's Methodology: Durkheim relied on secondary ethnographic accounts of a tiny, unrepresentative sample of Aboriginal tribes, over-generalizing from totemism to all world religions."
    ],
    keyStudies: [
      {
        researcher: "Émile Durkheim (1912/1915)",
        study: "The Elementary Forms of the Religious Life",
        method: "Anthropological synthesis of secondary ethnographic accounts of the Arunta Aboriginal tribes of Central Australia.",
        findings: "Concluded that when people worship the sacred totem, they are unknowingly worshipping society itself; religious rituals generate collective effervescence that reinforces social solidarity and moral boundaries."
      },
      {
        researcher: "Bronislaw Malinowski (1925/1948)",
        study: "Magic, Science and Religion (Trobriand Islands Fieldwork)",
        method: "Longitudinal ethnographic participant observation in the Pacific Trobriand Islands.",
        findings: "Demonstrated that Trobriand Islanders used magical religious rituals only when facing high-risk, unpredictable ocean fishing (not safe lagoon fishing), proving religion functions as an emotional psychological crutch in crises."
      },
      {
        researcher: "Robert N. Bellah (1967)",
        study: "Civil Religion in America",
        method: "Historical-sociological discourse analysis of presidential inaugural speeches, national holidays, and public monuments.",
        findings: "Proved that a non-sectarian 'civil religion' exists in the USA that unifies a multi-ethnic, multi-denominational society by sacralizing the American flag, the Constitution, and historical national martyrs (Lincoln, JFK)."
      }
    ],
    contemporaryExamples: [
      "National mourning rituals following the death of Queen Elizabeth II in the UK, where collective state pageantry and church ceremonies generated nationwide collective effervescence and social integration.",
      "American presidential candidates concluding speeches with 'God bless America', invoking non-denominational civil religion to appeal across diverse religious electorates."
    ],
    commonMisconceptions: [
      "Assuming Durkheim believed God is real; Durkheim explicitly argued God is a social construction—a symbolic projection of the power of society over the individual.",
      "Confusing Malinowski's functionalism with Durkheim's; Durkheim emphasized macro-societal social solidarity, while Malinowski focused on micro-psychological comfort during individual life crises."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Durkheim's value consensus, social facts, and functionalism).",
      "Links to Paper 3 Education (Durkheim's view of schooling teaching social solidarity and shared history).",
      "Links to Paper 4 Religion (Secularisation debate and the decline of religious social cement)."
    ],
    keyStatistics: [
      "Less than 38% of the UK population identified as Christian in the 2021 Census (the first time Christianity fell below a majority), demonstrating the breakdown of universal religious solidarity in Britain (ONS, 2021).",
      "Over 88% of regular churchgoers in cross-national surveys report higher subjective well-being and lower anxiety during personal health crises, supporting Malinowski's psychological comfort thesis (Gallup World Poll, 2022)."
    ],
    essayArguments: {
      for: [
        "Religious rituals and sacred ceremonies provide vital social integration, collective identity, and psychological resilience during traumatic life crises such as bereavement.",
        "Civil religion successfully unites diverse, multi-faith modern nations around shared civic morality and constitutional values."
      ],
      against: [
        "Religion has historically been and continues to be one of the primary drivers of bloody warfare, persecution, sectarian hatred, and global terrorism.",
        "Functionalism ignores how religious institutions uphold patriarchal oppression, homophobia, and ruling-class economic inequality under the guise of 'harmony'."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Émile Durkheim (1912)",
        quote: "A religion is a unified system of beliefs and practices relative to sacred things... which unite into one single moral community called a Church, all those who adhere to them."
      },
      {
        theorist: "Bronislaw Malinowski (1925)",
        quote: "Religion enables man to maintain his poise and his mental integrity in fits of anger, in the throes of hate, of unrequited love, of despair and anxiety."
      }
    ]
  },

  "Marxist (Marx, Engels)": {
    theorists: ["Karl Marx", "Friedrich Engels", "Otto Maduro", "Antonio Gramsci", "Louis Althusser", "Dwight Billings"],
    keyTerms: {
      "Opium of the People": "Marx's famous metaphor: religion acts like a narcotic, dulling the severe physical and psychological pain of capitalist exploitation without curing the underlying economic disease.",
      "Ideological State Apparatus (ISA)": "Althusser's concept: religious institutions transmit ruling-class ideology under the guise of spiritual truth, generating false class consciousness.",
      "Legitimation of Social Inequality": "Religious teachings presenting the class hierarchy, poverty, and suffering as divinely ordained by God (e.g., 'The rich man in his castle, the poor man at his gate, God made them high and lowly').",
      "Theodicy of Disprivilege": "Weber/Marx concept: religious doctrines promising that earthly poverty and suffering will be rewarded with eternal heavenly paradise ('It is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom of God').",
      "Alienation (Entfremdung)": "The dehumanizing experience where industrial workers lose control over their labor, products, and humanity; workers project their alienated human potential onto an imaginary heavenly deity.",
      "Relative Autonomy of Religion": "Neo-Marxist concept (Gramsci, Maduro): religion is not always an instrument of the ruling class, but possesses autonomy that can be mobilized by radical clergy to challenge capitalist oppression.",
      "Liberation Theology": "A radical Latin American Catholic movement in the 1960s-1980s where priests actively fought alongside peasants against military dictatorships and capitalist land dispossession."
    },
    collinsFocus: "Details Marx's materialist conception of religion: religion as part of the ideological superstructure reflecting the economic infrastructure. Explores how religion mystifies exploitation and justifies feudal monarchies ('Divine Right of Kings') and modern capitalist inequalities.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Classical vs Neo-Marxist theories of religion. Evaluates Otto Maduro's study of Liberation Theology in Latin America and Dwight Billings' study of coal miners versus textile workers, proving religion can act as a powerful revolutionary force for social change (organic intellectuals).",
    evaluationPoints: [
      "Secularisation Paradox: If capitalism requires religion to pacify workers and legitimize exploitation, why has western capitalist Europe undergone massive secularisation and church decline without revolution?",
      "Religion as a Force for Progressive Change: Traditional Marxism fails to explain religion driving anti-capitalist revolutions and civil rights movements (Martin Luther King Jr., Archbishop Desmond Tutu, Polish Solidarity).",
      "Neo-Marxist Resolution (Maduro, Gramsci): Acknowledges that while religion often acts as a conservative ideological weapon, it can also provide the ideological language and institutional resources for subordinate classes to rebel.",
      "Functionalist Counter-Argument: Functionalists argue Marx pathologizes religion, ignoring the genuine psychological comfort, moral guidance, and communal solidarity it offers to believers.",
      "Economic Reductionism: Reduces complex spiritual experiences, existential quest for meaning, and theological debates to crude economic class interests."
    ],
    keyStudies: [
      {
        researcher: "Karl Marx (1844/1970)",
        study: "A Contribution to the Critique of Hegel's Philosophy of Right",
        method: "Philosophical, historical materialist, and political-economic dialectical analysis.",
        findings: "Argued that religion is the sigh of the oppressed creature, the heart of a heartless world; it reflects human alienation and functions as an ideological drug that must be abolished to achieve real human emancipation."
      },
      {
        researcher: "Otto Maduro (1982)",
        study: "Religion and Social Conflicts",
        method: "Comparative historical and theoretical sociological analysis of Latin American Catholic church movements.",
        findings: "Demonstrated that under oppressive Latin American military dictatorships, Catholic clergy developed Liberation Theology, turning churches into the only available revolutionary institutions fighting for peasant land rights."
      },
      {
        researcher: "Dwight Billings (1990)",
        study: "Religion as Praxis in the American South: Textile Workers and Coal Miners in Kentucky",
        method: "Comparative historical case study of two working-class communities.",
        findings: "Showed that religion operated as a conservative pacifier among textile workers (where preachers were funded by factory owners), but operated as a revolutionary tool of resistance among coal miners (where independent preachers acted as union leaders)."
      }
    ],
    contemporaryExamples: [
      "The Hindu caste system historically using the concept of reincarnation and karma to convince lower-caste Dalits ('Untouchables') that their poverty is punishment for sins in past lives, legitimating social hierarchy.",
      "The US Christian Right megachurches preaching the 'Prosperity Gospel' (claiming God rewards faithful Christians with material wealth and financial success), sanctifying billionaire capitalism."
    ],
    commonMisconceptions: [
      "Assuming Marx believed religion was purely an evil conspiracy invented by priests; Marx viewed religion as a genuine expression of human suffering ('the heart of a heartless world') caused by the real misery of capitalism.",
      "Believing all Marxists dismiss religion as conservative; Neo-Marxists (Gramsci, Maduro, Bloch) emphasize religion's 'dual character' as both an ideological weapon and a potential revolutionary tool."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist historical materialism, false consciousness, and hegemony).",
      "Links to Paper 3 Education (Althusser's Ideological State Apparatuses and Bowles & Gintis).",
      "Links to Paper 4 Religion (Religion and social change, Weber's Protestant Ethic)."
    ],
    keyStatistics: [
      "In global surveys across 40 countries, lower-income individuals report significantly higher rates of daily prayer and religious belief (over 85%) than high-income individuals (under 45%), aligning with Marx's alienation thesis (Pew Research Center, 2022).",
      "The top 10 televangelist megachurch ministries in the United States generate over $2 billion in annual tax-exempt donations while preaching that wealth accumulation is God's will (Forbes, 2023)."
    ],
    essayArguments: {
      for: [
        "Religious dogma has historically functioned to justify feudal monarchy, slavery, the Indian caste system, and modern capitalist inequality by framing poverty as a divine test for heavenly reward.",
        "Corporate and conservative political elites actively fund religious megachurches and media networks to suppress trade unionism and promote free-market policies."
      ],
      against: [
        "Religion has frequently served as the primary ideological catalyst and organizing vehicle for progressive liberation movements, such as the US Civil Rights movement and South African anti-Apartheid struggles.",
        "Marxist theory is economically deterministic and fails to explain why deeply religious individuals across classes experience authentic spiritual meaning and psychological fulfillment."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Karl Marx (1844)",
        quote: "Religious suffering is, at one and the same time, the expression of real suffering and a protest against real suffering. Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people."
      },
      {
        theorist: "Otto Maduro (1982)",
        quote: "Religion is not necessarily a conservative force; under certain historical conditions, it can become an indispensable instrument for the liberation of the oppressed."
      }
    ]
  },

  "Feminist (El Saadawi, Armstrong)": {
    theorists: ["Nawal El Saadawi", "Karen Armstrong", "Mary Daly", "Linda Woodhead", "Simone de Beauvoir", "Jean Holm", "Saida Mir-Hosseini"],
    keyTerms: {
      "Patriarchal Religious Ideology": "The systematic use of religious texts, dogmas, and traditions to justify male authority, female subordination, and the policing of women's bodies.",
      "Goddess Religions": "Karen Armstrong's thesis: ancient, pre-monotheistic religions and earth-fertility cults centered on female goddesses that were violently eradicated by male monotheistic invasions.",
      "Stained Glass Ceiling": "The invisible institutional barrier preventing women from being ordained into top leadership hierarchies and bishoprics in religious institutions.",
      "Religious Compensation": "Simone de Beauvoir's adaptation of Marx: religion deceives women into accepting second-class earthly status by promising that passive, submissive, maternal sacrifice will be rewarded in heaven.",
      "Veiling (Hijab / Niqab)": "The practice of modest dress, contested in sociology as either an instrument of patriarchal male control or an empowering symbol of agency, feminist liberation, and anti-imperialist cultural defense.",
      "Spiritual Shopping / Holistic Milieu": "Linda Woodhead's concept: women turning away from patriarchal traditional churches toward New Age spirituality, yoga, and holistic healing where female autonomy and emotion are celebrated.",
      "Islamic Feminism": "A reform movement (Mir-Hosseini, Wadud) arguing that the Quran promotes gender equality and that patriarchal oppression in Islamic societies is caused by male misinterpretations."
    },
    collinsFocus: "Details how religious organisations, places of worship (men dominating sacred areas), and sacred texts (scriptures written by men presenting women as temptresses like Eve or submissive mothers like Mary) enforce patriarchy. Explores Simone de Beauvoir's existentialist feminist critique.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of contemporary feminist sociology of religion. Contrasts Radical Feminist Mary Daly ('If God is male, then male is God') with Liberal and Islamic Feminist perspectives (Nawal El Saadawi showing patriarchy originates in political-economic class systems, not Islam itself, and Woodhead's concept of religious empowerment).",
    evaluationPoints: [
      "Overgeneralisation: Early radical feminists treated all religions as uniformly and irreversibly patriarchal, ignoring gender-equal traditions (Quakers, modern paganism, reform Judaism).",
      "Institutional Reform: Major religious organizations have adapted; the Church of England ordained its first female priests in 1994 and first female bishop (Libby Lane) in 2015.",
      "Intersectional Critique: White Western feminists often ethnocentrically pathologize Muslim women, failing to recognize that many educated Muslim women choose to wear the hijab as an assertive badge of cultural identity and protection against the Western male gaze.",
      "Female Religious Majority: In the West, women consistently show higher rates of religious attendance and spiritual belief than men, suggesting religion provides women with meaningful community, care networks, and social support (Woodhead).",
      "New Age Empowerment: Women dominate the rapidly growing 'holistic milieu' (New Age spirituality), which rejects male ecclesiastical hierarchies in favor of personal intuitive growth."
    ],
    keyStudies: [
      {
        researcher: "Karen Armstrong (1993)",
        study: "A History of God: The 4,000-Year Quest of Judaism, Christianity and Islam",
        method: "Historical-comparative theological and archaeological investigation.",
        findings: "Demonstrated that early human religions across the Middle East worshipped female mother goddesses; the rise of aggressive, pastoral, warrior tribes established male monotheism, rewriting scriptures to subordinate women."
      },
      {
        researcher: "Nawal El Saadawi (1980)",
        study: "The Hidden Face of Eve: Women in the Arab World",
        method: "Qualitative socio-political analysis, interviews, and medical case reflections in Egypt.",
        findings: "Proved that female genital mutilation and oppressive gender laws in the Middle East are not inherent to Islam, but are ancient cultural and economic patriarchal practices perpetuated by ruling male elites using religion as a weapon of domination."
      },
      {
        researcher: "Linda Woodhead & Paul Heelas (2005)",
        study: "The Spiritual Revolution: Why Religion is Giving Way to Spirituality (The Kendal Project)",
        method: "Mixed-methods empirical mapping (census surveys, observational field studies, and interviews) in a UK town.",
        findings: "Discovered that over 80% of participants in the holistic spiritual milieu (New Age healing, crystal work, meditation) were women seeking self-actualization outside male-dominated traditional churches."
      }
    ],
    contemporaryExamples: [
      "The global 'Woman, Life, Freedom' protests in Iran (2022-2023) following the death of Mahsa Amini, where women burned mandatory hijabs to challenge the oppressive religious morality police and state theocracy.",
      "The ongoing fierce debates within the Roman Catholic Church regarding the refusal to ordain female priests or bless same-sex unions, reflecting the stained glass ceiling."
    ],
    commonMisconceptions: [
      "Believing all feminists advocate the abolition of religion; Islamic and Liberal Christian feminists fight for egalitarian theological reinterpretation within their faith traditions.",
      "Assuming the hijab is universally a sign of forced oppression; sociological research shows many women wear the veil voluntarily as a feminist rejection of consumerist sexual objectification."
    ],
    synopticLinks: [
      "Links to Paper 2 Family (The expressive housewife role justified by religious marital vows).",
      "Links to Paper 4 Media (The male gaze and representation of women).",
      "Links to Paper 4 Religion (New Religious Movements and the secularisation debate)."
    ],
    keyStatistics: [
      "Over 65% of regular church attendees in the UK and 58% in the USA are women, yet women hold less than 15% of senior episcopal leadership roles globally (Barna Group / Church of England, 2023).",
      "Women comprise over 80% of practitioners and clients in the global £4.5 trillion holistic wellness and New Age spiritual industry (Global Wellness Institute, 2023)."
    ],
    essayArguments: {
      for: [
        "Major world religions remain thoroughly patriarchal institutions where male hierarchies control doctrines, exclude women from ultimate priesthoods, and police female sexuality.",
        "Scriptural interpretations written by ancient men have been weaponized to force women into subordinate domestic roles and justify laws restricting reproductive rights."
      ],
      against: [
        "Women actively exercise agency within religious communities, utilizing faith networks for emotional solidarity, leadership within charitable organizations, and cultural defense against secular racism.",
        "Modern spiritual movements (New Age, Wicca) and progressive Christian denominations offer decentralized, egalitarian spaces celebrating female empowerment."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Mary Daly (1973)",
        quote: "If God in 'his' heaven is a father, then by nature, it is 'natural' for men to exercise lordship over women on earth. If God is male, then male is God."
      },
      {
        theorist: "Nawal El Saadawi (1980)",
        quote: "A woman's best protection is her own independent economic status, not a patriarchal religion that reduces her to an obedient servant in the home."
      }
    ]
  },

  "Secularisation Debate (Wilson, Berger, Stark & Bainbridge)": {
    theorists: ["Bryan Wilson", "Peter Berger", "Rodney Stark & William Sims Bainbridge", "Grace Davie", "Paul Heelas & Linda Woodhead", "Steve Bruce", "Charles Taylor", "Pippa Norris & Ronald Inglehart"],
    keyTerms: {
      "Secularisation": "Bryan Wilson's classic definition: the process whereby religious thinking, practices, and institutions lose social significance.",
      "Rationalisation & Disenchantment": "Max Weber's concepts: the historical shift where magical and supernatural explanations are replaced by scientific, technical, and calculable rational thinking.",
      "Pluralisation of Worldviews": "Peter Berger's concept: the collapse of the single 'sacred canopy' into competing religious worldviews, creating a crisis of credibility where faith becomes a subjective choice rather than an objective fact.",
      "Believing Without Belonging": "Grace Davie's theory: traditional institutional church attendance has declined in Europe, but personal spiritual faith and belief in God remain high and individualized.",
      "Vicarious Religion": "Davie's concept: a small active religious minority performs rituals (weddings, funerals, national mourning) on behalf of a wider, passive population who approve of their presence.",
      "Religious Market Theory / Rational Choice": "Stark & Bainbridge's model: religion is a competitive market driven by consumer demand and supply; secularisation in Europe is caused by state religious monopolies, while competition in the USA breeds high religious vitality.",
      "Existential Security Theory": "Norris & Inglehart's theory: religious demand is highest in societies with high poverty and physical vulnerability (LEDCs/USA lack of safety nets), and lowest in egalitarian welfare states (Scandinavia).",
      "Desecularisation / Resacralisation": "The resurgence of intense religious belief, fundamentalism, and charismatic mega-churches globally in the late 20th and 21st centuries."
    },
    collinsFocus: "Details the statistical evidence for UK secularisation (collapsing Sunday church attendance, declining clergy numbers, religious marriages falling below 25%, and loss of state political power). Explores Steve Bruce's defense of the orthodox secularisation thesis against its critics.",
    cupFocus: "Explores Livesey & Blundell's rigorous deconstruction of the secularisation debate. Contrasts Eurocentric secularisation models with global realities (Stark & Bainbridge's supply-side theory, the explosive growth of Pentecostalism in the Global South, and Heelas & Woodhead's 'Spiritual Revolution' Kendal Project).",
    evaluationPoints: [
      "Eurocentric Myth (Stark & Bainbridge): Secularisation is not a universal global law, but an exceptional European phenomenon caused by lazy state church monopolies; the global South and USA remain deeply religious.",
      "Believing vs Belonging (Davie): Conflating falling church attendance with a total loss of religious belief is invalid; people practice privatized, customized spirituality at home.",
      "Data Validity Problems: Historical church attendance statistics were notoriously inflated by social pressure, while modern surveys underestimate private digital worship.",
      "Spiritual Shift, Not Secularisation: Religion is not disappearing, but evolving from traditional congregational obedience ('religion') to holistic self-actualization ('spirituality') (Kendal Project).",
      "Existential Security Validation (Norris & Inglehart): Demonstrates that secularisation occurs only when welfare states eliminate physical and economic vulnerability, explaining high US religiosity (wealthy but insecure welfare state)."
    ],
    keyStudies: [
      {
        researcher: "Bryan Wilson (1966/1982)",
        study: "Religion in Secular Society: A Sociological Comment",
        method: "Longitudinal quantitative analysis of UK and US church attendance, baptism rates, and social policy influence.",
        findings: "Demonstrated that Western industrial society has undergone inexorable secularisation: religion has lost its institutional authority over education, law, and morality, becoming a marginalized leisure pursuit."
      },
      {
        researcher: "Grace Davie (1994)",
        study: "Religion in Britain Since 1945: Believing Without Belonging",
        method: "National survey data synthesis and qualitative sociological analysis.",
        findings: "Showed that while British institutional church membership has collapsed, over 70% of citizens still express belief in God, an afterlife, or a higher power, practicing unattached 'vicarious religion'."
      },
      {
        researcher: "Pippa Norris & Ronald Inglehart (2004)",
        study: "Sacred and Secular: Religion and Politics Worldwide",
        method: "Cross-national quantitative survey analysis of the World Values Survey across 80 societies.",
        findings: "Proved the 'existential security theory': demand for religion is driven by socioeconomic vulnerability; wealthy welfare democracies become secular, while vulnerable populations remain intensely religious."
      }
    ],
    contemporaryExamples: [
      "The deconsecration and sale of hundreds of historic Christian churches across the UK and Europe, converted into skate parks, luxury apartments, or pubs due to lack of congregants.",
      "The explosive growth of Pentecostal charismatic Christianity in Brazil, Nigeria, and South Korea, where mega-churches attract tens of thousands of worshippers weekly."
    ],
    commonMisconceptions: [
      "Assuming secularisation means 'nobody believes in God anymore'; Wilson defined secularisation primarily as the loss of *institutional social significance* and political authority.",
      "Believing secularisation is an irreversible global trend; global demographic data shows that because religious populations have significantly higher fertility rates, the world as a whole is becoming more religious."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Methodological validity problems with historical statistics and survey operationalization).",
      "Links to Paper 4 Globalisation (Global migration spreading intense religious faith from LEDCs to secular European cities).",
      "Links to Paper 4 Religion (Fundamentalism as a counter-secularisation movement)."
    ],
    keyStatistics: [
      "In the 2021 UK Census, 'No Religion' was selected by 37.2% of the population (up from 14.8% in 2001), while regular Sunday church attendance dropped below 5% of the adult population (British Social Attitudes, 2023).",
      "Over 84% of the global population currently identifies with a religious group, with Islam and Pentecostal Christianity projected to grow fastest over the next three decades (Pew Research Center, 2023)."
    ],
    essayArguments: {
      for: [
        "In Western Europe, statistical indicators across church attendance, religious weddings, baptism rates, and public moral influence demonstrate an undeniable, irreversible collapse of institutional religion.",
        "Scientific rationalization, higher education, and the rise of universal state welfare systems have rendered religious supernatural explanations obsolete for everyday life."
      ],
      against: [
        "The secularisation thesis is a Eurocentric delusion; the global South, the United States, and transnational diaspora communities exhibit thriving, expanding religious vitality.",
        "Traditional religion is simply transforming into privatized 'believing without belonging' and dynamic New Age holistic spirituality rather than dying out."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Bryan Wilson (1966)",
        quote: "Secularization is the process by which religious institutions, actions, and consciousness lose their social significance."
      },
      {
        theorist: "Grace Davie (1994)",
        quote: "Religious practice in Britain is characterized by 'believing without belonging'... people still hold deep spiritual beliefs without feeling the obligation to attend church on Sunday."
      }
    ]
  },

  "Fundamentalism": {
    theorists: ["Steve Bruce", "Karen Armstrong", "Samuel P. Huntington", "Zygmunt Bauman", "Manuel Castells", "Anthony Giddens", "Martin E. Marty & R. Scott Appleby"],
    keyTerms: {
      "Religious Fundamentalism": "A modern religious movement seeking a return to the foundational, literal truths of sacred texts, characterized by absolute certainty, aggressive anti-modernism, and moral dualism.",
      "Scriptural Literalism": "The core belief that sacred holy texts (the Bible, the Quran, the Torah) are the infallible, word-for-word dictations of God that must be obeyed without historical interpretation.",
      "Cultural Defence": "Steve Bruce's concept: using religion to defend national, ethnic, or community identity against a hostile external force (e.g., Iranian revolution against Western imperialism, Polish Catholicism against Soviet communism).",
      "Cultural Transition": "Bruce's term: religion providing a stable community network and identity anchor for migrants transitioning into a foreign, secular culture.",
      "Clash of Civilisations": "Samuel Huntington's controversial thesis: post-Cold War global conflicts are no longer driven by political ideologies, but by cultural and religious fault lines between major civilizations (e.g., Western vs Islamic).",
      "Cosmopolitanism vs Fundamentalism": "Anthony Giddens' dichotomy: cosmopolitanism embraces tolerance, reflexivity, and modern choice; fundamentalism retreats into dogmatic, unquestionable certainty to escape late-modern risk.",
      "Moral Dualism ('Us vs Them')": "The Manichean division of the world into absolute good (the righteous believers) versus absolute evil (the corrupt, secular infidels).",
      "The Fundamentalism Project": "Marty & Appleby's global comparative study showing fundamentalism exists across all major world religions as a reactive defense mechanism against secular modernity."
    },
    collinsFocus: "Details the characteristics of religious fundamentalism (literalism, aggressive rejection of secular relativism, patriarchal family defense, and use of modern communication tech). Explores Steve Bruce's distinction between fundamentalism in the West (New Christian Right fighting internal moral decay) vs developing countries (fighting external Western cultural imperialism).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the sociology of fundamentalism. Evaluates Huntington's 'Clash of Civilisations' thesis and Giddens' analysis of late-modern existential anxiety alongside Bauman's view of fundamentalism as a quest for absolute certainty in a fluid, risk-filled world.",
    evaluationPoints: [
      "Huntington's Clash Critique: Heavily criticized for orientalism, essentialism, and ignoring massive internal theological and political conflicts within the Islamic and Christian worlds (e.g., Sunni vs. Shia, Liberal vs. Evangelical).",
      "Modern Irony of Fundamentalism: While preaching anti-modernism, fundamentalist movements are intensely modern phenomena that rely on 21st-century internet networks, satellite TV, and sophisticated social media propaganda.",
      "Marxist Political-Economic Critique: Fundamentalism is not caused by ancient theology; it is a desperate reaction to imperialist geopolitical interventions, drone wars, corruption, and the economic devastation of neoliberal globalization.",
      "Castells' Resistance Identity: Manuel Castells proves fundamentalism constructs powerful 'resistance identities' that provide dignity and solidarity to populations marginalized by global capitalism.",
      "Not Inherently Violent: The vast majority of religious fundamentalists practice peaceful, private pietism and conservative family lifestyles; violent extremism represents a radical fringe."
    ],
    keyStudies: [
      {
        researcher: "Martin E. Marty & R. Scott Appleby (The Fundamentalism Project) (1991-1995)",
        study: "Fundamentalisms Observed (University of Chicago 5-Volume Project)",
        method: "Massive global comparative historical and sociological investigation across Protestantism, Islam, Judaism, Hinduism, and Buddhism.",
        findings: "Demonstrated that fundamentalisms across all world religions share core family resemblances: a reactive posture fighting modern secularism, scriptural inerrancy, moral dualism, and an urge to reclaim public political power."
      },
      {
        researcher: "Steve Bruce (2000/2008)",
        study: "Fundamentalism: Second Edition",
        method: "Comparative historical sociology of American Christian and Middle Eastern Islamic movements.",
        findings: "Proved that fundamentalism thrives only where a religious community feels culturally or materially threatened; Western fundamentalism reacts to internal liberal secularism, while Third World fundamentalism reacts to external Western imperialism."
      },
      {
        researcher: "Samuel P. Huntington (1993/1996)",
        study: "The Clash of Civilizations and the Remaking of World Order",
        method: "Macro-geopolitical and cultural historical analysis.",
        findings: "Hypothesized that future global warfare would occur along cultural and religious fault lines between nine distinct civilizations, primarily between the Western liberal world and the Islamic world."
      }
    ],
    contemporaryExamples: [
      "The Christian Right in the United States successfully lobbying and mobilizing to overturn Roe v. Wade in 2022, seeking to enforce biblical prohibitions on abortion into federal and state law.",
      "The Taliban in Afghanistan re-establishing a fundamentalist theocratic emirate in 2021, enforcing strict scriptural literalism that bans girls from secondary education and women from public employment."
    ],
    commonMisconceptions: [
      "Assuming fundamentalism is an ancient, medieval relic; sociologists emphasize that fundamentalism is a distinctly modern 20th/21st-century movement reacting against modern secular globalization.",
      "Believing fundamentalism only exists in Islam; powerful fundamentalist movements exist in American Christianity, Israeli Judaism, Indian Hinduism (Hindutva), and Myanmar Buddhism."
    ],
    synopticLinks: [
      "Links to Paper 4 Globalisation (Reactionary resistance against Western cultural imperialism and McDonaldization).",
      "Links to Paper 4 Media (Media moral panics around Islamic terrorism and orientalist representation).",
      "Links to Paper 2 Family (Fundamentalist insistence on patriarchal family structures and submissive housewives)."
    ],
    keyStatistics: [
      "Over 40% of American adults believe the Bible is the literal, word-for-word inerrant speech of God, forming the primary voting base for the Christian Right (Gallup, 2022).",
      "Since 1980, religious fundamentalist political parties and theocratic movements have increased their representation in state parliaments across more than 35 countries globally (Pew Research Center, 2023)."
    ],
    essayArguments: {
      for: [
        "Religious fundamentalism is a direct psychological and cultural reaction against the rapid pace of secular globalization, moral relativism, and the breakdown of traditional family values.",
        "Fundamentalist movements have successfully mobilized modern digital technology and grassroots organization to capture state political power and reshape legal systems."
      ],
      against: [
        "Fundamentalist conflicts are primarily driven by underlying geopolitical struggles for oil, land, and military power, using religion merely as an ideological justification.",
        "The vast majority of modern religious believers embrace cosmopolitan tolerance and symbolic interpretation, making fundamentalism a vocal but reactionary minority."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Karen Armstrong (2000)",
        quote: "Fundamentalism is not a bizarre aberration; it is a profound, passionate, and often desperate reaction to the modern secular culture that threatens to wipe out faith."
      },
      {
        theorist: "Anthony Giddens (1999)",
        quote: "Fundamentalism is nothing other than cosmopolitanism's dark twin... it is traditional values defended in the traditional way in a globalising world of rapid choice."
      }
    ]
  },

  "Religion and Social Change (Weber)": {
    theorists: ["Max Weber", "R.H. Tawney", "Karl Kautsky", "Steve Bruce", "Martin Luther King Jr.", "Desmond Tutu", "David Martin"],
    keyTerms: {
      "The Protestant Ethic": "Max Weber's concept: the specific religious values of 16th/17th-century Calvinism (predestination, worldly asceticism, the calling) that unintentionally sparked modern rational capitalism.",
      "The Spirit of Capitalism": "The rational, systematic pursuit of profit for its own sake, reinvesting capital rather than spending it on luxury consumer goods.",
      "Predestination": "The Calvinist doctrine that God has already determined who is saved (the Elect) and who is damned before birth, creating profound 'salvation anxiety' (theodicy).",
      "Worldly Asceticism": "Severe self-discipline, avoidance of worldly pleasures (luxury, alcohol, dancing, idleness), and devotion to relentless hard labor in one's vocation.",
      "The Calling (Beruf)": "Martin Luther's concept: performing mundane everyday earthly occupations with religious devotion as a moral duty to God.",
      "Religion as a Force for Social Change": "The sociological perspective (contra traditional Marxism) that religious beliefs and charismatic leaders can disrupt existing social structures and overturn oppressive political regimes.",
      "Religion as a Conservative Force": "The traditional view that religion acts to conserve, stabilize, and preserve existing social hierarchies and traditional moral values (Functionalism, Traditional Marxism).",
      "Charismatic Authority / Leadership": "Weber's concept of authority derived from extraordinary individual personality and perceived divine mission that shatters traditional institutional rules."
    },
    collinsFocus: "Details Max Weber's landmark 1905 thesis 'The Protestant Ethic and the Spirit of Capitalism'. Explores how the psychological terror of Calvinist predestination drove merchants to accumulate wealth as the only psychological sign of God's favor, igniting the industrial revolution in Western Europe.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the debate between religion as a conservative force versus a catalyst for radical social change. Evaluates Steve Bruce's comparative study of the US Civil Rights Movement (successful religious social change) versus the US Christian Right (failed moral revolution) alongside Desmond Tutu's leadership in dismantling South African Apartheid.",
    evaluationPoints: [
      "Marxist Critique (Kautsky, Tawney): Weber reversed the causal chain; early capitalism and technological advances in commerce caused the rise of Calvinism, not vice versa (Protestantism was merely the ideological symptom of the rising bourgeoisie).",
      "Historical Discrepancies: Certain heavily Calvinist nations (e.g., Scotland, Switzerland) industrialized much slower than Catholic regions (e.g., Rhineland Germany, Belgium), challenging Weber's direct correlation.",
      "Dual Character of Religion: Proves that religion cannot be reduced to a purely conservative tool of the ruling class; religious institutions provide the moral language, organizational hubs, and charismatic leadership required for progressive revolution (Civil Rights).",
      "Steve Bruce's Conditions for Success: Religion succeeds in driving social change only when it aligns with mainstream civic values, enjoys broad coalition support, and engages in peaceful non-violent civil disobedience.",
      "Weber's Methodological Precision: Weber did not claim Calvinism was the *sole* cause of capitalism, but an essential cultural catalyst that interacted with material conditions (technology, monetary systems, free wage labor)."
    ],
    keyStudies: [
      {
        researcher: "Max Weber (1905/1930)",
        study: "The Protestant Ethic and the Spirit of Capitalism",
        method: "Historical-comparative sociological investigation of religious theological texts and economic development archives across Europe, India, and China.",
        findings: "Demonstrated that rational capitalism emerged uniquely in the West because Calvinist theology generated a psychological drive for ascetic hard labor and profit reinvestment, proving ideas can cause macro-economic transformations."
      },
      {
        researcher: "Steve Bruce (2003)",
        study: "Politics and Religion in the United States",
        method: "Comparative historical sociological case study of the American Civil Rights Movement and the New Christian Right.",
        findings: "Showed that the Black Church succeeded in driving progressive civil rights legislation because it used non-violent moral shaming that aligned with the US Constitution, whereas the Christian Right struggled because its reactionary moral policies alienated the pluralistic majority."
      },
      {
        researcher: "R.H. Tawney (1926)",
        study: "Religion and the Rise of Capitalism",
        method: "Historical-economic archival investigation of 16th-century English commerce.",
        findings: "Challenged Weber by showing that technological advancements and expanding global trade routes forced the bourgeoisie to adopt capitalist practices, after which they adapted Calvinist theology to legitimize their pre-existing profit-seeking."
      }
    ],
    contemporaryExamples: [
      "The American Civil Rights Movement in the 1960s, led by the Reverend Martin Luther King Jr. and the Southern Christian Leadership Conference, using church networks, hymns, and Christian moral appeals to dismantle Jim Crow segregation.",
      "Archbishop Desmond Tutu using the institutional authority of the Anglican Church and Christian theological forgiveness to lead the Truth and Reconciliation Commission, dismantling South African Apartheid."
    ],
    commonMisconceptions: [
      "Assuming Weber argued that Calvinism was the only factor that created capitalism; Weber explicitly argued material conditions (technology, trade routes, legal systems) were also mandatory preconditions.",
      "Believing religion is always conservative; sociologists emphasize that while religion often acts to preserve the status quo, it has repeatedly functioned as a revolutionary vehicle for radical social justice."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Weberian Social Action theory vs Marxist economic determinism).",
      "Links to Paper 4 Globalisation (Modern Pentecostalism acting as a new 'Protestant Ethic' driving entrepreneurship in Latin America and Africa).",
      "Links to Paper 4 Religion (Marxist view of religion as the opium of the people)."
    ],
    keyStatistics: [
      "In early 20th-century German industrial census data analyzed by Weber, Protestant business owners, managers, and high-skilled technicians vastly outnumbered their Catholic counterparts by more than 3 to 1 (Weber, 1905).",
      "Over 90% of the grassroots activist meetings during the Montgomery Bus Boycott were held inside African American Baptist churches, demonstrating the institutional necessity of religion for social movement organizing (King, 1958)."
    ],
    essayArguments: {
      for: [
        "Max Weber's Protestant Ethic thesis brilliantly demonstrates that religious ideas and cultural values can act as an independent, dynamic catalyst driving monumental macro-economic and social change.",
        "Religious institutions provide safe physical sanctuary, moral legitimacy, and passionate charismatic leadership essential for overthrowing tyrannical political regimes and achieving civil rights."
      ],
      against: [
        "Marxist materialist analysis proves that economic technological forces and class struggles are the real engines of history, with religious ideologies merely justifying economic changes after the fact.",
        "Throughout the vast majority of human history, established religious institutions have acted as deeply conservative forces protecting the wealth, property, and power of ruling elites."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Max Weber (1905)",
        quote: "The religious valuation of restless, continuous, systematic work in a worldly calling, as the highest means to asceticism, was bound to be the most powerful, conceivable lever for the expansion of that attitude toward life which we have here called the spirit of capitalism."
      },
      {
        theorist: "Martin Luther King Jr. (1963)",
        quote: "The church must be reminded that it is not the master or the servant of the state, but rather the conscience of the state. It must be the guide and the critic of the state, and never its tool."
      }
    ]
  },

  "New Religious Movements and Cults": {
    theorists: ["Roy Wallis", "Paul Heelas", "Eileen Barker", "Rodney Stark & William Sims Bainbridge", "Charles Glock & Rodney Stark", "Bryan Wilson", "Colin Campbell"],
    keyTerms: {
      "New Religious Movement (NRM)": "A broad sociological classification covering modern religious, spiritual, and sect-like groups that have developed since the mid-20th century (replacing the pejorative term 'cult').",
      "Wallis's NRM Typology": "Three categories based on relationship to the outside world: 1. World-Rejecting (hostile to society, total isolation, e.g., Moonies, Peoples Temple), 2. World-Accommodating (restoring spiritual purity, breakaways from mainstream churches), 3. World-Affirming (therapeutic, unlock success within capitalist society, e.g., Scientology, Transcendental Meditation).",
      "Holistic Milieu / New Age Spirituality": "The vast, decentralized network of alternative spiritual practices focusing on mind-body-spirit connectivity, inner-divinity, meditation, yoga, and crystal healing.",
      "The Cultic Milieu": "Colin Campbell's concept: the underground cultural network of alternative beliefs, deviant sciences, and esoteric spiritualities that feeds modern spiritual seekers.",
      "Stark & Bainbridge's Typology": "1. Audience Cults (passive, no membership, e.g., astrology readers), 2. Client Cults (consultant-client relationship, therapy/healing), 3. Cultic Movements (full commitment, radical lifestyle change).",
      "Relative Deprivation": "Glock & Stark's theory: individuals who feel subjectively deprived in economic, social, organismic (health), or ethical terms join NRMs to compensate for their perceived lack.",
      "The Brainwashing Thesis": "The sensationalist, anti-cult media moral panic claiming cult leaders use hypnotic psychological manipulation to enslave vulnerable recruits (dismantled by Eileen Barker).",
      "Spiritual Shopping / Religious Consumerism": "The postmodern practice of picking, mixing, and purchasing diverse spiritual practices like consumer commodities in an open marketplace."
    },
    collinsFocus: "Details Roy Wallis's three-fold typology (World-Rejecting, World-Accommodating, World-Affirming) and maps why people join NRMs (marginality, status frustration, anomie, relative deprivation, and post-materialist searching among middle-class youth).",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Eileen Barker's landmark empirical study 'The Making of a Moonie' (destroying the brainwashing myth). Evaluates the rise of New Age individualist spirituality as the commodification of the soul in late-capitalist consumer culture.",
    evaluationPoints: [
      "Barker's Deconstruction of Brainwashing: Empirical research proved that Moonie recruitment had a 90%+ failure rate, and the vast majority of converts joined rationally and left voluntarily within two years.",
      "Rigidity of Typologies: Wallis's categories are too static; many NRMs combine world-affirming business seminars with world-rejecting communal living, shifting categories over time.",
      "Transience of Cults: Most NRMs are unstable, short-lived, and dependent on a single charismatic leader, meaning they fail to survive past the leader's death or scandal.",
      "Marxist Critique of New Age: Marxists view New Age spiritual commercialism (expensive retreats, yoga merchandise) as pure capitalist commodification that pacifies middle-class guilt without challenging inequality.",
      "Postmodern Interpretation: Postmodernists (Lyotard, Bauman) argue that the decline of metanarratives (science, traditional church) makes NRMs and spiritual shopping the logical, individualist expression of late modernity."
    ],
    keyStudies: [
      {
        researcher: "Eileen Barker (1984)",
        study: "The Making of a Moonie: Choice or Brainwashing?",
        method: "Overt participant observation, in-depth qualitative interviews, and psychological testing over six years with the Unification Church (Moonies).",
        findings: "Conclusively dismantled the media moral panic of 'cult brainwashing'; proved that over 90% of people attending recruitment workshops refused to join, and those who joined did so through conscious choice matching their pre-existing social ideals."
      },
      {
        researcher: "Roy Wallis (1984)",
        study: "The Elementary Forms of the New Religious Life",
        method: "Comparative sociological classification and institutional analysis of modern religious groups.",
        findings: "Constructed the landmark three-fold typology (World-Rejecting, World-Accommodating, World-Affirming), demonstrating that middle-class seekers join world-affirming NRMs to overcome anomie and enhance corporate career success."
      },
      {
        researcher: "Paul Heelas (1996)",
        study: "The New Age Movement: The Celebration of the Self and the Sacralization of Modernity",
        method: "Cultural sociological investigation and content analysis of New Age literature and spiritual fairs.",
        findings: "Showed that the New Age holistic milieu is unified by the 'sacralization of the self'—the belief that the authentic human self is inherently divine, and that modern institutional rules corrupt true inner spirituality."
      }
    ],
    contemporaryExamples: [
      "The global explosion of secularized mindfulness apps (Headspace, Calm) and corporate wellness retreats, demonstrating how world-affirming spiritual techniques are commercialized to boost capitalist worker productivity.",
      "Tragic world-rejecting cult suicides and massacres (e.g., Heaven's Gate in 1997, Peoples Temple Jonestown in 1978), demonstrating the fatal danger of extreme isolation under authoritarian charismatic leaders."
    ],
    commonMisconceptions: [
      "Assuming all cult members are 'brainwashed'; Eileen Barker proved conversions are active, rational choices made by individuals seeking community, meaning, or self-actualization.",
      "Confusing Sects with Cults; Sects are offshoots of mainstream traditional religions demanding exclusive loyalty and claiming monopoly of truth, whereas Cults are loose, individualistic, tolerant spiritual networks."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Ethical and safety dilemmas of participant observation inside secretive religious sects).",
      "Links to Paper 4 Media (Media moral panics around cult folk devils and sensationalist brainwashing narratives).",
      "Links to Paper 4 Religion (Secularisation debate and the shift from congregational religion to individualized spirituality)."
    ],
    keyStatistics: [
      "In Eileen Barker's longitudinal study of 1,000+ potential Unification Church recruits, only 5% were still members after one year, and less than 3% remained after two years (Barker, 1984).",
      "The global alternative spirituality, wellness, and self-improvement market is valued at over $40 billion annually, with over 70% of clients being middle-class professionals (McKinsey Global Wellness Survey, 2023)."
    ],
    essayArguments: {
      for: [
        "The rise of New Religious Movements and New Age spirituality proves that human beings have an enduring existential need for spiritual meaning, which is now pursued through individualized consumer choice rather than rigid church dogma.",
        "World-affirming NRMs provide practical psychological techniques that help modern professionals manage stress, build confidence, and achieve career success in high-pressure capitalist economies."
      ],
      against: [
        "World-rejecting destructive cults exploit vulnerable, isolated individuals through financial extortion, emotional manipulation, and autocratic control, tearing families apart.",
        "New Age 'spiritual shopping' is a narcissistic, commercialized distraction that trivializes sacred indigenous traditions while ignoring pressing real-world structural inequalities."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Eileen Barker (1984)",
        quote: "There was no evidence of the mysterious and irresistible mind-control techniques which the popular media so frequently attributed to the Unification Church... recruits were seeking a life of purpose."
      },
      {
        theorist: "Paul Heelas (1996)",
        quote: "The ultimate authority in the New Age is not the church, not the scripture, but the self. You are your own sacred authority."
      }
    ]
  }
};
