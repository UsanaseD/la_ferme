import React, { useState } from 'react';
import farmerIcons from '../assets/farmer_icons.png'
import milkCow from '../assets/milk_cow.jpg'
import production from '../assets/production.jpg'
import { FarmersArray } from "../types/WorkerType";
import { AiOutlineLogout } from 'react-icons/ai';

import { useNavigate } from "react-router-dom";

type Props = {
    farmers: FarmersArray;
    setFarmers: React.Dispatch<React.SetStateAction<FarmersArray>>;
};

const AdminNavbar:React.FC<Props> = ({ farmers, setFarmers }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate("/");
    };

    return (
        <div className="header">
            <div className='signUp'>
                <button onClick={handleLogout}> Sign Out <AiOutlineLogout /></button>
            </div>
            <div className='card'>
                <div className="user-card">
                    <div className="user-card-img">
                        <img src={farmerIcons} alt="Icon for card" />
                    </div>
                    <div className="user-card-info">
                        <h1>Farmer Payment</h1>
                        <div className="detail">
                            <h3><span className='dot red'></span><b>Paid: </b>{farmers.length} Farmers</h3>
                            <h3><span className='dot green'></span><b>Unpaid:</b> 30 Famers</h3>
                            <h3><span className='dot yellow'></span><b>Padding:</b> 30 Famers</h3>
                        </div>
                    </div>
                </div>
                <div className="user-card">
                    <div className="user-card-img">
                        <img src={milkCow} alt="Icon for card" />
                    </div>
                    <div className="user-card-info">
                        <h1>Milk Production</h1>
                        <div className="detail">
                            <h3><span className='dot red'></span><b>Litter:</b> 130 L / day</h3>
                            <h3><span className='dot green'></span><b>Monthly Avarage: </b> 1200 L </h3>
                            <h3><span className='dot yellow'></span><b>Year Avarage:</b> 30 L</h3>
                        </div>
                    </div>
                </div>
                <div className="user-card">
                    <div className="user-card-img">
                        <img src={production} alt="Icon for card" />
                    </div>
                    <div className="user-card-info">
                        <h1>Add Production</h1>
                        <div className="detail">
                            <h3><span className='dot red'></span><b>Total Extraction:</b> 130 L</h3>
                            <h3><span className='dot green'></span><b>Last Extraction:</b> 1200 L</h3>
                            <h3><span className='dot yellow'></span><b>Best Extraction:</b> 30 L</h3>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default AdminNavbar;