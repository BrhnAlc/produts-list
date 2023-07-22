
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
const [ categories, setCategories] = useState();
const getCategories=()=>{

    const C_URL="https://fakestoreapi.com/products/categories"
    axios.get(C_URL).then((res)=>setCategories(res.data))
}

useEffect(() => {
   getCategories();
}, [])

console.log(categories);

  return (
    <div className='text-center'>
        
       <h1>Product List</h1> 
        <div>
        <Button variant="primary">ALL</Button>{' '}
        
        {
          categories.map((item)=>{
            console.log(item);
          })
        }
            
        </div>
        
        
        </div>
  )
}

export default Header;