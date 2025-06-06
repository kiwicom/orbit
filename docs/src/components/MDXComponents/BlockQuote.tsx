import React from "react";
import cx from "clsx";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cx(
        "font-medium italic",
        "[&_blockquote_p]:text-large",
        "[&_blockquote>*+*]:mt-200",
        "[&_figcaption]:mt-200",
      )}
    >
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cx(
        "border-ink-dark border-0 border-l-[3px] border-solid",
        "p-400 rounded-100 bg-cloud-light",
        "[&_+_p]:!mt-600",
        "[.orbit-docs-heading-anchor_+_&]:!mt-100",
      )}
    >
      {children}
    </div>
  );
};

export default function BlockQuote({ children }: { children: React.ReactNode }) {
  const lastChild = React.Children.toArray(children)[
    React.Children.count(children) - 1
  ] as React.ReactElement<{ children: string }>;

  // if quote ends with author
  if (
    React.isValidElement(lastChild) &&
    typeof lastChild.props.children === "string" &&
    lastChild.props.children.startsWith("—")
  ) {
    return (
      <Wrapper>
        <Content>
          <figure>
            <blockquote>
              {React.Children.map(
                children,
                (child, index) => index < React.Children.count(children) - 1 && child,
              )}
            </blockquote>
            <figcaption>
              <p className="text-ink-dark">{lastChild.props.children}</p>
            </figcaption>
          </figure>
        </Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>
        <blockquote>{children}</blockquote>
      </Content>
    </Wrapper>
  );
}
