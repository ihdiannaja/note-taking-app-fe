import { Add, AddCircle, AddCircleOutline, Search, SearchRounded } from "@mui/icons-material"
import { Box, Card, Container, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { CircledIconButton } from "../shared/components/button/Button"
import { Sidebar } from "./sidebar/Sidebar"
import { ClickableCard } from "../shared/components/card/Card"
import { MainContent } from "./mainContent/MainContent"

export const Home = () => {
    return (
        <Box sx={{ flex: 1, display: "flex" }}>
            <Sidebar/>
            <MainContent/>
        </Box>
    )
}
