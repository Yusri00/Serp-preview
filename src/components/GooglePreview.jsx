import { truncateByPixels, TITLE_PIXEL_LIMIT, META_PIXEL_LIMIT, titleFont, descFont } from "./textUtils";

import googleLogo from "../assets/google-logo.svg"; 

export default function GooglePreview({url, title, description }) {

  return (
  <div className="serp-canvas">
    <div className="google-serp">

      <div className="google-header">
        <img
          src={googleLogo}
          alt="Google"
          className="google-logo"
        />

    <div className="google-searchbar">search</div>
    </div>
    
    {/* NAV */}
    <div className="google-nav">
        <div className="nav-item active">All</div>
        <div className="nav-item">Images</div>
        <div className="nav-item">Videos</div>
        <div className="nav-item">News</div>
        <div className="nav-item">Maps</div>
        <div className="nav-item">More</div>
      </div>
    
  {/* RESULT */} 
  <div className="results">
    <div className="preview-box">
      <div className="serp-url">{url || "www.exempel.se"}
      </div>
      <div className="serp-title"> 
        {truncateByPixels(title || "Din SEO-titel visas här", TITLE_PIXEL_LIMIT, titleFont)}
      </div>
      <div className="serp-desc">
        {truncateByPixels(description || "Här visas din metabeskrivning", META_PIXEL_LIMIT, descFont)}
        </div>
      </div>
    </div>
    
  </div>
</div>
  );
}
