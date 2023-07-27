import React, { useState } from 'react';
import { MilksArray } from "../types/MilkProductionType";
import { useNavigate } from "react-router-dom";

type Milk = {
  id: number;
  dateProd: string;
  quantity: number;
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
  const [description, setDescription] = useState<string>('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMilk = {
      id,
      dateProd,
      quantity,
      description: description || null,
    };

    console.log(newMilk)
    setId(id + 1)
    console.log(milks)

    setMilks(prev => [...prev, newMilk]);
    
    // setId(milks.length + 1);
    // setName('');
    // setSurname('');
    // setSalary('');
    // setBalanceTime('');
    // alert("Form submited")
    // navigate("/SalaryPaymentList");
  }

  return (
    <div className='data'>
      <div className="form-content">
        <form onSubmit={handleFormSubmit}>
          <div className="milkForm">
            <div className="exDate">
              <label>Time of Milk production: </label><br />
              <input type="date" value={dateProd} onChange={(e) => setDateProd(e.target.value)} />
            </div>
            <div className="quantity">
              <label>Quantity: </label><br />
              <input type="number" min={1} value={quantity} className="amountIpt" required placeholder='Production quantity' onChange={(e) => setQuantity(parseInt(e.target.value))} />
            </div>
            <div className="descrpt">
              <label>Any Description </label><br />
              <textarea value={description} className='descrptn' required placeholder="Any description about the production" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className='submit'>
            <small></small>
            <button type="submit">Make a Payement</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExtraction;
