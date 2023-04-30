import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService} from '../redux/actionCreators';


function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    console.log(item)
    const dispatch = useDispatch();
    const handleChange = evt => { const {name, value} = evt.target; 
                                 // console.log("_______")
                                 // console.log(value);
                                  dispatch(changeServiceField(name, value));    
                                }
    const handleSubmit = evt => { evt.preventDefault(); 
                                  const {name} = evt.target.name.value; 
                                 // console.log(name);
                                  dispatch(addService(item.name, item.price));
                                }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price}/>
            <button type='submit'>Save</button>
        </form>
    );
}

export default ServiceAdd;
