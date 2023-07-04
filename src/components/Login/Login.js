import React from 'react';
import './Login.css';

// images
import Bar from '../../images/bar.png';
import Cell from '../../images/cell.png';
import Download from '../../images/download.png';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/Instagram-Logo.png';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className='login-container'>
        <div className='cell-image-container'>
            <img src={Cell} alt='Celulares'/> 
        </div>

        <div className='column-div'>
            <div className='form-container'>
                <img src={Instagram} alt='Instagram logo' id='instagram-logo'/> 

                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Telefone, nome de usuário ou email'/>
                    <input type='password' placeholder='Senha'/>
                    <input type='submit' value='Entrar' id='submit'/>
                </form>

                <div className='transition-div'>
                    <img src={Bar} alt='ilustração de barra'/>
                    <p>OU</p>
                    <img src={Bar} alt='inlustração de barra'/>
                </div>

                <div className='login-with-facebook'>
                    < img src={Facebook} alt='facebook logo' id='facebook-logo'/>
                    <p>Entrar com o Facebook</p>
                </div>
                <p id='forgotten-password'>Esqueceu a senha?</p>
            </div>

            <div className='Register'>
                <p>Não tem uma conta? <span>Cadastre-se</span></p>
            </div>

            <div className='download-app'>
                <p>Obtenha o aplicativo.</p>
                <img src={Download} alt='Play Store e Microsoft Store logo'/>
            </div>

        </div>
    </div>
  )
}

export default Login