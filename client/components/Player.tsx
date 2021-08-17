import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { playerActions } from '../store/ducks/player/actionCreators';
import styles from '../styles/Player.module.scss';
import TrackProgressBar from './TrackProgressBar';

let audio;

const Player = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );

  const dispatch = useDispatch();
  const {
    PlayAction,
    PauseAction,
    SetVolume,
    SetDuration,
    SetCurrentTime,
    SetActive,
  } = bindActionCreators(playerActions, dispatch);

  const play = () => {
    if (pause) {
      PlayAction();
      audio.play();
    } else {
      PauseAction();
      audio.pause();
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        SetDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        SetCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    SetVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    SetCurrentTime(Number(e.target.value));
  };

  if (!active) return null;

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid>
      <TrackProgressBar
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgressBar left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
