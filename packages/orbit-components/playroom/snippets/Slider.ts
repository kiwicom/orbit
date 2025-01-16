const basic = `
<Slider
label="Adjust to the desired value"
  defaultValue={1}
  step={1}
  minValue={1}
  maxValue={100}
  valueDescription="0 — 100"
/>
`;

const withHistogram = `
<div
  className="bg-cloud-light p-600 mt-800"
>
  <Slider
    defaultValue={12}
    histogramData={[
      11,
      25,
      37,
      5,
      21,
      27,
      24,
      33,
      16,
      21,
      22,
      2,
      11,
      25,
      37,
      5,
      21,
      27,
      24,
      33,
      16,
      21,
      22,
      2
    ]}
    histogramDescription="20 of 133 flights"
    label="Depart from Prague"
    maxValue={24}
    minValue={1}
    step={1}
    valueDescription="01:00 PM – 11:59 PM"
  />
</div>
`;

export default [
  {
    group: "Slider",
    name: "Basic Slider",
    code: basic,
  },
  {
    group: "Slider",
    name: "Slider with Histogram",
    code: withHistogram,
  },
];
