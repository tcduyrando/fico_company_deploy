import React from 'react'
import './style.css';
import sample from '../../asset/image/sample.png'

export default function Fundraiser() {
    console.log('aaaaaaaaaaaaaaaaaaaa')
    return (
        <section>
            <div className="middle_content">
                <h1 style= {{marginLeft: '120px'}}>Top Fundraiser</h1>
            </div>
            <div className="middle_content">

                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur
                    </p>
                </div>

                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>

            <div className="middle_content">

                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur
                    </p>
                </div>

                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
                <div className="middle_item">
                    <img src={sample} alt=" " />
                    <h3>Lorem ipsum</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
        </section>
    )
}