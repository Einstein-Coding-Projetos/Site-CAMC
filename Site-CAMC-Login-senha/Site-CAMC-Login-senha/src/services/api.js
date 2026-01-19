export const API_URL = "http://localhost:1337";

/**
 * Helper to fetch data from Strapi
 * @param {string} endpoint
 * @returns {Promise<any>}
 */
async function fetchStrapi(endpoint) {
    try {
        const response = await fetch(`${API_URL}/api/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}

export const getProducts = async () => {
    // populate=* is needed to get images and other relations
    return await fetchStrapi("products?populate=*");
};

export const getEvents = async () => {
    return await fetchStrapi("events?populate=*");
};
