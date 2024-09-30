import React from "react";
import { Box, Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        {/* write the header or title code below */}
        <h2>Amadeus - Search your iternary</h2>


        <Grid container spacing={1}>
          <Grid size={{ xs: 8, md: 10 }}>
            <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
            </Item>
          </Grid>
          <Grid size={{ xs: 4, md: 2 }}>
            <Item>

            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
