const airportIllustration = `<AirportIllustration name="PRGSmartPass"/>`;

const countryFlag = `<CountryFlag code="cz" name="Czech Republic" />`;

const carrierLogo = `
<CarrierLogo
  carriers={[
    {
      code: 'FR',
      name: 'Ryanair'
    },
    {
      code: '3K',
      name: 'Jetstar Asia'
    },
    {
      code: 'V7',
      name: 'Volotea'
    },
    {
      code: 'TP',
      name: 'TAP Air Portugal'
    }
  ]}
  inlineStacked
  rounded
  size="large"
/>
`;

const featureIcon = `<FeatureIcon name="TicketFlexi" />`;

const icon = `<Icons.Airplane />`;

const illustration = `<Illustration name="Accommodation" size="small"/>`;

export default [
  {
    group: "Airport Illustration",
    code: airportIllustration,
  },
  {
    group: "Carrier Logo",
    code: carrierLogo,
  },
  {
    group: "Country Flag",
    code: countryFlag,
  },
  {
    group: "Feature Icon",
    code: featureIcon,
  },
  {
    group: "Icon",
    code: icon,
  },
  {
    group: "Illustration",
    code: illustration,
  },
];
