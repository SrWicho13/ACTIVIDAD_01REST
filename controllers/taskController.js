let tasks = [
    {id: 1,
     title:"Tarea 1",
     description:'Descripcion de la Tarea 1'
    },

     {id: 2,
        title:"Tarea 2",
        description:'Descripcion de la Tarea 2'
    },

    {id: 3,
        title:"Tarea 3",
        description:'Descripcion de la Tarea 3'
    }    
];

    function getAllTask(){
        return tasks;
    }

    function getTaskById(id) {
        return tasks.find(task => task.id === id);
    }

    function createTask(title,description){
        const newTask = {
            id: tasks.length + 1,
            title,
            description
        };
        tasks.push(newTask);
        return newTask;
    }


    function deleteTaskById(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1);
            return deletedTask[0];
        } else {
            return null;
        }
    }

    function updateTaskById(id, updatedData) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.title = updatedData.title || task.title;
            task.description = updatedData.description || task.description;
            return task;
        } else {
            return null;
        }
    }

//Conectarse a otros metodos    
    module.exports={
        getAllTask,
        getTaskById,
        createTask,
        deleteTaskById,
        updateTaskById
    }