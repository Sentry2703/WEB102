import Event from './Event.jsx';

const Calendar = () => {

    return (
        <div>
            <h2>Testing the Calendar</h2>
            <table>
                <thead>
                    <td></td>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                    <td>Sunday</td>
                </thead>
                <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event = 'Fancy Dinner 🎩' location = 'Second Station' color = 'green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green' location = 'Grand Square'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <Event event='Starbucks ☕️' color ='green' location = 'Hell'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink' location = 'guess'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue' location = '55th Street'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink' location = 'guess'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink' location = "you wouldn't believe it"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink' location = "The FUCKING SUBWAYYYY"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;