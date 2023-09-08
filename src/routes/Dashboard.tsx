import React, { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import PaymentTable from "../screens/PaymentTable";
import MainBody from '../components/MainBody';
import { FarmersArray } from "../types/WorkerType"; 
import { MilksArray } from "../types/MilkProductionType";

type Props = {
  farmers?: FarmersArray; // Define the type of the prop here
};

const Dashboard: React.FC<Props> = ({ farmers: propFarmers }) => { 
  const [localFarmers, setLocalFarmers] = useState<FarmersArray>([]);
  const [milks, setMilks] = useState<MilksArray>([]);

  return (
    <div>
      <MainBody />
      <div className="mainBlock">
        <div className='details-body'>
          <AdminNavbar farmers={localFarmers} setFarmers={setLocalFarmers} />
          <PaymentTable farmers={localFarmers} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
