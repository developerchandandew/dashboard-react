import { useEffect, useState } from 'react';
import TableList from '../TableList';
import database from '../database/database';
let Report = () => {
    const [data, setData] = useState([]);
    const [selectStatus, setSelectedStatus] = useState('all');
    const [search, setSearch] = useState();
    const tempOrderStatus = database.map(item => item.status).sort();
    let orderStatus = ["all", tempOrderStatus[0]];

    for (let index = 1; index < tempOrderStatus.length; index++) {
        if (tempOrderStatus[index - 1] !== tempOrderStatus[index]) orderStatus.push(tempOrderStatus[index]);
    }


    const searchHandle = (e) => {
        setSelectedStatus(orderStatus[0]);
        const value = e.target.value.toLowerCase();
        setSearch(value);
    };

    // active order through status
    const sortHandle = (e) => {
        setSelectedStatus(orderStatus[e.target.id]);
        const tempData = database.filter(item => item.status === orderStatus[e.target.id]);
        if (orderStatus[e.target.id] === orderStatus[0]) setData(database);
        else setData(tempData);
    };

    // searchbar 
    useEffect(() => {
        let result = database.filter((value) => value.name.toLowerCase().includes(search));
        setData(result);
    }, [search]);

    // render list from data
    useEffect(() => {
        setData(database);
    }, []);

    return (
        <div className="report w-4/5 p-10 ">
            <div className="flex justify-between mb-4">
                <h1 className="font-bold text-xl">Orders</h1>
                <button className="bg-blue-500 p-2 rounded-md text-white">+ Add Order</button>
            </div>
            <hr />

            <div className="bg-gray-200 rounded-md mt-7">
                {/* sort title */}
                <div className='flex justify-between p-2'>
                    <h1>{selectStatus.charAt(0).toUpperCase() + selectStatus.slice(1)}</h1>
                    <h1 className='mr-2 bg-gray-400 rounded-full w-6 h-6 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </h1>
                </div>
                <hr />
                <div className='opreation w-full flex justify-between p-2 relative'>
                    <div className='searchs flex justify-between p-2 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input type="text" placeholder='Search' className='bg-transparent mx-1 outline-none' onChange={searchHandle} />

                    </div>


                    <div className='active relative'>
                        <h1 className='mt-2 '>Active Orders</h1>

                        <div className='dropdown absolute w-fit bg-white p-2 top-10 left-0 transition ease-in-out delay-300 rounded-md invisible '>

                            {
                                orderStatus.map((item, index) =>
                                (<div key={index}>
                                    <input type="radio" name='status' onClick={sortHandle} id={index} />{item}
                                </div>)
                                )
                            }

                        </div>
                    </div>
                    <h1 className='mt-2'>Amount</h1>
                    <h1 className='mt-2'>Placed on</h1>
                    <h1 className='mt-2 mr-2'>options</h1>
                </div>

                {/* list table */}
                <div className='w-full  overflow-y-scroll'>
                    <table className='w-full '>
                        {
                            data.map((value) => (
                                <TableList key={value.id} id={value.id} img={value.image} name={value.name} order={value.order} amount={value.amount} option={value.options} date={value.placed} />
                            ))
                        }

                    </table>
                </div>
            </div>





        </div>
    );
};
export default Report; 