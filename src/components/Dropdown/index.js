import './Dropdown.css'

const Dropdown = (props) => {

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select
                onChange={event => props.changed(event.target.value)}
                value={props.val}
                required={props.mandatory}
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    )

}

export default Dropdown