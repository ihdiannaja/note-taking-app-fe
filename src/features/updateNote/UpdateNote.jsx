import PropTypes from "prop-types"
import { useState } from "react"
import { FormDialog } from "../../shared/components/dialog/Dialog"
import { DoPost } from "../../apps/services"

export const UpdateNote = ({ isOpen, data, handleClose, handleUpdate }) => {
    const [isLoading, setIsLoading] = useState(false)

    const updateNote = async (val) => {
        try {
            setIsLoading(true)
            await DoPost({
                url: "/update-note",
                data: {
                    id: `${data.id}`,
                    content: val.content,
                    color: val.color
                },
            })
            handleUpdate()
        } catch (error) {
            return error
        } finally {
            setIsLoading(false)
            handleClose()
        }
    }

    return (
        <FormDialog
            isOpen={isOpen}
            handleClose={handleClose}
            isLoading={isLoading}
            title={"Note Detail"}
            data={data}
            colorSelection={true}
            handleSubmit={updateNote}
            labelSubmit={"Edit"}
            labelClose={"Cancel"}
            colorSubmit={"success"}
            colorClose={"primary"}
        />
    )
}

UpdateNote.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.any,
    content: PropTypes.any,
    id: PropTypes.any
  }),
  handleClose: PropTypes.func,
  handleUpdate: PropTypes.func,
  id: PropTypes.any,
  isOpen: PropTypes.bool
}
