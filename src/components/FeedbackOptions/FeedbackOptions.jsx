import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback}) => {
  return (
    <div className='feedback__options'>
      <button type='button' onClick={onLeaveGoodFeedback}>Good</button>
      <button type='button' onClick={onLeaveNeutralFeedback}>Neutral</button>
      <button type='button' onClick={onLeaveBadFeedback}>Bad</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
}