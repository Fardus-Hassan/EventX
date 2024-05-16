import AboutUs from './HomeComponents/AboutUs';
import AskQuestion from './HomeComponents/AskQuestion';
import Banner from './HomeComponents/Banner';
import MainServices from './HomeComponents/MainServices';
import OurAchievement from './HomeComponents/OurAchievement';
import PopulerServices from './HomeComponents/PopulerServices';
import Team from './HomeComponents/Team';

const Home = () => {
    return (
        <div className='text-black dark:text-white'>
            <Banner></Banner>
            <PopulerServices></PopulerServices>
            <AboutUs></AboutUs>
            <AskQuestion></AskQuestion>
            <MainServices></MainServices>
            <OurAchievement></OurAchievement>
            <Team></Team>
        </div>
    );
};

export default Home;