const uniqid = require("uniqid");

const listings = [
  {
    id: 0,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 434,
    price: 7,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100849695/original/ed0e65e821ed7a4eb5a1213d79f7e5a3e1e846ff/do-business-logo-design.jpg",
    deliveryTime: 7,
    category: "grafinis dizainas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg",
    },
  },
  {
    id: 1,
    title: "3d logo dizainas visais formatais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 419,
    price: 17,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/85405261/original/21c487172c63a943fd86ba80a19fa6472b81df5d/do-unique-logo-design-that-you-deserve.jpg",
    deliveryTime: 47,
    category: "grafinis dizainas",
    author: {
      name: "Sandra",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg",
    },
  },
  {
    id: 2,
    title: "Sukursiu minimalistišką brand logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 41,
    price: 37,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100386124/original/f5790519204171504291b502420c09198f8d8135/design-an-unique-professional-and-eye-catching-logo.jpg",
    deliveryTime: 27,
    category: "grafinis dizainas",
    author: {
      name: "Agnė",
      image: "https://cdn.pixabay.com/photo/2017/06/01/00/43/corporate-2362135_1280.jpg",
    },
  },
  {
    id: 3,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 109,
    price: 5,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/150716360/original/40ea25edb441ca8df6549ff570841bc1a778c6d9/do-cartoon-character-mascot-logo-design-for-business-brand.jpg",
    deliveryTime: 71,
    category: "grafinis dizainas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    },
  },
  {
    id: 4,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 29,
    price: 7,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100849695/original/ed0e65e821ed7a4eb5a1213d79f7e5a3e1e846ff/do-business-logo-design.jpg",
    deliveryTime: 17,
    category: "grafinis dizainas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg",
    },
  },
  {
    id: 5,
    title: "3d logo dizainas visais formatais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 43,
    price: 17,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/85405261/original/21c487172c63a943fd86ba80a19fa6472b81df5d/do-unique-logo-design-that-you-deserve.jpg",
    deliveryTime: 1,
    category: "grafinis dizainas",
    author: {
      name: "Sandra",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg",
    },
  },
  {
    id: 6,
    title: "Sukursiu minimalistišką brand logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 46,
    price: 37,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100386124/original/f5790519204171504291b502420c09198f8d8135/design-an-unique-professional-and-eye-catching-logo.jpg",
    deliveryTime: 6,
    category: "programavimas",
    author: {
      name: "Agnė",
      image: "https://cdn.pixabay.com/photo/2017/06/01/00/43/corporate-2362135_1280.jpg",
    },
  },
  {
    id: 7,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 60,
    price: 5,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/150716360/original/40ea25edb441ca8df6549ff570841bc1a778c6d9/do-cartoon-character-mascot-logo-design-for-business-brand.jpg",
    deliveryTime: 5,
    category: "video ir animacijos",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    },
  },
  {
    id: 8,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 200,
    price: 7,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100849695/original/ed0e65e821ed7a4eb5a1213d79f7e5a3e1e846ff/do-business-logo-design.jpg",
    deliveryTime: 30,
    category: "grafinis dizainas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg",
    },
  },
  {
    id: 9,
    title: "3d logo dizainas visais formatais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 0,
    price: 17,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/85405261/original/21c487172c63a943fd86ba80a19fa6472b81df5d/do-unique-logo-design-that-you-deserve.jpg",
    deliveryTime: 3,
    category: "grafinis dizainas",
    author: {
      name: "Sandra",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg",
    },
  },
  {
    id: 10,
    title: "Sukursiu minimalistišką brand logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 378,
    price: 37,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100386124/original/f5790519204171504291b502420c09198f8d8135/design-an-unique-professional-and-eye-catching-logo.jpg",
    deliveryTime: 14,
    category: "video ir animacijos",
    author: {
      name: "Agnė",
      image: "https://cdn.pixabay.com/photo/2017/06/01/00/43/corporate-2362135_1280.jpg",
    },
  },
  {
    id: 11,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 419,
    price: 5,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/150716360/original/40ea25edb441ca8df6549ff570841bc1a778c6d9/do-cartoon-character-mascot-logo-design-for-business-brand.jpg",
    deliveryTime: 8,
    category: "marketingas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    },
  },
  {
    id: 12,
    title: "Sukursiu minimalistišką brand logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 419,
    price: 37,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/100386124/original/f5790519204171504291b502420c09198f8d8135/design-an-unique-professional-and-eye-catching-logo.jpg",
    deliveryTime: 7,
    category: "grafinis dizainas",
    author: {
      name: "Agnė",
      image: "https://cdn.pixabay.com/photo/2017/06/01/00/43/corporate-2362135_1280.jpg",
    },
  },
  {
    id: 13,
    title: "Galiu sukurti logo svg, png, fav formatu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt urna. Donec sed mollis justo, eget euismod tellus. Vivamus sodales fermentum augue et commodo. Vestibulum consectetur, nulla tristique gravida ullamcorper, lorem leo varius purus, a finibus libero tellus non lacus. Aliquam viverra augue dignissim, dictum nulla vitae, condimentum metus. Sed iaculis dignissim ligula. Vivamus metus eros, porta eget lectus in, fermentum accumsan elit.",
    revisions: 5,
    views: 419,
    price: 5,
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/150716360/original/40ea25edb441ca8df6549ff570841bc1a778c6d9/do-cartoon-character-mascot-logo-design-for-business-brand.jpg",
    deliveryTime: 4,
    category: "programavimas",
    author: {
      name: "Tadas",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    },
  },
];

export default listings;
