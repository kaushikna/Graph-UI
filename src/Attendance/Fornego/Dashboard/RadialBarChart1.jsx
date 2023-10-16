import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialBarChart1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [45],
            options: {
                chart: {
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        inverseOrder: false,
                        startAngle: 0,
                        endAngle: 360,
                        offsetX: 0,
                        offsetY: 0,
                        hollow: {
                            margin: 5,
                            size: '45%',
                            fontSize: "10px",
                            position: 'front',
                        },
                    },
                    color: ["#fff"],
                },

                grid: {
                    show: false,
                    padding: { left: -15, right: -15, top: -15, bottom: -15 },
                    row: {
                        colors: ['transparent'],
                        opacity: 0.5
                    },
                },
                labels: [''],
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={45} height={45} />
            </div>


        );
    }
}

export default RadialBarChart1