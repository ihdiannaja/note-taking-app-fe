import PropTypes from "prop-types"
import { Box, Card, Typography } from "@mui/material"
import { CircledIconButton } from "../button/Button"
import { Delete } from "@mui/icons-material"

export const ClickableCard = ({ data, handleUpdate, handleDelete }) => {
    return (
        <Card
            elevation={0}
            sx={{
                bgcolor: data.color,
                width: 205,
                height: 195,
                borderRadius: "12px",
                boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:hover": {
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                    transform: "scale(1.04)",
                },
                cursor: "pointer"
            }}
            onClick={() => {
                handleUpdate(data.id)
            }}
        >
            <Box 
                sx={{ 
                    width: 205,
                    height: 195,    
                    padding: 2, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}
            >
                <Typography variant="body2"
                    sx={{
                        flex: 1,
                        overflow: "hidden",
                        display: '-webkit-box',
                        WebkitLineClamp: 6,  // Limit to 6 lines
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis',
                        whiteSpace: "pre-line"
                    }}
                >
                    {data.content}
                </Typography>
                <Box height="40px" width="100%" display="flex" alignItems="flex-end">
                    <Typography variant="caption" flex={1}>{data.updated_at}</Typography>
                    <CircledIconButton handleClick={(event) => {
                            event.stopPropagation()
                            handleDelete(data.id)
                        }} 
                        Icon={Delete} 
                        buttonStyle={{ width: "24px", height: "24px" }} 
                        iconStyle={{ fontSize: "16px" }}
                    />
                </Box>
            </Box>
        </Card>
    )
}

ClickableCard.propTypes = {
  data: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func
}
