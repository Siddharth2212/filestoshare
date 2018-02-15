import {Dish} from './dish';

export const DISHES: Dish[] = [{
  id: 0,
  featured: true,
  name: 'Veg Pulao',
  image: '/assets/images/pulao.jpg',
  label: 'Hot',
  price: '150',
  description: 'An easy one pot Indian rice pilaf cooked with mild spices and veggies. ' +
  'Pulao or pulav is one of the most common rice dishes that is often made in most Indian homes',
  comments: [
    {
      rating: 5,
      comment: 'One of the best dishes in this restaurant',
      author: 'Akshay Gaikwad',
      date: '2012-10-16T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Very delicious. I wish to come here again',
      author: 'Narendra Yadav',
      date: '2014-09-05T17:57:28.556094Z'
    },
    {
      rating: 3,
      comment: 'Eat it, just eat it!',
      author: 'Vinod Mankare',
      date: '2015-02-13T17:57:28.556094Z'
    }
  ]
},
  {
    id: 1,
    featured: false,
    name: 'Pooran Poli',
    image: '/assets/images/puranpoli.jpg',
    label: '',
    price: '250',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments: [
      {
        rating: 5,
        comment: 'It is my favorite dish and this restaurant makes the authentic one.',
        author: 'Akshay Gaikwad',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Ultimate dish! ',
        author: 'Shivam Singh',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Exotic dish!',
        author: 'Siddharth Sogani',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  },
  {
    id: 2,
    featured: false,
    name: 'Noodles',
    image: '/assets/images/noodles.jpeg',
    label: 'New',
    price: '150',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments: [
      {
        rating: 5,
        comment: 'Awesome dish',
        author: 'Neha Rathor',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Very delicious. I wish to come here again',
        author: 'Narendra Yadav',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Vinod Mankare',
        date: '2015-02-13T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Ultimate dish! ',
        author: 'Shivam Singh',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Exotic dish!',
        author: 'Siddharth Sogani',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  },
  {
    id: 3,
    featured: false,
    name: 'Veg Biryani',
    image: '/assets/images/vegpulao.jpeg',
    label: '',
    price: '150',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments: [
      {
        rating: 5,
        comment: 'It is my favorite dish and this restaurant makes the authentic one.',
        author: 'Akshay Gaikwad',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Ultimate dish! ',
        author: 'Shivam Singh',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Exotic dish!',
        author: 'Siddharth Sogani',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  }
];
