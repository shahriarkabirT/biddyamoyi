import React from 'react';
import './Sidebar.css'

const RightSideBar = () => {
    return (
        <div id="rightSidebar">
            <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                <tbody>
                <tr>
                    <td className="boxHeader" width="220px">
                        <span id="lblInstDesig">প্রধান শিক্ষক</span>
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'center', paddingTop: '7px' }}>
                        <img
                            id="ImgInstHead"
                            className="fancyzoom"
                            src="http://pds.sib.gov.bd/employeephoto/20230919214815.jpg"
                            style={{ height: '200px', width: '175px', cursor: 'pointer' }}
                            alt="প্রধান শিক্ষক"
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'center', paddingBottom: '10px' }}>
                        <span id="lblInstHead">অনিমা রানী সাহা</span>
                    </td>
                </tr>
                </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                <tbody>
                <tr>
                    <td className="boxHeader" width="220px">
                        অভ্যন্তরীণ ই-সেবা
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'left', paddingLeft: '0px' }}>
                        <div id="box">
                            <ul>
                                <li>
                                    <a href="http://eschool.sib.gov.bd" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
                                        ই-স্কুল
                                    </a>
                                </li>
                                <li>
                                    <a href="http://automation.sib.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        পাঠশালা
                                    </a>
                                </li>
                                <li>
                                    <a href="http://pds.sib.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        পিডিএস (সরকারি মাধ্যমিক)
                                    </a>
                                </li>
                                <li>
                                    <a href="http://gsa.teletalk.com.bd" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
                                        ভর্তি পরীক্ষার আবেদন
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                <tbody>
                <tr>
                    <td className="boxHeader" width="220px">
                        গুরুত্বপূর্ণ লিংক
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'left' }}>
                        <div id="box">
                            <ul>
                                <li>
                                    <a href="http://www.moedu.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        শিক্ষা মন্ত্রণালয়
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.dshe.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.banbeis.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        ব্যানবেইজ
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.naem.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        নায়েম
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.nctb.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        এনসিটিবি
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.teachers.gov.bd/" target="_blank" rel="noopener noreferrer">
                                        শিক্ষক বাতায়ন
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.konnect.edu.bd/" target="_blank" rel="noopener noreferrer">
                                        কিশোর বাতায়ন
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                <tbody>
                <tr>
                    <td className="boxHeader" width="220px">
                        ওয়েব মাস্টার
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'left' }}>
                        <div id="box">
                            <ul>
                                <li>
                                    <a href="http://sib.gov.bd/webmaster/default.aspx" target="_blank" rel="noopener noreferrer">
                                        ওয়েব মাস্টার লগইন
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RightSideBar;
