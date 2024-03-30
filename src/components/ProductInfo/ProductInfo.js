// Components
import Checkbox from '../Checkbox/Checkbox';
// Styles
import classes from './ProductInfo.module.scss';


const CHARACTERISTICS = [
  {
    code: 'ELC00696',
    label: 'Код поставщика',
  },
  {
    code: 'ELC0200000696',
    label: 'Артикул',
  },
  {
    code: 'ELC00696',
    label: 'Код РАЭК',
  },
  {
    code: 'ELC00696',
    label: 'Код ETM',
  },
  {
    code: 'Electric used',
    label: 'Бренд',
  },
  {
    code: 'ELC00696',
    label: 'Серия',
  },
  {
    code: 'ELC0200000696',
    label: 'Код производителя ',
  },
];


const ProductInfo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <div className={classes.buy}>
          <div className={classes.priceInfo}>
            <span className={classes.withoutDiscount}>166 534.00 цена без скидки</span>
            <span className={classes.price}>122 566 ₽<span className={classes.discount}>-15%</span></span>
          </div>
          <div>
            <span className={classes.count}>12 штук в уп.</span>
            <Checkbox />
          </div>
        </div>
        <hr className={classes.divider} />
        <div className={classes.characteristic}>
          <h3 className={classes.char_title}>Характеристики</h3>
          <ul className={classes.characteristics}>
            {CHARACTERISTICS.map((item, index) => (
              <li className={classes.char_item} key={index}>
                <span className={classes.char_code}>{item.code}</span>
                <span className={classes.char_label}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.bottom}></div>
    </div>
  );
};

export default ProductInfo;
