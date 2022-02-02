import { useState } from "react"

type htmlInputValue = number | string | readonly string[] | undefined;

export default function App() {

  const [binaryNumber, setbinaryNumber] = useState<htmlInputValue>('');
  const [decimalNumber, setDecimalNumber] = useState<htmlInputValue>();

  const handleBinaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 8) return;

    let binary = '';
    for (const digit of value) {
      binary += (digit === '1' || digit === '0') ? digit : '';
    }

    setbinaryNumber(binary);
    isNaN(parseInt(binary, 10)) || value === '' ? setDecimalNumber('') : setDecimalNumber(parseInt(binary, 2));      
  }

  return (
    <>
      <div>
        <form>
          <div>
            <label>Informe o binário:</label><br />
            <input 
              type="text" 
              name="binario" 
              value={ binaryNumber } 
              onChange={handleBinaryChange} 
            />
          </div>

          <div>
            <label>Decimal equivalente:</label><br />
            <input type="text" disabled name="binario" value={ decimalNumber } />
          </div>
        </form>
      </div>
    </>
  )
}