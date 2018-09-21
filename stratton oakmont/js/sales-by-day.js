var canvas = document.getElementById("sales-by-day");
var jsonfile = {
    "jsonarray": [{
        "day": "Mon",
        "sales": 12
    }, {
        "day": "Tues",
        "sales": 14
    }, {
        "day": "Wed",
        "sales": 19
    }, {
        "day": "Thurs",
        "sales": 24
    }, {
        "day": "Fri",
        "sales": 17
    }, {
        "day": "Sat",
        "sales": 0
    }, {
        "day": "Sun",
        "sales": 1
    }]
};

var labels = jsonfile.jsonarray.map(function (e) {
    return e.day;
});
var data = jsonfile.jsonarray.map(function (e) {
    return e.sales;
});;

var ctx = canvas.getContext('2d');
var config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Sales in thousands (R)',
            data: data,
            backgroundColor: '$gold'
        }]
    }
};

var chart = new Chart(ctx, config);