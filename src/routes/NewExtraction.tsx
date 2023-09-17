import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import MainBody from '../components/MainBody';
import NewExtractions from '../screens/NewExtraction';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";

type Props = {
    farmers: FarmersArray;
    milks: MilksArray;
};

const ExtractionDash: React.FC<Props> = ({ milks, farmers }) => { 
    const [localFarmers, setLocalFarmers] = useState<FarmersArray>([]);
    const [localMilks, setLocalMilks] = useState<MilksArray>([]);

    return (
        <div>
            <MainBody />
            <div className="mainBlock">
                <div className='details-body'>
                    <AdminNavbar farmers={localFarmers} setFarmers={setLocalFarmers} />
                    <NewExtractions milks={localMilks} setMilks={setLocalMilks} />
                </div>
            </div>
        </div>
    );
};

export default ExtractionDash;
