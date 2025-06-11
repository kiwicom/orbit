import { TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/lib/icons";
import useIsUrlExternal from "@site/src/hooks/useIsUrlExternal";

export const a = function A({
  children,
  href,
  orbitType,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  orbitType?: React.ComponentProps<typeof TextLink>["type"];
}) {
  const isExternal = useIsUrlExternal(href);
  const useExternalIcon = isExternal && typeof children === "string";
  return (
    <TextLink
      type={orbitType}
      href={href}
      external={isExternal}
      iconRight={useExternalIcon && <NewWindow ariaLabel="Opens in new window" />}
    >
      {children}
    </TextLink>
  );
};
