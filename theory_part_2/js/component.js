function myComponent(startName = '') {
    return {

        name: startName,

        hello(name = '') {
            alert('hello ' + name );
        },

        sayMyName() {
            alert('Are you ' + this.name + '?');
            this.name = '';
        }

    }
}

function myComponent2(startName = '') {
    return {

        name: startName,

        hello(name = '') {
            alert('Hi ' + name );
        },

    }
}