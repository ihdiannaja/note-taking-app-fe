import PropTypes from "prop-types"
import { Box, IconButton } from "@mui/material"

export const CircledIconButton = ({ handleClick, Icon, size="small", buttonStyle, iconStyle }) => {
    return (
        <IconButton
            onClick={handleClick}
            size={size}
            sx={[{
                backgroundColor: 'black',
                color: 'white',
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                '&:hover': {
                    backgroundColor: '#333',
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                    transform: "scale(1.1)",
                },
            }, buttonStyle]}
        >
            <Icon sx={iconStyle}/>
        </IconButton>            
    )
} 

export const CircledButton = ({ onClick, bgColor = 'primary.main', width = 100, height = 100, style }) => {
    return (
        <Box
            onClick={onClick}
            sx={[{
                bgcolor: bgColor,
                width: width,
                height: height,
                borderRadius: "50%",
                marginBottom: "4px",
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                cursor: "pointer",
                '&:hover': {
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                    transform: "scale(1.1)",
                },
                "&:active": {
                    transform: "scale(1.1)"
                }
            }, style]}
        />
    );
};

CircledButton.propTypes = {
  bgColor: PropTypes.string,
  height: PropTypes.any,
  onClick: PropTypes.any,
  style: PropTypes.any,
  width: PropTypes.any
}

CircledIconButton.propTypes = {
  Icon: PropTypes.any,
  buttonStyle: PropTypes.any,
  handleClick: PropTypes.func,
  iconStyle: PropTypes.any,
  size: PropTypes.string
}
