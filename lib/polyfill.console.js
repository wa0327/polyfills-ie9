var console = (window.console = window.console || {});
var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
];
methods.forEach(function (method) {
    if (console[method])
        console[method] = this.bind(console[method], console);
    else
        console[method] = function () {};
}, Function.prototype.call);

console.log('polyfill.console load completed!');
