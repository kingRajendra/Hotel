import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';

export default function Hotel() {

    const rooms = [
        {
            value: 1,
            label: "0",
        },
        {
            value: 2,
            label: "1",
        },
        {
            value: 3,
            label: "2",
        },
        {
            value: 4,
            label: "3",
        },
        {
            value: 5,
            label: "4",
        },
        {
            value: 6,
            label: "5",
        },
        {
            value: 7,
            label: "6",
        },
        {
            value: 8,
            label: "7",
        },
        {
            value: 9,
            label: "8",
        },
        {
            value: 10,
            label: "9",
        },
        {
            value: 11,
            label: "10",
        },
        {
            value: 12,
            label: "11",
        },
        {
            value: 13,
            label: "12",
        },
    ];

    var childnum = [
        {
            value: 1,
            label: "0",
        },
        {
            value: 2,
            label: "1",
        },
        {
            value: 3,
            label: "2",
        },
        {
            value: 4,
            label: "3",
        },
        {
            value: 5,
            label: "4",
        },
    ];

    const adultnum = [
        {
            value: 1,
            label: "0",
        },
        {
            value: 2,
            label: "1",
        },
        {
            value: 3,
            label: "2",
        },
        {
            value: 4,
            label: "3",
        },
        {
            value: 5,
            label: "4",
        },
        {
            value: 6,
            label: "5",
        },
        {
            value: 7,
            label: "6",
        },
        {
            value: 8,
            label: "7",
        },
        {
            value: 9,
            label: "8",
        },
        {
            value: 10,
            label: "9",
        },
        {
            value: 11,
            label: "10",
        },
        {
            value: 12,
            label: "11",
        },
        {
            value: 13,
            label: "12",
        },
    ];

    const childage = [
        {
            value: 1,
            label: "1",
        },
        {
            value: 2,
            label: "2",
        },
        {
            value: 3,
            label: "3",
        },
        {
            value: 4,
            label: "4",
        },
        {
            value: 5,
            label: "5",
        },
        {
            value: 6,
            label: "6",
        },
        {
            value: 7,
            label: "7",
        },
        {
            value: 8,
            label: "8",
        },
        {
            value: 9,
            label: "9",
        },
        {
            value: 10,
            label: "10",
        },
        {
            value: 11,
            label: "11",
        },
        {
            value: 12,
            label: "12",
        },
    ];

    const [result1, value1] = useState(rooms.label);
    const roomNum = e => {
        value1(e.label);
    }

    const [result2, value2] = useState(childnum.label);
    const childNum = e => {
        value2(e.label);
    }

    const [result3, value3] = useState(adultnum.label);
    const adultNum = e => {
        value3(e.label);
    }
    const [result4, value4] = useState(childage.label);
    const childAge = e => {
        value4(e.label);
    }

    return (
        <div>
            <h1 className='hotel'>HO<span className='span'>TEL</span>S</h1>
            <div className='App-header'>
                <div className='rooms'>
                    <h1 className='head'>Rooms</h1>
                    <Select options={rooms} onChange={roomNum} />
                    <h3>{result1}</h3>

                    <h1 className='head'>Children</h1>
                    <Select options={childnum} onChange={childNum} />
                    <h3>{result2}</h3>
                </div>

                <div className='rooms'>

                    <h1 className='head'>Adults <span className='span1'>AGE[12y+]</span></h1>
                    <Select options={adultnum} onChange={adultNum} />
                    <h3>{result3}</h3>

                    <h1 className='head'>Age <span className='span1'>AGE 12y and below</span></h1>
                    <Select options={childage} onChange={childAge} />
                    <h3>{result4}</h3>
                </div>
            </div>
            </div>

    );
}