import { Box, Container, Divider, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { DoGet } from "../../apps/services"
import { DeleteNote } from "../deleteNote/DeleteNote"
import { SearchBar } from "../searchBar/SearchBar"
import { ListNotes } from "../listNotes/ListNotes"
import { CircledIconButton } from "../../shared/components/button/Button"
import { ColorFilter } from "../colorFilter/ColorFilter"
import { Add } from "@mui/icons-material"
import { UpdateNote } from "../updateNote/UpdateNote"
import { CreateNote } from "../createNote/CreateNote"

export const MyNotes = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
    const [idToDelete, setIdToDelete] = useState()
    const [idToUpdate, setIdToUpdate] = useState()
    const [datas, setDatas] = useState([])
    const [searchedKeyword, setSearchedKeyWord] = useState('')
    const [selectedColor, setSelectedColor] = useState('All')

    const getNotes = async () => {
        try {
            setIsLoading(true)
            const response = await DoGet({
                url: '/get-notes'
            })
            setDatas(response.data)                
        } catch (error) {
            return error
        } finally {
            setIsLoading(false)
        }
    }

    const filteredDatas = datas.filter(data => {
        const matchesSearchKeyword = data.content.toLowerCase().includes(searchedKeyword.toLowerCase()) || data.updated_at.toLowerCase().includes(searchedKeyword.toLowerCase());
        const matchesSelectedColor = selectedColor === 'All' || data.color === selectedColor;
        return matchesSearchKeyword && matchesSelectedColor;
    }).sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at)
    }).map(data => ({
        id: data.id,
        content: data.content,
        color: data.color,
        updated_at: new Date(data.updated_at).toLocaleString('id-ID', {
                    day: 'numeric', month: 'short', year: 'numeric'
                    })  
    }))

    const handleCreate = () => {
        setIsOpenCreate(!isOpenCreate)
    }

    const handleDelete = (id) => {
        setIdToDelete(id)
        setIsOpenDelete(!isOpenDelete)
    }

    const handleUpdate = (id) => {
        setIdToUpdate(id)
        setIsOpenUpdate(!isOpenUpdate)
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <Box sx={{ flex: 1, display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "sticky", top: 0, height: "100vh", width: "88px", p: "16px" }}>
                <Typography variant="body2" fontWeight="bold">NaNotes</Typography>
                <CircledIconButton handleClick={handleCreate} Icon={Add} size={"small"} buttonStyle={{ marginTop: "36px", marginBottom: "28px" }}/>
                <ColorFilter handleColor={(color) => setSelectedColor(color)} currentColor={selectedColor}/>
            </Box>
            <Divider orientation="vertical" flexItem/>

            <Container sx={{ flex: 1, display: "flex", flexDirection: "column", p: "12px 16px", overflowY: "auto", maxHeight: "100vh" }}>
                <SearchBar handleChange={(e) => setSearchedKeyWord(e)} value={searchedKeyword}/>
                <Typography variant="h4" sx={{ marginY: "24px", fontWeight: "bold" }}>Notes</Typography>
                <ListNotes isLoading={isLoading} datas={filteredDatas} handleDelete={handleDelete} handleUpdate={handleUpdate}/>                
            </Container>
            { 
                isOpenCreate && <CreateNote isOpen={isOpenCreate} handleClose={handleCreate} handleUpdate={getNotes} />
            }
            { 
                isOpenDelete && <DeleteNote isOpen={isOpenDelete} id={idToDelete} handleClose={() => setIsOpenDelete(!isOpenDelete)} handleUpdate={getNotes} />
            }
            { 
                isOpenUpdate && <UpdateNote isOpen={isOpenUpdate} id={idToUpdate} data={datas.find((data) => data.id == idToUpdate)} handleClose={() => setIsOpenUpdate(!isOpenUpdate)} handleUpdate={getNotes} />
            }
        </Box>
    )
}