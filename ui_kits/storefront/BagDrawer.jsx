// BagDrawer.jsx — quiet slide-in bag.
function BagDrawer({ open, items, onClose, onCheckout }) {
  const total = items.reduce((s,i) => s + i.price, 0);
  return (
    <>
      <div className={"mk-scrim " + (open ? 'is-on' : '')} onClick={onClose}/>
      <aside className={"mk-bag " + (open ? 'is-on' : '')}>
        <div className="mk-bag__head">
          <div className="mk-eyebrow">Your bag</div>
          <span className="mk-bag__close" onClick={onClose}>Close</span>
        </div>
        {items.length === 0 ? (
          <div className="mk-bag__empty">
            <p>The bag is quiet.</p>
            <p className="mk-bag__empty-sub">Find a piece that already feels like yours.</p>
          </div>
        ) : (
          <>
            <div className="mk-bag__list">
              {items.map((i, idx) => (
                <div key={idx} className="mk-bag__line">
                  <div className="mk-bag__thumb" style={{background:i.bg}}/>
                  <div className="mk-bag__info">
                    <div className="mk-bag__name">{i.name}</div>
                    <div className="mk-bag__meta">{i.fabric} · Size {i.size}</div>
                  </div>
                  <div className="mk-mono">₹ {i.price.toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
            <div className="mk-bag__foot">
              <div className="mk-bag__row"><span>Subtotal</span><span className="mk-mono">₹ {total.toLocaleString('en-IN')}</span></div>
              <button className="mk-btn mk-btn--solid" onClick={onCheckout}>Checkout</button>
              <p className="mk-bag__note">Shipping calculated at checkout. The escape is patient.</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
window.BagDrawer = BagDrawer;
