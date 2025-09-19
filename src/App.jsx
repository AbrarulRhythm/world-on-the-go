import { Suspense } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

const fetchCountries = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();
}

function App() {

  const countriesPromise = fetchCountries();

  return (
    <>
      <Suspense fallback={<p>Country Data Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
