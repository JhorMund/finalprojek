import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name:'Jhon',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name:'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },],
  products: [
    {
      name: 'Contoh Bunga Papan 1',
      slug: 'Bunga-Papan-1',
      category: 'Bunga Papan',
      image: '/images/bunga papan/1.jpg',
      price: 1143000,
      description: 'Bunga Papan Duka Cita berwarna kuning dengan aksen bunga hijau di atas. Ada juga dekorasi bunga kuning, putih dan ungu di sekitarnya.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 2',
      slug: 'Bunga-Papan-2',
      category: 'Bunga Papan',
      image: '/images/bunga papan/2.jpg',
      price: 1819000,
      description: 'Bunga Papan Turut Berduka Cita dengan dekorasi bunga di setiap sisi. Bunga Papan ini sangat cocok untuk menyatakan rasa duka kehilangan orang tercinta, baik itu sahabat, rekan kerja, ataupun keluarga.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 3',
      slug: 'Bunga-Papan-3',
      category: 'Bunga Papan',
      image: '/images/bunga papan/3.jpeg',
      price: 730000,
      description: 'Papan Bunga Duka Cita dengan dekorasi bunga wanra biru dan putih, dan juga bunga kuning dan ungu.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 4',
      slug: 'Bunga-Papan-4',
      category: 'Bunga Papan',
      image: '/images/bunga papan/4.jpeg',
      price: 1180000,
      description: 'Bunga Papan Duka Cita yang di bentuk dengan atasan berbentuk pita dan bunga bunga berwarna biru, putih, ungu, dan kuning.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 5',
      slug: 'Bunga-Papan-5',
      category: 'Bunga Papan',
      image: '/images/bunga papan/5.jpg',
      price: 730000,
      description: 'Bunga Papan Duka Cita, dengan bunga warna biru, kuning, dan putih.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 6',
      slug: 'Bunga-Papan-6',
      category: 'Bunga Papan',
      image: '/images/bunga papan/6.jpg',
      price: 730000,
      description: 'Papan Bunga Duka Cita dengan aksen warna hijau, dengan dekorasi bunga berwarna putih biru, kuning, dan ungu.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 7',
      slug: 'Bunga-Papan-7',
      category: 'Bunga Papan',
      image: '/images/bunga papan/7.jpg',
      price: 730000,
      description: 'Papan Bunga Duka Cita dengan dekorasi bunga biru putih dan kuning ungu, dengna aksen warna papan biru kehijauan.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 8',
      slug: 'Bunga-Papan-8',
      category: 'Bunga Papan',
      image: '/images/bunga papan/8.jpg',
      price: 910000,
      description: 'Bunga Papan Turut Duka Cita Dengan Dekorasi bunga berwarna ungu, putih, biru, dan kuning.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 9',
      slug: 'Bunga-Papan-9',
      category: 'Bunga Papan',
      image: '/images/bunga papan/9.jpg',
      price: 905000,
      description: 'Bunga Papan Duka Cita berwarna biru dan hijau, dengna dekorasi bunga berwarna kuning, ungu, biru, dan putih.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 10',
      slug: 'Bunga-Papan-10',
      category: 'Bunga Papan',
      image: '/images/bunga papan/10.jpg',
      price: 968000,
      description: 'Bunga Papan Turut Berduka dengan tambahan bunga kuning dan putih. Sangat cocok untuk menyampaikan duka cita kepada orang yang telah kehilangan.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 11',
      slug: 'Bunga-Papan-11',
      category: 'Bunga Papan',
      image: '/images/bunga papan/11.jpg',
      price: 1180000,
      description: 'Duka Cita Papan Bunga berwarna biru dan kuning, dengan bunga putih, biru dan kuning.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 12',
      slug: 'Bunga-Papan-12',
      category: 'Bunga Papan',
      image: '/images/bunga papan/12.jpg',
      price: 1003000,
      description: 'Bunga Papan Duka dengan warna hijau dan kuning. Di dekorasi dengan bunga berwarna putih, kuning, biru, dan ungu.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 13',
      slug: 'Bunga-Papan-13',
      category: 'Bunga Papan',
      image: '/images/bunga papan/13.jpg',
      price: 2040000,
      description: 'Papan bunga dengan warna hitam putih.',
      countInStock: 20,
      ukuran: '2m x 1.7m',
    },
    {
      name: 'Contoh Bunga Papan 14',
      slug: 'Bunga-Papan-14',
      category: 'Bunga Papan',
      image: '/images/bunga papan/14.jpg',
      price: 1182000,
      description: 'Papan Bunga dengan warna kuning, biru, putih, hitam.',
      countInStock: 20,
      ukuran: '2m x 1.5m',
    },
    {
      name: 'Contoh Bunga Papan 15',
      slug: 'Bunga-Papan-15',
      category: 'Bunga Papan',
      image: '/images/bunga papan/15.jpg',
      price: 690000,
      description: 'Papan Bunga - Turut Berduka Cita dengan ukuran 2mx1.25m',
      countInStock: 20,
      ukuran: '2m x 1.25m',
    },
    {
      name: 'Contoh Bunga Papan 16',
      slug: 'Bunga-Papan-16',
      category: 'Bunga Papan',
      image: '/images/bunga papan/16.jpg',
      price: 657000,
      description: 'Bunga Papan Duka Cita dengan aksen warna biru, putih, dan kuning.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 17',
      slug: 'Bunga-Papan-17',
      category: 'Bunga Papan',
      image: '/images/bunga papan/17.jpg',
      price: 730000,
      description: 'Bunga Papan Duka Cita dengan aksen warna putih, biru, dan kuning.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 18',
      slug: 'Bunga-Papan-18',
      category: 'Bunga Papan',
      image: '/images/bunga papan/18.jpg',
      price: 730000,
      description: 'Bunga Papan Duka Cita berwarna kuning dan biru.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 19',
      slug: 'Bunga-Papan-19',
      category: 'Bunga Papan',
      image: '/images/bunga papan/19.jpg',
      price: 1180000,
      description: 'Bunga Papan Duka Cita bertema warna kuning, menyimbolkan duka cita.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Papan 20',
      slug: 'Bunga-Papan-20',
      category: 'Bunga Papan',
      image: '/images/bunga papan/20.jpg',
      price: 798000,
      description: 'Sympathy Board Flower Fond Farewell. Size 2m x 1,5m',
      countInStock: 20,
      ukuran: '2m x 1,5m',
    },
  ],
  products1: [
    {
      name: 'Contoh Bunga Rotan 1',
      pid: 'Bunga-Rotan-1',
      category: 'Bunga Rotan',
      image: '/images/bunga rotan/1.jpg',
      price: 79000,
      description: 'Sympathy Board Flower Fond Farewell. Size 2m x 1,5m',
      countInStock: 20,
      ukuran: '2m x 1,5m',
    },
    {
      name: 'Contoh Bunga Rotan 2',
      pid: 'Bunga-Rotan-2',
      category: 'Bunga Rotan',
      image: '/images/bunga rotan/2.jpeg',
      price: 181000,
      description: 'Bunga Papan Turut Berduka Cita dengan dekorasi bunga di setiap sisi. Bunga Papan ini sangat cocok untuk menyatakan rasa duka kehilangan orang tercinta, baik itu sahabat, rekan kerja, ataupun keluarga.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Rotan 3',
      pid: 'Bunga-Rotan-3',
      category: 'Bunga ROtan',
      image: '/images/bunga rotan/3.jpg',
      price: 181000,
      description: 'Bunga Papan Turut Berduka Cita dengan dekorasi bunga di setiap sisi. Bunga Papan ini sangat cocok untuk menyatakan rasa duka kehilangan orang tercinta, baik itu sahabat, rekan kerja, ataupun keluarga.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
    {
      name: 'Contoh Bunga Rotan 4',
      pid: 'Bunga-Rotan-4',
      category: 'Bunga Papan',
      image: '/images/bunga rotan/4.jpg',
      price: 181000,
      description: 'Bunga Papan Turut Berduka Cita dengan dekorasi bunga di setiap sisi. Bunga Papan ini sangat cocok untuk menyatakan rasa duka kehilangan orang tercinta, baik itu sahabat, rekan kerja, ataupun keluarga.',
      countInStock: 20,
      ukuran: '1.25m x 2m',
    },
  ],
};
export default data;