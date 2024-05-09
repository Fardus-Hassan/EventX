import Banner from './HomeComponents/Banner';
import PopulerServices from './HomeComponents/PopulerServices';

const Home = () => {
    return (
        <div className='text-black dark:text-white'>
            <Banner></Banner>
            <PopulerServices></PopulerServices>
        </div>
    );
};

export default Home;