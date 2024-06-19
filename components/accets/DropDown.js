"use client"
import React, { useState, useEffect } from 'react';

const countries = [
  'Pakistan',
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'India',
  'China',
  'Japan',
  'Brazil',
];

const contactDetails = {
  'Pakistan': { phone: '+9200000000', email: 'contact@pakistan.com', tollFree: '0800-00000', intlCall: '+9200000001' },
  'United States': { phone: '+12121212', email: 'contact@us.com', tollFree: '1-800-000-0000', intlCall: '+12121213' },
  'Canada': { phone: '+1111111', email: 'contact@canada.com', tollFree: '1-800-000-0000', intlCall: '+1111112' },
  'United Kingdom': { phone: '+4400000000', email: 'contact@uk.com', tollFree: '0800-000-0000', intlCall: '+4400000001' },
  'Australia': { phone: '+6100000000', email: 'contact@australia.com', tollFree: '1800-000-000', intlCall: '+6100000001' },
  'Germany': { phone: '+4900000000', email: 'contact@germany.com', tollFree: '0800-000-0000', intlCall: '+4900000001' },
  'France': { phone: '+3300000000', email: 'contact@france.com', tollFree: '0800-000-0000', intlCall: '+3300000001' },
  'India': { phone: '+9100000000', email: 'contact@india.com', tollFree: '1800-000-000', intlCall: '+9100000001' },
  'China': { phone: '+8600000000', email: 'contact@china.com', tollFree: '400-000-0000', intlCall: '+8600000001' },
  'Japan': { phone: '+8100000000', email: 'contact@japan.com', tollFree: '0120-000-000', intlCall: '+8100000001' },
  'Brazil': { phone: '+5500000000', email: 'contact@brazil.com', tollFree: '0800-000-0000', intlCall: '+5500000001' },
};

function CountrySelector({ onCountrySelect,dis }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (selectedCountry) {
      const { phone, email, tollFree, intlCall } = contactDetails[selectedCountry];
      onCountrySelect(selectedCountry, phone, email, tollFree, intlCall);
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="w-full mx-auto mt-7 relative flex flex-col gap-4">
      <div className='text-[red] font-lg'>{dis}</div>
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        COUNTRY
      </label>
      <div className='w-full'>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="my-1 text-black border-none outline-none block w-full py-2 bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500 md:text-2xl md:font-bold md:font-serif"
        >
          <option value="" className='font-bold text-2xl'>Choose your country or region</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className='w-[80%] h-[0.3px] bg-black'></div>
      </div>
    </div>
  );
}

export default CountrySelector;
