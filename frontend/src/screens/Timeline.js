import React, {useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../components/NavBar';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Timeline(){

    const [data, setData] = useState('')

    useEffect(() => {   
        Axios.get('http://127.0.0.1:8000/progressApi/', {
            'Content-Type' : 'application/json',
            'Authorization' : 'Token 73ad69718e39e6278bf8c91e09fd4c3593ef648d1'
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
    })

    const makeTimeline = () => {
        return(
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(200, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
        )
    }

   return(
       <div>
           <Navbar />
           <AddTimelineData />
    <Container style={{backgroundColor: "#dddddd", marginTop : '3%'}}>
            <VerticalTimeline>
                {makeTimeline()}
            </VerticalTimeline>
    </Container>
    </div>
   );
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[3],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

export function AddTimelineData() {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState();
    const [desc, setDesc] = React.useState();
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const addData = () => {
        Axios.post('http://127.0.0.1:8000/progressApi/', {
            title : title,
            description : desc
        })
    }
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={{position : 'absolute', right : 20, backgroundColor : 'white', padding : 25}}>
                    <TextField
                        id='outlined-basic'
                        label='Title'
                        variant='outlined'
                        margin='normal' 
                        onChange = {(e) => setTitle(e.target.value)}
                    /><br />
                     <TextField
                        id='outlined-basic'
                        label='Description'
                        margin='normal'
                        variant='outlined'
                        multiline={true}
                        onChange = {(e) => setDesc(e.target.value)}
                    />
                    <br/><br />
                    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {addData}
          >
            Submit
          </Button>
                        
          </div>
      </Modal>
      </div>
    );
  }