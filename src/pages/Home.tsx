import Hero from '../components/layout/Hero';
import ValueProps from '../components/sections/ValueProps';
import HowItWorks from '../components/sections/HowItWorks';
import ProductModules from '../components/sections/ProductModules';
import Industries from '../components/sections/Industries';
import Credibility from '../components/sections/Credibility';
import CTA from '../components/sections/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <ValueProps />
            <HowItWorks />
            <ProductModules />
            <Industries />
            <Credibility />
            <CTA />
        </>
    );
};

export default Home;
