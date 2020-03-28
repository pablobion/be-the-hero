import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
    
<div className='register-container'>
        <div className='content'>
            <section>
                <img src={logoImg} alt='Be the Heroes'></img>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

                <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#E02141'/>
                        Não tenho cadastro
                    </Link>

            </section>
            <form>
                <input placeholder='Nome da ONG'></input>
                <input type='email' placeholder='E-mail'></input>
                <input placeholder='Whatsappp'></input>
                <div className='input-group'>
                    <input placeholder='Cidade'></input>
                    <input placeholder='UF' style={{ width: 80 }}></input>
                </div>
                <button className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
</div>

    )
}