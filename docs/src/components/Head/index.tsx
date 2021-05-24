import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  hasSiteName?: boolean;
  description?: string;
  path: string;
}

export default function Head({ title, hasSiteName, description, path }: Props) {
  const pageTitle = hasSiteName ? `${title} | Orbit` : title;
  const url = `https://orbit.kiwi${path}`;
  return (
    <Helmet>
      <html lang="en" />
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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
