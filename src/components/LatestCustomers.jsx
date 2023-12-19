import React from 'react'

const LatestCustomers = () => {
    const users = [
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/335" alt="Rounded avatar" />,
            name: "Neil Sims",
            mail: "email@example.com",
            amount: 367
        },
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/315" alt="Rounded avatar" />,
            name: "Bonnie Green",
            mail: "email@example.com",
            amount: 67
        },
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/325" alt="Rounded avatar" />,
            name: "Micheal Gough",
            mail: "email@example.com",
            amount: 3467
        },
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/330" alt="Rounded avatar" />,
            name: "Thomas Lean",
            mail: "email@example.com",
            amount: 2367
        },
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/320" alt="Rounded avatar" />,
            name: "Lana Byrd",
            mail: "email@example.com",
            amount: 367
        },
        {
            img: <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/400" alt="Rounded avatar" />,
            name: "Karen Nelson",
            mail: "email@example.com",
            amount: 1367
        }
    ]
    return (
        <div className="flex flex-col items-start w-full flex-1 min-w-[320px] h-[400px] p-6 bg-white rounded-2xl text-gray-900">
            <div>
                <h2 className="font-semibold text-xl">Latest Customers</h2>
            </div>
            <div className="w-full">
                {
                    users.map((user, idx) => (
                        <div key={idx} className="flex flex-row justify-between w-full gap-8">
                            <div className="flex flex-row items-center py-2 gap-2">
                                {user.img}
                                <div className="flex flex-col text-left items-start">
                                    <h3 className="font-semibold text-base">{user.name}</h3>
                                    <p className="text-gray-500 text-xs">{user.mail}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center font-semibold">
                                ${user.amount}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCustomers