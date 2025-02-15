import React from "react";

const Pricing = () => {
    return (
        <div className="flex-1 py-32 flex items-stretch">
            <div className="w-full">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Pricing Description Section */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl font-bold">Pricing</h2>
                        <p>
                            At Ektalabs, we offer 3D printing services with a simple, pay-as-you-go pricing model.
                            You only pay for the weight of the material used, which is **1 KR per gram**.
                            No hidden fees, just straightforward pricing.
                        </p>
                        <p>
                            If you don't print anything, you don't pay anything!
                        </p>

                        <h3 className="text-2xl font-semibold">What is 3D Printing?</h3>
                        <p>
                            3D printing is a process of creating three-dimensional objects from a digital file.
                            We can print in a variety of materials and deliver high-quality prints tailored to your needs.
                        </p>

                        <h3 className="text-2xl font-semibold">How is pricing calculated?</h3>
                        <p>
                            The pricing is based on the weight of the material used in the print.
                            You only pay for the grams of material consumed during the printing process.
                        </p>
                    </div>

                    {/* Pricing Box */}
                    <div>
                        <div className="flex flex-col gap-8 p-8 rounded-lg bg-black bg-opacity-20">
                            <h2 className="text-4xl font-bold">
                                <span className="text-green-600">1 KR </span> / 1 Gram
                            </h2>
                            <ul className="space-y-2">
                                <li>- Pay for what you usage.</li>
                                <li>- No hidden fees.</li>
                                <li>- Design help.</li>
                                <li>- Easy and Convenient.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
