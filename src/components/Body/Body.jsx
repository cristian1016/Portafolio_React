import React from 'react'
import './Body.css'

const imgMe = 'https://i.pinimg.com/564x/5d/5f/43/5d5f43c3fe6b294a47fe00182e0c6a05.jpg'
const imgGitHub = 'https://cdn-icons-png.flaticon.com/256/11516/11516219.png'
const imgIntagram = 'https://cdn-icons-png.flaticon.com/256/3955/3955024.png'
const imgLinkedin = 'https://cdn-icons-png.flaticon.com/256/4494/4494497.png'


export const Body = () => {
    return (
        <>
            <div className='content_body'>
                <div className='content-text'>
                    <img id='img_Me' src={imgMe} alt="img about Cristian Pulgarin" />


                    <div className='social_media'>
                        <a id='link_social_media' href="https://github.com/cristian1016" target="_blank"> <img src={imgGitHub} alt="img_GitHub" /></a>
                        <a id='link_social_media' href="https://www.instagram.com/cristiaaan_16/" target="_blank"> <img src={imgIntagram} alt="img instagram" /></a>
                        <a id='link_social_media' href="https://www.linkedin.com/in/cristian-andr%C3%A9s-pulgar%C3%ADn-salgado-31a579235/" target="_blank"><img src={imgLinkedin} alt="img linkedin" /></a>
                    </div>
                </div>

                <div className='content-text'>
                    <h2>Hello</h2>
                    <div id='I_am'>
                        <h1>I'm</h1>
                        <h1 id='name_cristian'>Cristian Pulgarin</h1>
                    </div>

                    <div className='content'>
                        <h2>And I'm </h2>
                        <h2 className='frontEnd'>Full-Stack</h2>
                    </div>

                    <p>My name is Cristian Andres Pulgarin Salgado, I am 18 years old, I was born in Armenia-Quindio on October 16, 2004. In my spare time I like to listen to music and watch videos of any kind. I am studying software analysis and development at sena and at american school way.

                        I have the ability to make coffee-based drinks and "figures" such as lattes, cappuccinos, chocolate, etc. (latte art). I know how to draw, not very well but some of them look good on me, I can stunt on bicycles, I have critical thinking, but usually I don't communicate it.</p>
                </div>

            </div>
        </>
    )
}
