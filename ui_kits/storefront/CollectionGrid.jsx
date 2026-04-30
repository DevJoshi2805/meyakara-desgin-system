// CollectionGrid.jsx — five collection "doors".
const MK_COLLECTIONS = [
  { id: 'dhundh',   name: 'Dhundh',   nameHi: 'धुंध', lang: 'hi', desc: 'The hills',     palette: ['#E8E9E6','#8FA0A8','#4F5C53','#6E6A60','#2D332E'] },
  { id: 'baar',     name: 'Baar',     nameHi: 'बार',  lang: 'hi', desc: 'The beach',     palette: ['#F3EBDA','#D98A78','#B8B5A8','#8B6F55','#4F5E5C'] },
  { id: 'raat',     name: 'Raat',     nameHi: 'रात',  lang: 'hi', desc: 'Nightlife',     palette: ['#0A0A12','#5B3AC7','#C9A24A','#8E2A6A','#1F1B2A'] },
  { id: 'mandarin', name: 'Mandarin', nameHi: null,   lang: 'en', desc: 'The collar',    palette: ['#1B2A4A','#E9E1CC','#5B6772','#C7B89A','#11182B'] },
  { id: 'lino',     name: 'Lino',     nameHi: null,   lang: 'en', desc: 'Italian linen', palette: ['#F0E6D0','#C9B89A','#B26B4A','#7E7A4A','#E2C77F'] },
];

function CollectionDoor({ c, onOpen }) {
  return (
    <a className="mk-door" onClick={() => onOpen?.(c.id)} role="button">
      <div className="mk-door__palette">
        {c.palette.map((p,i) => <span key={i} style={{background:p}}/>)}
      </div>
      <div className="mk-door__name mk-door__name--en">
        {c.name}
        {c.nameHi && <span className="mk-door__name--hi">{c.nameHi}</span>}
      </div>
      <div className="mk-door__desc">{c.desc}</div>
    </a>
  );
}

function CollectionGrid({ onOpen }) {
  return (
    <section className="mk-section">
      <div className="mk-section__head">
        <div className="mk-eyebrow">04 — The collection system</div>
        <h2 className="mk-h2">Every collection is a door.</h2>
      </div>
      <div className="mk-doors">
        {MK_COLLECTIONS.map(c => <CollectionDoor key={c.id} c={c} onOpen={onOpen}/>)}
      </div>
    </section>
  );
}
window.CollectionGrid = CollectionGrid;
window.MK_COLLECTIONS = MK_COLLECTIONS;
