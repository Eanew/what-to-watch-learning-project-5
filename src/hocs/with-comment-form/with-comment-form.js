import React from "react";

import pt from "../../prop-types-cover.js";

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const MAX_RATING_SCORE = 10;
const STARS_COUNT = 5;

const withCommentForm = (Component) => {
  class WithCommentForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentStarValue: ``,
        comment: ``,
        isCommentValid: false,
      };

      this._handleStarsChange = this._handleStarsChange.bind(this);
      this._handleCommentInput = this._handleCommentInput.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleStarsChange(evt) {
      this.setState({
        currentStarValue: evt.target.value,
      });
    }

    _handleCommentInput(evt) {
      const comment = evt.target.value;
      const isCommentValid = comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH;

      this.setState({
        comment,
        isCommentValid,
      });
    }

    _handleSubmit(evt) {
      const {currentStarValue, comment} = this.state;
      const rating = currentStarValue * (MAX_RATING_SCORE / STARS_COUNT);

      evt.preventDefault();

      this.props.onSubmit({
        rating,
        comment,
      });
    }

    render() {
      const {currentStarValue, isCommentValid} = this.state;
      const isSubmitButtonEnabled = Boolean(currentStarValue && isCommentValid && !this.props.isFetching);

      return (
        <Component
          {...this.props}
          starsCount={STARS_COUNT}
          isSubmitButtonEnabled={isSubmitButtonEnabled}
          onStarsChange={this._handleStarsChange}
          onCommentInput={this._handleCommentInput}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithCommentForm.propTypes = {
    isFetching: pt.bool,
    onSubmit: pt.func,
  };

  return WithCommentForm;
};

export default withCommentForm;
