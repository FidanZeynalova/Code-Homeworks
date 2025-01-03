import React, { useContext } from 'react'
import { FlowersContext } from '../../../context/FlowersContext'
import { Link } from 'react-router'

function SectionSix() {
    let {flowers} = useContext(FlowersContext)
    return (
        <div className='SectionSix'>
            <div className="container">
                <div className="text">
                    <p style={{ color: ' #f45d96', fontSize: '30px', letterSpacing: '2px' }}>Our flower</p>
                    <h2 style={{ fontSize: '40px' }}>New Arrivals</h2>
                    <ul>
                        <li style={{ border: '2px solid #f45d96', padding: '5px' }}>All</li>
                        <li>Bouqet</li>
                        <li>Flower box</li>
                        <li>Flower shelf</li>
                        <li>Basket of flower</li>
                        <li>Gift combos</li>
                    </ul>
                </div>
                <div className="card-wrapper">
                    {
                        flowers.map((flower)=>(
                            <div className="card">
                        <div className="image">
                            <img src={flower.image} alt="" />
                        </div>
                        <div className="icons">
                            <div className="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></div>
                            <div className="icon">
                                <Link to="basket"  style={{color:"black"}}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></Link>
                            </div>
                            <div className="icon">
                               <Link to="favorites"  style={{color:"black"}}>
                               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg></Link>
                            </div>
                        </div>
                        <span style={{ fontSize: '20px' }}>{flower.name}</span>
                        <h2>{flower.price}$</h2>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionSix
