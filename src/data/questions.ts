export interface Question {
  id: number;
  stage: 1 | 2 | 3 | 4 | 5;
  stageName: 'Safety' | 'Values' | 'Turning Point' | 'Shared Meaning' | 'Intention';
  text: string;
  description: string;
}

export interface QuestionSet {
  id: number;
  name: string;
  questions: Question[];
}

// 10 Sets of 5 Questions (One per Stage)
export const fiveQuestionSets: QuestionSet[] = [
  {
    id: 1,
    name: "Set 1",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something you've been enjoying lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's a value you try to live by?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "When was a moment you felt you really changed?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What do you think we might understand about each other?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's one intention you're holding right now in life?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 2,
    name: "Set 2",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something that recently made you feel light or happy?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What kinds of people do you admire?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "What's an experience that challenged your beliefs?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What do you think we unexpectedly have in common?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's something you hope to grow in the next chapter of life?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 3,
    name: "Set 3",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "How's your energy been lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's something you believe in even when others don't?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "What's a small failure that taught you something big?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What's something about this conversation that feels different?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What would you love to invite more of into your life?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 4,
    name: "Set 4",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's been giving you comfort lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What does \"being yourself\" mean to you?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "Have you ever had a moment where everything shifted?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What do you think creates trust between people?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What are you working on — internally or externally — right now?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 5,
    name: "Set 5",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What do you need more of right now: fun, rest, or clarity?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's a belief that has stayed with you for years?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "What's something that changed the way you relate to others?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "Do you think people connect more over joy or struggle?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's something you're open to exploring more in life?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 6,
    name: "Set 6",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's been helping you stay grounded lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's a value you inherited from family — for better or worse?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "What's a time you felt truly lost and what helped you return?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "When do you feel most seen by someone?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's something meaningful you want to create or experience?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 7,
    name: "Set 7",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What do your best days tend to look like?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What kind of decisions are easiest for you to make?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "Have you ever been humbled in an unexpected way?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What kinds of questions spark connection for you?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What feels worth prioritizing this year?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 8,
    name: "Set 8",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something small that brings you peace?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What do you wish more people appreciated in life?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "When did you last let go of something that wasn't serving you?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What do you tend to notice in others quickly?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What are you becoming more honest about with yourself?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 9,
    name: "Set 9",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something fun or spontaneous you've done lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's a trait you respect but struggle to embody?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "What's a story you rarely tell but still carry with you?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "What kinds of shared moments stick with you longest?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's something you want to give or offer to the world?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 10,
    name: "Set 10",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What helps you feel safe in a conversation?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 2, stageName: 'Values', text: "What's something that quietly defines you?", description: "Understanding core principles" },
      { id: 3, stage: 3, stageName: 'Turning Point', text: "When did you feel like you were starting over?", description: "Exploring personal transformation" },
      { id: 4, stage: 4, stageName: 'Shared Meaning', text: "How do you know when a connection is mutual?", description: "Building mutual understanding" },
      { id: 5, stage: 5, stageName: 'Intention', text: "What's something you're moving toward with more courage?", description: "Sharing future aspirations" }
    ]
  }
];

