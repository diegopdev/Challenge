import * as React from "react";



import Box from '../Box/Box';
import Row from "../Row/Row";
import StoryItem from "../StoryItem/StoryItem";



interface Story {
    id: Number,
    userName: String,
    photo: String,
    isPost: boolean
}


const StoryList = () => {
    const state :Story[] = [
        {
        id: 1,
        userName: 'Diego',
        photo: 'https://picsum.photos/id/194/200/300',
        isPost: false
    
        },
        {
        id: 2,
        userName: 'Maria',
        photo: 'https://picsum.photos/id/123/200/300',
        isPost: false

        },
        {
        id: 3,
        userName: 'Rosa',
        photo: 'https://picsum.photos/id/694/200/300',
        isPost: false

        },
        {
        id: 4,
        userName: 'Chico',
        photo: 'https://picsum.photos/id/351/200/300',
        isPost: false
        },
        {
        id: 5,
        userName: 'Diego',
        photo: 'https://picsum.photos/id/194/200/300',
        isPost: false
    
        },
        {
        id: 6,
        userName: 'Maria',
        photo: 'https://picsum.photos/id/123/200/300',
        isPost: false

        },
        {
        id: 7,
        userName: 'Rosa',
        photo: 'https://picsum.photos/id/694/200/300',
        isPost: false

        },
        {
        id: 8,
        userName: 'Chico',
        photo: 'https://picsum.photos/id/351/200/300',
        isPost: false
        }
    ]

    

    const [story, setStory] = React.useState([]);

    React.useEffect(() => {
        setStory(state)
    },[]);

    return(
        <Box 
        padding={20}
        borderBottom={'1px solid #DBDBDB'}
        display="flex"
        flex={1}
        alignContent="center"
        justifyContent="flex-star"
        backgroundColor="#ededed"
        >
            <Row>
                <StoryItem  photo="https://picsum.photos/id/123/200/300" isPost={false} />
                {story.map(story => (
                    <StoryItem  key={String(story.id)} userName={story.userName} photo={story.photo} isPost={story.isPost}/>
                ))}
            </Row>
        </Box>
    )
}

export default StoryList;