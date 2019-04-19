import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "../components/Headers/Header";
import CityDataCardContent from "../components/Results/CityDataCardContent";

configure({ adapter: new Adapter() });

describe("testing shallow rendering", () => {
  it("renders without a simple component crashing", () => {
    shallow(<Header />);
  });

  const defaultCity = {
    country: "PL",
    city: "Otwock",
    location: "Brzozowa",
    parameter: "pm25",
    value: 233,
    unit: "µg/m³",
    id: 0,
    data: {
      articleTitle: "Otwock",
      articleSummary:
        "Otwock [ˈɔtfɔt͡sk] is a town in central Poland, some 23 kilometres (14 mi) southeast of Warsaw, with 42,765 inhabitants (2004).",
      articleUrl: "https://en.wikipedia.org/wiki/Otwock",
      isCorrect: true,
      isAmbigious: false,
      isInvalid: false
    },
    dataFetching: false,
    dataLoaded: true
  };

  it("renders cityCardContent based on data quality assessment - correct", () => {
    const city = defaultCity;
    const expectedClassName = ".CityDataCard__ContentMain";
    const cityCard = mount(<CityDataCardContent city={city} />);
    expect(cityCard.find(expectedClassName).length).toBe(1);
  });

  it("renders cityCardContent based on data quality assessment - ambigious", () => {
    const city = {
      ...defaultCity,
      data: {
        ...defaultCity.data,
        isCorrect: false,
        isAmbigious: true,
        isInvalid: false
      }
    };
    const expectedClassName = ".CityDataCard__ContentMainAmbigious";
    const cityCard = mount(<CityDataCardContent city={city} />);
    expect(cityCard.find(expectedClassName).length).toBe(1);
  });

  it("renders cityCardContent based on data quality assessment - invalid", () => {
    const city = {
      ...defaultCity,
      data: {
        ...defaultCity.data,
        isCorrect: false,
        isAmbigious: false,
        isInvalid: true
      }
    };
    const expectedClassName = ".CityDataCard__ContentMainFailed";
    const cityCard = mount(<CityDataCardContent city={city} />);
    expect(cityCard.find(expectedClassName).length).toBe(1);
  });
});
