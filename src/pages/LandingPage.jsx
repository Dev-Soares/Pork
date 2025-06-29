import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <section> 
            <div>
                <h1>Conheça o Pork</h1>
                <p>O porquinho ideal para conseguir gerenciar melhor suas economias</p>
                <aside>
                  <img src="C:\Users\berna\OneDrive\Documentos\Pork\Pork\src\assets\image.png" alt="Logo Pork" />
                </aside>
            </div>
        </section>
        <section>
          <Card title= "Como funciona?" text="texto random" imgPath="#"/>
          <Card title="Porque usar o Pork?" text="01:21 e eu nao pensei em como eu vou por um li so nesse card" imgPath= "#"/>
        </section>
        <section>
          <h1>Gostou do nosso trabalho?</h1>
          <p>Registre-se abaixo e deixe esse porquinho bem mais feliz!</p>
            <a href="#"><button>Registrar</button></a>
          <Landingfooter />
          
          
        </section>
    </div>
    
    
  )
}

export default LandingPage