import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import InfoBox from "./component/InfoBox";

import { baseUrl, fetchApi } from "./utils/fetchApi";
import worldFlag from "./assets/worldflag.jpg";
import SideTable from "./component/SideTable";

function App() {
  const [country, setCountry] = useState("WorldWide");
  const [countriesList, setCountriesList] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [dataTable, setDataTabel] = useState([]);

  useEffect(() => {
    const getCountryInfo = async () => {
      const countryInfoData = await fetchApi(`${baseUrl}/all`);
      //console.log("countryInfo", countryInfoData);
      setCountryInfo(countryInfoData);
    };
    getCountryInfo();
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios.get(`${baseUrl}/countries`);
      const { data } = result;
      //console.log("result", result.data);
      const countryData = data.map((item) => ({
        name: item.country,
        value: item.countryInfo.iso3,
        population: item.population,
        cases: item.cases,
        flag: item.countryInfo.flag,
        active: item.active,
        recovered: item.recovered,
        deaths: item.deaths,
      }));
      setCountriesList(countryData);
      setDataTabel(countryData);
    };
    getCountries();
  }, []);
  //console.log("countriesList => ", countriesList);

  const countrySelect = async (e) => {
    const countryCode = e.target.value;
    console.log("countryCode =>", countryCode);
    setCountry(e.target.value);

    const url =
      countryCode === "WorldWide"
        ? `${baseUrl}/all`
        : `${baseUrl}/countries/${countryCode}`;
    const selectData = await fetchApi(url);
    //console.log("selectData => ", selectData);
    setCountryInfo(selectData);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexwrap: "wrap",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Typography variant="h5" component="div">
              Covid-19-Tracker
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                variant="outlined"
                value={country}
                label="country"
                onChange={countrySelect}
              >
                <MenuItem value="WorldWide">WorldWide</MenuItem>
                {countriesList.map((country, index) => {
                  const { name, value } = country;
                  return (
                    <MenuItem key={index} value={value}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexwrap: "wrap",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
              spacing: "5",
            }}
          >
            <InfoBox
              flag={countryInfo?.countryInfo?.flag || worldFlag}
              title="Population"
              subtitle1="Total Cases"
              todayCases={countryInfo.cases}
            />
            <InfoBox
              flag={countryInfo?.countryInfo?.flag || worldFlag}
              title="Active Cases"
              subtitle1="Today Active Cases"
              subtitle2="Total Active Cases"
              todayCases={countryInfo.todayCases}
              totalCases={countryInfo.active}
            />
            <InfoBox
              flag={countryInfo?.countryInfo?.flag || worldFlag}
              title="Recovered Cases"
              subtitle1="Today Recover Cases"
              subtitle2="Total Recoverd Cases"
              todayCases={countryInfo.todayRecovered}
              totalCases={countryInfo.recovered}
            />
            <InfoBox
              flag={countryInfo?.countryInfo?.flag || worldFlag}
              title="Daeths Cases"
              subtitle1="Today Death Cases"
              subtitle2="Total Death Cases"
              todayCases={countryInfo.todayDeaths}
              totalCases={countryInfo.deaths}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="sidebar">
            <SideTable dataTable={dataTable} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
