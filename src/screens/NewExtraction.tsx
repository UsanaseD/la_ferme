import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

type Milk = {
  id: number;
  dateProd: string;
  quantity: number;
  price: number;
  extractTime: string;
  description: string | null;
};

type Props = {
  milks: Milk[];
  setMilks: React.Dispatch<React.SetStateAction<Milk[]>>;
};

const NewExtraction: React.FC<Props> = ({ milks, setMilks }) => {
  const navigate = useNavigate();
  
  const [id, setId] = useState<number>(milks.length + 1)
  const [dateProd, setDateProd] = useState<string>(''); 
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [extractTime, setExtractTime] = useState<string>('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMilk = {
      id,
      dateProd,
      quantity,
      price,
      extractTime,
      description: description || null,
    };

    console.log(newMilk);
    
    setId(id + 1);

    setMilks(prev => [...prev, newMilk]);
    setDateProd('');
    setQuantity(0);
    setDescription('');
    setPrice(0);
    setExtractTime(''); // Clear the selected extraction time.
    
    alert("New Production has been made")
    navigate("/");
  }

  return (
    <div className='data'>
      <div className="form-content">
        <form onSubmit={handleFormSubmit}>
          <div className="milkForm">
            <div className="exDate">
              <label>Extraction Date: </label><br />
              <input type="date" value={dateProd} onChange={(e) => setDateProd(e.target.value)} />
            </div>
            <div className="time">
              <label>Extraction Time: </label><br />
              <select className="extractTime" value={extractTime} onChange={(e) => setExtractTime(e.target.value)}>
                <option value="morning">Morning</option>
                <option value="day">Day</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div className="quantity">
              <label>Quantity: </label><br />
              <input type="number" min={1} value={quantity} className="amountIpt" required placeholder='Production quantity' onChange={(e) => setQuantity(parseInt(e.target.value))} />
            </div>
            <div className="price">
              <label>Price per Litter: </label><br />
              <input type="number" min={100} value={price} className="amountIpt" required placeholder='Production price' onChange={(e) => setPrice(parseInt(e.target.value))} />
            </div>
            <div className="descrpt">
              <label>Any Description </label><br />
              <textarea value={description} className='descrptn' required placeholder="Any description about the production" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className='submit'>
            <small></small>
            <button type="submit">Make a Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExtraction;
