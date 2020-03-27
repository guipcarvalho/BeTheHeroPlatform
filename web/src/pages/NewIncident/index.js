import React from 'react'

import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { useState } from 'react'
import api from '../../services/api'

export default function NewIncident(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ngoId = localStorage.getItem('ngo_id')
    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ngoId
                }
            })
            history.push('/profile')
        }
        catch(err) {
            alert('Erro ao cadastrar novo caso, tente novamente')
        }
    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Heroes"/>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}