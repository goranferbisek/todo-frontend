import classes from './Todo.module.css';

function Todo() {
    return (<>
        <div className={classes.todoCard}>
            <h2 className={classes.todoTitle}>Todo Title</h2>
            <p className={classes.todoDescription}>This is a description of the todo item.</p>
            <button className={classes.todoButton}>Complete</button>
        </div>
    </>);
}

export default Todo;