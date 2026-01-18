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
    <label>URL</label>
    <input
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="https://exempel.se/sida"
    />


    <label>Titel
      <span className={getStatus(title, TITLE_PIXEL_LIMIT, titleFont)}>
          ({Math.round(getTextWidth(title, titleFont))}/{TITLE_PIXEL_LIMIT}px)
      </span>
    </label>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="SEO-titel"
    />


    <label>
      Meta beskrivning
      <span className={getStatus(description, META_PIXEL_LIMIT, descFont)}>
        ({Math.round(getTextWidth(description, descFont))}/{META_PIXEL_LIMIT}px)
      </span>
    </label>
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Meta description"
    />
  </div>
);
}



