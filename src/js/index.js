/**
 * Created by M on 22.05.2018.
 */
import $ from 'jquery';
import sumTwo from './some.js';
console.log(sumTwo(2,22));
$(function () {
    $('h1').html('It works322!');
});
import '../css/style.css'
import '../less/main.less'
import '../../node_modules/@material/button/mdc-button.scss';
import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
