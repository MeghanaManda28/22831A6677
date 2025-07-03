
import axios from 'axios';

export const logEvent = async (level, message, stack = 'Frontend', pkg = 'page') => {
  try {
    await axios.post('http://20.244.56.144/evaluation-service/logs', {
      stack,
      level,
      package: pkg,
      message,
    }, {
      headers: {
        Authorization: 'Bearer PbmVAT', // Replace with your real access token
      },
    });
  } catch (err) {
    console.error('Logging failed:', err.message);
  }
};
