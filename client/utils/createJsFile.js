const fs = require('fs');

const createJsFile = function(name, path) {
  const template = `import PropTypes from 'prop-types';

export default function ${name}(props) {
  const {
    children
  } = props
  return (
      <>{children}</>
  )
}

${name}.propTypes = {
  children: PropTypes.element
}

${name}.defaultProps = {
  children: undefined
}
`;

  fs.writeFile(path, template, () => {});
}

module.exports = createJsFile

