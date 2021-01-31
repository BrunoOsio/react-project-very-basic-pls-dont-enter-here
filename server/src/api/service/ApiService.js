const Friend = require("../../models/Friend")

exports.createData = async (req, res) => {
    const data = {
        name: req.body.name,
        age: req.body.age
    }

    const newFriend = new Friend(data)

    await newFriend.save().then(() => {
        console.log("created friend")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
    });
}

exports.readData = async (req, res) => {
    Friend.find({}, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

exports.updateData = async (req, res) => {
    const data = {
        id: req.params.id,
        name: req.body.name,
        age: req.body.age,
    }

    const oldData = {
        name: req.body.oldName,
        age: req.body.oldAge
    }

    console.log(data.name)
    console.log(data.age);

    if(!data.name){
        data.name = oldData.name
    }

    if(!data.age){
        data.age = oldData.age
    }

    try {
        await Friend.findById(data.id, (err, newFriend)=>{
            newFriend.name = data.name
            newFriend.age = data.age
            newFriend.save().then(()=>{
            })
        })
    } catch (error) {
        console.log(error);
    }

    console.log("updated")
    res.status(200).send(data)


}

exports.deleteData = async (req, res) =>{
    const data = {
        id: req.params.id
    }

    await Friend.findByIdAndRemove(data.id).exec()

    res.send(data)
}