/* ============================================================
   VILLA PARFUM — main.js
   Semua logika interaktif website
   Kelompok 7 | Kelas 4F | UIN STS Jambi
   ============================================================ */

/* ═══════════ DATA DEFAULT ═══════════ */
const defaultProducts=[
  {id:1,name:'Oud Royal',cat:'pria',price:'Rp 185.000',bg:'bg1',badge:'Bestseller',foto:'',desc:'Aroma kayu oud yang kaya berpadu dengan musk dan amber. Tahan lama hingga 8 jam, cocok untuk acara formal dan pertemuan penting.'},
  {id:2,name:'Rose Elegance',cat:'wanita',price:'Rp 165.000',bg:'bg3',badge:'Favorit',foto:'',desc:'Keharuman mawar segar yang feminin dengan sentuhan vanilla lembut. Parfum romantis sempurna untuk hari-hari spesial.'},
  {id:3,name:'Ocean Breeze',cat:'unisex',price:'Rp 145.000',bg:'bg2',badge:'Baru',foto:'',desc:'Kesegaran laut yang menenangkan dengan paduan citrus dan aquatic notes. Ringan dan cocok digunakan sepanjang hari.'},
  {id:4,name:'Black Forest',cat:'pria',price:'Rp 175.000',bg:'bg4',badge:'',foto:'',desc:'Aroma hutan maskulin dengan notes cedar, vetiver, dan leather. Memberikan kesan berani dan percaya diri.'},
  {id:5,name:'Vanilla Dream',cat:'wanita',price:'Rp 155.000',bg:'bg5',badge:'Terlaris',foto:'',desc:'Kelembutan vanilla manis berpadu jasmine dan sandalwood. Hangat dan mengundang, sempurna untuk malam hari.'},
  {id:6,name:'Citrus Fresh',cat:'unisex',price:'Rp 135.000',bg:'bg6',badge:'Hemat',foto:'',desc:'Kesegaran citrus dengan sentuhan mint. Parfum energik untuk memulai hari dengan penuh semangat.'},
  {id:7,name:'Amber Night',cat:'unisex',price:'Rp 195.000',bg:'bg1',badge:'Premium',foto:'',desc:'Kemewahan amber dan benzoin yang hangat dengan sentuhan floral oriental. Eksklusif dan elegan.'},
  {id:8,name:'Fresh Mint',cat:'pria',price:'Rp 125.000',bg:'bg2',badge:'',foto:'',desc:'Kesegaran mint yang tajam dan menyegarkan. Parfum sporty sempurna untuk aktivitas sehari-hari.'},
  {id:9,name:'Peony Bliss',cat:'wanita',price:'Rp 170.000',bg:'bg3',badge:'Baru',foto:'',desc:'Kelembutan bunga peony dengan sentuhan musk putih. Feminin, elegan, dan memukau.'},
  {id:10,name:'Woody Spice',cat:'pria',price:'Rp 180.000',bg:'bg4',badge:'',foto:'',desc:'Perpaduan kayu hangat dengan rempah eksotis. Parfum maskulin yang kompleks dan berkarakter kuat.'},
  {id:11,name:'Sweet Floral',cat:'wanita',price:'Rp 150.000',bg:'bg5',badge:'Favorit',foto:'',desc:'Buket mawar, lily, dan magnolia yang berpadu harmonis. Sempurna untuk penggunaan siang hari.'},
  {id:12,name:'Aqua Sport',cat:'unisex',price:'Rp 130.000',bg:'bg6',badge:'',foto:'',desc:'Kesegaran air bersih dengan aquatic notes modern. Cocok digunakan untuk segala aktivitas.'},
  {id:13,name:'Mystic Oud',cat:'pria',price:'Rp 220.000',bg:'bg1',badge:'Eksklusif',foto:'',desc:'Oud pilihan dari Timur Tengah dikombinasikan dengan rose damascena dan saffron. Mewah dan prestisius.'},
  {id:14,name:'Cherry Blossom',cat:'wanita',price:'Rp 160.000',bg:'bg3',badge:'',foto:'',desc:'Kecantikan bunga sakura yang lembut dan segar. Karakter muda dan ceria untuk generasi muda.'},
  {id:15,name:'Lavender Fields',cat:'unisex',price:'Rp 140.000',bg:'bg4',badge:'Relaksasi',foto:'',desc:'Ketenangan ladang lavender yang menenangkan jiwa. Cocok digunakan di rumah dan sebelum tidur.'},
  {id:16,name:'Dark Tobacco',cat:'pria',price:'Rp 190.000',bg:'bg2',badge:'',foto:'',desc:'Aroma tembakau yang kaya berpadu dengan leather dan vanilla. Parfum dewasa penuh karakter.'},
  {id:17,name:'Iris Royale',cat:'wanita',price:'Rp 175.000',bg:'bg5',badge:'Premium',foto:'',desc:'Keanggunan bunga iris yang powdery dan sophisticated. Untuk wanita modern berselera tinggi.'},
  {id:18,name:'Sport Active',cat:'unisex',price:'Rp 120.000',bg:'bg6',badge:'',foto:'',desc:'Energi dan kesegaran dalam satu semprotan. Cocok untuk yang selalu aktif bergerak.'},
  {id:19,name:'Sandalwood Gold',cat:'unisex',price:'Rp 185.000',bg:'bg1',badge:'Klasik',foto:'',desc:'Kehangatan kayu cendana timeless berpadu dengan neroli dan patchouli. Klasik yang tidak lekang waktu.'},
  {id:20,name:'Lily White',cat:'wanita',price:'Rp 155.000',bg:'bg3',badge:'',foto:'',desc:'Kemurnian lily putih yang bersih dan elegan. Minimalis namun berkesan mendalam.'},
];
const defaultTestimoni=[
  {id:1,nama:'Sari Dewi',produk:'Rose Elegance',rating:5,pesan:'Parfumnya tahan lama banget, dari pagi sampai malam masih tercium. Sangat cocok untuk wanita yang suka aroma mawar. Sangat direkomendasikan!',tgl:'12 Mei 2026'},
  {id:2,nama:'Budi Santoso',produk:'Oud Royal',rating:5,pesan:'Aroma oudnya kuat tapi tidak menyengat. Dapat banyak pujian di kantor setelah pakai ini. Pasti beli lagi!',tgl:'10 Mei 2026'},
  {id:3,nama:'Annisa Rahma',produk:'Ocean Breeze',rating:4,pesan:'Segar dan ringan, cocok untuk cuaca panas di Jambi. Harga terjangkau untuk kualitas yang sangat bagus.',tgl:'8 Mei 2026'},
];



