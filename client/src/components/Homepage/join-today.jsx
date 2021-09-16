import React from 'react'
import './style.css'

export default function JoinToDay() {
    return (
        <section>
                <div className = "row">
                    <div className="col-md-6">
                        <h1>Bayer Vietnam supports frontline medical workers in Covid fight</h1>
                        <p>Bayer Vietnam has donated 8,000 self-care packages to health workers in Covid-19 treatment hospitals to alleviate their difficulties in the Covid-19 fight.
Bayer Vietnam (Bayer), in cooperation with the Women's Charity Association of Ho Chi Minh City (WOCA), has provided the self-care products to the Ho Chi Minh City Center for Disease Control.</p>
                        <div className="join_btn" style={{marginTop: '100px'}}><button><a >Read more ...</a></button></div>
                    </div>
                    <div style ={{margin: 'auto'}} className = "col-md-6">
                        <img style={{float: 'right'}} src="https://vcdn-english.vnecdn.net/2021/07/21/Photo-1-3759-1626861167.jpg" alt=" " />
                    </div>
                </div>
            
        </section>
    )
}