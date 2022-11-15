import * as React from 'react';
import { Box, IconButton, Tooltip , TableRow, TableCell } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
// import { deleteRoom } from '../../../actions/room';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import moment from 'moment'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const TrainersAction = ({ params }) => {

  console.log('parms after click',params);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  


//   const {
//     dispatch,
//     state: { currentUser },
//   } = useValue();
  return (
    <Box>
      <Tooltip title="View tutor details">
        <IconButton
          onClick={handleClickOpen}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit tutor details">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete tutor details">
        <IconButton
        //   onClick={() => deleteRoom(params.row, currentUser, dispatch)}
        >
          <Delete />
        </IconButton>
      </Tooltip>


           
           {/* .........modal start......... */}

 

           <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Tutor Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
           {/* content start */}

               <Box>

                <Box>
                  <img style={{height:'260px', width:'auto'}} src={ params.row.trainerImgUrl } alt="TutorImage"  />
                </Box>

               <TableRow>
            <TableCell colSpan={2}>Tutor Name : </TableCell>
            <TableCell align="right">{ params.row.name }</TableCell>
          </TableRow>
			<TableRow>
            <TableCell colSpan={2}>Email :</TableCell>
            <TableCell align="right">{ params.row.email }</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Phone Number :</TableCell>
            <TableCell align="right">{ params.row.phoneNumber }</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Place :</TableCell>
            <TableCell align="right">{ params.row.place }</TableCell>
          </TableRow>

		      <TableRow>
            <TableCell colSpan={2}>Address :</TableCell>
            <TableCell align="right">{ params.row.address }</TableCell>
          </TableRow>

           <TableRow>
            <TableCell colSpan={2}>Qualification :</TableCell>
            <TableCell align="right">{ params.row.education }</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Experience :</TableCell>
            <TableCell align="right">{ params.row.experience }</TableCell>
          </TableRow>

		  <TableRow>
            <TableCell colSpan={2}>Created Date :</TableCell>
            <TableCell align="right">{moment(params.row.createdAt).format('DD/MM/YYYY')} </TableCell>
          </TableRow>

		     <TableRow>
            <TableCell colSpan={2}>Created Time :</TableCell>
            <TableCell align="right">{moment(params.row.createdAt).format('hh:mm A')} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Ago :</TableCell>
            <TableCell align="right">{moment(params.row.createdAt).fromNow()} </TableCell>
          </TableRow>

               </Box>


           {/* content end */}


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>


          {/* .........modal end......... */}



    </Box>
  );
};

export default TrainersAction;


