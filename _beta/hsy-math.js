// FROM https://codepen.io/frantic1048/pen/LGGxZP

// Rec. 709 luma coefficients
// https://en.wikipedia.org/wiki/Luma_%28video%29
const Rec709 = [0.2126, 0.7152, 0.0722];

function reGamma(n) { if n <= 0.0031308 { return n * 12.92; } else { return 1.055 * Math.pow(n, 1/2.4) - 0.055; } }
function deGamma(n) { if n <= 0.04045 { return n / 12.92; } else { return Math.pow(((n + 0.055)/1.055), 2.4); } }

// clamp value between given range
function clampBetween(value, lowerBound, upperBound) {
  let result;
  if ( value >= lowerBound && value <= upperBound) {
    result = value;
  } else if (value < lowerBound) {
    result = lowerBound;
  } else if ( value > upperBound) {
    result = upperBound;
  }
  return result;
}

// Hue/Saturation/Value to Red/Green/Blue
// algorithm from Wiki, hue value modified to fit [0, 1] range
// https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
function HSVToRGB(h, s, v) {
  const chroma = v * s;
  const hue = h * 6;
  const x = chroma * (1 - Math.abs(hue % 2 - 1));
  let r1, g1, b1;
  let r, g, b;

  if (hue >= 0 && hue < 1) {
    [r1, g1, b1] = [chroma, x, 0];
  } else if (hue >= 1 && hue < 2) {
    [r1, g1, b1] = [x, chroma, 0];
  } else if (hue >= 2 && hue < 3) {
    [r1, g1, b1] = [0, chroma, x];
  } else if (hue >= 3 && hue < 4) {
    [r1, g1, b1] = [0, x, chroma];
  } else if (hue >= 4 && hue < 5) {
    [r1, g1, b1] = [x, 0, chroma];
  } else if (hue >= 5 && hue <= 6) {
    [r1, g1, b1] = [chroma, 0, x];
  } else {
    [r1, g1, b1] = [0, 0, 0];
  }

  const m = v - chroma;
  [r, g, b] = [r1 + m, g1 + m, b1 + m];
  return [r, g, b];
}

// Hue/Saturation/Lightness to Red/Green/Blue
// https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL
function HSLToRGB(h, s, l) {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const hue = h * 6;
  const x = chroma * (1 - Math.abs(hue % 2 - 1));
  let r1, g1, b1;

  if (hue >= 0 && hue < 1) {
    [r1, g1, b1] = [chroma, x, 0];
  } else if (hue >= 1 && hue < 2) {
    [r1, g1, b1] = [x, chroma, 0];
  } else if (hue >= 2 && hue < 3) {
    [r1, g1, b1] = [0, chroma, x];
  } else if (hue >= 3 && hue < 4) {
    [r1, g1, b1] = [0, x, chroma];
  } else if (hue >= 4 && hue < 5) {
    [r1, g1, b1] = [x, 0, chroma];
  } else if (hue >= 5 && hue <= 6) {
    [r1, g1, b1] = [chroma, 0, x];
  } else {
    [r1, g1, b1] = [0, 0, 0];
  }

  const m = l - 0.5 * chroma;
  const [r, g, b] = [r1 + m, g1 + m, b1 + m];
  return [r, g, b];
}

