import './App.css'
// import Workout from './components/Workout'
import workouts from './data/workouts.json'
import Push from './components/Push'
import Pull from './components/Pull'
import Leg from './components/Leg'
import Abdominals from './components/Abdominals'
import { useState } from 'react'

function App() {
  let pushArray = []
  let pullArray = []
  let legArray = []
  let abdominalsArray = []

  let [displayPush, setDisplayPush] = useState(false)
  let [displayPull, setDisplayPull] = useState(false)
  let [displayLeg, setDisplayLeg] = useState(false)
  let [displayAbdominals, setDisplayAbdominals] = useState(false)

  const createWorkoutCategories = () => {
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].workout_category === 'push') {
        pushArray.push(workouts[i])
      } else if (workouts[i].workout_category === 'pull') {
        pullArray.push(workouts[i])
      } else if (workouts[i].workout_category === 'leg') {
        legArray.push(workouts[i])
      } else if (workouts[i].workout_category === 'abdominals') {
        abdominalsArray.push(workouts[i])
      }

      // console.log(pullArray)
    }
  }

  createWorkoutCategories()

  function togglePush() {
    setDisplayPush(true)
    setDisplayPull(false)
    setDisplayLeg(false)
    setDisplayAbdominals(false)
  }
  function togglePull() {
    setDisplayPush(false)
    setDisplayPull(true)
    setDisplayLeg(false)
    setDisplayAbdominals(false)
  }
  function toggleLeg() {
    setDisplayPush(false)
    setDisplayPull(false)
    setDisplayLeg(true)
    setDisplayAbdominals(false)
  }
  function toggleAbdominals() {
    setDisplayPush(false)
    setDisplayPull(false)
    setDisplayLeg(false)
    setDisplayAbdominals(true)
  }

  // console.log(abdominalsArray)
  return (
    <div>
      <nav className="nav-bar">
        <a className="nav-home" href="http://172.22.19.122:3000/">
          Home
        </a>
        <a className="nav-signup" href="http://172.22.19.122:3000/">
          Sign Up!
        </a>
        <button className="nav-button">Sign In!</button>
      </nav>
      <h1>Push Pull Leg Workout Routine</h1>
      <p>
        Being physically active can improve your brain health, help manage
        weight, reduce the risk of disease, strengthen bone and muscle mass, and
        improve your ability to do everyday activities. According to the CDC,
        living a seditary lifestyle has profound negative impacts on your
        health. Adults who sit less and do any amount of moderate to vigorous
        physical activity gain some health benefits. Only a few lifestyle
        choices have as large an impact on your health as phyical activity.
      </p>
      <p>
        Having a set workout routine has many benefits to your overall health.
        This website will list some Push Pull Leg workouts, otherwise known as
        PPL workouts that you can incorporate into your routine. Included will
        be abdominal workouts you can incororate into your other workouts.{' '}
      </p>
      <p>
        It is always best practice to make sure to give your body a chance to
        recover from working out. There are several ways to go about performing
        the PPL workout, but make sure to give your body a chance to rest!
        Sleeping 8 hours a day is recommended for your body to repair the micro
        tears within the muscle fibers you sustain from working out.
      </p>
      <p>
        A common method use for PPL workouts are one day on, one day off. So if
        you start working out on monday, you do the Push workout, rest on
        tuesday, then do the Pull workout wednesday, rest on thursday, then do
        Leg workout on friday. This method is generally recommended for
        beginners to help minimize the chance for sustaining injuries. For more
        advanced lifters, doing a portion of the PPL workout everyday for 6 days
        straight while resting on the 7th day can be beneficial. If going by the
        PPL workout, no muscle group will be worked twice in a row, allowing for
        your body to repair the muscle fibers that got damaged.
      </p>
      <div id="button-click">
        <a href="#button-click">
          <button className="button" onClick={() => togglePush()}>
            Push
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => togglePull()}>
            Pull
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => toggleLeg()}>
            Leg
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => toggleAbdominals()}>
            Abdominals
          </button>
        </a>
      </div>
      <div>
        {displayPush && (
          <div>
            {pushArray.map((Workout) => (
              <div id="all-push-workouts">
                <Push
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                />
                <br></br>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {displayPull && (
          <div>
            {pullArray.map((Workout) => (
              <div id="all-pull-workouts">
                <Pull
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {displayLeg && (
          <div>
            {legArray.map((Workout) => (
              <div id="all-leg-workouts">
                <Leg
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {displayAbdominals && (
          <div>
            {abdominalsArray.map((Workout) => (
              <div id="all-abdominals-workouts">
                <Abdominals
                  key={Workout.id}
                  workout_name={Workout.workout_name}
                  workout_gif={Workout.workout_gif}
                  main_muscles={Workout.main_muscles}
                  secondary_muscles={Workout.secondary_muscles}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <footer className="footer-bar">
        <a className="footer-href" href="www.gmail.com">
          Contact Me!
        </a>
      </footer>
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
