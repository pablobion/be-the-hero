import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower} from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile(){
return (
    <div className='profile-container'>
        <header>
            <img src={logoImg} alt='Be the hero'/>
            <span>Bem vinda, Apad</span>
            <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
            <button type='button'>
                <FiPower size={18} color='#E02021'/>
            </button>
        </header>
        <h1>Casos Cadastrados</h1>
        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>
                <strong>DESCRIÇÃO:</strong>
                <p>descrição teste</p>
                <strong>VALOR:</strong>
                <p>R$ 120,00</p>
            </li>
        </ul>
    </div>
)
}