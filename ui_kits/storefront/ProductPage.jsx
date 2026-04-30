// ProductPage.jsx — single product detail.
function ProductPage({ p, onAdd, onBack }) {
  const [size, setSize] = React.useState('M');
  const sizes = ['XS','S','M','L','XL'];
  const c = (window.MK_COLLECTIONS || []).find(x => x.id === p.collectionId);
  const stampClass = c?.lang === 'hi' ? 'mk-pcard__stamp mk-pcard__stamp--hi' : 'mk-pcard__stamp';
  const stampText  = c ? c.name : (p.collection || '');
  // Crumb / eyebrow are always English — narrative copy stays in one voice.
  const crumb = c ? c.id.toUpperCase() : (p.collection || '');
  const inWhat = c ? c.desc.toLowerCase() : '';
  return (
    <section className="mk-product">
      <div className="mk-product__crumb">
        <span onClick={onBack} style={{cursor:'pointer'}}>← Back</span>
        <span className="mk-mono">{crumb}</span>
      </div>
      <div className="mk-product__grid">
        <div className="mk-product__img" style={{background: p.bg}}>
          <span className={stampClass}>{stampText}</span>
        </div>
        <div className="mk-product__detail">
          <div className="mk-eyebrow">A piece for {inWhat}</div>
          <h1 className="mk-h1">{p.name}</h1>
          <p className="mk-product__desc">
            Cut for the moment between two places. Wear it on a Tuesday and for one moment you are not where you are.
          </p>
          <div className="mk-product__row">
            <div className="mk-product__label">Fabric</div>
            <div>{p.fabric}</div>
          </div>
          <div className="mk-product__row">
            <div className="mk-product__label">Size</div>
            <div className="mk-sizes">
              {sizes.map(s => (
                <button key={s} className={"mk-size " + (size === s ? 'is-on' : '')} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className="mk-product__row">
            <div className="mk-product__label">Price</div>
            <div className="mk-mono">₹ {p.price.toLocaleString('en-IN')}</div>
          </div>
          <button className="mk-btn mk-btn--solid mk-product__cta" onClick={() => onAdd?.({...p, size})}>
            Add to bag
          </button>
          <p className="mk-product__note">The Shape of Your Escape — printed on the inside tag of every piece.</p>
        </div>
      </div>
    </section>
  );
}
window.ProductPage = ProductPage;
