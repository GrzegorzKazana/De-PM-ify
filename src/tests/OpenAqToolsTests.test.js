import {
  formatResults,
  sortResults,
  limitAndFilterCityDuplicates
} from "../api/OpenAq";

describe("testing openaq data pipes", () => {
  it("formats results", () => {
    const rawResults = [
      {
        location: "AM8 Gdańsk Wrzeszcz",
        city: "Gdańsk",
        country: "PL",
        distance: 8274941.141098285,
        measurements: [
          {
            parameter: "pm25",
            value: 10.6072,
            lastUpdated: "2019-04-17T12:00:00.000Z",
            unit: "µg/m³",
            sourceName: "GIOS"
          }
        ],
        coordinates: {
          latitude: 54.38028,
          longitude: 18.620274
        }
      },
      {
        location: "Białystok-Miejska",
        city: "Białystok",
        country: "PL",
        distance: 8600936.900744919,
        measurements: [
          {
            parameter: "pm25",
            value: 11,
            lastUpdated: "2019-04-17T12:00:00.000Z",
            unit: "µg/m³",
            sourceName: "GIOS"
          }
        ],
        coordinates: {
          latitude: 53.12669,
          longitude: 23.155869
        }
      },
      {
        location: "Bielsko-Biała, ul.Partyzantów",
        city: "Bielsko-Biała",
        country: "PL",
        distance: 8568994.004691819,
        measurements: [
          {
            parameter: "pm25",
            value: 21.0775,
            lastUpdated: "2019-04-17T11:00:00.000Z",
            unit: "µg/m³",
            sourceName: "GIOS"
          }
        ],
        coordinates: {
          latitude: 49.802074,
          longitude: 19.04861
        }
      }
    ];
    const expectedResults = [
      {
        location: "AM8 Gdańsk Wrzeszcz",
        city: "Gdańsk",
        country: "PL",
        parameter: "pm25",
        value: 10.6072,
        unit: "µg/m³"
      },
      {
        location: "Białystok-Miejska",
        city: "Białystok",
        country: "PL",
        parameter: "pm25",

        value: 11,
        unit: "µg/m³"
      },
      {
        location: "Bielsko-Biała, ul.Partyzantów",
        city: "Bielsko-Biała",
        country: "PL",
        parameter: "pm25",
        value: 21.0775,
        unit: "µg/m³"
      }
    ];
    expect(formatResults(rawResults)).toEqual(expectedResults);
  });
});
