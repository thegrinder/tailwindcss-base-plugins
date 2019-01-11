const borderRadiusPlugin = ({ addUtilities, config }) => {
  const borderRadiusConfig = config('borderRadius');
  const utilities = Object.keys(borderRadiusConfig).map(sizeKey => ({
    [`.br-${sizeKey}`]: { borderRadius: borderRadiusConfig[sizeKey] },
  }));
  addUtilities(utilities);
};

module.exports = borderRadiusPlugin;
