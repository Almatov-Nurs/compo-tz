// Components
import ProductSlider from '../ProductSlider/ProductSlider';
import ProductInfo from '../ProductInfo/ProductInfo';
// Styles
import classes from './Content.module.scss';


const Content = () => {
  return (
    <>
      <h2 className={classes.title}>Кроссовки мужские Skechers Sunny Dale</h2>
      <section className={classes.products}>
        <ProductSlider />
        <ProductInfo />
      </section>
    </>
  );
};

export default Content;