/* ═══════════ STATE ═══════════ */
let currentFilter='semua',searchVal='',selectedRating=0,editingId=null;

/* ═══════════ STORAGE ═══════════ */
function getProducts(){const d=localStorage.getItem('vp_products');return d?JSON.parse(d):[...defaultProducts];}
function saveProducts(p){localStorage.setItem('vp_products',JSON.stringify(p));}
function getTestimoni(){const d=localStorage.getItem('vp_testi');return d?JSON.parse(d):[...defaultTestimoni];}
function saveTesti(t){localStorage.setItem('vp_testi',JSON.stringify(t));}

/* ═══════════ INIT ═══════════ */
function init(){
  if(!localStorage.getItem('vp_products'))saveProducts(defaultProducts);
  if(!localStorage.getItem('vp_testi'))saveTesti(defaultTestimoni);
  renderFeatured();renderHomeTesti();updateStats();
}

/* ═══════════ NAVIGASI ═══════════ */
function showPage(name){
  if(name==='admin'&&!localStorage.getItem('vp_admin')){showPage('admin-login');return;}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a,.mobile-menu a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  ['nav-','mnav-'].forEach(pre=>{const el=document.getElementById(pre+name);if(el)el.classList.add('active');});
  window.scrollTo(0,0);
  if(name==='home'){renderFeatured();renderHomeTesti();updateStats();}
  if(name==='katalog')renderKatalog();
  if(name==='testimoni')renderTesti();
  if(name==='admin')renderAdmin();
}
function toggleMenu(){document.getElementById('hamburger').classList.toggle('open');document.getElementById('mobileMenu').classList.toggle('open');}
function closeMenu(){document.getElementById('hamburger').classList.remove('open');document.getElementById('mobileMenu').classList.remove('open');}

