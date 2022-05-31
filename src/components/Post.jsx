import React  from 'react'
import { useParams, Navigate } from 'react-router-dom'

import Box from '@mui/material/Box';

const Post = () => {

const status = 404

if (status === 404) {
return <Navigate to='/notfound'/>
}
        return (
                <Box sx={{ my: '8em' }}>
                        <h2>Post</h2>
                        <h2>The name is: Esmaeil</h2>
                        <h2>Post</h2>
                        <h2>Post</h2>
                        <h2>Post</h2>
                </Box>
                )
}

export default Post
