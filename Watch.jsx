import React, { useEffect, useState } from 'react';
import './Laptops.css';
import axios from 'axios';

const Watch = () => {
    const [Watch, setWatch] = useState([]);

    const getWatch = async () => {
        const res = await axios.get("http://localhost:9000/watch");
        const { data } = res;
        setWatch(data);
    };

    useEffect(() => {
        getWatch();
    }, []);

    return (
        <div className='parent'>
            {
                Watch.map((element, index) => {
                    return (
                        <div className='child' key={element.id || index}> 
                            <h3><i className='fa fa-rupee'></i>{element.pcost}</h3>
                            <p>{element.pqty}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Watch;
