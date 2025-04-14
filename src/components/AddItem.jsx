import ListItem from "./ListItems"
import { useState } from "react"
import list from '../../public/list.png'

function AddItem() {
    const [value, setValue] = useState('')
    const [lists, setList] = useState([])
    const [count, setCount] = useState(0)
    const [editingId, setEditingId] = useState(null)

    const limit = 50
    if (value.length > limit) {
        setValue(value.substring(0, limit))
    }

    function addItem() {
        if (value.trim() === '') return

        const newItem = { id: count, value: value }
        setList([...lists, newItem])
        setCount(count + 1)
        setValue("")
    }

    function removeItem(id) {
        const newList = lists.filter(item => item.id !== id)
        setList(newList)
    }

    function startEditing(id) {
        const item = lists.find(list => list.id === id)
        if (item) {
            setEditingId(id)
            setValue(item.value)
        }
    }

    function saveEdit() {
        const updatedList = lists.map(item =>
            item.id === editingId ? { ...item, value: value } : item
        )
        setList(updatedList)
        setEditingId(null)
        setValue("")
    }

    const isEditing = editingId !== null

    return (
        <>
            <div>
                <h1 className="heading"><img src={list} alt="icon" />To Do List</h1>
            </div>
            <div className="container">
                <div className="input-container">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Enter a task...'
                        autoComplete="off"
                    />
                    <button type="button" onClick={isEditing ? saveEdit : addItem}>
                        {isEditing ? '✓' : '+'}
                    </button>
                </div>
                <p className="char-count">{value.length}/{limit} characters</p>
            </div>
            <div className="list-items">
                {lists.map((list, index) => (
                    <ListItem
                        key={list.id}
                        id={list.id}
                        value={list.value}
                        removeItem={removeItem}
                        sn={index + 1}
                        edit={() => startEditing(list.id)}
                        editText={editingId === list.id ? "Editing..." : "Edit"}
                    />
                ))}
            </div>
        </>
    )
}

export default AddItem
