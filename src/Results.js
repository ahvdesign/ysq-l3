import React from 'react';
import './Results.scss';

const Results = ({ data, findResult }) => {
  return (
    <div className="Results">
      <div className="results-row">
        <p className="schema-name">Schema Name</p>
        <p className="schema-code">Schema Code</p>
        <p className="schema-count">Total Scored (Max Possible)</p>
        <p className="schema-count"># of 4s</p>
        <p className="schema-count"># of 5s</p>
        <p className="schema-count"># of 6s</p>
        <p className="schema-result">Schema Rank</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Emotional Deprivation</p>
        <p className="schema-code">ED</p>
        <p className="schema-count">{data.emotionalDeprivation.total} (54)</p>
        <p className="schema-count">{data.emotionalDeprivation.fours}</p>
        <p className="schema-count">{data.emotionalDeprivation.fives}</p>
        <p className="schema-count">{data.emotionalDeprivation.sixes}</p>
        <p className="schema-result">{findResult('emotionalDeprivation')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Abandonment</p>
        <p className="schema-code">AB</p>
        <p className="schema-count">{data.abandonment.total} (102)</p>
        <p className="schema-count">{data.abandonment.fours}</p>
        <p className="schema-count">{data.abandonment.fives}</p>
        <p className="schema-count">{data.abandonment.sixes}</p>
        <p className="schema-result">{findResult('abandonment')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Mistrust/Abuse</p>
        <p className="schema-code">MA</p>
        <p className="schema-count">{data.mistrustAbuse.total} (102)</p>
        <p className="schema-count">{data.mistrustAbuse.fours}</p>
        <p className="schema-count">{data.mistrustAbuse.fives}</p>
        <p className="schema-count">{data.mistrustAbuse.sixes}</p>
        <p className="schema-result">{findResult('mistrustAbuse')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Social Isolation</p>
        <p className="schema-code">SI</p>
        <p className="schema-count">{data.socialIsolation.total} (60)</p>
        <p className="schema-count">{data.socialIsolation.fours}</p>
        <p className="schema-count">{data.socialIsolation.fives}</p>
        <p className="schema-count">{data.socialIsolation.sixes}</p>
        <p className="schema-result">{findResult('socialIsolation')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Defectiveness</p>
        <p className="schema-code">DS</p>
        <p className="schema-count">{data.defectiveness.total} (90)</p>
        <p className="schema-count">{data.defectiveness.fours}</p>
        <p className="schema-count">{data.defectiveness.fives}</p>
        <p className="schema-count">{data.defectiveness.sixes}</p>
        <p className="schema-result">{findResult('defectiveness')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Failure</p>
        <p className="schema-code">FA</p>
        <p className="schema-count">{data.failure.total} (54)</p>
        <p className="schema-count">{data.failure.fours}</p>
        <p className="schema-count">{data.failure.fives}</p>
        <p className="schema-count">{data.failure.sixes}</p>
        <p className="schema-result">{findResult('failure')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Dependence</p>
        <p className="schema-code">DI</p>
        <p className="schema-count">{data.dependence.total}(90)</p>
        <p className="schema-count">{data.dependence.fours}</p>
        <p className="schema-count">{data.dependence.fives}</p>
        <p className="schema-count">{data.dependence.sixes}</p>
        <p className="schema-result">{findResult('dependence')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Vulnerability</p>
        <p className="schema-code">VU</p>
        <p className="schema-count">{data.vulnerability.total}(72)</p>
        <p className="schema-count">{data.vulnerability.fours}</p>
        <p className="schema-count">{data.vulnerability.fives}</p>
        <p className="schema-count">{data.vulnerability.sixes}</p>
        <p className="schema-result">{findResult('vulnerability')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Enmeshment</p>
        <p className="schema-code">EU</p>
        <p className="schema-count">{data.enmeshment.total}(66)</p>
        <p className="schema-count">{data.enmeshment.fours}</p>
        <p className="schema-count">{data.enmeshment.fives}</p>
        <p className="schema-count">{data.enmeshment.sixes}</p>
        <p className="schema-result">{findResult('enmeshment')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Subjugation</p>
        <p className="schema-code">SB</p>
        <p className="schema-count">{data.subjugation.total}(60)</p>
        <p className="schema-count">{data.subjugation.fours}</p>
        <p className="schema-count">{data.subjugation.fives}</p>
        <p className="schema-count">{data.subjugation.sixes}</p>
        <p className="schema-result">{findResult('subjugation')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Self-Sacrifice</p>
        <p className="schema-code">SS</p>
        <p className="schema-count">{data.selfSacrifice.total} (102)</p>
        <p className="schema-count">{data.selfSacrifice.fours}</p>
        <p className="schema-count">{data.selfSacrifice.fives}</p>
        <p className="schema-count">{data.selfSacrifice.sixes}</p>
        <p className="schema-result">{findResult('selfSacrifice')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Emotional Inhibition</p>
        <p className="schema-code">EI</p>
        <p className="schema-count">{data.emotionalInhibition.total} (54)</p>
        <p className="schema-count">{data.emotionalInhibition.fours}</p>
        <p className="schema-count">{data.emotionalInhibition.fives}</p>
        <p className="schema-count">{data.emotionalInhibition.sixes}</p>
        <p className="schema-result">{findResult('emotionalInhibition')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Unrelenting Standards</p>
        <p className="schema-code">US</p>
        <p className="schema-count">{data.unrelentingStandards.total} (96)</p>
        <p className="schema-count">{data.unrelentingStandards.fours}</p>
        <p className="schema-count">{data.unrelentingStandards.fives}</p>
        <p className="schema-count">{data.unrelentingStandards.sixes}</p>
        <p className="schema-result">{findResult('unrelentingStandards')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Entitlement</p>
        <p className="schema-code">ET</p>
        <p className="schema-count">{data.entitlement.total} (66)</p>
        <p className="schema-count">{data.entitlement.fours}</p>
        <p className="schema-count">{data.entitlement.fives}</p>
        <p className="schema-count">{data.entitlement.sixes}</p>
        <p className="schema-result">{findResult('entitlement')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Insufficient Self-Control</p>
        <p className="schema-code">IS</p>
        <p className="schema-count">
          {data.insufficientSelfControl.total} (90)
        </p>
        <p className="schema-count">{data.insufficientSelfControl.fours}</p>
        <p className="schema-count">{data.insufficientSelfControl.fives}</p>
        <p className="schema-count">{data.insufficientSelfControl.sixes}</p>
        <p className="schema-result">{findResult('insufficientSelfControl')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Approval-Seeking</p>
        <p className="schema-code">AS</p>
        <p className="schema-count">{data.approvalSeeking.total} (84)</p>
        <p className="schema-count">{data.approvalSeeking.fours}</p>
        <p className="schema-count">{data.approvalSeeking.fives}</p>
        <p className="schema-count">{data.approvalSeeking.sixes}</p>
        <p className="schema-result">{findResult('approvalSeeking')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Negativity/Pessimism</p>
        <p className="schema-code">NP</p>
        <p className="schema-count">{data.negativityPessimism.total} (66)</p>
        <p className="schema-count">{data.negativityPessimism.fours}</p>
        <p className="schema-count">{data.negativityPessimism.fives}</p>
        <p className="schema-count">{data.negativityPessimism.sixes}</p>
        <p className="schema-result">{findResult('negativityPessimism')}</p>
      </div>
      <div className="results-row">
        <p className="schema-name">Punitiveness</p>
        <p className="schema-code">PU</p>
        <p className="schema-count">{data.punitiveness.total} (84)</p>
        <p className="schema-count">{data.punitiveness.fours}</p>
        <p className="schema-count">{data.punitiveness.fives}</p>
        <p className="schema-count">{data.punitiveness.sixes}</p>
        <p className="schema-result">{findResult('punitiveness')}</p>
      </div>
    </div>
  );
};

export default Results;
