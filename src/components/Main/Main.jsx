import React, { useEffect, useState } from 'react';
import s from './Main.module.scss';
import classNames from 'classnames';
import DATA from '../../assets/data';
import Card from '../Card/Card';

const Main = () => {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(DATA));
    setCards(data);
  }, []);

  // const handleAddGoods = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className={s.main}>
      <div className={classNames('container', s.body)}>
        {cards.map((card, index) => (
          <Card
            key={index}
            cards={card}
            handleAddGoods={() => setCount(count + 1)}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
