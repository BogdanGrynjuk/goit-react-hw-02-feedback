import PropTypes from 'prop-types';

import { Wrapper, OptionButton } from './FeedbackOptions.styled';


export const FeedbackOptions = ({onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback}) => {
  return (
    <Wrapper>
      <OptionButton type='button' onClick={onLeaveGoodFeedback}>good</OptionButton>
      <OptionButton type='button' onClick={onLeaveNeutralFeedback}>geutral</OptionButton>
      <OptionButton type='button' onClick={onLeaveBadFeedback}>bad</OptionButton>
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
}