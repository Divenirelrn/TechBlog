import React from 'react'
import img1 from '@/static/img/home/1.jpg'
import img2 from '@/static/img/home/2.jpg'
import img3 from '@/static/img/home/3.jpg'
import img4 from '@/static/img/home/4.jpg'

const Ads = () => {
    return (
        <div>
            <img src={img1} alt="" style={{width: '100%', marginTop:  '1rem'}}/>
            <img src={img2} alt="" style={{width: '100%', marginTop:  '1rem'}}/>
            <img src={img3} alt="" style={{width: '100%', marginTop:  '1rem'}}/>
            <img src={img4} alt="" style={{width: '100%', marginTop:  '1rem'}}/>
        </div>
)
}

export default Ads;