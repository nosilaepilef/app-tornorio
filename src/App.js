import {FaInstagram, FaFacebookF, FaYoutube} from 'react-icons/fa'
import './styles.css'
import coverphoto from '../src/assets/cover-photo.png'
import profilephoto from '../src/assets/profile-photo.jpg'


function App() {
  return (
    <div className="container">
      <div className="nav">
        <div className="cover">
          <img className="cover-photo" src={coverphoto}/>
        </div>
        <div className="profile">
          <img className="profile-photo" src={profilephoto}/>
        </div>
      </div>

      <div className="content-one">
        <h1>Torno Nardini</h1>
        <span>Modelo Nodus 220</span>
        <div className="social-midia">
          <a target='_blank' href='https://www.instagram.com/senaimt/'><FaInstagram size={20} color='#f1f1f1'/></a>
          <a target='_blank' href='https://www.facebook.com/senaimt/'><FaFacebookF size={20} color='#f1f1f1'/></a>
          <a target='_blank' href='https://www.youtube.com/@senai_mt'><FaYoutube size={20} color='#f1f1f1'/></a>
        </div>
      </div>

      <div className="content-two">
        <a target='_blank' href='#'>EPIs Necessários para Uso</a>
        <a target='_blank' href='#'>Tutorial de Manutenção</a>
        <a target='_blank' href='https://drive.google.com/file/d/13jF4zjGcuQ61w6M3ywLYP54DUbole8QL/view'>Especificações Técnicas</a>
      </div>

      <a className='atention' target='_blank' href='#'>Problemas com o torno?<br/>Avisa-nos agora</a>
    </div>
  );
}

export default App;
