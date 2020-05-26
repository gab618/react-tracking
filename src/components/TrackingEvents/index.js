import React from 'react';

export default function TrackingEvents({ track }) {
  if (!track || track.length === 0) {
    return null;
  }
  console.log(track);

  return (
    <>
      <h2>Rastreio: {track.code}</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <span>Status: {track.isDelivered ? 'Entregue' : 'Em andamento'}</span>
          <span>
            Última atualização:{' '}
            {new Intl.DateTimeFormat('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(new Date(track.updatedAt))}
          </span>
          <span>
            Data da postagem:{' '}
            {new Intl.DateTimeFormat('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(new Date(track.postedAt))}
          </span>
          <br />
          <table className="table table-striped">
            <tbody>
              {track.tracks.map((t) => (
                <tr key={t.trackedAt}>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    }).format(new Date(t.trackedAt))}
                    <br />
                    {t.locale}
                  </td>
                  <td>
                    {t.status} {t.observation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </li>
      </ul>
    </>
  );
}
