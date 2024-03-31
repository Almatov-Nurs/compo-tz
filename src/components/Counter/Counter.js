// Hooks
import { useEffect, useState } from 'react';
// Components
import Button from '../Button/Button';
// Assets
import { ReactComponent as Basket } from '../../assets/icons/whiteBasket.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
// Styles
import classes from './Counter.module.scss';


const Counter = () => {
  const [ active , setActive ] = useState(false);
  const [ count, setCount ] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);


  useEffect(() => {
    setActive(!!count && count > 0);
    if (count < 0) setCount(0);

    return () => setActive(false);
  }, [ count ]);

  if (active) return (
    <span className={classes.counter}>
      <button className={classes.btn} onClick={decrement}>
        <Minus />
      </button>
      {count} {count > 1 ? 'штуки' : 'штук' }
      <button className={classes.btn} onClick={increment}>
        <Plus />
      </button>
    </span>
  );

  return <Button h={56} icon={Basket} onClick={() => setActive(true)} w={284}>В корзину</Button>;
};

export default Counter;
