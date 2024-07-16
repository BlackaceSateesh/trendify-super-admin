import React from 'react';
import { RiEqualizerLine } from "react-icons/ri";
import { BsFiletypeCsv } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { PiPrinterThin } from "react-icons/pi";


const DataTableFileButton = () => {
  return (
    <>
      <div className="DataTableFileButton ">
        <button className='filterBtn iconBtn'><RiEqualizerLine /> <span>Filter</span></button>
        <button className='pdfBtn iconBtn'><BsFiletypePdf /></button>
        <button className='csvBtn iconBtn'><BsFiletypeCsv /></button>
        <button className='printBtn iconBtn'><PiPrinterThin /></button>
      </div>
    </>
  )
}

export default DataTableFileButton;