/* ═══════════ GAMBAR PRODUK ═══════════ */
function buildImgCard(p){
  if(p.foto&&p.foto!==''){
    return`<img src="${p.foto}" alt="${p.name}" style="width:100%;height:190px;object-fit:cover;display:block;">`;
  }
  return`<div class="foto-placeholder ${p.bg}" style="height:190px;display:flex;align-items:center;justify-content:center;">
    <span class="ph-no-foto">Foto belum tersedia</span>
  </div>`;
}
function buildImgModal(p){
  if(p.foto&&p.foto!==''){
    return`<img src="${p.foto}" alt="${p.name}" style="width:100%;height:240px;object-fit:cover;display:block;">`;
  }
  return`<div class="foto-placeholder ${p.bg}" style="height:240px;display:flex;align-items:center;justify-content:center;">
    <span class="ph-no-foto">Foto belum tersedia</span>
  </div>`;
}

/* ═══════════ CARD BUILDER ═══════════ */
function buildCard(p){
  const badge=p.badge?`<span class="product-badge">${p.badge}</span>`:'';
  const wa=encodeURIComponent(`Halo Villa Parfum, saya tertarik dengan ${p.name} (${p.price}). Masih tersedia?`);
  return`<div class="product-card" onclick="openModal(${p.id})">
    <div class="product-img-wrap">${badge}${buildImgCard(p)}</div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
    </div>
    <div class="product-action">
      <button class="btn-detail" onclick="event.stopPropagation();openModal(${p.id})">Detail</button>
      <button class="btn-wa-small" onclick="event.stopPropagation();window.open('https://wa.me/6281234567890?text=${wa}','_blank')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA">WA
      </button>
    </div>
  </div>`;
}

/* ═══════════ HOME ═══════════ */
function renderFeatured(){
  const p=getProducts();
  const b=p.filter(x=>x.badge&&x.badge!=='');
  document.getElementById('featured-grid').innerHTML=(b.length>=4?b.slice(0,6):p.slice(0,6)).map(buildCard).join('');
}
function renderHomeTesti(){
  document.getElementById('home-testi-grid').innerHTML=getTestimoni().slice(0,3).map(buildTestiCard).join('');
}
function updateStats(){
  const p=getProducts(),t=getTestimoni();
  const ep=document.getElementById('stat-produk');
  const et=document.getElementById('stat-testi');
  if(ep)ep.textContent=p.length+'+';
  if(et)et.textContent=t.length;
}

/* ═══════════ KATALOG ═══════════ */
function renderKatalog(){
  let p=getProducts();
  if(currentFilter!=='semua')p=p.filter(x=>x.cat===currentFilter);
  if(searchVal)p=p.filter(x=>x.name.toLowerCase().includes(searchVal.toLowerCase()));
  const g=document.getElementById('katalog-grid'),e=document.getElementById('katalog-empty');
  if(p.length===0){g.innerHTML='';e.style.display='block';}
  else{g.innerHTML=p.map(buildCard).join('');e.style.display='none';}
}
function setFilter(f,btn){currentFilter=f;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderKatalog();}
function filterKatalog(){searchVal=document.getElementById('searchInput').value;renderKatalog();}

