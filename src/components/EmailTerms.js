import React, { useState } from 'react';
import '../styles/EmailTerms.css';


const EmailTerms = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [tos, setTos] = useState(false);

    const handleSubmit = e => {

        e.preventDefault();
        setError("");
        if (error) {
            console.log("ir errors")
        }

        if (!email) {
            setError("Email address is required");
            return;
        }

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError("Please provide a valid e-mail address");
            return;
        }

        if (email.endsWith(".co")) {
            setError("We are not accepting subscriptions from Colombia emails");
            return;
        }

        if (!tos) {
            setError("You must accept the terms and conditions");
            return;
        }

        setEmail("");
        setTos(false);
    }
    return (
        <div><div className="form_box">
            <form className={(error ? 'search-wrapper cf rederror' : 'search-wrapper cf')} onSubmit={handleSubmit}>
                <div className='input_wrapper'>
                    <input
                        className='input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Type your email address here…' />
                    <button className='aaabbb'>
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="ab" id="eee" d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" fill="#000" />
                        </svg>
                    </button>
                </div>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
            <div className='terms'>
                <svg id="check" className="svgg" width="14" height="13" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L4.70711 10.7071C4.31658 11.0976 3.68342 11.0976 3.29289 10.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L4 8.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="white" />
                </svg>
                <div className='termss'>
                    <input
                        class="checkbox-input"
                        id="tos"
                        type="checkbox"
                        checked={tos}
                        onChange={() => setTos(!tos)} />
                    <label class="checkbox" for="tos">
                        <span className='checkk' >
                            <svg className="check_img" width="12px" height="10px">
                                <use href="#check"></use>
                            </svg>
                        </span>
                        <span className='ub'>I agree to <a href='/#' className='link'>terms of service</a></span>
                    </label>
                </div>
                <div className='hrwrap'>
                    <hr className='hrr' />
                </div>
            </div></div>
    )
}

export default EmailTerms