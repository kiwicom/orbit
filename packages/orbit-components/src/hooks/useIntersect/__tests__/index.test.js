// @noflow
import * as React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

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

    const wrapper = mount(<LazyImage src="source" placeholder="placeholder" threshold={0.01} />);
    expect(wrapper.find("img").prop("src")).toBe("placeholder");
    expect(entry.observe).toHaveBeenCalled();
    entry.observe.mockClear();

    wrapper.setProps({ threshold: 0.02 });
    expect(entry.disconnect).toHaveBeenCalled();
    expect(entry.observe).toHaveBeenCalled();

    act(() => {
      callback([{ isIntersecting: true }]);
    });
    wrapper.update();
    expect(wrapper.find("img").prop("src")).toBe("source");

    window.IntersectionObserver = undefined;
  });
});
