import React, { useState } from 'react'
// import { useFetch } from '../hooks/useFetch'
import './WorkoutForm.css'

import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext()
  const {user}=useAuthContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user){
      alert("User must be logged in to Add workouts..")
      return
    }

    const workout = { title, load, reps }

    const response = await fetch('/api/workout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(workout),
    })


    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      } else {
        setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        setEmptyFields([])
        console.log('New workout added', json)
        dispatch({ type: 'CREATE_WORKOUT', payload: json })
      }
  }

  return (
    <div className='workoutForm'>
      <form onSubmit={handleSubmit}>
        <h2>Create New Workouts</h2>
        <label>
          <span>Exercise Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className={emptyFields.includes('title') ? 'error' : ''}
          />
        </label>
        <label>
          <span>Load (in kg):</span>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            required
            className={emptyFields.includes('title') ? 'error' : ''}
          />
        </label>
        <label>
          <span>Reps:</span>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            required
            className={emptyFields.includes('title') ? 'error' : ''}
          />
        </label>
        <button type="submit">Add Workout</button>
			{error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm