import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Question from './Question';

import db from './db';
import Results from './Results';

const data = db.db;
let key = 0;

// NEEDS:
// 1. Count for total of each schema
// 2. Count for the number of 4, 5, and 6 for each schema

// TODO: copy the db information to a new variable
// TODO: use the new variable onChange to update the results table
// TODO: make results table printable and emailable

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionalDeprivation: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      abandonment: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      mistrustAbuse: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      socialIsolation: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      defectiveness: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      failure: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      dependence: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      vulnerability: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      enmeshment: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      subjugation: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      selfSacrifice: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      emotionalInhibition: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      unrelentingStandards: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      entitlement: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      insufficientSelfControl: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      approvalSeeking: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      negativityPessimism: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      },
      punitiveness: {
        total: 0,
        fours: 0,
        fives: 0,
        sixes: 0
      }
    };
  }

  handleChange = (number, schema, value) => {
    console.log(`${number} - ${schema} - ${value}`);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ol>
          {data.map(question => {
            key += 1;
            return (
              <li key={key + 2000}>
                <Question
                  key={key}
                  number={question.number}
                  text={question.text}
                  schema={question.schema}
                  handleChange={this.handleChange}
                />
              </li>
            );
          })}
        </ol>
        <Results data={this.state} />
      </div>
    );
  }
}

export default App;
