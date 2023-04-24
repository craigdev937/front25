import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
                <section className="data-container">
                    <aside className="address data-container-items">
                        <p className="data-title">ip address</p>
                        <p className="data">123456</p>
                    </aside>
                    <aside className="location data-container-items">
                        <p className="data-title">location</p>
                        <p className="data">City, region, country</p>
                    </aside>
                    <aside className="timezone data-container-items">
                        <p className="data-title">timezone</p>
                        <p className="data">UTC time</p>
                    </aside>
                    <aside className="isp data-container-items">
                        <p className="data-title">isp</p>
                        <p className="data">location</p>
                    </aside>
                </section>
            </header>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </React.Fragment>
    );
};


