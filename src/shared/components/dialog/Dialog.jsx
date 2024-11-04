import PropTypes from "prop-types"
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Colors } from "../../datas/colors"
import { CircledButton } from "../button/Button"

export const StdDialog = ({ isOpen, isLoading, title, content, handleClose, handleSubmit, labelClose, labelSubmit, colorClose, colorSubmit }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
        >
            <DialogTitle sx={{ fontWeight: "bold" }}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText fontSize={"14px"}>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: "8px", m: "0px 16px 16px 0px" }}>
                {
                    labelClose &&
                    <Button 
                        variant="contained" 
                        size="small"
                        color={colorClose} 
                        onClick={handleClose}
                        disabled={isLoading}
                    >{labelClose}</Button>            
                }
                <Button 
                    variant="contained" 
                    size="small"
                    color={colorSubmit} 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    startIcon={isLoading ? <CircularProgress size="12px" color={"inherit"}/> : <></> }
                >{labelSubmit}</Button>
            </DialogActions>
        </Dialog>
    )
}

StdDialog.propTypes = {
  colorClose: PropTypes.any,
  colorSubmit: PropTypes.any,
  content: PropTypes.any,
  handleClose: PropTypes.any,
  handleSubmit: PropTypes.any,
  isLoading: PropTypes.any,
  isOpen: PropTypes.any,
  labelClose: PropTypes.any,
  labelSubmit: PropTypes.any,
  title: PropTypes.any
}

export const FormDialog = ({ isOpen, isLoading, title, data, colorSelection=false, handleClose, handleSubmit, labelClose, labelSubmit, colorClose, colorSubmit }) => {
    const [content, setContent] = useState(data.content)
    const [color, setColor] = useState(data.color)

    const handleColorChange = (val) => {
        setColor(val)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            fullWidth={true}
        >
            <DialogTitle sx={{ fontWeight: "bold" }}>{title}</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    multiline
                    minRows={7}
                    maxRows={7}
                    defaultValue={data.content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Type your note here"
                    variant="outlined"
                    margin="normal"
                    fullWidth={true}
                    slotProps={{ 
                        input: {
                            sx: {
                                fontSize: "12px",
                                color: "#555555",
                                padding: "12px",
                            }
                        }
                    }}
                />  
                <Typography variant="caption" fontWeight={"bold"} sx={{ marginY: "8px" }}>Color</Typography>
                {colorSelection && 
                    <Box display={"flex"} gap={"4px"}>
                    { 
                        Colors.map((bgColor, i) => (
                            <CircledButton key={i} bgColor={bgColor} onClick={() => handleColorChange(bgColor)} width={"24px"} height={"24px"} style={ color == bgColor ? { border: '2px solid #555555' } : { border: '2px solid transparent' }}/>
                        ))
                    }
                    </Box>
                }
            </DialogContent>
            <DialogActions sx={{ p: "8px", m: "0px 16px 16px 0px" }}>
                {
                    labelClose &&
                    <Button 
                        variant="contained" 
                        color={colorClose} 
                        onClick={handleClose}
                        disabled={isLoading}
                    >{labelClose}</Button>            
                }
                <Button 
                    variant="contained" 
                    color={colorSubmit} 
                    onClick={() => handleSubmit({
                        content: content,
                        color: color,
                    })}
                    disabled={isLoading || !(content && color)}
                    startIcon={isLoading ? <CircularProgress size="12px" color={"inherit"}/> : <></> }
                >{labelSubmit}</Button>
            </DialogActions>
        </Dialog>
    )
}

FormDialog.propTypes = {
  color: PropTypes.string,
  colorClose: PropTypes.string,
  colorSelection: PropTypes.bool,
  colorSubmit: PropTypes.string,
  data: PropTypes.any,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  labelClose: PropTypes.string,
  labelSubmit: PropTypes.string,
  title: PropTypes.string
}
