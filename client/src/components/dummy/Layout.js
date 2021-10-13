import PropTypes from 'prop-types';

export default function Layout(props) {
  const {
    children
  } = props;

  return <main className="layout">{children}</main>
}

Layout.propTypes = {
  children: PropTypes.element
}

Layout.defaultProps = {
  children: undefined
}
