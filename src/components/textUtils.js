// Pixelgränser
export const TITLE_PIXEL_LIMIT = 550;
export const META_PIXEL_LIMIT = 900;

// Font-strängar som matchar CSS
export const titleFont = "500 24px Arial, Roboto, sans-serif";
export const descFont = "400 17px Arial, Roboto, sans-serif";

// Mäter textens bredd i pixlar med Canvas API
export const getTextWidth = (text, font) => {
  const canvas =
    getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  return context.measureText(text).width;
};

// Ger status baserat på pixelbredd
export const getStatus = (value, pixelLimit, font) => {
  const width = getTextWidth(value, font);
  if (width <= pixelLimit * 0.8) return "good";  // under 80% → säker
  if (width <= pixelLimit) return "warn";        // 80–100% → varning
  return "bad";                                  // över max → dålig
};

// Trunkerar text så att den ryms i en viss pixelbredd och lägger till "…"
export const truncateByPixels = (text, pixelLimit, font) => {
  if (!text) return text;
  if (getTextWidth(text, font) <= pixelLimit) return text;

  let truncated = text;

  // Klipp bort sista tecken tills text + ellipsis ryms
  while (truncated && getTextWidth(truncated + "…", font) > pixelLimit) {
    truncated = truncated.slice(0, -1);
  }

  // Lägg till ellipsis (tre prickarna) om texten trunkerats
  return truncated !== text ? truncated + "…" : text;
};
