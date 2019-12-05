import * as React from "react";



import Box from '../Box/Box';
import Row from "../Row/Row";
import StoryItem from "../StoryItem/StoryItem";
import PostItem from "../PostItem/PostItem";



interface Story {
    id: Number,
    userName: String,
    photo: String,
    isPost: boolean
}


const PostList = () => {
    const state = [
        {
        id: 1,
        userName: 'Diego',
        photo: 'https://picsum.photos/id/194/200/300',
        isPost: false,
        post:{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
            photo: 'https://picsum.photos/id/658/700/500',
            comments: [
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/227/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/247/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/297/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                }
            ],
            curtido: [
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                }
            ]
        }
           
    
        },
        {
        id: 2,
        userName: 'Maria',
        photo: 'https://picsum.photos/id/123/200/300',
        isPost: false,
        post:{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
            photo: 'https://picsum.photos/id/237/700/500',
            comments: [
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/227/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/247/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/297/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                }
            ],
            curtido: [
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                }
            ]
        }
        

        },
        {
        id: 3,
        userName: 'Rosa',
        photo: 'https://picsum.photos/id/694/200/300',
        isPost: false,
        post:{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
            photo: 'https://picsum.photos/id/951/700/500',
            comments: [
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/227/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/247/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/297/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                }
            ],
            curtido: [
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                }
            ]
        }

        },
        {
        id: 4,
        userName: 'Chico',
        photo: 'https://picsum.photos/id/351/200/300',
        isPost: false,
        post:{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
            photo: 'https://picsum.photos/id/952/700/500',
            comments: [
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/227/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/247/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/297/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                }
            ],
            curtido: [
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                }
            ]
        }
        },
        {
        id: 5,
        userName: 'Diego',
        photo: 'https://picsum.photos/id/194/200/300',
        isPost: false,
        post:{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
            photo: 'https://picsum.photos/id/957/700/500',
            comments: [
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/227/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/247/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                },
                {
                    name: 'Pedro',
                    photo: 'https://picsum.photos/id/297/700/500',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                }
            ],
            curtido: [
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                },
                {
                    name: 'Thiago',
                    photo: 'https://picsum.photos/id/297/700/500'
                }
            ]
        }
    
        },
        {
            id: 6,
            userName: 'Maria',
            photo: 'https://picsum.photos/id/123/200/300',
            isPost: false,
            post:{
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
                photo: 'https://picsum.photos/id/950/700/500',
                comments: [
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/227/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/247/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/297/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    }
                ],
                curtido: [
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    }
                ]
        }

        },
        {
            id: 7,
            userName: 'Rosa',
            photo: 'https://picsum.photos/id/694/200/300',
            isPost: false,
            post:{
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
                photo: 'https://picsum.photos/id/951/700/500',
                comments: [
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/227/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/247/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/297/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    }
                ],
                curtido: [
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    }
                ]
        }

        },
        {
            id: 8,
            userName: 'Chico',
            photo: 'https://picsum.photos/id/351/200/300',
            isPost: false,
            post:{
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit',
                photo: 'https://picsum.photos/id/977/700/500',
                comments: [
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/227/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/247/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    },
                    {
                        name: 'Pedro',
                        photo: 'https://picsum.photos/id/297/700/500',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis nunc, a imperdiet velit'
                    }
                ],
                curtido: [
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    },
                    {
                        name: 'Thiago',
                        photo: 'https://picsum.photos/id/297/700/500'
                    }
                ]
            }
        }
    ]

    

    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        setPost(state)
    },[]);

    return(
        <Box
        >
           {post.map(post => (
               <PostItem data={post} key={post.id} />
           ))} 
        </Box>
    )
}

export default PostList;