import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "../models/Interfaces";
const URL = "https://geo.ipify.org/api/v2";

export const IPAddressAPI = createApi({
    reducerPath: "IPAddressAPI",
    tagTypes: ["Address"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        trackIP: builder.query<IData, string>({
            query: (inputTerm: string) => ({
                url: `/country,city?apiKey=${process.env.API_KEY}`,
                params: { ipAddress: inputTerm },
                method: "GET"
            }),
            providesTags: (result, error, id) => 
                [{ type: "Address", id: id }],
        })
    })
});



