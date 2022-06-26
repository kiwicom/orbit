import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, defaultTheme } from "@kiwicom/orbit-components";
import MatchMediaMock from "jest-matchmedia-mock";

import TableOfContents from "../TableOfContents";
import { TableOfContentsProvider } from "../../services/table-of-contents";
import { h2 as H2, h3 as H3, h4 as H4, h5 as H5 } from "../../mdx-components";

jest.mock("react-scrollspy", () => ({ children }) => children);

let matchMedia;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

afterAll(() => {
  matchMedia.destroy();
});

describe(TableOfContents.name, () => {
  it("should generate table of contents from headings", async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TableOfContentsProvider>
          <main>
            <H2>General guidelines</H2>
            <H3>Background & foreground colors</H3>
            <H3>Interactive colors</H3>
            <H3>Actionable colors</H3>
            <H2>Orbit palette</H2>
            <H3>Product</H3>
            <H4>Product guidelines</H4>
            <H3>Status colors</H3>
            <H4>Green</H4>
            <H5>Green guidelines</H5>
          </main>
          <aside>
            <TableOfContents />
          </aside>
        </TableOfContentsProvider>
      </ThemeProvider>,
    );

    const sidebar = screen.getByRole("complementary");

    // stripping away all class names for better readibility
    Array.from(sidebar.querySelectorAll("[class]")).forEach(node => {
      node.removeAttribute("class");
    });

    expect(sidebar.firstChild).toMatchInlineSnapshot(`
      <ul>
        <li>
          <a
            href="#general-guidelines"
          >
            General guidelines
          </a>
          <ul>
            <li>
              <a
                href="#background--foreground-colors"
              >
                Background & foreground colors
              </a>
            </li>
            <li>
              <a
                href="#interactive-colors"
              >
                Interactive colors
              </a>
            </li>
            <li>
              <a
                href="#actionable-colors"
              >
                Actionable colors
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#orbit-palette"
          >
            Orbit palette
          </a>
          <ul>
            <li>
              <a
                href="#product"
              >
                Product
              </a>
              <ul>
                <li>
                  <a
                    href="#product-guidelines"
                  >
                    Product guidelines
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#status-colors"
              >
                Status colors
              </a>
              <ul>
                <li>
                  <a
                    href="#green"
                  >
                    Green
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    `);
  });
});
