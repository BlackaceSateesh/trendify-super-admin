import React, { useEffect, useRef } from 'react';
import { GoPencil } from "react-icons/go";
import { BsEye } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import '../../styles/ui/ListTable.css'

const ListTable = ({ dataColumn, dataRow, onBottomScroll }) => {
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = tableContainerRef.current;
      if (container) {
        const bottom = container.scrollHeight - container.scrollTop === container.clientHeight;
        if (bottom) {
          onBottomScroll();
        }
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onBottomScroll]);

  return (
    <div className="ListTable" ref={tableContainerRef} style={{ overflowY: 'auto', maxHeight: window.innerHeight }}>
      <table>
        <thead>
          <tr>
            {dataColumn.map((e, i) => {
              return (<th key={i}>{e.name}</th>)
            })}
          </tr>
        </thead>
        {
          dataRow.length !== 0 ? (
            <tbody>
              {dataRow?.map((e, i) => {
                return (<tr key={i}>
                  <td>{i + 1}</td>
                  <td><div className="imageBox"><img src={e.img} alt="" /></div></td>
                  <td>{e.name}</td>
                  <td>{e.sellerId}</td>
                  <td>{e.category}</td>
                  <td className={`status ${e.status}`}>{e.status}</td>
                  {e.reason ? <td>{e.reason}</td> : ''}
                  <td className='action'><select defaultValue={'default'} name="" id="" onChange={e.action}>
                    <option value="default"><GoPencil /> Action</option>
                    <option value=""><GoPencil /> Confirm Seller</option>
                    <option value=""><BsEye /> View Seller </option>
                    <option value=""><AiOutlineDelete /> Reject Seller</option>
                  </select></td>
                </tr>)
              })}
            </tbody>
          ) : (
            <p>No Data Found</p>
          )
        }
      </table>
    </div>
  );
}

export default ListTable;