// Hue/Saturation/Luma to Red/Green/Blue
// These algorithms were taken from KDE Krita's source code.
// https://github.com/KDE/krita/blob/fcf9a431b0af9f51546f986499b9621d5ccdf489/libs/pigment/KoColorConversions.cpp#L630-L841
function HSYToRGB(h, s, y, R, G, B) {
  const hue = h % 1;
  const sat = clampBetween(s, 0, 1);
  const lum = clampBetween(y, 0, 1);
  const segment = 0.16666666666666666; // 1 / 6
  let r, g, b;

  let maxSat, m, fract, lumB, chroma, x;

  if (hue >= 0 && hue < segment) {
    maxSat = R + G * hue * 6;

    if (lum <= maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / ( 1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r = chroma; g = x; b = 0;
    m = lum - ( R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else if ( hue >= segment && hue < 2 * segment) {
    maxSat = G + R - R * (hue - segment) * 6;

    if (lum < maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / (1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r =  x; g = chroma; b = 0;
    m = lum - (R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else if (hue >= 2 * segment && hue < 3 * segment) {
    maxSat = G + B * (hue - 2 * segment) * 6;

    if (lum < maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / (1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6.0;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r = 0; g = chroma; b = x;
    m = lum - (R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else if (hue >= 3 * segment && hue < 4 * segment) {
    maxSat = G + B - G * (hue - 3 * segment) * 6;

    if (lum < maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / (1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r = 0; g = x; b = chroma;
    m = lum - (R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else if (hue >= 4 * segment && hue < 5 * segment) {
    maxSat = B + R * (hue - 4 * segment) * 6;

    if (lum < maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / (1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r = x; g = 0; b = chroma;
    m = lum - (R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else if (hue >= 5 * segment && hue <= 1) {
    maxSat = B + R - B * (hue - 5 * segment) * 6;

    if (lum < maxSat) {
      lumB = lum / maxSat * 0.5;
      chroma = sat * 2 * lumB;
    } else {
      lumB = (lum - maxSat) / (1 - maxSat) * 0.5 + 0.5;
      chroma = sat * (2 - 2 * lumB);
    }

    fract = hue * 6;
    x = (1 - Math.abs(fract % 2 - 1)) * chroma;
    r = chroma; g = 0; b = x;
    m = lum - (R * r + G * g + B * b);
    r += m; g += m; b += m;
  } else {
    r = 0;
    g = 0;
    b = 0;
  }

  r = reGamma(clampBetween(r, 0, 1));
  g = reGamma(clampBetween(g, 0, 1));
  b = reGamma(clampBetween(b, 0, 1));

  return [r, g, b];
}

// Hue/Chroma/Luma to Red/Green/Blue
// algorithm taken from Wiki, modified to fit [0, 1] hue range
// https://en.wikipedia.org/wiki/HSL_and_HSV#From_luma.2Fchroma.2Fhue
function HCYToRGB(h, c, y, R, G, B) {
  // R, G, B is coefficients for red/green/blue.
  const hm = h * 6;
  const x = c * (1 - Math.abs(hm % 2 - 1));
  let r, g, b;
  let r1, g1, b1;
  if (hm >= 0 && hm <= 1) {
    [r1, g1, b1] = [c, x, 0];
  } else if (hm >= 1 && hm < 2) {
    [r1, g1, b1] = [x, c, 0];
  } else if (hm >= 2 && hm <=3) {
    [r1, g1, b1] = [0, c, x];
  } else if (hm >= 3 && hm < 4) {
    [r1, g1, b1] = [0, x, c];
  } else if (hm >= 4 && hm < 5) {
    [r1, g1, b1] = [x, 0, c];
  } else if (hm >= 5 && hm <= 6) {
    [r1, g1, b1] = [c, 0, x];
  } else {
    [r1, g1, b1] = [0, 0, 0];
  }
  const m = y - (R * r1 + G * g1 + B * b1);
  [r, g, b] = [r1 + m, g1 + m, b1 + m];
  return [r, g, b];
}

function HSY709ToRGB(r, g, b) {
  return HSYToRGB(r, g, b, ...Rec709);
}

function HCY709ToRGB(r, g, b) {
  return HCYToRGB(r, g, b, ...Rec709);
}

function draw(targetCanvas, x2rgb) {
  // larger axis length to get a more detailed view
  const xAxisLength = 600;
  const yAxisLength = 1000;
  const tCtx = targetCanvas.getContext('2d');
  const tRect = targetCanvas.getBoundingClientRect();
  targetCanvas.setAttribute('width', tRect.width);
  targetCanvas.setAttribute('height', tRect.height);
  const sourceCanvas = document.createElement('canvas');
  sourceCanvas.setAttribute('width', xAxisLength);
  sourceCanvas.setAttribute('height', yAxisLength);
  const sCtx = sourceCanvas.getContext('2d');

  for (let x = 0; x < xAxisLength; x += 1) {
    for (let y = 0; y < yAxisLength; y += 1) {
      const rgb = x2rgb(x / (xAxisLength - 1), 1, y / (yAxisLength - 1));
      const r = Math.round(rgb[0] * 255);
      const g = Math.round(rgb[1] * 255);
      const b = Math.round(rgb[2] * 255);
      sCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      sCtx.fillRect(x, y, 1, 1);
    }
  }
  tCtx.drawImage(sourceCanvas,
                 0, 0, sourceCanvas.width, sourceCanvas.height,
                 0, 0, targetCanvas.width, targetCanvas.height);
}

draw(document.getElementById('hsv-canvas'), HSVToRGB);
draw(document.getElementById('hsl-canvas'), HSLToRGB);
draw(document.getElementById('hsy-canvas'), HSY709ToRGB);
draw(document.getElementById('hcy-canvas'), HCY709ToRGB);