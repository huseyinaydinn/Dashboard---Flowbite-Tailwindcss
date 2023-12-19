import { useEffect } from "react";
import ApexCharts from "apexcharts";

import { CiCircleInfo } from "react-icons/ci";

const Chart = () => {
    useEffect(() => {
        window.addEventListener("load", function () {
            let options = {
                // set the labels option to true to show the labels on the X and Y axis
                xaxis: {
                    show: true,
                    categories: [
                        "01 Apr",
                        "02 Apr",
                        "03 Apr",
                        "04 Apr",
                        "05 Apr",
                        "06 Apr",
                        "07 Apr",
                        "08 Apr",
                    ],
                    labels: {
                        show: true,
                        style: {
                            fontFamily: "Inter, sans-serif",
                            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    show: true,
                    ls: {
                        show: true,
                        style: {
                            fontFamily: "Inter, sans-serif",
                            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
                        },
                        formatter: function (value) {
                            return value + "K";
                        },
                    },
                },
                series: [
                    {
                        name: "",
                        data: [120, 80, 40, 160, 200, 120, 80, 160],
                        color: "#1C64F2",
                    },
                ],
                chart: {
                    sparkline: {
                        enabled: false,
                    },
                    height: "80%",
                    width: "100%",
                    type: "area",
                    fontFamily: "Inter, sans-serif",
                    dropShadow: {
                        enabled: false,
                    },
                    toolbar: {
                        show: true,
                    },
                },
                tooltip: {
                    enabled: true,
                    x: {
                        show: false,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.55,
                        opacityTo: 0,
                        shade: "#1C64F2",
                        gradientToColors: ["#1C64F2", "#FFFFFF"],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 3,
                    strokeDashArray: 4,
                },
                legend: {
                    show: false,
                },
                grid: {
                    show: true,
                },
            };

            if (
                document.getElementById("labels-chart") &&
                typeof ApexCharts !== "undefined"
            ) {
                const chart = new ApexCharts(
                    document.getElementById("labels-chart"),
                    options
                );
                chart.render();
            }
        });
    }, []);
    return (
        <div className="lg:h-[450px]  w-full bg-white rounded-2xl shadow text-gray-900 mx-auto">
            <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
                <div>
                    <h5 className="leading-none text-3xl font-bold text-gray-900  pb-2">
                        Sales <CiCircleInfo size={24} className="text-gray-400" />
                    </h5>
                </div>
            </div>
            <div id="labels-chart" className="px-2.5"></div>
        </div>
    );
};

export default Chart;
