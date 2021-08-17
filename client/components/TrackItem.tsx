import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playerActions } from '../store/ducks/player/actionCreators';
import Image from 'next/image';

export interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { SetActive, PlayAction, PauseAction } = bindActionCreators(
    playerActions,
    dispatch
  );

  const play = (e: React.MouseEvent) => {
    SetActive(track);
    PlayAction();
    e.stopPropagation();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push('/tracks/' + track._id)}
      style={{ cursor: 'pointer' }}
    >
      <IconButton onClick={play}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image
        width={70}
        height={70}
        src={'http://localhost:5000/' + track.picture}
        alt="album image"
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        style={{ marginLeft: 'auto' }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
