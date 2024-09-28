import React, { useState, useRef } from 'react';
import style from '../assets/css/Contact.module.css';
import SendIcon from '@mui/icons-material/Send';
// import { Snackbar } from '@mui/material'

interface IContactInfo {
    name?: string
    email?: string
    subject?: string
    message?: string
}

function Contact() {
    const [contactInfo, setContactInfo] = useState<IContactInfo>();
    // const [showToaster, setShowToaster] = useState<boolean>(false);
    // const [notify, setNotify] = useState('');

    const mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // let timeoutId: NodeJS.Timeout | undefined;

    // const debounce = (func: () => void) => {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(() => {
    //         func()
    //     }, 1000);
    // }

    const getInput = (e: any) => {
        // debounce(() => {
        const { name, value } = e.target;
        const _contact: IContactInfo = { ...contactInfo };
        _contact[name as keyof typeof _contact] = value;
        setContactInfo(_contact)
        // })
    }

    const sendMail = async (e: any) => {
        e.preventDefault();
        // let response = await fetch("http://localhost:3001/api/sendMail", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(contactInfo),
        // })
        // if (response.status === 200) {
        //     setNotify('Mail Sent')
        //     setShowToaster(true);
        //     setContactInfo({
        //         name: '',
        //         email: '',
        //         subject: '',
        //         message: '',
        //     })
        // } else {
        //     setNotify('Failed to send mail!');
        //     setShowToaster(true);
        // }
        // setTimeout(() => {
        //     setShowToaster(false);
        //     setNotify('')
        // }, 3000);

        const to = "manojprabucoc@gmail.com";
        const subject = contactInfo?.subject;
        const body = `${contactInfo?.message} \n\n ${contactInfo?.name}`;

        const mailtoLink = `mailto:${to}?subject=${subject}&body=${encodeURIComponent(body)}`;

        // Open the email client
        window.location.href = mailtoLink;
    }

    return <>
        <div id='mContact' style={{ width: "90%", margin: "50px auto" }}>
            <h1>Contact</h1>
            <div style={{ background: '#121315', padding: '20px', borderRadius: '10px', display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <form style={{ minWidth: "75%" }} onSubmit={sendMail}>
                    <fieldset style={{ borderRadius: "4px" }}>
                        <legend style={{ fontSize: "24px" }}>Mail Me</legend>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <input className={style.mailInputs} type="text" name='name' placeholder='Your Name' style={{ flex: 1 }} onChange={getInput} />
                            <input className={style.mailInputs} type="email" name='email' placeholder='Your Email' style={{ flex: 1 }} onChange={getInput} />
                        </div>
                        <input className={style.mailInputs} type="text" name='subject' placeholder='Subject' style={{ width: "-webkit-fill-available" }} onChange={getInput} />
                        <textarea className={style.mailInputs} name='message' placeholder='Message' style={{ width: "-webkit-fill-available", resize: "vertical" }} onChange={getInput} />
                        <button className={style.submitBtn} type="submit"
                            disabled={!(contactInfo?.name && contactInfo?.subject && contactInfo?.message && contactInfo?.email && contactInfo.email.match(mailFormat))}
                        ><span style={{ paddingRight: "5px" }}>Send</span> <SendIcon /></button>
                    </fieldset>
                </form>
            </div>
        </div >
        {/* <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={showToaster}
            message={notify}
        /> */}
    </>
}

export default Contact