export const motorcycles = [
  {
    id: 'yamaha-r1',
    brand: 'yamaha',
    name: 'Yamaha YZF-R1',
    shortDescription: 'High-performance supersport motorcycle',
    description: 'The Yamaha YZF-R1 is a 998 cc class sports motorcycle made by Yamaha. It features advanced technology derived from MotoGP racing.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    specs: {
      horsepower: 200,
      topSpeed: 299,
      weight: 201,
      engine: '998 cc, inline-4',
      transmission: '6-speed',
      fuelCapacity: 17,
      seatHeight: 855,
      wheelbase: 1405,
      groundClearance: 130,
      suspension: {
        front: '43mm KYB® inverted fork',
        rear: 'KYB® single shock'
      },
      brakes: {
        front: 'Dual 320mm discs',
        rear: 'Single 220mm disc'
      },
      compression: '13.0:1',
      bore: 79,
      stroke: 50.9,
      fuelSystem: 'Fuel injection with YCC-T',
      clutch: 'Wet, multiple-disc'
    }
  },
  {
    id: 'ducati-panigale-v4',
    brand: 'ducati',
    name: 'Ducati Panigale V4',
    shortDescription: 'Premium Italian superbike',
    description: 'The Ducati Panigale V4 represents the peak of Ducati technology, bringing MotoGP-derived solutions to the road.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    specs: {
      horsepower: 214,
      topSpeed: 305,
      weight: 195,
      engine: '1103 cc, V4',
      transmission: '6-speed',
      fuelCapacity: 16,
      seatHeight: 835,
      wheelbase: 1469,
      groundClearance: 131,
      suspension: {
        front: 'Öhlins NIX30 43mm fork',
        rear: 'Öhlins TTX36 monoshock'
      },
      brakes: {
        front: 'Dual 330mm discs',
        rear: 'Single 245mm disc'
      },
      compression: '14.0:1',
      bore: 81,
      stroke: 53.5,
      fuelSystem: 'Electronic fuel injection',
      clutch: 'Hydraulically controlled slipper/self-servo wet multiplate'
    }
  },
  {
    id: 'kawasaki-ninja-h2',
    brand: 'kawasaki',
    name: 'Kawasaki Ninja H2',
    shortDescription: 'Supercharged performance motorcycle',
    description: 'The Kawasaki Ninja H2 is a supercharged sport bike that showcases Kawasaki\'s engineering prowess.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    specs: {
      horsepower: 228,
      topSpeed: 300,
      weight: 238,
      engine: '998 cc, inline-4 supercharged',
      transmission: '6-speed',
      fuelCapacity: 17,
      seatHeight: 825,
      wheelbase: 1455,
      groundClearance: 130,
      suspension: {
        front: 'KYB AOS-II fork',
        rear: 'Uni-Trak, Öhlins TTX36'
      },
      brakes: {
        front: 'Dual Brembo 330mm discs',
        rear: 'Single 250mm disc'
      },
      compression: '8.5:1',
      bore: 76,
      stroke: 55,
      fuelSystem: 'DFI® with 50mm throttle bodies',
      clutch: 'Wet multi-disc, manual'
    }
  }
];