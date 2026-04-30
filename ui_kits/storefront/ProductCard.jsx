// ProductCard.jsx — product tile used in collection grid.
function ProductCard({ p, onOpen }) {
  // Collection stamp respects the collection's own language preference.
  const c = window.MK_COLLECTIONS?.find(x => x.id === p.collectionId);
  const stampClass = c?.lang === 'hi' ? 'mk-pcard__stamp mk-pcard__stamp--hi' : 'mk-pcard__stamp';
  const stampText  = c ? c.name : p.collection;
  return (
    <a className="mk-pcard" onClick={() => onOpen?.(p)} role="button">
      <div className="mk-pcard__img" style={{background: p.bg}}>
        <span className={stampClass}>{stampText}</span>
      </div>
      <div className="mk-pcard__name">{p.name}</div>
      <div className="mk-pcard__meta">
        <span>{p.fabric}</span>
        <span className="mk-mono">₹ {p.price.toLocaleString('en-IN')}</span>
      </div>
    </a>
  );
}
window.ProductCard = ProductCard;
