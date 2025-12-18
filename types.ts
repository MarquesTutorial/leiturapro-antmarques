export interface SchoolClass {
  id: string;
  name: string; // Ex: "Turma A", "2º Ano B"
  gradeLevel: string; // Ex: "2º Ano Fundamental"
  year: number; // Ex: 2024
}

export interface Student {
  id: string;
  name: string;
  classId: string; // Link to SchoolClass
  readingLevel: string; // Ex: "Iniciante", "Intermediário", "Avançado"
  avatarUrl: string;
}

export interface Competency {
  id: string;
  name: string;
  description: string;
  category: 'Leitura' | 'Matemática' | 'Socioemocional' | 'Geral';
  weight: number; // Valor do peso (ex: 0 a 10 ou 0 a 100%)
}

export interface AssessmentCriteria {
  fluency: {
    rhythm: boolean;      // Lê com ritmo adequado
    pauses: boolean;      // Faz pausas corretas
    intonation: boolean;  // Apresenta entonação
    security: boolean;    // Demonstra segurança
  };
  decoding: {
    recognition: boolean; // Reconhecer palavras sem soletrar
    noOmissions: boolean; // Evitar trocas, omissão ou acréscimo
    complexWords: boolean;// Lê corretamente palavras longas
  };
  comprehension: {
    mainIdea: boolean;    // Ideia principal do texto
    explicit: boolean;    // Informações explícitas
    implicit: boolean;    // Informações implícitas
    inference: boolean;   // Inferências simples
    titleRelation: boolean;// Relação com o título
  };
  math?: {
    numberSense: boolean;    // Senso numérico / Contagem
    operations: boolean;      // Operações básicas (+, -, etc)
    problemSolving: boolean;  // Resolução de problemas
    logicReasoning: boolean;  // Raciocínio lógico
    geometry: boolean;        // Formas e Geometria
  };
}

export interface Assessment {
  id: string;
  studentId: string;
  date: string;
  textTitle: string;
  wpm: number; // Words Per Minute
  accuracy: number; // Percentage
  comprehension: number; // 1-10 scale
  mathScore?: number; // 1-10 scale (Novo)
  criteria?: AssessmentCriteria; // Novos critérios detalhados
  notes: string;
  aiFeedback?: string;
}

export interface ReadingMaterial {
  title: string;
  content: string;
  level: string;
  suggestedQuestions: string[];
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  CLASSES = 'CLASSES',
  STUDENTS = 'STUDENTS',
  STUDENT_HISTORY = 'STUDENT_HISTORY',
  ASSESSMENT = 'ASSESSMENT',
  GENERATOR = 'GENERATOR',
  COMPETENCIES = 'COMPETENCIES'
}