import { generateSeries, sliceSeries } from "./utils";

/** Mock Data */
const MINUTE_INTERVAL = 30;
const series = generateSeries(MINUTE_INTERVAL);

export const DATA = {
  series: sliceSeries(series),
  groomers: [
    {
      groomerName: "Creed Bratton",
      groomerTitle: "Quality Assurance",
      groomerGroup: "",
      breakTime: { start: "12:00 PM", end: "1:00 PM" },
      appointments: [
        {
          type: "available",
          start: "2:00 PM",
          end: "5:00 PM",
          note: ""
        }
      ]
    },
    {
      groomerName: "Kelly Kapur",
      groomerTitle: "Master Stylist",
      groomerGroup: "",
      breakTime: { start: "5:00 PM", end: "7:00 PM" },
      appointments: [
        {
          type: "booked",
          start: "7:30 AM",
          end: "9:00 AM",
          note: ""
        },
        {
          type: "available",
          start: "7:00 AM",
          end: "10:30 AM",
          note: ""
        },
        {
          type: "pending",
          start: "12:00 PM",
          end: "1:30 PM",
          note: ""
        }
      ]
    },
    {
      groomerName: "Michael Scott",
      groomerTitle: "Cat Only",
      groomerGroup: "",
      breakTime: { start: "", end: "" },
      appointments: []
    },
    {
      groomerName: "Toby Flenderson",
      groomerTitle: "Cat Only",
      groomerGroup: "",
      breakTime: { start: "", end: "" },
      appointments: [
        {
          type: "available",
          start: "10:00 AM",
          end: "1:30 PM",
          note: ""
        },
        {
          type: "express",
          start: "4:30 PM",
          end: "9:00 PM",
          note: ""
        }
      ]
    },
    {
      groomerName: "Kevin Malone",
      groomerTitle: "Cat Only",
      groomerGroup: "",
      breakTime: { start: "", end: "" },
      appointments: [
        {
          type: "booked",
          start: "7:30 AM",
          end: "12:30 PM",
          note: ""
        },
        {
          type: "booked",
          start: "7:30 AM",
          end: "12:30 PM",
          note: ""
        },
        {
          type: "booked",
          start: "7:30 AM",
          end: "12:30 PM",
          note: ""
        },
        {
          type: "booked",
          start: "7:30 AM",
          end: "12:30 PM",
          note: ""
        }
      ]
    },
    {
      groomerName: "Standley Hudson",
      groomerTitle: "Cat Only",
      groomerGroup: "",
      breakTime: { start: "", end: "" },
      appointments: [
        {
          type: "pending",
          start: "2:00 PM",
          end: "7:00 PM",
          note: ""
        }
      ]
    }
  ]
};

export const APP_COLORS = {
  black: "#333333",
  white: "#f8f8f8",

  whiteThree: "#dedede",
  brownishGrey: "#6b6b6b",
  warmGrey: "#a19f9f",
  silver: "#bec0c4",
  slateGrey: "#535760",
  pinkishGrey: "#bfbfbf",
  greyish: "#a3a3a3",

  blueyGrey: "rgba(159, 170, 190, 0.21)",
  lightBlueGrey: "rgba(219, 228, 240, 0.22)",

  bloodRed: "#990001",
  tomato: "#e62722",

  aquaMarine: "#1bdfb3",
  tealish: "#23c7a1",
  powderBlue: "#a2c9fa",
  coolBlue: "#4d75c0",
  duskyBlue: "#465f89",
  tealBlue: "#007db4",
  deepSkyBlue: "#1778f2"
};
