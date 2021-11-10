import React from 'react'
import { useState } from 'react'
import Output from './Output'
import './styles.css';

export default function Form(props) {

    const [showOutput, setShowOutput] = useState(false)
    const province = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland & Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
    const [nameState, setName] = useState("def")
    const [emailState, setEmail] = useState("def")
    const [addressState, setAddress] = useState("def")
    const [addressState2, setAddress2] = useState()
    const [cityState, setCity] = useState("def")
    const [postalState, setPostal] = useState("def")
    const [provinceState, setProvince] = useState("def")
    const [checkboxState, setCheckbox] = useState(false)
    

    const readEmail = (event) => {
        setEmail(event.target.value)
    }

    const readName = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    const readAddress = (event) => {
        setAddress(event.target.value)
    }

    const readAddress2 = (event) => {
        setAddress2(event.target.value)
    }

    const readCity = (event) => {
        setCity(event.target.value)
    }

    const readProvince = (event) => {
        setProvince(event.target.value)
    }

    const readPostal = (event) => {
        setPostal(event.target.value)
    }

    const readCheckbox = (event) => {
        setCheckbox(event.target.value)
    }

    const submitData = (x) => {
        x.preventDefault()
        if(checkboxState){
        setShowOutput(true)
        }
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <h2>Data Entry Form</h2>
                

                <label style={{padding: "10px"}} htmlFor="email">Email</label>
                <input type="email" name="email" onChange={readEmail}/>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={readName}/>
                <div>
                <label htmlFor="address">Address</label>
                <input style={{width: "30%"}}type="text" name="address" onChange={readAddress}/>

                <label htmlFor="address2">Address 2</label>
                <input style={{width: "30%" }} type="text" name="address2" onChange={readAddress2}/>
                </div>
                <label htmlForfor="city">City</label>
                <div>
                <input type="text" name="city" onChange={readCity}/>

                <label htmlFor="province">Province</label>
                <select onChange={readProvince}>
                    <option value = "">Select Province</option>
                    {
                    province.map(x => (
                        <option>{x}</option>
                    ))
                    }
                    </select>


                <label htmlFor="postal">Postal Code</label>
                <input name="postal" onChange={readPostal}/>
                </div>
                <input type="checkbox" name="cb" onChange={readCheckbox}/>

                <input type="submit" value="Submit"/>
            </form>
            
            {showOutput && <Output fullname={nameState} email={emailState} address={addressState} city={cityState} province={provinceState} postal={postalState} address2={addressState2}/>}
            
        </div>
        
        
    )
}
