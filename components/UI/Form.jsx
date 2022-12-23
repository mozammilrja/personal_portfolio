import React,{useState} from "react";
import classes from "../../styles/form.module.css";
import { Spinner } from 'reactstrap';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


const Form = () => {

  const SERVICE_ID = "service_y8rt8pq"
  const TEMPLATE_ID = "template_drnh9vj";
  const USER_ID = "ghV9RutjAdIVmGXkJ";
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        setIsLoading(false) 
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required name='name'/>
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required name='email' />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required name='message'/>
      </div>
      <button className="primary__btn" type="submit">
        {!isLoading ? "Send" : <> <Spinner size="sm">
        </Spinner>
          <span className="loadin-button">
           Loading...
          </span></>}
      </button>
    </form>
  );
};

export default Form;
