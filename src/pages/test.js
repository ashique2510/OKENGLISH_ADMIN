import React from 'react';

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

function Trainers() {
  const { allTutors } = useStateContext();

  const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.trainerImgUrl}
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
      <p
        style={{ background: props.StatusBg }}
        className="rounded-full h-3 w-3"
      />
      <p>{props.Status}</p>
    </div>
  );

  const customersGrid = [
    { type: 'checkbox', width: '50' },
    {
      headerText: 'Name',
      width: '150',
      template: customerGridImage,
      textAlign: 'Center',
    },
    { field: 'email', headerText: 'Email', width: '150', textAlign: 'Center' },
    { field: 'place', headerText: 'Place', width: '100', textAlign: 'Center' },
    {
      field: 'phoneNumber',
      headerText: 'Phone Number',
      width: '100',
      textAlign: 'Center',
    },
    {
      field: 'address',
      headerText: 'Address',
      width: '100',
      textAlign: 'Center',
    },
    {
      field: 'education',
      headerText: 'Education',
      width: '100',
      textAlign: 'Center',
    },
    {
      field: 'experience',
      headerText: 'Experience',
      width: '100',
      textAlign: 'Center',
    },

    // { field: 'Status',
    //   headerText: 'Status',
    //   width: '130',
    //   format: 'yMd',
    //   textAlign: 'Center',
    //   template: customerGridStatus },
    // {
    //   field: 'Weeks',
    //   headerText: 'Weeks',
    //   width: '100',
    //   format: 'C2',
    //   textAlign: 'Center' },
    // { field: 'Budget',
    //   headerText: 'Budget',
    //   width: '100',
    //   format: 'yMd',
    //   textAlign: 'Center' },

    {
      field: 'createdAt',
      headerText: 'Created Date',
      width: '150',
      textAlign: 'Center',
    },
  ];

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete', 'Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Our Trainers" />

      <GridComponent
        dataSource={allTutors}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
}

export default Trainers;
