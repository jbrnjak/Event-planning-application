import { useState } from 'react'
 const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
          alert('Molimo dodajte zadatak!')  
          return 
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Dodavanje događaja</label>
                <input type='text' placeholder="Dodaj događaj"
                value ={text} onChange={(e) => setText(e.target.value)}></input>
            </div>

            <div className="form-control">
                <label>Datum i vrijeme</label>
                <input type='text' placeholder="Dodaj datum i vrijeme"
                 value ={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            
            <div className="form-control form-control-check">
                <label>Podsjetnik</label>
                <input type='checkbox' checked={reminder} value ={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Spremi događaj" 
            className="btn btn-block"></input>
            

        </form>
    )
}
export default AddTask;