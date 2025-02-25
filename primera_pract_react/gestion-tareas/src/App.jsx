import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.css';

/**
 * 
 *  useState -----> Lo que hace es permitir que un componente pueda guardar y actualizar datos (al estilo de una memoria interna del componente)
 */

//aqui por ejemplo la variable "tasks" es la variable que guarda el estado
// "setTasks" es la funcion que va a setear una tarea
//El useState([]) quiere decir que el codigo se ejecuta una sola vez, cuando el componente aparece


function App() {
  //const [tasks, setTasks] = useState([]);


	//aqui lo que estoy haciendo es usar el useState para que cuando el componente se "cargue" se cargue el localStorage con los datos qe tenga dentro
  const [tasks, setTasks] = useState(()=>{
	const tareasGuardadas = JSON.parse(localStorage.getItem("tareasGuardadas"))
	return tareasGuardadas || [];
  })


/**
 * "tareasCompletadas"->variable que guarda las tareasCompletada
 * setTareasCompletadas ->funcion que se encarga de setear las tareas que son completadas
 * ->useSate -> donde se define el valor inicial de "tareasCompletadas"
 */
  const [tareasCompletadas, setTareasCompletadas] = useState(()=>{

	const tareasCompletadasGuardadas = JSON.parse(localStorage.getItem("tareasCompletadas"));
	return tareasCompletadasGuardadas || [];
  })




  //aqiu con el useEffect lo que estoy haciendo es que cada vez que las tareas tengnan algun cambio se guarden en el localStorage
  useEffect(()=>{
	localStorage.setItem("tareasGuardadas", JSON.stringify(tasks))
  }, [tasks])


  useEffect(()=>{
	localStorage.setItem("tareasCompletadas", JSON.stringify(tareasCompletadas))
  }, [tareasCompletadas])


  



  const addTask = (text) => {
	setTasks([...tasks, { text, completed: false }]);
  };

  const deleteTask = (index) => {
	setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
	setTasks(tasks.map((task, i) =>
  	i === index ? { ...task, completed: !task.completed } : task
	));
  };

  const completarTask = (index) =>{
	const tareaCompletar = tasks[index];

	setTareasCompletadas([...tareasCompletadas, { ...tareaCompletar}]);

	//de la lista principal asi elimino la tarea completada
	setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
	<div className="app">
  	<h1>Gestión de Tareas - 2º DAW</h1>
  	<TaskForm onAddTask={addTask} />
  	<TaskList
    	tasks={tasks}
    	onDeleteTask={deleteTask}
    	onToggleTask={toggleTask}
		onCompletarTask={completarTask}
  	/>
	<h1>Tareas completadas</h1>
		<ul>
			{tareasCompletadas.map((tarea) =>(
				<li>
					<span>{tarea.text}</span>
				</li>
			))}
		</ul>
	</div>

	
  );
}

export default App;
