import React from 'react'
import Hero from'../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OverPolicy from '../components/OverPolicy'
import NewsLetter from '../components/NewsLetter'

export default function Home() {
    return (
        <div>
            <Hero/>
            <LatestCollections/>
            <BestSeller/>
            <OverPolicy/>
            <NewsLetter/>
        </div>
    )
}
