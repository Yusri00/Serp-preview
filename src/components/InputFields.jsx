const TITLE_LIMIT = 60;
const META_LIMIT = 160;

const getStatus = (value, limit) => {
if (value.length <= limit * 0.8) return "good";
if (value.length <= limit) return "warn";
return "bad";
};

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


    <label>
      Titel
      <span className={getStatus(title, TITLE_LIMIT)}>
        {" "}
        ({title.length}/{TITLE_LIMIT})
      </span>
    </label>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="SEO-titel"
    />


    <label>
      Meta description
      <span className={getStatus(description, META_LIMIT)}>
        {" "}
        ({description.length}/{META_LIMIT})
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



