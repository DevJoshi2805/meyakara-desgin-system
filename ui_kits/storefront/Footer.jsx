// Footer.jsx — minimal hairline footer.
function Footer() {
  return (
    <footer className="mk-footer mk-lobby">
      <div className="mk-footer__top">
        <div>
          <img src="../../assets/logo-wordmark.svg" alt="Meyakara" className="mk-footer__logo"/>
          <p className="mk-footer__tag">The Shape of Your Escape.</p>
        </div>
        <div className="mk-footer__cols">
          <div className="mk-footer__col">
            <div className="mk-eyebrow">Collections</div>
            <span>Dhundh</span><span>Baar</span><span>Raat</span><span>Mandarin</span><span>Lino</span>
          </div>
          <div className="mk-footer__col">
            <div className="mk-eyebrow">House</div>
            <span>Journal</span><span>The escape archive</span><span>Stockists</span><span>Press</span>
          </div>
          <div className="mk-footer__col">
            <div className="mk-eyebrow">Care</div>
            <span>Shipping</span><span>Returns</span><span>Care guide</span><span>Contact</span>
          </div>
        </div>
      </div>
      <div className="mk-footer__bot">
        <span>Est. 2026 · Born in India · Wardrobe of the world.</span>
        <span>The escape belongs to everyone. The shape belongs to you.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
