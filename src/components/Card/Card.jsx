import React from 'react';
import s from './Card.module.scss';

const Card = (props) => {
  const {
    title,
    image,
    descr,
    coast,
    count,
    handleAddGoods = Function.prototype,
  } = props.cards;
  console.log(props);

  return (
    <div className={s.card}>
      <div className={s.card__title}>{title}</div>
      <div className={s.card__img}>
        <img src={image} alt={descr} />
      </div>
      <div className={s.card__price}>
        <span>{coast}&#8362;</span>
        <span> за 2.5кг </span>
      </div>
      <div className={s.card__btns}>
        <div className={s.counter}>
          <span className={s.decr}>-</span>
          <span>{count}</span>
          <span className={s.incr} onClick={handleAddGoods()}>
            +
          </span>
        </div>
        <button className={s.btn_add}>В корзину</button>
      </div>
    </div>
  );
};

export default Card;
