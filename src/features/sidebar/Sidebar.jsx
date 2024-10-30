import { Box, Divider, Typography } from "@mui/material"
import { CircledIconButton } from "../../shared/components/button/Button"
import { Add } from "@mui/icons-material"

export const Sidebar = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80px", m: "16px" }}>
                <Typography variant="body2" fontWeight="bold">myNotes</Typography>
                <CircledIconButton Icon={Add} size={"small"} buttonStyle={{ marginTop: "36px" }}/>
            </Box>
            <Divider orientation="vertical" flexItem/>
        </>
    )
}