import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
// import { updateStatus } from '../../../actions/user';
// import { useValue } from '../../../context/ContextProvider';
import { updateStatus } from '../../utils/ApiRoutes';
import axios from 'axios';


const RegUserAction = ({ params, rowId, setRowId }) => {
  // const { dispatch } = useValue();
  // console.log('params, rowId',params, rowId);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(async() => {

      
      const { role, isActive, _id } = params.row;
      console.log('params.row',params.row);
      const result = await axios.patch(`${updateStatus}/${_id}`,{role, isActive})
         
      if (result) {
        setSuccess(true);
        setRowId(null);
      }
      setLoading(false);


    }, 2000)
    };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default RegUserAction;

