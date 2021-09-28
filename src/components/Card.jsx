import React from 'react'

function Card({img}) {


    return (
        <>
        {
            img.imgs.map((src, i) => {
                return(
                <div className="card_img">
                    <img src={src.preview_photos[0].urls.regular} alt="" />        
                </div>
                )
            })
        }
    </>
    )
}

export default Card
