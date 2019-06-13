import React, { Component } from 'react';
import './Question.scss';

class Question extends Component {
  onChange = e => {
    this.props.handleChange(
      this.props.number,
      this.props.schema,
      e.target.value
    );
  };

  render() {
    return (
      <div className="Question">
        <input
          type="text"
          className="question-input"
          onChange={this.onChange}
        />
        <p className="question-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Question;
