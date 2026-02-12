import { getTextWidth, getStatus, TITLE_PIXEL_LIMIT, META_PIXEL_LIMIT, titleFont, descFont} from "./textUtils";

export default function InputFields({
url,
title,
description,
setUrl,
setTitle,
setDescription,
}) {

  return (
  <div className="inputs">
    <h2 className="inputs-title">Fyll i företagets information</h2>

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
        <span className={getStatus(title, TITLE_PIXEL_LIMIT, titleFont)}>
          {Math.round(getTextWidth(title, titleFont))}/{TITLE_PIXEL_LIMIT}px
        </span>
      </label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="SEO-titel"
      />
    </div>

    <div className="field">
      <label className="field-label" htmlFor="description">
        <span>Meta beskrivning</span>
        <span className={getStatus(description, META_PIXEL_LIMIT, descFont)}>
          {Math.round(getTextWidth(description, descFont))}/{META_PIXEL_LIMIT}px
        </span>
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Meta description"
        rows={4}
      />
    </div>
  </div>
);
}

