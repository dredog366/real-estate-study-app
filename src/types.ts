export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  category: string;
  mastered: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface QuizSession {
  id: string;
  date: string;
  score: number;
  total: number;
  category: string;
  incorrectIds: string[];
}

export interface FlashcardProgress {
  masteredIds: string[];
  reviewedIds: string[];
}

export type AppView = 'home' | 'flashcards' | 'quiz' | 'progress' | 'review';

export interface AppState {
  view: AppView;
  quizHistory: QuizSession[];
  flashcardProgress: FlashcardProgress;
}
