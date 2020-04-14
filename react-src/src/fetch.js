const fetch = require('node-fetch')

async function componentDidMount() {
    let result = await fetch(`http://localhost:7000/getrandomword`)
    result = await result.json()
        console.log(result)
}

componentDidMount()