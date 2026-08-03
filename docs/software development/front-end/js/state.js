let state = {
  currentPage: 'home',
  user: {name:'Thabo Mokoena',email:'thabo.mokoena@student.ac.za',campus:'Main Campus',studentNumber:'STU20240012',loyaltyPoints:340},
  cart: [],
  orders: [
    {id:'ORD-2847',items:[{...FOODS[0],qty:1},{...FOODS[8],qty:2}],total:95,status:'preparing',vendorName:"Mama's Kitchen",placedAt:new Date(Date.now()-10*60000),est:'15 mins',payment:'Card'},
    {id:'ORD-2801',items:[{...FOODS[3],qty:1},{...FOODS[12],qty:1}],total:105,status:'completed',vendorName:'Campus Bites',placedAt:new Date(Date.now()-2*3600000),est:'Done',payment:'Mobile'},
  ],
  activePromo: null,
  orderPlaced: null,
  // Browse
  activeCategory: 'all',
  searchQuery: '',
  priceMax: 200,
  minRating: 0,
  sortBy: 'popular',
  filtersOpen: false,
  // Cart
  cartPayment: 'mobile',
  promoInput: '',
  promoError: '',
  promoOk: false,
  // Orders
  orderFilter: 'all',
  expandedOrders: {},
  // Vendor
  vendorTab: 'overview',
  vendorOpen: true,
  vendorMenuItems: FOODS.filter(f=>f.vid==='v1').map(f=>({...f})),
  // Login
  loginTab: 'login',
  showPw: false,
  loginData: {email:'',password:''},
  regData: {name:'',email:'',password:'',studentNumber:'',campus:'Main Campus'},
  authError: '',
  // Game
  game: {
    board: Array(9).fill(null),
    current: 'X',
    mode: 'pvp',
    difficulty: 'medium',
    scores: {X:0,O:0,draw:0},
    gameOver: false,
    winner: null,
    winCombo: null,
    thinking: false,
  }
};

