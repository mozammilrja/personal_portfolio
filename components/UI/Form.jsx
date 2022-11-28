import React,{useState} from "react";
import classes from "../../styles/form.module.css";
import { Spinner } from 'reactstrap';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


const Form = () => {

  const SERVICE_ID = "service_wc2oq0m"
  const TEMPLATE_ID = "template_91rdw04";
  const USER_ID = "LnfHIMY3JdphyZVux";
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
        <input type="text" placeholder="Your Name" required name='user_name'/>
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required name='user_email' />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required name='user_message'/>
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
