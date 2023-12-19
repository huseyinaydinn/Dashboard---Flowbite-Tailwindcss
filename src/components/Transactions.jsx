import React from 'react'

const TransactionItems = [
    {
        transiction: "Payment from",
        user: "Bonnie Green",
        date: "Apr 23 ,2021",
        amount: "$2300",
        status: "Completed"
    },
    {
        transiction: "Payment refund to",
        user: "#00910",
        date: "Apr 23 ,2021",
        amount: "-$670",
        status: "Completed"
    },
    {
        transiction: "Payment failed from",
        user: "#087651",
        date: "Apr 18, 2021",
        amount: "$234",
        status: "Cancelled"
    },

    {
        transiction: "Payment from Bonnie Green",
        user: "Bonnie Green",
        date: "Apr 15, 2021",
        amount: "$5000",
        status: "In progress"
    },

    {
        transiction: "Payment from",
        user: "Jese Leos",
        date: "Apr 15, 2021",
        amount: "$2300",
        status: "In progress"
    },

    {
        transiction: "Payment from",
        user: "THEMSBERG LLC",
        date: "Apr 11, 2021",
        amount: "$280",
        status: "Completed"
    },
]

const Transactions = () => {
    return (
        <div className="flex flex-col items-start gap-4 w-full min-w-[320px] p-4 bg-white rounded-2xl text-gray-900 max-md:overflow-scroll">
            <div className="flex flex-col items-start justify-start text-start">
                <h2 className="font-semibold text-xl">Transactions</h2>
                <p className="text-sm text-gray-500">This is a list of latest transactions.</p>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 font-semibold">
                        <tr>
                            <th scope="col" className="px-4 py-4">
                                TRANSACTION
                            </th>
                            <th scope="col" className="px-4 py-4">
                                DATE & TIME
                            </th>
                            <th scope="col" className="px-4 py-4">
                                AMOUNT
                            </th>
                            <th scope="col" className="px-4 py-4">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TransactionItems.map((item, index) => (
                                <tr key={index} className="odd:bg-white  even:bg-gray-50  border-b">
                                    <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap text-sm">
                                        {item.transiction}<span className="font-semibold"> {item.user}</span>
                                    </th>
                                    <td className="px-4 py-4 text-xs text-gray-500 overflow-hidden whitespace-nowrap">
                                        {item.date}
                                    </td>
                                    <td className="px-4 py-4">
                                        {item.amount}
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`inline-flex items-cente text-xs font-medium px-2.5 py-0.5 rounded-xl text-center
                                         ${item.status === "Completed" ? ("bg-green-100 text-green-800")
                                                : item.status === "In progress" ? ("bg-blue-100 text-blue-800") : item.status === "Cancelled" ? ("bg-red-200 text-red-800") : ""}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions