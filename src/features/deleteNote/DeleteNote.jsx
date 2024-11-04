import PropTypes from "prop-types"
import { useState } from "react"
import { StdDialog } from "../../shared/components/dialog/Dialog"
import { DoPost } from "../../apps/services"

export const DeleteNote = ({ isOpen, id, handleClose, handleUpdate }) => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteNote = async () => {
        try {
            setIsLoading(true)
            await DoPost({
                url: '/delete-note',
                data: {
                    "id": `${id}`
                }
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
        <StdDialog
            isOpen={isOpen}
            handleClose={handleClose}
            isLoading={isLoading}
            title={"Delete Note"}
            content={`Are you sure you want to delete this note?`}
            handleSubmit={deleteNote}
            labelSubmit={"Delete"}
            labelClose={"Cancel"}
            colorSubmit={"error"}
        />
    )
}
DeleteNote.propTypes = {
  handleClose: PropTypes.any,
  handleUpdate: PropTypes.func,
  id: PropTypes.any,
  isOpen: PropTypes.bool
}
