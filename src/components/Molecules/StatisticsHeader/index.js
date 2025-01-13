import React from "react";
import "./style.css";

import { Gauge } from "../../Atoms/Gauge";

const StatisticsHeader = ({ darkTheme, stats, statsTitles, doubleRow, title, subtitle, oldestPage, newestPage, gaugeTitle, gaugeDescription, gaugeType, buttons }) => {

    // Theme
    const theme = darkTheme === "dark" ? "dark" : ""

    // Normal stats with Value (Title) and description (Subtitle)
    const normalExtraStats = (value, subtitle, index) => {
        return (
            <div key={index} className="d-flex flex-column margin_mobile" role="text">
                <p className="bold">{value}</p>
                <span className="ama-typography-body">{subtitle}</span>
            </div>
        )
    }

    // Stats with percentage and multiple subtitles
    const percentageStats = (value, object, total, first, index) => {
        const percentage = (value*100/total).toFixed(1)
        return (
            <div key={index} className="d-flex flex-column margin_mobile" role="text">
                <p className="bold p-1">
                    {value}
                    {!first ? <span className="ama-typography-body-large ps-2">{percentage}%</span> : null}
                </p>
                {object.subtitle2 !== "" ? <span className="ama-typography-body bold">{object.subtitle2}</span> : null}
                <span className="ama-typography-body">{object.subtitle}</span>
            </div>
        )
    }

    return (
        <div className={`${theme} ama d-flex flex-column section_container py-4 m-0`}>
            {/* Web version */}
            <div className="grid_container">
                <h2 className="bold d-flex flex-column">
                    <span>{title}</span>
                    <span className="ama-typography-body">{subtitle}</span>
                </h2>
                <div className="mb-3 second_column ps-4">
                    <div className="d-flex flex-column">
                        <span className="ama-typography-body bold mb-1">{oldestPage}</span>
                        <span className="ama-typography-body">{stats.oldestPage}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="ama-typography-body bold mb-1">{newestPage}</span>
                        <span className="ama-typography-body">{stats.recentPage}</span>
                    </div>
                </div>
                <div className="second_row">
                    <Gauge percentage={stats.score} title={gaugeTitle} darkTheme={darkTheme} screenReaderTitle={gaugeDescription} type={gaugeType} />
                </div>
                {/* doubleRow checks if its just one row os stats or two */}
                <div className={`last_column px-3 ${doubleRow ? "flex-column" : ""}`}>
                    {doubleRow ?
                        <>
                            <div className="d-flex justify-content-around w-100 align-items-center py-4 first">
                                {stats.statsTable.map((stat, index) => {
                                    const total = stats.statsTable[0]
                                    const first = index === 0
                                    return index < 3 ? percentageStats(stat, statsTitles[index], total, first, index) : null
                                })}
                            </div>
                            <div className="d-flex justify-content-around w-100 align-items-center py-4">
                                {stats.statsTable.map((stat, index) => {
                                    const total = stats.statsTable[0]
                                    return index >= 3 ? percentageStats(stat, statsTitles[index], total, index) : null
                                })}
                            </div>
                        </>
                    : stats.statsTable.map((stat, index) => {
                        return normalExtraStats(stat, statsTitles[index], index)
                    })}
                </div>
            </div>

            {/* Mobile version */}
            <div className="grid_container_mobile">
                <div className="d-flex flex-column row my-3">
                    <h2 className="bold">{title}</h2>
                    <span className="ama-typography-body">{subtitle}</span>
                </div>
                <div className="row second_row mb-4">
                    <Gauge percentage={stats.score} title={gaugeTitle} screenReaderTitle={gaugeDescription} type={gaugeType} />
                </div>
                <div className="row d-flex flex-column mb-4">
                    <div className="d-flex flex-column mb-2">
                        <span className="ama-typography-body bold mb-1">{oldestPage}</span>
                        <span className="ama-typography-body">{stats.oldestPage}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="ama-typography-body bold mb-1">{newestPage}</span>
                        <span className="ama-typography-body">{stats.recentPage}</span>
                    </div>
                </div>
                <div className="row fourth_row">
                    {stats.statsTable.map((stat, index) => {
                        const total = stats.statsTable[0]
                        const first = index === 0
                        return doubleRow ? percentageStats(stat, statsTitles[index], total, first, index) : normalExtraStats(stat, statsTitles[index], index)
                    })}
                </div>
            </div>
        </div>
    );
};

export { StatisticsHeader };
