import './TextField.css'

const TextField = (props) => {


    const onDigit = (event) => {
        props.changed(event.target.value)
    }


    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.val} onChange={onDigit} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )

}

export default TextField