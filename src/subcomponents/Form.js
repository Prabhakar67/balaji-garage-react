

function Form() {
    return (
     
  <div className="uform">

        <form method="post" action="/">

            <input name='name' type="string" minLength="3" maxLength="20" placeholder='Enter your full name'/>
            <input name='number' type="number" placeholder='Mobile Number'/>
            <input name='email' type="email" placeholder='E-mail Address'/>
            <input name='pincode' type="number" placeholder='Area Pin-Code'/>
            <input name='problem' type="string" placeholder='Enter bike problem in brief'/>

        </form>
    </div>
    
    );
}

export default Form;