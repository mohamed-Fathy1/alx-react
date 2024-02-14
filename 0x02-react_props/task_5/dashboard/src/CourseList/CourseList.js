import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
    return (
        <div className="App-body">
            <table id='CourseList'>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {listCourses.length !== 0 ? listCourses.map((course) => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                    )) : <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false} />}
                </tbody>
            </table>
        </div>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList;
