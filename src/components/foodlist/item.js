
import "./item.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner,
     Button ,
    Box,
    Image,
    Badge,
    
} from '@chakra-ui/react';

// "----------------------------------------------------------------Sorting Filtering and data fetching----------------------------------------------------------------"

export const Items = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [favorite, setFavorite] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

      let image = {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShopSyISCHO1_3QnYo8qHeUFqQtIzwAHZ2Dg&usqp=CAU"
      }

    useEffect(() => {
        const res = axios.get("http://localhost:8080/data");
        res.then(res => {
            setItems(res.data);
           
            setIsLoading(false);
        });

    }, []);

  const handleClick = (e) => {
    const res = e.target.value;
    localStorage.setItem("store", JSON.stringify(items[res]));
    window.location.href = "/detail";
  }



  const handleSort = (e) => {
    const sort = e.target.value;
    if(sort === "AZ"){
        let res = items.sort((a,b)=>{
            return a.product_name.localeCompare(b.product_name);
        });

        let newData = [...res];
        setItems(newData);
    }else if(sort === "ZA"){
        let res = items.sort((a,b)=>{
            return b.product_name.localeCompare(a.product_name);
        });
       let newData = [...res];
        setItems(newData);
    }
}

    const handleFilter = (e) => {
        const filter = e.target.value;
        if(filter === "P"){
            let res = items.filter((item)=>{
                return item.product_name.startsWith("P");
            });
            let newData = [...res];
            setItems(newData);
        }else if(filter === "D"){
            let res = items.filter((item)=>{
                return item.product_name.startsWith("D");
            });
            let newData = [...res];
            setItems(newData);
        }else if(filter === "F"){
            let res = items.filter((item)=>{
                return item.product_name.startsWith("F");
            });
            let newData = [...res];
            setItems(newData);
        }else if(filter === "H"){
            let res = items.filter((item)=>{
                return item.product_name.startsWith("H");
            });
            let newData = [...res];
            setItems(newData);
        }else if(filter === ""){
            setItems(items);
        }
    }



const handleFavourite = (e) => {

    const res = e.target.value;
    let newData = [...favorite];
    newData.push(items[res]);
    setFavorite(newData);
    localStorage.setItem("fav", JSON.stringify(favorite));

    setIsSuccess(true);
    setIsError(false);
    setTimeout(()=>{
        setIsSuccess(false);
    },2000);

}














    
      



    return (
        <div className="items">

<div className="btn-filter-group">
    <div className="btn-sort">
    <label><i><b>Sort by : </b></i></label>
        
      <select onChange={handleSort}>
        <option value="">Select</option>
        <option value="AZ">Sort By A to Z</option>
        <option value="ZA">Sort By Z to A</option>
      </select>
    </div>

    <div className="btn-filter">
        <label><i><b>Filter by : </b></i></label>
        <select onChange = {handleFilter}>
           
            <option value="">Select</option>
            <option value="P">Starts with P</option>
            <option value="D">Starts with D</option>
            <option value="F">Starts with F</option>
            <option value="E">Starts with H</option>
            </select>
            </div>



    </div>
         

            {isLoading && <Spinner size='lg' />}

            {isError && <p>Error :(</p>}
            {isSuccess && <p>Success!</p>}

<div className="data-container">
{items.map((item, i) => {
        return (
            <div>
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image.src}alt={item.product_name} width="500px" height="60%" />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {item.quantity} quantity
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {item.product_name}
        </Box>

        <Box>
          <b> <i> Generic Name :</i> </b>
          
          {item.generic_name}
         
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {/* {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))} */}
          
          <Button colorScheme='whatsapp' onClick={handleClick} value={i}>More Details</Button>
          <Button colorScheme='red' style={{"marginLeft" : "5px"}} value={i} onClick={handleFavourite}>Add to Favourite </Button>
        </Box>
      </Box>
    </Box>


            </div>
        )
    })
}
</div>



    </div>
    )
}








        
                                  
  

                       
                          
                           

                


                   
            




 



