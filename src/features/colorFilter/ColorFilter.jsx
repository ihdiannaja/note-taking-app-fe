import PropTypes from "prop-types"
import { CircledButton } from "../../shared/components/button/Button"
import { Colors } from "../../shared/datas/colors"

export const ColorFilter = ({ handleColor, currentColor }) => {
    return (
        <>
            <CircledButton bgColor={"#EAF0F9"} onClick={() => {handleColor('All')}} width={"24px"} height={"24px"} style={ currentColor == 'All' ? { border: '2px solid #555555' } : { border: '2px solid transparent' }}/>
            { 
                Colors.map((color, i) => (
                    <CircledButton key={i} bgColor={color} onClick={() => {handleColor(color)}} width={"24px"} height={"24px"} style={ currentColor == color ? { border: '2px solid #555555' } : { border: '2px solid transparent' }}/>
                ))
            }
        </>
    )
}

ColorFilter.propTypes = {
  handleColor: PropTypes.func,
  currentColor: PropTypes.string
}
