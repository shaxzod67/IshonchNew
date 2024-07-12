import { Link } from 'react-router-dom';
import './royhat.css';
import { FaChevronLeft } from 'react-icons/fa';
import { notification } from 'antd';
import { useState } from 'react';

const Royhat = () => {
  const [ism, setIsm] = useState('');
  const [familya, setFamilya] = useState('');
  const [telfon, setTelfon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx_GkmVEdAnrglVR0Y65ajJOeo8_qj-LNfR1uLdV3YszKGx8GivQisRZwqaCnSwMkE/exec';
    const form = event.target;
    setIsm('');
    setFamilya('');
    setTelfon('');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => notification.success({ message: "Malumot jo'natildi" }))
      .catch(error => console.error('Error!', error.message));
  }

  const handleClick = () => {
    notification.info({
      message: "Ko'rib chiqilyabdi",
      description: "Siz bilan tez orada bog'lanamiz"
    });
  }

  return (
    <div>
      <button className='knopka'>
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </button>
      <form method="post" autoComplete="off" name="google-sheet" onSubmit={handleSubmit}>
        <center><br /><br />
          <h1>Registration Form</h1><br />
          <table className='table'>
            <tbody>
              <tr>
                
                <td>
                  <input className='inputName'
                    onChange={(e) => setIsm(e.target.value)}
                    value={ism}
                    type="text"
                    name="Ism"
                    placeholder='Ismingiz'
                    required
                  />
                </td>
              </tr>
              <tr>
                
                <td>
                  <input className='inputName'
                    onChange={(e) => setFamilya(e.target.value)}
                    value={familya}
                    type="text"
                    name="Familya"
                    required
                  />
                </td>
              </tr>
              <tr>
                
                <td>
                  <input className='inputName'
                    onChange={(e) => setTelfon(e.target.value)}
                    value={telfon}
                    type="number"
                    name="Telfon"
                    required
                  />
                </td>
              </tr>
              <tr className='fan'>
                <td><b>Fan: </b></td>
                <td className='fanTD'>
                  {/* <input type="radio" name="Fan" value="Kimyo" /><span>Kimyo</span>
                  <input type="radio" name="Fan" value="Biologiya" /><span>Biologiya</span>
                  <input type="radio" name="Fan" value="Matematika" /><span>Matematika</span>
                  <input required type="radio" name="Fan" value="Tarix" /><span>Tarix</span> */}


                  <select name="Fan"  id="">
                    <option value="Kimyo">Kimyo</option>
                    <option value="Biologiya">Biologiya</option>
                    <option value="Tarix">Tarix</option>
                    <option value="Matematika">Matematika</option>
                  </select>
                </td>
              </tr>
            </tbody>
          <div className='fanBtn'>
            <button onClick={handleClick} className='fanButton' type="submit" name="submit" value="Submit">
              Yuborish
            </button>
          </div>
          </table>
        </center>
      </form>
    </div>
  );
}

export default Royhat;
