# De-PM-ify

##### Author: Grzegorz Kazana

---

## Purpose

Allow users to view current air quality data in most polluted cities from biggest european countries. Data is sorted by selected parameter. Furthermore, users may look up short city description gathered from Wikipedia.

Used APIs:\
[**OpenAQ**](https://openaq.org/) - air quality data\
[**MediaWiki**](https://www.mediawiki.org/wiki/API:Main_page/en) - city data

---

## Usage

Type / select country from user input, select air quality parameter. View the results. Click on result to show wiki data.
Input persists between reloads.

---

## Features

✅ Accepting correct text input / **suggesting** available options \
✅ Fetching city measurements from OpenAq API \
✅ **Parametrizing queries** by selected air quality parameter \
✅ Presenting results in **accordion** \
✅ Fetching city summary from Wiki API \
✅ Assessing if fetched summary is appropiate \
✅ **Color** aq parameter value in accordance to **European norms** \
✅ **Persisting** user input in local storage

---

## Used technologies and implementation

### Implemented

✔️ Api calls \
✔️ Response processing \
✔️ Formatting results \
✔️ Redirects to wikipedia \
✔️ Tests - redux actions&reducers, data flow functions, conditional result rendering \
✔️ LocalStorage by custom hook \
✔️ Controlling components' props with PropTypes

### Things to improve

➖ Auto reload data on selected parameter change \
➖ Better wiki text filtering/formatting, maybe fetch mark up instead of plain text \
➖ More UI tests (e2e?) \
➖ Switch to typescript?

[**React**](https://reactjs.org/) - webpage design\
[**Redux**](https://redux.js.org/) - managing global state\
[**Redux-thunk**](https://github.com/reduxjs/redux-thunk) - dispatching dynamic actions\
[**SCSS**](https://sass-lang.com/) - webpage styling\
[**React-Autosuggest**](https://react-autosuggest.js.org/) - input with suggestions

---

## Demonstration

Website available at: [https://grzegorzkazana.github.io/De-PM-ify/]
