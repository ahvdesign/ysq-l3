import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Question from './Question';

import db from './db';
import Results from './Results';

const data = db.db;
let key = 0;
let resultData = data;
let output;

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
      },
      renderResults: false
    };
  }

  handleChange = (number, schema, value) => {
    resultData[number - 1].value = Number(value);

    output = resultData.map(function(obj) {
      return Object.keys(obj)
        .sort()
        .map(function(key) {
          return obj[key];
        });
    });
  };

  handleSchema = schemaName => {
    let total = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;

    output.map(question => {
      if (question[1] === schemaName) {
        total += question[3];
        if (question[3] === 4) {
          fours++;
        } else if (question[3] === 5) {
          fives++;
        } else if (question[3] === 6) {
          sixes++;
        }

        this.setState({
          [schemaName]: {
            total,
            fours,
            fives,
            sixes
          }
        });
      }
    });
  };

  updateState = () => {
    this.handleSchema('emotionalDeprivation');
    this.handleSchema('abandonment');
    this.handleSchema('mistrustAbuse');
    this.handleSchema('socialIsolation');
    this.handleSchema('defectiveness');
    this.handleSchema('failure');
    this.handleSchema('dependence');
    this.handleSchema('vulnerability');
    this.handleSchema('enmeshment');
    this.handleSchema('subjugation');
    this.handleSchema('selfSacrifice');
    this.handleSchema('emotionalInhibition');
    this.handleSchema('unrelentingStandards');
    this.handleSchema('entitlement');
    this.handleSchema('insufficientSelfControl');
    this.handleSchema('approvalSeeking');
    this.handleSchema('negativityPessimism');
    this.handleSchema('punitiveness');
    this.setState({ renderResults: true });
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
        <button className="btn-submit" onClick={this.updateState}>
          Submit!
        </button>
        {this.state.renderResults ? <Results data={this.state} /> : <p />}
      </div>
    );
  }
}

export default App;
