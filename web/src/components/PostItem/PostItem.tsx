import * as React from "react";


import Box from '../Box/Box'
import Row from '../Row/Row'
import { FaPlus} from 'react-icons/fa';
import StoryItem from "../StoryItem/StoryItem";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;   
`

const ImageComents = styled.img`
    width: 30px; 
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
`

const Title = styled.p`
    font-family: 'Arial';
    font-style: initial;
    font-size: 14px;

    span {
        font-weight: bold
    }
`


const PostItem = () => {
    return(
        <Box
        border="solid 1px #DBDBDB"
        maxWidth="500px"
        >

        <Box 
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="5px 20px"
        >
            <StoryItem userName="Diego" isPost/>
            <FaPlus />
        </Box>

            <Image src="http://pm1.narvii.com/6908/41c73b713f30b1194d3551ae3a048c8dcf4221d4r1-810-850v2_uhq.jpg" />
            
            <Row
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="5px 20px">
                <Row
                > 
                <FaPlus />
                <FaPlus />
                <FaPlus />
                </Row>
                
                <Box>
                <FaPlus />
                </Box>
            </Row>

            <Row
            alignItems="center"
            padding="10px">
                <ImageComents src="http://pm1.narvii.com/6908/41c73b713f30b1194d3551ae3a048c8dcf4221d4r1-810-850v2_uhq.jpg" />
                <Title>
                    Curtido por <span>Diego Pereira </span>
                </Title>

                <Title>
                    e <span>Outras 6 pessoas</span>
                </Title>
            </Row>

            <Box
            alignItems="center"
            padding="10px 10px 20px 10px">
                <Title>
                <span>Diego </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim iaculis odio nec condimentum. Donec venenatis magna vitae volutpat sodales. Sed mollis porttitor nulla, ut venenatis massa elementum aliquam. Quisque eget
                nibh auctor, aliquam odio nec, pulvinar velit. Nullam eu dolor pharetra, blandit justo vel, vulputate massa
                </Title>
            </Box>
            
        </Box>
    )
}

export default PostItem