// pages/products.js
import Hero from '@/components/home-page/landing';
import Link from 'next/link';

export default function Products() {
    const products = [
        { name: 'STP', description: 'Sewage Treatment Plant for effective waste management.' },
        { name: 'WTP', description: 'Water Treatment Plant for clean and safe water.' },
        { name: 'RO', description: 'Reverse Osmosis system for purifying water.' },
        { name: 'SP', description: 'Sludge Processing solutions for waste management.' },
        { name: 'FFTR', description: 'Fluoride and Iron Treatment Removal solutions.' },
        { name: 'RWH', description: 'Rain Water Harvesting systems for sustainable water use.' },
        { name: 'DM (EDI)', description: 'Demineralization systems with Electrodeionization technology.' },
        { name: 'PSB', description: 'Pumping and Storage systems for efficient water management.' },
        { name: 'BIOGAS', description: 'Biogas production systems for renewable energy.' },
        { name: 'ETP', description: 'Effluent Treatment Plant for industrial wastewater management.' },
    ];
    return (
        <div className="bg-white">

            <Hero />
            <div className="min-h-screen flex flex-col items-center justify-center  text-black p-6">
                <h1 className="text-3xl font-bold mb-4">Our Products</h1>
                <p className="mb-4">
                    Explore our expertise in STP, WTP, RO, SP, FFTR, RWH, DM (EDI), PSB, BIOGAS, and ETP contract solutions.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    {products.map((product, index) => (
                        <li key={index} className="hover:text-green-800 transition">
                            <strong>{product.name}:</strong> {product.description}
                        </li>
                    ))}
                </ul>
                <Link href="/" className="mt-6 text-green-800 hover:underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
