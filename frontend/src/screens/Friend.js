import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Navbar from "../components/NavBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Redirect, Link } from "react-router-dom";

var token = "";

export default function Friend() {
  const [users, setUsers] = useState("");
  const [fRequest, setfRequest] = useState("");
  const [friends, setFriends] = useState("");

  useEffect(() => {
    getUserList();
    getFriendRequest();
    getFriends();
  }, []);

  const getUserList = () => {
    token = localStorage.getItem("token");
    return fetch("http://localhost:8000/userlist/", { method: "GET" })
      .then(res => res.json())
      .then(res => setUsers(res))
      .catch(err => console.log(err));
  };

  const sendRequest = username => {
    return fetch("http://localhost:8000/connections/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({ requested_to: username })
    }).then(res => console.log(res));
  };

  const getFriendRequest = () => {
    let name = localStorage.getItem("username");
    return fetch(`http://localhost:8000/friendRequest/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setfRequest(res))
      .catch(err => console.log(err));
  };

  const acceptRequest = friend => {
    fetch("http://localhost:8000/friends/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({ requested_to: friend })
    });
  };

  const getFriends = () => {
    fetch("http://localhost:8000/friends/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setFriends(res))
      .catch(err => console.log(err));
  };

  if (users !== "" && fRequest !== "" && friends !== "") {
    return (
      <div>
        <Navbar />
        <Grid container direction="column" alignItems="center">
          <h1>Friend Requests</h1>
          {fRequest.map(f => (
            <Grid direction="row" style={{ margin: 20, marginTop: 20 }}>
              {f.requested_by}
              <Button
                onClick={() => acceptRequest(f.requested_by)}
                variant="contained"
                color="primary"
                style={{ marginLeft: 150 }}
              >
                Accept
              </Button>
            </Grid>
          ))}
        </Grid>
        <hr />
        <h1 align='center'>People</h1>
        <Grid container direction="column" alignItems="center">
          {users.map(user => (
            <Grid direction="row" style={{ margin: 20, marginTop: 20 }}>
              {user.username}
              <Button
                onClick={() => sendRequest(user.username)}
                variant="contained"
                color="secondary"
                style={{ marginLeft: 150 }}
              >
                Send Request
              </Button>
            </Grid>
          ))}
        </Grid>
        <hr />
        <Grid direction="column" container alignItems="center">
          <h2>Friend List</h2>
          {friends.map(friend => (
            <Button
              style={{ margin: 10 }}
              variant="outlined"
              color="secondary"
            >
              <Link to={{pathname : '/friend', query: friend.person}}>{friend.person}</Link>
            </Button>
          ))}
        </Grid>
        <div style={{ height: 70 }}></div>
      </div>
    );
  }
  return <Navbar />;
}
