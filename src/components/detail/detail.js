
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Icon from '../icon.png'
import download from '../download.jpg'
import { useState, useEffect } from 'react'
import "./detail.css"



// "-------------------------------------------------------Product Detail-------------------------------------------------------"



export const Detail = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const res = localStorage.getItem("store");
        setData(JSON.parse(res));
        setIsLoading(false);
    }, []);


    return (
        <div className="detail">
            {isLoading && <Spinner size='lg' />}



            <div className="detail-container">
                <div className="detail-image">
                <div>
                        <img src={download} alt="" />
                    </div>
                    <div>
                        <b><i>Product Name :- </i></b>
                        {data.product_name}
                    </div>
                    </div>

                    <table>
                        <tr>
                            <td className="url">
                                <b><i> URL :- </i></b>
                                {data.url}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i> Generic Name :- </i></b>
                                {data.generic_name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Packaging  :- </i></b>
                                {data.packaging}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Serving Size :- </i></b>
                                {data.serving_size}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Energy_100g :- </i></b>
                                {data.energy_100g}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Energy For Fat :- </i></b>
                                {data.energy_from_fat_100g}

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Fat :- </i></b>
                                {data.fat_100g}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Omega_3_fat_100g :- </i></b>
                                {data.omega_3_fat_100g}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Carbohydrates :- </i></b>
                                {data.carbohydrates_100g}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Protein :- </i></b>
                                {data.protein_100g}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b><i>Product Salt :- </i></b>
                                {data.salt_100g}
                            </td>
                        </tr>

                        
                    </table>






                    {/* <table>

                    
                        <tbody>
                            <tr>
                                <td>{data.product_name}</td>
                                <td>{data.packaging}</td>
                                <td>{data.serving_size}</td>
                                <td>{data.energy_100g}</td>
                                <td>{data.energy_from_fat_100g}</td>
                            </tr>
                        </tbody>



                    </table> */}
                
            </div>
        </div>
    )

}