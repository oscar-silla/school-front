import axios from "axios";
import { BaseUrl } from "../constants";

const EventService = {
    getPaginatedEvents: async (page = 0, limit = 0) => {
        return await axios.get(`${BaseUrl}/events?page=${page}&limit=${limit}`)
        .then(res => res.data)
        .catch(() => []);
    }
}

export default EventService;