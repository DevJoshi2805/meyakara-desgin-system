// Header.jsx — fixed top nav with hairline rule.
// On collection pages: no mk-lobby — header inherits the collection's world.
// On home/utility pages: pass lobby={true} to apply paper/ink treatment.
function Header({ onOpenBag, bagCount = 0, lobby = false }) {
  return (
    <header className={`mk-header${lobby ? ' mk-lobby' : ''}`}>
      <div className="mk-nav">
        <div className="mk-nav__left">
          <span>Collections</span>
          <span>Journal</span>
          <span>About</span>
        </div>
        <div className="mk-nav__center">
          <img src="../../assets/logo-wordmark.svg" alt="Meyakara" />
        </div>
        <div className="mk-nav__right">
          <span>Search</span>
          <span>Account</span>
          <span onClick={onOpenBag} style={{cursor:'pointer'}}>Bag · {bagCount}</span>
        </div>
      </div>
      <div className="mk-subnav">
        {(window.MK_COLLECTIONS || []).map((c, i) => (
          <React.Fragment key={c.id}>
            {i > 0 && <span className="mk-subnav__sep">·</span>}
            <span className={`mk-subnav__name mk-subnav__name--${c.lang}`}>{c.name}</span>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
window.Header = Header;
