module.exports =  {
    remainingDays(job){
        //calculo de tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
        
        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays) //dia de vencimento
        const dueDateInMs = createdDate.setDate(dueDay) //dia em millisegungos
    
        const timeDiffInMs = dueDateInMs - Date.now() //diferença do tempo em MS
    
        //transformar millisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    
        return dayDiff //restante de dias
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"] 
}