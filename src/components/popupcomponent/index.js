import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Date Format
import Moment from "react-moment"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    background: '#0072CE',
    color: 'white',
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: 'white',
  } 
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '30px',
  },
}))(MuiDialogContent);

/*
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'center'
  },
}))(MuiDialogActions);
*/

export default function PopupComponent({
  buttonLabel,
  modalTitle,
  btnClasses,
  btnStartIcon, 
  content, 
  tableHead,
  tableCell,
  /*btn1Label="Yes", 
  btn2Label="No", 
  btn1Func,
  btn2Func, 
  btn1Classes, 
  btn2Classes,*/
  reassignToVal="" 
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ContentTable = (
    <TableContainer>
      <Table size={"large"}>
        <TableHead>
          <TableRow>
            <TableCell className={tableHead}>Approval Date</TableCell>
            <TableCell className={tableHead}>Approver Name</TableCell>
            <TableCell className={tableHead}>Job Title</TableCell>                        
            <TableCell className={tableHead}>Assignee</TableCell>
            <TableCell className={tableHead}>Approver Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row) => (
            <TableRow key={row.id} size={"large"} hover={true}>
              <TableCell className={tableCell}><Moment format="MM/D/YY">{row.approvalDate}</Moment></TableCell>
              <TableCell className={tableCell}>{row.user.userProfile.firstName +" "+ row.user.userProfile.lastName}</TableCell>
              <TableCell className={tableCell}>{row.user.userType.description}</TableCell>              
              <TableCell className={tableCell}>{row.currentAssign}</TableCell>
              <TableCell className={tableCell}>{row.approvalStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} className={btnClasses} startIcon={btnStartIcon}>
        {buttonLabel}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth={'xl'}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {modalTitle}
        </DialogTitle>
        <DialogContent dividers>
          {ContentTable}
        </DialogContent>
        {/*<DialogActions>
          <Button
            className={btn1Classes}
            status={buttonLabel} 
            autoFocus 
            color="primary"
            onClick={(event) =>{
                                  if(buttonLabel!=='Reassign') {
                                    if(btn1Func) btn1Func(event); handleClose();
                                  } else if( reassignToVal!==1) {
                                    if(btn1Func) btn1Func(event); handleClose();
                                  } else {
                                    window.alert("Please select the service provider.")
                                  }
                                }}
            > 
          {btn1Label}
          </Button>
          <Button className={btn2Classes} autoFocus onClick={(event) =>{if(btn2Func) btn2Func(event); handleClose();}} color="primary">
          {btn2Label}
          </Button>
        </DialogActions>*/}
        </Dialog>
    </div>
  );
}
