import PropTypes from "prop-types"
import { SentimentSatisfiedRounded } from "@mui/icons-material"
import { Box, CircularProgress, Typography } from "@mui/material"
import { ClickableCard } from "../../shared/components/card/Card"

export const ListNotes = ({ isLoading, datas=[], handleDelete, handleUpdate }) => {
    return (
    <Box flex={1} display="flex" flexWrap="wrap" gap="24px" sx={{ paddingBottom: "24px" }}>
        {isLoading ? (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <CircularProgress />
            </Box>
        ) : datas.length === 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", gap: "8px" }}>
                <SentimentSatisfiedRounded/>
                <Typography>Notes are empty. You can add one!</Typography>
            </Box>
        ) : (
            datas.map((data, i) => (
                <ClickableCard key={i} data={data} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            ))
        )}
    </Box>

    )
}
ListNotes.propTypes = {
  datas: PropTypes.array,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  isLoading: PropTypes.bool
}
