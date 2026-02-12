import kinessoLogo from "../assets/kinesso-white.png";

export default function Header() {
  return (
    <header className="header">
      <img className="kinesso-logo" src={kinessoLogo} alt="Kinesso" />
      <div className="header-copy">
        <h1>Google SERP Preview</h1>
        <p>Se hur din sida visas i Googles sökresultat</p>
      </div>
      <div className="header-spacer" aria-hidden="true" />
    </header>
  );
}
