import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import MainBody from '../components/MainBody';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";
import ExtractingTable from '../screens/ExtractingTable';
import { farmers, milks } from '../utils/database';

type Props = {
    farmers: FarmersArray;
    milks: MilksArray;
}; 

const ExtractionDash: React.FC<Props> = ({ milks, farmers }) => {
    const [localFarmers, setLocalFarmers] = useState<FarmersArray>([]);
    const [localmilks, setLocalMilks] = useState<MilksArray>([]);

  return (
    <div>
      <MainBody />
      <div className="mainBlock">
        <div className='details-body'>
          <AdminNavbar farmers={localFarmers} setFarmers={setLocalFarmers} />
          <ExtractingTable milks={milks} />
        </div>
      </div>
    </div>
  );
};

export default ExtractionDash;
