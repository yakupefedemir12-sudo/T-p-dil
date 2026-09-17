export interface FormulaCard {
  title: string;
  pattern: string;
  rules: string[];
  clinicalExample: string;
  exampleTr: string;
}

export interface Module1Formula {
  coreLogic: string; // 2-3 cümleyle hekim mantığı
  primaryFormula: string; // [Yapı A + İsim/V-ing] vs [Yapı B + SVO]
  formulaCards: FormulaCard[];
  punctuationTips: string[]; // Noktalama işaretleri ipuçları (virgül, nokta vb.)
}

export interface Module2Word {
  verb: string;
  meaningTr: string;
  synonyms: string[];
  tipdilCollocation: string;
  exampleSentence: string;
  clinicalContext: string;
}

export interface Module3Sentence {
  originalEn: string;
  breakdown: {
    subject: string;
    mainVerb: string;
    conjunctionClause: string;
    objectOrComplement: string;
  };
  translationTr: string;
  clinicalInsight: string;
}

export interface Module4Trap {
  trapName: string;
  howCommissionTricks: string;
  deceptiveOptionExample: string;
  radarKeywords: string[]; // Soru kökünde bu kelimeleri görünce doğrudan bu konuya yönel
  defenseStrategy: string;
}

export interface CheckUpQuestionOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  whyEliminatedOrCorrect: string;
}

export interface Module5Question {
  id: string;
  type: 'Kelime/Kalıp' | 'Gramer/Bağlaç' | 'Cümle Tamamlama';
  questionText: string;
  options: CheckUpQuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  translationTr: string;
  rationale: string;
  distractorAnalysis: string;
}

export interface TopicLesson {
  id: string;
  title: string;
  category: 'Bağlaçlar' | 'Zaman & Tense' | 'Kısaltmalar (Participle)' | 'Relative Clauses' | 'Kelimeler & Phrasal' | 'Cümle Tamamlama';
  badge: string;
  frequencyRank: 'En Çok Çıkan (%100 Sınav Garantili)' | 'Çok Yüksek Öncelik (%85+)' | 'Yüksek Öncelik (%70+)';
  introNote: string; // Samimi hekim dayanışması notu
  module1: Module1Formula;
  module2: Module2Word[];
  module3: Module3Sentence[];
  module4: Module4Trap[];
  module5: Module5Question[];
}

export interface UserQuizProgress {
  answeredQuestions: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>; // questionId -> chosen answer
  completedTopics: string[];
  bookmarkedWords: Module2Word[];
  savedFormulas: Array<{ topicTitle: string; formula: string }>;
}
