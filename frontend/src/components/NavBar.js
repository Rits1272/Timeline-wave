import React from 'react';
import styled from 'styled-components';
import {
    Link
  } from "react-router-dom";
import {ThemeContext} from '../App';

const Cointainer=styled.div`
    height:10vh;
    padding-left:25px;
    padding-right:25px;
    background:${props=>props.backgroundColor || "black"};
    padding-top:20px;
`
const Left=styled.span`
`
const Right =styled.span`
    float:right;
`
const StyledLink=styled(Link)`
    text-decoration:none;
`
const LinkText=styled.h3`
    margin-left:1.0em;
    display:inline-block;
    margin-top:0;
    margin-bottom:0;
    color:${props=>props.color || "white"};
`
class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {backgroundColor,color,name}=this.props.theme;
        return (
            <Cointainer backgroundColor={backgroundColor}>
                <Left>
                    <StyledLink to="/"><LinkText color={color}>Home</LinkText></StyledLink>
                    <StyledLink to="/about"><LinkText color={color}>About</LinkText></StyledLink>
                    <StyledLink to="/hello"><LinkText color={color}>Dropdown</LinkText></StyledLink>
                </Left>
                <Right>
                    <StyledLink to="/users"><LinkText color={color}>Users</LinkText></StyledLink>
                    <span onClick={this.props.changeMode}>
                        <LinkText color={color}>{name==="dark"?"Light":"Dark"}</LinkText>
                    </span>
                </Right>
            </Cointainer>
        )
    }
}
const NavWrapper= (props)=>(
    <ThemeContext.Consumer>
        {value=><NavBar theme={value} changeMode={props.changeMode}></NavBar>}
    </ThemeContext.Consumer>
);

export default NavWrapper;
