import React, { useEffect, useState } from 'react';
import './Laptops.css';
import axios from 'axios';

const Laptops = () => {
    const [Laptops, setLaptops] = useState([]);

    const getLaptops = async () => {
        const res = await axios.get("http://localhost:9000/Laptops");
        const { data } = res;
        setLaptops(data);
    };

    useEffect(() => {
        getLaptops();
    }, []);

    return (
        <div className='parent'>
            {
                Laptops.map((element, index) => {
                    return (
                        <div className='child' key={element.id || index}>  {/* Here I added key */}
                            <img src={element.pcost} alt="Laptop" />
                            <h3><i className='fa fa-rupee'></i>{element.pcost}</h3>
                            <p>{element.pqty}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Laptops;
