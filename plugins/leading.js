const leadingPlugin = ({ addUtilities, config }) => {
  const leadingConfig = config('leading');
  const utilities = Object.keys(leadingConfig)
    .map(leadingKey => ({
      [`.lh-${leadingKey}`]: { lineHeight: leadingConfig[leadingKey] },
    }));
  addUtilities(utilities);
};

module.exports = leadingPlugin;
