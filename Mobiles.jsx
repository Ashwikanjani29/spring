import React, { useEffect, useState } from 'react';
import './Laptops.css';
import axios from 'axios';

const Mobiles = () => {
    const [Mobiles, setMobiles] = useState([]);

    const getMobiles = async () => {
        const res = await axios.get("http://localhost:9000/mobiles");
        const { data } = res;
        setMobiles(data);
    };

    useEffect(() => {
        getMobiles();
    }, []);

    return (
        <div className='parent'>
            {
                Mobiles.map((element, index) => {
                    return (
                        <div className='child' key={element.id || index}>  {/* Here I added key */}
                            <img src={element.pcost} alt="Mobile" />
                            <h3><i className='fa fa-rupee'></i>{element.pcost}</h3>
                            <p>{element.pqty}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Mobiles;
