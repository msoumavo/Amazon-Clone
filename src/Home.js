import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN_OHL_Teaser_Jup20/unrec/phase2/desktop-_gif-80.gif" alt=""/>

                <div className="home__row">
                    <Product id="123" title='Oreva Roman Figure Round Plastic Analog Wall Clock (28 cm x 28 cm x 3.9 cm, Silver, AQ-1457)' price={29.99} image='https://m.media-amazon.com/images/I/51zmgkw8dNL.__AC_SY200_.jpg' rating={3} />
                    <Product id="456" title='WebelKart by JaipurCrafts Sitting Buddha Idol Statue Showpi' price={15.99} image='https://m.media-amazon.com/images/I/51bni1TI8rL.__AC_SY200_.jpg' rating={4}/>
                </div>
                <div className="home__row">
                    <Product id="789" title="VEYIINA NERO Women's Clutch (P02Silver)" price={10.99} image='https://m.media-amazon.com/images/I/51ESvPCgYBL.__AC_SY200_.jpg' rating={3}/>
                    <Product id="783" title='Daily Dump Compost Maker Remix Powder with added Microbes' price='12.45' image='https://m.media-amazon.com/images/I/51hAESIBQaL.__AC_SY200_.jpg' rating={2}/>
                    <Product id="193" title='Boldfit Heavy Resistance Band for Exercise Stretching Suit' price={20} image='https://m.media-amazon.com/images/I/31mMOiN3gDL.__AC_SY200_.jpg' rating='4'/>
                    </div>
                <div className="home__row">
                    <Product id="823" title='Kurtzy Premium Multipurpose Tailoring Sewing' price={5} image='https://m.media-amazon.com/images/I/51D4wvU-K4L.__AC_SY200_.jpg' rating={3} />
                </div>

            </div>
        </div>
    )
}

export default Home
