const truncate = (text, limit) =>
  text.length > limit ? text.slice(0, limit) + "…" : text;

export default function GooglePreview({
  url,
  title,
  description,
}) {
  return (
    <div className="preview">
      <div className="serp-url">
        {url || "www.exempel.se"}
      </div>

      <div className="serp-title">
        {truncate(title || "Din SEO-titel visas här", 60)}
      </div>

      <div className="serp-desc">
        {truncate(
          description ||
            "Här visas din metabeskrivning precis som i Google.",
          160
        )}
      </div>
    </div>
  );
}
