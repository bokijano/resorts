import React, { Component } from "react";
import { FaWineBottle, FaHiking, FaSkiing, FaWifi } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWineBottle />,
        title: "The Best Wines",
        info: "A large selection of local and foreign wines"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Experience the most beautiful hiking moments"
      },
      {
        icon: <FaSkiing />,
        title: "Exciting Ski Slopes",
        info: "Ski on the most beautifull mountain peaks of Serbia"
      },
      {
        icon: <FaWifi />,
        title: "Free Wi-Fi",
        info: "Surf for free in every resort"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
