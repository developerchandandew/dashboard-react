import {useState} from 'react';
let SideBar=()=>{
    const [back,setBack] = useState(false);
    const [back1,setBack1] = useState(false);
    const [back2,setBack2] = useState(false);

    return (
        <div className="sidebar w-[15%] h-[100vh] ">
            <img src="src/images/Marriott_International 1.png" alt="Logo" className="mt-10 m-auto" />

           <ul className="mt-6">
            <li className="my-2 cursor-pointer "><button className='focus:bg-blue-400 w-4/5 p-2 ml-2 text-left rounded-md'><img src="src/images/report.png" alt="" className="inline mx-3" /> Reports </button></li>
            <li className="my-1 cursor-pointer "><button className='focus:bg-blue-400 w-4/5 p-2 ml-2 text-left rounded-md'><img src="src/images/work.png" alt="" className="inline mx-1 w-6" />Workspace </button></li>
            <li className="my-2 cursor-pointer "><button className='focus:bg-blue-400 w-4/5 p-2 ml-2 text-left rounded-md'><img src="src/images/setting.png" alt="" className="inline mx-3" />Settings </button></li>
           </ul>
        </div>
    )
}
export default SideBar