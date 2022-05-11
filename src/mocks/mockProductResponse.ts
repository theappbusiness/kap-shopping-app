export type ProductResponse = {
  products: [
    _source: {
      id: string;
      name: string;
      price: number;
      description: string;
      categories: [
        {
          description: string;
          name: string;
          _id: string;
        }
      ];
    }
  ];
};

export const mockProductsResponse = {
  products: [
    {
      _source: {
        id: '624dac874b612626dd5f3e79',
        name: 'Football Everybody',
        price: 176.99,
        description: 'Buffalo body buy perfect planet getting minute earth...',
        categories: [],
      },
    },
    {
      _source: {
        id: '624dac874b612626dd5f3e7d',
        name: 'Account Broad',
        price: 112.99,
        description:
          'Fun follow heat our ground! Solid grass belong lost river!',
        categories: [
          {
            description:
              'Copper congress image include value there felt run...',
            name: 'Jump',
            _id: '624dac874b612626dd5f3e75',
          },
        ],
      },
    },
    {
      _source: {
        id: '624dac874b612626dd5f3e7',
        name: 'Table',
        price: 114.99,
        description:
          'Fun follow heat our ground! Solid grass belong lost river!',
        categories: [
          {
            description:
              'Copper congress image include value there felt run...',
            name: 'Jump',
            _id: '624dac874b612626dd5f3e75',
          },
        ],
      },
    },
    {
      _source: {
        id: '624dac874b612626dd5f3ed',
        name: 'Beat Decide',
        price: 142.99,
        description:
          'Fun follow heat our ground! Solid grass belong lost river!',
        categories: [
          {
            description:
              'Copper congress image include value there felt run...',
            name: 'Jump',
            _id: '624dac874b612626dd5f3e75',
          },
        ],
      },
    },
    {
      _source: {
        id: '624dac874b612626dd5f37d',
        name: 'Chair',
        price: 119.99,
        description:
          'Fun follow heat our ground! Solid grass belong lost river!',
        categories: [
          {
            description:
              'Copper congress image include value there felt run...',
            name: 'Jump',
            _id: '624dac874b612626dd5f3e75',
          },
        ],
      },
    },
  ],
};
