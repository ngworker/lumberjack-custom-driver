const capitalizedToken = '<name-capitalize>';
const hyphenToken = '<name-hyphen>';
const hyphenFileToken = '{name-hyphen}';
const capitalizedUnitedToken = '<name-capitalize-united>';
const lowercaseToken = '<name-lowercase>';
const camelToken = '<name-camel>';
const uppercaseUnderscoreToken = '<name-uppercase-underscore>';

function createTokens(driverName, organizationName) {
  const splittedName = driverName.split('-');
  const capitalizedName = splittedName.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
  const hyphenName = driverName;
  const capitalizedUnitedName = splittedName.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join('');
  const lowercaseName = splittedName.map((name) => name.toLowerCase()).join(' ');
  const camelName = splittedName
    .map((name, index) => (index != 0 ? name.charAt(0).toUpperCase() + name.slice(1) : name))
    .join('');
  const uppercaseUnderscoreName = splittedName.map((name) => name.toUpperCase()).join('_');

  return {
    driverName,
    organizationName,
    capitalizedName,
    hyphenName,
    lowercaseName,
    camelName,
    uppercaseUnderscoreName,
    capitalizedUnitedName,
  };
}

module.exports = {
  capitalizedToken,
  hyphenToken,
  hyphenFileToken,
  capitalizedUnitedToken,
  lowercaseToken,
  camelToken,
  uppercaseUnderscoreToken,
  createTokens,
};
