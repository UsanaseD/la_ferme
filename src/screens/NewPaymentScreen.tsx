import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Farmer = {
  id: number;
  name: string;
  surname: string;
  salary: number;
  workerType: 'casual' | 'monthly';
  balanceTime: string | null;
  timeRecorded: string;
};

type Props = {
  farmers: Farmer[];
  setFarmers: React.Dispatch<React.SetStateAction<Farmer[]>>;
};

const NewPaymentScreen: React.FC<Props> = ({ farmers, setFarmers }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [salary, setSalary] = useState<number | ''>('');
  const [workerType, setWorkerType] = useState<'casual' | 'monthly'>('casual');
  const [balanceTime, setBalanceTime] = useState<string>('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const salaryNumber = Number(salary);

    const newFarmer: Farmer = {
      id: farmers.length + 1,
      name,
      surname,
      salary: salaryNumber,
      timeRecorded: new Date().toISOString(),
      workerType,
      balanceTime: balanceTime || null,
    };

    setFarmers((prev) => [...prev, newFarmer]);
    console.log(farmers);

    setName('');
    setSurname('');
    setSalary('');
    setBalanceTime('');
    alert('New Payment has been done');
    navigate('/la_ferme');
  };

  return (
    <div className="data">
      <p>Lorem</p>
      <div className="form-content">
        <form onSubmit={handleFormSubmit}>
          <div className="names">
            <div>
              <label>Name: </label>
              <br />
              <input
                value={name}
                type="text"
                required
                placeholder="Worker's Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Surname: </label>
              <br />
              <input
                value={surname}
                type="text"
                required
                placeholder="Worker's Surname"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="amountIpt">
              <label>The amount: </label>
              <br />
              <input
                type="number"
                min="100"
                className="amountIpt"
                required
                placeholder="Eg: 300.000 Rwf"
                value={salary === '' ? '' : salary.toString()}
                onChange={(e) => {
                  const inputSalary = e.target.value;
                  setSalary(inputSalary === '' ? '' : parseFloat(inputSalary));
                }}
              />
            </div>
            <div className="amountIpt">
              <label>Remain Payment: </label>
              <br />
              <input
                type="number"
                min="100"
                className="amountIpt"
                required
                placeholder="Eg: 100.000 Rwf"
                value={balanceTime}
                onChange={(e) => setBalanceTime(e.target.value)}
              />
            </div>
          </div>

          <div className="amount">
            <div className="casual">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">Type of worker: </legend>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      required
                      value="monthly"
                      checked={workerType === 'monthly'}
                      onChange={() => setWorkerType('monthly')}
                      name="question1"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-label">Monthly Paid</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      required
                      value="casual"
                      checked={workerType === 'casual'}
                      onChange={() => setWorkerType('casual')}
                      name="question1"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-label">Casual Paid</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="all-payTime">
              <div className="payTime">
                <label>Starting Data: </label>
                <br />
                <input
                  type="date"
                  value={balanceTime}
                  onChange={(e) => setBalanceTime(e.target.value)}
                  placeholder="Payment time"
                />
              </div>
              <div className="payTime">
                <label>Time of balance to be paid: </label>
                <br />
                <input
                  type="date"
                  value={balanceTime}
                  onChange={(e) => setBalanceTime(e.target.value)}
                  placeholder="Payment time"
                />
              </div>
              <div className="payTime">
                <label>Last Payment Data: </label>
                <br />
                <input
                  type="date"
                  value={balanceTime}
                  onChange={(e) => setBalanceTime(e.target.value)}
                  placeholder="Payment time"
                />
              </div>
            </div>
          </div>
          <div className="submit">
            <small className="warning">
              <b>WARNING: </b>This payment will save with this Date: 23/34/2012
            </small>
            <button type="submit">Make a Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPaymentScreen;
