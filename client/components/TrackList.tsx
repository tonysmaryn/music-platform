import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/system';
import React from 'react';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';

export interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track, index) => (
          <TrackItem key={index} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
