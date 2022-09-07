const chooseStations = function (stations) {

  let goodStation = []

  for (const station of stations) {
    const capacity = station [1]

    if (capacity >= 20) { 
      const type = station [2]

      if (type === "school" || type === "community centre") {
        goodStation.push(station[0])
      }
    }
  }
  return goodStation;
}

console.log(chooseStations);