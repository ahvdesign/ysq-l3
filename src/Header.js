import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className="Header">
      <h1>YSQ&ndash;L3</h1>
      <h3>Jeffrey Young, Ph.D</h3>
      <h4>Instructions</h4>
      <p>
        Listed below are statements that someone might use to describe him or
        herself. Please read each statement and decide how well it describes
        you. When you are not sure, base your answer on what you emotionally
        feel, not on what you think to be true.
      </p>
      <p>
        If you desire, reword the statement so that it would be even more
        accurate in describing you (but do not change the basic meaning of the
        question).
      </p>
      <p>
        Then choose the highest rating from 1 to 6 that describes you (including
        your revisions), and write the number on the line before each statement.
      </p>
      <h4>Rating Scale</h4>
      <ol>
        <li>Completely untrue of me</li>
        <li>Mostly untrue of me</li>
        <li>Slightly more true than untrue</li>
        <li>Moderately true of me</li>
        <li>Mostly true of me</li>
        <li>Describes me perfectly</li>
      </ol>
    </header>
  );
};

export default Header;
