import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('Currency');
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
       
    <select
    className="alert alert-success"
    name="Currency"
    id="Currency"
    value={selectedCurrency}
    onChange={(event) => changeCurrency(event.target.value)}
  >
    <option selected>Currency</option>
    <option value="£">(£ Pound)</option>
    <option value="₹">(₹ Rupee)</option>
    <option value="€">(€ Euro)</option>
    <option value="$">($ Dollar)</option>
  </select>
    
    );
};
export default Currency;