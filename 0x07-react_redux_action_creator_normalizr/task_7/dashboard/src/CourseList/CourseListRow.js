import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: '#deb5b545'
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab'
    },
    data: {
        padding: '5px'
    },
    th: {
        borderBlock: '1px solid gray'
    },
    textLeft: {
        textAlign: 'left'
    },
    rowChecked: {
        backgroundColor: '#e6e4e4'
    }
})

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const [isChecked, setChecked] = useState(false)

    return (
        <tr className={css(isHeader ? styles.headerRow : isChecked ? styles.rowChecked : styles.defaultRow)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2" className={css(styles.th, styles.data)}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={css(styles.th, styles.data, styles.textLeft)}>{textFirstCell}</th>
                        <th className={css(styles.th, styles.data, styles.textLeft)}>{textSecondCell}</th>
                    </>
                )) : (
                <>
                    <td className={css(styles.data)}>
                        <input onClick={() => setChecked(prev => !prev)} type="checkbox" />
                        {textFirstCell}
                    </td>
                    <td className={css(styles.data)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow;
