import React from 'react'
import './banner.css'
import MainImage from '../../assets/image (2).webp'
import AssetCard1 from '../../assets/image (3).webp'
import AssetCard2 from '../../assets/image (4).webp'
import AssetCard4 from '../../assets/image.webp'
import AssetCard5 from '../../assets/image.png'

 const Banner = () => {
  return (
    <div className="mt-16 banner">
<div className="hero">
    <div className="text">
        <h1>Making Real Estate More Accessible to All</h1>
        <p>Bringing a better and faster means for developers to raise funds,
             while giving individuals investors fractional ownership of real world assets.</p>
        <div className="button-holder">
            <button>Invest</button>
            <button>Develop</button>
        </div>
    </div>
    <div className="main-img">
        <img src={MainImage} alt="" />
        <div className="label">
            <h4>STREAM</h4>
            <p>Lagos, Nigeria</p>
        </div>
    </div>

    
    <div className="asset-card assetcard1">
        <img src={AssetCard1} alt="asset-card" />
    </div>
    <div className="asset-card assetcard2">
        <img src={AssetCard2} alt="asset-card" />
    </div>
    <div className="asset-card assetcard3">
        <img src={AssetCard5} alt="asset-card"  />
    </div>
    <div className="asset-card assetcard4">
        <img src={AssetCard4} alt="asset-card"  />
    </div>


</div>

</div>

  )
}

export default Banner;
