// HomepageHero.jsx — editorial hero. Full-bleed paper with one short line.
// Demonstrates a Dhundh hero — swap the collection prop and image gradient per campaign.
function HomepageHero({ onEnter }) {
  return (
    <section className="mk-hero">
      <div className="mk-hero__image" aria-hidden="true">
        <div className="mk-hero__wash" />
      </div>
      <div className="mk-hero__copy">
        <div className="mk-eyebrow">A new escape · Dhundh · Spring 2026</div>
        <h1 className="mk-display">The city will wait.<br/>The hills won't.</h1>
        <p className="mk-hero__sub">Light cotton cut for the city, dyed in the colours of a 6am ridge line.</p>
        <button className="mk-btn mk-btn--solid" onClick={onEnter}>Enter the collection</button>
      </div>
    </section>
  );
}
window.HomepageHero = HomepageHero;
