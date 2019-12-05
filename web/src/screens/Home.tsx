import * as React from "react";

import Header from "../components/Header/Header";
import StoryItem from "../components/StoryItem/StoryItem";
import { display } from "styled-system";
import Box from "../components/Box/Box";
import PostItem from "../components/PostItem/PostItem";
import StoryList from "../components/StoryList/StoryList";
import Footer from "../components/Footer/Footer";
import PostList from "../components/PostList/PostList";

const Home = () => (
  <>
    <Header />
    
    <Box
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    overflow="auto hidden">
    <StoryList />
    </Box>

    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column">
      <PostList />
    </Box>


    <Footer />
  
    


  </>
);

export default Home;
