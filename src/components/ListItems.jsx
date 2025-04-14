import trash from '../assets/trash.svg'
import { useState } from "react"

function ListItem(props) {

    const [checked, setChecked] = useState(false)
    function handleChecked(e) {
        if (checked) {
            setChecked(false)
            e.target.checked = false;
        }
        else {
            setChecked(true)
            e.target.checked = true;
        }
    }

    return (
        <>
            <div className='list-item'>
                <div className="content">
                    <input type="checkbox" checked={checked} onChange={(e) => { handleChecked(e) }} />
                    <span className={checked ? "done" : "not-done"} onClick={() => checked ? setChecked(false) : setChecked(true)}>{props.sn}.{props.value}</span>
                </div>
                <div className="actions">
                    <button className='edit-btn' onClick={() => props.edit(props.id)}>{props.editText}</button>
                    <span className='trash' onClick={() => props.removeItem(props.id)}><img src={trash} alt="trash" /></span>
                </div>
            </div>
        </>
    )
}

export default ListItem