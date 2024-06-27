import React from 'react';
import { GoPencil } from "react-icons/go";
import { BsEye } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import '../../styles/ui/ListTable.css'

const ListTable = ({dataColumn, dataRow}) => {

  return (
    <>
      <div className="ListTable">
        <table>
            <thead>
                <tr>
                    {dataColumn.map((e, i)=>{
                        return( <th>{e.name}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {dataRow.map((e, i)=>{
                    return(<tr>
                        <td>{i+1}</td>
                        <td><div className="imageBox"><img src={e.img} alt="" /></div></td>
                        <td>{e.name}</td>
                        <td>{e.sellerId}</td>
                        <td>{e.category}</td>
                        <td className={`status ${e.status}`}>{e.status}</td>
                        {e.reason? <td>{e.reason}</td>: ''}
                        <td className='action'><select defaultValue={'default'} name="" id="">
                            <option value="default"><GoPencil /> Action</option>
                            <option value=""><GoPencil /> Confirm Seller</option>
                            <option value=""><BsEye /> View Seller </option>
                            <option value=""><AiOutlineDelete /> Reject Seller</option>
                            </select></td>
                    </tr>)
                })}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default ListTable
