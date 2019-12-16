import React, { Component } from "react";

export default class singleRooms extends Component {
  render() {
    const rooms = this.props.rooms;
    return (
      <React.Fragment>
        <h2 className="room-title-center">Single Rooms</h2>
        <div className="featured-rooms">
          {rooms.map(room => {
            return (
              <div key={room.id} className="rooms-center">
                <h5>{room.name}</h5>
                <div className="room-price">
                  <h5>${room.price}</h5>
                  <h6>per night</h6>
                </div>

                <img
                  src={room.src[room.id - 1]}
                  alt="single"
                  className="img-fluid"
                />

                <p className="room-bads">{room.name}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
