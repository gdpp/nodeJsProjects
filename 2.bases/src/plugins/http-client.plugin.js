const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    },
};

module.exports = {
    httpClientPlugin,
};
