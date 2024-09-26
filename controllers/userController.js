const { where } = require('sequelize');
const user = require('../models/user')

class userController {
    static async create(req, res) {
        try {
            console.log(`in create function.... ${JSON.stringify(req.body)}`)
            const { f_name, l_name, email } = req.body
            const data = await user.create({
                firstName: f_name,
                lastName: l_name,
                email: email
            });
            res.send({ 'message': 'Data stored successfully', 'code': 202, 'data': data })

        } catch (error) {
            res.send({ 'message': `Authentication error because ${error}` })
        }
    }

    static async edit(req, res){
        try {
            const id = req.body.id
            const data = await user.findByPk(id)
            if(data){
                res.send({'message': 'Data has been Sent...', code: 200, data: data})
            }else{
                res.send({'message': 'Id not available...', code: 204})
            }
        } catch (error) {
            res.send({'message': 'Error in Edit function.....', code: 405, 'error': error})
        }
    }

    static async update(req, res){
        try {
            const id = req.body.id;
            console.log(`in update function..... ${id}`)
            const firstName = req.body.f_name
            const lastName = req.body.l_name
            const email = req.body.email
            const data = await user.update({ firstName: firstName, lastName: lastName, email: email }, {where:{id: id}})
            if(data){
                // await data.update(data)
                // const val = await user.findOne({where: {id: id}})
                const val = await user.findByPk(id)
                res.send({'message': 'Data has been submitted...', code: 200, data: val})
            }else{
                res.send({'message': 'Id not available...', code: 204})
            }
        } catch (error) {
            res.send({'message': 'Error in Update function.....', code: 405, 'error': error})
        }
    }

    static async delete(req, res){
        try {
            const id = req.body.id
            const data = await user.findByPk(id)
            if(data){
                // await data.update(data)
                // const val = await user.findOne({where: {id: id}})
                const val = await user.destroy({where:{id:id}})
                res.send({'message': 'Data has been deleted...', code: 200, data: val})
            }else{
                res.send({'message': 'Id not available...', code: 204})
            }
        } catch (error) {
            res.send({'message': 'Error in Delete function.....', code: 405, 'error': error})
        }
    }
}

module.exports = userController