import { TextbookRAGEntry } from './sociologyRAG';
import { socialisationDB } from './dbSocialisation';
import { socialControlDB } from './dbSocialControl';
import { identityDB } from './dbIdentity';
import { methodsDB } from './dbMethods';
import { theoryDB } from './dbTheory';

export const deepenedPaper1Entries: Record<string, Record<string, Partial<TextbookRAGEntry>>> = {
  "Socialisation": socialisationDB,
  "Social Control": socialControlDB,
  "Identity": identityDB,
  "Methods": methodsDB,
  "Theory": theoryDB
};
