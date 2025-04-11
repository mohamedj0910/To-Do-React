import ListItem from "./ListItems"
import { useState } from "react"
import list from '../../public/list.png'
function AddItem() {
    const [value, setValue] = useState('')
    const [lists, setList] = useState([])
    const [count, setCount] = useState(0)
    const limit = 50
    if(value.length>limit){
        setValue(value.substring(0,limit))
    }
    function addItem() {
        if(value.trim()==''){
            return
        }



        setCount(count + 1)
        const newItem = { id: count, value: value }
        setList([...lists, newItem])
        setValue("")
    }

    function removeItem(id) {
        const newList = lists.filter((list) => list.id != id)
        setList([...newList])
        setCount(count - 1)
    }

    return (
        <>
            <div>
                <h1 className="heading"><img src={list} alt="icon" />To Do List</h1>
            </div>
            <div className="container">
                <div className="input-container">
                    <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder='Enter a task...' autoComplete="false" />
                    <button type="button" onClick={addItem}>+</button>
                </div>
                <p className="char-count">{value.length}/{limit} characters</p>
            </div>
            <div className="list-items">
                {lists.map((list,index) => (
                    <ListItem
                        key={list.id}
                        id={list.id}
                        value={list.value}
                        removeItem={removeItem}
                        sn={index+1}
                    />
                ))}
            </div>
        </>
    )
}

export default AddItem