import { useState } from 'react'
import './Form.css'

const Form = ({ user }) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState('')
    const [role, setRole] = useState('')


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, email, bio, role })
        setName('')
        setEmail('')
        setBio('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={handleName} />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="bio">
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={e => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label htmlFor="">
                    <span>Função do sistema</span>
                    <select name="role" onChange={e => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Form
