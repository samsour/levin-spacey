import babelpolyfill from 'babel-polyfill';
import $ from 'jquery';
import Game from './Game';

window.$ = window.jQuery = $;

$(document).ready(function() {
    
    let game = new Game();

})