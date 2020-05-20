import React from 'react';

export default function TrackingEvents({ track }) {
  if (!track || track.length === 0) {
    return null;
  }
  console.log(track);

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <span>{track.code}</span>
          <span>{track.type}</span>
          <span>{track.postedAt}</span>
          <span>{track.updatedAt}</span>
          <span>{track.isDelivered}</span>
          <ul>
            {track.tracks.map((t) => (
              <li key={t.trackedAt} className="list-group-item">
                <span>{t.locale}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
