  import { Link } from 'react-router-dom';
  import './royhat.css';
  import { FaChevronLeft } from 'react-icons/fa';
  import { notification } from 'antd';
  import { useState } from 'react';
  import img from "../../img/registerImg.jpg"

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
        description: "Sizga tez orada malumotni javobini aytamiz"
      });
    }

    return (
      <div className='royhat_body'>
        {/* <button className='knopka'>
          <Link to="/">
            <FaChevronLeft />
          </Link>
        </button> */}
        <form method="post" autoComplete="off" name="google-sheet" onSubmit={handleSubmit}>
          <div className='center'>
            <h1 className='royhat-h1'>Ro'yhatdan o'tish</h1>
            <table className='table'>
              <tbody>
                <tr>
                  <td>
                    <input className='inputName'
                      onChange={(e) => setIsm(e.target.value)}
                      value={ism}
                      type="text"
                      name="Ism"
                      placeholder='Ism'
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
                      placeholder='Familya'
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
                      placeholder='Telfon raqam'
                      
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <select className='select-royhat' name="Fan" id="" >
                      <option value="Tanlanmadi">Fanlar</option>
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
          </div>
        </form>
        <div className='registerImg'>
          <img src={img} alt="" />
        </div>
      </div>
    );
  }

  export default Royhat;
