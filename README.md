# react-phone-input
A simple react component to format a phone number as the user types with integrated user country detection via geoIp provided by <a href="https://ip-api.io" target="_blank">ip-api.io</a>. (forked from 
<a href="https://github.com/razagill/react-phone-input" target="_blank">https://github.com/razagill/react-phone-input</a>)

## Live demo


<a target="_blank" href="https://nik5036350.github.io/react-phone-input/">Click to see live demo</a>

![alt tag](http://i.giphy.com/l41m24L5YTSOifyW4.gif)

## Installation:

```shell-script
npm install react-geoip-phone-input --save
```

  
## Usage:

```jsx
React.render(
  <ReactPhoneInput defaultCountry={'us'} onChange={handleOnChange)/>,
  document.getElementById('content'));
```

Your handler for the ``onChange`` event should expect a string as
parameter, where the value is that of the entered phone number. For example:

```jsx
function handeOnChange(value) {
   this.setState({
      phone: value
   });
}
```
## Options:

| Name | Description          |
| :------------- | :----------- |
| value | string, phone number value|
| defaultCountry | country code to initialize the component|
| excludeCountries | array of country codes to be excluded e.g. ['cu','cw','kz']|
| onlyCountries | array of country codes to be included e.g. ['cu','cw','kz']|
| preferredCountries | array of country codes to be preferred (highlighted at the top) e.g. ['cu','cw','kz']|
| ipGeocodingEnabled | boolean flag to turn on/off ip geocoding (default - true)|

## License

[MIT](https://opensource.org/licenses/MIT)
