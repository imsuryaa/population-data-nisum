import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Button,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import ViewListIcon from "@mui/icons-material/ViewList";
import BarChartIcon from "@mui/icons-material/BarChart";
import { styled } from "@mui/material/styles";
import { countryCode, numberWithCommas, columns } from "../lib/utils";
import Link from "next/link";

const CustomToggleButton = styled(ToggleButton)(({ selectedColor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#5e6150",
  },
}));

const PopulationData = ({ populationData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const [view, setView] = useState("table");

  const handleChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const chartSetting = {
    xAxis: [
      {
        label: "Population",
      },
    ],
    height: 500,
    sx: {
      "& .MuiBarElement-root": {
        fill: "#1b1b42",
      },
      "& .MuiChartsLegend-mark": {
        fill: "#1b1b42",
      },
    },
  };
  return (
    <Container>
      <Box sx={{ pt: 3, pb: 3, color: "#fafafa" }}>
        <Typography variant="h4">
          DISCOVER WORLD DATA PRO: INTERACTIVE POPULATION/SPENDING DATA
        </Typography>
      </Box>
      <Button variant="contained" size="medium" sx={{backgroundColor: "#5e6150",}}>
      <Link href="/">&larr; &nbsp; Home</Link>
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          color: "#fafafa",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 1,
          }}
        >
          Toggle your view here
        </Typography>
        <ToggleButtonGroup
          color="secondary"
          value={view}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <CustomToggleButton value="table">
            <ViewListIcon sx={{ color: "#fafafa" }} />
          </CustomToggleButton>
          <CustomToggleButton value="chart">
            <BarChartIcon sx={{ color: "#fafafa" }} />
          </CustomToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ pt: 3, pb: 3 }}>
        {view == "table" ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {populationData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          <TableCell>{data.Nation}</TableCell>
                          <TableCell>{countryCode(data.Nation)}</TableCell>
                          <TableCell>{data.Year}</TableCell>
                          <TableCell>
                            {numberWithCommas(data.Population)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[3, 6, 9]}
              component="div"
              count={populationData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        ) : (
          <Box sx={{ backgroundColor: "#fafafa" }}>
            <BarChart
              dataset={populationData}
              yAxis={[{ scaleType: "band", dataKey: "Year" }]}
              series={[{ dataKey: "Population", label: "US" }]}
              layout="horizontal"
              {...chartSetting}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default PopulationData;
