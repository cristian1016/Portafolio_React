import React from 'react'
import './Project.css'
import { Header } from '../Header/Header'

const img_giphy = 'https://i.pinimg.com/564x/12/25/5a/12255ab62c383f222de78da16ca6598e.jpg'
const img_internet = 'https://i.pinimg.com/564x/8c/33/a4/8c33a44e55ff41b8010229cc06e4f4e1.jpg'
const img_blueasy = 'https://i.pinimg.com/564x/9c/35/90/9c35903306dfbc8e9e6ed22f9a278cfd.jpg'

export const Project = () => {
   
   return (
      <>
      <Header/>
         <div className="container">
            <div className="card">
               <div className="circle">
                  <img id='img_project' src={img_giphy} alt="fond_red" />
               </div>

               <div class="content">
                  <p>this is the consumption of an api with javaScript</p>
                  <a href='https://harmonious-pegasus-635a55.netlify.app' target='_blanck'>Open page</a>
               </div>
            </div>

            <div className="card">
               <div className="circle">
                  <img id='img_project' src={img_internet} alt="fond_red" />
               </div>      

               <div className="content">
                  <p>esta pagina esta creada con html y css que se trata sobre internet</p>
                  <a href='https://cheery-dango-e62c50.netlify.app' target='_blanck' >Open page</a>
               </div>
            </div>

            <div className="card">
               <div className="circle">
                  <img id='img_project' src={img_blueasy} alt="fond_red" />
               </div>

               <div className='content'>
                  <p>This page is created with html and css-grid and is responsive</p>
                  <a href='https://coruscating-dieffenbachia-f024b8.netlify.app' target='_blanck'>Open page</a>
               </div>

            </div>
         </div>



         {/* <div id='cont_project' className='text-3xl flex items-center justify-center h-screen'>
        <h1>PROJECTOS REALIZADOS EN FORMACION</h1>

        <div id='projects'>
          <div className=' text-stone-400  rounded-xl flex items-center justify-center flex-col' id='projects_mine'>

            <a id='img_project' href='https://harmonious-pegasus-635a55.netlify.app' target='_blank'>
              <img src={img_giphy} alt="fond_red" className=' w-full h-72 rounded-t-xl' />
            </a>

            <h1 id='name_project'>Api giphy (JS, HTML, CSS)</h1>
          </div>

          <div className=' text-stone-400  rounded-xl flex items-center justify-center flex-col' id='projects_mine'>

            <a id='img_project' href='https://cheery-dango-e62c50.netlify.app' target='_blank'>
              <img src={img_internet} alt="fond_red" className=' w-full h-72 rounded-t-xl' />
            </a>

            <h1 id='name_project'>Historia de internet (HTML, CSS)</h1>
          </div>


          <div className=' text-stone-400  rounded-xl flex items-center justify-center flex-col' id='projects_mine'>

            <a id='img_project' href='https://cheery-dango-e62c50.netlify.app' target='_blank'>
              <img src={img_blueasy} alt="fond_red" className=' w-full h-72 rounded-t-xl' />
            </a>

            <h1 id='name_project'>Blueasy (grid)</h1>
          </div>
        </div>
      </div> */}
      </>
   )
}
