import transactLogo from "../assets/transact-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="transact-logo" src={transactLogo} alt="Transact" />
      <div className="header-copy">
        <h1>Google SERP Preview</h1>
        <p>Se hur din sida visas i Googles sökresultat</p>
      </div>
      <div className="header-spacer" aria-hidden="true" />
    </header>
  );
}
