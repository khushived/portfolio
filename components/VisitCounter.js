import { useEffect, useState } from 'react';
import siteContent from '../data/siteContent';

export default function VisitCounter() {
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { namespace, key } = siteContent.integrations.visits;
    const sessionKey = 'portfolio_visit_counted';
    const hasCounted = typeof window !== 'undefined' && sessionStorage.getItem(sessionKey) === '1';
    const endpoint = hasCounted
      ? `https://api.countapi.xyz/get/${namespace}/${key}`
      : `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data.value !== 'number') {
          throw new Error('Invalid visit response');
        }
        setVisits(data.value);
        if (!hasCounted) {
          sessionStorage.setItem(sessionKey, '1');
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return null;
  }

  return (
    <span className="text-xs text-gray-300 border border-gray-700 rounded-full px-3 py-1 bg-gray-900/80">
      {visits === null ? 'Loading visits...' : `${visits.toLocaleString()} visits`}
    </span>
  );
}
