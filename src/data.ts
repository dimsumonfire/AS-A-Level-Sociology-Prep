export const syllabus = [
  {
    id: 1,
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    duration: "1h 30m",
    marks: 60,
    weighting: "50% of AS Level / 25% of A Level",
    description: "Focuses on the relationship between the individual and society, and how sociologists study these relationships.",
    topics: [
      "Socialisation and the creation of social identity",
      "Structuralist vs Interactionist perspectives",
      "Methods of research (Quantitative & Qualitative)",
      "The relationship between theory and methods",
      "Positivism vs Interpretivism",
      "Ethical issues in sociological research"
    ]
  },
  {
    id: 2,
    title: "Paper 2: The Family",
    duration: "1h 30m",
    marks: 60,
    weighting: "50% of AS Level / 25% of A Level",
    description: "Explores the role of the family in contemporary society and how family life is changing.",
    topics: [
      "Theories of the family (Functionalist, Marxist, Feminist)",
      "Family diversity and change",
      "Gender roles and power within the family",
      "The social construction of childhood",
      "Demographic changes (Birth rates, Death rates, Migration)",
      "The impact of social policy on the family"
    ]
  },
  {
    id: 3,
    title: "Paper 3: Education",
    duration: "1h 15m",
    marks: 50,
    weighting: "25% of A Level",
    description: "Examines the role of education in society and the factors affecting educational achievement.",
    topics: [
      "Theories of education (Functionalist, Marxist, Interactionist)",
      "Education and social mobility",
      "Factors affecting educational achievement (Class, Gender, Ethnicity)",
      "The hidden curriculum and labelling",
      "Educational policies and their impact",
      "The relationship between education and the economy"
    ]
  },
  {
    id: 4,
    title: "Paper 4: Globalisation, Media and Religion",
    duration: "1h 45m",
    marks: 70,
    weighting: "25% of A Level",
    description: "A choice of topics exploring key areas of social change in a global context.",
    topics: [
      "Globalisation: Migration, global culture, and inequality",
      "Media: Ownership, control, representation, and new media",
      "Religion: Secularisation, fundamentalism, and social change",
      "The impact of digital technology on social life",
      "Global social movements",
      "Postmodernist perspectives on global change"
    ]
  }
];

export interface PastPaper {
  id: string;
  title: string;
  series: string;
  paperNumber: string;
  duration: string;
  totalMarks: number;
  sections: {
    name: string;
    instruction?: string;
    questions: {
      id: string;
      text: string;
      marks: number;
      subQuestions?: { text: string; marks: number }[];
    }[];
  }[];
}

