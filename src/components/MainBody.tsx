import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import PaymentTable from '../screens/PaymentTable';
import ExtractingTable from '../screens/ExtractingTable'; 
import NewPayment from '../screens/NewPayment';
import NewExtraction from '../screens/NewExtraction';
import { GiPayMoney, GiMilkCarton, GiCow } from 'react-icons/gi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";

const SalaryPaymentList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [farmers, setFarmers] = useState<FarmersArray>([]);
  const [milks, setMilks] = useState<MilksArray>([]);
  const [isDiv1Visible, setDiv1Visible] = useState(false);
  const [isDiv1Visiblescd, setDiv1Visiblescd] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedInUser');
    if (!loggedInStatus) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    document.title = "Dashboard | XFarmer";
  }, [location]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
      setActiveTab(tabNumber);
      setDiv1Visible(!isDiv1Visible);
  };
  const handleTabClickscd = (tabNumber: number) => {
    setActiveTab(tabNumber);
    setDiv1Visiblescd(!isDiv1Visiblescd);
  }; 

  return (
    <div>
      <aside className="sidebar">
        <nav>
            <a href="#" className="logo">La Ferme</a>
            <div className="nav_items">
                <a onClick={() => handleTabClick(1)} className={activeTab === 1 || activeTab === 3 ? 'active' : ''} >
                  <GiPayMoney size={27} /> Payments {isDiv1Visible ? <BiChevronDown size={25} /> : <BiChevronUp size={25} /> }
                </a>
                {isDiv1Visible && (
                  <a onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'activeDrop' : 'notActive'} >
                    <BiMoneyWithdraw size={22} /> New Payroll
                  </a>
                )}
                <a onClick={() => handleTabClickscd(2)} className={activeTab === 2 ? 'active' : ''} >
                  <GiMilkCarton size={25} /> Extraction {isDiv1Visiblescd ? <BiChevronDown size={25} /> : <BiChevronUp size={25} /> }
                </a>
                {isDiv1Visiblescd && (
                  <a onClick={() => handleTabClickscd(4)} className={activeTab === 4 ? 'activeDrop' : 'notActive'} >
                    <GiCow size={33} /> New Extraction
                  </a>
                )}
            </div>
        </nav>
      </aside>
      <div className="mainBlock">
        <div className='details-body'>
        <AdminNavbar farmers={farmers} setFarmers={setFarmers} />
        
          {activeTab === 1 &&  <div className='downBlock'>
            <h1>Farmers Payment</h1>
            <PaymentTable  farmers={farmers} />
          </div>}
          {activeTab === 2 && <div className='downBlock'>
            <h1>Milk Extraction's data</h1>
            <ExtractingTable milks={milks} />
          </div>}
          {activeTab === 3 && <div className='downBlock'>
            <h1>New Payment</h1>
            <NewPayment farmers={farmers} setFarmers={setFarmers} />
          </div>}
          {activeTab === 4 && <div className='downBlock'>
            <h1>Milk Extraction</h1>
            <NewExtraction milks={milks} setMilks={setMilks} />
          </div>}
          </div>
        </div>
    </div>
  );
};

export default SalaryPaymentList;
