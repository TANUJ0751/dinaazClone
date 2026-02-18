import React from 'react';
import Sty_form from './Form.module.css';
import AnimatedButton from './AnimatedButton';

const ConsultationForm = () => {
    return (
        <div className={Sty_form.sty_form_container}>
            <form className={Sty_form.sty_form_wrapper}>

                <div className={Sty_form.sty_form_group}>
                    <label className={Sty_form.sty_form_label}>Full Name</label>
                    <input
                        className={Sty_form.sty_form_input}
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>

               
                <div className={`${Sty_form.sty_form_group} ${Sty_form.sty_form_active}`}>
                    <label className={Sty_form.sty_form_label}>Phone Number</label>
                    <input
                        className={Sty_form.sty_form_input}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className={Sty_form.sty_form_group}>
                    <label className={Sty_form.sty_form_label}>Email ID</label>
                    <input
                        className={Sty_form.sty_form_input}
                        type="email"
                        placeholder="Enter your email ID"
                    />
                </div>

                {/* <div className={Sty_form.sty_form_button_container}>
         <AnimatedButton
         />
        </div> */}

            </form>
        </div>
    );
};

export default ConsultationForm;