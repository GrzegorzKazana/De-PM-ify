import { assessCityDataQuiality } from "../utils/WikiDataPipelineHelpers";

describe("testing wiki data pipes", () => {
  it("correctly assesses data quality - ambigious", () => {
    const inputData = {
      articleTitle: "Meuse",
      articleSummary:
        "The Meuse ( MYOOZ, also US: MU(R)Z, French: [møz]; Walloon: Moûze [muːs]) or Maas ( MAHSS, Dutch: [maːs]; Limburgish: Maos [mɒˑs] or Maas) is a major European river, rising in France and flowing through Belgium and the Netherlands before draining into the North Sea from the Rhine–Meuse–Scheldt delta.",
      articleUrl: "https://en.wikipedia.org/wiki/Meuse"
    };
    const resultData = {
      articleTitle: "Meuse",
      articleSummary:
        "The Meuse ( MYOOZ, also US: MU(R)Z, French: [møz]; Walloon: Moûze [muːs]) or Maas ( MAHSS, Dutch: [maːs]; Limburgish: Maos [mɒˑs] or Maas) is a major European river, rising in France and flowing through Belgium and the Netherlands before draining into the North Sea from the Rhine–Meuse–Scheldt delta.",
      articleUrl: "https://en.wikipedia.org/wiki/Meuse",
      isCorrect: false,
      isAmbigious: true,
      isInvalid: false
    };
    expect(assessCityDataQuiality(inputData)).toEqual(resultData);
  });

  it("correctly assesses data quality - correct", () => {
    const inputData = {
      articleTitle: "Pas-de-Calais",
      articleSummary:
        'Pas-de-Calais (French pronunciation: ​[pɑ d(ə) kalɛ], "strait of Calais"; Picard: Pas-Calés) is a department in northern France named after the French designation of the Strait of Dover, which it borders.',
      articleUrl: "https://en.wikipedia.org/wiki/Pas-de-Calais"
    };
    const resultData = {
      articleTitle: "Pas-de-Calais",
      articleSummary:
        'Pas-de-Calais (French pronunciation: ​[pɑ d(ə) kalɛ], "strait of Calais"; Picard: Pas-Calés) is a department in northern France named after the French designation of the Strait of Dover, which it borders.',
      articleUrl: "https://en.wikipedia.org/wiki/Pas-de-Calais",
      isCorrect: true,
      isAmbigious: false,
      isInvalid: false
    };
    expect(assessCityDataQuiality(inputData)).toEqual(resultData);
  });
});
