// pages/products.js
import Hero from '@/components/home-page/landing';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const canonicalUrl = (`https://www.watersindia.com/` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];
    return (
        <>
            <DefaultSeo
                canonical={canonicalUrl}
            />
            <Hero />
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
                <h1 className="text-3xl font-bold mb-4">Our Products</h1>
                <p className="mb-4">
                    Explore our expertise in STP, WTP, RO, SP, FFTR, RWH, DM (EDI), PSB, BIOGAS, and ETP contract solutions.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    {products.map((product, index) => (
                        <li key={index} className="hover:text-green-400 transition">
                            <strong>{product.name}:</strong> {product.description}
                        </li>
                    ))}
                </ul>
                <Link href="/" className="mt-6 text-green-400 hover:underline">
                    Back to Home
                </Link>
            </div>
        </>
    );
}
