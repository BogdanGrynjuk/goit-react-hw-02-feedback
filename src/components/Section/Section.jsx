import PropTypes from 'prop-types';

import { Title } from './section.styled'

export const Section = ({ title, children } ) => {
   
  return (<section>
    <Title>{title}</Title>
    { children }
  </section>)
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}