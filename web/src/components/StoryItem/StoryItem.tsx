import * as React from "react";

import styled, { css } from 'styled-components'
import { FaPlus} from 'react-icons/fa';

import Box from "../Box/Box";



const Image = styled.img`
    border-radius: 50%;
    width: ${props => (props.isPost ? '40px' : '60px')};
    height: ${props => (props.isPost ? '40px' : '60px')};
    border: solid 2px #FFF;
`

const UserName = styled.h4`
   font-family: 'Arial';
   font-size: 14px;

   ${props =>
    props.isPost &&
    css`
      margin-left: 5px;
      font-size: 12px;
      font-weight: bold;
    `}
`

const StoryItem = ({userName, photo, isPost}) => {
    
    return(
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={ isPost ? 'row': 'column'}
        marginLeft="10px"
        >
        
        <Box
        borderRadius="50%"
        width={isPost ?  50 : 70}
        height={isPost ?  50 : 70}
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage={userName && "linear-gradient(45deg, #ff0, #f00, #90c)"}
        >
            <Image isPost={isPost} src={photo}/>
            {
            !userName && (
                <Box
            borderRadius="50%"
            width={10}
            height={10}
            padding="5px"
            backgroundColor="#000"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            top={20}
            left={-18}   
            >
            <FaPlus color="#FFF" />
        </Box>
            )
        }
            
        </Box>

        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <UserName isPost={isPost} >{userName ? userName : 'Seu story'}</UserName>
        </Box>

        </Box>
    )
}

  

export default StoryItem;