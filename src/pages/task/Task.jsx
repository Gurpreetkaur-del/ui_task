import React from "react";
import RaduisChart from "./RaduisChart";
import StackChart from "./StackChart";

const Task = () => {
    return (
        <div className="wrapper-common-pg">
            <div className="row">
                <div className="col-md-7">
                    <div className="task-common-header">
                        <h4>Task</h4>
                        <div className="task-common-right-item">
                            <button className="btn-new-task">+ New Task</button>
                            <div className="wrap-select-item-bx">
                                <select className="select-item-bx">
                                    <option>All Task</option>
                                    <option>Monthly Task</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card task-card pink-task-card">
                        <div>
                            <div className="task-card-header">
                                <h6 className="heading18">
                                    Review development team imlementations
                                </h6>
                                <button className="btn-edit">edit</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div className="task-card-header task-card-footer">
                                <button className="btn-view-task">
                                    View Task
                                </button>
                                <button className="btn-complete btn-panding">pending</button>
                            </div>
                        </div>
                    </div>
                    <div className="card task-card">
                        <div>
                            <div className="task-card-header">
                                <h6 className="heading18">
                                    Review development team imlementations
                                </h6>
                                <button className="btn-edit">edit</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div className="task-card-header task-card-footer">
                                <button className="btn-view-task">
                                    View Task
                                </button>
                                <button className="btn-complete">Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="wrapper-card-card">
                    <div className="task-common-header">
                        <h4>Process Monitoring</h4>
                        <div className="task-common-right-item">
                            <div className="wrap-select-item-bx">
                                <select className="select-item-bx">
                                    <option>Today</option>
                                    <option>Tommorrow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-chart-bx">
                        <RaduisChart />
                    </div>
                    </div>
                    <div className="wrapper-card-card">
                    <div className="task-common-header">
                        <h4>Process</h4>
                        <div className="task-common-right-item">
                            <div className="wrap-select-item-bx">
                                <select className="select-item-bx">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-chart-bx">
                        <StackChart />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task;