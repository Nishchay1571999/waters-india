// pages/blog.js
import Hero from '@/components/home-page/landing';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'STP Project Success Story',
        description: 'Transforming wastewater into clean water with our advanced STP solutions. Learn how we made it possible.',
        href: '/blog/stp-project',
    },
    {
        id: 2,
        title: 'Innovative WTP Solutions',
        description: 'Discover our recent WTP project that improved water purification efficiency by 50%.',
        href: '/blog/wtp-project',
    },
    {
        id: 3,
        title: 'Efficient RO Systems for Industrial Use',
        description: 'How our RO systems reduced costs and boosted productivity for our clients.',
        href: '/blog/ro-project',
    },
    {
        id: 4,
        title: 'Advanced SP Treatment System',
        description: 'Explore our specialized SP system designed for top-notch performance and reliability in the industry.',
        href: '/blog/sp-project',
    },
    {
        id: 5,
        title: 'High-Quality FFTR Filtration System',
        description: 'Learn how our FFTR filtration technology ensures crystal-clear results for diverse applications.',
        href: '/blog/fftr-project',
    },
    {
        id: 6,
        title: 'Rainwater Harvesting Innovation',
        description: 'Our RWH system captures and utilizes rainwater effectively, supporting sustainability and conservation.',
        href: '/blog/rwh-project',
    },
    {
        id: 7,
        title: 'DM (EDI) System for Pure Water Needs',
        description: 'Find out how our DM (EDI) system delivers high-purity water solutions for critical applications.',
        href: '/blog/dm-edi-project',
    },
    {
        id: 8,
        title: 'PSB Solutions for Enhanced Bioremediation',
        description: 'Read about our PSB solution designed to improve bioremediation in various environmental settings.',
        href: '/blog/psb-project',
    },
    {
        id: 9,
        title: 'Biogas Plant Implementation',
        description: 'Sustainable energy through biogas - read about our latest project and its environmental impact.',
        href: '/blog/biogas-project',
    },
    {
        id: 10,
        title: 'ETP for Effective Effluent Treatment',
        description: 'Discover our ETP project that ensures safe and effective effluent treatment for industrial applications.',
        href: '/blog/etp-project',
    },
];


export default function Blog() {
    return (
        <>
            <Hero />
            <div className="flex flex-col items-center justify-center  text-white p-6">
                <h1 className="text-3xl font-bold mb-4">Our Success Stories</h1>
                <p className="mb-6">
                    Read about our successful projects, innovative technologies, and insights into our work with various water treatment solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={post.href} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-950 transition">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="mt-2 text-gray-400">{post.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
