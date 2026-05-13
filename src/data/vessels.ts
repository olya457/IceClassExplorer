import type {Vessel, VesselCategory} from '../types';

export const vesselCategories: VesselCategory[] = [
  'Icebreakers',
  'Research',
  'Cargo',
  'Expedition',
  'Rescue',
];

export const vessels: Vessel[] = [
  {
    id: 'polar-crown-icebreaker',
    name: 'Polar Crown Icebreaker',
    category: 'Icebreakers',
    description:
      'A heavy Arctic icebreaker designed to open safe channels through compact sea ice and support other vessels on demanding polar routes.',
    specs: {
      length: '173m',
      displacement: '25,840t',
      maxSpeed: '21 kts',
      iceCapability: '3m',
    },
    certification: {
      className: 'PC1 - Polar Class 1',
      details:
        'Triple-reinforced steel hull with thick plating and a rounded icebreaking bow designed for year-round operation in severe polar ice.',
    },
    features: [
      'Nuclear propulsion system',
      'Heated hull anti-icing',
      'Dynamic positioning',
      'Helicopter deck',
      'Emergency escape capsules',
    ],
  },
  {
    id: 'red-bow-icebreaker',
    name: 'Red Bow Icebreaker',
    category: 'Icebreakers',
    description:
      'A powerful red-accented icebreaker with a sloped reinforced bow built to ride onto ice and crush it under the vessel weight.',
    specs: {
      length: '146m',
      displacement: '18,620t',
      maxSpeed: '19 kts',
      iceCapability: '2.4m',
    },
    certification: {
      className: 'PC2 - Polar Class 2',
      details:
        'Strengthened bow structure, protected waterline zone, and reinforced side plating for heavy multi-year ice operations.',
    },
    features: [
      'Sloped icebreaking bow',
      'Reinforced waterline belt',
      'Heated deck systems',
      'High-torque propulsion',
      'Ice radar support',
    ],
  },
  {
    id: 'arctic-pathbreaker',
    name: 'Arctic Pathbreaker',
    category: 'Icebreakers',
    description:
      'A route-opening icebreaker used to guide cargo, research, and expedition ships through frozen sea corridors.',
    specs: {
      length: '158m',
      displacement: '21,300t',
      maxSpeed: '20 kts',
      iceCapability: '2.7m',
    },
    certification: {
      className: 'PC2 - Polar Class 2',
      details:
        'Built for demanding polar escort work, with reinforced bow geometry and side structures designed to reduce ice pressure damage.',
    },
    features: [
      'Escort operation mode',
      'Ice channel navigation',
      'Heavy-duty thrusters',
      'Bridge ice-monitoring system',
      'Emergency towing equipment',
    ],
  },
  {
    id: 'glacier-force',
    name: 'Glacier Force',
    category: 'Icebreakers',
    description:
      'A robust ice-class vessel designed for extreme cold, thick ice fields, and long-distance polar missions.',
    specs: {
      length: '132m',
      displacement: '16,940t',
      maxSpeed: '18 kts',
      iceCapability: '2.1m',
    },
    certification: {
      className: 'PC3 - Polar Class 3',
      details:
        'Reinforced hull framing and protected machinery systems allow safe operation in heavy second-year ice conditions.',
    },
    features: [
      'Reinforced steel framing',
      'Protected engine room layout',
      'Ice-resistant propeller system',
      'Winterized deck equipment',
      'Long-range fuel capacity',
    ],
  },
  {
    id: 'northern-breaker',
    name: 'Northern Breaker',
    category: 'Icebreakers',
    description:
      'A dependable icebreaker built for channel clearing, vessel escort, and operational support in frozen northern waters.',
    specs: {
      length: '121m',
      displacement: '13,780t',
      maxSpeed: '17 kts',
      iceCapability: '1.8m',
    },
    certification: {
      className: 'PC4 - Polar Class 4',
      details:
        'Designed for year-round work in thick first-year ice with additional strengthening around the bow and waterline.',
    },
    features: [
      'Ice escort capability',
      'Reinforced bow plating',
      'Heated railings and decks',
      'Searchlight system',
      'Emergency support deck',
    ],
  },
  {
    id: 'polar-science-vessel',
    name: 'Polar Science Vessel',
    category: 'Research',
    description:
      'A scientific vessel equipped for oceanographic studies, climate monitoring, ice observation, and long polar research missions.',
    specs: {
      length: '118m',
      displacement: '9,450t',
      maxSpeed: '16 kts',
      iceCapability: '1.2m',
    },
    certification: {
      className: 'PC5 - Polar Class 5',
      details:
        'Strengthened for medium first-year ice, with protected research decks and cold-weather operational systems.',
    },
    features: [
      'Onboard laboratories',
      'Ocean sampling equipment',
      'Weather monitoring systems',
      'Scientific cranes',
      'Sonar mapping tools',
    ],
  },
  {
    id: 'arctic-survey-ship',
    name: 'Arctic Survey Ship',
    category: 'Research',
    description:
      'A specialized vessel for mapping seabeds, measuring water depth, studying ice zones, and collecting navigation data.',
    specs: {
      length: '96m',
      displacement: '6,780t',
      maxSpeed: '15 kts',
      iceCapability: '0.9m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Prepared for summer and autumn operation in medium first-year ice, with reinforced lower hull zones.',
    },
    features: [
      'Multibeam sonar',
      'Survey work deck',
      'Navigation data systems',
      'Stabilized sensor platform',
      'Ice-condition monitoring',
    ],
  },
  {
    id: 'yellow-dome-researcher',
    name: 'Yellow Dome Researcher',
    category: 'Research',
    description:
      'A modern yellow-accented research ship with radar domes, cranes, antennas, and advanced scientific equipment.',
    specs: {
      length: '105m',
      displacement: '7,920t',
      maxSpeed: '16 kts',
      iceCapability: '1m',
    },
    certification: {
      className: 'PC5 - Polar Class 5',
      details:
        'Designed for scientific operations in moderate polar ice with reinforced hull areas and winterized deck systems.',
    },
    features: [
      'Radar dome array',
      'Scientific crane system',
      'Laboratory modules',
      'Satellite communication',
      'Polar data collection deck',
    ],
  },
  {
    id: 'ocean-data-explorer',
    name: 'Ocean Data Explorer',
    category: 'Research',
    description:
      'A compact research vessel focused on marine data collection, underwater scanning, weather tracking, and environmental studies.',
    specs: {
      length: '88m',
      displacement: '5,360t',
      maxSpeed: '14 kts',
      iceCapability: '0.7m',
    },
    certification: {
      className: 'Ice Class 1A Super',
      details:
        'Reinforced for difficult first-year ice conditions, with additional protection around the hull and machinery zones.',
    },
    features: [
      'Oceanographic sensors',
      'Water sampling stations',
      'Climate data systems',
      'Compact research labs',
      'Remote equipment handling',
    ],
  },
  {
    id: 'ice-lab-vessel',
    name: 'Ice Lab Vessel',
    category: 'Research',
    description:
      'A floating Arctic laboratory designed for sea ice studies, underwater geography, climate science, and polar observation.',
    specs: {
      length: '112m',
      displacement: '8,240t',
      maxSpeed: '15 kts',
      iceCapability: '1.1m',
    },
    certification: {
      className: 'PC5 - Polar Class 5',
      details:
        'Built with a reinforced research hull and ice-capable systems for controlled movement through polar waters.',
    },
    features: [
      'Modular laboratories',
      'Ice core equipment storage',
      'Remote sensor control',
      'Research crew facilities',
      'Polar observation bridge',
    ],
  },
  {
    id: 'polar-cargo-carrier',
    name: 'Polar Cargo Carrier',
    category: 'Cargo',
    description:
      'A cargo vessel designed to transport supplies, equipment, food, and materials through cold and remote maritime routes.',
    specs: {
      length: '182m',
      displacement: '29,600t',
      maxSpeed: '17 kts',
      iceCapability: '1.4m',
    },
    certification: {
      className: 'PC5 - Polar Class 5',
      details:
        'Strengthened for polar cargo operations in medium first-year ice with protected cargo zones and reinforced hull plating.',
    },
    features: [
      'Reinforced cargo deck',
      'Ice-capable hull',
      'Container support system',
      'Cold-weather cargo handling',
      'Long-range logistics capacity',
    ],
  },
  {
    id: 'northern-supply-ship',
    name: 'Northern Supply Ship',
    category: 'Cargo',
    description:
      'A supply vessel built to deliver essential goods to remote ports, research stations, and northern coastal communities.',
    specs: {
      length: '139m',
      displacement: '15,870t',
      maxSpeed: '16 kts',
      iceCapability: '1m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Prepared for seasonal polar supply routes with strengthened structure and winterized cargo equipment.',
    },
    features: [
      'Supply cargo holds',
      'Deck loading cranes',
      'Cold storage areas',
      'Ice navigation radar',
      'Remote-port delivery support',
    ],
  },
  {
    id: 'ice-class-container-ship',
    name: 'Ice-Class Container Ship',
    category: 'Cargo',
    description:
      'A container vessel adapted for cold routes, reinforced for icy waters, and built to move goods across northern sea passages.',
    specs: {
      length: '210m',
      displacement: '34,200t',
      maxSpeed: '18 kts',
      iceCapability: '1.2m',
    },
    certification: {
      className: 'Ice Class 1A Super',
      details:
        'Designed for difficult first-year ice conditions with strengthened bow, sides, and propeller protection.',
    },
    features: [
      'Container deck layout',
      'Reinforced bow section',
      'Protected propulsion system',
      'Ice route navigation',
      'Winter cargo operations',
    ],
  },
  {
    id: 'frozen-route-freighter',
    name: 'Frozen Route Freighter',
    category: 'Cargo',
    description:
      'A heavy transport vessel for construction materials, industrial equipment, and technical supplies in cold maritime regions.',
    specs: {
      length: '168m',
      displacement: '24,760t',
      maxSpeed: '16 kts',
      iceCapability: '1.1m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Built for seasonal Arctic logistics with reinforced hull zones and strengthened cargo handling systems.',
    },
    features: [
      'Heavy cargo deck',
      'Industrial supply storage',
      'Reinforced side shell',
      'Ice-aware navigation bridge',
      'Cargo crane system',
    ],
  },
  {
    id: 'arctic-fuel-carrier',
    name: 'Arctic Fuel Carrier',
    category: 'Cargo',
    description:
      'A specialized cargo tanker used to transport fuel and technical resources to isolated Arctic facilities and northern ports.',
    specs: {
      length: '156m',
      displacement: '22,480t',
      maxSpeed: '15 kts',
      iceCapability: '0.9m',
    },
    certification: {
      className: 'Ice Class 1A',
      details:
        'Reinforced for first-year ice with additional hull protection and cold-weather fuel handling systems.',
    },
    features: [
      'Insulated fuel systems',
      'Reinforced tanker hull',
      'Emergency spill control',
      'Cold-route navigation',
      'Remote station supply support',
    ],
  },
  {
    id: 'polar-expedition-ship',
    name: 'Polar Expedition Ship',
    category: 'Expedition',
    description:
      'A polar expedition vessel designed for educational journeys, ice-region observation, and safe movement near frozen coastlines.',
    specs: {
      length: '124m',
      displacement: '10,300t',
      maxSpeed: '16 kts',
      iceCapability: '0.8m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Suitable for seasonal polar expedition travel in medium first-year ice with reinforced hull protection.',
    },
    features: [
      'Observation decks',
      'Reinforced passenger zones',
      'Polar safety equipment',
      'Zodiac launch area',
      'Panoramic bridge',
    ],
  },
  {
    id: 'glacier-explorer',
    name: 'Glacier Explorer',
    category: 'Expedition',
    description:
      'An expedition vessel made for routes near glaciers, icebergs, and remote polar coastlines.',
    specs: {
      length: '108m',
      displacement: '8,950t',
      maxSpeed: '15 kts',
      iceCapability: '0.7m',
    },
    certification: {
      className: 'Ice Class 1A',
      details:
        'Built for safe operation in first-year ice with strengthened lower hull and cold-weather systems.',
    },
    features: [
      'Glacier route navigation',
      'Large viewing decks',
      'Iceberg safety monitoring',
      'Expedition boat storage',
      'Passenger briefing room',
    ],
  },
  {
    id: 'northern-discovery-vessel',
    name: 'Northern Discovery Vessel',
    category: 'Expedition',
    description:
      'A learning-focused polar vessel for Arctic discovery routes, scenic navigation, and guided maritime education.',
    specs: {
      length: '97m',
      displacement: '6,640t',
      maxSpeed: '14 kts',
      iceCapability: '0.6m',
    },
    certification: {
      className: 'Ice Class 1B',
      details:
        'Prepared for lighter ice conditions with enhanced hull protection and winter-ready operating systems.',
    },
    features: [
      'Educational media room',
      'Observation lounge',
      'Ice safety systems',
      'Polar guide deck',
      'Compact expedition equipment',
    ],
  },
  {
    id: 'ice-coast-explorer',
    name: 'Ice Coast Explorer',
    category: 'Expedition',
    description:
      'A coastal expedition ship built to navigate along frozen shorelines, fjords, ice fields, and polar islands.',
    specs: {
      length: '116m',
      displacement: '9,180t',
      maxSpeed: '15 kts',
      iceCapability: '0.8m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Strengthened for seasonal movement near ice-covered coastlines and moderate first-year ice.',
    },
    features: [
      'Coastal route systems',
      'Reinforced hull belt',
      'Viewing platforms',
      'Expedition launch area',
      'Ice condition sensors',
    ],
  },
  {
    id: 'arctic-horizon',
    name: 'Arctic Horizon',
    category: 'Expedition',
    description:
      'A premium expedition vessel with reinforced construction, modern navigation systems, and wide viewing areas for polar routes.',
    specs: {
      length: '132m',
      displacement: '11,760t',
      maxSpeed: '16 kts',
      iceCapability: '0.9m',
    },
    certification: {
      className: 'PC6 - Polar Class 6',
      details:
        'Designed for polar expedition travel with reinforced structures and safety systems for icy environments.',
    },
    features: [
      'Panoramic observation deck',
      'Polar navigation bridge',
      'Safety boat system',
      'Heated exterior paths',
      'Iceberg proximity alerts',
    ],
  },
  {
    id: 'polar-rescue-vessel',
    name: 'Polar Rescue Vessel',
    category: 'Rescue',
    description:
      'A rescue vessel equipped for emergency response, search operations, and crew support in remote icy waters.',
    specs: {
      length: '94m',
      displacement: '6,980t',
      maxSpeed: '18 kts',
      iceCapability: '0.8m',
    },
    certification: {
      className: 'Ice Class 1A',
      details:
        'Reinforced for first-year ice operations with additional protection for rescue and emergency systems.',
    },
    features: [
      'Searchlight array',
      'Medical support room',
      'Rescue boat launch system',
      'Emergency towing gear',
      'Thermal imaging cameras',
    ],
  },
  {
    id: 'arctic-patrol-ship',
    name: 'Arctic Patrol Ship',
    category: 'Rescue',
    description:
      'A patrol vessel used for maritime monitoring, route safety, observation, and emergency coordination in polar waters.',
    specs: {
      length: '102m',
      displacement: '7,420t',
      maxSpeed: '20 kts',
      iceCapability: '0.7m',
    },
    certification: {
      className: 'PC7 - Polar Class 7',
      details:
        'Designed for operation in thin first-year ice with enhanced patrol systems and reinforced bow sections.',
    },
    features: [
      'Patrol radar system',
      'Long-range communication',
      'Fast response deck',
      'Ice monitoring sensors',
      'Safety coordination bridge',
    ],
  },
  {
    id: 'ice-response-cutter',
    name: 'Ice Response Cutter',
    category: 'Rescue',
    description:
      'A compact and fast rescue-support vessel designed for response missions near icy coastlines and remote polar routes.',
    specs: {
      length: '76m',
      displacement: '3,860t',
      maxSpeed: '24 kts',
      iceCapability: '0.5m',
    },
    certification: {
      className: 'Ice Class 1B',
      details:
        'Prepared for light ice operations with reinforced lower hull and winterized response equipment.',
    },
    features: [
      'Fast-response propulsion',
      'Rescue searchlights',
      'Compact medical bay',
      'Patrol communication suite',
      'Emergency side launch system',
    ],
  },
  {
    id: 'northern-guard-vessel',
    name: 'Northern Guard Vessel',
    category: 'Rescue',
    description:
      'A safety-focused polar vessel used for monitoring maritime routes, supporting crews, and assisting ships in difficult conditions.',
    specs: {
      length: '88m',
      displacement: '5,240t',
      maxSpeed: '21 kts',
      iceCapability: '0.6m',
    },
    certification: {
      className: 'PC7 - Polar Class 7',
      details:
        'Designed for light first-year ice and safety support operations in seasonal Arctic conditions.',
    },
    features: [
      'Route monitoring systems',
      'Rescue deck equipment',
      'Emergency crew support',
      'Ice-aware navigation',
      'Communication relay tools',
    ],
  },
  {
    id: 'cold-sea-support-ship',
    name: 'Cold Sea Support Ship',
    category: 'Rescue',
    description:
      'A rescue-support vessel built for towing assistance, emergency coordination, and technical help during frozen-water operations.',
    specs: {
      length: '111m',
      displacement: '8,300t',
      maxSpeed: '17 kts',
      iceCapability: '0.9m',
    },
    certification: {
      className: 'Ice Class 1A Super',
      details:
        'Reinforced for difficult ice support tasks with strengthened towing systems and protected operational decks.',
    },
    features: [
      'Emergency towing winch',
      'Support crane system',
      'Rescue coordination room',
      'Heated working deck',
      'Ice-condition tracking radar',
    ],
  },
];

export const getVesselById = (id: string) =>
  vessels.find(vessel => vessel.id === id);
