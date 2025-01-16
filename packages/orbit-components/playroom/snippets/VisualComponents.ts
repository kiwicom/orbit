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

const serviceLogo = `<ServiceLogo name="KiwiGuaranteeInline" size="medium" />`;

const smartPassIllustration = `
<SmartPassV4
  primary="white"
  secondary="black"
  size="medium"
/>`;

export default [
  {
    group: "AirportIllustration",
    code: airportIllustration,
  },
  {
    group: "CarrierLogo",
    code: carrierLogo,
  },
  {
    group: "CountryFlag",
    code: countryFlag,
  },
  {
    group: "FeatureIcon",
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
  {
    group: "ServiceLogo",
    code: serviceLogo,
  },
  {
    group: "SmartPassIllustration",
    code: smartPassIllustration,
  },
];
