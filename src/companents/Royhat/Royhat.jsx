import { Link } from 'react-router-dom';
import './royhat.css'
import { FaChevronLeft } from 'react-icons/fa';


const Royhat = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx_GkmVEdAnrglVR0Y65ajJOeo8_qj-LNfR1uLdV3YszKGx8GivQisRZwqaCnSwMkE/exec';
    const form = event.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("You have successfully submitted."))
      .catch(error => console.error('Error!', error.message));
      
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
          <h1 >Registration Form</h1><br />
          <table className='table'>
            <tbody>
              <tr>
                <td><b>Ism : </b></td>
                <td><input type="text" name="Ism" required /></td>
              </tr>
              <tr>
                <td><b>Familya : </b></td>
                <td><input type="text" name="Familya" required /></td>
              </tr>
              <tr>
                <td><b>Telfon nomer : </b></td>
                <td><input type="number" name="Telfon" required /></td>
              </tr>
              <tr className='fan'>
                <td><b>Fan : </b></td>
                <td className='fanTD'>
                  <input type="radio" name="Fan" value="Kimyo" />Kimyo
                  <input type="radio" name="Fan" value="Biologiya" />Biologiya
                  <input type="radio" name="Fan" value="Matematika" />Matematika
                </td>
              </tr>
              <tr>
                <td>
              <button className='fanButton' type="submit" name="submit" value="Submit" >Yuborish</button>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  );
}
export default Royhat
