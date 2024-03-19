import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Product = () => {
    const image1="https://pictures-nigeria.jijistatic.net/144152373_MTYwMC0xMjAwLWRmMjlhNmZjNGY.webp"
    const image2="https://pictures-nigeria.jijistatic.net/144399836_MTYwMC0yMTM0LWQ4NDJkMGQ1Yjk.webp"
    const image3="https://pictures-nigeria.jijistatic.net/144169015_MTYwMC0xMDI4LTE5OGMwNjA4ODI.webp"
    const image4="https://pictures-nigeria.jijistatic.net/144167535_MTYwMC0xMjAwLTI1MzU3ZTQwMWU.webp"
    const image5="https://pictures-nigeria.jijistatic.net/144162754_MTA4MC03NTQtMDgxNTgxY2Y0Yi0x.webp"
  return (
    <>
    <Navbar/>
    <p>This is Product page</p>
    <div style={{ display: "flex", flexWrap: 'nowrap', gap: "4px"}} >
    <Card image={image1} title="Toyota Avalon" desc="Dummy text" price={5000} />
    <Card image={image2} title="Chevrolet Camaro" desc="Dummy text" price={9000} />
    <Card image={image3} title="Lexus RX 350" desc="Dummy text" price={7000} />
    <Card image={image4} title="Mercedes Benz" desc="Dummy text" price={8000} />
    <Card image={image5} title="Toyota Highlander" desc="Dummy text" price={9000} />
    </div>
    </>
    
  )
}

export default Product