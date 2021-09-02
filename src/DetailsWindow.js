import React from 'react';

function DetailsWindow({details, onClose}) {  
    
    if(!details) return null;

    const { TotalConfirmed,TotalDeaths,TotalRecovered, Country} = details; 
    
    return (
        <div className="form-wrapper3">
            <div className="details-content">
                <div className="item-block">
                    <h3><b>{Country}</b></h3>
                </div>
                <div>
                    <div className="item">
                        <div className="item-min">
                            <img src="./img/Vector1.png" className="img" alt="" />
                            <p className="text">Total Confirmed</p>
                        </div>
                        <div className="item-min2">
                            <p className="text">{TotalConfirmed}</p> 
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-min">
                            <img src="./img/Vector2.png" className="img" alt="" />
                            <p className="text">Total Deaths</p>
                        </div>
                        <div className="item-min2">
                            <p className="text">{TotalDeaths}</p> 
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-min">
                            <img src="./img/Vector3.png" className="img2" alt="" />
                            <p className="text text2">Total Recovered</p>
                        </div>
                        <div className="item-min2">
                            <p className="text">{TotalRecovered}</p> 
                        </div>
                    </div>
                </div>
                <div className="item-block">
                    <button className="but-width" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    )

}

export default DetailsWindow;
