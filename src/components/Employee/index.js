import './Employee.css'

const Employee = ({name, image, role, primaryColor}) => {


    return (
        <div className='employee'>
            <div className='header' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='employee-footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )

}

export default Employee