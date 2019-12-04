import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FeaturedRooms extends Component {
  render() {
    const rooms = this.props.rooms;
    return (
      <React.Fragment>
        <h2 className="room-title-center">Rooms</h2>
        <div className="featured-rooms">
          {rooms.map(room => {
            return (
              <div key={room.id} className="rooms-center">
                <p>{room.price}</p>
                <img src={room.src} alt="single" className="img-fluid" />
                <p>{room.title}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