export const pastPapers: PastPaper[] = [
  {
    id: "2023_M_P1_12",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "March 2023",
    paperNumber: "9699/12",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways the peer group may influence behaviour.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two practical factors to consider when conducting observational studies.", marks: 8 },
              { text: "Explain one strength and one limitation of using content analysis as a research method.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Under-socialisation is the main reason that individuals act in deviant ways.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that society can be studied objectively.", marks: 26 },
          { id: "5", text: "Evaluate the view that age identities are no longer clear and fixed.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_M_P2_22",
    title: "Paper 2: The Family",
    series: "March 2023",
    paperNumber: "9699/22",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two features of a nuclear family.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways social policies may influence family life.", marks: 8 },
              { text: "Explain one strength and one limitation of New Right views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Men continue to dominate family life.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that motherhood is different today than in the past.", marks: 26 },
          { id: "5", text: "Evaluate the view that the main role of the family is to promote social stability.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2022_P1_11",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2022",
    paperNumber: "9699/11",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two examples of social norms.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways sociological research may be affected by bias.", marks: 8 },
              { text: "Explain one strength and one limitation of unstructured interviews as a research method.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The family is the main influence on gender identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that age is the main influence on a person’s identity.", marks: 26 },
          { id: "5", text: "Evaluate the use of experiments in sociological research.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2022_P2_22",
    title: "Paper 2: The Family",
    series: "May/June 2022",
    paperNumber: "9699/22",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways the increase of women in paid employment has affected the family.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways the family supports the economy.", marks: 8 },
              { text: "Explain two strengths of Marxist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The experience of childhood is different today than in the past.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that social policies are the main reason for increased family diversity.", marks: 26 },
          { id: "5", text: "Evaluate the view that the family is a patriarchal institution.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P1_11",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2023",
    paperNumber: "9699/11",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two characteristics of youth identity.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why a researcher might use a pilot study.", marks: 8 },
              { text: "Explain two strengths of questionnaires as a research method.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Family is the main influence on ethnic identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that nature is more important than nurture in shaping human behaviour.", marks: 26 },
          { id: "5", text: "Evaluate the view that qualitative methods are unsuitable for sociological research because they lack reliability.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P1_12",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2023",
    paperNumber: "9699/12",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two features of longitudinal studies.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways the values of the sociologist may lead to bias in research findings.", marks: 8 },
              { text: "Explain two strengths of using a covert approach to participant observation.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Socialisation is a one-way process.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that social class is no longer an important influence on a person’s identity.", marks: 26 },
          { id: "5", text: "Evaluate the view that sociologists should use a scientific approach to research.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P1_13",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2023",
    paperNumber: "9699/13",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two negative social sanctions.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why interpretivists use participant observation in sociological research.", marks: 8 },
              { text: "Explain two strengths of official statistics in sociological research.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Marginalisation provides the best explanation for deviant behaviour.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that changes in gender identity have been exaggerated.", marks: 26 },
          { id: "5", text: "Evaluate the view that qualitative interviews are a better method than questionnaires for studying society.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P2_21",
    title: "Paper 2: The Family",
    series: "May/June 2023",
    paperNumber: "9699/21",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways children are protected from adult life.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways family life can be harmful for some members.", marks: 8 },
              { text: "Explain one strength and one limitation of radical feminist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The nuclear family is the dominant family structure.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that grandparents play a positive role in the family.", marks: 26 },
          { id: "5", text: "Evaluate the view that the main role of the family is to serve the needs of capitalism.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P2_22",
    title: "Paper 2: The Family",
    series: "May/June 2023",
    paperNumber: "9699/22",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two reasons women are now marrying at a later age.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways capitalism benefits from the role of women in the family.", marks: 8 },
              { text: "Explain two strengths of Marxist feminist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The family has experienced a loss of functions.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that social class is the main factor affecting the experiences of children in the family.", marks: 26 },
          { id: "5", text: "Evaluate the view that increasing family diversity means the nuclear family is no longer dominant.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P2_23",
    title: "Paper 2: The Family",
    series: "May/June 2023",
    paperNumber: "9699/23",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two reasons people may stay in an unhappy marriage.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways the family prepares children for the workplace.", marks: 8 },
              { text: "Explain two limitations of Marxist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The improved social position of women is the main reason for the increase in divorce.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that gender no longer influences roles within the family.", marks: 26 },
          { id: "5", text: "Evaluate the view that childhood is a period of innocence and protection.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P3_31",
    title: "Paper 3: Education",
    series: "May/June 2023",
    paperNumber: "9699/31",
    duration: "1h 15m",
    totalMarks: 50,
    sections: [
      {
        name: "Main Section",
        questions: [
          { id: "1", text: "Describe two ways schools reinforce social values.", marks: 4 },
          { id: "2", text: "Explain two ways gender roles are modelled or encouraged in primary socialisation in the family.", marks: 8 },
          { id: "3", text: "‘The treatment of ethnic groups in schools can affect their educational attainment.’ Using sociological material, give two arguments against this view.", marks: 12 },
          { id: "4", text: "Evaluate the view that the education system enables social mobility for the working class.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P3_32",
    title: "Paper 3: Education",
    series: "May/June 2023",
    paperNumber: "9699/32",
    duration: "1h 15m",
    totalMarks: 50,
    sections: [
      {
        name: "Main Section",
        questions: [
          { id: "1", text: "Describe how schools provide specialist skills which enable individuals to make a more significant contribution to the economy.", marks: 4 },
          { id: "2", text: "Explain two examples of the impact of material deprivation on educational achievement.", marks: 8 },
          { id: "3", text: "‘Schools promote social inequality rather than social solidarity.’ Using sociological material, give two arguments against this view.", marks: 12 },
          { id: "4", text: "Evaluate the view that the school curriculum reflects social inequality.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P3_33",
    title: "Paper 3: Education",
    series: "May/June 2023",
    paperNumber: "9699/33",
    duration: "1h 15m",
    totalMarks: 50,
    sections: [
      {
        name: "Main Section",
        questions: [
          { id: "1", text: "Describe two ways schools contribute to the socialisation process.", marks: 4 },
          { id: "2", text: "Explain two reasons why educational attainment might be influenced by school subcultures.", marks: 8 },
          { id: "3", text: "‘Gender is no longer an influence on educational attainment.’ Using sociological material, give two arguments against this view.", marks: 12 },
          { id: "4", text: "Evaluate the view that education legitimises inequality.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2023_P4_41",
    title: "Paper 4: Globalisation, Media and Religion",
    series: "May/June 2023",
    paperNumber: "9699/41",
    duration: "1h 45m",
    totalMarks: 70,
    sections: [
      {
        name: "Section A: Globalisation",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "1", text: "‘Globalisation is leading to greater cultural convergence.’ Evaluate this view.", marks: 35 },
          { id: "2", text: "‘Globalisation has contributed to a reduction of global poverty.’ Evaluate this view.", marks: 35 }
        ]
      },
      {
        name: "Section B: Media",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "3", text: "‘The cultural effects model provides the best explanation of how the media influences behaviour.’ Evaluate this view.", marks: 35 },
          { id: "4", text: "‘The media acts as an agent of ideological control.’ Evaluate this view.", marks: 35 }
        ]
      },
      {
        name: "Section C: Religion",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "5", text: "‘Religion serves to maintain the existing social order.’ Evaluate this view.", marks: 35 },
          { id: "6", text: "‘Religious organisations are male dominated.’ Evaluate this view.", marks: 35 }
        ]
      }
    ]
  },
  {
    id: "2023_P4_42",
    title: "Paper 4: Globalisation, Media and Religion",
    series: "May/June 2023",
    paperNumber: "9699/42",
    duration: "1h 45m",
    totalMarks: 70,
    sections: [
      {
        name: "Section A: Globalisation",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "1", text: "‘Capitalism is the main cause of the rise in global crime.’ Evaluate this view.", marks: 35 },
          { id: "2", text: "Evaluate the strengths and limitations of modernisation theory in explaining why some countries remain poor.", marks: 35 }
        ]
      },
      {
        name: "Section B: Media",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "3", text: "‘Media content is shaped by the interest of the ruling class.’ Evaluate this view.", marks: 35 },
          { id: "4", text: "‘The two-step flow model provides the best explanation of media effects.’ Evaluate this view.", marks: 35 }
        ]
      },
      {
        name: "Section C: Religion",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "5", text: "‘Religion is a source of conflict.’ Evaluate this view.", marks: 35 },
          { id: "6", text: "‘Secularisation is occurring in modern societies.’ Evaluate this view with reference to the idea of resacrilisation.", marks: 35 }
        ]
      }
    ]
  },
  {
    id: "2023_P4_43",
    title: "Paper 4: Globalisation, Media and Religion",
    series: "May/June 2023",
    paperNumber: "9699/43",
    duration: "1h 45m",
    totalMarks: 70,
    sections: [
      {
        name: "Section A: Globalisation",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "1", text: "‘Only the rich and powerful benefit from globalisation.’ Evaluate this view.", marks: 35 },
          { id: "2", text: "Evaluate the effectiveness of aid programmes in alleviating poverty.", marks: 35 }
        ]
      },
      {
        name: "Section B: Media",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "3", text: "‘Audiences have little influence over media content.’ Evaluate this view.", marks: 35 },
          { id: "4", text: "Evaluate the ways that women, past and present, are represented in the media.", marks: 35 }
        ]
      },
      {
        name: "Section C: Religion",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "5", text: "‘Religion acts as an instrument of social control.’ Evaluate this view.", marks: 35 },
          { id: "6", text: "‘People are just as religious today as in the past.’ Evaluate this view.", marks: 35 }
        ]
      }
    ]
  },
  {
    id: "2024_P1_11",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2024",
    paperNumber: "9699/11",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two quantitative research methods.", marks: 4 },
          { 
            id: "2", 
            text: "", 
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why a researcher might use a non-representative sampling technique.", marks: 8 },
              { text: "Explain two strengths of group interviews as a research method.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Family is the most important influence on age identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate sociological explanations of deviance.", marks: 26 },
          { id: "5", text: "Evaluate the view that using different research methods together is more effective than using one method.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2024_P2_21",
    title: "Paper 2: The Family",
    series: "May/June 2024",
    paperNumber: "9699/21",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways fatherhood is different today than in the past.", marks: 4 },
          { 
            id: "2", 
            text: "", 
            marks: 14,
            subQuestions: [
              { text: "Explain two ways the family functions to benefit society.", marks: 8 },
              { text: "Explain two limitations of functionalist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Childhood as a distinct period of life is disappearing today.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that gender is the most important factor influencing family life.", marks: 26 },
          { id: "5", text: "Evaluate the view that family structure is now characterised by diversity.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2024_P3_31",
    title: "Paper 3: Education",
    series: "May/June 2024",
    paperNumber: "9699/31",
    duration: "1h 15m",
    totalMarks: 50,
    sections: [
      {
        name: "Main Section",
        questions: [
          { id: "1", text: "Describe two ways that schools disadvantage boys.", marks: 4 },
          { id: "2", text: "Explain two reasons why cultural differences between ethnic groups may affect their educational attainment.", marks: 8 },
          { id: "3", text: "‘Home background is the main reason for social class differences in educational attainment.’ Using sociological material, give two arguments against this view.", marks: 12 },
          { id: "4", text: "Evaluate the Marxist view that education serves the interests of capitalism.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2024_P4_42",
    title: "Paper 4: Globalisation, Media and Religion",
    series: "May/June 2024",
    paperNumber: "9699/42",
    duration: "1h 45m",
    totalMarks: 70,
    sections: [
      {
        name: "Section A: Globalisation",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "1", text: "‘Transnational organisations have contributed to an increase in global inequality.’ Evaluate this view.", marks: 35 },
          { id: "2", text: "‘Global migration has only negative consequences for developing countries.’ Evaluate this view.", marks: 35 }
        ]
      },
      {
        name: "Section B: Media",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "3", text: "‘Postmodernists have exaggerated the influence of the media in people’s lives today.’ Evaluate this view.", marks: 35 },
          { id: "4", text: "‘Governments have no control over media content.’ Evaluate this view.", marks: 35 }
        ]
      },
      {
        name: "Section C: Religion",
        instruction: "Answer one question from this section.",
        questions: [
          { id: "5", text: "‘Religious organisations serve the interests of the ruling class.’ Evaluate this view.", marks: 35 },
          { id: "6", text: "‘Religion has less social significance today than in the past.’ Evaluate this view.", marks: 35 }
        ]
      }
    ]
  },
  {
    id: "2025_P1_11",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2025",
    paperNumber: "9699/11",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two types of qualitative interview.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ethical factors to consider when conducting observational studies.", marks: 8 },
              { text: "Explain two strengths of using content analysis in sociological research.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Education is the most important influence in shaping class identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that human behaviour is shaped by nurture rather than nature.", marks: 26 },
          { id: "5", text: "Evaluate the positivist view that sociologists should use a scientific approach to research.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_P1_12",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2025",
    paperNumber: "9699/12",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two features of a laboratory experiment.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why some social groups are difficult to study.", marks: 8 },
              { text: "Explain two strengths of online questionnaires.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The peer group is the most important influence in shaping age identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that female identity is very different from fifty years ago.", marks: 26 },
          { id: "5", text: "Evaluate the use of structured interviews in sociological research.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_P1_13",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "May/June 2025",
    paperNumber: "9699/13",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways children learn about gender identity.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why unstructured interviews are high in validity.", marks: 8 },
              { text: "Explain two strengths of using laboratory experiments in sociological research.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Inadequate socialisation is the main cause of deviant behaviour.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that the family is the most important agent of socialisation in shaping identity.", marks: 26 },
          { id: "5", text: "Evaluate the view that sociological research can be value-free.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_P2_21",
    title: "Paper 2: The Family",
    series: "May/June 2025",
    paperNumber: "9699/21",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways increased life expectancy may impact upon the family.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons for greater gender equality in some families.", marks: 8 },
              { text: "Explain one strength and one limitation of liberal feminist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Social class is the most important factor affecting the experiences of children in the family.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that the main role of the family is to promote capitalist ideology.", marks: 26 },
          { id: "5", text: "Evaluate the view that marriage has become less important in society.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_P2_22",
    title: "Paper 2: The Family",
    series: "May/June 2025",
    paperNumber: "9699/22",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways social policies may impact upon the family.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why fewer people are getting married.", marks: 8 },
              { text: "Explain one strength and one limitation of postmodernist views on family diversity.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The main role of the family is to benefit society.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that roles in the family are still based on traditional gender identities.", marks: 26 },
          { id: "5", text: "Evaluate the view that the nuclear family is the dominant family type.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_P2_23",
    title: "Paper 2: The Family",
    series: "May/June 2025",
    paperNumber: "9699/23",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways childhood is a distinct period from adulthood.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two functions the family performs to benefit its members.", marks: 8 },
              { text: "Explain two strengths of functionalist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘There is no longer any social pressure on people to get married.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that cultural differences are the main cause of family diversity.", marks: 26 },
          { id: "5", text: "Evaluate the view that parenthood today is different from the past.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_FM_P1_12",
    title: "Paper 1: Socialisation, Identity and Methods of Research",
    series: "February/March 2025",
    paperNumber: "9699/12",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two types of masculinity.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two reasons why positivists use experiments in sociological research.", marks: 8 },
              { text: "Explain two limitations of questionnaires as a research method.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘Education is the most important influence on an individual’s gender identity.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that class is the main influence on social identity.", marks: 26 },
          { id: "5", text: "Evaluate the view that qualitative interview methods provide the best way to study social behaviour.", marks: 26 }
        ]
      }
    ]
  },
  {
    id: "2025_FM_P2_22",
    title: "Paper 2: The Family",
    series: "February/March 2025",
    paperNumber: "9699/22",
    duration: "1h 30m",
    totalMarks: 60,
    sections: [
      {
        name: "Section A",
        questions: [
          { id: "1", text: "Describe two ways social class can influence the experience of childhood in the family.", marks: 4 },
          {
            id: "2",
            text: "",
            marks: 14,
            subQuestions: [
              { text: "Explain two ways the family supports capitalism.", marks: 8 },
              { text: "Explain two strengths of Marxist views of the family.", marks: 6 }
            ]
          },
          {
            id: "3",
            text: "‘The main reason for family diversity is changes in social policy.’",
            marks: 16,
            subQuestions: [
              { text: "Explain this view.", marks: 10 },
              { text: "Using sociological material, give one argument against this view.", marks: 6 }
            ]
          }
        ]
      },
      {
        name: "Section B",
        instruction: "Answer one question in this section.",
        questions: [
          { id: "4", text: "Evaluate the view that marriage is no longer socially important.", marks: 26 },
          { id: "5", text: "Evaluate the view that there is greater gender equality in the family today.", marks: 26 }
        ]
      }
    ]
  }
];

export const practiceQuestions = [
  {
    id: 1,
    paper: "Paper 1",
    topic: "Methods",
    question: "Evaluate the view that quantitative research methods are the best way to study society.",
    markScheme: [
      "Define quantitative methods (e.g., surveys, structured interviews, experiments).",
      "Discuss the concept of reliability and representativeness.",
      "Explain the Positivist preference for objective, scientific data.",
      "Counter-argue with Interpretivist views on 'verstehen' and depth.",
      "Discuss limitations: lack of validity, social desirability bias, and imposition of researcher's values.",
      "Conclude by suggesting a 'triangulation' or 'methodological pluralism' approach."
    ],
    guidance: "High-scoring answers will balance the strengths of reliability against the weaknesses of validity. Mentioning specific examples like Durkheim's study of suicide adds weight."
  },
  {
    id: 2,
    paper: "Paper 2",
    topic: "Family",
    question: "Explain and assess the view that the nuclear family is no longer the dominant family type in modern industrial societies.",
    markScheme: [
      "Define the nuclear family and the concept of 'dominance'.",
      "Present evidence for diversity: lone-parent, reconstituted, same-sex, and cohabiting families.",
      "Discuss the 'Willmott and Young' view of the symmetrical family.",
      "Contrast with the 'New Right' view that the nuclear family remains the ideal/norm.",
      "Mention Postmodernist views on choice and the 'pure relationship' (Giddens).",
      "Evaluate the extent of change vs. continuity (e.g., the 'life cycle' argument)."
    ],
    guidance: "Ensure you distinguish between statistical dominance and ideological dominance. Use terms like 'cereal packet family' to show sociological awareness."
  },
  {
    id: 3,
    paper: "Paper 3",
    topic: "Education",
    question: "Evaluate the claim that the education system serves the interests of the ruling class.",
    markScheme: [
      "Outline the Marxist perspective (Bowles and Gintis, Althusser).",
      "Explain the 'correspondence principle' and the 'ideological state apparatus'.",
      "Discuss the 'hidden curriculum' and how it prepares students for exploitation.",
      "Counter with Functionalist views: meritocracy, social solidarity, and role allocation (Parsons, Davis and Moore).",
      "Include Interactionist critiques: labelling and student resistance (Willis' 'Lads').",
      "Conclude on the complexity of education's role in modern capitalism."
    ],
    guidance: "Focus on the tension between 'social control' and 'social mobility'. Mentioning Paul Willis's study provides excellent AO3 evaluation points."
  },
  {
    id: 4,
    paper: "Paper 1",
    topic: "Theory",
    question: "Evaluate the view that nature is more important than nurture in shaping human behaviour.",
    markScheme: [
      "Biological arguments: instincts, desires (maternal instinct, male aggression).",
      "Socio-biology (Wilson): strong influence of 'biogrammers'.",
      "Functionalist view (Parsons): family roles linked to biology.",
      "Nurture arguments: socialisation (language, feral children like Genie).",
      "Social forces (Durkheim): impact of society on individual behaviour.",
      "Interactionism (Mead): 'social self' created through interaction."
    ],
    guidance: "Balance biological determinism against social constructionism. Use feral children as a powerful counter-argument for the necessity of socialisation."
  },
  {
    id: 5,
    paper: "Paper 1",
    topic: "Methods",
    question: "Evaluate the view that qualitative methods are unsuitable for sociological research because they lack reliability.",
    markScheme: [
      "Positivist critique: qualitative data cannot be easily replicated.",
      "Subjectivity: data is value-laden and influenced by researcher presence.",
      "Researcher imposition and bias in unstructured settings.",
      "Interpretivist defense: suitability for understanding meanings and 'verstehen'.",
      "Validity: produce rich, deep data that explores subjective meanings.",
      "Rebuttal: some qualitative methods (semi-structured) can have measures of reliability."
    ],
    guidance: "Focus on the trade-off between reliability (consistency) and validity (truthfulness). High-level answers will question if reliability is even a valid goal for studying humans."
  },
  {
    id: 6,
    paper: "Paper 2",
    topic: "Gender",
    question: "Evaluate the view that conjugal roles are equally shared between men and women today.",
    markScheme: [
      "Symmetrical family (Willmott and Young): sharing childcare and housework.",
      "Commercialisation of housework: making domestic roles easier for men.",
      "The 'New Man': emergence of more involved fatherhood.",
      "Feminist critique: 'triple shift' or 'dual burden' (Oakley, Delphy).",
      "Asymmetrical family (Leonard): continuing unequal division of labor.",
      "Ethnocentricity: traditional roles persist in many non-Western cultures."
    ],
    guidance: "Distinguish between 'sharing' (doing some) and 'equality' (doing half). Use the concept of 'emotion work' to show deeper levels of inequality."
  },
  {
    id: 7,
    paper: "Paper 4",
    topic: "Globalisation",
    question: "Evaluate the view that only rich countries benefit from globalisation.",
    markScheme: [
      "Marxist view: globalisation as neo-colonialism/westernisation.",
      "Exploitation: LEDCs as satellite states for MNCs.",
      "Migration: 'brain drain' from developing to developed nations.",
      "Neoliberal view: free markets and global trade drive growth for all.",
      "Democratisation: spread of liberal values and human rights.",
      "Modernisation theory: spread of essential cultural values for development."
    ],
    guidance: "Consider economic, political, and cultural dimensions. Use examples of 'Tiger economies' (e.g., South Korea) to challenge the idea that only the West benefits."
  },
  {
    id: 8,
    paper: "Paper 4",
    topic: "Media",
    question: "Evaluate the view that the media has a significant influence on how people behave.",
    markScheme: [
      "Hypodermic syringe model: direct, immediate effect (Bandura's Bobo doll).",
      "Marxist view (Miliband): media promotes ruling class ideology.",
      "Cultural effects model: long-term, subtle 'drip-drip' influence.",
      "Uses and Gratifications (Blumer & McQuail): active audience choosing media.",
      "Reception Analysis (Morley): interpretations based on social background.",
      "Selective Filtering (Klapper): exposure, perception, and retention filters."
    ],
    guidance: "Contrast passive audience models with active audience models. Use moral panics (Cohen) as evidence of media power in specific contexts."
  },
  {
    id: 9,
    paper: "Paper 4",
    topic: "Religion",
    question: "Evaluate the view that religion serves to maintain the existing social order.",
    markScheme: [
      "Functionalist view (Durkheim): reinforces collective conscience and solidarity.",
      "Psychological functions (Malinowski): helping cope with life crises.",
      "Marxist view (Marx): 'opium of the people', legitimising inequality.",
      "Social control: religious teachings encouraging submission and order.",
      "Force for change (Weber): Calvinism and the rise of capitalism.",
      "Liberation Theology: religion used to challenge entrenched power."
    ],
    guidance: "Balance 'conservative force' theories against 'social change' theories. Use the 'dual character' of religion (Engels/Bloch) for a sophisticated evaluation."
  },
  {
    id: 10,
    paper: "Paper 1",
    topic: "Identity",
    question: "Describe two characteristics of youth identity.",
    markScheme: [
      "Rebellion and resistance (often to social control).",
      "Seeking fun and excitement, and experimentation.",
      "Concern with image and consumption.",
      "Focus on the use of technology especially digital media.",
      "Use of language e.g. slang, figures of speech."
    ],
    guidance: "Identify the characteristic clearly (1 mark) and provide a brief description or example (1 mark) for each."
  },
  {
    id: 11,
    paper: "Paper 1",
    topic: "Methods",
    question: "Explain two reasons why a researcher might use a pilot study.",
    markScheme: [
      "Identify problems with the research design (e.g., confusing questions).",
      "Save the researcher time and money by avoiding a failed full-scale study.",
      "Reveal problems with non-cooperation or non-response by respondents.",
      "Check the suitability or otherwise of a sampling frame.",
      "Feedback may be sought that might lead to new or refined objectives."
    ],
    guidance: "For each reason, explain how it improves the final research. Mentioning 'validity' or 'reliability' in your explanation will gain higher marks."
  },
  {
    id: 12,
    paper: "Paper 2",
    topic: "Childhood",
    question: "Explain the view that childhood as a distinct period of life is disappearing today.",
    markScheme: [
      "Postman: 'disappearance of childhood' due to the blurring of boundaries between children and adults.",
      "Media influence: children having access to adult information via the internet/TV.",
      "Consumerism: children being targeted as 'mini-adults' by marketers.",
      "Similarities in dress, behavior, and language between children and adults.",
      "Decline of traditional games and the rise of digital entertainment shared by all ages."
    ],
    guidance: "Focus on the 'information hierarchy' argument by Neil Postman. Contrast this with the 'toxic childhood' (Palmer) or 'child-centredness' views for evaluation if required."
  },
  {
    id: 13,
    paper: "Paper 3",
    topic: "Achievement",
    question: "Describe two ways that schools disadvantage boys.",
    markScheme: [
      "Teachers' negative labelling of boys as lazy or disruptive.",
      "Feminisation of schools: lack of male role models in primary education.",
      "Lower streaming or setting or less demanding materials for boys.",
      "Male anti-school subcultures (Willis' 'Lads').",
      "Methods of assessment: decline of traditional exams in favor of coursework (historically)."
    ],
    guidance: "Ensure you link the school factor directly to the impact on boys' achievement levels."
  },
  {
    id: 14,
    paper: "Paper 3",
    topic: "Achievement",
    question: "Explain two reasons why cultural differences between ethnic groups may affect their educational attainment.",
    markScheme: [
      "Family expectations and motivations (e.g., high value on education in Asian families - Basit).",
      "Language barriers or linguistic codes (Bernstein's restricted vs elaborated codes).",
      "Cultural capital or habitus: familiarity with dominant school norms (Bourdieu).",
      "Peer group involvement and school subcultures linked to ethnicity.",
      "Ethnocentric curriculum: school culture reflecting only the dominant ethnic group's values."
    ],
    guidance: "Use specific studies like Themina Basit (Asian families) or Gillborn (teacher labelling) to support your points."
  },
  {
    id: 15,
    paper: "Paper 1",
    topic: "Identity",
    question: "Evaluate the view that social class is no longer an important influence on a person’s identity.",
    markScheme: [
      "Evidence for disappearance: blurring of boundaries, social mobility.",
      "Individualism: identity linked to consumption and lifestyle choices.",
      "Postmodernism: class as a 'dated' concept; replaced by gender/ethnicity.",
      "Counter-argument: class remains a critical predictor of behavior (BSA survey).",
      "Objective differences: life chances still heavily class-based (Savage).",
      "Fragmented but not disappeared: diverse social characteristics within classes."
    ],
    guidance: "Contrast the 'death of class' (Pakulski and Waters) with the persistence of structural inequality (Savage). Mention 'cultural capital' as a bridge between the two."
  },
  {
    id: 16,
    paper: "Paper 2",
    topic: "Policy",
    question: "Evaluate the view that social policies have led to an increase in family diversity.",
    markScheme: [
      "Divorce Reform Acts: facilitating lone-parent and reconstituted families.",
      "Civil Partnership/Same-Sex Marriage Acts: legalising diverse family forms.",
      "Welfare state: supporting single parents and reducing dependency on male breadwinners.",
      "Counter-argument: policies can also reinforce traditional families (e.g., tax allowances for married couples).",
      "Other factors: secularisation, changing gender roles, and economic shifts.",
      "New Right view: policies as 'perverse incentives' that undermine the nuclear family."
    ],
    guidance: "Focus on whether policy *causes* change or simply *reflects* existing social shifts. Use the New Right as a strong evaluative perspective."
  },
  {
    id: 17,
    paper: "Paper 3",
    topic: "Theory",
    question: "Evaluate the view that education is an agent of social control.",
    markScheme: [
      "Marxist view: ideological state apparatus (Althusser) and correspondence principle.",
      "Hidden curriculum: teaching obedience and hierarchy for the capitalist workplace.",
      "Functionalist view: social solidarity and value consensus (Durkheim).",
      "Role allocation: meritocratic selection for the labor market (Parsons).",
      "Interactionist view: labelling and self-fulfilling prophecy as forms of control.",
      "Resistance: student subcultures (Willis) challenging school authority."
    ],
    guidance: "High-scoring answers will distinguish between 'positive' control (socialisation) and 'negative' control (exploitation). Paul Willis is essential for AO3."
  },
  {
    id: 18,
    paper: "Paper 4",
    topic: "Globalisation",
    question: "Evaluate the view that globalisation has made crime harder to police.",
    markScheme: [
      "Transnational crime: crimes crossing borders (human trafficking, drug trade).",
      "Organised criminal groups: operating from 'safe havens' to avoid detection.",
      "Digital technology: dark net, encryption, and cryptocurrencies (Bitcoin).",
      "Counter-argument: international cooperation (Interpol, Europol).",
      "Strengthened law enforcement: new powers and resources to combat global threats.",
      "Local embedding: crime groups still rely on local contexts and are subject to local justice."
    ],
    guidance: "Discuss the 'shadow economy' (Castells). Balance the 'borderless' nature of crime against the increasing sophistication of global surveillance."
  },
  {
    id: 19,
    paper: "Paper 4",
    topic: "Media",
    question: "Evaluate the view that media content reflects the interests of the rich and powerful.",
    markScheme: [
      "Marxist view: owners control content to promote capitalist values (Miliband).",
      "False consciousness: media as entertainment to distract from reality.",
      "Global conglomerates: power to bypass national restrictions.",
      "Pluralist view: media serves diverse interests; no single group controls.",
      "Consumer demand: media must produce what audiences want to buy.",
      "New media: fragmented control; individuals can influence content."
    ],
    guidance: "Contrast the 'manipulative' (Marxist) approach with the 'market-led' (Pluralist) approach. Use the Glasgow Media Group studies as evidence for bias."
  },
  {
    id: 20,
    paper: "Paper 4",
    topic: "Religion",
    question: "Evaluate the view that the growth of religious fundamentalism is a reaction to globalisation.",
    markScheme: [
      "Cultural defense (Bruce): protecting identity against Western values.",
      "Response to radical change (Bauman): seeking certainty in an uncertain world.",
      "Resistance to materialism and secular liberal values.",
      "Counter-argument: fundamentalism encouraged by new communication technologies.",
      "Modernist expression: search for personal identity in a global market.",
      "Inequality: response to marginalisation in global capitalism."
    ],
    guidance: "Focus on the 'clash of civilisations' (Huntington) vs 'cultural hybridity' debate. Use Islamic fundamentalism as a primary case study."
  },
  {
    id: 21,
    paper: "Paper 1",
    topic: "Theory",
    question: "Evaluate the view that society can be studied objectively.",
    markScheme: [
      "Positivist view: hypothetico-deductive method and value-freedom.",
      "Falsification (Popper): objective testing of theories.",
      "Weber: objectivity is possible in research execution, if not topic selection.",
      "Interpretivist view: humans have free will; meanings are subjective.",
      "Researcher bias: values inevitably influence selection and interpretation.",
      "Feminist/Marxist view: research should be 'committed' to social change (Becker)."
    ],
    guidance: "Distinguish between 'value-freedom' and 'value-neutrality'. High-scoring answers will discuss the 'myth of objectivity' in social sciences."
  },
  {
    id: 22,
    paper: "Paper 2",
    topic: "Theory",
    question: "Evaluate the view that Marxist explanations offer the best understanding of the role of the family.",
    markScheme: [
      "Reproduction of labor power: family socialises children for capitalism.",
      "Ideological functions: transmitting ruling-class ideology (Althusser).",
      "Unit of consumption: family as a market for capitalist goods.",
      "Functionalist critique: family promotes social stability and cohesion (Murdock).",
      "Feminist critique: Marxism ignores patriarchal exploitation within the family.",
      "Postmodernist critique: family forms are too diverse for a single 'grand narrative'."
    ],
    guidance: "Focus on the 'dark side' of the family. Contrast the 'cushioning effect' (Zaretsky) with the 'warm bath' (Parsons)."
  }
];

export const paperTopics = {
  "Paper 1": ["Socialisation", "Social Control", "Identity", "Methods", "Theory"],
  "Paper 2": ["Theories of Family", "Family Diversity", "Gender Roles", "Childhood", "Demography"],
  "Paper 3": ["Theories of Education", "Achievement", "Meritocracy", "Hidden Curriculum", "Policy"],
  "Paper 4": ["Globalisation", "Media", "Religion"]
};

export const paperSubTopics: Record<string, Record<string, string[]>> = {
  "Paper 1": {
    "Socialisation": ["Primary vs Secondary Socialisation", "Agencies of Socialisation (Family, Peer Group, Media, etc.)", "The Nature vs Nurture Debate", "Feral Children and Social Isolation", "Functionalist vs Marxist Views on Socialisation"],
    "Social Control": ["Formal vs Informal Social Control", "Conformity and Deviance", "Sanctions and Rewards", "Resistance to Social Control", "Power and Authority"],
    "Identity": ["The Social Construction of Identity (Mead, Cooley, Goffman)", "Social Class Identity (Savage, Bourdieu, Skeggs)", "Gender Identity (Oakley, McRobbie, Connell)", "Ethnic Identity (Modood, Hall, Gilroy)", "Age Identity (Postman, Featherstone, Hepworth)", "Disability and Identity (Medical vs Social Models)", "Globalisation and Identity (Hybridity, Cyber-identities)"],
    "Methods": ["Questionnaires (Postal/Online)", "Interviews (Structured/Unstructured/Semi/Group)", "Observations (Participant/Non-Participant, Overt/Covert)", "Experiments (Lab/Field)", "Content Analysis", "Case Studies", "Pilot Studies", "Sampling (Random, Stratified, Quota, Snowball)", "Triangulation and Methodological Pluralism", "Validity, Reliability, Representativeness", "Objectivity and Value-Freedom", "Ethical Issues"],
    "Theory": ["Positivism vs Interpretivism", "Functionalism (Durkheim, Parsons)", "Marxism (Marx, Althusser, Gramsci)", "Feminism (Liberal, Radical, Marxist, Difference)", "Interactionism (Symbolic Interactionism, Labelling)", "Postmodernism (Lyotard, Baudrillard)", "Structuration Theory (Giddens)"]
  },
  "Paper 2": {
    "Theories of Family": ["Functionalist (Murdock, Parsons)", "Marxist (Engels, Zaretsky)", "Feminist (Oakley, Firestone, Greer)", "Postmodernist (Stacey, Giddens, Beck)", "New Right Perspective"],
    "Family Diversity": ["Family Types (Nuclear, Extended, Reconstituted, Lone-parent)", "Cultural and Ethnic Diversity", "Sexual Orientation Diversity", "Life Cycle and Generational Diversity", "Cohabitation, Divorce, and Singlehood"],
    "Gender Roles": ["Conjugal Roles (Bott, Willmott & Young)", "Domestic Division of Labour", "Power and Decision Making (Pahl & Vogler)", "Domestic Violence", "The 'Triple Shift' and 'Dual Burden'"],
    "Childhood": ["Social Construction of Childhood (Ariès)", "Historical Changes in Childhood", "The Future of Childhood (Postman, Palmer)", "Child-Centredness", "Cross-cultural Variations in Childhood"],
    "Demography": ["Birth Rates and Fertility", "Death Rates and Life Expectancy", "Migration and Globalisation", "The Ageing Population", "Impact of Social Policy on Demography"]
  },
  "Paper 3": {
    "Theories of Education": ["Functionalist (Durkheim, Parsons, Davis & Moore)", "Marxist (Althusser, Bowles & Gintis)", "Interactionist (Hargreaves, Rist)", "Feminist View", "Social Democratic Perspective"],
    "Achievement": ["Social Class (Material vs Cultural Deprivation)", "Gender (External vs Internal Factors)", "Ethnicity (Language, Family, Racism)", "Intersectionality in Achievement"],
    "Meritocracy": ["The Myth of Meritocracy", "Social Mobility", "Role Allocation", "Equality of Opportunity vs Outcome"],
    "Hidden Curriculum": ["Labelling and Self-Fulfilling Prophecy", "Subcultures and Resistance (Willis)", "Setting and Streaming", "Teacher-Pupil Relationships"],
    "Policy": ["Marketisation and Choice", "Privatisation of Education", "Compensatory Education", "Globalisation and Educational Policy", "Vocationalism"]
  },
  "Paper 4": {
    "Globalisation": ["Modernisation Theory (Rostow)", "Dependency Theory (Frank)", "World Systems Theory (Wallerstein)", "Global Inequality and Poverty", "Migration and Transnationalism", "Global Culture and Hybridity", "Global Social Movements"],
    "Media": ["Ownership and Control (Marxist vs Pluralist)", "Representation of Gender, Class, Ethnicity, and Age", "New Media and Digital Technology", "Media Effects Models (Hypodermic Syringe, Cultural Effects, Uses & Gratifications)", "Moral Panics (Cohen)", "Globalisation and the Media"],
    "Religion": ["Functionalist (Durkheim, Malinowski, Parsons)", "Marxist (Marx, Engels)", "Feminist (El Saadawi, Armstrong)", "Secularisation Debate (Wilson, Berger, Stark & Bainbridge)", "Fundamentalism", "Religion and Social Change (Weber)", "New Religious Movements and Cults"]
  }
};
