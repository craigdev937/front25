import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { IPAddressAPI } from "../../global/IPAddressAPI";
import { LocationMarker } from "../location/LocationMarker";

export const Header = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [searchTerm, setSearchTerm] = 
        React.useState<typeof skipToken | string>(skipToken);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchTerm(inputValue);
    };

    // Conditional Fetching
    const { isLoading, error, data } = 
        IPAddressAPI.useTrackIPQuery(searchTerm);

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
                        placeholder="Search for any IP Address or Domain"
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
                <section className={data === undefined ? "hide" : "info"}>
                    {error ? (
                        <h1>An Error has Occured!</h1>
                    ) : isLoading ? (
                        <h1>Loading...</h1>
                    ) : data ? (
                        <React.Fragment>
                            <aside className="address info__data">
                                <p className="info__title">ip address</p>
                                <p className="data">{data.ip}</p>
                            </aside>
                            <aside className="location info__data">
                                <p className="info__title">location</p>
                                <p className="data">
                                    {data.location.city}, {" "}
                                    {data.location.region},  {" "}
                                    {data.location.country}
                                </p>
                            </aside>
                            <aside className="timezone info__data">
                                <p className="info__title">timezone</p>
                                <p className="data">{data.location.timezone}</p>
                            </aside>
                            <aside className="isp info__data">
                                <p className="info__title">isp</p>
                                <p className="data">{data.isp}</p>
                            </aside>
                        </React.Fragment>
                    ) : null}
                </section>
            </header>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : data ? (
                <MapContainer 
                    center={[data!.location.lat, data!.location.lng]} 
                    zoom={13} 
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker 
                        position={{ 
                            lat: data.location.lat, 
                            lng: data!.location.lng
                        }} 
                    />
                </MapContainer>
            ) : null}
        </React.Fragment>
    );
};


