const spacingPlugin = ({ addUtilities, config }) => {
  const spacingConfig = config('spacing');
  const marginUtilities = Object.keys(spacingConfig).map((spacingKey) => {
    return {
      [`.ma-${spacingKey}`]: {
        margin: spacingConfig[spacingKey],
      },
      [`.mv-${spacingKey}`]: {
        marginTop: spacingConfig[spacingKey],
        marginBottom: spacingConfig[spacingKey],
      },
      [`.mh-${spacingKey}`]: {
        marginRight: spacingConfig[spacingKey],
        marginLeft: spacingConfig[spacingKey],
      },
      [`.mt-${spacingKey}`]: {
        marginTop: spacingConfig[spacingKey],
      },
      [`.mr-${spacingKey}`]: {
        marginRight: spacingConfig[spacingKey],
      },
      [`.mb-${spacingKey}`]: {
        marginBottom: spacingConfig[spacingKey],
      },
      [`.ml-${spacingKey}`]: {
        marginLeft: spacingConfig[spacingKey],
      },
    };
  });

  const negativeMarginUtilities = Object.keys(spacingConfig).map((spacingKey) => {
    return {
      [`.-mh-${spacingKey}`]: {
        marginRight: `-${spacingConfig[spacingKey]}`,
        marginLeft: `-${spacingConfig[spacingKey]}`,
      },
    };
  });

  const paddingUtilities = Object.keys(spacingConfig).map((spacingKey) => {
    return {
      [`.pa-${spacingKey}`]: {
        padding: spacingConfig[spacingKey],
      },
      [`.pv-${spacingKey}`]: {
        paddingTop: spacingConfig[spacingKey],
        paddingBottom: spacingConfig[spacingKey],
      },
      [`.ph-${spacingKey}`]: {
        paddingRight: spacingConfig[spacingKey],
        paddingLeft: spacingConfig[spacingKey],
      },
      [`.pt-${spacingKey}`]: {
        paddingTop: spacingConfig[spacingKey],
      },
      [`.pr-${spacingKey}`]: {
        paddingRight: spacingConfig[spacingKey],
      },
      [`.pb-${spacingKey}`]: {
        paddingBottom: spacingConfig[spacingKey],
      },
      [`.pl-${spacingKey}`]: {
        paddingLeft: spacingConfig[spacingKey],
      },
    };
  });

  addUtilities([ ...marginUtilities, ...paddingUtilities ], ['responsive']);
  addUtilities(negativeMarginUtilities);
};

module.exports = spacingPlugin;
