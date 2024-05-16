import AboutUs from './HomeComponents/AboutUs';
import AskQuestion from './HomeComponents/AskQuestion';
import Banner from './HomeComponents/Banner';
import PopulerServices from './HomeComponents/PopulerServices';

const Home = () => {
    return (
        <div className='text-black dark:text-white'>
            <Banner></Banner>
            <PopulerServices></PopulerServices>
            <AboutUs></AboutUs>
            <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;