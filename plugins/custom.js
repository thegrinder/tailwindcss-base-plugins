const customPlugin = ({ addUtilities }) => {
  const sideModifiers = ['a', 't', 'r', 'b', 'l', 'n'];
  const utilities = [{
    html: {
      width: '100%',
      height: '100%',
    },
    body: {
      fontSize: '16px',
      height: '100%',
      minHeight: '30rem',
      width: '100%',
      minWidth: '20rem',
      margin: '0',
      boxSizing: 'border-box',
    },
    '.list': {
      listStyleType: 'none',
      padding: 0,
    },
    '.truncated': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: '100%',
    },
  }];
  addUtilities(utilities);
};

module.exports = customPlugin;
