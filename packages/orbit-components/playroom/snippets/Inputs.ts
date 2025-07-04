const basic = `<InputField label="Label" placeholder="Placeholder" />`;

const withError = `
<div className="pt-500">
  <InputField
    inlineLabel
    error="Please fill out as you have on your passport"
    placeholder="Placeholder"
    prefix={<Icons.Search ariaHidden />}
    suffix={<ButtonLink compact iconLeft={<Icons.Visibility ariaHidden />} size="normal"/>}
  />
</div>`;

const inputFile = `
<div className="pt-500">
  <InputFile help="Supported files: PNG, JPG, PDF" label="Label" labelRemove="Remove file" />
</div>`;

const inputGroup = `
<InputGroup
  flex={[
    '0 0 60px',
    '1 1 100%',
    '0 0 90px'
  ]}
  label="Date of birth"
>
  <InputField
    placeholder="DD"
  />
  <Select
    label="Month of birth"
    options={[
      {
        label: 'January',
        value: 'January'
      },
      {
        label: 'February',
        value: 'February'
      },
      {
        label: 'March',
        value: 'March'
      },
      {
        label: 'April',
        value: 'April'
      },
      {
        label: 'May',
        value: 'May'
      },
      {
        label: 'June',
        value: 'June'
      },
      {
        label: 'July',
        value: 'July'
      },
      {
        label: 'August',
        value: 'August'
      },
      {
        label: 'September',
        value: 'September'
      },
      {
        label: 'October',
        value: 'October'
      },
      {
        label: 'November',
        value: 'November'
      },
      {
        label: 'December',
        value: 'December'
      }
    ]}
    placeholder="Month"
    value="January"
  />
  <InputField placeholder="YYYY" />
</InputGroup>
`;

const inputSelect = `
<InputSelect
  emptyState="No results found."
  maxHeight="400px"
  options={[
    {
      group: 'Popular',
      prefix: <CountryFlag code="eu" />,
      title: 'Euro',
      value: 'EUR'
    },
    {
      group: 'Popular',
      prefix: <CountryFlag code="us" />,
      title: 'US Dollar',
      value: 'USD'
    },
    {
      group: 'Popular',
      prefix: <CountryFlag code="gb" />,
      title: 'Pound Sterling',
      value: 'GBP'
    },
    {
      prefix: <CountryFlag code="au" />,
      title: 'Australian Dollar',
      value: 'AUD'
    },
    {
      prefix: <CountryFlag code="br" />,
      title: 'Brazilian Real',
      value: 'BRL'
    },
    {
      prefix: <CountryFlag code="cz" />,
      title: 'Czech Koruna',
      value: 'CZK'
    }
  ]}
  placeholder="Select currency"
  labelClear="Clear value"
  showAll
/>
`;

const select = `
<Select
  label="Select an option"
  options={[
    {
      label: 'Zero-th item',
      value: 0
    },
    {
      label: 'First item',
      value: 1
    },
    {
      label: 'Second item',
      value: 2
    },
    {
      label: 'Third item',
      value: 3
    }
  ]}
  prefix={<Icons.Airplane ariaHidden />}
/>
`;

const textarea = `
<Textarea
  label="Label"
  name="Textarea"
  placeholder="Placeholder"
  defaultValue="Default value"
/>
`;

export default [
  {
    group: "InputField",
    name: "Basic InputField",
    code: basic,
  },
  {
    group: "InputField",
    name: "InputField with Error",
    code: withError,
  },
  {
    group: "InputFile",
    code: inputFile,
  },
  {
    group: "InputGroup",
    code: inputGroup,
  },
  {
    group: "InputSelect",
    code: inputSelect,
  },
  {
    group: "Select",
    code: select,
  },
  {
    group: "Textarea",
    code: textarea,
  },
];
