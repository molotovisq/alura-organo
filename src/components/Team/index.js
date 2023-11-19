import Employee from '../Employee'
import './Team.css'

const Time = (props) => {

    const sectionStyle = {
        backgroundColor: props.secondaryColor,
    }
    const titleStyle = {
        borderColor: props.primaryColor,
    }
    return (

        (props.employees.length > 0) && <section className='team' style={sectionStyle}>

            <h3 style={titleStyle}>
                {props.name}
            </h3>
            <div className='employees'>
                {props.employees.map(employee =>
                    <Employee
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        image={employee.image}
                        primaryColor={props.primaryColor}
                    />)}
            </div>
        </section>
    )

}

export default Time