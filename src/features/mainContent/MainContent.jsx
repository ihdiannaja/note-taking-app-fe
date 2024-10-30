import { SearchRounded } from "@mui/icons-material"
import { Box, Container, InputAdornment, TextField, Typography } from "@mui/material"
import { ClickableCard } from "../../shared/components/card/Card"

export const MainContent = () => {
    const datas = [
        {
            color: "#ffcc5c",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"
        },
        {
            color: "#e3ed8e",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            color: "#96ceb4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            color: "#ffcc5c",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            color: "#e3ed8e",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            color: "#fd9a71",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    return (
        <Container sx={{ flex: 1, m: "12px 16px" }}>
            <TextField
                placeholder="Search"
                fullWidth
                variant="standard"
                slotProps={{
                    input: {
                        disableUnderline: true,
                        startAdornment: <InputAdornment position="start"><SearchRounded fontSize="inherit"/></InputAdornment>,
                        sx: {
                            fontSize: '0.85rem'
                        }
                    },
                }}
            />
            <Typography variant="h4" sx={{ marginY: "24px", fontWeight: "bold" }}>Notes</Typography>
            <Box display="flex" flexWrap="wrap" gap="14px">
                {datas.map(data => (
                    <ClickableCard color={data.color} content={data.content}/>
                ))}
            </Box>
        </Container>
    )
}