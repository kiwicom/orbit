// @flow

const getCommonProps = () => {
  return {
    height: true,
    width: true,
    padding: true,
    spinner: true,
    fontSize: true,
    leftIconContainer: {
      spacing: getIconSpacing(),
      foreground: true,
      type: true,
      width: true,
      height: true,
      onlyIcon: true,
    },
    rightIconContainer: getIconContainer()
  };
};

export default getCommonProps;
