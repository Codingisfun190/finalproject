import './App.css'
// import Workout from './components/Workout'
import workouts from './data/workouts.json'
import Push from './components/Push'
import Pull from './components/Pull'
import Leg from './components/Leg'
import { useState } from 'react'

function App() {
  let pushArray = []
  let pullArray = []
  let legArray = []

  let [displayPush, setDisplayPush] = useState(false)
  let [displayPull, setDisplayPull] = useState(false)
  let [displayLeg, setDisplayLeg] = useState(false)

  const createWorkoutCategories = () => {
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].workout_category === 'push') {
        pushArray.push(workouts[i])
      } else if (workouts[i].workout_category === 'pull') {
        pullArray.push(workouts[i])
      } else if (workouts[i].workout_category === 'leg') {
        legArray.push(workouts[i])
      }
    }

    // console.log(pullArray)
  }

  createWorkoutCategories()

  function togglePush() {
    setDisplayPush(true)
    setDisplayPull(false)
    setDisplayLeg(false)
  }
  function togglePull() {
    setDisplayPush(false)
    setDisplayPull(true)
    setDisplayLeg(false)
  }
  function toggleLeg() {
    setDisplayPush(false)
    setDisplayPull(false)
    setDisplayLeg(true)
  }
  console.log(pushArray)
  return (
    <div>
      <h1>Push Pull Leg Workouts</h1>
      <button onClick={() => togglePush()}>Push</button>
      <button onClick={() => togglePull()}>Pull</button>
      <button onClick={() => toggleLeg()}>Leg</button>
      <div>
        {displayPush === true ? (
          <div>
            {pushArray.map((Workout) => (
              <div className="all-pull-workouts">
                <Push
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                  workout_category={Workout.workout_category}
                />
              </div>
            ))}
          </div>
        ) : (
          <h3></h3>
        )}
      </div>

      <div>
        {displayPull === true ? (
          <div>
            {pullArray.map((Workout) => (
              <div className="all-push-workouts">
                <Pull
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                  workout_category={Workout.workout_category}
                />
              </div>
            ))}
          </div>
        ) : (
          <h3></h3>
        )}
      </div>

      <div>
        {displayLeg === true ? (
          <div>
            {legArray.map((Workout) => (
              <div className="all-leg-workouts">
                <Push
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                  workout_category={Workout.workout_category}
                />
              </div>
            ))}
          </div>
        ) : (
          <h3></h3>
        )}
      </div>
    </div>

    // <div>
    //   <h1>Push Pull Leg Workouts</h1>
    //   {workouts.map((Workout) => (
    //     <div className="all-pull-workouts">
    //       <Push
    //         key={Workout.workout_id}
    //         workout_name={Workout.workout_name}
    //         workout_gif={Workout.workout_gif}
    //         main_muscles={Workout.main_muscles}
    //         secondary_muscles={Workout.secondary_muscles}
    //         workout_category={Workout.workout_category}
    //       />
    //     </div>
    //   ))}
    // </div>
  )
}

export default App

// push pull leg components
// map through them respectively
