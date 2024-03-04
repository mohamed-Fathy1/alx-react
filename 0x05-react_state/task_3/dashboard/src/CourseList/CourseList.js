import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    appBody: {
        padding: 'calc(2rem + 2vw)',
        minHeight: '60vh',
        '@media (max-width: 768px)': {
            height: '40vh',
        },
    },
    table: {
        width: '100%',
        maxWidth: '60rem',
        borderCollapse: 'collapse',
        margin: '0 auto',
        marginTop: '2rem',
        border: '1px solid gray',
    },
    tableRowWithSecondChild: {
        '&:nth-child(2) td': {
            textAlign: 'left',
        },
    },
    tableCell: {
        padding: '5px',
        border: '1px solid gray',
    },
    tableHeader: {
        border: '1px solid gray',
    },
});
const CourseList = ({ listCourses }) => {
    return (
        <div className={css(styles.appBody)}>
            <table id='CourseList' className={css(styles.table)}>
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
