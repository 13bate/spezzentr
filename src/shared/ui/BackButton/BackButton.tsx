// src/shared/ui/BackButton/BackButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import style from './BackButton.module.scss';

interface Props {
  to?: string;
  text?: string;
}

export const BackButton: React.FC<Props> = ({
  to = "/education",
  text = "К списку разделов"
}) => {
  return (
    <Link to={to} className={style.backButton}>
      ← {text}
    </Link>
  );
};
