// ProductGrid.jsx — collection product listing.
// `collectionId` ties each product to a collection; ProductCard reads
// that collection's `lang` to pick which name (Hindi or English) to stamp.
const MK_PRODUCTS = [
  { id:'p1', name:'The Slow Sunday Trouser', collectionId:'lino',     fabric:'Italian linen · faded olive', price:6400,
    bg:'linear-gradient(160deg,#C9B89A 0%,#7E7A4A 100%)' },
  { id:'p2', name:'The 6am Ridge Shirt',     collectionId:'dhundh',   fabric:'Light cotton · pine',         price:4800,
    bg:'linear-gradient(160deg,#8FA0A8 0%,#2D332E 100%)' },
  { id:'p3', name:'The Mandarin Overshirt',  collectionId:'mandarin', fabric:'Worn silk · ink blue',        price:7200,
    bg:'linear-gradient(160deg,#5B6772 0%,#1B2A4A 100%)' },
  { id:'p4', name:'The Riverside Kaftan',    collectionId:'baar',     fabric:'Bleached linen · coral',      price:5600,
    bg:'linear-gradient(160deg,#F3EBDA 0%,#D98A78 100%)' },
  { id:'p5', name:'The Hour Before Trouser', collectionId:'raat',     fabric:'Smoke wool · midnight',       price:8400,
    bg:'linear-gradient(160deg,#1F1B2A 0%,#5B3AC7 100%)' },
  { id:'p6', name:'The Static Motion Shirt', collectionId:'lino',     fabric:'Italian linen · sun cream',   price:5200,
    bg:'linear-gradient(160deg,#F0E6D0 0%,#E2C77F 100%)' },
];

function ProductGrid({ title, eyebrow, lang = 'en', onOpen, products = MK_PRODUCTS }) {
  return (
    <section className="mk-section">
      <div className="mk-section__head">
        <div className="mk-eyebrow">{eyebrow}</div>
        <h2 className={`mk-h2 mk-h2--${lang}`}>{title}</h2>
      </div>
      <div className="mk-pgrid">
        {products.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen}/>)}
      </div>
    </section>
  );
}
window.ProductGrid = ProductGrid;
window.MK_PRODUCTS = MK_PRODUCTS;
