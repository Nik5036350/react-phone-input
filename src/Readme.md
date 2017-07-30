 React Phone Input default (by defauil using ip geocoding provided by <a href="https://ip-api.io" target="_blank">ip-api.io</a> )  

    <ReactPhoneInput />

With manually provided default country(do not forget to set ip Geocoding Enabled as false)

    <ReactPhoneInput 
        defaultCountry="ru"
        ipGeocodingEnabled={false}
     /> 

With manually provided phone number (with or without +)

    <ReactPhoneInput 
        defaultCountry="de"
        value="+79211893012"
     />