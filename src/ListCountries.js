import React, {useState, useEffect} from 'react';
import DetailsWindow from './DetailsWindow';


function ListCountries() {  
    const [countries, setCountries] = useState([]); 
    const [searchValue, setSearchValue] = useState('');
    const [details, setDetails] = useState(null);

    const getCountries = () => {
        fetch(`https://api.covid19api.com/summary`)
            .then(response => response.json())
            .then(response => {  
                setCountries(response.Countries);  
            });
    }

    useEffect(() => {
        getCountries()
    },[])

    const onChangeSearchValue = (e) => { 
        setSearchValue(e.target.value);
    }

    const onFilter = ({Country}) => { 
        if(!searchValue) return true;

        return Country.toUpperCase().startsWith(searchValue.toUpperCase()) 
    }

    return (
        <div className="form-wrap">
            <div className="block_heared">
                <img src="./img/logo.png" alt="" />
                <div><h1 className="statistic">STATISTIC</h1></div>
                <div className="search">
                    <input 
                        type="text" 
                        className="search-field" 
                        placeholder="Search..." 
                        value={searchValue} 
                        onChange={onChangeSearchValue}
                    /> 
                    <img src="./img/search.png" alt="" className="search-icon"></img>
                </div>
            </div>

           <div className="messages-wrapper">
               <div className="header_list">
                   <div className='item-detail1'> 
                        <div className="simbol-number">№</div>
                        <div className="left-name">Country</div> 
                   </div>
                   <div className=''> 
                        <div className="right-name">TotalConfirmed</div>
                   </div>
               </div>
                {countries.filter(onFilter).map((item, index) => {   
                    return (
                    <div key={item.ID} onClick={() => setDetails(item)} className="message">
                        <div className='item-detail2'>  
                            <div className="index ">{index + 1}</div>
                            <div className="name-country">{item.Country}</div>
                        </div>
                        <div className='item-list'>
                            <div className="total-confirmed">{item.TotalConfirmed}</div>
                        </div>
                    </div>)
                })}   
            </div>

           <DetailsWindow 
           onClose={()=>setDetails(null)} 
           details={details}
          />

        </div>
    )

}

export default ListCountries;