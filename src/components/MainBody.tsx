import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import PaymentTable from '../screens/PaymentTable';
// import ExtractingTable from '../screens/ExtractingTable'; 
// import NewPayment from '../screens/NewPayment';
// import NewExtraction from '../screens/NewExtraction';
import { GiPayMoney, GiMilkCarton, GiCow } from 'react-icons/gi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BiMoneyWithdraw } from 'react-icons/bi';

const SalaryPaymentList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [isDiv1Visible, setDiv1Visible] = useState(false);
  const [isDiv1Visiblescd, setDiv1Visiblescd] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedInUser'); 
    if (!loggedInStatus) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    document.title = "Dashboard | La Farmer";
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
    <aside className="sidebar">
      <nav>
          <a href="/dashboard" className="logo">La Ferme</a>
          <div className="nav_items">
              <div id="link" className={pathname === '/dashboard' || pathname === '/new-payment' ? 'active' : ''}>
                <a href="/dashboard" >
                  <GiPayMoney size={27} /> Payments
                </a>
                <div className='icnMore' onClick={() => handleTabClick(1)} >{isDiv1Visible ? <BiChevronDown size={25} /> : <BiChevronUp size={25} /> }</div>
              </div>
              {isDiv1Visible && (
                <a href="/new-payment" >
                  <BiMoneyWithdraw size={22} /> New Payroll
                </a>
              )}
              
              <div id="link" className={pathname === '/extractions' || pathname === '/new-extraction' ? 'active' : ''}>
                <a href="/extractions" className={activeTab === 2 ? 'active' : ''} >
                  <GiMilkCarton size={25} /> Extraction
                </a>
                <div className='icnMore' onClick={() => handleTabClickscd(2)} >{isDiv1Visible ? <BiChevronDown size={25} /> : <BiChevronUp size={25} /> }</div>
              </div>
              {isDiv1Visiblescd && (
                <a href="/new-extraction" onClick={() => handleTabClickscd(4)} className={activeTab === 4 ? 'activeDrop' : 'notActive'} >
                  <GiCow size={33} /> New Extraction
                </a>
              )}
          </div>
      </nav>
    </aside>
  );
};

export default SalaryPaymentList;
