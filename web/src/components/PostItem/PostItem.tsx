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


const PostItem = ({data}) => {
    console.log(data)
    const { userName, post, photo } = data
    const {curtido, content} = post
    return(
        <Box
        border="solid 1px #DBDBDB"
        maxWidth="500px"
        marginBottom={70}
        >

        <Box 
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="5px 20px"
        >
            <StoryItem userName={userName} photo={photo} isPost/>
            <FaPlus />
        </Box>

            <Image src={post.photo} />
            
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
                <ImageComents src={curtido[0].photo} />
                <Title>
                    Curtido por <span>{` ${curtido[0].name}  `}</span>
                </Title>

                <Title>
                    e <span>{ ` Outras ${curtido.length} pessoas`} </span>
                </Title>
            </Row>

            <Box
            alignItems="center"
            padding="10px 10px 20px 10px">
                <Title>
                <span>{`${userName} `}</span>
                {content}
                </Title>
            </Box>
            
        </Box>
    )
}

export default PostItem