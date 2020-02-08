import React, {useState, useEffect} from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
import Navbar from '../components/NavBar';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

export default function FriendTimeline(props){

    const [data, setData] = useState('');

    const fetchData = async () => {
        let friend = props.location.query;
        try {
          const response = await fetch(`http://127.0.0.1:8000/progressApi/${friend}`, {
            headers: {'Content-Type':'application/json'},
            method: "GET"
          });
          const data = await response.json();
          setData(data);
          console.log(data);
          return data;
        } catch (err) {
          throw err;
        }
      };

    useEffect(() => {
        fetchData();
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
      return (<div>
          <Navbar />
          <Grid direction='column' container alignItems='center' style={{marginTop : '10%'}}>
              <h2>No Timeline Data :( Search for another friend who works!</h2>
          </Grid>
      </div>)
    }
