import { TextbookRAGEntry } from './sociologyRAG';

export const globalisationDB: Record<string, Partial<TextbookRAGEntry>> = {
  "Modernisation Theory (Rostow)": {
    theorists: ["Walt Rostow", "Talcott Parsons", "David Landes", "Alex Inkeles", "Niall Ferguson", "W. Arthur Lewis", "Arturo Escobar"],
    keyTerms: {
      "Modernisation Theory": "An evolutionary development theory proposing that developing nations (LEDCs) can achieve economic growth and democracy by adopting Western industrial, political, and cultural values.",
      "Five Stages of Economic Growth": "Rostow's linear model: 1. Traditional Society, 2. Preconditions for Take-off, 3. Take-off, 4. Drive to Maturity, 5. Age of High Mass Consumption.",
      "Traditional Values": "Parsons' and Inkeles' concept: fatalism, collectivism, ascribed status, and particularism which modernization theorists claim act as internal cultural barriers to economic development.",
      "Modern Democratic Values": "Universalism, achievement orientation, meritocracy, calculability, individualism, and deferred gratification necessary for dynamic market economies.",
      "Entrepreneurial Spirit": "Landes' term for the psychological and cultural drive to invest capital, innovate technologically, and take calculated market risks.",
      "Human Capital": "The knowledge, cognitive skills, technical training, and health of a workforce that increase economic productivity (developed via Westernized schooling).",
      "Ethnocentrism": "The uncritical assumption that Western capitalist consumer democracy represents the single superior apex of human evolutionary progress.",
      "Dual Economy Model": "Arthur Lewis' model showing modern capitalist industrial sectors absorbing surplus rural labour from subsistence agriculture."
    },
    collinsFocus: "Details Walt Rostow's 1960 'Manifesto for Non-Communist Development', written during the Cold War to steer decolonised nations away from Soviet socialism. Explores how aid, technology transfer, and foreign direct investment (FDI) provide the necessary capital injection for industrial take-off.",
    cupFocus: "Explores Livesey & Blundell's rigorous deconstruction of modernization theory. Focuses on Inkeles & Smith's 'Becoming Modern' scale measuring psychological modern values, while detailing Arturo Escobar and post-development critiques exposing modernization as neo-colonial cultural imperialism.",
    evaluationPoints: [
      "Dependency Theory Critique (Frank): LEDCs are not simply 'undeveloped' (traditional), but actively 'underdeveloped' and impoverished by centuries of Western colonial plunder and unequal terms of trade.",
      "Post-Development Critique (Escobar, Esteva): Modernisation is Western cultural imperialism that destroys indigenous knowledge, communal solidarity, and self-sufficient food systems in favor of debt and consumerism.",
      "Ecological Unsustainability: High mass consumption requires finite natural resources that cannot be ecologically replicated globally without catastrophic climate breakdown and biosphere collapse.",
      "Historical Inaccuracy: Western economies (UK, USA) industrialized using heavy trade protectionism, tariffs, and slave labour, not the pure free markets they now enforce on developing states.",
      "East Asian Exception: The rapid industrialisation of the Asian Tigers (South Korea, Taiwan) relied on heavy state intervention, land redistribution, and authoritarian planning rather than Western neoliberal individualism."
    ],
    keyStudies: [
      {
        researcher: "Walt Rostow (1960)",
        study: "The Stages of Economic Growth: A Non-Communist Manifesto",
        method: "Comparative historical-economic modeling and macro-sociological synthesis.",
        findings: "Argued that all societies pass through five predictable evolutionary stages, with industrial take-off requiring 10-15% national investment and the adoption of modern rational values."
      },
      {
        researcher: "Alex Inkeles & David H. Smith (1974)",
        study: "Becoming Modern: Individual Change in Six Developing Countries",
        method: "Quantitative cross-national survey of 6,000 workers across Argentina, Chile, India, Israel, Nigeria, and Bangladesh.",
        findings: "Demonstrated that factory work and formal education fundamentally transform traditional attitudes into 'modern' traits: temporal punctuality, openness to new experiences, and belief in meritocratic science."
      },
      {
        researcher: "Arturo Escobar (1995)",
        study: "Encountering Development: The Making and Unmaking of the Third World",
        method: "Post-structuralist discourse analysis of World Bank and United Nations policy texts.",
        findings: "Showed that 'development' is a Western discursive construct that pathologized developing nations as deficient, justifying Western technocratic dominance and intervention."
      }
    ],
    contemporaryExamples: [
      "The rapid expansion of IT and business service hubs in Bengaluru and Hyderabad (India), driven by Western education and English-language human capital investments.",
      "Bhutan's rejection of GDP-based modernisation in favor of the 'Gross National Happiness' (GNH) index, prioritizing Buddhist cultural preservation and ecological balance over mass consumption."
    ],
    commonMisconceptions: [
      "Assuming modernisation theory is solely an economic theory; sociologists emphasize its socio-cultural requirements (transforming fatalistic religious worldviews into secular individualist ambitions).",
      "Believing developing countries are entirely 'traditional'; most LEDCs have possessed complex global capitalist connections since the 16th century colonial expansions."
    ],
    synopticLinks: [
      "Links to Paper 1 Socialisation (Parsons' universalistic values and primary value consensus).",
      "Links to Paper 3 Meritocracy & Human Capital (Davis & Moore, role allocation driving economic efficiency).",
      "Links to Paper 4 Religion (Weber's Protestant Ethic as the cultural catalyst for rational capitalism)."
    ],
    keyStatistics: [
      "Over $5 trillion in official foreign development aid (ODA) has been transferred to sub-Saharan Africa since 1960, yet poverty rates in multiple resource-rich nations remain above 40% (World Bank, 2023).",
      "The global richest 10% of the world's population currently emits over 48% of global carbon emissions, disproving the ecological viability of universal high-mass consumption (Oxfam, 2023)."
    ],
    essayArguments: {
      for: [
        "Foreign direct investment and technology transfers from MEDCs provide critical infrastructure, modern medicine, and digital communication networks to LEDCs.",
        "Embracing universal education and meritocratic values dismantles oppressive traditional caste systems and patriarchal barriers against women in developing economies."
      ],
      against: [
        "Ignores historical and ongoing structural exploitation; colonialism stripped raw resources and locked LEDCs into exporting low-value cash crops.",
        "Imposes Western consumerist monoculture, causing social dislocation, urban slums, debt slavery, and catastrophic environmental degradation."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Walt Rostow (1960)",
        quote: "The stages of growth are designed to dramatize the process of industrial take-off... as an explicit alternative to Karl Marx's theory of historical evolution."
      },
      {
        theorist: "Arturo Escobar (1995)",
        quote: "Development was not the natural outcome of history, but the historical construct of a particular era that produced a new regime of representation and power over the Third World."
      }
    ]
  },

  "Dependency Theory (Frank)": {
    theorists: ["Andre Gunder Frank", "Immanuel Wallerstein", "Samir Amin", "Fernando Henrique Cardoso", "Walter Rodney", "Paul Baran", "Theotônio dos Santos"],
    keyTerms: {
      "Dependency Theory": "A Marxist-influenced development theory arguing that the poverty of the developing world is the direct structural result of active economic exploitation by wealthy capitalist core nations.",
      "Development of Underdevelopment": "Frank's core thesis: developing nations are not naturally primitive, but have been actively impoverished, deformed, and held in satellite dependency by the metropolis.",
      "Metropolis-Satellite Relationship": "The chain of exploitation where wealth and surplus value are sucked from rural peripheries to national capitals, and ultimately to Western imperial metropolises.",
      "Unequal Exchange / Terms of Trade": "Peripheral countries export cheap unprocessed raw materials (oil, coffee, cobalt) and import high-priced manufactured goods and technology from the core, creating structural trade deficits.",
      "Neo-Colonialism": "Kwame Nkrumah's concept: economic, financial, and cultural domination of formally independent sovereign nations through TNCs, IMF debt, and trade agreements without direct political control.",
      "Tied Aid": "Foreign development assistance legally conditional on the recipient nation spending the funds purchasing goods, weapons, or services from the donor country.",
      "Comprador Bourgeoisie": "Local ruling elites in developing countries who collaborate with Western multinationals, enriching themselves while impoverishing their domestic working class.",
      "Import Substitution Industrialisation (ISI)": "Development policy of erecting trade tariffs against Western imports to incubate domestic national manufacturing industries."
    },
    collinsFocus: "Highlights Frank's historical analysis of Latin America, showing satellites developed fastest during World Wars I and II when metropolis ties were severed. Explores Samir Amin's concept of unequal specialization and Walter Rodney's analysis of how Europe underdeveloped Africa through slavery and raw material plunder.",
    cupFocus: "Details Livesey & Blundell's examination of structural dependency models. Explores Paul Baran's concept of economic surplus extraction, Cardoso's 'associated-dependent development', and the mechanisms of modern debt traps administered by the IMF and World Bank through Structural Adjustment Programmes.",
    evaluationPoints: [
      "Struggles with Asian Tiger Success: Rapid, sustained industrial growth in South Korea, Singapore, and Taiwan disproves the claim that capitalist links make autonomous development impossible.",
      "Ignores Internal Governance Failures: Downplays domestic corruption, kleptocracy, civil wars, and authoritarian mismanagement (e.g., Zimbabwe, Venezuela) by blaming all failure on Western imperialism.",
      "Failure of Import Substitution (ISI): Countries that cut Western trade ties often suffered from hyperinflation, uncompetitive state monopolies, and technological stagnation.",
      "Oversimplified Bipolar Model: Treats the developing world as a homogenous exploited mass, ignoring massive wealth divergences and regional powers (BRICS).",
      "Transnational Capital Realities: Modern TNCs often reinvest profits and transfer high-tech capabilities into developing hubs (Cardoso's dependent development)."
    ],
    keyStudies: [
      {
        researcher: "Andre Gunder Frank (1967/1971)",
        study: "Capitalism and Underdevelopment in Latin America",
        method: "Historical-sociological and structural economic analysis of Chile and Brazil.",
        findings: "Demonstrated that satellite regions had their highest autonomous economic growth during global crises when ties to the Western metropolis were weakest, proving capitalism reproduces underdevelopment."
      },
      {
        researcher: "Walter Rodney (1972)",
        study: "How Europe Underdeveloped Africa",
        method: "Historical materialist investigation into the transatlantic slave trade and colonial extraction.",
        findings: "Proved that European industrialisation was directly financed by the demographic destruction of African societies, forced labor, and the deliberate dismantling of local textile and metalworking industries."
      },
      {
        researcher: "Fernando Henrique Cardoso & Enzo Faletto (1979)",
        study: "Dependency and Development in Latin America",
        method: "Structural-historical comparative sociology.",
        findings: "Refined orthodox dependency by showing that 'associated-dependent development' is possible when local states, domestic capitalists, and multinational corporations form strategic alliances."
      }
    ],
    contemporaryExamples: [
      "The Democratic Republic of Congo producing over 70% of the world's cobalt (crucial for electric vehicle batteries and smartphones), yet ranking near the bottom of the UN Human Development Index due to foreign multinational extraction.",
      "The 2013 Rana Plaza disaster in Bangladesh, where 1,134 garment workers died producing ultra-cheap fast fashion for Western corporate brands operating under unregulated subcontracting."
    ],
    commonMisconceptions: [
      "Confusing 'undeveloped' with 'underdeveloped': Frank argued that traditional societies were undeveloped (primitive), but modern LEDCs were actively underdeveloped (plundered and economically restructured).",
      "Assuming dependency theorists advocate foreign aid; Frank argued foreign aid is an ideological mechanism of neo-colonial control and capital extraction."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxism, historical materialism, class exploitation).",
      "Links to Paper 3 Education (Bowles & Gintis' correspondence principle reproducing global exploitative labour).",
      "Links to Paper 4 Media (Cultural imperialism and Western media conglomerates manufacturing consumerist consent)."
    ],
    keyStatistics: [
      "For every $1 of foreign development aid entering developing countries, over $14 is extracted back to wealthy nations via illicit financial flows, debt interest repayments, and multinational profit repatriation (Global Financial Integrity, 2022).",
      "The top 1% of global wealth holders captured nearly two-thirds of all new wealth generated globally between 2020 and 2023, totaling $42 trillion (Oxfam, 2023)."
    ],
    essayArguments: {
      for: [
        "Global trade rules, intellectual property patent laws, and agricultural subsidies in MEDCs systematically lock developing nations into low-profit primary commodity production.",
        "IMF structural adjustment conditionalities force LEDCs to privatize healthcare, cut education, and deregulate markets, transferring public assets to Western corporate conglomerates."
      ],
      against: [
        "China's free-market capitalist integration has lifted over 800 million citizens out of extreme poverty since 1978, refuting the premise that global trade inherently pauperizes.",
        "Dependency theory fails to provide a viable modern economic policy alternative, as autarkic socialist economies frequently suffered severe shortages and administrative collapses."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Andre Gunder Frank (1967)",
        quote: "Underdevelopment was and still is generated by the very same historical process which also generated economic development: the development of capitalism itself."
      },
      {
        theorist: "Walter Rodney (1972)",
        quote: "The only positive value of colonialism in Africa was its eventual termination."
      }
    ]
  },

  "World Systems Theory (Wallerstein)": {
    theorists: ["Immanuel Wallerstein", "Christopher Chase-Dunn", "Giovanni Arrighi", "Terence Hopkins", "Leslie Sklair", "David Harvey"],
    keyTerms: {
      "World-Systems Analysis": "A holistic, historical-macro sociology framework viewing social change through the lens of a single, interconnected global capitalist economic system (the modern world-system).",
      "Core Nations": "Technologically advanced, capital-intensive, high-wage industrialized states that dominate world trade, control finance, and extract surplus value from other zones (e.g., USA, Germany, Japan).",
      "Semi-Periphery": "Industrialising, intermediate nations that exploit the periphery while being subordinated by the core; they act as a political and economic buffer preventing global polarization (e.g., China, Brazil, India, South Africa).",
      "Periphery": "Poorest nations concentrated in raw material extraction, low-technology agriculture, cash crops, and unprotected low-wage manual labor (e.g., Chad, Haiti, Cambodia).",
      "Capitalist World-Economy": "A global system established in the 16th century characterised by a single international division of labour and multiple competing political states.",
      "Cyclical Rhythms / Kondratiev Waves": "Long-wave economic cycles of boom (A-phases) and stagnation/recession (B-phases) lasting approximately 50-60 years that drive restructuring.",
      "Hegemony in the World System": "Rare historical periods where a single core nation dominates global agro-industrial production, commerce, and finance simultaneously (the Dutch Republic in 17th c., Britain in 19th c., USA in 20th c.).",
      "Transnational Capitalist Class (TCC)": "Leslie Sklair's concept: global corporate executives, state bureaucrats, and consumerist elites whose loyalties transcend national boundaries."
    },
    collinsFocus: "Details Wallerstein's tripartite structure (Core, Semi-Periphery, Periphery) showing that unlike rigid dependency theory, national mobility is possible (nations can rise into the semi-periphery or decline from the core). Explores the structural necessity of the semi-periphery as a political shock absorber preventing global revolution.",
    cupFocus: "Explores Livesey & Blundell's analysis of world-systems dynamics. Explores Arrighi's 'The Long Twentieth Century' tracing historical financial shifts from manufacturing to financial speculation, and evaluates how world-systems analysis transcends methodological nationalism by studying global commodity chains.",
    evaluationPoints: [
      "Economic Reductionism: Critics (Theda Skocpol) argue Wallerstein reduces all political, military, and cultural dynamics to mere functional requirements of global capital accumulation.",
      "Neglect of State Agency: Overemphasizes global market forces while underestimating the independent capacity of nation-states to enact domestic social policies and welfare protections.",
      "Vague Boundary Definitions: The criteria for distinguishing between core, semi-periphery, and periphery are fluid and methodologically imprecise (e.g., is Russia core or semi-periphery?).",
      "Prophetic Fallacies: Wallerstein predicted the terminal structural crisis of the capitalist world-system by the early 21st century, yet capitalism continues to expand and adapt dynamically.",
      "Methodological Rigor: Provides a profound macro-framework for mapping global supply chains (e.g., how Apple or Nike orchestrate production across all three zones simultaneously)."
    ],
    keyStudies: [
      {
        researcher: "Immanuel Wallerstein (1974/1979)",
        study: "The Modern World-System: Capitalist Agriculture and the Origins of the European World-Economy",
        method: "Historical-sociological investigation of global political-economic archives from the 16th century onward.",
        findings: "Proved that modern capitalism operates as a single world-economy integrated by market exchange, where surplus value is continuously pumped from the periphery to the core."
      },
      {
        researcher: "Giovanni Arrighi (1994)",
        study: "The Long Twentieth Century: Money, Power, and the Origins of Our Times",
        method: "Comparative historical analysis of systemic cycles of capital accumulation.",
        findings: "Demonstrated that every capitalist hegemonic power undergoes a lifecycle transitioning from material expansion (industrial production) to financial expansion (speculative banking) before declining."
      },
      {
        researcher: "Leslie Sklair (2001)",
        study: "The Transnational Capitalist Class",
        method: "Sociological analysis of transnational corporation boards and global policy forums.",
        findings: "Identified a global ruling class consisting of corporate executives, globalizing bureaucrats, and consumerist elites who coordinate global capitalism beyond state control."
      }
    ],
    contemporaryExamples: [
      "The global production chain of the Apple iPhone: designed in California (core), incorporating semiconductors from Taiwan and South Korea (semi-periphery), assembled by Foxconn in mainland China (semi-periphery), utilizing cobalt hand-mined in the DRC (periphery).",
      "The shifting status of China: transitioning from a peripheral manufacturing sweatshop into a semi-peripheral superpower dominating global electric vehicle battery tech and international loan financing (Belt and Road Initiative)."
    ],
    commonMisconceptions: [
      "Assuming the semi-periphery is just a temporary stepping stone; Wallerstein proved the semi-periphery is a permanent structural necessity for the survival of the world-system.",
      "Confusing World-Systems Theory with orthodox nation-state Marxism; Wallerstein explicitly rejected studying individual countries in isolation ('methodological nationalism')."
    ],
    synopticLinks: [
      "Links to Paper 1 Methods (Comparative-historical sociology and critiques of quantitative positivist surveys).",
      "Links to Paper 3 Education (Global testing leagues like PISA driving educational policy to serve core competition).",
      "Links to Paper 4 Media (Global media oligopolies based in the core shaping world cultural consumption)."
    ],
    keyStatistics: [
      "The top 100 transnational corporations accounted for over 40% of all global trade and research-and-development expenditures in 2023 (UNCTAD, 2023).",
      "Developing countries paid a record $443.5 billion to service their external public debt in 2022, diverting critical funds away from health, education, and domestic green infrastructure (World Bank, 2023)."
    ],
    essayArguments: {
      for: [
        "World-Systems Theory accurately explains how multinational corporations exploit global spatial divisions of labour to suppress production costs and bypass national labor protections.",
        "The semi-periphery concept masterfully explains how countries like China, India, and Brazil industrialize without overturning core dominance or global inequality."
      ],
      against: [
        "Too deterministically driven by economics, ignoring how cultural identity, religious nationalism, and domestic democratic movements alter historical trajectories.",
        "Fails to capture the complex, multi-directional cultural flows of globalization (e.g., Bollywood, Nigerian Nollywood, K-Pop challenging core Western media hegemony)."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Immanuel Wallerstein (1979)",
        quote: "Capitalism has been able to flourish precisely because it has lived within a world-economy and not within a world-empire."
      },
      {
        theorist: "Giovanni Arrighi (1994)",
        quote: "Financial expansions are the autumn of a major capitalist development... the sign of an impending shift in the global center of power."
      }
    ]
  },

  "Global Inequality and Poverty": {
    theorists: ["Paul Collier", "Amartya Sen", "Thomas Piketty", "Zygmunt Bauman", "Joseph Stiglitz", "Jeffrey Sachs", "Dambisa Moyo"],
    keyTerms: {
      "Absolute Poverty": "A severe deprivation of basic human survival needs, including clean drinking water, sanitation facilities, food, safe shelter, healthcare, and education (defined by the World Bank as living on less than $2.15/day).",
      "Relative Poverty": "Living significantly below the acceptable standard of living in a specific society, leading to social exclusion and inability to participate in normal cultural activities.",
      "Human Development Index (HDI)": "UN composite measurement evaluating life expectancy, expected/mean years of schooling, and gross national income per capita.",
      "The Bottom Billion": "Paul Collier's concept: the 1 billion people trapped in 60 failing, impoverished nations caught in interlocking structural traps.",
      "Four Development Traps": "Collier's model: 1. The Conflict Trap (civil war), 2. The Natural Resource Trap ('resource curse'), 3. Landlocked with Bad Neighbors, 4. Bad Governance in a Small Country.",
      "Capabilities Approach": "Amartya Sen's framework: poverty is not merely a lack of income, but the deprivation of basic capabilities to lead a free, meaningful, and healthy life.",
      "Feminisation of Poverty": "The empirical reality that women make up a disproportionate percentage of the world's poor, performing 66% of the world's work for 10% of the income.",
      "Dead Aid": "Dambisa Moyo's argument: government-to-government foreign aid fuels corruption, undermines state accountability to taxpayers, and perpetuates dependency."
    },
    collinsFocus: "Details measurements of poverty (income metrics vs multidimensional poverty indexes). Evaluates the Washington Consensus (neoliberal free-market deregulation) versus Jeffrey Sachs' 'End of Poverty' call for big-push clinical aid investments in health and agriculture.",
    cupFocus: "Explores Livesey & Blundell's analysis of structural global stratification. Evaluates Thomas Piketty's 'Capital in the Twenty-First Century' showing rate of return on capital (r) outpaces economic growth (g), ensuring escalating global inequality, alongside Amartya Sen's landmark entitlement theory of famines.",
    evaluationPoints: [
      "Entitlement Theory (Sen): Famines are rarely caused by an absolute shortage of food (food availability decline), but by structural collapses in social entitlements and market purchasing power.",
      "Neoliberal Defense: Global absolute poverty has fallen from 36% of humanity in 1990 to under 9% in 2023, primarily driven by capitalist globalization and international trade in East and South Asia.",
      "Critique of Aid (Moyo, Easterly): Top-down foreign aid creates bureaucratic corruption, destroys local farmers (e.g., dumping free food aid), and props up authoritarian kleptocracies.",
      "Multidimensional Realities: Pure income metrics hide environmental degradation, dangerous working conditions, informal labor, and domestic gender oppression.",
      "Structural Inequality: Global inequality is not a failure of capitalism, but its core engine; wealth concentration enables elite tax avoidance and political lobbying."
    ],
    keyStudies: [
      {
        researcher: "Amartya Sen (1981)",
        study: "Poverty and Famines: An Essay on Entitlement and Deprivation",
        method: "Historical-economic investigation of the 1943 Bengal famine and 1970s African famines.",
        findings: "Proved that millions starved during the Bengal famine while food stocks were plentiful, because agricultural laborers lost market entitlements (inflation wiped out purchasing power)."
      },
      {
        researcher: "Paul Collier (2007)",
        study: "The Bottom Billion: Why the Poorest Countries are Failing and What Can Be Done",
        method: "Statistical regression and econometric analysis of 60 impoverished nations over four decades.",
        findings: "Showed that standard trade policies fail in bottom billion countries because they are locked in four structural traps (especially civil conflict and natural resource plunder)."
      },
      {
        researcher: "Thomas Piketty (2014)",
        study: "Capital in the Twenty-First Century",
        method: "Historical quantitative analysis of wealth and income tax data across 20 countries over three centuries.",
        findings: "Demonstrated that when the rate of return on capital exceeds the rate of economic growth (r > g), inherited wealth inevitably concentrates, generating unsustainable global oligarchy."
      }
    ],
    contemporaryExamples: [
      "The ongoing global debt crisis forcing nations like Ghana, Sri Lanka, and Zambia into sovereign debt default, slashing education and healthcare budgets to pay international bondholders.",
      "The wealth surge of tech and energy billionaires during the COVID-19 pandemic, while an estimated 160 million people were pushed into extreme poverty globally."
    ],
    commonMisconceptions: [
      "Believing famines are natural disasters caused solely by droughts; Sen proved famines are political-economic failures of food distribution and purchasing entitlements.",
      "Assuming absolute poverty and relative poverty are identical concepts; absolute poverty threatens physical survival, whereas relative poverty measures social exclusion within a society."
    ],
    synopticLinks: [
      "Links to Paper 1 Theory (Marxist analysis of surplus value and capitalist inequality).",
      "Links to Paper 2 Family (The domestic dual burden and feminisation of poverty in global households).",
      "Links to Paper 3 Education (Material deprivation locking poor children out of academic achievement)."
    ],
    keyStatistics: [
      "The world's richest 1% own more wealth than the bottom 95% of humanity combined (Oxfam International, 2024).",
      "Roughly 700 million people live in extreme absolute poverty on less than $2.15 per day, with over 60% concentrated in sub-Saharan Africa (World Bank, 2023)."
    ],
    essayArguments: {
      for: [
        "Global capitalist market integration and trade liberalization have achieved the fastest reduction in absolute poverty in human history over the last 40 years.",
        "Targeted micro-finance initiatives, global vaccine campaigns, and conditional cash transfers have dramatically lowered child mortality and expanded female literacy in LEDCs."
      ],
      against: [
        "Unregulated neoliberal capitalism has caused hyper-concentration of wealth, corporate tax dodging, and severe environmental destruction that falls heaviest on the poorest.",
        "Structural power asymmetries in global institutions (IMF, World Bank, WTO) perpetuate predatory debt and force developing countries into unequal economic dependency."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Amartya Sen (1999)",
        quote: "Development can be seen... as a process of expanding the real freedoms that people enjoy."
      },
      {
        theorist: "Paul Collier (2007)",
        quote: "The countries at the bottom coexist with the twenty-first century, but their reality is the fourteenth century: civil war, plague, and ignorance."
      }
    ]
  },

  "Migration and Transnationalism": {
    theorists: ["Stephen Castles", "Mark Miller", "Robin Cohen", "Douglas Massey", "Peggy Levitt", "Saskia Sassen", "David Harvey"],
    keyTerms: {
      "Transnationalism": "The sustained cross-border social, economic, cultural, and political ties maintained by migrants connecting their country of origin and country of settlement.",
      "Push and Pull Factors": "Macro forces driving emigration (war, poverty, political repression) and attracting immigration (employment, high wages, political freedom, education).",
      "Brain Drain vs Brain Gain": "The loss of highly educated healthcare, scientific, and engineering professionals from developing nations to wealthy core states, and its reverse.",
      "Remittances": "Transfers of money sent by migrant workers back to family members in their country of origin (often exceeding total foreign development aid).",
      "Global Cities": "Saskia Sassen's concept: command-and-control centers of global finance (London, New York, Tokyo) that generate polarized labor demands for elite financiers and low-wage migrant service workers.",
      "Fortress Europe / Border Militarisation": "State policies restricting immigration through border walls, offshore detention centers, biometric surveillance, and criminalization of asylum seekers.",
      "Feminisation of Migration": "The dramatic increase in female independent migrants working in the global care economy, domestic service, nursing, and hospitality.",
      "Diaspora": "A dispersed ethnic or national population retaining strong collective memory, cultural ties, and political identity connected to an ancestral homeland."
    },
    collinsFocus: "Details Castles & Miller's 'Age of Migration' trends: acceleration, diversification, globalization, feminization, and politicization of global migrant flows. Explores how remittances act as a vital safety net for millions of households in developing economies.",
    cupFocus: "Explores Livesey & Blundell's analysis of transnational identities and border politics. Explores Peggy Levitt's 'social remittances' (ideas, democratic values, gender norms transferred home), while detailing Saskia Sassen's analysis of global cities relying on undocumented migrant sub-classes.",
    evaluationPoints: [
      "Economic Vitality: Migrants fill crucial demographic and labor shortages in aging Western societies (e.g., NHS medical staff in the UK, agricultural harvesting).",
      "Brain Drain Crisis: The active recruitment of nurses and doctors from sub-Saharan Africa by Western health systems severely cripples developing healthcare infrastructures.",
      "Rise of Xenophobic Populism: Right-wing political parties in MEDCs scapegoat migrants for welfare strain, housing shortages, and loss of national cultural identity.",
      "Transnational Hybridity: Migrants do not simply assimilate or retain pure traditional identities; they construct dynamic, hybrid, multi-layered identities (Levitt).",
      "Border Inhumanity: Border militarization fails to stop migration; instead, it enriches criminal human trafficking networks and increases migrant deaths in the Mediterranean and Sonoran deserts."
    ],
    keyStudies: [
      {
        researcher: "Stephen Castles & Mark J. Miller (1993/2014)",
        study: "The Age of Migration: International Population Movements in the Modern World",
        method: "Global demographic and sociological comparative policy analysis.",
        findings: "Demonstrated that modern international migration is accelerating in volume, diversifying in routes, becoming increasingly feminized, and deeply politicized in host states."
      },
      {
        researcher: "Saskia Sassen (1991/2001)",
        study: "The Global City: New York, London, Tokyo",
        method: "Urban sociological analysis of employment stratification and financial markets.",
        findings: "Showed that global financial command centers create hyper-stratified labor markets, requiring a massive low-wage migrant underclass to perform domestic cleaning, catering, and security."
      },
      {
        researcher: "Peggy Levitt (2001)",
        study: "The Transnational Villagers",
        method: "Multi-sited ethnography across Boston (USA) and Miraflores (Dominican Republic).",
        findings: "Proved that migrants transfer 'social remittances' (new ideas, gender roles, political practices) back home, fundamentally altering community structures across borders."
      }
    ],
    contemporaryExamples: [
      "The massive remittance corridor from the United States to Mexico, exceeding $60 billion annually and surpassing Mexico's total foreign direct investment receipts.",
      "Filipino domestic workers ('overseas foreign workers') forming a transnational care chain, raising children in Hong Kong, the Middle East, and Europe while sending money home to support their own families."
    ],
    commonMisconceptions: [
      "Assuming all migrants intend to settle permanently and assimilate completely; modern communications allow migrants to live transnational lives across multiple borders.",
      "Believing migrants are an economic drain on host nations; multiple studies show migrants are net fiscal contributors to tax revenues in MEDCs."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Ethnic identity, diaspora consciousness, and hybrid identities).",
      "Links to Paper 2 Demography (Impact of net migration on aging populations and birth rates).",
      "Links to Paper 4 Religion (Transnational religious networks and cultural defense among diaspora communities)."
    ],
    keyStatistics: [
      "Officially recorded global remittances to low- and middle-income countries reached $669 billion in 2023, more than triple total official development assistance (World Bank, 2023).",
      "There are over 281 million international migrants globally, representing roughly 3.6% of the world's population (UN International Organization for Migration, 2023)."
    ],
    essayArguments: {
      for: [
        "International migration expands human freedom, transfers life-saving economic remittances to developing areas, and solves critical labor deficits in aging industrial economies.",
        "Transnational connections foster vibrant multiculturalism, cross-cultural understanding, and the transfer of progressive democratic social norms."
      ],
      against: [
        "Unregulated brain drains strip developing countries of the critical healthcare and engineering talent needed for independent national development.",
        "Exploitative subcontracting and lack of legal protections leave undocumented migrants vulnerable to modern slavery, hyper-exploitation, and political scapegoating."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Stephen Castles (2002)",
        quote: "Migration is not a temporary disruption in social equilibrium, but a permanent, central dynamic of modern global social transformation."
      },
      {
        theorist: "Saskia Sassen (2001)",
        quote: "Global cities are sites for the concentration of extraordinary wealth, but they are also sites where low-wage migrant labor is systematically rendered invisible."
      }
    ]
  },

  "Global Culture and Hybridity": {
    theorists: ["Roland Robertson", "George Ritzer", "Arjun Appadurai", "John Tomlinson", "Stuart Hall", "Benjamin Barber", "David Harvey"],
    keyTerms: {
      "Cultural Imperialism / Americanisation": "The imposition of Western (predominantly US) cultural consumer goods, media, values, and language onto developing nations, threatening indigenous traditions.",
      "McDonaldization": "George Ritzer's concept: the process by which the principles of the fast-food restaurant (efficiency, calculability, predictability, and control via non-human tech) dominate global society.",
      "Cultural Homogenisation": "The flattening and erasure of local cultural distinctiveness into a uniform, standardized global consumer culture.",
      "Glocalisation": "Roland Robertson's term: the creative blending and tailoring of global corporate products and media formats to fit specific local cultural tastes and values.",
      "Cultural Hybridity": "The active mixing and synthesis of diverse cultural forms to create new, dynamic identities and artistic genres (Stuart Hall).",
      "Appadurai's Five Global Scapes": "Disjunctive global flows: 1. Ethnoscapes (migrants), 2. Mediascapes (images), 3. Technoscapes (tech), 4. Financescapes (capital), 5. Ideoscapes (political ideologies).",
      "Jihad vs. McWorld": "Benjamin Barber's thesis: the clash between consumerist corporate tribalism ('McWorld') and reactionary, fundamentalist anti-modern resistance ('Jihad').",
      "Reverse Cultural Flows": "Non-Western cultural genres successfully penetrating, influencing, and dominating Western consumer markets (e.g., K-pop, anime, telenovelas)."
    },
    collinsFocus: "Examines the classic cultural imperialism debate (Herbert Schiller) versus post-imperialism models. Details George Ritzer's McDonaldization thesis and how global brands enforce rationalized, predictable consumer experiences across continents.",
    cupFocus: "Explores Livesey & Blundell's evaluation of Arjun Appadurai's 'Modernity at Large' and Stuart Hall's concept of new hybrid ethnicities. Details how audiences are not passive cultural dopes absorbing Western messages, but active decoders who re-signify global cultural symbols.",
    evaluationPoints: [
      "Reverse Cultural Flows (K-Pop, Anime): Cultural globalization is not a one-way street of Westernization; South Korea, Japan, and Nigeria (Nollywood) export dominant global media.",
      "Active Audience Resistance: Local populations actively reinterpret, parody, and subvert Western cultural commodities rather than being passively brainwashed (Tomlinson).",
      "Glocal Adaptation: Global corporations must adapt to local norms to survive (e.g., McDonald's serving the McAloo Tikki in India or halal menus in the Middle East).",
      "Rise of Cultural Nationalism: The threat of cultural homogenization frequently triggers reactionary cultural defense, religious revivalism, and aggressive nationalism.",
      "Commodification of Tradition: Cultural hybridization often commodifies indigenous sacred traditions into shallow tourist souvenirs and lifestyle branding."
    ],
    keyStudies: [
      {
        researcher: "George Ritzer (1993/2013)",
        study: "The McDonaldization of Society",
        method: "Theoretical sociological critique and institutional organizational analysis.",
        findings: "Demonstrated that modern global institutions are increasingly organized around the rationalizing principles of efficiency, calculability, predictability, and control, replacing traditional human judgment with bureaucratic algorithms."
      },
      {
        researcher: "Arjun Appadurai (1996)",
        study: "Modernity at Large: Cultural Dimensions of Globalization",
        method: "Post-colonial cultural anthropology and globalization theory.",
        findings: "Proved that cultural globalization operates through five complex, disjunctive, and overlapping 'scapes' that produce fractured, dynamic local appropriations rather than simple homogenization."
      },
      {
        researcher: "John Tomlinson (1999)",
        study: "Globalization and Culture",
        method: "Critical cultural theory and sociological text analysis.",
        findings: "Dismantled the crude cultural imperialism thesis, showing that global connectivity promotes cultural reflexivity and deterritorialization rather than total Western domination."
      }
    ],
    contemporaryExamples: [
      "The global explosion of South Korean cultural exports ('Hallyu'), including BTS, Blackpink, and the Netflix series 'Squid Game', becoming the most consumed media formats worldwide.",
      "The glocalisation of international fast-food chains: McDonald's offering vegetarian Paneer burgers and no-beef menus in India, and Starbucks designing traditional tatami-mat teahouse stores in Kyoto."
    ],
    commonMisconceptions: [
      "Equating cultural globalization strictly with Americanization; modern cultural flows are multi-directional, decentralized, and polycentric.",
      "Assuming cultural hybridization destroys local traditions; hybridization often revitalizes local identities by allowing them to express themselves on global digital stages."
    ],
    synopticLinks: [
      "Links to Paper 1 Identity (Cultural hybridity, cyber-identities, and changing ethnic boundaries).",
      "Links to Paper 4 Media (Global media conglomerates vs citizen-created participatory digital culture).",
      "Links to Paper 4 Religion (Fundamentalism as a cultural defense mechanism against secular Westernisation)."
    ],
    keyStatistics: [
      "Non-English digital streaming content grew by over 90% globally on Netflix between 2020 and 2023, led by Korean, Spanish, and Japanese productions (Netflix Global Data, 2023).",
      "Over 75% of internet users worldwide access the web in non-English languages, with Chinese, Spanish, and Arabic being among the fastest growing linguistic communities (Internet World Stats, 2023)."
    ],
    essayArguments: {
      for: [
        "Cultural globalization fosters global empathy, breaks down oppressive parochial traditions, and democratizes access to diverse global philosophies, music, and ideas.",
        "Glocalisation and cultural hybridization celebrate human creativity, allowing local communities to fuse global tools with unique indigenous heritage."
      ],
      against: [
        "Unchecked corporate media imperialism erodes linguistic diversity, commercializes sacred cultural rituals, and pushes unsustainable Western consumerism.",
        "Cultural homogenization provokes violent xenophobic backlashes and fundamentalist religious movements seeking to enforce rigid cultural purity."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Roland Robertson (1995)",
        quote: "Glocalization means the simultaneous presence of both universalizing and particularizing tendencies in contemporary global culture."
      },
      {
        theorist: "George Ritzer (1993)",
        quote: "McDonaldization is the process by which the principles of the fast-food restaurant are coming to dominate more and more sectors of American society as well as of the rest of the world."
      }
    ]
  },

  "Global Social Movements": {
    theorists: ["Manuel Castells", "Naomi Klein", "Paul Byrne", "David Held", "Sydney Tarrow", "Donatella della Porta", "David Graeber"],
    keyTerms: {
      "New Social Movements (NSMs)": "Post-industrial social movements focusing on identity, peace, human rights, environmentalism, and cultural autonomy rather than traditional class-based economic redistribution.",
      "Network Society": "Manuel Castells' concept: a social structure based on digital information networks that allow decentralized, non-hierarchical, horizontal political organizing across the globe.",
      "Digital Activism / Cyber-Activism": "The use of social media, digital platforms, and online communication networks to coordinate protests, bypass state censorship, and mobilize mass public opinion.",
      "Anti-Globalisation / Global Justice Movement": "A decentralized global coalition of activists, trade unions, environmentalists, and indigenous groups opposing corporate-led neoliberal globalization.",
      "Slacktivism / Clicktivism": "Low-effort online activism (liking, retweeting, signing e-petitions) that creates the illusion of meaningful political participation without demanding real-world sacrifice.",
      "Mass Self-Communication": "Castells' term for digital communication that reaches a global audience but is self-generated in content, self-directed in emission, and self-selected in reception.",
      "Horizontalism": "A form of direct, leaderless democracy and collective decision-making practiced by movements like Occupy Wall Street and the Indignados.",
      "Hacktivism": "The subversive use of computer networks and hacking (e.g., Anonymous) to promote political goals, expose corporate secrecy, or disrupt authoritarian state apparatuses."
    },
    collinsFocus: "Examines the transition from Old Social Movements (trade unions, political parties) to New Social Movements. Explores Naomi Klein's 'No Logo' critique of corporate branding and the mobilization of transnational protests against the WTO, G7, and IMF.",
    cupFocus: "Explores Livesey & Blundell's detailed analysis of Manuel Castells' 'Networks of Outrage and Hope'. Focuses on how the internet enables spontaneous, horizontal mobilization during the Arab Spring and Occupy movements, while evaluating state digital surveillance (surveillance capitalism) and algorithmic suppression.",
    evaluationPoints: [
      "Digital Optimism (Castells): The internet democratizes political voice, empowering marginalized grassroots citizens to bypass state-controlled traditional broadcasting monopolies.",
      "Digital Pessimism (Morozov, Keen): Social media is a double-edged sword; authoritarian regimes use biometric surveillance, internet blackouts, and AI disinformation bots to crush dissidents.",
      "Lack of Institutional Endurance: Horizontal, leaderless movements often struggle to translate street protests into lasting legislative policies or viable political governance (e.g., Arab Spring).",
      "Echo Chambers & Polarization: Algorithmic digital networks create hyper-partisan bubbles that radicalize extreme political fringes rather than building democratic consensus.",
      "Transnational Successes: Global environmental movements (Fridays for Future, Extinction Rebellion) have successfully forced climate change onto the top of international corporate and state agendas."
    ],
    keyStudies: [
      {
        researcher: "Manuel Castells (2012)",
        study: "Networks of Outrage and Hope: Social Movements in the Internet Age",
        method: "Comparative sociological case study analysis of the Arab Spring, Spanish Indignados, and Occupy Wall Street.",
        findings: "Demonstrated that digital social networks create spontaneous horizontal movements that conquer public urban space, challenging state power without needing traditional hierarchical party structures."
      },
      {
        researcher: "Naomi Klein (2000)",
        study: "No Logo: Taking Aim at the Brand Bullies",
        method: "Investigative sociological analysis of corporate globalization and sweatshop labor.",
        findings: "Mapped the emergence of the global anti-corporate movement, demonstrating that the aggressive branding of corporations made them vulnerable to global consumer boycotts and anti-sweatshop activism."
      },
      {
        researcher: "Donatella della Porta & Sydney Tarrow (2005)",
        study: "Transnational Protest and Global Activism",
        method: "Cross-national comparative sociological investigation of protest event data.",
        findings: "Showed that global justice movements successfully build 'complex internationalism', coordinating protests across multiple countries simultaneously via transnational activist networks."
      }
    ],
    contemporaryExamples: [
      "The #BlackLivesMatter movement utilizing viral smartphone video footage of police brutality to spark the largest coordinated civil rights protests in modern global history across over 60 countries.",
      "Greta Thunberg and the 'Fridays for Future' youth climate strike movement, mobilizing over 4 million students globally via digital social media networks to demand emergency state climate action."
    ],
    commonMisconceptions: [
      "Assuming the 'Anti-Globalisation' movement is against international cooperation; activists are anti-neoliberal corporate capitalism, advocating for 'globalization from below' (human rights and climate justice).",
      "Believing digital protests replace physical activism; successful movements combine online viral mobilization with physical occupation of public geographic spaces (squares, streets)."
    ],
    synopticLinks: [
      "Links to Paper 1 Social Control (State surveillance, ideological state apparatuses, and digital policing).",
      "Links to Paper 4 Media (New digital media, citizen journalism, and viral participatory culture).",
      "Links to Paper 4 Religion (Religious fundamentalism operating as a global anti-secular social movement)."
    ],
    keyStatistics: [
      "Over 26 million people in the United States alone participated in #BlackLivesMatter demonstrations in 2020, making it the largest protest movement in recorded American history (Civis Analytics, 2020).",
      "Between 2011 and 2023, over 70 authoritarian governments imposed intentional nationwide or regional internet blackouts to suppress anti-regime social movement protests (Access Now, 2023)."
    ],
    essayArguments: {
      for: [
        "Digital social networks have revolutionized global civil society, allowing ordinary citizens to expose police violence, coordinate global climate action, and challenge corporate abuses without billionaire-owned media.",
        "Transnational activist networks provide rapid international solidarity and legal support to dissidents living under authoritarian regimes."
      ],
      against: [
        "Horizontal, leaderless digital movements often suffer from tactical fragmentation, failing to build structured political parties capable of winning elections or enacting durable legislation.",
        "Social media platforms are profit-driven corporate entities whose algorithms prioritize divisive outrage, facilitating state surveillance and the rapid spread of conspiracy theories."
      ]
    },
    theoristQuotes: [
      {
        theorist: "Manuel Castells (2012)",
        quote: "By transforming fear into outrage, and outrage into hope, individuals gathered in public space to create a new form of democratic consciousness."
      },
      {
        theorist: "Naomi Klein (2000)",
        quote: "The anti-corporate movement is not anti-globalization. It is a demand for a different kind of globalization: one based on human rights and environmental sustainability."
      }
    ]
  }
};
