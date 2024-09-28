import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React from 'react';

function Resume() {
  return (<div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
    <iframe src="https://docs.google.com/gview?url=https://github.com/Manoj-Prabu/resume/raw/main/Resume(v24.06.29).pdf&embedded=true"
      style={{ width: '90%', height: '100%' }}
      title='Resume'></iframe>
    <a href="https://github.com/Manoj-Prabu/resume/raw/main/Resume(v24.06.29).pdf">
      <Button variant='contained' aria-label="clouddownload" color="secondary"
        title='Download Resume'
        sx={{ position: 'absolute', bottom: '20px', right: '20px', height: '60px', width: '60px', borderRadius: '50px' }}>
        <CloudDownloadIcon fontSize='large' />
      </Button>
    </a>
  </div>
  )
}

export default Resume