export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'samsung',
    productName: 'Samsung Galaxy S23 Ultra',
    productPrice: 22000000,
    description:
      '6.1" FHD+ Dynamic AMOLED 2x, 120Hz Adaptive Refresh Rate, 425ppi, 1,750nit (outdoor peak)',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/samsung/s233.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/s233.png'),
      require('../database/images/samsung/s231.png'),
      require('../database/images/samsung/s232.png'),
    ],
  },
  {
    id: 2,
    category: 'samsung',
    productName: 'Samsung Galaxy A72 5G',
    productPrice: 4800000,
    description:
      '6.7" Super AMOLED, 90Hz, 800 nits (HBM), Qualcomm SM7125 Snapdragon 720G (8 nm)',
    isOff: false,
    productImage: require('../database/images/samsung/a723.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a723.png'),
      require('../database/images/samsung/a721.png'),
      require('../database/images/samsung/a722.png'),
    ],
  },
  {
    id: 3,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13',
    productPrice: 16000000,
    description:
      '6.36" AMOLED, 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/xiaomi/mi133.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi133.png'),
      require('../database/images/xiaomi/mi131.png'),
      require('../database/images/xiaomi/mi132.png'),
    ],
  },
  {
    id: 4,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13 Pro',
    productPrice: 20000000,
    description:
      '6.73" LTPO AMOLED 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi13p3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi13p3.png'),
      require('../database/images/xiaomi/mi13p1.png'),
      require('../database/images/xiaomi/mi13p2.png'),
    ],
  },
  {
    id: 5,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 12T',
    productPrice: 6200000,
    description:
    '6.67" AMOLED, 120Hz, Mediatek Dimensity 8100-Ultra',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi12t3.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/xiaomi/mi12t3.png'),
      require('../database/images/xiaomi/mi12t1.png'),
      require('../database/images/xiaomi/mi12t2.png'),
    ],
  },
  {
    id: 6,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 12 Lite',
    productPrice: 4999000,
    description:
    '6.55" AMOLED, 120Hz, Qualcomm SM7325 Snapdragon 778G 5G (6 nm)',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi12l3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi12l3.png'),
      require('../database/images/xiaomi/mi12l1.png'),
      require('../database/images/xiaomi/mi12l2.png'),
    ],
  },
  {
    id: 7,
    category: 'samsung',
    productName: 'Samsung Galaxy A54 5G',
    productPrice: 5400000,
    description:
      '6.4" Super AMOLED, 120Hz, HDR10+, 1000 nits (HBM), Exynos 1380 (5 nm)',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/samsung/a543.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a543.png'),
      require('../database/images/samsung/a541.png'),
      require('../database/images/samsung/a542.png'),
    ],
  },
  {
    id: 8,
    category: 'samsung',
    productName: 'Samsung Galaxy A53 5G',
    productPrice: 4650000,
    description:
      '6.5" Super AMOLED, 120Hz, 800 nits (HBM), Exynos 1280 (5 nm)',
    isOff: false,
    productImage: require('../database/images/samsung/a533.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a533.png'),
      require('../database/images/samsung/a531.png'),
      require('../database/images/samsung/a532.png'),
    ],
  },
  {
    id: 9,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13 Ultra',
    productPrice: 15700000,
    description:
    '6.73" LTPO AMOLED 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi13u3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi13u3.png'),
      require('../database/images/xiaomi/mi13u1.png'),
      require('../database/images/xiaomi/mi13u2.png'),
    ],
  },
  {
    id: 10,
    category: 'xiaomi',
    productName: 'Xiaomi Redmi Note 11',
    productPrice: 2999000,
    description:
    '6.43" AMOLED, 90Hz, Qualcomm SM6225 Snapdragon 680 4G (6 nm)',
    isOff: false,
    productImage: require('../database/images/xiaomi/r113.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/r113.png'),
      require('../database/images/xiaomi/r111.png'),
      require('../database/images/xiaomi/r112.png'),
    ],
  },
];
