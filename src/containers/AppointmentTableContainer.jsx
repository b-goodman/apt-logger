import React from 'react';
import AppointmentTable from '../components/AppointmentTable';

// const DatePickerComp = () => {
//     return (
//         <DatePicker/>
//     );
// }

const data = [
        {
            date: "Mon Aug 22 2019",
            aptsMade: 3,
            aptsAttending: 4,
            contWellbeing: 5,
            refCouncilling: 3,
            male: 3,
            female: 3,
        },
    ];

const AppointmentTableContainer = () => {
    return (
        <AppointmentTable data={data}/>
    );
}

export default AppointmentTableContainer;