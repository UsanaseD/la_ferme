import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import MainBody from '../components/MainBody';
import NewPaymentScreen from '../screens/NewPaymentScreen';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";

type Props = {
  farmers: FarmersArray;
  milks: MilksArray;
};

const NewPayment: React.FC<Props> = ({ milks, farmers }) => {
  const [localFarmers, setLocalFarmers] = useState<FarmersArray>([]);

    return (
      <div>
        <MainBody />
        <div className="mainBlock">
          <div className='details-body'>
            <AdminNavbar farmers={localFarmers} setFarmers={setLocalFarmers} />
            <NewPaymentScreen farmers={localFarmers} setFarmers={setLocalFarmers} />
          </div>
        </div>
      </div>
    );
};

export default NewPayment;
