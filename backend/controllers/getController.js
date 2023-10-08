// controller to handle the logic
const getGoals =  (req, res) => {
    res.status(200).json({ message: 'Get goals'})
}



module.exports = {
    getGoals,
}