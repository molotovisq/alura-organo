import './Formulary.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Formulary = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onEmployeeRegister({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')

    }

    return (
        <section className='formulary'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true}
                    label="Nome"
                    placeholder="Insira o seu nome"
                    val={name}
                    changed={val => setName(val)}
                />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Insira o seu cargo"
                    val={role}
                    changed={val => setRole(val)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Insira o endereço da Imagem"
                    val={image}
                    changed={val => setImage(val)}
                />
                <Dropdown
                    mandatory={true}
                    label="Times"
                    itens={props.teams}
                    val={team}
                    changed={val => setTeam(val)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>

    )

}

export default Formulary