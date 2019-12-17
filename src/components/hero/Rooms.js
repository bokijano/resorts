import React, { Component } from "react";


export default class singleRooms extends Component {
  render() {
    const rooms = this.props.rooms;
    const roomsImg = this.props.roomsImg;
    return (
      <React.Fragment>
        <h2 className="room-title-center">{this.props.name}</h2>
        <div className="featured-rooms">
          {rooms.map(room => {
            return (
              <div key={room.id} className="rooms-description">
                <img
                  src={roomsImg[room.id - 1]}
                  alt="single"
                  className="img-fluid"
                />

                <h4 className="room-bads">{room.name}</h4>
                <div className="room-description">
                  <h5 className="room-descr">price: ${room.price} per night</h5>
                  <h5 className="room-descr">capacity: {room.capacity}</h5>
                  <h5 className="room-descr">
                    pets: {room.pets ? "Yes" : "No"}
                  </h5>
                  <h5 className="room-descr">
                    breakfast: {room.breakfast ? "Yes" : "No"}
                  </h5>
                  <h5 className="room-descr">
                    internet: {room.internet ? "Yes" : "No"}
                  </h5>
                  <p className="room-descript">{room.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
