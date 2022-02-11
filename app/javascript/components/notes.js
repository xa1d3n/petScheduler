return ({ SCHEDULE_TIMES?.entries()?.map(([time, pets]) => {
    <>
      <div>{time}</div>
      {pets.map(pet => <Pet pet={pet} />)}
    </div>
  })});

  {appointments && appointments?.map((appointment) => 
    <Pet pet={appointment?.pet} />
  )}