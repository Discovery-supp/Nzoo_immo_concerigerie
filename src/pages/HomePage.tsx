import React from 'react';
import Hero from '../components/Home/Hero';
import SearchSection from '../components/Home/SearchSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <SearchSection />
      <ServicesSection />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;