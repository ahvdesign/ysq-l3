import React from 'react';
import './Results.scss';

const Results = ({ data }) => {
  return (
    <div className="Results">
      <div className="results-row">
        <p className="schema-name">Schema Name</p>
        <p className="schema-code">Schema Code</p>
        <p className="schema-count">Total Scored</p>
        <p className="schema-count"># of 4s</p>
        <p className="schema-count"># of 5s</p>
        <p className="schema-count"># of 6s</p>
        <p className="schema-result">Schema Rank</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Emotional Deprivation</p>
        <p className="schema-code">ED</p>
        <p className="schema-count">{data.emotionalDeprivation.total}</p>
        <p className="schema-count">{data.emotionalDeprivation.fours}</p>
        <p className="schema-count">{data.emotionalDeprivation.fives}</p>
        <p className="schema-count">{data.emotionalDeprivation.sixes}</p>
        <p className="schema-result" />
      </div>
    </div>
  );
};

export default Results;
