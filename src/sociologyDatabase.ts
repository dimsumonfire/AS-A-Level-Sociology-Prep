import { TextbookRAGEntry } from './sociologyRAG';
import { socialisationDB } from './dbSocialisation';
import { socialControlDB } from './dbSocialControl';
import { identityDB } from './dbIdentity';
import { methodsDB } from './dbMethods';
import { theoryDB } from './dbTheory';
import { familyTheoriesDB } from './dbFamilyTheories';
import { familyDiversityDB } from './dbFamilyDiversity';
import { genderRolesDB } from './dbGenderRoles';
import { childhoodDB } from './dbChildhood';
import { demographyDB } from './dbDemography';
import { educationTheoriesDB } from './dbEducationTheories';
import { achievementDB } from './dbAchievement';
import { meritocracyDB } from './dbMeritocracy';
import { hiddenCurriculumDB } from './dbHiddenCurriculum';
import { educationPolicyDB } from './dbEducationPolicy';
import { globalisationDB } from './dbGlobalisation';
import { mediaDB } from './dbMedia';
import { religionDB } from './dbReligion';

export const deepenedPaper1Entries: Record<string, Record<string, Partial<TextbookRAGEntry>>> = {
  "Socialisation": socialisationDB,
  "Social Control": socialControlDB,
  "Identity": identityDB,
  "Methods": methodsDB,
  "Theory": theoryDB
};

export const deepenedPaper2Entries: Record<string, Record<string, Partial<TextbookRAGEntry>>> = {
  "Theories of Family": familyTheoriesDB,
  "Family Diversity": familyDiversityDB,
  "Gender Roles": genderRolesDB,
  "Childhood": childhoodDB,
  "Demography": demographyDB
};

export const deepenedPaper3Entries: Record<string, Record<string, Partial<TextbookRAGEntry>>> = {
  "Theories of Education": educationTheoriesDB,
  "Achievement": achievementDB,
  "Meritocracy": meritocracyDB,
  "Hidden Curriculum": hiddenCurriculumDB,
  "Policy": educationPolicyDB
};

export const deepenedPaper4Entries: Record<string, Record<string, Partial<TextbookRAGEntry>>> = {
  "Globalisation": globalisationDB,
  "Media": mediaDB,
  "Religion": religionDB
};

export const allDeepenedEntries: Record<string, Record<string, Record<string, Partial<TextbookRAGEntry>>>> = {
  "Paper 1": deepenedPaper1Entries,
  "Paper 2": deepenedPaper2Entries,
  "Paper 3": deepenedPaper3Entries,
  "Paper 4": deepenedPaper4Entries
};


