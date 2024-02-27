export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}


export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128Gb, Green',
    price: 629,
    rating: '5/5',
    image: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SL1500_.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
    description: 'The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).', 
    likes: 0,
    removes: true,
    prodcategory: 1
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 12, 4G 8 Gb/256 Gb, Black',
    price: 199,
    rating: '4.6/5',
    image: 'https://m.media-amazon.com/images/I/61vzO5p1bHL._AC_SL1387_.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    description: 'Redmi 12 delivers an amazing balance of power and efficiency thanks to its MediaTek Helio G88 processor, delivering smooth and stable performance day in, day out. Redmi 12 comes with a maximum capacity of 256GB, standing out from the competition.',
    removes: true,
    prodcategory: 1,
    likes: 0
  },
  {
    id: 3,
    name: 'Poco Poco X5 Pro 8 Gb/256 Gb, Black',
    price: 309,
    rating: '4.1/5',
    image: 'https://m.media-amazon.com/images/I/61lQIQNvaeL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://kaspi.kz/shop/p/poco-poco-x5-pro-8-gb-256-gb-chernyi-108781715/?c=750000000',
    description: 'With the POCO X5 Pro 5Gs abundance of exceptional features, enjoy smooth operations and great efficiency. The Snapdragon 778G processor in this smartphone is exceptionally fast and well-optimised. Additionally, it gives you dependable functionality whenever you need it thanks to its astounding 545K AnTuTu score. For an immersive experience, this phone also has a premium-grade AMOLED display and an exceptionally slim bezel. Moreover, this phones fantastic 108 MP main camera allows you to take stunning photos and enjoy wonderful image processing. This phones camera also supports 4K video recording at 30 frames per second.', 
    removes: true,
    prodcategory: 1,
    likes: 0 
  },
  {
    id: 4,
    name: 'Apple iPhone 14 128Gb, Blue',
    price: 799,
    rating: '4.7/5',
    image: 'https://m.media-amazon.com/images/I/61ufE2FHl7L._AC_SL1500_.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    description: 'iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light. Crash Detection, a vital safety feature, can detect a severe car crash and call for help.',
    removes: true,
    prodcategory: 1,
    likes: 0 
  },
  {
    id: 5,
    name: 'Huawei nova 11i 8 Gb/128 Gb, Green',
    price: 629,
    rating: '4.2/5',
    image: 'https://m.media-amazon.com/images/I/61VXYlUt-cL._AC_SL1500_.jpg',
    link: 'https://kaspi.kz/shop/p/huawei-nova-11i-8-gb-128-gb-zelenyi-podarok-110551017/?c=750000000',
    description: 'The phone boasts a 6.8-inch FullView Display and 1 mm ultra-narrow bezels that push the screen-to-body ratio to an astonishing 94.9%. Let your true colours shine through with all the beauties around echoing in harmony, regardless of day or night.', 
    removes: true,
    prodcategory: 1,
    likes: 0
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 MGN93',
    price: 999,
    rating: '4.9/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qL0FiOeuqmqB6uCWvJHL28-wGeSPy0hTV1IQm5Ab2ntXYT3s0ZSk_BoCgmQQAvD_BwE',
    description: "'The Apple 13' MacBook Air features Apple's first chip designed specifically for Mac. The Apple M1 integrates the CPU, GPU, Neural Engine, I/O, and more into a single system on a chip (SoC). Tackle your projects with the fast 8-Core CPU and take on graphics-intensive apps and games with the 7-core GPU.",
    removes: true,
    prodcategory: 2,
    likes: 0
  },
  {
    id: 7,
    name: 'HP 15s-fq0017ci 9R257EA ',
    price: 299,
    rating: '4.6/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qL0FiOeuqmqB6uCWvJHL28-wGeSPy0hTV1IQm5Ab2ntXYT3s0ZSk_BoCgmQQAvD_BwE',
    description: 'Thin and light, built for travel. View more photos, videos, and projects on the narrow 6.5mm screen. A powerful and reliable processor will help you cope with the most complex tasks. Thanks to the spacious storage, you can save even more data - all your photos, videos and documents.',
    removes: true,
    prodcategory: 2,
    likes: 0
  },
  {
    id: 8,
    name: 'ASUS ASUS Vivobook 16 X1605ZA-MB233W 90NB0ZA3-M00Z30',
    price: 259,
    rating: '4.4/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qL0FiOeuqmqB6uCWvJHL28-wGeSPy0hTV1IQm5Ab2ntXYT3s0ZSk_BoCgmQQAvD_BwE',
    description: 'Live your life brighter with  the Asus VivoBook 16  - a feature-rich laptop that will be useful in any situation. With a 180-degree display, a large touchpad, a webcam with a protective shutter, and separate keys to turn the microphone on and off, the Vivobook 16 will make everyday tasks easier.',
    removes: true,
    prodcategory: 2,
    likes: 0
  },
  {
    id: 9,
    name: 'Acer Nitro 5 AN515-58-54FA NH.QMZER.003',
    price: 464,
    rating: '4.7/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h5d/84435235242014.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-54fa-nh-qmzer-003-chernyi-114301994/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qL0FiOeuqmqB6uCWvJHL28-wGeSPy0hTV1IQm5Ab2ntXYT3s0ZSk_BoCgmQQAvD_BwE',
    description: 'Dominate gaming with the combination of a powerful 10th Gen Intel® Core™ i7* or AMD Ryzen 4000 mobile processor and NVIDIA® GeForce RTX™* graphics. Maximum speed and massive storage capacity with dual M.2 PCIe* SSD slots and support for up to 32GB DDR4 RAM.',
    removes: true,
    prodcategory: 2,
    likes: 0
  },
  {
    id: 10,
    name: 'Chuwi GemiBook XPro 8G/256G ',
    price: 139,
    rating: '4.7/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h7e/81272592072734.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/chuwi-gemibook-xpro-8g-256g-seryi-110855868/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qL0FiOeuqmqB6uCWvJHL28-wGeSPy0hTV1IQm5Ab2ntXYT3s0ZSk_BoCgmQQAvD_BwE',
    description: 'CHUWI GemiBook XPro will inspire you to be more productive at work, school or play. Its light and stylish, with a beautiful 14.1-inch 1920x108 IPS display, 2.4G/5G Wi-Fi for fast connections, and reliability you can count on wherever you take your business. This endless device is fast and has enough battery to get you through the day.',
    removes: true,
    prodcategory: 2,
    likes: 0
  },
  {
    id: 11,
    name: 'Mizam 8902061 sofa, 70x210x75 ',
    price: 109,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/oppo-a98-5g-8-gb-256-https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000-chernyi-112526102/?c=750000000',
    description: 'Transformation mechanism: Eurobook',
    removes: true,
    prodcategory: 3,
    likes: 0
  },
  {
    id: 12,
    name: 'Simple Lifestyle TM5-80, 80x26x168',
    price: 19,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/hb6/64334477066270.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/simple-lifestyle-tm5-80-80x26x168-sm-chernyi-106944715/?c=750000000',
    description: 'Material: metal and number of shelves: 5',
    removes: true,
    prodcategory: 3,
    likes: 0
  },
    {
    id: 13,
    name: 'Qaz Oryndyq AS002, 95x55x55',
    price: 69,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hd2/64515775430686.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/stul-qaz-oryndyq-as002-95x55x55-sm-bezhevyi-106633022/?c=750000000',
    description: 'Material: metal and upholstery: velor',
    removes: true,
    prodcategory: 3,
    likes: 0
  },
  {
    id: 14,
    name: 'Havit GC933',
    price: 79,
    rating: '4.8/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hd2/84032786104350.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/havit-gc933-chernyi-110842645/?c=750000000',
    description: 'Upholstery material: artificial leather and adjustment: seat height, tilt angle',
    removes: true,
    prodcategory: 3,
    likes: 0
  },
    {
    id: 15,
    name: 'RESTAR w2500s',
    price: 25,
    rating: '4.2/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h84/67509582921758.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/restar-w2500s-sinii-108302274/?c=750000000',
    description: 'Maximum load: 200.0 kg and material: steel',
    removes: true,
    prodcategory: 3,
    likes: 0
  },
    {
    id: 16,
    name: 'Maxler 100% Golden Creatine ',
    price: 30,
    rating: '4.9/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h50/63758370701342.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000',
    description: 'Release form: powder',
    removes: true,
    prodcategory: 4,
    likes: 0
  },
      {
    id: 17,
    name: 'COB-WEB CB-689-3',
    price: 5,
    rating: '4.7/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/hd5/65512007041054.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/cob-web-cb-689-3-chernyi-107495904/?c=750000000',
    description: 'Light source: LEDs and body material: silicone',
    removes: true,
    prodcategory: 4,
    likes: 0
  },
    {
    id: 18,
    name: 'Yoga Mat YZ222802 183x61x0.6',
    price: 20,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hbe/64353925824542.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/yoga-mat-yz222802-183x61x0-6-sm-rozovyi-104362010/?c=750000000',
    description: 'Material: EVA',
    removes: true,
    prodcategory: 4,
    likes: 0
  },
    {
    id: 19,
    name: 'Bag is Power B-00004-15 ',
    price: 25,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/hc3/85109614280734.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sumka-bag-is-power-b-00004-15-28-l-chernyi-116470261/?c=750000000',
    description: 'Material: nylon, polyester',
    removes: true,
    prodcategory: 4,
    likes: 0
    
  },
    {
    id: 20,
    name: 'Qazprotein Qazprotein Muscle Mass Gainer 1400',
    price: 30,
    rating: '4.5/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h27/85016087232542.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/qazprotein-qazprotein-muscle-mass-gainer-1400-g-klubnichnoe-morozhenoe-1400-g-106121863/?c=750000000',
    description: 'Type: carbohydrate-protein',
    removes: true,
    prodcategory: 4,
    likes: 0
  },
    
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/