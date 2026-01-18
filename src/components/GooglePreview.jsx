import { truncateByPixels, TITLE_PIXEL_LIMIT, META_PIXEL_LIMIT, titleFont, descFont } from "./textUtils";

export default function GooglePreview({url, title, description }) {

  return (
    <div className="preview">
      <div className="serp-url">{url || "www.exempel.se"}
      </div>

      <div className="serp-title"> 
        {truncateByPixels(title || "Din SEO-titel visas här", TITLE_PIXEL_LIMIT, titleFont)}
      </div>

      <div className="serp-desc">
        {truncateByPixels(description || "Här visas din metabeskrivning", META_PIXEL_LIMIT, descFont)}
      </div>
    </div>
  );
}
