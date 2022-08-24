const Abdominals = (props) => {
  return (
    <div className="abdominals-workouts">
      <div className="workout-info-all">
        <h1 className="workout-info">Workout Name: {props.workout_name}</h1>
        <img src={props.workout_gif} />
        <h3 className="workout-info">
          Main Muscles worked: {props.main_muscles}
        </h3>
        <h3 className="workout-info">
          Secondary Muscles worked: {props.secondary_muscles}
        </h3>
      </div>
    </div>
  )
}

export default Abdominals
