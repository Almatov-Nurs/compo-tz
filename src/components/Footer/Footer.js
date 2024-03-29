// Comoponents
import Button from '../Button/Button';
// Assets
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Pdf } from '../../assets/icons/pdf.svg';
import { ReactComponent as Video } from '../../assets/icons/video.svg';
import { ReactComponent as Faq } from '../../assets/icons/faq.svg';
import { ReactComponent as YouTube } from '../../assets/icons/youtube.svg';
import { ReactComponent as GrayLogo } from '../../assets/icons/gray_logo.svg';
// Styles
import classes from './Footer.module.scss';


const CATEGIRES_LIST = [
  {
    title: 'Женщинам',
    links: [
      { title: 'Одежда', url: '#' },
      { title: 'Обувь', url: '#' },
      { title: 'Аксессуары', url: '#' },
      { title: 'Белье', url: '#' },
      { title: 'Bra fitting', url: '#' },
    ],
  },
  {
    title: 'Мужчинам',
    links: [
      { title: 'Одежда', url: '#' },
      { title: 'Обувь', url: '#' },
      { title: 'Аксессуары', url: '#' },
      { title: 'Белье', url: '#' },
    ],
  },
  {
    title: 'Детям',
    links: [
      { title: 'Одежда', url: '#' },
      { title: 'Обувь', url: '#' },
      { title: 'Аксессуары', url: '#' },
      { title: 'Белье', url: '#' },
      { title: 'Игрушки', url: '#' },
      { title: 'Малыши', url: '#' },
    ],
  },
  {
    title: 'Виды спорта',
    links: [
      { title: 'Велосипед', url: '#' },
      { title: 'Туризм', url: '#' },
      { title: 'Тренажеры и фитнес', url: '#' },
      { title: 'Командные виды спорта', url: '#' },
      { title: 'Самокаты', url: '#' },
    ],
  },
];

const FAQ_LIST = [
  {
    title: 'PDF  презентация',
    icon: Pdf,
    link: '#',
  },
  {
    title: 'Видео инструкция',
    icon: Video,
    link: '#',
  },
  {
    title: 'FAQ',
    icon: Faq,
    link: '#',
  },
  {
    title: 'Мы на YouTube',
    icon: YouTube,
    link: '#',
  },
  {
    title: 'Политика конфиденциальности ',
    link: '#',
  },
  {
    title: 'Лицензионное соглашение',
    link: '#',
  },
];

const Footer = () => {
  return (
    <footer className={`${classes.footer} container-lg`}>
      <nav className={classes.links}>
        <Logo className={classes.logo} />
        <ul className={classes.contacts}>
          <li className={classes.contact__item}>
            <a className={classes.contact} href="tel:+8 800 841-95-95">8 800 841-95-95</a>
            <span className={classes.contact_label}>Служба поддержки</span>
          </li>
          <li className={classes.contact__item}>
            <a className={classes.contact} href='mailtp:support@sport.ru'>support@sport.ru</a>
            <span className={classes.contact_label}>Служба поддержки</span>
          </li>
        </ul>
        <ul className={classes.top_links}>
          {
            [ 'Вакансии', 'Блог', 'Акции' ].map((text, index) => (
              <li className={classes.item} key={index}><a className={classes.contact} href="#">{text}</a></li>
            ))
          }
          <Button variant='text'>Предложить  идею</Button>
        </ul>
      </nav>

      <hr className={classes.divider} />

      <nav>
        <ul className={classes.categories}>
          {
            CATEGIRES_LIST.map((category, index) => (
              <li className={classes.category} key={index}>
                <h3 className={classes.category__title}>{category.title}</h3>
                <ul className={classes.category__links}>
                  {
                    category.links.map((link, index) => (
                      <li className={classes.link} key={index}><a href={link.url}>{link.title}</a></li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </nav>

      <hr className={classes.divider} />

      <nav className={classes.faq}>
        <ul className={classes.aboutUs}>
          {
            FAQ_LIST.map(({ title, link, icon: Icon }, index) => (
              <li className={classes.item} key={index}>
                <a className={classes.faq__link} href={link}>
                  {Icon ? <Icon className={classes.faq__icon} /> : null}
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
        <p className={classes.policy}>
          Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации,
           Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года
           149-ФЗ &quot;Об информации, информационных технологиях и о защите информации&quot;,
        </p>
        <a className={classes.grayLogo} href="#">
          <GrayLogo />
          Разработка платформы
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
