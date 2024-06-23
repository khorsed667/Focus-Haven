import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Classes from '../Classes/Classes';
import StatsSection from '../Statistics/Statistics';
import StorySection from '../Story/Story';
import WorkProcess from '../WorkProcess/WorkProcess';
import Instractors from '../Instracctors/Instractors';
import Testimonial from '../Testimonial/Testimonial';
import FAQ from '../Faq/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <Gallery></Gallery>
            <Classes></Classes>
            <StorySection></StorySection>
            <WorkProcess></WorkProcess>
            <Instractors></Instractors>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;