import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>dashboard data for the students</p>');
$('body').append('<button>click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
function updatecounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updatecounter, 500));


