function myComponent(startName = '') {
    return {

        myName: startName,

        hello() {
            alert('Hello ' + this.myName);
        },

        hello_param(hello_name = '') {
            alert('Hello ' + hello_name);
        },
        
        sayMyName() {
            if (this.myName != '') {
              alert('Are you ' + this.myName + '?');
              this.myName = '';
            }
            
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