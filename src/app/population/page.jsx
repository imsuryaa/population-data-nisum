'use client'

import { useEffect, useState } from "react"
import { getPopulationData } from "../lib/actions/population"
import PopulationData from "../components/PopulationData"

export default function PopulationPage() {
    let [populationData, setPopulationData] = useState([])

    useEffect(() => {
        getPopulationData().then((data) => {
            if (data.error) return console.error(data.error)
            setPopulationData(data)
        })
    }, [])
    
    return (
        <div>
            <PopulationData populationData={populationData}/>
        </div>
    )
}