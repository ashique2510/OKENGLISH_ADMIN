import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useStateContext } from '../../contexts/ContextProvider';
import moment from 'moment';
import { grey } from '@mui/material/colors';

import RegUserAction from './RegUserAction';

const RegisteredUsers = () => {
 
  const { allUserData } = useStateContext()
  console.log('all user data',allUserData);

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);


  const columns = useMemo(
    () => [
      {
        field: 'profilePicUrl',
        headerName: 'Photo',
        width: 80,
        renderCell: (params) => <Avatar src={params.row.profilePicUrl} />,
        sortable: false,
        filterable: false,
      },
      { field: 'name', headerName: 'Name', width: 140 },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'role',
        headerName: 'Role',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['Normal User', 'Student', 'Tutor'],
        editable: true,
      },
      {
        field: 'isActive',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'createdAt',
        headerName: 'Created Date & Time',
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format('DD/MM/YYYY  - hh:mm A'),
      },
      {
        field: 'date',
        headerName: 'Created At',
        width: 120,
        renderCell: (params) =>
          moment(params.row.createdAt).fromNow(),
      },
      { field: '_id', hide:true },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (params) => (
          <RegUserAction {...{params ,rowId, setRowId}} />
        ),
      },
    ],
    [rowId]
  );



  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      {/* <Header category="Page" title="Registered User" /> */}

      <Typography
        variant="h4"
        component="h3"
        sx={{ textAlign: 'center', mt: 9, mb: 3 }}
      >
       Registered Users
      </Typography>
      <DataGrid
        columns={columns}
        rows={allUserData}
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
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  );
};

export default RegisteredUsers;
