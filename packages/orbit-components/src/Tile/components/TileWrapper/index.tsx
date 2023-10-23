import * as React from "react";

import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  href?: string;
  external?: boolean;
  onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  >;
  onKeyDown?: Common.Event<React.KeyboardEvent<HTMLDivElement>>;
  as?: string;
  tabIndex?: string | number;
  role?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  htmlTitle?: string;
  id?: string;
}

const TileWrapper = ({
  href,
  external,
  dataTest,
  onClick,
  onKeyDown,
  children,
  as,
  tabIndex,
  role,
  ariaExpanded,
  ariaControls,
  id,
  htmlTitle,
}: React.PropsWithChildren<Props>) => {
  const WrapperComponent = (as ?? "div") as React.ElementType;

  return (
    <WrapperComponent
      className="orbit-tile-wrapper [&_.orbit-tile-header-icon-right]:hover:text-ink-light-hover font-base text-ink-dark shadow-action duration-fast hover:shadow-action-active rounded-large bg-white-normal de:rounded-normal box-border block w-full no-underline transition-shadow ease-in-out"
      data-test={dataTest}
      onClick={onClick}
      onKeyDown={onKeyDown}
      as={as}
      tabIndex={tabIndex}
      role={role}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      id={id}
    >
      {href ? (
        <a
          className="text-ink-dark focus:outline-blue-normal focus:[&_.orbit-tile-header-icon-right]:text-ink-light-hover link:text-ink-dark link:font-medium visited:text-ink-dark block h-full w-full no-underline outline-none visited:font-medium focus:outline-2"
          target={href && external ? "_blank" : undefined}
          rel={href && external ? "noopener noreferrer" : undefined}
          href={href || undefined}
          title={htmlTitle}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </WrapperComponent>
  );
};

export default TileWrapper;
