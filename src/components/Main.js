import React from 'react'
import SocialIcons from '../components/SocialIcons'
import '../styles/Main.css'
import EmailTerms from './EmailTerms'


const Main = () => {

    return (
        <div className="main_block">
            <div className="inner_block">
                <div className='wrapper'>
                    <div className="text_main">
                        <h1>Subscribe to newsletter</h1>
                    </div>
                    <div className="text_secondary">
                        <h2>Subscribe to our newsletter and get 10% discount on pineapple glasses.</h2>
                    </div>
                    <EmailTerms />
                    <SocialIcons />
                </div>
            </div>
        </div >
    )
}

export default Main