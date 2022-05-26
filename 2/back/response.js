module.exports = (status,message,res)=>{
  res.status(status).send({message:message})
}