// 10 Sets of 10 Questions (2 per stage) - showing first 3 sets for brevity
export const tenQuestionSets: QuestionSet[] = [
  {
    id: 1,
    name: "Set 1",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something you're enjoying these days?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 1, stageName: 'Safety', text: "How do you usually unwind after a busy day?", description: "Creating initial comfort and positive connection" },
      { id: 3, stage: 2, stageName: 'Values', text: "What's a value you try to live by no matter what?", description: "Understanding core principles" },
      { id: 4, stage: 2, stageName: 'Values', text: "What kind of qualities do you admire in others?", description: "Understanding core principles" },
      { id: 5, stage: 3, stageName: 'Turning Point', text: "Was there a moment when you saw things differently?", description: "Exploring personal transformation" },
      { id: 6, stage: 3, stageName: 'Turning Point', text: "What's a challenge you faced that changed your perspective?", description: "Exploring personal transformation" },
      { id: 7, stage: 4, stageName: 'Shared Meaning', text: "When do you feel most understood by others?", description: "Building mutual understanding" },
      { id: 8, stage: 4, stageName: 'Shared Meaning', text: "What's a connection experience that surprised you?", description: "Building mutual understanding" },
      { id: 9, stage: 5, stageName: 'Intention', text: "What's one thing you're hoping to focus on soon?", description: "Sharing future aspirations" },
      { id: 10, stage: 5, stageName: 'Intention', text: "What's a dream you'd love to pursue, even if it feels far away?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 2,
    name: "Set 2",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's been making you smile lately?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 1, stageName: 'Safety', text: "What do you do to boost your mood when you're down?", description: "Creating initial comfort and positive connection" },
      { id: 3, stage: 2, stageName: 'Values', text: "What's something that's non-negotiable for you?", description: "Understanding core principles" },
      { id: 4, stage: 2, stageName: 'Values', text: "What values do you think shape your friendships?", description: "Understanding core principles" },
      { id: 5, stage: 3, stageName: 'Turning Point', text: "What's a lesson you learned the hard way?", description: "Exploring personal transformation" },
      { id: 6, stage: 3, stageName: 'Turning Point', text: "Has a past experience changed how you approach relationships?", description: "Exploring personal transformation" },
      { id: 7, stage: 4, stageName: 'Shared Meaning', text: "Do you think people connect more over shared struggles or joys?", description: "Building mutual understanding" },
      { id: 8, stage: 4, stageName: 'Shared Meaning', text: "What's a moment when you felt a real spark with someone?", description: "Building mutual understanding" },
      { id: 9, stage: 5, stageName: 'Intention', text: "What would you like to grow more of in your life?", description: "Sharing future aspirations" },
      { id: 10, stage: 5, stageName: 'Intention', text: "What kind of relationship or friendship are you open to right now?", description: "Sharing future aspirations" }
    ]
  },
  // Additional sets would follow the same pattern...
  {
    id: 3,
    name: "Set 3",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something relaxing or fun you did recently?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 1, stageName: 'Safety', text: "How do you recharge when life gets hectic?", description: "Creating initial comfort and positive connection" },
      { id: 3, stage: 2, stageName: 'Values', text: "What's a belief you hold even if others don't agree?", description: "Understanding core principles" },
      { id: 4, stage: 2, stageName: 'Values', text: "What personal quality do you value most in yourself?", description: "Understanding core principles" },
      { id: 5, stage: 3, stageName: 'Turning Point', text: "Was there a time you had to make a difficult choice?", description: "Exploring personal transformation" },
      { id: 6, stage: 3, stageName: 'Turning Point', text: "How have past challenges shaped who you are?", description: "Exploring personal transformation" },
      { id: 7, stage: 4, stageName: 'Shared Meaning', text: "What do you think helps build trust quickly?", description: "Building mutual understanding" },
      { id: 8, stage: 4, stageName: 'Shared Meaning', text: "What's an unexpected similarity you've found with others?", description: "Building mutual understanding" },
      { id: 9, stage: 5, stageName: 'Intention', text: "What's something new you want to try or explore?", description: "Sharing future aspirations" },
      { id: 10, stage: 5, stageName: 'Intention', text: "What kind of support do you want from others right now?", description: "Sharing future aspirations" }
    ]
  }
];

