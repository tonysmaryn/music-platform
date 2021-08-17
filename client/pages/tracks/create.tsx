import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';

const Сreate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const next = () => {
    setActiveStep((prev) => prev + 1);
    if (activeStep === 3) {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);
      axios
        .post('http://localhost:5000/tracks', formData)
        .then((resp) => router.push('/tracks'))
        .catch((e) => console.log(e));
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label={'Название трека'}
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label={'Исполнитель'}
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={'Текст песни'}
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузить изображение</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузить песню</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back} disabled={activeStep <= 0}>
          Назад
        </Button>
        <Button onClick={next} disabled={activeStep > 3}>
          {activeStep < 3 ? 'Вперед' : 'Загрузить'}
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Сreate;
