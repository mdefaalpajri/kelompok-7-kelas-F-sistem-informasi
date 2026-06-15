

const defaultProducts = [



  {
    id:1, name:'Oud Royal', cat:'pria',
    price:'Rp 185.000', bg:'bg1', badge:'Bestseller',
    foto:'img/images.jpg',
    desc:'Aroma kayu oud yang kaya berpadu dengan musk dan amber. Tahan lama hingga 8 jam, cocok untuk acara formal dan pertemuan penting.'
  },
  {
    id:2, name:'Rose Elegance', cat:'wanita',
    price:'Rp 165.000', bg:'bg3', badge:'Favorit',
    foto:'img/images.jpg',
    desc:'Keharuman mawar segar yang feminin dengan sentuhan vanilla lembut. Parfum romantis sempurna untuk hari-hari spesial.'
  },
  {
    id:3, name:'Ocean Breeze', cat:'unisex',
    price:'Rp 145.000', bg:'bg2', badge:'Baru',
    foto:'img/images.jpg',
    desc:'Kesegaran laut yang menenangkan dengan paduan citrus dan aquatic notes. Ringan dan cocok digunakan sepanjang hari.'
  },
  {
    id:4, name:'Black Forest', cat:'pria',
    price:'Rp 175.000', bg:'bg4', badge:'',
    foto:'img/images.jpg',
    desc:'Aroma hutan maskulin dengan notes cedar, vetiver, dan leather. Memberikan kesan berani dan percaya diri.'
  },
  {
    id:5, name:'Vanilla Dream', cat:'wanita',
    price:'Rp 155.000', bg:'bg5', badge:'Terlaris',
    foto:'img/images.jpg',
    desc:'Kelembutan vanilla manis berpadu jasmine dan sandalwood. Hangat dan mengundang, sempurna untuk malam hari.'
  },

  // ── Produk di bawah ini belum ada foto ──
  // Isi foto:'' kalau sudah punya fotonya

  {
    id:6, name:'Citrus Fresh', cat:'unisex',
    price:'Rp 135.000', bg:'bg6', badge:'Hemat',
    foto:'img/images.jpg',
    desc:'Kesegaran citrus dengan sentuhan mint. Parfum energik untuk memulai hari dengan penuh semangat.'
  },
  {
    id:7, name:'Amber Night', cat:'unisex',
    price:'Rp 195.000', bg:'bg1', badge:'Premium',
    foto:'img/images.jpg',
    desc:'Kemewahan amber dan benzoin yang hangat dengan sentuhan floral oriental. Eksklusif dan elegan.'
  },
  {
    id:8, name:'Fresh Mint', cat:'pria',
    price:'Rp 125.000', bg:'bg2', badge:'',
    foto:'img/images.jpg',
    desc:'Kesegaran mint yang tajam dan menyegarkan. Parfum sporty sempurna untuk aktivitas sehari-hari.'
  },
  {
    id:9, name:'Peony Bliss', cat:'wanita',
    price:'Rp 170.000', bg:'bg3', badge:'Baru',
    foto:'img/imagaes.jpg',
    desc:'Kelembutan bunga peony dengan sentuhan musk putih. Feminin, elegan, dan memukau.'
  },
  {
    id:10, name:'Woody Spice', cat:'pria',
    price:'Rp 180.000', bg:'bg4', badge:'',
    foto:'img/images.jpg',
    desc:'Perpaduan kayu hangat dengan rempah eksotis. Parfum maskulin yang kompleks dan berkarakter kuat.'
  },
  {
    id:11, name:'Sweet Floral', cat:'wanita',
    price:'Rp 150.000', bg:'bg5', badge:'Favorit',
    foto:'img/images.jpg',
    desc:'Buket mawar, lily, dan magnolia yang berpadu harmonis. Sempurna untuk penggunaan siang hari.'
  },
  {
    id:12, name:'Aqua Sport', cat:'unisex',
    price:'Rp 130.000', bg:'bg6', badge:'',
    foto:'img/images.jpg',
    desc:'Kesegaran air bersih dengan aquatic notes modern. Cocok digunakan untuk segala aktivitas.'
  },
  {
    id:13, name:'Mystic Oud', cat:'pria',
    price:'Rp 220.000', bg:'bg1', badge:'Eksklusif',
    foto:'img/images.jpg',
    desc:'Oud pilihan dari Timur Tengah dikombinasikan dengan rose damascena dan saffron. Mewah dan prestisius.'
  },
  {
    id:14, name:'Cherry Blossom', cat:'wanita',
    price:'Rp 160.000', bg:'bg3', badge:'',
    foto:'img/images.jpg',
    desc:'Kecantikan bunga sakura yang lembut dan segar. Karakter muda dan ceria untuk generasi muda.'
  },
  {
    id:15, name:'Lavender Fields', cat:'unisex',
    price:'Rp 140.000', bg:'bg4', badge:'Relaksasi',
    foto:'img/images.jpg',
    desc:'Ketenangan ladang lavender yang menenangkan jiwa. Cocok digunakan di rumah dan sebelum tidur.'
  },
  {
    id:16, name:'Dark Tobacco', cat:'pria',
    price:'Rp 190.000', bg:'bg2', badge:'',
    foto:'img/images.jpg',
    desc:'Aroma tembakau yang kaya berpadu dengan leather dan vanilla. Parfum dewasa penuh karakter.'
  },
  {
    id:17, name:'Iris Royale', cat:'wanita',
    price:'Rp 175.000', bg:'bg5', badge:'Premium',
    foto:'img/images.jpg',
    desc:'Keanggunan bunga iris yang powdery dan sophisticated. Untuk wanita modern berselera tinggi.'
  },
  {
    id:18, name:'Sport Active', cat:'unisex',
    price:'Rp 120.000', bg:'bg6', badge:'',
    foto:'img/images.jpg',
    desc:'Energi dan kesegaran dalam satu semprotan. Cocok untuk yang selalu aktif bergerak.'
  },
  {
    id:19, name:'Sandalwood Gold', cat:'unisex',
    price:'Rp 185.000', bg:'bg1', badge:'Klasik',
    foto:'img/images.jpg',
    desc:'Kehangatan kayu cendana timeless berpadu dengan neroli dan patchouli. Klasik yang tidak lekang waktu.'
  },
  {
    id:20, name:'Lily White', cat:'wanita',
    price:'Rp 155.000', bg:'bg3', badge:'',
    foto:'img/images.jpg',
    desc:'Kemurnian lily putih yang bersih dan elegan. Minimalis namun berkesan mendalam.'
  },
];

const defaultTestimoni = [
  {
    id:1, nama:'Sari Dewi', produk:'Rose Elegance', rating:5,
    pesan:'Parfumnya tahan lama banget, dari pagi sampai malam masih tercium. Sangat cocok untuk wanita yang suka aroma mawar. Sangat direkomendasikan!',
    tgl:'12 Mei 2026'
  },
  {
    id:2, nama:'Budi Santoso', produk:'Oud Royal', rating:5,
    pesan:'Aroma oudnya kuat tapi tidak menyengat. Dapat banyak pujian di kantor setelah pakai ini. Pasti beli lagi!',
    tgl:'10 Mei 2026'
  },
  {
    id:3, nama:'Annisa Rahma', produk:'Ocean Breeze', rating:4,
    pesan:'Segar dan ringan, cocok untuk cuaca panas di Jambi. Harga terjangkau untuk kualitas yang sangat bagus.',
    tgl:'8 Mei 2026'
  },
];
