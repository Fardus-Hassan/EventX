import AboutUs from './HomeComponents/AboutUs';
import AskQuestion from './HomeComponents/AskQuestion';
import Banner from './HomeComponents/Banner';
import MainServices from './HomeComponents/MainServices';
import PopulerServices from './HomeComponents/PopulerServices';

const Home = () => {
    return (
        <div className='text-black dark:text-white'>
            <Banner></Banner>
            <PopulerServices></PopulerServices>
            <AboutUs></AboutUs>
            <AskQuestion></AskQuestion>
            <MainServices></MainServices>
        </div>
    );
};

export default Home;