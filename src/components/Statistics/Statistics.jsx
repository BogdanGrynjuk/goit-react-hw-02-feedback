import PropTypes from 'prop-types';

export const Statistics = ({ good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage }) => {
  
  return (
    <ul className='statistics'>
      <li className="statistics__item"><p>Good: {good}</p></li>
      <li className="statistics__item"><p>Neutral: {neutral}</p></li>
      <li className="statistics__item"><p>Bad: {bad}</p></li>
      <li className="statistics__item"><p>Total: {totalFeedback}</p></li>
      <li className="statistics__item"><p>Positive feedback: {positiveFeedbackPercentage}%</p></li>
      </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
}