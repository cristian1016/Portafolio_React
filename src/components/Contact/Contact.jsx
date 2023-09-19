import React from 'react'
import './Contact.css'
import { Header } from '../Header/Header'


export default function Contact() {
    return (
        <div className='contact'>
        <Header/>
            <section>
                <div className='form'>
                    <div className='registro_center'>
                        <div className='registro'>
                            <div id="registro_titu">
                                <h3>CONTACT ME</h3>
                            </div>

                            <div class="digitar">
                                <input name="nombres" type="text" required />
                                <label for="digitar">Nombre</label>
                            </div>

                            <div class="digitar">

                                <input name="apellidos" type="text" required />
                                <label for="digitar">Apellidos</label>
                            </div>

                            <div class="digitar">
                                <input name="correo" type="email" required />
                                <label for="digitar">Email</label>
                            </div>

                            <div class="digitar">
                                <input name="telefono" type="tel" required />
                                <label>Telefono</label>
                            </div>
                        </div>

                        <div class="buttom">
                            <div id="input_registrar">
                                <input id='registras_boton' type="submit" value="Contact me" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
