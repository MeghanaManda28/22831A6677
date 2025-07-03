
import { useState } from 'react';
import ShortenForm from '../component/ShortenForm';

export default function HomePage() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <ShortenForm setShortUrl={setShortUrl} />
      {shortUrl && (
        <p className="result">Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a></p>
      )}
    </div>
  );
}
