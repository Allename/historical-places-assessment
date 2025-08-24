export interface HistoricalPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  yearBuilt: number;
  visited: boolean;
}

export const historicalPlaces: HistoricalPlace[] = [
  {
    id: '1',
    name: 'Colosseum',
    description: 'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built.',
    image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Rome, Italy',
    yearBuilt: 80,
    visited: false
  },
  {
    id: '2',
    name: 'Great Wall of China',
    description: 'The Great Wall of China is a series of fortifications and walls that were built across the historical northern borders of ancient Chinese states and Imperial China.',
    image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'China',
    yearBuilt: 1368,
    visited: false
  },
  {
    id: '3',
    name: 'Machu Picchu',
    description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge.',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Peru',
    yearBuilt: 1450,
    visited: false
  },
  {
    id: '4',
    name: 'Taj Mahal',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.',
    image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Agra, India',
    yearBuilt: 1653,
    visited: false
  },
  {
    id: '5',
    name: 'Stonehenge',
    description: 'Stonehenge is a prehistoric monument consisting of a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons.',
    image: 'https://images.pexels.com/photos/161798/stonehenge-england-prehistoric-monument-161798.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Wiltshire, England',
    yearBuilt: -2500,
    visited: false
  },
  {
    id: '6',
    name: 'Pyramids of Giza',
    description: 'The Giza pyramid complex is an archaeological site on the Giza plateau, on the outskirts of Cairo, Egypt. It includes the three main pyramids, the Great Sphinx, and several cemeteries.',
    image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Giza, Egypt',
    yearBuilt: -2580,
    visited: false
  },
  {
    id: '7',
    name: 'Petra',
    description: 'Petra is a famous archaeological site in Jordan\'s southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom.',
    image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Jordan',
    yearBuilt: -300,
    visited: false
  },
  {
    id: '8',
    name: 'Angkor Wat',
    description: 'Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, originally constructed as a Hindu temple dedicated to the god Vishnu.',
    image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Cambodia',
    yearBuilt: 1113,
    visited: false
  }
];