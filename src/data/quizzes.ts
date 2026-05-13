import type {QuizLevel, QuizQuestion} from '../types';

export const visualQuizLevels: QuizLevel[] = [
  {
    id: 'visual-basic',
    title: 'Level 1 - Basic Vessel Types',
    questions: [
      {
        id: 'visual-1-1',
        question: 'What type of vessel is shown in the image?',
        image: 'visualBasicIcebreaker',
        imagePrompt:
          'A large red ship with a wide reinforced bow breaking through thick sea ice.',
        options: [
          'Research Vessel',
          'Polar Cargo Ship',
          'Icebreaker',
          'Expedition Ship',
        ],
        answerIndex: 2,
      },
      {
        id: 'visual-1-2',
        question: 'What type of vessel is shown in the image?',
        image: 'visualBasicResearch',
        imagePrompt:
          'A white and yellow ship with antennas, radar domes, cranes, and scientific equipment on deck.',
        options: [
          'Ice-Class Ferry',
          'Research Vessel',
          'Rescue & Patrol Ship',
          'Polar Cargo Ship',
        ],
        answerIndex: 1,
      },
      {
        id: 'visual-1-3',
        question: 'What type of vessel is shown in the image?',
        image: 'visualBasicCargo',
        imagePrompt:
          'A large vessel carrying containers and supplies across cold northern waters.',
        options: [
          'Expedition Ship',
          'Rescue & Patrol Ship',
          'Icebreaker',
          'Polar Cargo Ship',
        ],
        answerIndex: 3,
      },
      {
        id: 'visual-1-4',
        question: 'What type of vessel is shown in the image?',
        image: 'visualBasicExpedition',
        imagePrompt:
          'A comfortable polar ship with observation decks, large windows, and a reinforced hull for icy routes.',
        options: [
          'Expedition Ship',
          'Tugboat',
          'Research Vessel',
          'Standard Ferry',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'visual-icebreaker',
    title: 'Level 2 - Icebreaker Recognition',
    questions: [
      {
        id: 'visual-2-1',
        question: 'Which vessel type is shown?',
        image: 'visualIcebreakerSlopedBow',
        imagePrompt:
          'A heavy ship with a sloped bow riding onto ice and crushing it with its weight.',
        options: [
          'Polar Cargo Ship',
          'Icebreaker',
          'Research Vessel',
          'Expedition Ship',
        ],
        answerIndex: 1,
      },
      {
        id: 'visual-2-2',
        question: 'Which ship is most likely shown in the image?',
        image: 'visualIcebreakerRedBow',
        imagePrompt:
          'A red vessel with a thick hull, reinforced front section, and broken ice spreading around the bow.',
        options: ['Icebreaker', 'Patrol Boat', 'Passenger Ferry', 'Harbor Tug'],
        answerIndex: 0,
      },
      {
        id: 'visual-2-3',
        question: 'What is the correct vessel type?',
        image: 'visualIcebreakerChannel',
        imagePrompt:
          'A wide, powerful ship opening a path through frozen sea for another vessel behind it.',
        options: [
          'Research Vessel',
          'Expedition Ship',
          'Polar Cargo Ship',
          'Icebreaker',
        ],
        answerIndex: 3,
      },
    ],
  },
  {
    id: 'visual-research-expedition',
    title: 'Level 3 - Research & Expedition Ships',
    questions: [
      {
        id: 'visual-3-1',
        question: 'What vessel type is shown?',
        image: 'visualResearchYellowDeck',
        imagePrompt:
          'A yellow-accented ship with deck cranes, sensor equipment, antennas, and laboratory modules.',
        options: ['Research Vessel', 'Icebreaker', 'Cargo Ship', 'Patrol Ship'],
        answerIndex: 0,
      },
      {
        id: 'visual-3-2',
        question: 'Which vessel is shown in the image?',
        image: 'visualExpeditionPassenger',
        imagePrompt:
          'A modern ship with large windows, passenger decks, and a reinforced hull for polar travel.',
        options: [
          'Research Vessel',
          'Expedition Ship',
          'Rescue Ship',
          'Oil Tanker',
        ],
        answerIndex: 1,
      },
      {
        id: 'visual-3-3',
        question: 'What is the correct type of vessel?',
        image: 'visualResearchOceanTools',
        imagePrompt:
          'A ship carrying scientific equipment, sample containers, sonar gear, and oceanographic instruments.',
        options: [
          'Polar Cargo Ship',
          'Icebreaker',
          'Research Vessel',
          'Standard Ferry',
        ],
        answerIndex: 2,
      },
      {
        id: 'visual-3-4',
        question: 'Identify this vessel type.',
        image: 'visualExpeditionSafetyBoats',
        imagePrompt:
          'A polar travel ship designed for guided voyages, with observation decks and safety boats attached.',
        options: ['Icebreaker', 'Research Vessel', 'Cargo Ship', 'Expedition Ship'],
        answerIndex: 3,
      },
    ],
  },
  {
    id: 'visual-cargo-rescue',
    title: 'Level 4 - Cargo, Patrol & Support Vessels',
    questions: [
      {
        id: 'visual-4-1',
        question: 'Which vessel type is shown?',
        image: 'visualCargoContainers',
        imagePrompt:
          'A large vessel transporting containers, equipment, and supplies across a cold northern sea route.',
        options: [
          'Expedition Ship',
          'Polar Cargo Ship',
          'Research Vessel',
          'Rescue Boat',
        ],
        answerIndex: 1,
      },
      {
        id: 'visual-4-2',
        question: 'What ship is displayed?',
        image: 'visualRescueEmergency',
        imagePrompt:
          'A compact vessel with emergency markings, search lights, rescue equipment, and a reinforced hull.',
        options: [
          'Cargo Ship',
          'Research Vessel',
          'Rescue & Patrol Ship',
          'Ice-Class Ferry',
        ],
        answerIndex: 2,
      },
      {
        id: 'visual-4-3',
        question: 'Identify the vessel type.',
        image: 'visualCargoSupply',
        imagePrompt:
          'A supply ship with a wide cargo deck, containers, and a strong bow for cold-water logistics.',
        options: ['Polar Cargo Ship', 'Icebreaker', 'Expedition Ship', 'Patrol Boat'],
        answerIndex: 0,
      },
      {
        id: 'visual-4-4',
        question: 'Which answer best matches the ship in the image?',
        image: 'visualRescuePatrol',
        imagePrompt:
          'A fast patrol vessel moving near icy waters, with radar, safety lights, and rescue equipment.',
        options: [
          'Research Vessel',
          'Icebreaker',
          'Expedition Ship',
          'Rescue & Patrol Ship',
        ],
        answerIndex: 3,
      },
    ],
  },
  {
    id: 'visual-expert',
    title: 'Level 5 - Expert Vessel Identification',
    questions: [
      {
        id: 'visual-5-1',
        question: 'Which vessel type is shown?',
        image: 'visualExpertExpedition',
        imagePrompt:
          'A ship with a reinforced hull and passenger observation areas, designed for polar tourism and exploration.',
        options: [
          'Polar Cargo Ship',
          'Research Vessel',
          'Expedition Ship',
          'Icebreaker',
        ],
        answerIndex: 2,
      },
      {
        id: 'visual-5-2',
        question: 'What is the correct identification?',
        image: 'visualExpertResearch',
        imagePrompt:
          'A ship with scientific cranes, sensor arrays, laboratory spaces, and deck equipment for data collection.',
        options: [
          'Expedition Ship',
          'Research Vessel',
          'Rescue Ship',
          'Polar Cargo Ship',
        ],
        answerIndex: 1,
      },
      {
        id: 'visual-5-3',
        question: 'Which vessel is shown?',
        image: 'visualExpertIcebreaker',
        imagePrompt:
          'A powerful ship with a very strong sloped bow, breaking a clear path through compact sea ice.',
        options: [
          'Research Vessel',
          'Expedition Ship',
          'Polar Cargo Ship',
          'Icebreaker',
        ],
        answerIndex: 3,
      },
      {
        id: 'visual-5-4',
        question: 'What type of ship is this?',
        image: 'visualExpertCargo',
        imagePrompt:
          'A large cold-route vessel carrying containers and supplies, with a reinforced bow but no scientific deck equipment.',
        options: [
          'Research Vessel',
          'Icebreaker',
          'Polar Cargo Ship',
          'Expedition Ship',
        ],
        answerIndex: 2,
      },
    ],
  },
];

export const knowledgeQuizLevels: QuizLevel[] = [
  {
    id: 'knowledge-1',
    title: 'Level 1 - Arctic Vessel Basics',
    questions: [
      {
        id: 'knowledge-1-1',
        question: 'What is the main purpose of an icebreaker?',
        options: [
          'To carry luxury passengers',
          'To open paths through sea ice',
          'To catch marine animals',
          'To race across open water',
        ],
        answerIndex: 1,
      },
      {
        id: 'knowledge-1-2',
        question: 'Which vessel is mainly used for scientific work at sea?',
        options: ['Research Vessel', 'Cruise Ship', 'Fisher Boat', 'Harbor Ferry'],
        answerIndex: 0,
      },
      {
        id: 'knowledge-1-3',
        question: 'What does ice-class vessel usually mean?',
        options: [
          'A ship painted white',
          'A ship designed for tropical routes',
          'A vessel built or strengthened for icy waters',
          'A ship used only in rivers',
        ],
        answerIndex: 2,
      },
      {
        id: 'knowledge-1-4',
        question: 'Which part of an icebreaker is especially important for breaking ice?',
        options: [
          'Sloped reinforced bow',
          'Passenger lounge',
          'Decorative mast',
          'Open sun deck',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-1-5',
        question: 'Why are Arctic vessels often built with stronger hulls?',
        options: [
          'To look heavier',
          'To resist pressure from ice',
          'To reduce the number of windows',
          'To make the ship slower',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'knowledge-2',
    title: 'Level 2 - Icebreaker Engineering',
    questions: [
      {
        id: 'knowledge-2-1',
        question: 'How do many icebreakers break thick sea ice?',
        options: [
          'By heating the ocean',
          'By riding up onto ice and crushing it with weight',
          'By using fishers nets',
          'By spinning in circles',
        ],
        answerIndex: 1,
      },
      {
        id: 'knowledge-2-2',
        question: 'Why is the bow shape important on an icebreaker?',
        options: [
          'It helps the ship interact with ice more effectively',
          'It makes the ship look taller',
          'It creates more passenger rooms',
          'It removes the need for engines',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-2-3',
        question: 'What is a reinforced hull designed to do?',
        options: [
          'Improve onboard decoration',
          'Protect the vessel from ice impact and pressure',
          'Make the ship invisible',
          'Reduce the need for navigation',
        ],
        answerIndex: 1,
      },
      {
        id: 'knowledge-2-4',
        question: 'Which feature helps a vessel maneuver better in difficult icy waters?',
        options: [
          'Larger dining area',
          'Azimuth thrusters',
          'Open balconies',
          'Decorative lights',
        ],
        answerIndex: 1,
      },
      {
        id: 'knowledge-2-5',
        question: 'Why can ice pressure be dangerous for ships?',
        options: [
          'It can damage or deform the hull',
          'It makes the ship too colorful',
          'It improves fuel economy',
          'It removes radar signals completely',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-3',
    title: 'Level 3 - Polar Navigation',
    questions: [
      {
        id: 'knowledge-3-1',
        question: 'What information is important for planning Arctic routes?',
        options: [
          'Ice charts and weather data',
          'Restaurant ratings',
          'City traffic maps',
          'Desert temperature reports',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-3-2',
        question: 'Why is polar navigation more complex than regular sea travel?',
        options: [
          'Ice, weather, visibility, and remote conditions change quickly',
          'The ocean is always calm',
          'Ships cannot use maps',
          'There are no waves in Arctic waters',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-3-3',
        question: 'What can satellite data help vessels understand?',
        options: [
          'Ice movement and route conditions',
          'Passenger food choices',
          'Interior room colors',
          'Ship name popularity',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-3-4',
        question: 'Which condition can reduce visibility in polar waters?',
        options: ['Snowfall and fog', 'Warm beaches', 'Clear desert air', 'City street lighting'],
        answerIndex: 0,
      },
      {
        id: 'knowledge-3-5',
        question: 'Why are Arctic routes carefully monitored?',
        options: [
          'Conditions can change and create navigation risks',
          'Ships must avoid palm trees',
          'The ocean surface is always predictable',
          'Ice has no effect on route safety',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-4',
    title: 'Level 4 - Research & Expedition Vessels',
    questions: [
      {
        id: 'knowledge-4-1',
        question: 'What equipment is common on research vessels?',
        options: [
          'Scientific sensors, cranes, and laboratories',
          'Roller coasters',
          'Racing sails',
          'Shopping streets',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-4-2',
        question: 'What is one purpose of polar research vessels?',
        options: [
          'Studying ocean, climate, ice, and marine environments',
          'Organizing beach parties',
          'Delivering city buses',
          'Building roads on ice',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-4-3',
        question: 'Why do expedition ships often have reinforced hulls?',
        options: [
          'To safely operate near icy waters',
          'To carry more casino tables',
          'To make the ship lighter than air',
          'To avoid using navigation tools',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-4-4',
        question: 'Which vessel type is most likely to have observation decks for polar travel?',
        options: ['Expedition Ship', 'Oil Barge', 'River Taxi', 'Standard Container Ship'],
        answerIndex: 0,
      },
      {
        id: 'knowledge-4-5',
        question: 'Why do research vessels often carry radar domes and antennas?',
        options: [
          'For communication, navigation, and data systems',
          'For decoration only',
          'To make the ship look older',
          'To replace the hull',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-5',
    title: 'Level 5 - Extreme Arctic Conditions',
    questions: [
      {
        id: 'knowledge-5-1',
        question: 'What is anti-icing equipment used for?',
        options: [
          'Reducing ice buildup on ship surfaces',
          'Painting the ship blue',
          'Increasing passenger noise',
          'Removing the engine',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-5-2',
        question: 'Why is ice buildup dangerous on a vessel?',
        options: [
          'It can add weight and affect stability',
          'It makes the ship faster',
          'It improves visibility',
          'It protects every antenna automatically',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-5-3',
        question: 'Why must Arctic vessels be highly autonomous?',
        options: [
          'They often operate far from major ports and support services',
          'They never need fuel',
          'They only travel inside cities',
          'They cannot carry supplies',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-5-4',
        question: 'Which factor can make Arctic operations more difficult?',
        options: [
          'Extreme cold and changing ice conditions',
          'Warm tropical wind',
          'Shallow swimming pools',
          'Road traffic',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-5-5',
        question: 'What makes communication important in polar waters?',
        options: [
          'Remote routes require reliable contact and safety coordination',
          'Ships do not need navigation',
          'Ice removes the need for planning',
          'Weather is always stable',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-6',
    title: 'Level 6 - Ice-Class Design',
    questions: [
      {
        id: 'knowledge-6-1',
        question: 'What does ice-class design mainly focus on?',
        options: [
          'Making ships brighter at night',
          'Helping vessels operate safely in icy conditions',
          'Reducing all onboard equipment',
          'Turning ships into submarines',
        ],
        answerIndex: 1,
      },
      {
        id: 'knowledge-6-2',
        question: 'Which area of a vessel often needs extra strength in icy waters?',
        options: [
          'The waterline area',
          'The dining room ceiling',
          'The logo placement',
          'The passenger staircase',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-6-3',
        question: 'Why are ice-class vessels often heavier than standard ships?',
        options: [
          'They use stronger materials and reinforced structures',
          'They carry more decorations',
          'They are built only for speed',
          'They avoid using engines',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-6-4',
        question: 'What is one reason for using special hull shapes in ice-class ships?',
        options: [
          'To interact with ice more safely and efficiently',
          'To make the ship harder to see',
          'To remove the need for a captain',
          'To increase beach access',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-6-5',
        question: 'Which feature is most related to ice-class safety?',
        options: [
          'Reinforced structural framing',
          'Open swimming pool',
          'Decorative lighting',
          'Large shopping deck',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-7',
    title: 'Level 7 - Ship Equipment',
    questions: [
      {
        id: 'knowledge-7-1',
        question: 'What are radar systems used for on polar vessels?',
        options: [
          'Navigation and detecting surrounding objects',
          'Cooking food',
          'Painting the hull',
          'Breaking ice directly',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-7-2',
        question: 'Why do research vessels often have cranes?',
        options: [
          'To handle scientific equipment and samples',
          'To lift passenger chairs',
          'To decorate the deck',
          'To replace the engine',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-7-3',
        question: 'What is the purpose of a ship communication antenna?',
        options: [
          'To support contact, data exchange, and safety coordination',
          'To make ice disappear',
          'To increase the ship weight',
          'To change the vessel color',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-7-4',
        question: 'Which equipment is useful for studying the ocean?',
        options: [
          'Sonar and sampling tools',
          'Beach umbrellas',
          'Racing tires',
          'Decorative flags only',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-7-5',
        question: 'Why are searchlights useful in polar regions?',
        options: [
          'They improve visibility during darkness, snow, or poor weather',
          'They heat the entire ocean',
          'They replace navigation charts',
          'They reduce the need for hull strength',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-8',
    title: 'Level 8 - Polar Cargo & Logistics',
    questions: [
      {
        id: 'knowledge-8-1',
        question: 'What is the main role of a polar cargo ship?',
        options: [
          'Transporting supplies through cold and remote waters',
          'Hosting music concerts',
          'Racing with icebreakers',
          'Studying only marine animals',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-8-2',
        question: 'Why are cargo deliveries important in Arctic regions?',
        options: [
          'Some communities and stations depend on seasonal supply routes',
          'Roads are always available everywhere',
          'Ice makes aircraft unnecessary',
          'Ships only carry souvenirs',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-8-3',
        question: 'What can polar cargo vessels transport?',
        options: [
          'Fuel, food, equipment, and construction materials',
          'Desert sand only',
          'City buses for highways only',
          'Casino machines',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-8-4',
        question: 'Why may cargo ships need icebreaker support?',
        options: [
          'Thick ice can block or slow their route',
          'Cargo ships cannot float',
          'Icebreakers carry all passengers',
          'Cargo ships never use navigation',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-8-5',
        question: 'What makes Arctic logistics difficult?',
        options: [
          'Remote locations, ice conditions, weather, and limited port access',
          'Too many tropical beaches',
          'Perfect weather every day',
          'Unlimited nearby repair stations',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-9',
    title: 'Level 9 - Safety & Survival Systems',
    questions: [
      {
        id: 'knowledge-9-1',
        question: 'Why do polar vessels carry emergency equipment?',
        options: [
          'To respond to accidents in remote and harsh conditions',
          'To make the ship look larger',
          'To decorate the bridge',
          'To avoid using maps',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-9-2',
        question: 'What is one major safety risk in Arctic waters?',
        options: [
          'Rapidly changing ice and weather conditions',
          'Warm shallow pools',
          'Too much road traffic',
          'Constant tropical storms only',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-9-3',
        question: 'Why is crew training important on ice-class vessels?',
        options: [
          'Arctic operations require special procedures and safety awareness',
          'Ships cannot move without singing',
          'Ice removes all danger',
          'Training only changes the ship color',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-9-4',
        question: 'What can happen if ice builds up on upper structures?',
        options: [
          'It can increase weight and affect stability',
          'It makes communication perfect',
          'It improves fuel efficiency automatically',
          'It removes the need for radar',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-9-5',
        question: 'Which system helps keep routes safer in icy waters?',
        options: [
          'Continuous weather and ice monitoring',
          'Random steering',
          'Ignoring satellite data',
          'Turning off communication systems',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'knowledge-10',
    title: 'Level 10 - Arctic Maritime Expert',
    questions: [
      {
        id: 'knowledge-10-1',
        question: 'Why are icebreakers sometimes used to assist other ships?',
        options: [
          'They can create safer channels through ice',
          'They replace all cargo ships',
          'They work only in warm ports',
          'They are smaller than all boats',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-10-2',
        question: 'What makes a research vessel different from a standard passenger ship?',
        options: [
          'Scientific equipment, labs, sensors, and mission-focused design',
          'More decorative windows only',
          'No navigation systems',
          'No deck equipment',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-10-3',
        question: 'Why is route planning critical in polar waters?',
        options: [
          'Ice, weather, distance, and emergency access affect safety',
          'All routes are identical',
          'The sea never changes',
          'Ships cannot use forecasts',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-10-4',
        question: 'Which combination best describes an Arctic-ready vessel?',
        options: [
          'Strong hull, polar navigation tools, safety systems, and cold-weather equipment',
          'Open deck, beach chairs, and thin hull',
          'Small engine, no radar, and no communication',
          'Decorative lights and tropical paint',
        ],
        answerIndex: 0,
      },
      {
        id: 'knowledge-10-5',
        question: 'What is the best description of polar maritime engineering?',
        options: [
          'Designing ships and systems for extreme cold, ice, and remote operations',
          'Designing ships only for city canals',
          'Removing all technical equipment',
          'Building vessels only for warm tourist routes',
        ],
        answerIndex: 0,
      },
    ],
  },
];

const extraQuizQuestions: QuizQuestion[] = [
  {
    id: 'visual-5-5',
    question: 'Which clue best identifies this as a polar cargo vessel?',
    image: 'visualExpertCargo',
    options: [
      'Deck laboratories',
      'Passenger observation lounge',
      'Supply and cargo layout',
      'Fast rescue markings',
    ],
    answerIndex: 2,
  },
  {
    id: 'advanced-1-1',
    question: 'What does PC1 usually indicate in polar ship classification?',
    options: [
      'Light summer ice operation',
      'Year-round operation in severe polar ice',
      'Passenger comfort rating',
      'Open-water fuel efficiency',
    ],
    answerIndex: 1,
  },
  {
    id: 'advanced-1-2',
    question: 'Which system helps reduce ice buildup on exposed ship surfaces?',
    options: [
      'Anti-icing heating',
      'Decorative lighting',
      'Open cargo hatches',
      'Extra passenger windows',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-1-3',
    question: 'What is dynamic positioning useful for?',
    options: [
      'Changing hull color',
      'Holding position without anchoring',
      'Removing cargo weight',
      'Replacing crew training',
    ],
    answerIndex: 1,
  },
  {
    id: 'advanced-1-4',
    question: 'Why is ice radar valuable on Arctic vessels?',
    options: [
      'It cooks food faster',
      'It detects ice features and route hazards',
      'It removes fog from windows',
      'It replaces hull reinforcement',
    ],
    answerIndex: 1,
  },
  {
    id: 'advanced-1-5',
    question: 'Why can protected propulsion be important in ice?',
    options: [
      'It protects propellers and machinery from ice impact',
      'It makes a ship invisible',
      'It increases room decoration',
      'It stops all weather changes',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-2-1',
    question: 'What does escort operation usually mean in ice navigation?',
    options: [
      'A ship follows a cleared path behind support',
      'A ship turns off communication',
      'A ship sails only in warm ports',
      'A ship removes all cargo',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-2-2',
    question: 'What does displacement describe for a vessel?',
    options: [
      'The crew uniform color',
      'The amount of water displaced by the ship',
      'The number of antennas',
      'The window shape',
    ],
    answerIndex: 1,
  },
  {
    id: 'advanced-2-3',
    question: 'Why is high-torque propulsion useful in ice?',
    options: [
      'It helps push through heavy resistance',
      'It creates passenger entertainment',
      'It replaces radar',
      'It removes the need for fuel',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-2-4',
    question: 'What is one purpose of a helicopter deck on a polar vessel?',
    options: [
      'Aerial support, transfer, or rescue',
      'Cargo painting',
      'Hull decoration',
      'Engine cooling only',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-2-5',
    question: 'Emergency towing gear is mainly used to',
    options: [
      'decorate the stern',
      'assist disabled vessels',
      'increase passenger capacity',
      'replace navigation charts',
    ],
    answerIndex: 1,
  },
  {
    id: 'advanced-3-1',
    question: 'What is multibeam sonar commonly used for?',
    options: [
      'Mapping the seabed',
      'Heating the hull',
      'Painting containers',
      'Opening passenger doors',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-3-2',
    question: 'Ocean sampling equipment helps scientists collect',
    options: [
      'water, climate, and marine data',
      'road traffic reports',
      'hotel ratings',
      'deck paint only',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-3-3',
    question: 'Why are stabilized sensor platforms useful?',
    options: [
      'They keep measurements steadier in motion',
      'They make ice disappear',
      'They replace the bridge',
      'They reduce all vessel weight',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-3-4',
    question: 'What advantage do modular laboratories give a research vessel?',
    options: [
      'They adapt the ship to different missions',
      'They remove the need for scientists',
      'They turn cargo into fuel',
      'They make the bow weaker',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-3-5',
    question: 'Radar domes commonly protect',
    options: [
      'antennas and sensor equipment',
      'lifeboat seats only',
      'cargo labels',
      'decorative lights',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-4-1',
    question: 'Why can cold storage areas matter on supply ships?',
    options: [
      'They help protect temperature-sensitive cargo',
      'They reduce the need for navigation',
      'They replace the hull',
      'They make the vessel faster than icebreakers',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-4-2',
    question: 'A reinforced side shell mainly helps a cargo vessel resist',
    options: [
      'ice pressure and side impacts',
      'interior noise',
      'passenger boredom',
      'paint fading only',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-4-3',
    question: 'Why does an Arctic fuel carrier need spill-control systems?',
    options: [
      'To contain and respond to fuel leaks',
      'To improve music quality',
      'To reduce map accuracy',
      'To make decks colder',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-4-4',
    question: 'Long-range fuel capacity supports',
    options: [
      'remote missions far from ports',
      'short city ferry loops only',
      'decorative lighting',
      'removing safety systems',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-4-5',
    question: 'Cargo cranes on polar supply ships help with',
    options: [
      'loading equipment in remote ports',
      'breaking ice directly',
      'measuring passenger opinions',
      'changing vessel class names',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-5-1',
    question: 'Thermal imaging cameras are useful because they can',
    options: [
      'detect heat signatures during rescue work',
      'replace engine oil',
      'paint ice darker',
      'increase cargo volume',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-5-2',
    question: 'A communication relay tool mainly supports',
    options: [
      'reliable contact across remote routes',
      'passenger shopping',
      'weaker hull plating',
      'open-water racing',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-5-3',
    question: 'What is a fast response deck designed to support?',
    options: [
      'Quick emergency launch and rescue work',
      'Extra casino tables',
      'Road transport',
      'Removing antennas',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-5-4',
    question: 'A medical support room on a rescue vessel is used for',
    options: [
      'treating injured crew or passengers',
      'storing decorative flags',
      'increasing ice pressure',
      'replacing the bridge',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-5-5',
    question: 'Ice monitoring sensors help crews',
    options: [
      'track ice hazards around the vessel',
      'avoid all weather forecasts',
      'remove all cargo',
      'hide the ship from radar',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-6-1',
    question: 'Observation lounges are most associated with',
    options: [
      'Expedition ships',
      'Fuel barges',
      'Harbor cranes',
      'Standard road vehicles',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-6-2',
    question: 'A Zodiac launch area helps expedition crews',
    options: [
      'deploy small boats for shore or observation trips',
      'turn off safety systems',
      'replace scientific samples',
      'make the hull thinner',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-6-3',
    question: 'Iceberg proximity alerts are designed to',
    options: [
      'warn crews about nearby collision risks',
      'increase passenger noise',
      'remove the need for watches',
      'heat the ocean',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-6-4',
    question: 'A passenger briefing room on an expedition vessel is used for',
    options: [
      'safety guidance and route education',
      'fuel pumping',
      'propeller repair only',
      'ice crushing',
    ],
    answerIndex: 0,
  },
  {
    id: 'advanced-6-5',
    question: 'Heated exterior paths help expedition ships by',
    options: [
      'reducing slippery ice buildup for people on deck',
      'removing all navigation equipment',
      'turning the ship into a cargo tanker',
      'blocking communication',
    ],
    answerIndex: 0,
  },
];

const quizRoundTitles = [
  'Visual Vessel Basics',
  'Icebreaker Recognition',
  'Research, Cargo & Rescue',
  'Expert Visual ID',
  'Arctic Vessel Basics',
  'Icebreaker Engineering',
  'Polar Navigation',
  'Research & Expedition Vessels',
  'Extreme Arctic Conditions',
  'Ice-Class Design',
  'Ship Equipment',
  'Polar Cargo & Logistics',
  'Safety & Survival Systems',
  'Arctic Maritime Expert',
  'Polar Class Systems',
  'Ice Operations',
  'Science Missions',
  'Cargo Route Planning',
  'Rescue Readiness',
  'Expedition Safety',
];

const quizQuestionPool = [
  ...visualQuizLevels.flatMap(level => level.questions),
  ...knowledgeQuizLevels.flatMap(level => level.questions),
  ...extraQuizQuestions,
];

export const quizLevels: QuizLevel[] = quizRoundTitles.map((title, index) => ({
  id: `round-${index + 1}`,
  title: `Round ${index + 1} - ${title}`,
  questions: quizQuestionPool.slice(index * 5, index * 5 + 5),
}));

export const totalQuizQuestions = quizLevels.reduce(
  (total, level) => total + level.questions.length,
  0,
);
