import PropTypes from "prop-types"
import { SearchRounded } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

export const SearchBar = ({ handleChange, value }) => {
    return (
        <TextField
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value)}
            value={value}
            fullWidth={true}
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
    )
}
SearchBar.propTypes = {
    handleChange: PropTypes.any,
    value: PropTypes.any
}
