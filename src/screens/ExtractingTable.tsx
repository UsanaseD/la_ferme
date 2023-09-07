import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MilksArray } from "../types/MilkProductionType";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

type Props = {
    milks: MilksArray;
};

const ExtractingTable: React.FC<Props> = ({ milks }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(milks.length / 10);

    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    const currentData = milks.slice(startIndex, endIndex);

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

    return (
        <div className='data'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Quantity of Milk</th>
                        <th>Date</th>
                        <th>Extraction Time</th>
                        <th style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Comments</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {milks.length === 0 ? (
                    <tbody className="noData">
                        <tr><td>No Milk produced yet ...</td></tr>
                    </tbody>
                ) : (
                    <tbody>
                        {currentData.map((milk, index: number) => (
                            <tr key={index}>
                                <td>{milk.id}</td>
                                <td>{milk.dateProd}</td>
                                <td>{milk.quantity}</td>
                                <td>12h 30</td>
                                <td style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{milk.description}</td>
                                <td>2430 L</td>
                                <td className="action">
                                    <button><AiOutlineEdit /></button>
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

export default ExtractingTable;