let user = prompt("Enter for Snake: S, Water: W or Gun: G")
let cpuI = Math.floor(Math.random() * 3);
let Computer = ["S", "W", "G"][cpuI]

const match = (Computer, user)=>{
  if(Computer === user){
    return "Nobody"
  }
  else if(Computer === "S" && user==="W"){
    return "cpu"
  }
  else if(Computer === "S" && user==="G"){
    return "user"
  }
  else if(Computer === "G" && user==="W"){
    return "user"
  }
  else if(Computer === "G" && user==="S"){
    return "cpu"
  }
  else if(Computer === "W" && user==="S"){
    return "user"
  }
  else if(Computer === "W" && user==="G"){
    return "cpu"
  }
}
let result = match(Computer, user)
document.write(`Computer:${Computer} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )