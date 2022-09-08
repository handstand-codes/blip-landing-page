import React, { useEffect, useState } from "react";
import { getRandomIntByRange } from "~utils/helpers";
import { useTimeout } from "~hooks";

const Scrambler = ({ className, delay = 0, iterations, text }) => {
  const [ready, setReady] = useState(false);
  const [renderedText, setRenderedText] = useState(text);
  const [scrambleState, setScrambleState] = useState(0);

  const getJibberish = (length) => {
    const characters = {};

    characters.consonants = [
      `b`,
      `c`,
      `d`,
      `f`,
      `g`,
      `h`,
      `j`,
      `k`,
      `l`,
      `m`,
      `n`,
      `p`,
      `r`,
      `s`,
      `t`,
      `v`,
      `w`
    ];

    characters.vowels = [`a`, `e`, `i`, `o`, `u`, ` `];
    characters.result = ``;

    characters.getLetter = (datasource) => {
      const key = Math.floor(Math.random() * datasource.length);
      return datasource[key];
    };

    let loopStat = 0;

    while (loopStat < length) {
      if (loopStat === null || loopStat % 2) {
        characters.result += characters.getLetter(characters.vowels);
      } else {
        characters.result += characters.getLetter(characters.consonants);
      }

      loopStat += 1;
    }

    return characters.result;
  };

  //

  useTimeout(() => {
    setReady(true);
  }, [delay]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    let scrambleIterations = iterations;

    if (!scrambleIterations) {
      scrambleIterations = text.length - renderedText.length;

      if (scrambleIterations < 0) {
        scrambleIterations = -scrambleIterations;
      }

      if (scrambleIterations < 20) {
        scrambleIterations = 20;
      }
    }

    setScrambleState(scrambleIterations);
  }, [ready, text]);

  useEffect(() => {
    if (!ready || !window) {
      return () => {};
    }

    if (scrambleState === 0) {
      setRenderedText(text);

      return () => {};
    }

    //

    let jibberishLength;

    if (text === ``) {
      if (renderedText.length > iterations) {
        jibberishLength = parseInt(renderedText.length - iterations / 10);
      } else {
        jibberishLength = parseInt(renderedText.length - iterations / 20);
      }

      if (jibberishLength <= 0) {
        jibberishLength = 2;
      }
    } else {
      jibberishLength = getRandomIntByRange(text.length - 3, text.length);

      if (jibberishLength < 2) {
        jibberishLength = 2;
      }
    }

    setRenderedText(getJibberish(jibberishLength));

    //

    const scrambleTimeout = setTimeout(() => {
      setScrambleState(scrambleState - 1);
    }, 40);

    return () => {
      clearTimeout(scrambleTimeout);
    };
  }, [ready, scrambleState]);

  //

  return (
    <span className={`scrambler ${ready ? `ready` : ``} ${className}`}>
      {ready ? renderedText : `...`}
    </span>
  );
};

export default Scrambler;
