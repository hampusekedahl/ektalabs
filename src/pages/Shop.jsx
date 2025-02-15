import React from "react";

const Shop = () => {
    return (
        <div className="flex-1 py-32 flex items-stretch">
            <div className="w-full">
                <div className="grid md:grid-cols-2 gap-16">


                    {/* Product Card */}
                    <a href="https://skepticaltux.com/" className="group relative block overflow-hidden">
                        <img
                            src="tuxi.jpg"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-black bg-black p-6">
                            <p className="text-green-600">
                                $39.99 
                                <span className="text-white line-through">$50</span>
                            </p>

                            <h3 className="mt-1.5 text-lg font-medium text-white">Skeptical Tux</h3>

                            <p className="mt-1.5 line-clamp-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                Officiis qui, enim cupiditate aliquam corporis iste.
                            </p>

                            <form className="mt-4 flex gap-4">
                                
                                <button
                                    type="button"
                                    className="block w-full rounded-sm bg-green-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    Buy Now
                                </button>
                            </form>
                        </div>
                    </a>

                    {/* Product Card */}
                    <a href="https://makerworld.com/en/models/1028183#profileId-1029344" className="group relative block overflow-hidden">
                        <img
                            src="https://makerworld.bblmw.com/makerworld/model/USd3bd91ab0df6d0/design/2025-01-27_60ace59aaab62.jpeg?x-oss-process=image/resize,w_1000/format,webp"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-black bg-black p-6">
                            <p className="text-green-600">
                                $24.99
                                <span className="text-white line-through">$30</span>
                            </p>

                            <h3 className="mt-1.5 text-lg font-medium text-white">Smart Shoe Rack</h3>

                            <p className="mt-1.5 line-clamp-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                Officiis qui, enim cupiditate aliquam corporis iste.
                            </p>

                            <form className="mt-4 flex gap-4">
                                

                                <button
                                    type="button"
                                    className="block w-full rounded-sm bg-green-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    Buy Now
                                </button>
                            </form>
                        </div>
                    </a>

                    {/* Product Card */}
                    <a href="https://makerworld.com/en/models/1004394#profileId-982516" className="group relative block overflow-hidden">
                        <img
                            src="https://makerworld.bblmw.com/makerworld/model/USf2dfff6c98d9c4/design/2025-01-16_76777a6dc3de4.jpeg?x-oss-process=image/resize,w_1000/format,webp"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-black bg-black p-6">
                            <p className="text-green-600">
                                $54.99
                                <span className="text-white line-through">$60</span>
                            </p>

                            <h3 className="mt-1.5 text-lg font-medium text-white">Memories in Light</h3>

                            <p className="mt-1.5 line-clamp-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                Officiis qui, enim cupiditate aliquam corporis iste.
                            </p>

                            <form className="mt-4 flex gap-4">
                                

                                <button
                                    type="button"
                                    className="block w-full rounded-sm bg-green-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    Buy Now
                                </button>
                            </form>
                        </div>
                    </a>

                    {/* Product Card */}
                    <a href="https://makerworld.com/en/models/955029#profileId-923786" className="group relative block overflow-hidden">
                        <img
                            src="https://makerworld.bblmw.com/makerworld/model/US1c9683b3445073/design/2025-01-30_943b40d2fec8b.jpeg?x-oss-process=image/resize,w_1000/format,webp"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-black bg-black p-6">
                            <p className="text-green-600">
                                $45.99
                                <span className="text-white line-through">$50</span>
                            </p>

                            <h3 className="mt-1.5 text-lg font-medium text-white">Map to My Heart</h3>

                            <p className="mt-1.5 line-clamp-3 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                Officiis qui, enim cupiditate aliquam corporis iste.
                            </p>

                            <form className="mt-4 flex gap-4">
                                <button
                                    type="button"
                                    className="block w-full rounded-sm bg-green-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    Buy Now
                                </button>
                            </form>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Shop;
