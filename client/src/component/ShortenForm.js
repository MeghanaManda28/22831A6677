
import { useState } from 'react';
import axios from 'axios';
import { logEvent } from '../api/logger';

export default function ShortenForm({ setShortUrl }) {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/shorten', {
        originalUrl: longUrl,
        customCode: customCode || undefined,
      });
      setShortUrl(res.data.shortUrl);
      logEvent('info', 'Short URL generated successfully');
    } catch (err) {
      logEvent('error', `Shorten failed: ${err.message}`);
      alert('Shortening failed. See console/logs.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Optional custom shortcode"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
