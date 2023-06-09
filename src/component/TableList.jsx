import TableListDate from "./TableListDate";

let TableList=({name,id,option,date,img,order,amount})=>{
    return (
        <div className="list w-full flex justify-between p-2">
            <div className="w-[30%]  flex space-x-4">
            <input type="radio" name={name} id=""  onClick={()=>console.log(id)}/>
            <h4 className="w-10 "><img src={img} alt="img"  className="w-10 h-10 "/></h4>
            <h4>{name.length<=10?name:'qwertyuiop'}</h4>
            </div>
            <h4>{order}</h4>
            <h4>{amount}</h4>
            {/* <h4>{date.toDateString()}</h4> */}
            <TableListDate date={date}></TableListDate>
            <h4>{option}</h4>
        </div>
    )
}
export default TableList