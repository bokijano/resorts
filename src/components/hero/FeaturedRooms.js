import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
                <Link
                  style={{ textDecoration: "none" }}
                  to={room.link}
                >
                  <div className="room-price">
                    <h5>from ${room.price}</h5>
                    <h6>per night</h6>
                  </div>

                  <img src={room.src} alt="single" className="img-fluid" />

                  <p className="room-bads">{room.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
