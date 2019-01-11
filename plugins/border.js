const borderPlugin = () => {
  return ({ addUtilities }) => {
    const sideModifiers = ['a', 't', 'r', 'b', 'l', 'n'];
    const utilities = sideModifiers.map(sideModifier => ({
      [`.b${sideModifier}`]: {
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    }));
    addUtilities(utilities);
  };
};

module.exports = borderPlugin;
