

const getUsers = (req, res)=>{
    res.status(500).json({
        "message":"home page"
    });
}

const postUsers = (req, res)=>{
    res.status(500).json({
        "message":"post page"
    });
}

const putUsers = (req, res)=>{
    res.status(500).json({
        "message":"put page"
    });
}

const deleteUsers = (req, res)=>{
    res.status(500).json({
        "message":"delete page"
    });
}

const patchUsers = (req, res)=>{
    res.status(500).json({
        "message":"patch page"
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}