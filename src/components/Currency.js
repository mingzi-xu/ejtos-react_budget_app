import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

const Currency = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Dollar', value: '$' ,text: "Select"},
        { label: 'Pound', value: '£' },    
        { label: 'Euro', value: '€' },  
        { label: 'Ruppee', value: '₹' },     
   
      ];
    const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })

    }
    const styles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: '#ffffff',
            }
        },
        control: styles => ({ ...styles, backgroundColor: 'lightgreen',width: 200, color: '#ffffff',}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
            ...styles,
            backgroundColor: isSelected ? 'white' : 'lightgreen',
            color: isSelected ? 'black' : 'black',   
            borderColor: data ? 'grey' : 'red',
            
        };
        },
        
        };
    return (
        <div className='app'>
            <Select className="selectSpace"
                styles={styles}
                defaultValue={selectedOption}
                placeholder='Currency(£Pound)'
                onChange={(selectedOption) => changeCurrency(selectedOption.value)}
                options={options}
                formatOptionLabel={option => `${option.value}${option.label} `}
            >
               {options.map((option) => <option value={options.value}>{options.label}</option>)}
  
                </Select>
                
        </div>
    );
};
                

  
export default Currency;
