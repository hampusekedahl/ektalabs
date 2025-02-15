import React from "react";

const Home = () => {
    return (
        <div className="flex-1 py-32 flex items-stretch">
            <div className="w-full">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl text-center font-bold leading-normal">
                            Bring Your Ideas to Life with 3D Printing!
                        </h2>
                        <p className="text-xl text-center leading-relaxed">
                            Our 3D printing services turn your designs into high-quality physical products.
                            From prototypes to final products, we can print them all.
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                        >
                            Shop Now
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="">
                            <span className="text-green-600">Customization</span> &amp; quality
                        </h2>
                        <p>
                            We offer custom 3D printing solutions tailored to your unique needs. Whether you need a single prototype or a batch of products, we ensure high-quality results with fast turnaround times.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-green-600">
                            Precision &amp; <span className="text-white">innovation</span>
                        </h2>
                        <p>
                            <a href="https://example.com/innovation" target="_blank" className="underline">
                                Learn more
                            </a>{" "}
                            about how our cutting-edge technology and materials give you accurate and reliable 3D prints every time. We use the latest in 3D printing techniques to turn your vision into reality.
                        </p>
                    </div>
                </section>

                <section className="flex flex-col gap-4 justify-center text-center">
                    <h2 className="">Ready to turn your ideas into reality?</h2>
                    <p>
                        Start your 3D printing journey with us today. No minimum order required.<br /> See{" "}
                        <a className="link" href="/pricing">
                            pricing
                        </a>{" "}
                        for more details.
                    </p>
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                    >
                        Get Started
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Home;
