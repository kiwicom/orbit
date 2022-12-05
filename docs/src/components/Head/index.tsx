import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  hasSiteName?: boolean;
  description?: string;
  path: string;
}

export default function Head({ title, hasSiteName, description, path }: Props) {
  const [hasJs, setHasJs] = React.useState<boolean>(false);

  const pageTitle = hasSiteName ? `${title} | Orbit` : title;
  const url = `https://orbit.kiwi${path}`;

  React.useEffect(() => {
    setHasJs(true);
  }, []);

  return (
    <Helmet>
      <html lang="en" className={hasJs ? "js" : "no-js"} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.documentElement.classList.remove("no-js");
        document.documentElement.classList.add("js");
      `,
        }}
      />
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph */}
      <meta property="og:site_name" content="Orbit" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* Twitter Card */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@OrbitKiwi" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
