import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationMarker } from "../location/LocationMarker";

export const Header = () => {
    const [inputValue, setInputValue] = React.useState("");

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <header className="header">
                <h1>IP Address Tracker</h1>
                <form 
                    className="header__form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="header__input"
                        type="text" 
                        placeholder="Search for IP Address"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button 
                        type="submit"
                        className="header__arrow"
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </form>
                <section className="info">
                    <aside className="address info__data">
                        <p className="info__title">ip address</p>
                        <p className="data">123456</p>
                    </aside>
                    <aside className="location info__data">
                        <p className="info__title">location</p>
                        <p className="data">City, Region, Country</p>
                    </aside>
                    <aside className="timezone info__data">
                        <p className="info__title">timezone</p>
                        <p className="data">UTC Time</p>
                    </aside>
                    <aside className="isp info__data">
                        <p className="info__title">isp</p>
                        <p className="data">Location</p>
                    </aside>
                </section>
            </header>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker position={{ lat: 51.505, lng: -0.09 }} />
            </MapContainer>
        </React.Fragment>
    );
};


