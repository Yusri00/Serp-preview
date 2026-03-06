import { getTextWidth, getStatus, TITLE_PIXEL_LIMIT, META_PIXEL_LIMIT, titleFont, descFont} from "./textUtils";
import '../InputFields.css';


export default function InputFields({
url,
siteName,
title,
description,
setUrl,
setSiteName,
setTitle,
setDescription,
}) {
  const titleData = {
    chars: title.length,
    pixels: Math.round(getTextWidth(title, titleFont)),
    status: getStatus(title, TITLE_PIXEL_LIMIT, titleFont),
  };
  const metaData = {
    chars: description.length,
    pixels: Math.round(getTextWidth(description, descFont)),
    status: getStatus(description, META_PIXEL_LIMIT, descFont),
  };

  return (
  <div className="inputs">
    <h2 className="inputs-title">Fyll i webbplatsens information</h2>
    <p className="pixel-note">
      Google klipper text baserat på pixelbredd. Teckenräknaren är endast vägledning.
    </p>

    <div className="field">
      <label className="field-label" htmlFor="siteName">
        <span>Webbplatsnamn</span>
      </label>
      <input
        id="siteName"
        value={siteName}
        onChange={(e) => setSiteName(e.target.value)}
        placeholder="Exempel: Mitt Företag"
      />
    </div>

    <div className="field">
      <label className="field-label" htmlFor="url">
        <span>URL</span>
      </label>
      <input
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://exempel.se/sida"
      />
      <p className="field-help">Ange sidan du vill förhandsgranska.</p>
    </div>

    <div className="field">
      <label className="field-label" htmlFor="title">
        <span>Titel</span>
        <span className={`counter-badge ${titleData.status}`}>
          {titleData.chars} tecken • {titleData.pixels}/{TITLE_PIXEL_LIMIT}px
        </span>
      </label>

      <textarea
        className="title-input"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="SEO-titel"
      />

      {titleData.status === "bad" && (
        <p className="title-warning-text">
          Titeln är för lång och kommer inte att visas helt i Googles sökresultat.
        </p>
      )}
    </div>

    <div className="field">
      <label className="field-label" htmlFor="description">
        <span>Metabeskrivning</span>
        <span className={`counter-badge ${metaData.status}`}>
        {metaData.chars} tecken • {metaData.pixels}/{META_PIXEL_LIMIT}px
        </span>
      </label>

      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Meta description"
      />

      {metaData.status === "bad" && (
        <p className="meta-warning-text">
          Metabeskrivningen är för lång och kan kapas i Googles sökresultat.
        </p>
      )}
    </div>
  </div>
  );
}