/* ═══════════ TESTIMONI ═══════════ */
function buildTestiCard(t){
  const filled='&#9733;'.repeat(t.rating),empty='&#9734;'.repeat(5-t.rating);
  const init=t.nama.substring(0,2).toUpperCase();
  return`<div class="testi-card">
    <div class="testi-quote">&#8220;</div>
    <div class="testi-stars">${filled}${empty}</div>
    <p class="testi-text">${t.pesan}</p>
    <div class="testi-author">
      <div class="testi-avatar">${init}</div>
      <div><div class="testi-name">${t.nama}</div><div class="testi-date">${t.produk} &middot; ${t.tgl}</div></div>
    </div>
  </div>`;
}
function renderTesti(){
  const t=getTestimoni();
  const g=document.getElementById('testi-grid'),e=document.getElementById('testi-empty');
  if(t.length===0){g.innerHTML='';e.style.display='block';}
  else{g.innerHTML=t.map(buildTestiCard).join('');e.style.display='none';}
}
function setRating(r){
  selectedRating=r;
  document.querySelectorAll('#star-select span').forEach((s,i)=>s.classList.toggle('active',i<r));
}
function submitTesti(){
  const nama=document.getElementById('testi-nama').value.trim();
  const produk=document.getElementById('testi-produk').value.trim();
  const pesan=document.getElementById('testi-pesan').value.trim();
  if(!nama||!pesan){showToast('Nama dan testimoni wajib diisi!');return;}
  if(selectedRating===0){showToast('Pilih rating bintang terlebih dahulu!');return;}
  const t=getTestimoni();
  const newId=t.length?Math.max(...t.map(x=>x.id))+1:1;
  const now=new Date();
  const bln=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  t.unshift({id:newId,nama,produk:produk||'Villa Parfum',rating:selectedRating,pesan,tgl:`${now.getDate()} ${bln[now.getMonth()]} ${now.getFullYear()}`});
  saveTesti(t);
  document.getElementById('testi-nama').value='';
  document.getElementById('testi-produk').value='';
  document.getElementById('testi-pesan').value='';
  setRating(0);renderTesti();updateStats();
  showToast('Testimoni berhasil dikirim! Terima kasih.');
}

