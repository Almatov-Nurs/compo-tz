// Components
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import Content from './components/Content/Content';


const breadcrumbs = [
  { title: 'Каталог', url: '#' },
  { title: 'Обувь', url: '#' },
  { title: 'Кроссовки', url: '#' },
  { title: 'Беговые', url: '#' },
];

const App = () => {
  return (
    <main className="container-lg content">
      <BreadCrumbs links={breadcrumbs} />
      <Content/>
    </main>
  );
};

export default App;