// 10 Sets of 15 Questions (3 per stage) - showing first 3 sets for brevity
export const fifteenQuestionSets: QuestionSet[] = [
  {
    id: 1,
    name: "Set 1",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's something that made you smile this week?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 1, stageName: 'Safety', text: "When do you feel most relaxed during your day?", description: "Creating initial comfort and positive connection" },
      { id: 3, stage: 1, stageName: 'Safety', text: "What's a small joy you often notice but rarely mention?", description: "Creating initial comfort and positive connection" },
      { id: 4, stage: 2, stageName: 'Values', text: "What's a value that guides your decisions?", description: "Understanding core principles" },
      { id: 5, stage: 2, stageName: 'Values', text: "Who has influenced your core beliefs the most?", description: "Understanding core principles" },
      { id: 6, stage: 2, stageName: 'Values', text: "What's something you stand up for, no matter what?", description: "Understanding core principles" },
      { id: 7, stage: 3, stageName: 'Turning Point', text: "Was there a moment that changed your life's direction?", description: "Exploring personal transformation" },
      { id: 8, stage: 3, stageName: 'Turning Point', text: "What's a challenge that helped you grow unexpectedly?", description: "Exploring personal transformation" },
      { id: 9, stage: 3, stageName: 'Turning Point', text: "When did you last feel truly proud of overcoming something?", description: "Exploring personal transformation" },
      { id: 10, stage: 4, stageName: 'Shared Meaning', text: "What's a quality you've noticed we share?", description: "Building mutual understanding" },
      { id: 11, stage: 4, stageName: 'Shared Meaning', text: "When have you felt understood in a surprising way?", description: "Building mutual understanding" },
      { id: 12, stage: 4, stageName: 'Shared Meaning', text: "How do you feel connection builds between people?", description: "Building mutual understanding" },
      { id: 13, stage: 5, stageName: 'Intention', text: "What's something you want to invite more of into your life?", description: "Sharing future aspirations" },
      { id: 14, stage: 5, stageName: 'Intention', text: "What's a dream or goal that excites you right now?", description: "Sharing future aspirations" },
      { id: 15, stage: 5, stageName: 'Intention', text: "If fear weren't a factor, what would you try next?", description: "Sharing future aspirations" }
    ]
  },
  {
    id: 2,
    name: "Set 2",
    questions: [
      { id: 1, stage: 1, stageName: 'Safety', text: "What's a place or activity where you feel truly at ease?", description: "Creating initial comfort and positive connection" },
      { id: 2, stage: 1, stageName: 'Safety', text: "How do you like to unwind after a stressful day?", description: "Creating initial comfort and positive connection" },
      { id: 3, stage: 1, stageName: 'Safety', text: "What's a comforting habit or routine you have?", description: "Creating initial comfort and positive connection" },
      { id: 4, stage: 2, stageName: 'Values', text: "What's a personal belief you've held since childhood?", description: "Understanding core principles" },
      { id: 5, stage: 2, stageName: 'Values', text: "How do your values show up in your friendships?", description: "Understanding core principles" },
      { id: 6, stage: 2, stageName: 'Values', text: "What's something you appreciate in people you trust?", description: "Understanding core principles" },
      { id: 7, stage: 3, stageName: 'Turning Point', text: "When was the last time you had to change your perspective?", description: "Exploring personal transformation" },
      { id: 8, stage: 3, stageName: 'Turning Point', text: "What's a time when a failure turned into a lesson?", description: "Exploring personal transformation" },
      { id: 9, stage: 3, stageName: 'Turning Point', text: "Have you ever surprised yourself with how you handled something hard?", description: "Exploring personal transformation" },
      { id: 10, stage: 4, stageName: 'Shared Meaning', text: "What's a way you think people really connect?", description: "Building mutual understanding" },
      { id: 11, stage: 4, stageName: 'Shared Meaning', text: "When have you felt like someone \"got\" you deeply?", description: "Building mutual understanding" },
      { id: 12, stage: 4, stageName: 'Shared Meaning', text: "What's a shared experience that shaped your relationships?", description: "Building mutual understanding" },
      { id: 13, stage: 5, stageName: 'Intention', text: "What's a goal you're quietly working toward?", description: "Sharing future aspirations" },
      { id: 14, stage: 5, stageName: 'Intention', text: "What kind of relationship or friendship do you want more of?", description: "Sharing future aspirations" },
      { id: 15, stage: 5, stageName: 'Intention', text: "What's one step you can take to move closer to what you want?", description: "Sharing future aspirations" }
    ]
  }
];

export const getQuestionsForSession = (depth: 5 | 10 | 15): QuestionSet => {
  let questionSets: QuestionSet[];
  
  switch (depth) {
    case 5:
      questionSets = fiveQuestionSets;
      break;
    case 10:
      questionSets = tenQuestionSets;
      break;
    case 15:
      questionSets = fifteenQuestionSets;
      break;
    default:
      questionSets = fiveQuestionSets;
  }
  
  // Randomly select one of the 10 sets for variety
  const randomIndex = Math.floor(Math.random() * Math.min(questionSets.length, 10));
  return questionSets[randomIndex];
};

export const getStageInfo = (stage: number) => {
  const stageMap = {
    1: { name: 'Safety', description: 'Building trust and comfort', color: 'bg-warm-peach/20' },
    2: { name: 'Values', description: 'Understanding core principles', color: 'bg-calm-lavender/20' },
    3: { name: 'Turning Point', description: 'Exploring personal transformation', color: 'bg-gentle-blue/20' },
    4: { name: 'Shared Meaning', description: 'Building mutual understanding', color: 'bg-soft-green/20' },
    5: { name: 'Intention', description: 'Sharing future aspirations', color: 'bg-accent/20' }
  };
  return stageMap[stage as keyof typeof stageMap];
};