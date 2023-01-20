import React, { FC } from 'react';

import { HighlightedText } from '@components';

interface Props {
  children: string;
  keyword: string;
}

interface Word {
  children: string;
  isKeyword: boolean;
}

export const TextHighlighter: FC<Props> = ({ children, keyword }) => {
  const splittedText = children.split(' '),
    words: Word[] = [];
  splittedText.map((word, wordIndex) => {
    words.push(
      {
        children: word,
        isKeyword: word.toLowerCase() === keyword.toLowerCase(),
      },
      {
        children: wordIndex === splittedText.length - 1 ? '\n' : ' ',
        isKeyword: false,
      },
    );
  });
  return (
    <>
      {words.map(({ isKeyword, ...props }, index) =>
        isKeyword ? <HighlightedText key={index} {...props} /> : props.children,
      )}
    </>
  );
};
