import {useState, useEffect} from 'react';
import Icon from   '../icon.png'
import './favourite.css';

// "-------------------------------------------------------Product Favourite List -------------------------------------------------------"

export const Favourite = () => {
const [data,setData] = useState([]);                                                                        
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const res = JSON.parse(localStorage.getItem("fav"));
    setData(res);
}, []);




    




    return (
        <div>
         
       <table>
              <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                    <th>Product Category</th>
                    </tr>
                </thead>
                <tbody className="product-fav">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product_name}</td>
                            <td>{item.generic_name}</td>
                            <td><img src={Icon} alt="product"/></td>
                            <td>{item.creator}</td>
                            <td>{item.code}</td>
                        </tr>
                    ))}
                </tbody>

       </table>
        </div>

    )
}