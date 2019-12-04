import * as React from "react";
import { FaPlus} from 'react-icons/fa';

import Box from "../Box/Box";


const Footer = () => {
    return(
        <Box
        position="fixed"
        left={0}
        bottom={0}
        width="100%"
        backgroundColor='#ededed'
        padding={10}
        
        borderTop={'1px solid #DBDBDB'}>
            <Box
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="space-around">
                <FaPlus />
                <FaPlus />
                <FaPlus />
                <FaPlus />
                <FaPlus />
            </Box>
            
        </Box>
    )
}

export default Footer