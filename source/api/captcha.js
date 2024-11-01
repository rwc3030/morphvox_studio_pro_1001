import axios from 'axios';

export const verifyCaptcha = async (token) => {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
            secret: 'YOUR_RECAPTCHA_SECRET_KEY',
            response: token,
        },
    });
    return response.data.success;
};
