import React from 'react'


const BookingGrid = () => {
    return (
        <div>
      
            <div class="container">
  <div class="row">
    
    <div class="col">
    <div className="form-control">
                    <label> From </label>
                    <input type="text" className="form-control" placeholder="Strating place" />
                </div>


    </div>
    <div class="col">
    <div className="form-control">
                    <label> TO </label>
                    <input type="text" className="form-control" placeholder="Enter place you want to travel" />
                </div>
    </div>
    <div class="col">
    <label for="StartDate">Starting Date</label>
       <input type="date" id="starting date" name="starting date"></input>
    </div>
    <div class="col">
    <label for="StartDate">Return Date</label>
       <input type="date" id="Return date" name="Return date"></input>
    </div>
    <div class="col">
    <button type="button" class="btn btn-primary">Booking</button>
    </div>
  </div>
</div>
            
        </div>
    )
}


export default BookingGrid
