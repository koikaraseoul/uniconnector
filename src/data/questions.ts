export interface Question {
  id: number;
  stage: 1 | 2 | 3 | 4 | 5;
  stageName: 'Safety' | 'Curiosity' | 'Vulnerability' | 'Growth' | 'Integration';
  dateVersion: string;
  friendVersion: string;
  description: string;
}

export const questions: Question[] = [
  // Stage 1: Safety (Building trust and comfort)
  {
    id: 1,
    stage: 1,
    stageName: 'Safety',
    dateVersion: "What's something that made you smile this week?",
    friendVersion: "What's been the highlight of your week?",
    description: "Creating initial comfort and positive connection"
  },
  {
    id: 2,
    stage: 1,
    stageName: 'Safety',
    dateVersion: "What's a place that feels like home to you, and why?",
    friendVersion: "What's a place where you feel most yourself?",
    description: "Sharing safe, grounding experiences"
  },
  {
    id: 3,
    stage: 1,
    stageName: 'Safety',
    dateVersion: "What's something you're genuinely excited about right now?",
    friendVersion: "What's something you're looking forward to lately?",
    description: "Building positive emotional connection"
  },

  // Stage 2: Curiosity (Exploring perspectives and experiences)
  {
    id: 4,
    stage: 2,
    stageName: 'Curiosity',
    dateVersion: "What's a belief you've changed your mind about as you've grown?",
    friendVersion: "How has your perspective on life shifted in recent years?",
    description: "Exploring personal growth and changing viewpoints"
  },
  {
    id: 5,
    stage: 2,
    stageName: 'Curiosity',
    dateVersion: "What's something about yourself that might surprise me?",
    friendVersion: "What's something about you that people often don't realize?",
    description: "Revealing unexpected aspects of personality"
  },
  {
    id: 6,
    stage: 2,
    stageName: 'Curiosity',
    dateVersion: "If you could have dinner with anyone, living or dead, who would it be and what would you want to ask them?",
    friendVersion: "Who's someone you'd love to have a deep conversation with, and what would you want to explore?",
    description: "Understanding values and intellectual curiosity"
  },

  // Stage 3: Vulnerability (Deeper sharing and emotional openness)
  {
    id: 7,
    stage: 3,
    stageName: 'Vulnerability',
    dateVersion: "What's something you've struggled with that has ultimately made you stronger?",
    friendVersion: "What's a challenge you've faced that taught you something important about yourself?",
    description: "Sharing personal struggles and growth"
  },
  {
    id: 8,
    stage: 3,
    stageName: 'Vulnerability',
    dateVersion: "What does love mean to you, based on your experiences?",
    friendVersion: "What does deep friendship mean to you?",
    description: "Exploring core relationship values"
  },
  {
    id: 9,
    stage: 3,
    stageName: 'Vulnerability',
    dateVersion: "When do you feel most vulnerable, and how do you handle those moments?",
    friendVersion: "What makes you feel most vulnerable, and how do you take care of yourself in those times?",
    description: "Sharing emotional vulnerability and coping strategies"
  },

  // Stage 4: Growth (Future aspirations and mutual support)
  {
    id: 10,
    stage: 4,
    stageName: 'Growth',
    dateVersion: "What's something you're working on becoming, and how can I support that?",
    friendVersion: "What's something you're trying to grow into, and how can I support that journey?",
    description: "Discussing personal development and mutual support"
  },
  {
    id: 11,
    stage: 4,
    stageName: 'Growth',
    dateVersion: "What would you want to create together if anything was possible?",
    friendVersion: "What would you love for us to experience or create together?",
    description: "Exploring shared future possibilities"
  },
  {
    id: 12,
    stage: 4,
    stageName: 'Growth',
    dateVersion: "How do you want to feel when you're with someone you love?",
    friendVersion: "How do you want to feel in your closest friendships?",
    description: "Defining ideal relationship dynamics"
  },

  // Stage 5: Integration (Reflection and commitment to connection)
  {
    id: 13,
    stage: 5,
    stageName: 'Integration',
    dateVersion: "What has this conversation revealed to you about yourself or about us?",
    friendVersion: "What has this conversation helped you realize or appreciate?",
    description: "Reflecting on insights gained from the conversation"
  },
  {
    id: 14,
    stage: 5,
    stageName: 'Integration',
    dateVersion: "What's one thing you're grateful for about getting to know me better?",
    friendVersion: "What's something you appreciate about our friendship after this conversation?",
    description: "Expressing gratitude and appreciation"
  },
  {
    id: 15,
    stage: 5,
    stageName: 'Integration',
    dateVersion: "How can we keep this level of connection alive between us?",
    friendVersion: "How can we continue creating space for conversations like this?",
    description: "Committing to ongoing deeper connection"
  }
];

export const getQuestionsForSession = (mode: 'date' | 'friend', depth: 5 | 10 | 15): Question[] => {
  const selectedQuestions = questions.slice(0, depth);
  return selectedQuestions;
};

export const getStageInfo = (stage: number) => {
  const stageMap = {
    1: { name: 'Safety', description: 'Building trust and comfort', color: 'bg-warm-peach/20' },
    2: { name: 'Curiosity', description: 'Exploring perspectives', color: 'bg-calm-lavender/20' },
    3: { name: 'Vulnerability', description: 'Deeper sharing', color: 'bg-gentle-blue/20' },
    4: { name: 'Growth', description: 'Future aspirations', color: 'bg-soft-green/20' },
    5: { name: 'Integration', description: 'Reflection and commitment', color: 'bg-accent/20' }
  };
  return stageMap[stage as keyof typeof stageMap];
};