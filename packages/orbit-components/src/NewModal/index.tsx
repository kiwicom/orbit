import * as React from "react";
import cx from "clsx";

import { ModalContext } from "./ModalContext";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { maxWidthClasses, OFFSET, SIZES } from "./consts";

type Size = "extraSmall" | "small" | "normal" | "large" | "extraLarge";

interface Props {
  size?: Size;
  onClose?: () => void;
  hasCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
  fixedFooter?: boolean;
}

// interface ScrollPosition {
//   scrollTop: number | null;
//   scrollHeight: number | null;
//   clientHeight: number | null;
// }

const NewModal = ({
  size = SIZES.NORMAL,
  onClose,
  hasCloseButton = true,
  closeOnOverlayClick = true,
  children,
  fixedFooter = false,
}: Props) => {
  const [hasModalHeader, setHasModalHeader] = React.useState<boolean>(false);
  const [isModalHeaderSuppressed, setIsModalHeaderSuppressed] = React.useState<boolean>(false);
  const [hasModalSection, setHasModalSection] = React.useState<boolean>(false);
  // const [scrollPosition, setScrollPosition] = React.useState<ScrollPosition>({
  //   scrollTop: null,
  //   scrollHeight: null,
  //   clientHeight: null,
  // });
  const [isFullyScrolled, setIsFullyScrolled] = React.useState<boolean>(false);
  const [modalWidth, setModalWidth] = React.useState<number>(0);
  const [footerHeight, setFooterHeight] = React.useState<number>(0);

  const modalBody = React.useRef<HTMLDivElement | null>(null);
  const modalContent = React.useRef<HTMLDivElement | null>(null);

  const setDimensions = () => {
    const content = modalContent.current;

    if (!content) return;

    const contentDimensions = content.getBoundingClientRect();
    setModalWidth(contentDimensions.width);

    const footerEl = content.querySelector(".orbit-modal-footer");
    if (footerEl?.clientHeight) {
      setFooterHeight(footerEl.clientHeight);
    }
  };

  const modalBodyRef = React.useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      modalBody.current = node;

      const { scrollTop, scrollHeight, clientHeight } = node;
      // setScrollPosition({ scrollTop, scrollHeight, clientHeight });
      setIsFullyScrolled(scrollHeight - scrollTop <= clientHeight + OFFSET);
    }
  }, []);

  const modalContentRef = React.useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      modalContent.current = node;

      setDimensions();
    }
  }, []);

  const handleOverlayClick = () => {
    if (onClose && closeOnOverlayClick) onClose();
  };

  const handleScroll = () => {
    if (modalBody.current) {
      const { scrollTop, scrollHeight, clientHeight } = modalBody.current;
      // setScrollPosition({ scrollTop, scrollHeight, clientHeight });

      setIsFullyScrolled(scrollHeight - scrollTop <= clientHeight + OFFSET);
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = React.useMemo(
    () => ({
      hasModalHeader,
      isModalHeaderSuppressed,
      hasModalSection,
      setHasModalSection: () => setHasModalSection(true),
      removeHasModalSection: () => setHasModalSection(false),
      setHasModalHeader,
      setIsModalHeaderSuppressed,
    }),
    [hasModalHeader, isModalHeaderSuppressed, hasModalSection],
  );

  // console.log({ footerHeight, isFullyScrolled });

  // TODO: before footerHeight is set, shadow is not visible
  const footerClasses = cx(
    fixedFooter && [
      "[&_.orbit-modal-footer]:p-400 [&_.orbit-modal-footer]:fixed [&_.orbit-modal-footer]:bottom-0",
      "[&_.orbit-modal-footer]:duration-fast [&_.orbit-modal-footer]:transition-shadow [&_.orbit-modal-footer]:ease-in-out",
      // isFullyScrolled
      //   ? "[&_.orbit-modal-footer]:shadow-modal-scrolled"
      //   : "[&_.orbit-modal-footer]:shadow-modal lm:[&_.orbit-modal-footer]:rounded-b-none",
      "[&_.orbit-modal-section:last-of-type]:pb-600 [&_.orbit-modal-section:last-of-type]:mb-0",
    ],
    fixedFooter
      ? [
          "lm:[&_.orbit-modal-footer]:!p-800",
          isFullyScrolled
            ? [
                "lm:[&_.orbit-modal-footer]:absolute",
                "[&_.orbit-modal-footer]:shadow-modal-scrolled",
              ]
            : ["[&_.orbit-modal-footer]:shadow-modal lm:[&_.orbit-modal-footer]:rounded-b-none"],
        ]
      : "lm:[&_.orbit-modal-footer]:p-800",
    isFullyScrolled && "lm:[&_.orbit-modal-footer]:shadow-none",
    // isFullyScrolled
    //   ? "[&_.orbit-modal-footer]:shadow-modal-scrolled"
    //   : "[&_.orbit-modal-footer]:shadow-modal lm:[&_.orbit-modal-footer]:rounded-b-none",
    modalWidth
      ? "lm:[&_.orbit-modal-footer]:max-w-[var(--orbit-modal-width)]"
      : maxWidthClasses.footer[size],
  );

  // const footerClasses = cx(
  //   fixedFooter && isFullyScrolled ? ["lm:[&_.orbit-modal-footer]:absolute"] : [],
  //   modalWidth
  //     ? "lm:[&_.orbit-modal-footer]:max-w-[var(--orbit-modal-width)]"
  //     : maxWidthClasses.footer[size],
  // );

  const cssVars = {
    "--orbit-modal-width": `${modalWidth}px`,
    "--orbit-modal-footer-height": fixedFooter ? `${footerHeight}px` : "0",
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      className={cx(
        "orbit-modal-body",
        "z-overlay font-base fixed inset-0 box-border size-full overflow-x-hidden outline-none",
        // !isMobileFullPage && "bg-[black]/50",
        "lm:overflow-y-auto lm:p-1000 lm:bg-[black]/50",
      )}
      ref={modalBodyRef}
      onScroll={handleScroll}
    >
      {/* <div className={cx("orbit-modal-wrapper")}> */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={e => e.stopPropagation()}
        className={cx(
          "orbit-modal-wrapper-content relative",
          "bg-white-normal rounded-modal mx-auto overflow-y-auto",
          "lm:[&_.orbit-modal-section:last-of-type]:pb-1000 lm:[&_.orbit-modal-section:last-of-type:after]:content-none lm:[&_.orbit-modal-section:last-of-type]:mb-[var(--orbit-modal-footer-height,0px)]",
          !hasModalSection &&
            "[&_.orbit-modal-header-container]:mb-800 lm:[&_.orbit-modal-header-container]:mb-[var(--orbit-modal-footer-height,0px)]",
          maxWidthClasses.largeMobile[size],
          footerClasses,
        )}
        style={cssVars as React.CSSProperties}
        ref={modalContentRef}
        // onScroll={handleScroll}
      >
        {/* Close button */}
        {onClose && hasCloseButton && (
          <div className={cx("max-w-modal-normal absolute flex w-full justify-end")}>
            <ButtonLink onClick={onClose} size="normal" iconLeft={<Close />} type="secondary" />
          </div>
        )}
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NewModal;
