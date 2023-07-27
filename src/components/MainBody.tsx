import React, { useState } from 'react';
import AdminNavbar from './subComponents/AdminNavbar';
import PaymentTable from './PaymentTable';
import ExtractingTable from './ExtractingTable'; 
import NewPayment from './NewPayment';
import NewExtraction from './NewExtraction';
import { GiPayMoney, GiMilkCarton, GiCow } from 'react-icons/gi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { FarmersArray } from "../types/WorkerType";
import { MilksArray } from "../types/MilkProductionType";

const SalaryPaymentList: React.FC = () => {
  const [farmers, setFarmers] = useState<FarmersArray>([]);
  const [milks, setMilks] = useState<MilksArray>([]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
      setActiveTab(tabNumber);
  };

  return (
    <div>
      <aside className="sidebar">
        <nav>
            <a href="#" className="logo">XFarmer</a>
            <div className="nav_items">
                <a onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''} href="#">
                  <GiPayMoney size={27} /> Payments Data</a>
                <a onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''} href="#">
                  <GiMilkCarton size={25} /> Milk Extraction</a>
                <a onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''} href="#">
                  <BiMoneyWithdraw size={22} /> New Payroll</a>
                <a onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''} href="#">
                  <GiCow size={33} /> New Extraction</a>
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
