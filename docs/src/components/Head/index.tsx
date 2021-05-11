import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  hasSiteTitle?: boolean;
  description?: string;
  path: string;
}

export default function Head({ title, hasSiteTitle, description, path }: Props) {
  const pageTitle = hasSiteTitle ? `${title} | Orbit` : title
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
    </Helmet>
  );
}
