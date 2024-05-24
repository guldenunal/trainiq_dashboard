import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Dashboard() {

    const [dashdata, setData] = useState([]);

    useEffect(() => {
        fetch('https://demotrainiq.com/case/dashboard')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    var teams;
    dashdata.data ? teams = dashdata.data.teams : teams = []
    const listItems = teams.map(teams => <>
        <thead>
            <tr><th className="text-m font-weight-bold text-primary text-uppercase mb-1">{teams.title}</th></tr></thead>
        <tbody>
            <td style={{ width: 40 + '%' }}><div className="text-s font-weight-bold  mb-1 overflow-auto" >Description:</div>{teams.description}</td>
            <td><div className="text-s font-weight-bold mb-1">Score:</div>{teams.overall_score}</td>
            <td style={{ width: 60 + '%' }}><div className="overflow-auto text-s font-weight-bold mb-1 " >{teams.total_employee_count} Employees:</div>{teams.employees.map(employees =>

                <div className="row no-gutters align-items-center">
                    <td><div className="text-xs font-weight-bold text-danger text-uppercase mb-1">name:</div>{employees.name}</td>
                    <td><div className="text-xs font-weight-bold text-success text-uppercase mb-1">title:</div>{employees.title}</td>
                    <td><div className="text-xs font-weight-bold text-success text-uppercase mb-1">email:</div>{employees.email}</td>
                    <td><div className="text-xs font-weight-bold text-success text-uppercase mb-1">score:</div>{employees.current_score}</td>
                    <td><div className="text-xs font-weight-bold text-success text-uppercase mb-1">lessons taken:</div>{employees.lessons_taken}</td>
                    <td><div className="text-xs font-weight-bold text-success text-uppercase mb-1">skills:</div>{employees.skills_being_developed.map(skills_being_developed =>
                        <td>{skills_being_developed}</td>)}</td> </div>
            )} </td></tbody>
    </>
    );

    var skillsdev, topSkills;
    dashdata.data ? skillsdev = dashdata.data.skills_in_development : skillsdev = []
    const listSkillsDev = skillsdev.map(skillsdev =>
        <li>{skillsdev.skill}</li>);
    dashdata.data ? topSkills = dashdata.data.top_skills : topSkills = []
    const listTopSkills = topSkills.map(topSkills =>
        <li>{topSkills.skill}</li>);


    var inProgress, upcoming;
    dashdata.data ? inProgress = dashdata.data.in_progress_courses : inProgress = []
    const listInProgress = inProgress.map(inProgress => <>
        <li className="font-weight-bold text-primary">{inProgress.title}</li>
        <div><div className="text-info">Description: </div>{inProgress.description}</div>
        <div><div className="text-info">Assigned to: </div>{inProgress.assigned_to}</div>
        <div><div className="text-info">Due Date: </div>{inProgress.due_date}</div>
    </>);

    dashdata.data ? upcoming = dashdata.data.upcoming_courses : upcoming = []
    const listUpcoming = upcoming.map(upcoming => <>
        <li className="font-weight-bold text-primary">{upcoming.title}</li>
        <div><div className="text-info">Description: </div>{upcoming.description}</div>
        <div><div className="text-info">Assigned to: </div>{upcoming.assigned_to}</div>
        <div><div className="text-info">Due Date: </div>{upcoming.due_date}</div>
    </>);

    return (
        <div>
            <body id="page-top">

                {dashdata.data ? <>



                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">


                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/*  <!-- Page Heading --> */}
                            <nav class="navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    Dashboard
                                </a> <div className="col-4">
                                    <btn type="button" class="btn btn-outline-secondary ">Create New Team</btn> <h8></h8>
                                    <btn type="button" class="btn btn-secondary ">Add New Employee</btn>

                                </div>
                            </nav>

                        </div>

                        {/*  <!-- Content Row --> */}
                        <div className="row">

                            {/*  <!-- Total Employees --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Total Employees
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{dashdata.data.total_employees}</div>
                                                    </div>
                                                    <div className="col">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-user-alt fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Total Completed Courses --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Total Completed Courses  </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{dashdata.data.total_completed_courses}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-tasks fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Average Employee Score --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Average Employee Score</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800"> {dashdata.data.average_employee_score}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-percent fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*   <!-- Charts Row --> */}
                        <div className="row">
                            {/*   <!-- Activity Hours --> */}
                            <div className="col-xl-5 col-lg-4">
                                <div className="card shadow mb-4">
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-secondary">Activity Hours</h6>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body">

                                        <div className="chart-area" width="100%" height="100%">
                                            <BarChart
                                                width={500}
                                                height={300}
                                                data={dashdata.data.activity_hours}
                                                margin={{
                                                    top: 20,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="date" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="exams_completed" stackId="a" fill="#8884d8" />
                                                <Bar dataKey="lessons_taken" stackId="a" fill="#82ca9d" />
                                                <Bar dataKey="hours" fill="#ffc658" />
                                            </BarChart>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Pie Charts --> */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="card shadow mb-4">
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-secondary">Skills</h6>

                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body" width="100%" height="100%">
                                        <div className="pt-4 pb-2">
                                            <span
                                                className="float-right"><p style={{ color: '#8884d8' }}>Skills in Development</p>
                                                <ul className="text-xs">{listSkillsDev}</ul>
                                            </span>
                                            <PieChart width={200} height={200}
                                                margin={{
                                                    top: 5,
                                                    right: 10,
                                                    left: 10,
                                                    bottom: 10,
                                                }}>
                                                <Tooltip />

                                                <Pie dataKey="employees" data={dashdata.data.skills_in_development} nameKey="skill" cx={Screen} cy={Screen} innerRadius={40} outerRadius={80} fill="#8884d8" />
                                            </PieChart>
                                            <span
                                                className="float-left"><p style={{ color: '#82ca9d' }}>Top Skills</p>
                                                <ul className="text-xs">{listTopSkills}</ul>
                                            </span>
                                            <span
                                                className="float-right"> <PieChart width={200} height={200}
                                                    margin={{
                                                        top: 5,
                                                        right: 10,
                                                        left: 10,
                                                        bottom: 5,
                                                    }}>
                                                    <Tooltip />

                                                    <Pie dataKey="employees" data={dashdata.data.top_skills} nameKey="skill" cx={Screen} cy={Screen} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                                                </PieChart></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TOP EMPLOYEES */}
                        <h3 className='text-secondary text-center'>Top Employees</h3>
                        <div className='row'>

                            <div className='col-3'>
                                <div class="card text-white bg-secondary mb-3">
                                    <div class="card-header bg-secondary">{dashdata.data.top_employees[0].name}<span
                                        className="float-right">{dashdata.data.top_employees[0].current_score}</span></div>
                                    <div class="card-body">
                                        <p class="card-title">{dashdata.data.top_employees[0].title}</p>
                                        <p class="card-text">{dashdata.data.top_employees[0].email}<span
                                            className="float-right"><i className='far fa-address-card text-gray-100'></i></span></p>
                                    </div>
                                </div> </div>
                            <div className='col-3'>
                                <div class="card text-white bg-secondary mb-3">
                                    <div class="card-header bg-secondary">{dashdata.data.top_employees[1].name}<span
                                        className="float-right">{dashdata.data.top_employees[1].current_score}</span></div>
                                    <div class="card-body">
                                        <p class="card-title">{dashdata.data.top_employees[1].title}</p>
                                        <p class="card-text">{dashdata.data.top_employees[1].email}<span
                                            className="float-right"><i className='far fa-address-card text-gray-100'></i></span></p>
                                    </div> </div>
                            </div>
                            <div className='col-3'> <div class="card text-white bg-secondary mb-3">
                                <div class="card-header bg-secondary">{dashdata.data.top_employees[2].name}<span
                                    className="float-right">{dashdata.data.top_employees[2].current_score}</span></div>
                                <div class="card-body">
                                    <p class="card-title">{dashdata.data.top_employees[2].title}</p>
                                    <p class="card-text">{dashdata.data.top_employees[2].email} <span
                                        className="float-right"><i className='far fa-address-card text-gray-100'></i></span></p>
                                </div> </div>
                            </div>
                        </div>
                        {/*   <!-- Courses Row --> */}
                        <div className="row">

                            <div className="col-xl-5 col-lg-5">
                                <div className="card shadow mb-4" >
                                    <div className="card-header py-3" id="progress">
                                        <button className=" btn m-0 font-weight-bold text-secondary" data-toggle="collapse" data-target="#collapseProgress">In Progress Courses</button>
                                    </div>
                                    <div id="collapseProgress" class="collapse show" data-parent="#progress">
                                        <ul>{listInProgress}</ul>
                                    </div>
                                </div>
                            </div>



                            <div className="col-xl-5 col-lg-5">
                                <div className="card shadow mb-4" >
                                    <div className="card-header py-3" id="upcoming">
                                        <button className=" btn m-0 font-weight-bold text-secondary" data-toggle="collapse" data-target="#collapseUpcoming">Upcoming Courses</button>
                                    </div>
                                    <div id="collapseUpcoming" class="collapse show" data-parent="#upcoming">
                                        <ul>{listUpcoming}</ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* TEAMS */}
                        <div className="Teams" >
                            <div className="col">
                                <div className="card shadow mb-4" >
                                    <div className="card-header py-3" id="teams">
                                        <button className="btn m-0 font-weight-bold text-secondary" data-toggle="collapse" data-target="#collapseTeams" >Teams</button>
                                    </div>
                                    <div id="collapseTeams" class="collapse show" data-parent="#teams" >

                                        <table class="table table-bordered">{listItems}

                                        </table>




                                    </div>
                                </div>


                            </div>
                        </div>

                    </div> </> : <p>couldn't load the data</p>}
            </body>
        </div>
    )
}

export default Dashboard;
