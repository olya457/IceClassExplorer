import type {ImageSourcePropType} from 'react-native';

export type VesselCategory =
  | 'Icebreakers'
  | 'Research'
  | 'Cargo'
  | 'Expedition'
  | 'Rescue';

export type Vessel = {
  id: string;
  name: string;
  category: VesselCategory;
  description: string;
  specs: {
    length: string;
    displacement: string;
    maxSpeed: string;
    iceCapability: string;
  };
  certification: {
    className: string;
    details: string;
  };
  features: string[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  image?: keyof AssetMap;
  imagePrompt?: string;
  options: string[];
  answerIndex: number;
};

export type QuizLevel = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

export type TabId = 'home' | 'fleet' | 'quiz' | 'saved';

export type AssetMap = {
  splashIcebreaker: ImageSourcePropType;
  onboardingBlueprint: ImageSourcePropType;
  onboardingVessels: ImageSourcePropType;
  quizCommand: ImageSourcePropType;
  catalogConsole: ImageSourcePropType;
  iceLogo: ImageSourcePropType;
  iceLogoGlow: ImageSourcePropType;
  discoveryPanel: ImageSourcePropType;
  questionPanel: ImageSourcePropType;
  successPanel: ImageSourcePropType;
  visualBasicIcebreaker: ImageSourcePropType;
  visualBasicResearch: ImageSourcePropType;
  visualBasicCargo: ImageSourcePropType;
  visualBasicExpedition: ImageSourcePropType;
  visualIcebreakerSlopedBow: ImageSourcePropType;
  visualIcebreakerRedBow: ImageSourcePropType;
  visualIcebreakerChannel: ImageSourcePropType;
  visualResearchYellowDeck: ImageSourcePropType;
  visualExpeditionPassenger: ImageSourcePropType;
  visualResearchOceanTools: ImageSourcePropType;
  visualExpeditionSafetyBoats: ImageSourcePropType;
  visualCargoContainers: ImageSourcePropType;
  visualRescueEmergency: ImageSourcePropType;
  visualCargoSupply: ImageSourcePropType;
  visualRescuePatrol: ImageSourcePropType;
  visualExpertExpedition: ImageSourcePropType;
  visualExpertResearch: ImageSourcePropType;
  visualExpertIcebreaker: ImageSourcePropType;
  visualExpertCargo: ImageSourcePropType;
};
