import React from 'react'

const Products = [
    {
        name: "Restaurant Booking App",
        category: "React & Bootstrap Framework",
        quantity: 70
    },
    {
        name: "UI Kit",
        category: "React & Bootstrap Framework",
        quantity: 54
    },
    {
        name: "Design System Pro",
        category: "Bootstrap Framework",
        quantity: 47
    },
    {
        name: "Dashboard",
        category: "Tailwind, React",
        quantity: 43
    },
    {
        name: "Glassmorphism UI",
        category: "Vue Js, Tailwind ",
        quantity: 38
    },
    {
        name: "Multipurpose Template",
        category: "React & Bootstrap Framework",
        quantity: 22
    }
]

const TopProducts = () => {
    return (
        <div className="w-full lg:flex-1 min-w-[320px] h-[400px] bg-white p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Top Products</h2>

            <div className="flex flex-col gap-[9px]">
                {
                    Products.map((item, index) => (
                        <div className="flex items-center justify-between" key={index}>
                            <div>
                                <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
                                <p className="text-gray-500 text-xs">{item.category}</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="lowercase text-base text-gray-600 font-medium"><span className="font-semibold">70 </span>sales</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopProducts