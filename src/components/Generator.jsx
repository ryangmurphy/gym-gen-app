import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exercises'
import Button from './Button'

function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-red-600'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const { muscles, setMuscles, workoutPlan, setWorkoutPlan, goal, setGoal, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)


    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (workoutPlan !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

    return (
      <SectionWrapper
        id={"generate"}
        header={"generate your workout"}
        title={["Time", "for a", "PUMP"]}
      >
        <Header
          index={"01"}
          title={"Pick your workoutPlan"}
          description={"Select the workout you wish to endure."}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-8">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                onClick={() => {
                  setMuscles([]);
                  setWorkoutPlan(type);
                }}
                className={
                  "bg-slate-950 border duration-200 px-4 hover:text-red-600 py-3 rounded-lg " +
                  (type === workoutPlan
                    ? " border-green-600 border-2"
                    : " border-red-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        
        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div className="bg-slate-950  border border-solid border-red-400 rounded-lg flex flex-col w-1/2 mx-auto">
          <button
            onClick={toggleModal}
            className="relative p-3 flex items-center justify-center"
          >
            <p className="capitalize">
              {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
            </p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {showModal && (
            <div className="flex flex-col px-3 pb-3">
              {(workoutPlan === "individual"
                ? WORKOUTS[workoutPlan]
                : Object.keys(WORKOUTS[workoutPlan])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    key={muscleGroupIndex}
                    className={
                      "hover:text-red-400 duration-200 " +
                      (muscles.includes(muscleGroup) ? " text-red-400" : " ")
                    }
                  >
                    <p className="uppercase">
                      {muscleGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate objective."}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-16">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => {
                  setGoal(scheme);
                }}
                className={
                  "bg-slate-950 border duration-200 hover:border-red-600 py-3 rounded-lg px-4 " +
                  (scheme === goal
                    ? " border-green-600 border-2"
                    : " border-red-400")
                }
                key={schemeIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <Button
          func={updateWorkout}
          text={"Formulate"}
          className="padding-4 my-8"
        ></Button>
      </SectionWrapper>
    );
}
