import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

interface Option {
  id: string;
  label: string;
}
const options: Option[] = [
  { id: '1', label: 'India' },
  { id: '2', label: 'USA' },
  { id: '3', label: 'France' },
];
function App() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type='checkbox'
          checked={selectedOptions.length === options.length}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedOptions(options);
            } else {
              setSelectedOptions([]);
            }
          }}
        />
        <label>Select All</label>
      </div>
      {options.map((option) => (
        <div
          key={option.id}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type='checkbox'
            id={option.id}
            checked={selectedOptions.some(
              (selectedOption) => selectedOption.id === option.id,
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedOptions((prev) => [...prev, option]);
              } else {
                setSelectedOptions((prev) =>
                  prev.filter(
                    (selectedOption) => selectedOption.id !== option.id,
                  ),
                );
              }
            }}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </>
  );
}

export default App;
