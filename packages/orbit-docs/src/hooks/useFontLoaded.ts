import React from "react";
import FontFaceObserver from "fontfaceobserver";

/**
 * useful for layout computations because typefaces
 * have different widths
 */

export default function useFontLoaded(): boolean {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // wait until the font is loaded before calculating whether tabs wrap
    // because the width of DocNavigation changes, changing the width of the main container as well
    const dmSans = new FontFaceObserver("DM Sans");
    dmSans.load().then(() => {
      setLoaded(true);
    });
  }, []);

  return loaded;
}
