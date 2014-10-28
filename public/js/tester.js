
function createServerTask(task, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/tasks');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('readystatechange', function () {
        if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 ) {
                var obj = JSON.parse(xhr.responseText);
                // console.log(obj);
                callback(obj);
            }
        }
    });
    xhr.send(JSON.stringify(task));
}

// test code for createServer
createServerTask({
    description: 'Meeting 22',
    utc: (new Date()).toUTCString()
}, function (obj) {
    console.log(obj);
});

//todo: provide functionality for tester
/*
tester.expectAsync(createServerTask({
    description: 'Meeting 22',
    utc: (new Date()).toUTCString()
}, function (obj) {

} )).toBe({
    message: 'IMPL_101'
});

// tester code

var tester = {
    expectAsync: function () {
        return this;
    },
    toBe: function () {

    }
};*/



