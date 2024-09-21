const getUsers = (req, res) => {
    res.json([
        {
            name: 'Henry',
            age: 30,
            email: 'hoyx0101@gmail.com'
        }
    ])
}

export { 
    getUsers
}