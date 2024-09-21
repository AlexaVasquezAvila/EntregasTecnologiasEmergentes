import * as React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { Typography, Stack, LinearProgress, Grid, TextField, Button, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// react-router-dom
import { Link } from 'react-router-dom';

// seleccionar multiples
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

// Lista de asignaturas
const subjects = ['Software Development', 'Machine Learning', 'Mathematics', 'Data Science', 'Artificial Intelligence'];

function getStyles(subject, personName, theme) {
  return {
    fontWeight: personName.includes(subject) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular
  };
}

const TeacherForm = ({ teacher, isEdit }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  if (!teacher && isEdit) {
    return <LinearProgress />;
  }

  return (
    <Stack spacing={3} px={20}>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Basic details
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={teacher.name} />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" defaultValue={teacher.lastName} />
              <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={teacher.email} />
              <TextField id="outlined-basic" label="Phone" variant="outlined" defaultValue={teacher.phone} />
              <TextField id="outlined-basic" label="Address" variant="outlined" defaultValue={teacher.address} />
              <TextField id="outlined-basic" label="Age" variant="outlined" defaultValue={teacher.age} />
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup defaultValue={teacher.gender} row>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Identity
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  defaultValue={teacher.typeDocument}
                  id="demo-simple-select"
                  label="Type Document"
                >
                  <MenuItem value="passport">Passport</MenuItem>
                  <MenuItem value="identification_card">Identification Card</MenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" label="Number document" variant="outlined" defaultValue={teacher.numberDocument} />
              <FormLabel id="demo-simple-select-label">Date of birth</FormLabel>
              <TextField id="outlined-basic" type="date" variant="outlined" placeholder="YY/MM/AAA" defaultValue={teacher.dateBirth} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Subjects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Subjects</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Subjects" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject} value={subject} style={getStyles(subject, personName, theme)}>
                    {subject}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </MainCard>

      <Stack>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item>
            <Button size="small" variant="contained">
              Create
            </Button>
          </Grid>

          <Grid item>
            <Button size="small" variant="outlined" component={Link} to="/teachers">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

TeacherForm.propTypes = {
  teacher: PropTypes.object,
  isEdit: PropTypes.bool
};

const Teacher = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: 0,
  gender: 'male',
  typeDocument: 'passport',
  typeSubject: 'machine_learning',
  numberDocument: '',
  dateBirth: ''
};

TeacherForm.defaultProps = {
  teacher: Teacher,
  isEdit: false
};

export default TeacherForm;
