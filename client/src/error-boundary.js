import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

function ErrorBoundary(
  {
    componentStack,
    error,
  },
) {
  console.error(error, componentStack);
  return (
    <div />
  );
}

ErrorBoundary.propTypes = {
  componentStack: PropTypes.string,
  error: PropTypes.shape(),
};

ErrorBoundary.defaultProps = {
  componentStack: null,
  error: null,
};

export default hot(ErrorBoundary);
