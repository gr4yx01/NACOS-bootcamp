let users = [
    {
        name: 'Justin',
        department: 'Computer science',
        level: 300
    },
    {
        name: 'ZA',
        department: 'Computer science',
        level: 200
    }
]

const getUsers = (req, res) => {
    console.log(users);
    res.json(users)
}

const createUser = (req, res) => {
    const body = req.body;
    users.push(body);
    res.json({
        message: 'User creation successful'
    }).status(201)
}

// http://localhost:4000/users/delight
// http://localhost:4000/users?name=Delight


const updateUser = (req, res) => {
    const { name } = req.params;
    const body = req.body;

    const index = users.findIndex((user) => user.name == name);

    users.splice(index, 1, {
        ...users[index],
        department: body.department,
        level: body.level
    })

    // users = users.map((user) => {
    //     return user.name == name ? 
    //         {
    //             ...user,
    //             department: body.department,
    //             level: body.level
    //         } : 
    //         user
    // })

    res.status(201).json({
        message: 'User successfully updated'
    })

    // const userToUpdate = users.filter((user) => user.name == name)
    console.log(name);
}

export {
    getUsers,
    createUser,
    updateUser
}