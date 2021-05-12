import React from 'react'
import BasicTextFields from './login_button'
import Link from '@material-ui/core/Link';
import {Grid, TextField} from "@material-ui/core"
import Lock from "./lock"
import Button from '@material-ui/core/Button';
import { Card, Icon, Image } from 'semantic-ui-react'
import './App.css';
import HelloCGU from './cgu_hello'
import { useState,useEffect } from 'react';

function App() {
  const[name,setName] = useState('');
  const[userName,setUsername] = useState('');
  const[followers,setFollowers] = useState('');
  const[following,setFollowing] = useState('');
  const[repos,setRepos] = useState('');
  const[avatar,setAvatar] = useState('');
  const[userInput,setUserInput] = useState('');
  const[location, setLocation] = useState('');
  const[create,setJoin] = useState('');

  useEffect(()=>{
    fetch("https://api.github.com/users/Ray-0112")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      });
  }, []);

  const setData = ({ 
    name,
    login, 
    followers,
    following,
    public_repos,
    avatar_url,
    created_at
  }) =>{
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setJoin(created_at);
  };

  return (
    <div className="App">

        <Grid container style={{minHeight: '100vh'}}>
          <Grid item xs={1} sm={6}>
            <img 
              src="https://i0.zi.org.tw/kocpc/2021/01/1611477294-5830d062501eb5a2b777dade755489e2.jpg" 
              style={{width:"100%", height:"100%", objectFit:"cover"}} 
              alt="img" 
            />
          </Grid>
          <Grid container item xs={12} sm={6} 
          alignItems="center" direction="column"  justify="space-between"
          style={{padding:10}}>
            <div style={{display:"flex",flexDirection:"column",maxHeight:400,maxWidth:300}}>
              <Grid container justify="center">
                <div className="card">
                <Card>
                  <Image src={avatar} wrapped ui={false} />
                  <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Header>{userName}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{create}</span>
                    </Card.Meta>
                    <Card.Description>
                      HI, I'm Ray.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      {followers} Followers
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      {repos} Repos
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      {following} Followings
                    </a>
                  </Card.Content>
                </Card>
                </div>
              </Grid>
            </div>
      
          </Grid>
        </Grid>
        </div>
      
  );
}

export default App;
