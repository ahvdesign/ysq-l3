import React, { Component } from 'react';
import './Question.scss';

class Question extends Component {
  state = {
    errorActive: false,
    value: ''
  };

  onChange = e => {
    const value = e.target.value;

    this.setState({ value: Number(value) });

    if (value < 1 || value > 6 || Number(value) % 1 !== 0) {
      this.setState({ errorActive: true });
    } else {
      this.setState({ errorActive: false });
    }

    this.props.handleChange(this.props.number, this.props.schema, value);
  };

  render() {
    return (
      <div className="Question">
        <input
          type="text"
          className={
            this.state.errorActive ? 'question-error' : 'question-input'
          }
          onChange={this.onChange}
          value={this.state.value}
        />
        <p className="question-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Question;
