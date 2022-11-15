import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'


import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'


const Bookings = () => {


  const { allBooking } = useStateContext()
  console.log('from bookingggggggggg',allBooking.bookingArray);

 
  const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.profilePicUrl}
        alt="employee"
      />
      <div>
        <p>{props.name}</p>
        {/* <p>{props.CustomerEmail}</p> */}
      </div>
    </div>
  );

  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );

  

  const customersGrid = [
    { type: 'checkbox', width: '50' },
    { headerText: 'Name',
      width: '120',
      template: customerGridImage,
      textAlign: 'Center' },
    { field: 'email',
      headerText: 'Email',
      width: '100',
      textAlign: 'Center' },
    // { field: 'Status',
    //   headerText: 'Status',
    //   width: '130',
    //   format: 'yMd',
    //   textAlign: 'Center',
    //   template: customerGridStatus },
    {
      field: 'radioMonth',
      headerText: 'Duration',
      width: '100',
      // format: 'C2',
      textAlign: 'Center' },
    { field: 'radioDays',
      headerText: 'Days',
      width: '100',
      // format: 'yMd',
      textAlign: 'Center' },
      { field: 'radioMinutes',
      headerText: 'Minutes',
      width: '100',
      // format: 'yMd',
      textAlign: 'Center' },
      { field: 'startDate',
      headerText: 'Start Date',
      width: '100',
      // format: 'yMd',
      textAlign: 'Center' },
      { field: 'radioDays',
      headerText: 'Preferred Time',
      width: '100',
      // format: 'yMd',
      textAlign: 'Center' },
      { field: 'totalAmount',
      headerText: 'Payment',
      width: '100',
      // format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'date',
      headerText: 'Booked Time',
      width: '100',
      textAlign: 'Center' },
  
    // { field: '_id',
    //   headerText: 'Customer ID',
    //   width: '120',
    //   textAlign: 'Center',
    //   isPrimaryKey: true,
    // },
  
  ];


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Bookings' />
      <GridComponent 
      id='gridcomp'
      dataSource={allBooking.bookingArray}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {
          customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))
        }
        </ColumnsDirective>
        <Inject services={ [ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ] } />
      </GridComponent>
      
    </div>
  )
}

export default Bookings