import { TextbookRAGEntry } from './sociologyRAG';

export const mediaDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Ownership and Control (Marxist vs Pluralist)": {
    theorists: ["Ralph Miliband", "Robert Dahl", "Ben Bagdikian", "Greg Philo", "Edward S. Herman & Noam Chomsky", "Antonio Gramsci", "James Curran & Jean Seaton"],
    keyTerms: {
      "Media Conglomerate": "A vast multinational corporate entity owning diverse media properties across television, publishing, film, gaming, and digital networks (e.g., Disney, Comcast, News Corp).",
      "Concentration of Ownership": "The historical process where media ownership becomes monopolized into the hands of fewer and fewer massive corporate giants.",
      "Horizontal Integration (Cross-Media Ownership)": "A media corporation owning different types of media outlets (e.g., newspapers, TV channels, and book publishers).",
      "Vertical Integration": "A media company controlling all stages of a media product's life cycle: production, distribution, and retail exhibition.",
      "Instrumentalist (Traditional Marxist) Theory": "Ralph Miliband's view: media owners directly manipulate and dictate editorial content to spread ruling-class ideology and protect capitalist profits.",
      "Hegemonic (Neo-Marxist) Theory": "Glasgow University Media Group (GUMG) / Gramsci's view: media owners leave day-to-day decisions to editors and journalists who, because of their middle-class background, unconsciously reproduce dominant hegemonic values as 'common sense'.",
      "Pluralist Perspective": "Robert Dahl's view: media content is driven by consumer demand and market choice; power is decentralized and owners cannot afford to force unwanted political views on audiences.",
      "Propaganda Model (Five Filters)": "Herman & Chomsky's framework: news is systematically filtered through 1. Corporate ownership/size, 2. Advertising revenue, 3. Elite sourcing, 4. Flak, 5. Anti-communist/anti-terrorist ideology.",
      "Public Service Broadcasting (PSB)": "Broadcasters funded by public levies (e.g., BBC) with legal statutory duties to provide impartial, balanced, high-quality news and educational programming."
    },
    collinsFocus: "Contrasts the Pluralist emphasis on consumer sovereignty and market competition against Instrumental Marxist (Curran & Seaton's historical evidence of press barons like Lord Beaverbrook and Murdoch intervening in elections). Details GUMG's 'Bad News' studies exposing how television news systematically frames trade unions as disruptive and corporate managers as reasonable.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the political economy of the media. Evaluates Herman & Chomsky's Propaganda Model and explores how digital platform monopolies (Google, Meta, Amazon) act as privatized infrastructure and algorithmic gatekeepers controlling public information flows.",
    evaluationPoints: [
      "Pluralist Critique of Marxism: If media were purely ruling-class propaganda, critical anti-capitalist investigative journalism, satire (Private Eye, The Daily Show), and socialist podcasts would not exist.",
      "Marxist Critique of Pluralism: Pluralists confuse 'multiplicity of channels' with 'genuine diversity of viewpoints'; corporate networks broadcast essentially identical neoliberal consumerist worldviews.",
      "Neo-Marxist Hegemony Nuance: Hegemonic theory avoids the crude conspiracy trap of Instrumentalism by showing how professional journalistic norms (neutral tone, reliance on official police/government sources) reproduce elite hegemony organically.",
      "Public Service Erosion: Neoliberal deregulation and competition from private streaming giants (Netflix, YouTube) threaten the funding and independence of public service broadcasters.",
      "Digital Disruption: The rise of social media and crowdfunding allows citizen journalists and independent creators to bypass traditional corporate media gatekeepers."
    ],
    keyStudies: [
      {
        researcher: "Glasgow University Media Group (GUMG / Greg Philo) (1976/1982)",
        study: "Bad News & More Bad News",
        method: "Systematic quantitative and qualitative content and linguistic analysis of UK television news bulletins.",
        findings: "Proved that TV news coverage of industrial disputes was systematically biased against striking trade unions, using negative visual language ('troublemakers') while framing bosses as calm and rational."
      },
      {
        researcher: "Edward S. Herman & Noam Chomsky (1988/2002)",
        study: "Manufacturing Consent: The Political Economy of the Mass Media",
        method: "Comparative media content analysis and historical case study analysis of US geopolitical news.",
        findings: "Demonstrated that mainstream commercial news functions through five structural filters that generate elite consensus, marginalize dissenting perspectives, and manufacture public consent for state policies."
      },
      {
        researcher: "James Curran & Jean Seaton (2009)",
        study: "Power Without Responsibility: Press, Broadcasting and the Internet in Britain",
        method: "Historical-sociological investigation of British media archives and ownership.",
        findings: "Found extensive historical and modern evidence that newspaper proprietors (e.g., Beaverbrook, Rothermere, Murdoch) repeatedly intervened directly to dictate editorial lines and influence political elections."
      }
    ],
    contemporaryExamples: [
      "Rupert Murdoch's News Corp and Fox News exerting immense political influence in the US, UK, and Australia, openly championing conservative political candidates and climate skepticism.",
      "Elon Musk's acquisition of Twitter (X) in 2022, demonstrating how a single billionaire proprietor can unilaterally alter content moderation algorithms, restore banned extremist accounts, and promote specific political viewpoints."
    ],
    commonMisconceptions: [
      "Assuming Marxists believe media owners attend secret conspiracies to brainwash the public; Hegemonic Neo-Marxists argue journalists unconsciously share and reproduce dominant capitalist norms.",
      "Thinking Pluralism means all viewpoints are represented equally; Pluralism argues the market responds to the majority of paying consumers, so fringe views receive less airtime purely due to low demand."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist base/superstructure, Gramsci's hegemony, Althusser's ISA).",
      "Links to Paper 1 Social Control (Ideological state apparatuses maintaining class discipline).",
      "Links to Paper 4 Globalisation (Transnational media conglomerates operating across borders)."
    ],
    keyStatistics: [
      "Just 3 corporations (DMG Media, Reach, and News UK) control over 90% of the UK national newspaper market (Media Reform Coalition, 2023).",
      "Over 70% of global digital advertising revenue outside China is monopolized by just two corporations: Alphabet (Google) and Meta (Facebook/Instagram) (Financial Times, 2023)."
    ],
    essayArguments: {
      for: [
        "The concentration of media ownership into a tiny corporate oligopoly gives billionaires unprecedented power to shape public elections and suppress stories critical of corporate capitalism.",
        "Newsrooms facing severe budget cuts rely heavily on corporate public relations press releases ('churnalism'), allowing powerful institutions to dictate the daily news agenda."
      ],
      against: [
        "In a digital era with billions of internet websites, blogs, and independent podcasts, media consumers have complete sovereignty to seek out diverse, non-corporate viewpoints.",
        "Profit-driven media corporations cannot afford to publish content that alienates their audience; they must produce what the paying public demands, regardless of the owner's personal ideology."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Ralph Miliband (1973)",
        quote: "The mass media cannot be seen as independent bodies... they are a crucial part of the ideological apparatus of the state and the ruling class."
      },
      {
        theorist: "Noam Chomsky (1988)",
        quote: "The mass media serve as a system for communicating messages and symbols to the general public. It is their function to amuse, entertain, and inform, and to inculcate individuals with the values, beliefs, and codes of behavior that will integrate them into the institutional structures of the larger society."
      }
    ]
  },

  "Representation of Gender, Class, Ethnicity, and Age": {
    theorists: ["Stuart Hall", "Angela McRobbie", "Gaye Tuchman", "Laura Mulvey", "Naomi Wolf", "Mike Savage", "David Gauntlett", "Rosalind Gill"],
    keyTerms: {
      "Symbolic Annihilation": "Gaye Tuchman's concept: the media's practice of omitting, trivializing, condemning, or sexualizing women, effectively rendering them invisible in serious public roles.",
      "The Male Gaze": "Laura Mulvey's film theory: visual media is constructed from the viewpoint of a heterosexual male, positioning women as passive erotic objects for visual pleasure.",
      "Beauty Myth": "Naomi Wolf's concept: mass media and advertising enforce an unattainable, idealized physical appearance standard on women, functioning as a form of social control.",
      "Demonisation of the Working Class": "Owen Jones' concept: portraying working-class individuals as lazy, violent, vulgar 'chavs' to justify welfare cuts and class inequality.",
      "Inferential Racism": "Stuart Hall's concept: subtle, unquestioned racial assumptions embedded within media framing (e.g., presenting black athletes as naturally physical rather than intelligent).",
      "Othering": "The media process of constructing ethnic minorities, migrants, or youth as fundamentally alien, deviant, and culturally incompatible with the dominant society.",
      "Infantilisation & Grey Stereotypes": "Portraying elderly people in media as feeble, technologically incompetent, forgetful, or burdens on society, while glorifying youth culture.",
      "Post-Feminist Media Culture": "Rosalind Gill's concept: media depicting modern women as empowered, autonomous consumers who actively choose sexual self-objectification as an expression of female power."
    },
    collinsFocus: "Details feminist content analyses of advertisements and women's magazines (McRobbie, Wolf). Explores Stuart Hall's landmark study 'Policing the Crisis' analyzing how 1970s media created a racialized moral panic over black 'mugging' to deflect attention from a structural economic crisis in capitalism.",
    cupFocus: "Explores Livesey & Blundell's analysis of dynamic media representations. Evaluates David Gauntlett's postmodern perspective on shifting media identities (celebrating fluid, non-stereotypical gender portrayals) against Owen Jones' critique of classist television programming ('Benefits Street', reality TV).",
    evaluationPoints: [
      "Postmodern Fragmentation (Gauntlett): Modern media offers an unprecedented diversity of fluid representations, allowing individuals to construct dynamic hybrid identities rather than absorbing rigid stereotypes.",
      "Persistence of Patriarchal Tropes: Despite superficial progress, women over 40 remain heavily underrepresented as news presenters, while female film roles remain heavily sexualized.",
      "Class Shaming: Media representations of poverty and working-class families systematically pathologize individual morality rather than examining structural low wages and housing shortages (Jones).",
      "Tokenistic Diversity: Ethnic minority representation has increased in quantity, but often remains confined to stereotypical roles (criminals, exotic sidekicks, or comedic tropes).",
      "Audience Resistance: Active audiences actively challenge, boycott, and mock offensive media representations on social media, forcing corporate advertisers and studios to diversify."
    ],
    keyStudies: [
      {
        researcher: "Stuart Hall et al. (1978)",
        study: "Policing the Crisis: Mugging, the State and Law and Order",
        method: "Critical cultural and ideological media discourse analysis of national newspaper archives.",
        findings: "Demonstrated that British media constructed a moral panic around black 'muggers' to generate public consent for aggressive policing and distract from the structural economic crisis of British capitalism."
      },
      {
        researcher: "Gaye Tuchman (1978)",
        study: "Hearth and Home: Images of Women in the Mass Media",
        method: "Quantitative and qualitative content analysis of television programs and print advertisements.",
        findings: "Coined the term 'symbolic annihilation', showing women were systematically portrayed almost exclusively as decorative sexual objects or domestic housewives in mass media."
      },
      {
        researcher: "David Gauntlett (2002/2008)",
        study: "Media, Gender and Identity: An Introduction",
        method: "Longitudinal analysis of film, television, magazines, and digital youth media.",
        findings: "Showed that media representations of gender have shifted from rigid, traditional patriarchal stereotypes to diverse, complex role models that encourage gender equality and self-expression."
      }
    ],
    contemporaryExamples: [
      "Reality television shows like 'Benefits Street' and tabloid headlines labeling welfare recipients as 'scroungers', reinforcing the demonization of the working class (Owen Jones).",
      "Hollywood blockbuster 'Black Panther' and 'Everything Everywhere All at Once' breaking traditional white-centric cinema conventions by achieving global box-office and Oscar success with diverse minority-led casts."
    ],
    commonMisconceptions: [
      "Assuming media representations directly brainwash audiences; Interactionists and cultural studies theorists prove audiences actively interpret, resist, or reject stereotypical portrayals.",
      "Equating increased numerical casting of minorities directly with progressive representation; sociologists differentiate between surface tokenism and authentic, non-stereotypical storytelling."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Social construction of gender, class, ethnic, and age identities).",
      "Links to Paper 2 Family (Advertising reinforcing patriarchal expressive housework roles for women).",
      "Links to Paper 4 Media (Effects models and the active audience reception theory)."
    ],
    keyStatistics: [
      "Women held only 33% of speaking characters in top-grossing Hollywood films in 2023, with female characters over 45 representing less than 8% of all on-screen roles (USC Annenberg Inclusion Initiative, 2023).",
      "Over 75% of UK tabloid news stories concerning Muslims and Islam between 2018 and 2020 framed the community through negative associations with terrorism, extremism, or misogyny (Centre for Media Monitoring, 2021)."
    ],
    essayArguments: {
      for: [
        "Mass media continues to reinforce ruling-class, patriarchal, and racist hegemony by stereotyping working-class people as vulgar and hyper-sexualizing women to sell corporate beauty products.",
        "Biased media reporting creates folk devils and moral panics around ethnic minorities and asylum seekers, justifying aggressive state border policing and surveillance."
      ],
      against: [
        "Digital platforms and modern streaming services provide unprecedented platforms for marginalized creators to produce diverse, nuanced, and empowering self-representations.",
        "Postmodern identity construction is highly fluid; contemporary audiences actively deconstruct traditional stereotypes and reject outdated media tropes."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Gaye Tuchman (1978)",
        quote: "Through omission, trivialization, and condemnation, mass media symbolically annihilate women from public life."
      },
      {
        theorist: "Stuart Hall (1997)",
        quote: "Representation is a complex business and, especially when dealing with 'difference', it engages feelings, attitudes and emotions and it mobilises fears and anxieties in the viewer."
      }
    ]
  },

  "New Media and Digital Technology": {
    theorists: ["Henry Jenkins", "Sherry Turkle", "Nicholas Negroponte", "Andrew Keen", "Jean Baudrillard", "Shoshana Zuboff", "Nick Srnicek"],
    keyTerms: {
      "New Media": "Screen-based, digital information and communication technologies that are characterized by interactivity, convergence, hypertextuality, networkability, and user-generated content.",
      "Technological Convergence": "The merging of previously distinct media technologies (telephone, television, camera, computer) into a single multifunctional digital device (e.g., smartphone).",
      "Interactivity": "The capacity of digital media users to actively participate, create content, modify images, customize feeds, and respond in real-time.",
      "Participatory Culture": "Henry Jenkins' concept: a media culture with low barriers to artistic expression and civic engagement where consumers also act as active producers ('prosumers').",
      "Collective Intelligence": "Jenkins' term: the pooling of decentralized knowledge and resources across internet user communities to solve problems or create knowledge (e.g., Wikipedia).",
      "Surveillance Capitalism": "Shoshana Zuboff's concept: a new economic order that claims human behavioral experience as free raw material for translation into behavioral data and predictive behavioral futures.",
      "Platform Capitalism": "Nick Srnicek's theory: monopoly digital platforms (Google, Apple, Meta, Amazon) extracting rent and data by acting as the foundational infrastructure of the digital economy.",
      "Digital Divide": "The structural inequality in access to high-speed digital networks, modern devices, and digital literacy based on social class, age, ethnicity, and geography.",
      "The Cult of the Amateur": "Andrew Keen's critique: the explosion of unverified user-generated blogs, wikis, and videos destroying professional journalism, artistic expertise, and objective truth."
    },
    collinsFocus: "Contrasts the Neophiliac (digital optimist) view celebrating participatory democracy, citizen journalism, and global connectivity against the Cultural Pessimist view exposing commercialization, lack of regulation, cyber-bullying, and elite data harvesting.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Sherry Turkle's 'Alone Together' (technological hyper-connectivity breeding emotional isolation) alongside Shoshana Zuboff's landmark theory of surveillance capitalism, demonstrating how free digital platforms commodify user behavior for algorithmic behavioral modification.",
    evaluationPoints: [
      "Neophiliac Optimism (Jenkins): Web 2.0 transforms passive audiences into active content creators, democratizing information and empowering citizen journalists to expose police corruption.",
      "Cultural Pessimism (Keen): The internet degrades public discourse into a chaotic sea of fake news, narcissism, echo chambers, and conspiracy theories that devalue expert scientific knowledge.",
      "Surveillance Capitalism (Zuboff): Digital platforms are not public squares; they are privatized corporate architectures designed to maximize user screen addiction and sell predictive behavioral data to corporate advertisers.",
      "Algorithmic Polarization: Social media algorithms prioritize emotionally incendiary content (anger, outrage) to drive advertising clicks, fragmenting society into radicalized echo chambers.",
      "Persistent Digital Divide: Poorer households and elderly populations are marginalized by the rapid transition of essential state services (welfare, healthcare, banking) to online-only platforms."
    ],
    keyStudies: [
      {
        researcher: "Henry Jenkins (2006)",
        study: "Convergence Culture: Where Old and New Media Collide",
        method: "Cultural ethnographic and digital media text analysis.",
        findings: "Demonstrated that digital technological convergence has spawned a 'participatory culture' where active grassroots consumers collaborate, reshape corporate stories, and exert bottom-up cultural power."
      },
      {
        researcher: "Sherry Turkle (2011)",
        study: "Alone Together: Why We Expect More from Technology and Less from Each Other",
        method: "Qualitative in-depth interviews and ethnographic observations with hundreds of children, teenagers, and adults over 15 years.",
        findings: "Showed that constant smartphone connectivity creates an illusion of companionship without the demands of real emotional intimacy, leaving people feeling deeply isolated and anxious."
      },
      {
        researcher: "Shoshana Zuboff (2019)",
        study: "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power",
        method: "Macro-sociological and political-economic institutional investigation of Big Tech business models.",
        findings: "Proved that tech giants (Google, Meta) have created a new capitalist logic that mines private human experience as behavioral surplus, feeding predictive algorithms to modify human behavior for corporate profit."
      }
    ],
    contemporaryExamples: [
      "The Cambridge Analytica scandal (2018), where millions of Facebook users' personal behavioral data was harvested without consent to micro-target political advertisements during the US Presidential election and Brexit referendum.",
      "Citizen journalists using live smartphone streaming and social media to broadcast eyewitness accounts of war zones (Gaza, Ukraine), bypassing official state military censorship."
    ],
    commonMisconceptions: [
      "Assuming new digital media has completely destroyed traditional old media; sociologists emphasize technological convergence, where old media companies buy, adapt to, and integrate new media platforms.",
      "Believing the internet is inherently democratic; the modern web is heavily monopolized and censored by a tiny handful of Silicon Valley platform monopolies and authoritarian states."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Ethical challenges of digital ethnographic research and big data analytics).",
      "Links to Paper 1 Social Control (Digital surveillance, biometric tracking, and algorithmic panopticons).",
      "Links to Paper 4 Globalisation (The network society and digital activism coordinating global social movements)."
    ],
    keyStatistics: [
      "Over 5.3 billion people (66% of the world's population) used the internet in 2023, but 2.7 billion people in developing regions remain entirely offline (International Telecommunication Union, 2023).",
      "The average global internet user spends 6 hours and 40 minutes per day online, with over 2.5 hours dedicated exclusively to social media platforms (We Are Social / Kepios, 2024)."
    ],
    essayArguments: {
      for: [
        "New digital media has democratized knowledge, empowered marginalized communities to build supportive global networks, and enabled citizen journalists to hold powerful politicians and police accountable.",
        "Interactive digital technologies offer unprecedented consumer choice, personalized education, and flexible teleworking opportunities."
      ],
      against: [
        "Digital platforms are designed around behavioral addiction algorithms that amplify disinformation, destroy attention spans, and fuel a global mental health crisis among young people.",
        "Surveillance capitalism commodifies private human thoughts and relationships, undermining individual autonomy and enabling unprecedented corporate and state mass surveillance."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Henry Jenkins (2006)",
        quote: "Convergence does not occur through media appliances... convergence occurs within the brains of individual consumers and through their social interactions with others."
      },
      {
        theorist: "Shoshana Zuboff (2019)",
        quote: "Surveillance capitalism unilaterally claims human experience as free raw material for translation into behavioral data... We are no longer the customers, nor even the product; we are the carcasses."
      }
    ]
  },

  "Media Effects Models (Hypodermic Syringe, Cultural Effects, Uses & Gratifications)": {
    theorists: ["Albert Bandura", "Elihu Katz & Paul Lazarsfeld", "Denis McQuail", "David Morley", "George Gerbner", "Stuart Hall", "Stanley Cohen"],
    keyTerms: {
      "Hypodermic Syringe / Direct Effects Model": "A direct, passive effects theory claiming that media messages are directly injected into the minds of vulnerable audiences, immediately altering their behavior and attitudes (e.g., inciting copycat violence).",
      "Two-Step Flow Model": "Katz & Lazarsfeld's model: media messages do not reach isolated individuals directly, but are first filtered and interpreted by influential social 'opinion leaders' who then transmit them to peer groups.",
      "Uses and Gratifications Model": "An active audience approach (Blumler & McQuail) arguing audiences actively choose media to satisfy specific personal needs: Diversion/Escapism, Personal Relationships, Personal Identity, and Surveillance/Information.",
      "Cultural Effects / Hegemonic Model": "A Neo-Marxist approach: media does not brainwash overnight, but exerts a slow, continuous 'drip-drip' ideological influence over time, cultivating dominant cultural assumptions as natural and unchangeable.",
      "Cultivation Theory": "George Gerbner's theory: heavy, long-term television viewing cultivates a distorted perception of reality ('Mean World Syndrome'), making viewers overestimate real-world crime and violence.",
      "Encoding/Decoding Model": "Stuart Hall's reception theory: media producers encode messages with preferred meanings, but active audiences decode them through three possible readings: Dominant/Hegemonic, Negotiated, or Oppositional.",
      "Desensitisation": "The psychological theory that repeated exposure to graphic media violence makes audiences emotionally numb and indifferent to real-world suffering.",
      "Catharsis": "The functionalist counter-argument that consuming violent or dramatic media allows audiences to safely release pent-up aggressive impulses without harming others."
    },
    collinsFocus: "Details Bandura's famous laboratory 'Bobo Doll' experiments on violent imitation versus David Morley's landmark 'Nationwide' audience study proving that social class background determines whether viewers accept, negotiate, or reject television news framing.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of the active vs passive audience debate. Evaluates Gerbner's Cultivation Theory and Stuart Hall's Encoding/Decoding model, showing how structural demographic variables (gender, ethnicity, class) filter how media texts are interpreted.",
    evaluationPoints: [
      "Methodological Flaws of Lab Experiments: Bandura's Bobo Doll experiments lack ecological validity; hitting an inanimate plastic toy in a laboratory does not prove children will imitate real-life interpersonal violence.",
      "Cultural Dopes Fallacy: The Hypodermic Syringe model treats human beings as passive 'cultural dopes' with zero cognitive agency or critical thinking skills.",
      "Uses and Gratifications Limitation: Overstates individual consumer choice while ignoring how the range of available media options is heavily restricted by corporate capitalist media ownership.",
      "Validity of Reception Analysis: Morley and Hall prove that meaning is not in the text alone, but is negotiated at the point of audience consumption based on lived social experiences.",
      "Postmodern Challenge: Postmodernists (Baudrillard) argue that in a world of hyperreality and media saturation, attempting to separate media 'effects' from real-world 'causes' is sociologically impossible."
    ],
    keyStudies: [
      {
        researcher: "Albert Bandura (1961/1963)",
        study: "Transmission of Aggression Through Imitation of Aggressive Models (Bobo Doll Experiment)",
        method: "Laboratory experiment with 72 nursery school children exposed to adult models behaving aggressively toward an inflatable doll.",
        findings: "Children who observed aggressive adult models (both live and on video) were significantly more likely to imitate novel physical and verbal aggression, supporting direct observational learning."
      },
      {
        researcher: "David Morley (1980)",
        study: "The 'Nationwide' Audience: Structure and Decoding",
        method: "Qualitative focus group interviews with 29 different socio-economic groups watching BBC's 'Nationwide' television news program.",
        findings: "Proved Stuart Hall's model: bank managers adopted dominant hegemonic readings, apprentices adopted negotiated readings, and trade union shop stewards adopted oppositional readings, proving class background determines media decoding."
      },
      {
        researcher: "George Gerbner et al. (1986/2002)",
        study: "Growing Up with Television: The Cultivation Perspective",
        method: "Longitudinal cross-sectional survey analysis of thousands of television viewers over multiple decades.",
        findings: "Demonstrated that heavy television viewers consistently suffered from 'Mean World Syndrome', overestimating their chances of being victims of violent crime compared to official statistical realities."
      }
    ],
    contemporaryExamples: [
      "Public moral panics claiming violent video games (e.g., 'Grand Theft Auto', 'Call of Duty') cause real-world mass school shootings, reflecting the persistence of the Hypodermic Syringe model in political rhetoric.",
      "Audiences consuming political satirical shows (like 'Last Week Tonight with John Oliver') or political podcasts for identity reinforcement and diversion, illustrating the Uses and Gratifications model."
    ],
    commonMisconceptions: [
      "Assuming sociologists accept the Hypodermic Syringe model; the vast majority of contemporary sociologists reject it as an oversimplified, methodologically flawed model.",
      "Confusing 'active audience' with 'immune audience'; active audience theorists acknowledge media exerts significant agenda-setting power, but emphasize that audiences interpret messages through their own cultural filters."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Positivist lab experiments vs interpretivist qualitative focus group interviews).",
      "Links to Paper 1 Socialisation (Media as a secondary socialising agent teaching gender and consumer norms).",
      "Links to Paper 4 Media (Moral panics and the creation of folk devils)."
    ],
    keyStatistics: [
      "Over 200 meta-analyses of media violence research show a weak-to-moderate statistical correlation (r = 0.15 to 0.20) with aggressive thoughts, but zero conclusive empirical evidence proving media causes real-world violent crime (American Psychological Association, 2020).",
      "In audience decoding studies of health public service announcements, over 40% of viewers from marginalized communities decoded official government messages with skepticism or oppositional readings (Wellcome Trust, 2022)."
    ],
    essayArguments: {
      for: [
        "Decades of corporate advertising expenditures prove that sustained, repetitive media imagery has a powerful cultural effect in shaping consumer habits, body image anxieties, and political voting behavior.",
        "Cultivation theory accurately shows that sensationalized crime media distorts public perception, causing widespread public anxiety and justifying punitive state policing."
      ],
      against: [
        "Audiences are active, reflexive agents who critically decode, negotiate, and frequently reject media propaganda based on their personal lived experiences and social class realities.",
        "Direct effects laboratory experiments possess low ecological validity and fail to control for real-world risk factors such as family poverty, domestic violence, and mental health."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stuart Hall (1980)",
        quote: "If no 'meaning' is taken, there can be no 'consumption'. If the meaning is not articulated in practice, it has no effect."
      },
      {
        theorist: "George Gerbner (1998)",
        quote: "Television is the central cultural arm of American society... It is an agency of the established order that serves primarily to extend and maintain rather than alter or threaten conventional beliefs."
      }
    ]
  },

  "Moral Panics (Cohen)": {
    theorists: ["Stanley Cohen", "Jock Young", "Stuart Hall", "Angela McRobbie & Sarah L. Thornton", "David Garland", "Chas Critcher"],
    keyTerms: {
      "Moral Panic": "Stanley Cohen's concept: an exaggerated, disproportionate, media-generated collective anxiety over an individual, group, or subculture defined as a severe threat to societal values and moral order.",
      "Folk Devils": "The demonized scapegoats (e.g., youth subcultures, mods and rockers, ravers, asylum seekers) portrayed by media headlines as entirely responsible for social breakdown.",
      "Deviancy Amplification Spiral": "The self-reinforcing process where sensationalized media coverage attracts more participants, provokes aggressive police crackdowns, and generates greater public deviance and hostility.",
      "Sensationalism & Exaggeration": "The journalistic use of hyperbolic language, misleading statistics, and emotive headlines to maximize audience fear and newspaper sales.",
      "Symbolisation": "The media process where neutral markers (clothing styles, hairstyles, music genres) are transformed into ominous symbols of deviance and danger.",
      "Moral Entrepreneurs": "Howard S. Becker's term: powerful public figures, religious leaders, politicians, and newspaper editors who launch crusades to pass new laws and enforce moral conformity.",
      "Disproportionality": "Erich Goode & Nachman Ben-Yehuda's criterion: the objective reality that media fear and state reaction vastly exceed the actual empirical harm posed by the folk devil."
    },
    collinsFocus: "Details Stanley Cohen's classic 1972 study of seaside clashes between Mods and Rockers at Clacton. Maps the exact stages of the deviancy amplification model and explores Jock Young's study of drug takers in Notting Hill.",
    cupFocus: "Explores Livesey & Blundell's analysis of contemporary moral panics. Contrasts Cohen's interactionist model with Stuart Hall's Marxist model in 'Policing the Crisis' (moral panics as ideological distractions from capitalist economic collapse), alongside McRobbie & Thornton's postmodern critique arguing that 24/7 digital media has rendered the classic moral panic concept obsolete.",
    evaluationPoints: [
      "Postmodern Critique (McRobbie & Thornton): In a fragmented digital landscape with 24-hour news and viral social media, panic cycles are constant, fleeting, and easily debunked by subcultural groups themselves.",
      "Left Realist Critique (Lea & Young): Labelling all public concern a 'moral panic' trivializes genuine working-class fears of real street violence, knife crime, and burglary.",
      "Marxist Function (Hall): Moral panics are not accidental journalistic sensationalism; they serve the ideological state function of justifying authoritarian policing and deflecting attention from capitalism's failures.",
      "Institutional Normalisation (Garland): In late-modern 'cultures of control', moral panics are no longer rare, discrete episodes, but a routine, permanent mechanism of state governance and penal policy.",
      "Subcultural Badge of Honour: Interactionists show that being demonized as a folk devil often gives youth subcultures street credibility, encouraging more young people to join the deviant group."
    ],
    keyStudies: [
      {
        researcher: "Stanley Cohen (1972/2002)",
        study: "Folk Devils and Moral Panics: The Creation of the Mods and Rockers",
        method: "Participant observation, depth interviews, and national newspaper content analysis during the 1964 Easter holiday clashes.",
        findings: "Demonstrated that minor teenage scuffles were vastly exaggerated by the press ('Day of Terror'), generating a deviancy amplification spiral that forced police into aggressive arrests and polarized youth into rival gangs."
      },
      {
        researcher: "Jock Young (1971)",
        study: "The Drugtakers: The Social Meaning of Drug Use",
        method: "Overt participant observation and interviews with hippie marijuana users in Notting Hill, London.",
        findings: "Showed that sensationalist media reporting forced police to target marijuana users, which drove the subculture underground, united them around deviance, and amplified harder drug use."
      },
      {
        researcher: "Angela McRobbie & Sarah L. Thornton (1995)",
        study: "Rethinking 'Moral Panics' for Multi-Mediated Social Worlds",
        method: "Theoretical analysis of British rave culture and youth club media texts.",
        findings: "Argued that the classic moral panic concept is outdated; youth subcultures now possess their own 'micro-media' (niche magazines, pirate radio, web forums) that actively contest and exploit mainstream panics."
      }
    ],
    contemporaryExamples: [
      "Media and political panics surrounding UK 'drill music', with tabloids claiming violent YouTube rap videos directly drive London knife crime, leading to police censorship of musical tracks.",
      "Widespread media moral panics surrounding transgender healthcare and gender identity in schools, framed by conservative tabloids as a threat to traditional child protection."
    ],
    commonMisconceptions: [
      "Assuming 'moral panic' means the problem does not exist at all; Cohen stressed that a real event occurs, but the media reaction is wildly disproportionate and destructive.",
      "Believing moral panics only happen to working-class youths; moral panics can target elite bankers ('fat cats'), medical diseases (AIDS), or religious sects."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (Informal vs formal social control, labelling, and deviance amplification).",
      "Links to Paper 1 Methods (Participant observation and content analysis of media texts).",
      "Links to Paper 4 Religion (Moral panics surrounding Islamic fundamentalism and religious cults)."
    ],
    keyStatistics: [
      "During the 1964 Clacton clashes, total property damage amounted to less than £513 (mostly broken windows), yet national newspapers published banner headlines claiming 'Town Smashed by Rioters' (Cohen, 1972).",
      "Over 65% of UK front-page tabloid stories regarding knife crime in 2022 focused exclusively on teenagers, despite police records showing that over 70% of knife homicide victims and perpetrators are adults over 20 (Ministry of Justice, 2023)."
    ],
    essayArguments: {
      for: [
        "Stanley Cohen's deviancy amplification model remains vital for understanding how sensationalist corporate media generates exaggerated folk devils to sell advertising and boost viewing ratings.",
        "Moral panics serve powerful ruling-class political functions, creating public demand for authoritarian policing, border crackdowns, and civil liberty restrictions."
      ],
      against: [
        "In modern multi-channel digital networks, audiences are too fragmented and media-literate for a single monolithic moral panic to capture total public consensus (McRobbie & Thornton).",
        "Labeling all public crime concerns as mere 'panics' dangerously dismisses the real, devastating impact of street violence on working-class communities."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stanley Cohen (1972)",
        quote: "Societies appear to be subject, every now and then, to periods of moral panic. A condition, episode, person or group of persons emerges to become defined as a threat to societal values and interests."
      },
      {
        theorist: "David Garland (2008)",
        quote: "Moral panics have become a standard, everyday way of doing politics and generating social regulation in the late modern culture of control."
      }
    ]
  },

  "Globalisation and the Media": {
    theorists: ["Marshall McLuhan", "John Tomlinson", "Robert W. McChesney", "David Harvey", "Roland Robertson", "Jean Baudrillard", "David Hesmondhalgh"],
    keyTerms: {
      "Global Village": "Marshall McLuhan's visionary concept: electronic mass media collapsing physical distances and time, interconnecting the world into a single shared psychological and cultural community.",
      "Cultural Imperialism": "The domination of global media markets by a handful of Western (mostly US) media giants, displacing and erasing traditional local cultural heritages.",
      "Disneyfication / Americanisation": "The worldwide diffusion of sanitized, standardized, homogenous American consumer values, lifestyle expectations, and entertainment formats.",
      "Glocalisation": "The creative synthesis of global media franchises with regional linguistic, cultural, and political specificities to appeal to local markets.",
      "Hyperreality & Simulacra": "Jean Baudrillard's postmodern concepts: media representations that no longer reflect real-world events but become more real than reality itself ('simulacra').",
      "Cultural Hybridity / Reverse Flows": "The dynamic multi-directional flow of non-Western media (K-pop, Nollywood, Bollywood) influencing and transforming Western consumer cultures.",
      "Global Media Oligopoly": "McChesney's concept: the extreme consolidation of global film, television, news, and digital streaming under less than ten massive transnational corporations.",
      "Cultural Homogenisation vs Heterogenisation": "The central sociological debate over whether global media is turning the world into a uniform monoculture or fostering unprecedented cultural diversity."
    },
    collinsFocus: "Details the political economy of global media (McChesney, Hesmondhalgh). Contrasts cultural imperialist critiques of Western corporate saturation against transformationalist models of glocalisation and audience resistance.",
    cupFocus: "Explores Livesey & Blundell's analysis of postmodernism in global media. Evaluates Baudrillard's theory of hyperreality and simulation (the Gulf War as a television spectacle) alongside the rise of decentralized digital streaming platforms enabling multi-directional global media flows.",
    evaluationPoints: [
      "Pluralist / Postmodernist Optimism: Global media provides unprecedented consumer choice, exposes global audiences to diverse lifestyles, and fosters cosmopolitan empathy across borders.",
      "Marxist Monopoly Critique (McChesney): Global media concentration creates a corporate oligopoly that prioritizes profit, commercial advertising, and depoliticized entertainment over democratic debate.",
      "Cultural Hybridity (Tomlinson): Western media does not simply brainwash foreign audiences; local communities actively interpret, appropriate, and fuse global formats with their own cultural traditions.",
      "Hyperreality Alienation (Baudrillard): Media saturation replaces authentic lived experience with simulated digital images, eroding the capacity for critical political resistance.",
      "Resistance to Imperialism: The explosive global rise of non-Western media empires (e.g., Nigerian Nollywood producing more films than Hollywood, Korean Hallyu) disproves simple Western hegemony."
    ],
    keyStudies: [
      {
        researcher: "Robert W. McChesney (1999/2004)",
        study: "Rich Media, Poor Democracy: Communication Politics in Dubious Times",
        method: "Political economy investigation of global media transnational corporation mergers and ownership records.",
        findings: "Demonstrated that a small handful of corporate media giants dominate global film, music, television, and publishing, systematically undermining democratic participation in favor of corporate consumerism."
      },
      {
        researcher: "David Hesmondhalgh (2002/2019)",
        study: "The Cultural Industries",
        method: "Comparative sociological analysis of institutional changes in global creative and cultural production.",
        findings: "Showed that global media corporations minimize financial risk by relying on repetition, sequels, star branding, formatting, and vertical integration, limiting radical artistic experimentation."
      },
      {
        researcher: "Jean Baudrillard (1991/1995)",
        study: "The Gulf War Did Not Take Place",
        method: "Postmodern semiotic and cultural text analysis of 24-hour televised war coverage (CNN).",
        findings: "Argued that modern global warfare has been transformed into a hyperreal media spectacle of missile camera feeds and sanitized simulations, detaching the home viewer completely from the real physical slaughter."
      }
    ],
    contemporaryExamples: [
      "The global streaming dominance of Netflix producing glocal hits like 'Lupin' (France), 'Money Heist' (Spain), and 'Squid Game' (South Korea), watched simultaneously by over 100 million households across the globe.",
      "The cultural imperialism debate surrounding the worldwide spread of American Black Friday and Halloween commercial shopping events into countries with no historical connection to those traditions."
    ],
    commonMisconceptions: [
      "Thinking global media is exclusively an internet phenomenon; satellite television (Al Jazeera, CNN, Star TV) and global film distribution played the foundational role in building the global village.",
      "Believing cultural globalization results only in cultural destruction; hybridization often revitalizes dying indigenous musical and visual arts by connecting them to global audiences."
    ],
    synopticLinks: [
      "Links to Paper 4 Globalisation (Global culture and hybridity, Appadurai's mediascapes).",
      "Links to Paper 1 Identity (Cyber-identities and consumption-based lifestyle construction).",
      "Links to Paper 4 Religion (Global televangelism and online religious recruitment)."
    ],
    keyStatistics: [
      "The global entertainment and media market reached $2.8 trillion in 2023, with over 60% of total revenue generated by digital streaming and online gaming platforms (PwC Global Entertainment Outlook, 2023).",
      "Nigerian Nollywood produces over 2,500 feature films per year, generating over $600 million annually and representing the second largest film industry in the world by volume after India's Bollywood (UNESCO, 2022)."
    ],
    essayArguments: {
      for: [
        "Global electronic media has created a true 'global village', enabling instant international human rights solidarity, cross-cultural appreciation, and exposure of authoritarian atrocities.",
        "The decentralization of global streaming has broken Hollywood's monopoly, creating a vibrant polycentric media landscape with global hits originating in Asia, Latin America, and Africa."
      ],
      against: [
        "Global media conglomerates enforce Western consumerist values, commercializing local cultures and replacing democratic civic discourse with hyperreal, trivial entertainment.",
        "Digital algorithmic echo chambers and corporate platform monopolies prevent genuine international dialogue, replacing it with polarized online outrage and digital surveillance."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Marshall McLuhan (1964)",
        quote: "Today, after more than a century of electric technology, we have extended our central nervous system itself in a global embrace, abolishing both space and time as far as our planet is concerned."
      },
      {
        theorist: "Jean Baudrillard (1981)",
        quote: "We live in a world where there is more and more information, and less and less meaning."
      }
    ]
  }
};
