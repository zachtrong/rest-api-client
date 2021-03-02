const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fetch = require('node-fetch')

DATA = `[
    {
        "name": "Trần Trung Thành",
        "dob": "2000-09-18",
        "student-id": 18021174,
        "gender": "Male",
        "email": "18021174@vnu.edu.vn",
        "contacts": [
            {
                "name": "Trần Văn ABC",
                "address": "Đông Anh, Hà Nội"
            },
            {
                "name": "Nguyễn Thị XYZ",
                "address": "Đông Anh, Hà Nội"
            }
        ]
    },
    {
        "name": "Nguyen Tien Trong",
        "dob": "2000-09-18",
        "student-id": 18021174,
        "gender": "Male",
        "email": "18021174@vnu.edu.vn",
        "contacts": [
            {
                "name": "Trần Văn ABC",
                "address": "Đông Anh, Hà Nội"
            },
            {
                "name": "Nguyễn Thị XYZ",
                "address": "Đông Anh, Hà Nội"
            }
        ]
    }
]`


function getAll(cb) {
    fetch('https://google.com')
        .then(res => {
            cb(JSON.parse(DATA))
        })
}

function get(id, cb) {
    fetch('https://google.com')
        .then(res => {
            cb(JSON.parse(DATA)[id])
        })
}



function prompt() {
    console.log('-------------------------------------')
    console.log('Select options:')
    console.log('[1] Get all users')
    console.log('[2] Get user by id')
    console.log('-------------------------------------')
    readline.question('', option => {
        if (option === '1') {
            getAll((data) => {
                console.log(data)
                prompt()
            })
        } else if (option === '2') {
            readline.question('Input user id: ', value => {
                get(parseInt(value, 10), (data) => {
                    console.log(data)
                    prompt()
                })
            })
        }
    })
}

prompt()