/* ═══════════ MODAL ═══════════ */
function openModal(id){
  const p=getProducts().find(x=>x.id===id);if(!p)return;
  document.getElementById('modal-img').innerHTML=buildImgModal(p);
  document.getElementById('modal-cat').textContent=p.cat.toUpperCase();
  document.getElementById('modal-name').textContent=p.name;
  document.getElementById('modal-price').textContent=p.price;
  document.getElementById('modal-desc').textContent=p.desc;
  const wa=encodeURIComponent(`Halo Villa Parfum, saya tertarik dengan parfum ${p.name} (${p.price}). Masih tersedia?`);
  document.getElementById('modal-wa').href=`https://wa.me/6281234567890?text=${wa}`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modal').classList.remove('open');document.body.style.overflow='';}

/* ═══════════ ADMIN ═══════════ */
function doLogin(){
  const u=document.getElementById('admin-user').value;
  const p=document.getElementById('admin-pass').value;
  if(u==='admin'&&p==='admin123'){localStorage.setItem('vp_admin','1');document.getElementById('login-err').style.display='none';showPage('admin');}
  else document.getElementById('login-err').style.display='block';
}
function doLogout(){localStorage.removeItem('vp_admin');showPage('home');showToast('Berhasil keluar dari Admin Panel');}
function renderAdmin(){
  const p=getProducts(),t=getTestimoni();
  document.getElementById('stat-total').textContent=p.length;
  document.getElementById('stat-pria').textContent=p.filter(x=>x.cat==='pria').length;
  document.getElementById('stat-wanita').textContent=p.filter(x=>x.cat==='wanita').length;
  document.getElementById('stat-unisex').textContent=p.filter(x=>x.cat==='unisex').length;
  document.getElementById('stat-testi-admin').textContent=t.length;
  document.getElementById('produk-tbody').innerHTML=p.map((x,i)=>`<tr>
    <td>${i+1}</td>
    <td><div style="display:flex;align-items:center;gap:.5rem">
      <div style="width:36px;height:36px;border-radius:6px;overflow:hidden;flex-shrink:0;border:1px solid #eee;">
        ${x.foto?`<img src="${x.foto}" style="width:100%;height:100%;object-fit:cover;">`:`<div class="${x.bg}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:var(--dark3);opacity:.6;">${x.name.substring(0,2).toUpperCase()}</div>`}
      </div>
      <span>${x.name}</span>
    </div></td>
    <td><span class="badge-cat badge-${x.cat}">${x.cat}</span></td>
    <td>${x.price}</td>
    <td>${x.badge||'-'}</td>
    <td><button class="btn-edit" onclick="editProduk(${x.id})">Edit</button><button class="btn-delete" onclick="deleteProduk(${x.id})">Hapus</button></td>
  </tr>`).join('');
  document.getElementById('testi-tbody').innerHTML=t.map((x,i)=>`<tr>
    <td>${i+1}</td><td>${x.nama}</td><td>${x.produk}</td>
    <td>${'&#9733;'.repeat(x.rating)}</td>
    <td style="max-width:180px;font-size:.76rem">${x.pesan.substring(0,55)}${x.pesan.length>55?'...':''}</td>
    <td><button class="btn-delete" onclick="deleteTesti(${x.id})">Hapus</button></td>
  </tr>`).join('');
}
function switchTab(id,btn){document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.admin-tab').forEach(b=>b.classList.remove('active'));document.getElementById(id).classList.add('active');btn.classList.add('active');}
function saveProduk(){
  const nama=document.getElementById('f-nama').value.trim();
  const kat=document.getElementById('f-kat').value;
  const harga=document.getElementById('f-harga').value.trim();
  const badge=document.getElementById('f-badge').value.trim();
  const desc=document.getElementById('f-desc').value.trim();
  const foto=document.getElementById('f-foto').value.trim();
  if(!nama||!harga||!desc){showToast('Nama, harga, dan deskripsi wajib diisi!');return;}
  const bgs=['bg1','bg2','bg3','bg4','bg5','bg6'];
  let p=getProducts();
  if(editingId){
    const idx=p.findIndex(x=>x.id===editingId);
    if(idx>-1)p[idx]={...p[idx],name:nama,cat:kat,price:harga,badge,desc,foto};
    showToast('Produk berhasil diperbarui!');
  } else {
    const newId=p.length?Math.max(...p.map(x=>x.id))+1:1;
    p.push({id:newId,name:nama,cat:kat,price:harga,badge,desc,foto,bg:bgs[newId%6]});
    showToast('Produk berhasil ditambahkan!');
  }
  saveProducts(p);cancelEdit();renderAdmin();
}
function editProduk(id){
  const p=getProducts().find(x=>x.id===id);if(!p)return;
  editingId=id;
  document.getElementById('form-title').textContent='Edit Produk';
  document.getElementById('f-nama').value=p.name;
  document.getElementById('f-kat').value=p.cat;
  document.getElementById('f-harga').value=p.price;
  document.getElementById('f-badge').value=p.badge||'';
  document.getElementById('f-desc').value=p.desc;
  document.getElementById('f-foto').value=p.foto||'';
  // Tampilkan foto existing di upload area
  const fotoVal = p.foto || '';
  document.getElementById('f-foto').value = fotoVal;
  const area    = document.getElementById('upload-area');
  const preview = document.getElementById('upload-preview');
  if (fotoVal) {
    area.classList.add('has-foto');
    preview.innerHTML = `
      <img src="${fotoVal}" class="upload-foto-img" alt="Preview">
      <button class="upload-change-btn" onclick="event.stopPropagation();document.getElementById('f-foto-file').click()">Ganti Foto</button>
    `;
  } else {
    resetUploadArea();
  }
  document.getElementById('tab-produk').scrollIntoView({behavior:'smooth'});
}
function cancelEdit(){
  editingId=null;
  document.getElementById('form-title').textContent='Tambah Produk Baru';
  ['f-nama','f-harga','f-badge','f-desc','f-foto'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-kat').value='pria';
  resetUploadArea();
}
function deleteProduk(id){if(!confirm('Yakin ingin menghapus produk ini?'))return;saveProducts(getProducts().filter(x=>x.id!==id));renderAdmin();showToast('Produk berhasil dihapus!');}
function deleteTesti(id){if(!confirm('Yakin ingin menghapus testimoni ini?'))return;saveTesti(getTestimoni().filter(x=>x.id!==id));renderAdmin();showToast('Testimoni berhasil dihapus!');}

/* ═══════════ TOAST ═══════════ */
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}

/* ═══════════ EVENTS ═══════════ */
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.addEventListener('DOMContentLoaded',()=>{
  const p=document.getElementById('admin-pass');
  if(p)p.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
});
init();
const uploadArea = document.getElementById('upload-area');
const fotoInput = document.getElementById('f-foto-file');

if (uploadArea && fotoInput) {

  uploadArea.addEventListener('click', () => {
    fotoInput.click();
  });

  fotoInput.addEventListener('change', (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(ev) {

      uploadArea.innerHTML = `
        <img src="${ev.target.result}"
             style="width:100%;max-height:180px;object-fit:cover;border-radius:8px;">
      `;

      uploadArea.dataset.image = ev.target.result;

    };

    reader.readAsDataURL(file);

  });

}