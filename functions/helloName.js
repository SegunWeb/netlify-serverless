const querystring = require('querystring');

exports.handler = async (event, context) => {


    if(event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method error'
        }
    }

    const params = querystring.parse(event.body);
    const name = params.name || 'World';

    return {
        statusCode: 200,
        body: `Hello ${name}`,

    }
}

