import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <section className="text-black flex items-center mt-100 gap-10">
            <div className="text-center w-1/2 ">
                <div className="flex-column justify-items-center">

                    <h2 className="text-2xl mb-8">
                        Transforming your Ideas into Reality
                    </h2>

                    <h1 className="text-7xl mb-4 font-bold">Unleash Innovation with Us</h1>



                    <p className="text-black-300 text-base">
                        Welcome to our world of creativity and cutting-edge technology. We're here to turn your vision into groundbreaking solutions that stand out in the digital landscape.
                    </p>
                </div>

                {/* <h2 className="text-4xl mb-8">
                    Transforming Ideas into Reality for a Better Tomorrow
                </h2>
                <p className="text-black-300 text-sm">
                    Welcome to our world of creativity and cutting-edge technology. We're here to turn your vision into groundbreaking solutions that stand out in the digital landscape.
                </p> */}
            </div>

            <div className="w-1/2">
                <Image className="shadow-md rounded-full" src="/heroes/hero-dev.jpg" alt="hero" width={1000} height={1000} />
            </div>
        </section>
    );
};

export default HeroSection;