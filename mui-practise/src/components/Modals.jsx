import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const Modals = () => {
   const [open, setOpen] = useState(false)
  return (
    <>
    <div >
        <Button onClick={()=>setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={()=>setOpen(false)}>
            <Box position={'absolute'} top={"50%"} left={"50%"}>
                <Typography  sx={{color:"red", bgcolor:"black"}}>Please Login!!!</Typography>
                <Button  variant='contained'>LogIn</Button>
            </Box>
        </Modal>
    </div>
      
    </>
  )
}

export default Modals
