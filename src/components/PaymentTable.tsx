import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { FarmersArray } from "../types/WorkerType";

type Props = {
    farmers: FarmersArray;
};

const PaymentTable: React.FC<Props> = ({ farmers }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(farmers.length / 10);

    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    const currentData = farmers.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
          setCurrentPage(currentPage + 1);
        }
    };
    
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return(
        <div className='data'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Type of Worker</th>
                        <th>Salary Amount</th>
                        <th>Time Recorded</th>
                        <th>Time Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {farmers.length === 0 ? (
                    <tbody className="noData">
                        <tr><td>No Farmer recorded yet ...</td></tr>
                    </tbody>
                    ) : (
                    <tbody>
                        {currentData.map((farmer, index: number) => (
                            <tr key={index}>
                                <td>{farmer.id}</td>
                                <td>{farmer.name}</td>
                                <td>{farmer.surname}</td>
                                <td>{farmer.workerType}</td>
                                <td>{farmer.salary}</td>
                                <td>{farmer.timeRecorded}</td>
                                <td>{farmer.balanceTime !== null ? farmer.balanceTime : 'Not Set'}</td>
                                <td className="action">
                                <button><AiOutlineEdit /></button>
                                <button>{farmer.balanceTime !== null ? <FiMoreVertical /> : ''}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 0} className={currentPage > 0 ? 'nextActive' : ''}>
                        <AiOutlineArrowLeft /> <b>Prev</b>
                    </button>
                    <span>Page {currentPage + 1} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className={currentPage < totalPages - 1 ? 'nextActive' : ''}>
                        <b>Next</b> <AiOutlineArrowRight />
                    </button>
                </div>
            )}
        </div>
    )
}

export default PaymentTable;