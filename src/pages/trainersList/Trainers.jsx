import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useStateContext } from '../../contexts/ContextProvider';
import moment from 'moment';
import { grey } from '@mui/material/colors';

import TrainersAction from './TrainersAction';

const Trainers = () => {
 
  const { allTutors } = useStateContext()
  console.log('all user data',allTutors);

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);


  const columns = useMemo(
    () => [
      {
        field: 'trainerImgUrl',
        headerName: 'Photo',
        width: 80,
        renderCell: (params) => <Avatar src={params.row.trainerImgUrl} />,
        sortable: false,
        filterable: false,
      },
      { field: 'name', headerName: 'Name', width: 120 },
      { field: 'email', headerName: 'Email', width: 120 },
      { field: 'place', headerName: 'Place', width: 70 },
      { field: 'phoneNumber', headerName: 'Phone Number', width: 100 },
      { field: 'address', headerName: 'Address', width: 70 },
      { field: 'education', headerName: 'Education', width: 100 },
      { field: 'experience', headerName: 'Experience', width: 90 },
      // {
      //   field: 'role',
      //   headerName: 'Role',
      //   width: 100,
      //   type: 'singleSelect',
      //   valueOptions: ['Normal User', 'Student', 'Tutor'],
      //   editable: true,
      // },
      // {
      //   field: 'isActive',
      //   headerName: 'Active',
      //   width: 100,
      //   type: 'boolean',
      //   editable: true,
      // },
      {
        field: 'createdAt',
        headerName: 'Created Date & Time',
        width: 180,
        renderCell: (params) =>
          moment(params.row.createdAt).format('DD/MM/YYYY  - hh:mm A'),
      },
      { field: '_id', hide:true },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (params) => (
          <TrainersAction {...{params}} />
        ),
      },
    ],
    []
  );



  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >

      <Typography
        variant="h4"
        component="h3"
        sx={{ textAlign: 'center', mt: 9, mb: 3 }}
      >
       Trainers Details
      </Typography>
      <DataGrid
        columns={columns}
        rows={allTutors}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      />
    </Box>
  );
};

export default Trainers;
