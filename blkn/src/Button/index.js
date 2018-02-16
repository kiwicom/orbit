// @flow
import * as React from "react";

type Props = {
  title: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
};

const Button = ({ title, onClick }: Props) => (
  <button onClick={onClick}>
    {title}
    <style jsx>{`
      button {
        background-color: dodgerblue;
        color: white;
        border: none;
        border-radius: 3px;
        padding: 10px;
        font-size: 16px;
      }
    `}</style>
  </button>
);

export default Button;
