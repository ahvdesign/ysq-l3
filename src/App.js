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

  findResult = schemaName => {
    if (schemaName === 'emotionalDeprivation') {
      if (
        this.state.emotionalDeprivation.total >= 0 &&
        this.state.emotionalDeprivation.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.emotionalDeprivation.total >= 9 &&
        this.state.emotionalDeprivation.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.emotionalDeprivation.total >= 19 &&
        this.state.emotionalDeprivation.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.emotionalDeprivation.total >= 31 &&
        this.state.emotionalDeprivation.total <= 54
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'abandonment') {
      if (
        this.state.abandonment.total >= 0 &&
        this.state.abandonment.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.abandonment.total >= 13 &&
        this.state.abandonment.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.abandonment.total >= 26 &&
        this.state.abandonment.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.abandonment.total >= 40 &&
        this.state.abandonment.total <= 102
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'mistrustAbuse') {
      if (
        this.state.mistrustAbuse.total >= 0 &&
        this.state.mistrustAbuse.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.mistrustAbuse.total >= 13 &&
        this.state.mistrustAbuse.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.mistrustAbuse.total >= 26 &&
        this.state.mistrustAbuse.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.mistrustAbuse.total >= 40 &&
        this.state.mistrustAbuse.total <= 102
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'socialIsolation') {
      if (
        this.state.socialIsolation.total >= 0 &&
        this.state.socialIsolation.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.socialIsolation.total >= 9 &&
        this.state.socialIsolation.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.socialIsolation.total >= 19 &&
        this.state.socialIsolation.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.socialIsolation.total >= 31 &&
        this.state.socialIsolation.total <= 60
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'defectiveness') {
      if (
        this.state.defectiveness.total >= 0 &&
        this.state.defectiveness.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.defectiveness.total >= 13 &&
        this.state.defectiveness.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.defectiveness.total >= 26 &&
        this.state.defectiveness.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.defectiveness.total >= 40 &&
        this.state.defectiveness.total <= 90
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'failure') {
      if (this.state.failure.total >= 0 && this.state.failure.total <= 8) {
        return 'Low';
      } else if (
        this.state.failure.total >= 9 &&
        this.state.failure.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.failure.total >= 19 &&
        this.state.failure.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.failure.total >= 31 &&
        this.state.failure.total <= 54
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'dependence') {
      if (
        this.state.dependence.total >= 0 &&
        this.state.dependence.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.dependence.total >= 13 &&
        this.state.dependence.total <= 35
      ) {
        return 'Medium';
      } else if (
        this.state.dependence.total >= 26 &&
        this.state.dependence.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.dependence.total >= 40 &&
        this.state.dependence.total <= 90
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'vulnerability') {
      if (
        this.state.vulnerability.total >= 0 &&
        this.state.vulnerability.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.vulnerability.total >= 9 &&
        this.state.vulnerability.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.vulnerability.total >= 19 &&
        this.state.vulnerability.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.vulnerability.total >= 31 &&
        this.state.vulnerability.total <= 72
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'enmeshment') {
      if (
        this.state.enmeshment.total >= 0 &&
        this.state.enmeshment.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.enmeshment.total >= 9 &&
        this.state.enmeshment.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.enmeshment.total >= 19 &&
        this.state.enmeshment.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.enmeshment.total >= 31 &&
        this.state.enmeshment.total <= 66
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'subjugation') {
      if (
        this.state.subjugation.total >= 0 &&
        this.state.subjugation.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.subjugation.total >= 9 &&
        this.state.subjugation.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.subjugation.total >= 19 &&
        this.state.subjugation.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.subjugation.total >= 31 &&
        this.state.subjugation.total <= 60
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'selfSacrifice') {
      if (
        this.state.selfSacrifice.total >= 0 &&
        this.state.selfSacrifice.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.selfSacrifice.total >= 13 &&
        this.state.selfSacrifice.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.selfSacrifice.total >= 26 &&
        this.state.selfSacrifice.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.selfSacrifice.total >= 40 &&
        this.state.selfSacrifice.total <= 102
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'emotionalInhibition') {
      if (
        this.state.emotionalInhibition.total >= 0 &&
        this.state.emotionalInhibition.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.emotionalInhibition.total >= 9 &&
        this.state.emotionalInhibition.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.emotionalInhibition.total >= 19 &&
        this.state.emotionalInhibition.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.emotionalInhibition.total >= 31 &&
        this.state.emotionalInhibition.total <= 54
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'unrelentingStandards') {
      if (
        this.state.unrelentingStandards.total >= 0 &&
        this.state.unrelentingStandards.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.unrelentingStandards.total >= 13 &&
        this.state.unrelentingStandards.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.unrelentingStandards.total >= 26 &&
        this.state.unrelentingStandards.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.unrelentingStandards.total >= 40 &&
        this.state.unrelentingStandards.total <= 96
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'entitlement') {
      if (
        this.state.entitlement.total >= 0 &&
        this.state.entitlement.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.entitlement.total >= 9 &&
        this.state.entitlement.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.entitlement.total >= 19 &&
        this.state.entitlement.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.entitlement.total >= 31 &&
        this.state.entitlement.total <= 66
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'insufficientSelfControl') {
      if (
        this.state.insufficientSelfControl.total >= 0 &&
        this.state.insufficientSelfControl.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.insufficientSelfControl.total >= 13 &&
        this.state.insufficientSelfControl.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.insufficientSelfControl.total >= 26 &&
        this.state.insufficientSelfControl.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.insufficientSelfControl.total >= 40 &&
        this.state.insufficientSelfControl.total <= 90
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'approvalSeeking') {
      if (
        this.state.approvalSeeking.total >= 0 &&
        this.state.approvalSeeking.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.approvalSeeking.total >= 13 &&
        this.state.approvalSeeking.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.approvalSeeking.total >= 26 &&
        this.state.approvalSeeking.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.approvalSeeking.total >= 40 &&
        this.state.approvalSeeking.total <= 84
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'negativityPessimism') {
      if (
        this.state.negativityPessimism.total >= 0 &&
        this.state.negativityPessimism.total <= 8
      ) {
        return 'Low';
      } else if (
        this.state.negativityPessimism.total >= 9 &&
        this.state.negativityPessimism.total <= 18
      ) {
        return 'Medium';
      } else if (
        this.state.negativityPessimism.total >= 19 &&
        this.state.negativityPessimism.total <= 30
      ) {
        return 'High';
      } else if (
        this.state.negativityPessimism.total >= 31 &&
        this.state.negativityPessimism.total <= 66
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }

    if (schemaName === 'punitiveness') {
      if (
        this.state.punitiveness.total >= 0 &&
        this.state.punitiveness.total <= 12
      ) {
        return 'Low';
      } else if (
        this.state.punitiveness.total >= 13 &&
        this.state.punitiveness.total <= 25
      ) {
        return 'Medium';
      } else if (
        this.state.punitiveness.total >= 26 &&
        this.state.punitiveness.total <= 39
      ) {
        return 'High';
      } else if (
        this.state.punitiveness.total >= 40 &&
        this.state.punitiveness.total <= 84
      ) {
        return 'Very High';
      } else {
        return 'Error';
      }
    }
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
        {this.state.renderResults ? (
          <Results data={this.state} findResult={this.findResult} />
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default App;
