import React from 'react'

import images from 'https://triplocator.net/api/tours';

const TourismPlaces = ({items}) => {
    return (
        <div>
            <h2>Top Places</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {

                        images.map((images) => {
                        
                            const { thumbnail-image, caption } = images;
                        return (
                              <div className="col-10 col-md-4 mt-5" key={id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={ thumbnail-image } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                           
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">{caption}</span> <span className="number1"></span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>
        </div>
    )
}

export default TourismPlaces;