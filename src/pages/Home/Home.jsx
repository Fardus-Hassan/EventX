import WithLoading from '../../components/WithLoading';
import AboutUs from './HomeComponents/AboutUs';
import AskQuestion from './HomeComponents/AskQuestion';
import Banner from './HomeComponents/Banner';
import MainServices from './HomeComponents/MainServices';
import OurAchievement from './HomeComponents/OurAchievement';
import PopulerServices from './HomeComponents/PopulerServices';
import Reviews from './HomeComponents/Reviews';
import Team from './HomeComponents/Team';

const Home = () => {
    return (
        <WithLoading>
            <div className='text-black dark:text-white'>
                <Banner></Banner>
                <PopulerServices></PopulerServices>
                <AboutUs></AboutUs>
                <AskQuestion></AskQuestion>
                <MainServices></MainServices>
                <OurAchievement></OurAchievement>
                <Team></Team>
                <Reviews></Reviews>
            </div>
        </WithLoading>
    );
};

export default Home;