// EXERCÍCIO 3

const tasks = [
    'Lavar a louça'
]

const taskTyped = process.argv[2] 

const newTask = (task) => {
    tasks.push(task)
    console.log('Tarefa adicionada com sucesso!')
    console.log('Tarefas:', tasks)    
}

newTask(taskTyped)