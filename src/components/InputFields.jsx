import { getTextWidth, getStatus, TITLE_PIXEL_LIMIT, META_PIXEL_LIMIT, titleFont, descFont} from "./textUtils";

export default function InputFields({
url,
title,
description,
setUrl,
setTitle,
setDescription,
}) {
  const titleData = {
    pixels: Math.round(getTextWidth(title, titleFont)),
    status: getStatus(title, TITLE_PIXEL_LIMIT, titleFont),
  };
  const metaData = {
    pixels: Math.round(getTextWidth(description, descFont)),
    status: getStatus(description, META_PIXEL_LIMIT, descFont),
  };

  return (
  <div className="inputs">
    <h2 className="inputs-title">Fyll i webbplatsens information</h2>

    <div className="field">
      <label htmlFor="url">URL</label>
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
        <span className={titleData.status}>
          {titleData.pixels}/{TITLE_PIXEL_LIMIT}px
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
          Titeln är för lång och kommer inte att visas helt i <br></br>Googles sökresultat.
        </p>
      )}
    </div>

    <div className="field">
      <label className="field-label" htmlFor="description">
        <span>Metabeskrivning</span>
        <span className={metaData.status}>
        {metaData.pixels}/{META_PIXEL_LIMIT}px
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
          Metabeskrivningen är för lång och kan kapas i <br></br>Googles sökresultat.
        </p>
      )}
    </div>
  </div>
  );
}
