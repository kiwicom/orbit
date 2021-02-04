// @noflow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useIntersect from "..";

const LazyImage = ({ src, placeholder, threshold }) => {
  const [source, setSource] = React.useState(placeholder);

  const { ref, entry } = useIntersect({
    threshold,
    rootMargin: "150px",
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setSource(src);
    }
  }, [src, entry]);

  return <img alt="" src={source} ref={ref} />;
};

describe("useIntersect", () => {
  it("uses the observer and updates when intersecting", () => {
    let callback;
    const entry = { observe: jest.fn(), disconnect: jest.fn() };
    window.IntersectionObserver = cb => {
      callback = cb;
      return entry;
    };

    const { rerender } = render(
      <LazyImage src="source" placeholder="placeholder" threshold={0.01} />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", "placeholder");
    expect(entry.observe).toHaveBeenCalled();
    entry.observe.mockClear();

    rerender(<LazyImage src="source" placeholder="placeholder" threshold={0.02} />);
    expect(entry.disconnect).toHaveBeenCalled();
    expect(entry.observe).toHaveBeenCalled();

    act(() => {
      callback([{ isIntersecting: true }]);
    });
    expect(screen.getByRole("img")).toHaveAttribute("src", "source");

    delete window.IntersectionObserver;
  });

  it("should skip functionality when IntersectionObserver is not supported", () => {
    const { result } = renderHook(() => useIntersect({}));
    expect(result.current.entry).toBeNull();
  });
});
