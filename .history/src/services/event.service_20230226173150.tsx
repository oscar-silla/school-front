import axios from "axios";
import { BaseUrl } from "../constants";

const EventService = {
    getPaginatedEvents: async (page = 0, limit = 0) => {
        return await axios.get(`${BaseUrl}/events?page=${page}&limit=${limit}`)
    }
}

export default EventService;