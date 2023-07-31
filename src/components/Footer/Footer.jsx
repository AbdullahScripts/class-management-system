import React, { useEffect, useState } from 'react'
// for date & time
import dayjs from 'dayjs'
const Footer = () => {

const [currentDate,setCurrentDate]=useState('12')

useEffect(()=>{

    setCurrentDate(dayjs().format('YYYY'))

},[])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="text-center p-1 text-white bg-primary" > <h5>&copy; {currentDate} All RIgths reserved by Dev.Mirxa</h5> </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer