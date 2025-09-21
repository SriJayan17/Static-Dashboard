import moment from "moment";

export const MOCK_FAVORITES = ["overview", "projects"];
export const MOCK_RECENTLY_VISITED = ["campaigns", "documents"];

export const NOTIFICATION_TYPES = {
  BUG: 'bug',
  REGISTRATION: 'registration',
  SUBSCRIPTION: 'subscription',
}

export const MOCK_NOTIFICATIONS = [
  {
    type: NOTIFICATION_TYPES.BUG,
    content: 'You have a bug that needs to be fixed | Priority P2',
    receivedAt: moment().unix(),
  },
  {
    type: NOTIFICATION_TYPES.REGISTRATION,
    content: 'New user registered',
    receivedAt: moment((moment().unix() - 3500)*1000).unix(),
  },
  {
    type: NOTIFICATION_TYPES.BUG,
    content: 'You have a bug that needs to be fixed | Priority P2',
    receivedAt: moment((moment().unix() - 12*3600)*1000).unix(),
  },
  {
    type: NOTIFICATION_TYPES.SUBSCRIPTION,
    content: 'Andi Lane subscribed to you',
    receivedAt: moment((moment().unix() - 20*3600)*1000).unix(),
  },
];

export const MOCK_ACTIVITIES = [
  {
    content: 'You have a bug that needs to be fixed | Priority P2',
    receivedAt: moment().unix(),
    avatarUrl: 'src/assets/user7.png',
  },
  {
    content: 'Released a new version',
    receivedAt: moment((moment().unix() - 3500)*1000).unix(),
    avatarUrl: 'src/assets/user8.png',
  },
  {
    content: 'Submitted a bug',
    receivedAt: moment((moment().unix() - 12*3600)*1000).unix(),
    avatarUrl: 'src/assets/user9.png',
  },
  {
    content: 'Modified a data in Page X',
    receivedAt: moment((moment().unix() - 20*3600)*1000).unix(),
    avatarUrl: 'src/assets/user10.png',
  },
  {
    content: 'Deleted a page in Project X',
    receivedAt: moment((moment().unix() - 20*3600)*1000).unix(),
    avatarUrl: 'src/assets/user11.png',
  },
];

export const MOCK_CONTACTS = [
  {
    firstName: 'Natali',
    lastName: 'Criag',
    avatarUrl: 'src/assets/user1.png',
  },
  {
    firstName: 'Drew',
    lastName: 'Cano',
    avatarUrl: 'src/assets/user2.png',
  },
  {
    firstName: 'Orlando',
    lastName: 'Diggs',
    avatarUrl: 'src/assets/user3.png',
  },
  {
    firstName: 'Andy',
    lastName: 'Lane',
    avatarUrl: 'src/assets/user4.png',
  },
  {
    firstName: 'Kate',
    lastName: 'Morrison',
    avatarUrl: 'src/assets/user5.png',
  },
  {
    firstName: 'Korey',
    lastName: 'Okumus',
    avatarUrl: 'src/assets/user6.png',
  },
]


export const MOCK_E_COMMERCE_DATA = [
  {
    unit: 'Customer',
    insight: '3,781',
    percentage: 11.01,
  },
  {
    unit: 'Orders',
    insight: '1,219',
    percentage: -0.03,
  },
  {
    unit: 'Revenue',
    insight: '$695',
    percentage: 15.03,
  },
  {
    unit: 'Growth',
    insight: '30.1%',
    percentage: 6.08,
  },
]

export const MOCK_PROJECTION_VS_ACTUAL_DATA = [
  { month: 'Jan', actual: 17, projection: 3 },
  { month: 'Feb', actual: 20, projection: 5 },
  { month: 'Mar', actual: 18, projection: 3 },
  { month: 'Apr', actual: 22, projection: 4 },
  { month: 'May', actual: 15, projection: 3 },
  { month: 'Jun', actual: 20, projection: 5 },
];

export const MOCK_REVENUE_TREND = {
  currentWeekCumulative: '$58,211',
  previousWeekCumulative: '$68,768',
  trends: [
    { month: 'Jan', previous: 8, current: 13 },
    { month: 'Feb', previous: 16, current: 7 },
    { month: 'Mar', previous: 14, current: 9 },
    { month: 'Apr', previous: 11, current: 14 },
    { month: 'May', previous: 13, current: 18 },
    { month: 'Jun', previous: 22, current: 20 }, 
  ]
};

export const SALES_DATA = [
  { name: 'Direct', value: 300.56, color: '#000000' },
  { name: 'Affiliate', value: 135.18, color: '#c7edb2' },
  { name: 'Sponsored', value: 154.02, color: '#a2a9ed' },
  { name: 'E-mail', value: 48.96, color: '#b9e0f3' },
];

export const MOCK_PRODUCTS_DATA = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.50,
    quantity: 37,
    amount: 4754.50,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.00,
    quantity: 184,
    amount: 3680.00,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

const DATA_SET = [
  {
    orderID: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "src/assets/user1.png"
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress"
  },
  {
    orderID: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "src/assets/user2.png"
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete"
  },
  {
    orderID: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "src/assets/user3.png"
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending"
  },
  {
    orderID: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "src/assets/user4.png"
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved"
  },
  {
    orderID: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "src/assets/user5.png"
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected"
  }
];

export const MOCK_ORDERS = Array(200).fill(0).map((_, index) => ({
  id: index,
  ...DATA_SET[index%4],
}));


export const MOCK_MAP_DATA = [
  {
    name: "New York",
    coordinates: [-74.006, 40.7128],
    revenue: 72,
  },
  {
    name: "San Francisco",
    coordinates: [-0.1278, 51.5074],
    revenue: 39,
  },
   {
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    revenue: 25,
  },
  {
    name: "Singapore",
    coordinates: [139.6917, 35.6895],
    revenue: 61,
  },
];