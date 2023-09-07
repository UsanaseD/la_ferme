import React, { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import NewPayments from "../screens/NewPayment";
import MainBody from '../components/MainBody';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";

type Props = {
    farmers: FarmersArray;
};

const NewPayment: React.FC<Props> = ({ farmers }) => {
    const [localFarmers, setLocalFarmers] = useState<FarmersArray>([]);
    const [milks, setMilks] = useState<MilksArray>([]);

  return (
    <div>
      <MainBody />
      <div className="mainBlock">
        <div className='details-body'>
          <AdminNavbar farmers={localFarmers} setFarmers={setLocalFarmers} />
          <NewPayment farmers={localFarmers} />
        </div>
      </div>
    </div>
  );
};

export default NewPayment;
