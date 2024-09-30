import React from "react";
import { Box, Button, Container, Paper, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import dayjs from "dayjs";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Home = () => {
  const [searchOb, setSearchOb] = useState({
    origin_code: '',
    destination_code: '',
    departure_date: dayjs().format("YYYY-MM-DD"),
    adults: 1,
    limit: 10,
    nocache: 0
  });
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newDate) => {
    if (newDate) {
      setSelectedDate(newDate);
      setSearchOb({...searchOb, departure_date: newDate.format("YYYY-MM-DD") })
    }
    setOpen(false);
  };

  const locations = [
    { key: "JFK", value: "John F. Kennedy International Airport (JFK)" },
    { key: "LAX", value: "Los Angeles International Airport (LAX)" },
    { key: "ORD", value: "O'Hare International Airport (ORD)" },
    { key: "DXB", value: "Dubai International Airport (DXB)" },
    { key: "SIN", value: "Singapore Changi Airport (SIN)" },
    { key: "HND", value: "Tokyo Haneda Airport (HND)" },
    { key: "LHR", value: "London Heathrow Airport (LHR)" },
    { key: "SYD", value: "Sydney Kingsford Smith Airport (SYD)" },
    {
      key: "BOM",
      value: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    },
    { key: "CDG", value: "Charles de Gaulle Airport (CDG)" },
  ];
  const [open, setOpen] = useState(false);
  const selectDate = () => {
    setOpen((prev) => !prev);
  };

  const searchFlights = () => {
    console.log("searchOb : ", searchOb);
  }


  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <h2>Amadeus - Search your iternary</h2>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Item>
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="origin-location-input-label">Origin</InputLabel>
                <Select
                  labelId="origin-location-input-label"
                  id="origin-location"
                  label="Origin"
                  value={searchOb.origin_code}
                  onChange={(e) =>
                    setSearchOb({...searchOb, origin_code: e.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {locations.map((loc) => {
                    return <MenuItem value={loc.key}>{loc.value}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="destination-location-input-label">
                  Destination
                </InputLabel>
                <Select
                  labelId="destination-location-input-label"
                  id="destination-location"
                  label="Destination"
                  value={searchOb.destination_code}
                  onChange={(e) =>
                    setSearchOb({...searchOb, destination_code: e.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {locations.map((loc) => {
                    return <MenuItem value={loc.key}>{loc.value}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <TextField
                  id="adults"
                  label="Adults"
                  variant="outlined"
                  type="number"
                  size="small"
                  value={searchOb.adults}
                  onChange={(e) =>
                    setSearchOb({...searchOb, adults: parseInt(e.target.value) })
                  }
                />
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <Button
                  variant="outlined"
                  startIcon={<DateRangeIcon />}
                  onClick={selectDate}
                >
                  {searchOb.departure_date ?? "Select Date"}
                </Button>

                <Box sx={{ display: "none" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        open={open}
                        onOpen={() => setOpen(true)}
                        label="date-picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        onClose={() => setOpen(false)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <Button variant="contained" color="success" onClick={searchFlights}>
                  Search
                </Button>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
