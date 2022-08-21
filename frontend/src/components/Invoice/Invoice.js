import React, { useContext, useRef } from 'react'
import AuthContext from '../../context/AuthContext'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Invoice = ({ props }) => {
    let { user } = useContext(AuthContext)
    const printRef = useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };

    return (
        <div className="content" >
            <div className="container-fluid">
                <button className="btn msg-send-btn" onClick={handleDownloadPdf}>
                    <i class="fa fa-print" aria-hidden="true"></i>
                </button>
                <div className="row" ref={printRef}>
                    <div className="col-lg-8 offset-lg-2">
                        <div className="invoice-content">
                            <div className="invoice-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="invoice-logo">
                                            <img src="assets/img/logo.png" alt="logo" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="invoice-details">
                                            <strong>Issued:</strong> {new Date().toISOString().slice(0, 10)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="invoice-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="invoice-info">
                                            <strong className="customer-text">Invoice To</strong>
                                            <p className="invoice-details invoice-details-two">
                                                {user.first_name} {user.last_name} <br />
                                                {user.address} <br />
                                                {user.phone} <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-item">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="invoice-info">
                                            <strong className="customer-text">Payment Method</strong>
                                            <p className="invoice-details invoice-details-two">
                                                Online Transaction <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-item invoice-table-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="invoice-table table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Description</th>
                                                        <th className="text-center">Quantity</th>
                                                        <th className="text-center">Date</th>
                                                        <th className="text-center">Time</th>
                                                        <th className="text-right">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>General Consultation</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-right">{props.date}</td>
                                                        <td className="text-right">{props.time}</td>
                                                        <td className="text-right">${props.price}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-4 ml-auto">
                                        <div className="table-responsive">
                                            <table className="invoice-table-two table">
                                                <tbody>
                                                    <tr>
                                                        <th>Total Amount:</th>
                                                        <td><span>${props.price}</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Invoice