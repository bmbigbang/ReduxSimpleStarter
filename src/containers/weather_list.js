import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import MapContainer from './google_map';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        let pressures = [];
        let humidities = [];
        let temps = [];
        // const dateTime = cityData.list.map(weather => weather.dt_txt);
        for (let idx in cityData.list) {
            pressures = [...pressures, {'data': cityData.list[idx].main.pressure}];
            humidities = [...humidities, {'data': cityData.list[idx].main.humidity}];
            temps = [...temps, {'data': _.round(parseFloat(cityData.list[idx].main.temp) - 273.0, 2)}];
        }

        const pressures2 = cityData.list.map(weather => weather.main.pressure);
        const humidities2 = cityData.list.map(weather => weather.main.humidity);
        const temps2 = cityData.list.map(weather => _.round(parseFloat(weather.main.temp) - 273.0, 2));
        const { lon, lat } = cityData.city.coord;


        return (
        <tr key={name}>
            <td><MapContainer cityname={name} lat={lat} lon={lon} /></td>
            <td>
                <Chart weatherData={temps} listData={temps2} color='#dfe200' units='Celcius'/>
            </td>
            <td>
                <Chart weatherData={pressures} listData={pressures2} color='#00a840' units='hPa'/>
            </td>
            <td>
                <Chart weatherData={humidities} listData={humidities2} color='#a3a3a3' units='%'/>
            </td>
        </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Celcius)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}; // {weather] === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
