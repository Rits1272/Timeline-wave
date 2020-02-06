import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "../components/NavBar";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

var token = "";

export default function Timeline(props) {
  token = props.location.state.token;
  let headers = { "Content-Type": "application/json" };
  headers["Authorization"] = `Token ${token}`;
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/progressApi/", {
        headers,
        method: "GET"
      });
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(err => console.log(err));
  }, []);

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 255 + 1);
  }

  const getRandomColor = () => {
    return `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`
  }


  if (data !== "") {
    return (
      <div>
        <Navbar />
        <AddTimelineData />
        <Container style={{ backgroundColor: '#8A2BE2', marginTop: "3%" }}>
          <VerticalTimeline>
            {data.map(data => (
              <VerticalTimelineElement
                key={data.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: getRandomColor(),
                  color: "#fff"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(200, 150, 243)"
                }}
                date={data.date}
                iconStyle={{ background: getRandomColor() }}
              >
                <h3 className="vertical-timeline-element-title">
                  {data.title}
                </h3>

                <p>{data.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </div>
    );
  }
  return <Navbar />;
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
    transform: `translate(-${top}%, -${left}%)`
  };
}


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

  const addData = async () => {   
    await fetch('http://127.0.0.1:8000/progressApi/',
    {
      method : 'POST',
      body : JSON.stringify({
        title : title,
        description : desc,
        user : "test"
      }),
      headers:{
        'Authorization' : `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <AddCircleOutline
        onClick={handleOpen}
        style={{
          position: "absolute",
          right: 20,
          margin: 10,
          fontSize: 45,
          color: "#115293"
        }}
      />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div
          style={{
            position: "absolute",
            right: 20,
            backgroundColor: "white",
            padding: 25
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            margin="normal"
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            margin="normal"
            variant="outlined"
            multiline={true}
            onChange={e => setDesc(e.target.value)}
          />
          <br />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={addData}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
