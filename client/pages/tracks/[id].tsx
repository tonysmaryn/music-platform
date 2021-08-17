import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/tracks/comment',
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout title={track.name + ' - ' + track.artist}>
      <Button variant="outlined" onClick={() => router.push('/tracks')}>
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <Image
          src={'http://localhost:5000/' + track.picture}
          width={200}
          height={200}
          alt="Обложка альбома"
        />
        <div>
          <h2>Название трека - {track.name}</h2>
          <h2>Исполнитель - {track.artist}</h2>
          <h2>Прослушиваний - {track.listens}</h2>
        </div>
      </Grid>
      <h2>Текст песни</h2>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <Grid container>
        <TextField label={'Ваше имя'} fullWidth {...username} />
        <TextField
          label={'Комментарий'}
          fullWidth
          multiline
          rows={4}
          {...text}
        />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
