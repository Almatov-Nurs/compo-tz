// Components
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
// Assets
import { ReactComponent as BlueLike } from '../../assets/icons/blueLike.svg';
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

const USER_CHOICES = [
  {
    title: 'Завтра',
    label: 'Доставка',
  },
  {
    title: '7 шт.',
    label: 'Тарасовка',
  },
  {
    title: '7 шт.',
    label: 'Тарасовка',
  },
];

const DESCRIPTION = 'Создание приверженного покупателя специфицирует неопровержимый '
  + 'комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий '
  + 'SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности,'
  + ' что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает '
  + 'косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный'
  + ' скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. '
  + 'Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.';


const ProductInfo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <div className={classes.buy}>
          <div className={classes.priceInfo}>
            <span className={classes.withoutDiscount}>166 534.00 цена без скидки</span>
            <span className={classes.price}>122 566 ₽<span className={classes.discount}>-15%</span></span>
          </div>
          <div className={classes.order}>
            <span className={classes.count}>12 штук в уп.</span>
            <Checkbox label='Заказ упаковкой'/>
          </div>
          <hr className={classes.dividerX} />
          <ul className={classes.user_choices}>
            {USER_CHOICES.map((item, index) => (
              <li className={classes.char_item} key={index}>
                <span className={classes.char_code}>{item.title}</span>
                <span className={classes.char_label}>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className={classes.buttons}>
            <Counter />
            <Button icon={BlueLike} iconGap={0} variant='text' />
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

      <div className={classes.bottom}>
        <h3 className={classes.subtitle}>Описание товара</h3>
        <p className={classes.description}>{DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
