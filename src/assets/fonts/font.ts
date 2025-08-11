import localfont from "next/font/local";
export const Gorstek = localfont({
  src: [
    {
      path: "../fonts/SpaceGortesk/SpaceGrotesk-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/SpaceGortesk/SpaceGrotesk-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});
export const clashDisplay = localfont({
  src: [
    {
      path: "../fonts/ClashDisplay/ClashDisplay-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay/ClashDisplay-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});
