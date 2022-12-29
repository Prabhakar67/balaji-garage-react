

function Form() {
    return (
     
  <div class="uform">

        <form method="post" action="/">

            <input name='name' type="string" minlength="3" maxlength="20" placeholder='Enter your full name'/>
            <input name='number' type="number" placeholder='Mobile Number'/>
            <input name='email' type="email" placeholder='E-mail Address'/>
            <input name='pincode' type="number" placeholder='Area Pin-Code'/>

        </form>
    </div>
    
    );
}

export default Form;